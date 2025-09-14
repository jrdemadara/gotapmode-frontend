<template>
  <div class="min-h-svh flex flex-col items-center px-6 sm:px-8 pb-safe pt-20">
    <div class="text-center mb-2">
      <img class="w-14 h-14 mx-auto mb-1.5" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-xl sm:text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-0.5 text-xs sm:text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md sm:max-w-xl bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7">
      <div class="text-center mb-3 sm:mb-4">
        <h2 class="text-base sm:text-lg font-bold">{{ hasSavedPhoto ? 'Update Profile Photo' : 'Add Profile Photo' }}</h2>
        <p class="text-xs sm:text-sm opacity-70">Click the circle below to choose an image (max 5MB)</p>
      </div>

      <div class="flex items-center justify-center my-4 sm:my-6">
        <label for="profile-pic" class="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
          <input id="profile-pic" name="profile-pic" type="file" accept="image/*" class="hidden" @change="onPick" />
          <img v-if="preview" :src="preview" class="w-full h-full object-cover" />
          <span v-else class="text-xs opacity-70">Click to upload</span>
        </label>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end gap-2 sm:gap-3">
        <button class="px-4 h-10 sm:h-11 rounded-lg border border-gray-300 hover:bg-gray-50" @click="goBack">Cancel</button>
        <button :disabled="!file || saving" class="px-5 h-10 sm:h-11 rounded-lg bg-black text-white font-semibold disabled:opacity-50" @click="upload">{{ saving ? 'Saving…' : 'Save' }}</button>
      </div>
    </section>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, http } from '../config/api'
import { processProfileImage } from '../utils/imageUtils'

const router = useRouter()
const file = ref(null)
const preview = ref('')
const hasSavedPhoto = ref(false)
const saving = ref(false)

onMounted(async () => {
  try {
    // Load current picture for preview if available
    const pr = await api.get('/card-users/profile')
    if (pr?.profile_pic) {
      preview.value = processProfileImage(pr.profile_pic)
      hasSavedPhoto.value = true
    }
  } catch {}
})

function onPick(e) {
  const f = e.target.files?.[0]
  if (!f) return
  if (!/^image\//.test(f.type)) {
    alert('Please choose a valid image file.')
    e.target.value = ''
    return
  }
  if (f.size > 5 * 1024 * 1024) {
    alert('Image is too large. Max 5MB allowed.')
    e.target.value = ''
    return
  }
  file.value = f
  preview.value = URL.createObjectURL(f)
}

async function upload() {
  if (!file.value) return
  saving.value = true
  try {
    const fd = new FormData()
    fd.append('profile_pic_file', file.value)
    const resp = await http.post('/card-users/profile/picture', fd)
    try { console.log('Upload logs:', resp?.data?.logs || resp?.logs) } catch {}
    hasSavedPhoto.value = true
    router.push({ name: 'dashboard' })
  } catch (err) {
    console.error('Profile photo upload error:', err)
    
    // Enhanced error handling with specific messages for different error types
    let errorMessage = 'Upload failed. Please try again.'
    
    if (err?.response?.data) {
      const errorData = err.response.data
      const errorType = errorData.error_type
      
      switch (errorType) {
        case 'directory_creation_failed':
          errorMessage = 'Unable to create storage folder. Please contact support for assistance.'
          break
        case 'permission_denied':
          errorMessage = 'Permission denied. Unable to save the image. Please contact support.'
          break
        case 'storage_full':
        case 'disk_full':
          errorMessage = 'Server storage is full. Please contact support.'
          break
        case 'file_save_failed':
          errorMessage = 'Failed to save the image file. Please try again.'
          break
        default:
          errorMessage = errorData.message || 'Upload failed. Please try again.'
      }
      
      // Log detailed error information for debugging
      if (errorData.logs) {
        console.log('Upload error logs:', errorData.logs)
      }
    } else if (err?.response?.status === 413) {
      errorMessage = 'Image file is too large. Please choose a smaller image (max 5MB).'
    } else if (err?.response?.status === 422) {
      errorMessage = 'Invalid image format. Please choose a valid image file (JPG, PNG, GIF, WebP).'
    } else if (err?.response?.status === 500) {
      errorMessage = 'Server error occurred. Please try again later.'
    } else if (err?.message?.includes('Network Error') || err?.code === 'ERR_NETWORK') {
      errorMessage = 'Network error. Please check your connection and try again.'
    }
    
    alert(errorMessage)
  } finally {
    saving.value = false
  }
}

function goBack() {
  router.back()
}
</script>

<style scoped></style>



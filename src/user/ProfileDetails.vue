<template>
  <div class="min-h-svh flex flex-col items-center gap-4 px-6 pb-safe pt-5">
    <div class="text-center mt-4">
      <img class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-0 mt-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="-mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md">
      <div class="text-center mb-2">
        <h2 class="text-lg font-extrabold">Let's continue setting up profile!</h2>
        <p class="text-xs opacity-80">You can always change these details<br/>in your account page</p>
      </div>

      <!-- Profile photo at top -->
      <div class="flex items-center justify-center mb-3">
        <label for="profile-pic" class="w-28 h-28 rounded-full border border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
          <input id="profile-pic" name="profile-pic" type="file" accept="image/*" class="hidden" @change="onPick" />
          <img v-if="profilePicPreview" :src="profilePicPreview" class="w-full h-full object-cover" />
          <span v-else class="text-xs opacity-70">Click to upload</span>
        </label>
      </div>
      <div class="flex items-center justify-center mb-2"></div>

      <form class="grid gap-2" @submit.prevent="onSubmit">
        <div>
          <label for="bio" class="block text-xs font-medium mb-1 opacity-80">Profile Bio</label>
          <textarea id="bio" name="bio" v-model.trim="bio" rows="2" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Tell the online community how awesome you are!"></textarea>
        </div>
        <div>
          <label for="company" class="block text-xs font-medium mb-1 opacity-80">Company/Organization</label>
          <input id="company" name="company" v-model.trim="company" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="Your company or organization" />
        </div>
        <div>
          <label for="position" class="block text-xs font-medium mb-1 opacity-80">Position/Job Title</label>
          <input id="position" name="position" v-model.trim="position" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="Your job title or position" />
        </div>
        <div>
          <label for="companynumber" class="block text-xs font-medium mb-1 opacity-80">Company/Organization Tel. No. / Mobile No.</label>
          <input id="companynumber" name="companynumber" v-model.trim="companynumber" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="e.g. +1 555 123 4567" />
        </div>
        <div>
          <label for="companyemail" class="block text-xs font-medium mb-1 opacity-80">Company/Organization Email Address</label>
          <input id="companyemail" name="companyemail" v-model.trim="companyemail" type="email" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="name@company.com" />
        </div>
        <div>
          <label for="companyadress" class="block text-xs font-medium mb-1 opacity-80">Company/Organization Address</label>
          <input id="companyadress" name="companyadress" v-model.trim="companyadress" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="Street, City, State / Region" />
        </div>

        <button type="submit" :disabled="loading" class="mt-4 h-12 rounded-lg w-full bg-primary text-white font-semibold mb-1">Finish setting up My Profile</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, http } from '../config/api'
import { processProfileImage } from '../utils/imageUtils'

const userId = ref(null)
// Profile photo
const profilePicFile = ref(null)
const profilePicPreview = ref('')
const bio = ref('')
const company = ref('')
const position = ref('')
const companynumber = ref('')
const companyemail = ref('')
const companyadress = ref('')
const loading = ref(false)
const savingPhoto = ref(false)
const router = useRouter()

onMounted(() => {
  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
  } catch {}
  // Load current profile pic for preview
  ;(async () => {
    try {
      const pr = await api.get('/card-users/profile')
      if (pr?.profile_pic) {
        profilePicPreview.value = processProfileImage(pr.profile_pic)
      }
    } catch {}
  })()
})

function onPick(e) {
  const f = e.target.files?.[0]
  if (!f) return
  if (!/^image\//.test(f.type)) {
    alert('Please choose a valid image file.')
    e.target.value = ''
    return
  }
  // Backend limit is 2MB (max:2048 in validation)
  if (f.size > 2 * 1024 * 1024) {
    alert('Image is too large. Max 2MB allowed.')
    e.target.value = ''
    return
  }
  profilePicFile.value = f
  profilePicPreview.value = URL.createObjectURL(f)
}

async function uploadPhoto() {
  if (!profilePicFile.value) return
  savingPhoto.value = true
  try {
    const fd = new FormData()
    fd.append('profile_pic_file', profilePicFile.value)
    const resp = await http.post('/card-users/profile/picture', fd)
    const url = resp?.data?.profile_pic_url || processProfileImage(resp?.data?.profile_pic || '')
    if (url) {
      profilePicPreview.value = url
    }
    profilePicFile.value = null
    alert('Profile photo updated.')
  } catch (err) {
    let errorMessage = 'Upload failed. Please try again.'
    if (err?.response?.status === 422) {
      errorMessage = 'Invalid image. Use JPG, PNG, GIF, or WebP up to 2MB.'
    } else if (err?.response?.status === 413) {
      errorMessage = 'Image too large. Max size is 2MB.'
    } else if (err?.response?.status === 500) {
      errorMessage = err?.response?.data?.message || 'Server error. Please try again later.'
    }
    alert(errorMessage)
  } finally {
    savingPhoto.value = false
  }
}

async function onSubmit() {
  loading.value = true
  try {
    // If a new photo was selected, upload it first
    if (profilePicFile.value) {
      const fd = new FormData()
      fd.append('profile_pic_file', profilePicFile.value)
      const resp = await http.post('/card-users/profile/picture', fd)
      const url = resp?.data?.profile_pic_url || processProfileImage(resp?.data?.profile_pic || '')
      if (url) {
        profilePicPreview.value = url
      }
      profilePicFile.value = null
    }
    // Save profile data using JSON API
    // Helper function to convert empty strings to null
    const emptyToNull = (value) => {
      const trimmed = value.trim()
      return trimmed === '' ? null : trimmed
    }
    
    const profileData = {
      bio: emptyToNull(bio.value),
      company: emptyToNull(company.value),
      position: emptyToNull(position.value),
      companynumber: emptyToNull(companynumber.value),
      companyemail: emptyToNull(companyemail.value),
      companyadress: emptyToNull(companyadress.value),
    }
    
    await api.post('/card-users/profile', profileData)
    router.push({ name: 'dashboard' })
  } catch (err) {
    console.error('Error saving profile:', err)
    
    // Enhanced error handling
    if (err.response?.data?.message) {
      alert('Failed to save profile: ' + err.response.data.message)
    } else {
      alert('Failed to save profile: ' + (err.message || 'Unknown error'))
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
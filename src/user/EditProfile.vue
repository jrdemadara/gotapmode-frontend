<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-6 sm:px-8 pb-safe pt-24">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Edit Profile</h1>
      <p class="-mt-1 text-sm opacity-70">Update your personal info and company details</p>
    </div>

    <section class="w-full max-w-2xl bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7">
      <!-- Cover photo upload (moved to top) -->
      <div class="mb-5">
        <label for="cover-pic" class="block text-xs font-medium mb-1 opacity-80">Cover Photo</label>
        <div class="relative rounded-xl overflow-hidden border border-gray-300 bg-gray-50 h-40 sm:h-48 flex items-center justify-center">
          <img v-if="coverPicPreview" :src="coverPicPreview" class="absolute inset-0 w-full h-full object-cover"/>
          <input id="cover-pic" name="cover-pic" type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="onPickCover" />
          <span v-if="!coverPicPreview" class="text-xs opacity-70">Click to upload cover</span>
        </div>
      </div>
      <!-- Profile photo -->
      <div class="flex items-center justify-center mb-5">
        <label for="profile-pic" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
          <input id="profile-pic" name="profile-pic" type="file" accept="image/*" class="hidden" @change="onPick" />
          <img v-if="profilePicPreview" :src="profilePicPreview" class="w-full h-full object-cover" />
          <span v-else class="text-xs opacity-70">Click to upload</span>
        </label>
      </div>

      <!-- Full name -->
      <div class="grid sm:grid-cols-3 gap-3">
        <div>
          <label for="first-edit" class="block text-xs font-medium mb-1 opacity-80">First name</label>
          <input id="first-edit" name="first-edit" v-model.trim="first" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="middle-edit" class="block text-xs font-medium mb-1 opacity-80">Middle name</label>
          <input id="middle-edit" name="middle-edit" v-model.trim="middle" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="last-edit" class="block text-xs font-medium mb-1 opacity-80">Last name</label>
          <input id="last-edit" name="last-edit" v-model.trim="last" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
      </div>

      <!-- Bio & company -->
      <div class="mt-5 grid gap-3">
        <div>
          <label for="bio-edit" class="block text-xs font-medium mb-1 opacity-80">Profile Bio</label>
          <textarea id="bio-edit" name="bio-edit" v-model.trim="bio" rows="3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" placeholder="Tell something about you"></textarea>
        </div>
        <div>
          <label for="company-edit" class="block text-xs font-medium mb-1 opacity-80">Company / Organization</label>
          <input id="company-edit" name="company-edit" v-model.trim="company" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="position-edit" class="block text-xs font-medium mb-1 opacity-80">Position / Job Title</label>
          <input id="position-edit" name="position-edit" v-model.trim="position" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="companynumber-edit" class="block text-xs font-medium mb-1 opacity-80">Company Tel. / Mobile No.</label>
          <input id="companynumber-edit" name="companynumber-edit" v-model.trim="companynumber" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="companyemail-edit" class="block text-xs font-medium mb-1 opacity-80">Company Email Address</label>
          <input id="companyemail-edit" name="companyemail-edit" v-model.trim="companyemail" type="email" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
        <div>
          <label for="companyadress-edit" class="block text-xs font-medium mb-1 opacity-80">Company Address</label>
          <input id="companyadress-edit" name="companyadress-edit" v-model.trim="companyadress" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm" />
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-3">
        <button class="px-4 h-11 rounded-lg border border-gray-300" @click="goBack">Cancel</button>
        <button :disabled="saving" class="px-5 h-11 rounded-lg bg-black text-white font-semibold disabled:opacity-50" @click="onSave">{{ saving ? 'Saving…' : 'Save changes' }}</button>
      </div>
    </section>

  </div>
  
  <!-- CropperJS modal -->
  <div v-if="showCropper" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-safe">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-2 sm:mx-4 max-h-[85vh] sm:max-h-[92vh] overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
        <h3 class="text-lg font-bold text-gray-900">{{ cropMode === 'avatar' ? 'Crop Profile Picture' : 'Crop Cover Photo' }}</h3>
        <button @click="closeCropper" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <!-- Toolbar -->
      <div class="px-3 sm:px-4 pt-3 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 border-b border-gray-100 flex-shrink-0">
        <div class="w-full sm:w-auto flex items-center justify-center gap-2">
          <button @click="resetCropper" class="h-8 sm:h-9 px-2 sm:px-3 rounded-md border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm">Reset</button>
          <button v-if="cropMode==='cover'" @click="rotateLeft" class="h-8 sm:h-9 px-2 sm:px-3 rounded-md border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm">Rotate Left</button>
          <button v-if="cropMode==='cover'" @click="rotateRight" class="h-8 sm:h-9 px-2 sm:px-3 rounded-md border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm">Rotate Right</button>
        </div>
        <div v-if="cropMode==='cover'" class="w-full sm:w-auto flex items-center justify-center sm:ml-auto gap-1 sm:gap-2">
          <span class="text-[10px] sm:text-xs text-gray-500 mr-1">Aspect</span>
          <button @click="setAspect(16/9)" :class="aspectBtnClass(16/9)" class="h-8 px-2 rounded-md border text-[10px] sm:text-xs">16:9</button>
          <button @click="setAspect(4/3)" :class="aspectBtnClass(4/3)" class="h-8 px-2 rounded-md border text-[10px] sm:text-xs">4:3</button>
          <button @click="setAspect(1)" :class="aspectBtnClass(1)" class="h-8 px-2 rounded-md border text-[10px] sm:text-xs">1:1</button>
          <button @click="setAspect(NaN)" :class="aspectBtnClass(NaN)" class="h-8 px-2 rounded-md border text-[10px] sm:text-xs">Free</button>
        </div>
      </div>
      <!-- Cropper Container -->
      <div class="p-3 sm:p-4 flex-1 min-h-0 flex flex-col">
        <div class="relative w-full overflow-hidden bg-gray-50 rounded-xl border border-gray-200 flex-1 min-h-[280px] max-h-[50vh] sm:max-h-[420px]">
          <img v-if="cropImageSrc" :src="cropImageSrc" ref="cropperRef" class="w-full h-full" />
        </div>
        <p class="mt-2 text-[11px] sm:text-xs text-gray-500 text-center flex-shrink-0">Drag to move. Use buttons to reset/rotate. {{ cropMode==='avatar' ? 'Circular area will be saved.' : 'Rectangular area will be saved.' }}</p>
      </div>
      <!-- Footer -->
      <div class="flex items-center justify-end gap-2 sm:gap-3 p-3 sm:p-4 border-t border-gray-200 flex-shrink-0">
        <button @click="closeCropper" class="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          Cancel
        </button>
        <button @click="applyCropper" class="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
          Apply Crop
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { api, http, userApi } from '../config/api'
import { processProfileImage } from '../utils/imageUtils'
import Cropper from 'cropperjs/dist/cropper.esm.js'
import 'cropperjs/dist/cropper.css'

// Router
const router = useRouter()

// Core state
const userId = ref(null)
const saving = ref(false)

// Form fields
const first = ref('')
const middle = ref('')
const last = ref('')
const bio = ref('')
const company = ref('')
const position = ref('')
const companynumber = ref('')
const companyemail = ref('')
const companyadress = ref('')

// Image state
const profilePicFile = ref(null)
const profilePicPreview = ref('')
const coverPicFile = ref(null)
const coverPicPreview = ref('')
const croppedAvatarBlob = ref(null)
const croppedCoverBlob = ref(null)

// Cropper modal state
const showCropper = ref(false)
const cropMode = ref('avatar') // 'avatar' | 'cover'
const cropImageSrc = ref('')
const cropperRef = ref(null)
let cropper = null

// Lifecycle
onUnmounted(() => {
  if (cropper) {
    cropper.destroy()
    cropper = null
  }
})

onMounted(async () => {
  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
    if (!userId.value) return

    // Load personal data
    try {
      const pd = await api.get('/card-users/personal-data')
      if (pd) {
        first.value = pd.first_name || ''
        middle.value = pd.middle_name || ''
        last.value = pd.last_name || ''
      }
    } catch {}

    // Load profile
    try {
      const pr = await api.get('/card-users/profile')
      if (pr) {
        bio.value = pr.bio || ''
        company.value = pr.company || ''
        position.value = pr.position || ''
        companynumber.value = pr.companynumber || ''
        companyemail.value = pr.companyemail || ''
        companyadress.value = pr.companyadress || ''
        if (pr.profile_pic) profilePicPreview.value = processProfileImage(pr.profile_pic)
        if (pr.cover_pic) coverPicPreview.value = processProfileImage(pr.cover_pic)
      }
    } catch {}
  } catch {}
})

// Handlers: select images => open cropper immediately
function onPick(e) {
  const f = e.target.files?.[0]
  if (!f) return
  if (!/^image\//.test(f.type)) { e.target.value = ''; return }
  if (f.size > 2 * 1024 * 1024) { e.target.value = ''; return }
  profilePicFile.value = f
  croppedAvatarBlob.value = null
  profilePicPreview.value = URL.createObjectURL(f)
  cropMode.value = 'avatar'
  cropImageSrc.value = profilePicPreview.value
  showCropper.value = true
  nextTick(initCropper)
}

function onPickCover(e) {
  const f = e.target.files?.[0]
  if (!f) return
  if (!/^image\//.test(f.type)) { e.target.value = ''; return }
  if (f.size > 4 * 1024 * 1024) { e.target.value = ''; return }
  coverPicFile.value = f
  croppedCoverBlob.value = null
  coverPicPreview.value = URL.createObjectURL(f)
  cropMode.value = 'cover'
  cropImageSrc.value = coverPicPreview.value
  showCropper.value = true
  nextTick(initCropper)
}

// Cropper core
function initCropper() {
  if (!cropperRef.value) return
  if (cropper) { cropper.destroy(); cropper = null }
  const isAvatar = cropMode.value === 'avatar'
  cropper = new Cropper(cropperRef.value, {
    viewMode: 1,
    aspectRatio: isAvatar ? 1 : 16 / 9,
    dragMode: 'move',
    background: true,
    autoCropArea: 0.9,
    responsive: true,
    cropBoxResizable: true,
    cropBoxMovable: true,
    guides: true,
    center: true,
    highlight: false,
    modal: false,
    scalable: true,
    zoomable: true,
    rotatable: true,
    checkOrientation: false,
    ...(isAvatar && {
      ready() {
        const cropBox = this.cropper.cropBox
        const container = this.cropper.container
        const viewBox = container?.querySelector?.('.cropper-view-box')
        const face = container?.querySelector?.('.cropper-face')
        if (cropBox) {
          cropBox.style.borderRadius = '50%'
          cropBox.style.border = '2px solid #3b82f6'
        }
        if (viewBox) viewBox.style.borderRadius = '50%'
        if (face) face.style.borderRadius = '50%'
      },
      crop() {
        const cropBox = this.cropper.cropBox
        const container = this.cropper.container
        const viewBox = container?.querySelector?.('.cropper-view-box')
        const face = container?.querySelector?.('.cropper-face')
        if (cropBox) cropBox.style.borderRadius = '50%'
        if (viewBox) viewBox.style.borderRadius = '50%'
        if (face) face.style.borderRadius = '50%'
      }
    })
  })
}

function closeCropper() {
  if (cropper) { cropper.destroy(); cropper = null }
  showCropper.value = false
}

async function getCroppedBlob(mode) {
  if (!cropper) return null
  const isAvatar = mode === 'avatar'
  const canvas = cropper.getCroppedCanvas({
    width: isAvatar ? 512 : 1200,
    height: isAvatar ? 512 : 675,
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'high'
  })
  if (!canvas) return null
  if (isAvatar) {
    const circularCanvas = document.createElement('canvas')
    circularCanvas.width = 512
    circularCanvas.height = 512
    const ctx = circularCanvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 512, 512)
    ctx.globalCompositeOperation = 'destination-in'
    ctx.beginPath()
    ctx.arc(256, 256, 256, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'
    ctx.drawImage(canvas, 0, 0, 512, 512)
    return await new Promise(res => circularCanvas.toBlob(b => res(b), 'image/jpeg', 0.92))
  }
  return await new Promise(res => canvas.toBlob(b => res(b), 'image/jpeg', 0.92))
}

async function applyCropper() {
  const blob = await getCroppedBlob(cropMode.value)
  if (blob) {
    if (cropMode.value === 'avatar') {
      croppedAvatarBlob.value = blob
      try { profilePicPreview.value = URL.createObjectURL(blob) } catch {}
    } else {
      croppedCoverBlob.value = blob
      try { coverPicPreview.value = URL.createObjectURL(blob) } catch {}
    }
  }
  closeCropper()
}

// Toolbar actions (shared)
function resetCropper() {
  try {
    if (!cropper) return
    cropper.reset()
    const isAvatar = cropMode.value === 'avatar'
    cropper.setAspectRatio(isAvatar ? 1 : cropper.options.aspectRatio || NaN)
    cropper.crop()
  } catch {}
}
function rotateLeft() { try { cropper?.rotate?.(-90) } catch {} }
function rotateRight() { try { cropper?.rotate?.(90) } catch {} }
function setAspect(r) {
  if (!cropper) return
  if (isNaN(r)) cropper.setAspectRatio(NaN)
  else cropper.setAspectRatio(r)
}
function aspectBtnClass(r) {
  const active = (isNaN(r) && isNaN(cropper?.options?.aspectRatio)) || (cropper?.options?.aspectRatio === r)
  return `${active ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`
}

// Save + navigation
async function onSave() {
  if (!userId.value) return
  if (!first.value.trim()) { alert('First name is required'); return }
  if (!last.value.trim()) { alert('Last name is required'); return }

  saving.value = true
  try {
    if (profilePicFile.value || croppedAvatarBlob.value) {
      try {
        const fd = new FormData()
        const blob = croppedAvatarBlob.value || profilePicFile.value
        if (blob instanceof Blob) {
          fd.append('profile_pic_file', blob, 'profile.jpg')
        } else {
          fd.append('profile_pic_file', blob)
        }
        
        console.log('Uploading profile picture, FormData size:', blob?.size || 'unknown')
        const resp = await http.post('/card-users/profile/picture', fd, {
          headers: {
            // Let browser set Content-Type with boundary
          },
          timeout: 30000 // 30 second timeout for file uploads
        })
        
        console.log('Profile picture upload response:', resp?.data)
        const url = resp?.data?.profile_pic_url || processProfileImage(resp?.data?.profile_pic || '')
        if (url) profilePicPreview.value = url
        profilePicFile.value = null
        croppedAvatarBlob.value = null
      } catch (uploadError) {
        console.error('Profile picture upload failed:', uploadError)
        console.error('Error response:', uploadError?.response?.data)
        alert(uploadError?.response?.data?.message || uploadError?.message || 'Failed to upload profile picture')
        throw uploadError // Re-throw to prevent continuing
      }
    }

    if (coverPicFile.value || croppedCoverBlob.value) {
      try {
        const fd2 = new FormData()
        const blob2 = croppedCoverBlob.value || coverPicFile.value
        if (blob2 instanceof Blob) {
          fd2.append('cover_pic_file', blob2, 'cover.jpg')
        } else {
          fd2.append('cover_pic_file', blob2)
        }
        
        console.log('Uploading cover picture, FormData size:', blob2?.size || 'unknown')
        const resp2 = await userApi.uploadCover(fd2)
        
        console.log('Cover picture upload response:', resp2?.data)
        const coverUrl = resp2?.data?.cover_pic_url || processProfileImage(resp2?.data?.cover_pic || '')
        if (coverUrl) coverPicPreview.value = coverUrl
        coverPicFile.value = null
        croppedCoverBlob.value = null
      } catch (uploadError) {
        console.error('Cover picture upload failed:', uploadError)
        console.error('Error response:', uploadError?.response?.data)
        alert(uploadError?.response?.data?.message || uploadError?.message || 'Failed to upload cover picture')
        throw uploadError // Re-throw to prevent continuing
      }
    }

    const emptyToNull = (value) => {
      const trimmed = value.trim()
      return trimmed === '' ? null : trimmed
    }

    const profileData = {
      first_name: first.value.trim(),
      middle_name: emptyToNull(middle.value),
      last_name: last.value.trim(),
      bio: emptyToNull(bio.value),
      company: emptyToNull(company.value),
      position: emptyToNull(position.value),
      companynumber: emptyToNull(companynumber.value),
      companyemail: emptyToNull(companyemail.value),
      companyadress: emptyToNull(companyadress.value),
    }

    await userApi.updateCompleteProfile(profileData)
    router.push({ name: 'dashboard' })
  } catch (err) {
    if (err.response?.data?.message) alert('Failed to save profile: ' + err.response.data.message)
    else if (err.response?.data?.error) alert('Failed to save profile: ' + err.response.data.error)
    else alert('Failed to save profile: ' + (err.message || 'Unknown error'))
  } finally {
    saving.value = false
  }
}

function goBack() {
  router.push({ name: 'dashboard' })
}
</script>

<style scoped></style>
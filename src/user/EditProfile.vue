<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-6 sm:px-8 pb-safe pt-24">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Edit Profile</h1>
      <p class="mt-1 text-sm opacity-70">Update your personal info and company details</p>
    </div>

    <section class="w-full max-w-2xl bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7">
      <!-- Avatar -->
      <div class="flex items-center justify-center mb-5">
        <label for="profile-pic-edit" class="w-32 h-32 rounded-full border border-black bg-gray-50 flex items-center justify-center cursor-pointer overflow-hidden">
          <input id="profile-pic-edit" name="profile-pic-edit" type="file" accept="image/*" class="hidden" @change="onFile" />
          <img v-if="profilePicPreview" :src="profilePicPreview" class="w-32 h-32 object-cover border border-black" />
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../config/api'

const router = useRouter()
const userId = ref(null)

// Personal data
const first = ref('')
const middle = ref('')
const last = ref('')

// Profile
const profilePic = ref('')
const profilePicPreview = ref('')
const bio = ref('')
const company = ref('')
const position = ref('')
const companynumber = ref('')
const companyemail = ref('')
const companyadress = ref('')
const saving = ref(false)

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
    } catch (err) {
      console.error('Error loading personal data:', err)
    }
    
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
        if (pr.profile_pic) {
          profilePicPreview.value = pr.profile_pic
        }
      }
    } catch (err) {
      console.error('Error loading profile:', err)
    }
  } catch (err) {
    console.error('Error in onMounted:', err)
  }
})

function onFile(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    profilePic.value = reader.result
    profilePicPreview.value = reader.result
  }
  reader.readAsDataURL(file)
}

async function onSave() {
  if (!userId.value) return
  saving.value = true
  try {
    // Save names
    await api.post('/card-users/personal-data', {
      first_name: first.value,
      middle_name: middle.value || null,
      last_name: last.value,
    })
    
    // Save profile
    const payload = {
      bio: bio.value || null,
      company: company.value || null,
      position: position.value || null,
      companynumber: companynumber.value || null,
      companyemail: companyemail.value || null,
      companyadress: companyadress.value || null,
    }
    if (profilePic.value && profilePic.value.startsWith('data:')) {
      payload.profile_pic = profilePic.value
    }
    await api.post('/card-users/profile', payload)
    router.push({ name: 'dashboard' })
  } catch (err) {
    console.error('Error saving profile:', err)
    alert('Failed to save profile: ' + (err.message || err))
  } finally {
    saving.value = false
  }
}

function goBack() {
  router.push({ name: 'dashboard' })
}
</script>

<style scoped></style>



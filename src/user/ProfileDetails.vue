<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-6 pb-safe pt-24">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md">
      <div class="text-center mb-4">
        <h2 class="text-lg font-extrabold">Let's continue setting up profile!</h2>
        <p class="text-xs opacity-80">You can always change these details<br/>in your account page</p>
      </div>

      <!-- Profile photo upload removed; handled in ProfilePhoto page -->

      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label for="bio" class="block text-xs font-medium mb-1 opacity-80">Profile Bio</label>
          <textarea id="bio" name="bio" v-model.trim="bio" rows="3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Tell the online community how awesome you are!"></textarea>
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

        <button type="submit" :disabled="loading" class="mt-2 h-12 rounded-lg w-full bg-primary text-white font-semibold">Finish setting up My Profile</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, http } from '../config/api'

const userId = ref(null)
// Photo upload removed; handled separately in ProfilePhoto page
const bio = ref('')
const company = ref('')
const position = ref('')
const companynumber = ref('')
const companyemail = ref('')
const companyadress = ref('')
const loading = ref(false)
const router = useRouter()

onMounted(() => {
  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
  } catch {}
})

// onFile removed

async function onSubmit() {
  loading.value = true
  try {
    // Save text fields only; photo handled in ProfilePhoto page
    const textForm = new FormData()
    if (bio.value) textForm.append('bio', bio.value)
    if (company.value) textForm.append('company', company.value)
    if (position.value) textForm.append('position', position.value)
    if (companynumber.value) textForm.append('companynumber', companynumber.value)
    if (companyemail.value) textForm.append('companyemail', companyemail.value)
    if (companyadress.value) textForm.append('companyadress', companyadress.value)
    await http.post('/card-users/profile', textForm)
    // Continue onboarding to ProfilePhoto page
    router.push({ name: 'profile-photo' })
  } catch (err) {
    console.error('Error saving profile:', err)
    
    // Enhanced error handling
    if (err.response?.status === 413) {
      alert('File too large! Please choose a smaller image.')
    } else if (err.response?.data?.message) {
      alert('Failed to save profile: ' + err.response.data.message)
    } else {
      alert('Failed to save profile: ' + (err.message || err))
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-6 sm:px-8 pb-safe pt-36 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <!-- Brand -->
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <!-- Card -->
    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-1">Signup to GoTapMode</h2>
      <p class="text-center text-sm text-gray-500 -mt-2 mb-3">Create your account and activate your card</p>

      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label for="activation" class="block text-xs font-medium mb-1 opacity-80">Activation Code</label>
          <input id="activation" v-model.trim="activation" type="text" placeholder="**********" readonly aria-readonly="true" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-100 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-0" />
        </div>

        <div>
          <label for="email" class="block text-xs font-medium mb-1 opacity-80">Email</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M3.75 4h16.5A1.75 1.75 0 0 1 22 5.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75A1.75 1.75 0 0 1 3.75 4Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
              <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input id="email" v-model.trim="email" type="email" autocomplete="email" placeholder="customer@gotapmode.info" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 pl-9 pr-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-xs font-medium mb-1 opacity-80">Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M12 1.75a3.75 3.75 0 00-3.75 3.75V8H6.5A2.5 2.5 0 004 10.5v7A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0017.5 8H15.75V5.5A3.75 3.75 0 0012 1.75zm-2.25 6.25V5.5a2.25 2.25 0 114.5 0V8h-4.5z"/>
            </svg>
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="new-password" placeholder="********" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
            <button type="button" @click="togglePassword" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
              <svg v-if="showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs -mt-1">
          <a href="#" @click.prevent="goToLogin" class="opacity-90 hover:opacity-100">Sign in to <span class="text-blue-500">GoTapMode</span></a>
          <a href="#" @click.prevent class="opacity-90 hover:opacity-100">Forgot your password?</a>
        </div>

        <button type="submit" class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold">GoTapMode - Quick Connect!</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, userApi } from '../config/api'

const activation = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')
const showPassword = ref(false)
const router = useRouter()

onMounted(() => {
  // Pre-fill activation code if passed from /activate
  const fromSearch = new URLSearchParams(window.location.search)
  const fromHash = (() => {
    const h = window.location.hash
    const q = h.indexOf('?')
    return q !== -1 ? new URLSearchParams(h.slice(q + 1)) : new URLSearchParams('')
  })()
  const getParam = (n) => fromSearch.get(n) || fromHash.get(n) || ''
  activation.value = getParam('code') || ''
  // If unique_code provided and no code, fetch code to help the user
  const unique = getParam('unique_code') || getParam('unique')
  if (!activation.value && unique) {
    api.get(`/cards/${encodeURIComponent(unique)}`).then((c) => {
      activation.value = c.activation_code || ''
    }).catch(() => {})
  }
})

async function onSubmit() {
  errorMsg.value = ''
  loading.value = true
  try {
    const guessedName = email.value?.split('@')[0] || 'New User'
    
    // Step 1: Register the user
    const user = await userApi.register(guessedName, email.value, password.value)
    
    // Step 2: Login the user to get authentication token
    const loginResponse = await userApi.login(email.value, password.value)
    
    // Step 3: Store the token and user data
    localStorage.setItem('gtm_token', loginResponse.token)
    localStorage.setItem('gtm_user', JSON.stringify(loginResponse.user))
    
    // Step 4: Activate the card (now authenticated)
    await userApi.activateCard(activation.value)
    
    router.push({ name: 'profile-setup' })
  } catch (e) {
    // Show more detailed error information
    if (e.response?.data?.errors) {
      const errors = e.response.data.errors
      const errorMessages = []
      for (const field in errors) {
        errorMessages.push(`${field}: ${errors[field].join(', ')}`)
      }
      errorMsg.value = errorMessages.join('; ')
    } else {
      errorMsg.value = String(e.message || e)
    }
  } finally {
    loading.value = false
  }
}

function goToLogin() { router.push({ name: 'login' }) }

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped></style>



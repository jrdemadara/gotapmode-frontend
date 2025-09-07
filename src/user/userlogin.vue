<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-safe pt-32 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-1">Instant Access!</h2>
      <p class="text-center text-sm text-gray-500 mt-1 mb-5">Sign in to continue to GoTapMode</p>
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="email">Email</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M3.75 4h16.5A1.75 1.75 0 0 1 22 5.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75A1.75 1.75 0 0 1 3.75 4Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
              <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input id="email" v-model.trim="email" type="email" autocomplete="email" placeholder="you@example.com" class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="password">Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M12 1.75a3.75 3.75 0 00-3.75 3.75V8H6.5A2.5 2.5 0 004 10.5v7A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0017.5 8H15.75V5.5A3.75 3.75 0 0012 1.75zm-2.25 6.25V5.5a2.25 2.25 0 114.5 0V8h-4.5z"/>
            </svg>
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="••••••••" class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
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

        <div class="text-right text-xs -mt-1">
          <a href="#" @click.prevent="onForgot" class="opacity-90 hover:opacity-100">Forgot your password?</a>
        </div>

        <button type="submit" :disabled="!email || !password || loading" class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50">{{ loading ? 'Signing in…' : 'Login to GoTapMode' }}</button>
      </form>

      <div class="text-center text-sm mt-4 opacity-90">
        <a href="#" @click.prevent="onRegister">I don't have GoTapMode</a>
      </div>
    </section>
    <Modal v-model="showError" title="Login failed" :message="errorMsg" />
    <Modal v-model="showSuccess" title="">
      <div class="space-y-2 text-center">
        <p class="text-green-600 text-lg font-extrabold">Success</p>
        <p class="text-sm opacity-80">{{ successMsg }}</p>
        <div class="mt-1 flex items-center justify-center gap-2 text-sm text-gray-600">
          <svg class="animate-spin h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>Redirecting...</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api, adminApi } from '../config/api'
import Modal from '../components/Modal.vue'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')
const showError = ref(false)
const showSuccess = ref(false)
const successMsg = ref('')
const router = useRouter()
const showPassword = ref(false)

 async function onSubmit() {
   errorMsg.value = ''
   loading.value = true
   
   try {
     // First, try to authenticate as admin (check users table with is_admin = true)
     try {
       const adminResponse = await adminApi.login(email.value, password.value)
       
       // If successful, store admin data and redirect to admin dashboard
       localStorage.setItem('gtm_admin_token', adminResponse.token)
       localStorage.setItem('gtm_admin_user', JSON.stringify(adminResponse.user))
       
       successMsg.value = 'Welcome back admin'
       showSuccess.value = true
       
       setTimeout(() => {
         router.push({ name: 'admin-dashboard' })
       }, 1200)
       
       return
     } catch (adminError) {
       // Admin login failed, continue to try card user login
       console.log('Admin login failed, trying card user login...')
     }
     
     // Try to authenticate as card user (check card_users table)
     try {
       const cardUserResponse = await api.post('/card-users/login', { 
         email: email.value, 
         password: password.value 
       })
       
       // If successful, store card user data and redirect to user dashboard
       localStorage.setItem('gtm_token', cardUserResponse.token)
       localStorage.setItem('gtm_user', JSON.stringify(cardUserResponse.user))
       
       successMsg.value = 'Welcome back ' + (cardUserResponse.user?.name || cardUserResponse.user?.email || 'User')
       showSuccess.value = true
       
       setTimeout(() => {
         router.push({ name: 'dashboard' })
       }, 1200)
       
     } catch (cardUserError) {
       // Both login attempts failed
       throw new Error('Invalid email or password. Please check your credentials and try again.')
     }
     
   } catch (e) {
     errorMsg.value = String(e.message || e)
     showError.value = true
   } finally {
     loading.value = false
   }
 }

function onForgot() {
  console.log('Forgot password clicked')
}

function onRegister() {
  console.log("Register (I don't have GoTapMode) clicked")
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

// removed sample page usage
</script>

<style scoped></style>



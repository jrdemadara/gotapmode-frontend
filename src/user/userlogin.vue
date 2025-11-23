<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-safe pt-32 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="-mt-0.5 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-0">Instant Access!</h2>
      <p class="text-center text-sm text-gray-500 mt-0 mb-5">Sign in to continue to GoTapMode</p>
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="email">Email</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M3.75 4h16.5A1.75 1.75 0 0 1 22 5.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75A1.75 1.75 0 0 1 3.75 4Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
              <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input id="email" name="email" v-model.trim="email" type="email" autocomplete="email" placeholder="you@example.com" class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="password">Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M17 8V7a5 5 0 10-10 0v1M5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input id="password" name="password" v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="••••••••" class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
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
        <p>Connect instantly with your digital business card</p>
      </div>
    </section>
    <Modal v-model="showError" title="Login failed" :message="errorMsg" />
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
const router = useRouter()
const showPassword = ref(false)

function togglePassword() { showPassword.value = !showPassword.value }

async function onSubmit() {
  errorMsg.value = ''
  loading.value = true
  
  try {
    // Try admin first
    try {
      const adminResponse = await adminApi.login(email.value, password.value)
      localStorage.setItem('gtm_admin_token', adminResponse.token)
      localStorage.setItem('gtm_admin_user', JSON.stringify(adminResponse.user))
      router.replace({ name: 'admin-dashboard' })
      return
    } catch {
      // fall through to user login
    }

    // Try card user
    const cardUserResponse = await api.post('/card-users/login', { 
      email: email.value, 
      password: password.value 
    })
    localStorage.setItem('gtm_token', cardUserResponse.token)
    localStorage.setItem('gtm_user', JSON.stringify(cardUserResponse.user))
    router.replace({ name: 'dashboard' })

  } catch (e) {
    errorMsg.value = String(e.message || e)
    showError.value = true
  } finally {
    loading.value = false
  }
}

function onForgot() {
  router.push({ name: 'forgot-password' })
}

function onRegister() {
  router.push({ name: 'signup' })
}
</script>

<style scoped></style>



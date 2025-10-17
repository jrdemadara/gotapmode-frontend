<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-safe pt-32 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode Admin</h1>
      <p class="-mt-0.5 text-sm opacity-70">Administrator Access</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-0">Forgot Password?</h2>
      <p class="text-center text-sm text-gray-500 mt-0 mb-5">Enter your admin email to receive a reset code</p>
      
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="email">Email Address</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M3.75 4h16.5A1.75 1.75 0 0 1 22 5.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75A1.75 1.75 0 0 1 3.75 4Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
              <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="email" 
              name="email" 
              v-model.trim="email" 
              type="email" 
              autocomplete="email" 
              placeholder="admin@example.com" 
              class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" 
            />
          </div>
        </div>

        <button 
          type="submit" 
          :disabled="!email || loading" 
          class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50"
        >
          {{ loading ? 'Sending...' : 'Send Reset Code' }}
        </button>
      </form>

      <div class="text-center text-sm mt-4 opacity-90">
        <p>Remember your password? <a href="#" @click.prevent="goToLogin" class="text-primary font-semibold hover:underline">Back to Login</a></p>
      </div>
    </section>
    
    <Modal v-model="showError" title="Error" :message="errorMsg" />
    <Modal v-model="showSuccess" title="Success" :message="successMsg" @close="goToResetPassword" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi } from '../config/api'
import Modal from '../components/Modal.vue'

const email = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const showError = ref(false)
const showSuccess = ref(false)
const router = useRouter()

async function onSubmit() {
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true
  
  try {
    const response = await adminApi.post('/admin/forgot-password', { email: email.value })
    
    if (response.success) {
      successMsg.value = response.message || 'Reset code sent to your email!'
      showSuccess.value = true
      // Store email for the next step
      sessionStorage.setItem('admin_reset_email', email.value)
    } else {
      errorMsg.value = response.message || 'Failed to send reset code'
      showError.value = true
    }
  } catch (e) {
    errorMsg.value = String(e.message || e)
    showError.value = true
  } finally {
    loading.value = false
  }
}

function goToResetPassword() {
  router.push({ name: 'admin-verify-reset-code' })
}

function goToLogin() {
  router.push({ name: 'login' })
}
</script>

<style scoped></style>


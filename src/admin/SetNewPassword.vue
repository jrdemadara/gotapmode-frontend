<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-safe pt-32 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode Admin</h1>
      <p class="-mt-0.5 text-sm opacity-70">Administrator Access</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <div class="text-center mb-5">
        <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black mb-0">Set New Password</h2>
        <p class="text-sm text-gray-500 mt-0">Code verified! Now create your new password</p>
      </div>
      
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="password">New Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="password" 
              name="password" 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              autocomplete="new-password" 
              placeholder="••••••••" 
              class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" 
            />
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
          <p class="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
        </div>

        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="password_confirmation">Confirm Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="password_confirmation" 
              name="password_confirmation" 
              v-model="passwordConfirmation" 
              :type="showPasswordConfirm ? 'text' : 'password'" 
              autocomplete="new-password" 
              placeholder="••••••••" 
              class="block w-full h-11 rounded-lg border border-gray-300 bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" 
            />
            <button type="button" @click="togglePasswordConfirm" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
              <svg v-if="showPasswordConfirm" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
          <p v-if="password && passwordConfirmation && password !== passwordConfirmation" class="text-xs text-red-600 mt-1">Passwords do not match</p>
        </div>

        <button 
          type="submit" 
          :disabled="!isFormValid || loading" 
          class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50"
        >
          {{ loading ? 'Resetting Password...' : 'Reset Password' }}
        </button>
      </form>
    </section>
    
    <Modal v-model="showError" title="Error" :message="errorMsg" />
    <Modal v-model="showSuccess" title="Success" :message="successMsg" @close="goToLogin" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi } from '../config/api'
import Modal from '../components/Modal.vue'

const email = ref('')
const code = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const showError = ref(false)
const showSuccess = ref(false)
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const router = useRouter()

const isFormValid = computed(() => {
  return password.value.length >= 8 && 
         passwordConfirmation.value === password.value
})

onMounted(() => {
  // Get email and verified code from sessionStorage
  email.value = sessionStorage.getItem('admin_reset_email') || ''
  code.value = sessionStorage.getItem('admin_verified_reset_code') || ''
  
  if (!email.value || !code.value) {
    // If no verified code, redirect back to verify code page
    router.push({ name: 'admin-verify-reset-code' })
  }
})

function togglePassword() {
  showPassword.value = !showPassword.value
}

function togglePasswordConfirm() {
  showPasswordConfirm.value = !showPasswordConfirm.value
}

async function onSubmit() {
  if (!isFormValid.value) return
  
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true
  
  try {
    const response = await adminApi.post('/admin/reset-password', {
      email: email.value,
      code: code.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value
    })
    
    if (response.success) {
      successMsg.value = response.message || 'Password reset successfully! You can now login with your new password.'
      showSuccess.value = true
      // Clear stored data
      sessionStorage.removeItem('admin_reset_email')
      sessionStorage.removeItem('admin_verified_reset_code')
    } else {
      errorMsg.value = response.message || 'Failed to reset password'
      showError.value = true
    }
  } catch (e) {
    errorMsg.value = String(e.message || e)
    showError.value = true
  } finally {
    loading.value = false
  }
}

function goToLogin() {
  router.push({ name: 'login' })
}
</script>

<style scoped></style>


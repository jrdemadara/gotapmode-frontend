<template>
  <div class="min-h-svh flex flex-col items-center px-8 sm:px-12 pb-16 pt-10 relative">
    <!-- Back button -->
    <button @click="goBack"
      class="absolute left-4 top-4 z-50 w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Brand -->
    <div class="text-center mb-8">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="-mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <!-- Change Password Form -->
    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-2">Change Password</h2>
      <p class="text-center text-sm text-gray-500 mb-6">Update your account password</p>

      <form class="grid gap-4" @submit.prevent="onSubmit">
        <!-- Current Password -->
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="current-password">Current Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M17 8V7a5 5 0 10-10 0v1M5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="current-password" 
              name="current-password" 
              v-model="currentPassword" 
              :type="showCurrentPassword ? 'text' : 'password'" 
              autocomplete="current-password" 
              placeholder="Enter current password"
              :class="['block w-full h-11 rounded-lg border bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4', currentPasswordError ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500/20 focus:border-blue-500']"
            />
            <button type="button" @click="showCurrentPassword = !showCurrentPassword" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
              <svg v-if="showCurrentPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
          <p v-if="currentPasswordError" class="mt-1 text-xs text-red-600">{{ currentPasswordError }}</p>
        </div>

        <!-- New Password -->
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="new-password">New Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M17 8V7a5 5 0 10-10 0v1M5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="new-password" 
              name="new-password" 
              v-model="newPassword" 
              :type="showNewPassword ? 'text' : 'password'" 
              autocomplete="new-password" 
              placeholder="Enter new password"
              :class="['block w-full h-11 rounded-lg border bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4', newPasswordError ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500/20 focus:border-blue-500']"
            />
            <button type="button" @click="showNewPassword = !showNewPassword" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
              <svg v-if="showNewPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
          <p v-if="newPasswordError" class="mt-1 text-xs text-red-600">{{ newPasswordError }}</p>
        </div>

        <!-- Confirm New Password -->
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="confirm-password">Confirm New Password</label>
          <div class="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70 text-gray-500">
              <path d="M17 8V7a5 5 0 10-10 0v1M5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              id="confirm-password" 
              name="confirm-password" 
              v-model="confirmPassword" 
              :type="showConfirmPassword ? 'text' : 'password'" 
              autocomplete="new-password" 
              placeholder="Confirm new password"
              :class="['block w-full h-11 rounded-lg border bg-white pl-9 pr-12 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4', confirmPasswordError ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500/20 focus:border-blue-500']"
            />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
              <svg v-if="showConfirmPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
          <p v-if="confirmPasswordError" class="mt-1 text-xs text-red-600">{{ confirmPasswordError }}</p>
        </div>

        <!-- Password Requirements -->
        <div class="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
          <p class="font-medium mb-1">Password requirements:</p>
          <ul class="space-y-1">
            <li class="flex items-center gap-2">
              <svg class="w-3 h-3" :class="newPassword.length >= 8 ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              At least 8 characters long
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-3 h-3" :class="/[A-Z]/.test(newPassword) ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              Contains uppercase letter
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-3 h-3" :class="/[a-z]/.test(newPassword) ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              Contains lowercase letter
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-3 h-3" :class="/[0-9]/.test(newPassword) ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              Contains number
            </li>
          </ul>
        </div>

        <button 
          type="submit" 
          :disabled="!isFormValid || loading" 
          class="mt-2 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
        >
          {{ loading ? 'Changing Password...' : 'Change Password' }}
        </button>
      </form>
    </section>

    <!-- Success/Error Modals -->
    <Modal v-model="showError" title="Password Change Failed" :message="errorMsg" />
    <Modal v-model="showSuccess" title="Success">
      <div class="space-y-2 text-center">
        <p class="text-green-600 text-lg font-extrabold">Password Changed!</p>
        <p class="text-sm opacity-80">Your password has been successfully updated.</p>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { userApi } from '../config/api'
import Modal from '../components/Modal.vue'

const router = useRouter()

// Form data
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

// UI state
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const showError = ref(false)
const showSuccess = ref(false)
const errorMsg = ref('')

// Form validation errors
const currentPasswordError = ref('')
const newPasswordError = ref('')
const confirmPasswordError = ref('')

// Computed properties
const isFormValid = computed(() => {
  return currentPassword.value.length > 0 &&
         newPassword.value.length >= 8 &&
         confirmPassword.value === newPassword.value &&
         /[A-Z]/.test(newPassword.value) &&
         /[a-z]/.test(newPassword.value) &&
         /[0-9]/.test(newPassword.value)
})

function validateForm() {
  let isValid = true
  
  // Reset errors
  currentPasswordError.value = ''
  newPasswordError.value = ''
  confirmPasswordError.value = ''
  
  // Current password validation
  if (!currentPassword.value) {
    currentPasswordError.value = 'Current password is required'
    isValid = false
  }
  
  // New password validation
  if (!newPassword.value) {
    newPasswordError.value = 'New password is required'
    isValid = false
  } else if (newPassword.value.length < 8) {
    newPasswordError.value = 'Password must be at least 8 characters long'
    isValid = false
  } else if (!/[A-Z]/.test(newPassword.value)) {
    newPasswordError.value = 'Password must contain at least one uppercase letter'
    isValid = false
  } else if (!/[a-z]/.test(newPassword.value)) {
    newPasswordError.value = 'Password must contain at least one lowercase letter'
    isValid = false
  } else if (!/[0-9]/.test(newPassword.value)) {
    newPasswordError.value = 'Password must contain at least one number'
    isValid = false
  } else if (newPassword.value === currentPassword.value) {
    newPasswordError.value = 'New password must be different from current password'
    isValid = false
  }
  
  // Confirm password validation
  if (!confirmPassword.value) {
    confirmPasswordError.value = 'Please confirm your new password'
    isValid = false
  } else if (confirmPassword.value !== newPassword.value) {
    confirmPasswordError.value = 'Passwords do not match'
    isValid = false
  }
  
  return isValid
}

async function onSubmit() {
  if (!validateForm()) {
    return
  }
  
  loading.value = true
  errorMsg.value = ''
  
  try {
    await userApi.changePassword({
      current_password: currentPassword.value,
      new_password: newPassword.value,
      new_password_confirmation: confirmPassword.value
    })
    
    showSuccess.value = true
    
    // Reset form
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
    
    // Redirect to dashboard after a delay
    setTimeout(() => {
      showSuccess.value = false
      router.push({ name: 'dashboard' })
    }, 2000)
    
  } catch (e) {
    if (e.response?.status === 422) {
      // Handle validation errors from server
      const errors = e.response.data.errors || {}
      if (errors.current_password) {
        currentPasswordError.value = errors.current_password[0]
      }
      if (errors.new_password) {
        newPasswordError.value = errors.new_password[0]
      }
      errorMsg.value = 'Please check the errors and try again'
    } else if (e.response?.status === 401) {
      currentPasswordError.value = 'Current password is incorrect'
      errorMsg.value = 'Current password is incorrect'
    } else {
      errorMsg.value = e.message || 'Failed to change password. Please try again.'
    }
    showError.value = true
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push({ name: 'dashboard' })
}
</script>

<style scoped>
.bg-primary {
  background-color: #000000;
}

.bg-primary:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.shadow-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

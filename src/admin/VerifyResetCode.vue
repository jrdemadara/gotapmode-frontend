<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-safe pt-32 sm:pt-56 bg-gradient-to-b from-black/0 to-black/0">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode Admin</h1>
      <p class="-mt-0.5 text-sm opacity-70">Administrator Access</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-0">Verify Code</h2>
      <p class="text-center text-sm text-gray-500 mt-0 mb-5">Enter the code sent to {{ maskedEmail }}</p>
      
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="code">Reset Code</label>
          <div class="relative">
            <input 
              id="code" 
              name="code" 
              v-model.trim="code" 
              type="text" 
              maxlength="6"
              placeholder="000000" 
              class="block w-full h-14 rounded-lg border border-gray-300 bg-white px-3.5 text-[15px] text-center tracking-widest font-mono text-2xl font-bold shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" 
            />
          </div>
          <p class="text-xs text-gray-500 mt-1 text-center">Enter the 6-digit code from your email</p>
        </div>

        <button 
          type="submit" 
          :disabled="code.length !== 6 || loading" 
          class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50"
        >
          {{ loading ? 'Verifying...' : 'Verify Code' }}
        </button>
      </form>

      <div class="text-center text-sm mt-4">
        <p class="opacity-90">Didn't receive the code? 
          <button 
            @click="resendCode" 
            :disabled="resendCooldown > 0"
            class="text-primary font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code' }}
          </button>
        </p>
        <p class="mt-2">
          <a href="#" @click.prevent="goBack" class="text-gray-600 hover:text-gray-900">← Back to Forgot Password</a>
        </p>
      </div>
    </section>
    
    <Modal v-model="showError" title="Error" :message="errorMsg" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi } from '../config/api'
import Modal from '../components/Modal.vue'

const email = ref('')
const code = ref('')
const loading = ref(false)
const errorMsg = ref('')
const showError = ref(false)
const resendCooldown = ref(0)
const router = useRouter()

let cooldownInterval = null

const maskedEmail = computed(() => {
  if (!email.value) return '***@***.***'
  const [local, domain] = email.value.split('@')
  if (!domain) return '***@***.***'
  const maskedLocal = local.length > 2 ? local[0] + '*'.repeat(local.length - 2) + local[local.length - 1] : local[0] + '***'
  return `${maskedLocal}@${domain}`
})

onMounted(() => {
  // Get email from sessionStorage
  email.value = sessionStorage.getItem('admin_reset_email') || ''
  if (!email.value) {
    router.push({ name: 'admin-forgot-password' })
  }
})

onUnmounted(() => {
  if (cooldownInterval) {
    clearInterval(cooldownInterval)
  }
})

function startCooldown() {
  resendCooldown.value = 60
  cooldownInterval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) {
      clearInterval(cooldownInterval)
    }
  }, 1000)
}

async function resendCode() {
  loading.value = true
  try {
    const response = await adminApi.post('/admin/forgot-password', { email: email.value })
    if (response.success) {
      alert('Reset code sent again!')
      startCooldown()
    }
  } catch (e) {
    errorMsg.value = String(e.message || e)
    showError.value = true
  } finally {
    loading.value = false
  }
}

async function onSubmit() {
  if (code.value.length !== 6) return
  
  errorMsg.value = ''
  loading.value = true
  
  try {
    const response = await adminApi.post('/admin/verify-reset-code', {
      email: email.value,
      code: code.value
    })
    
    if (response.success) {
      // Store verified code for the next step
      sessionStorage.setItem('admin_verified_reset_code', code.value)
      router.push({ name: 'admin-set-new-password' })
    } else {
      errorMsg.value = response.message || 'Invalid code. Please try again.'
      showError.value = true
      code.value = '' // Clear the code input
    }
  } catch (e) {
    errorMsg.value = String(e.message || e)
    showError.value = true
    code.value = '' // Clear the code input
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push({ name: 'admin-forgot-password' })
}
</script>

<style scoped></style>


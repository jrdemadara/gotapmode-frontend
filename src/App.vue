<template>
  <router-view />
  <Modal v-model="showTimeout" title="">
    <div class="text-center space-y-4 py-2">
      <div class="relative mx-auto w-16 h-16">
        <div class="absolute inset-0 rounded-full bg-red-100/90 ring-8 ring-red-100/60 shadow-inner"></div>
        <div class="absolute inset-0 rounded-full animate-ping bg-red-400/40"></div>
        <svg class="absolute inset-0 m-auto w-8 h-8 text-red-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6a1 1 0 01-2 0V7a1 1 0 012 0zm-1 10a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-extrabold">Session expired</h3>
        <p class="mt-1 text-sm text-gray-600 max-w-sm mx-auto">
          You were logged out due to inactivity. Redirecting to login in
          <span class="font-bold">{{ countdown }}</span> seconds…
        </p>
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-center gap-3">
        <button class="px-5 h-11 rounded-xl bg-black text-white font-semibold shadow-md hover:-translate-y-0.5 active:scale-95 transition" @click="goLogin">Go to Login</button>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Modal from './components/Modal.vue'

const showTimeout = ref(false)
const countdown = ref(10)
let countdownTimer = null
const router = useRouter()

function onTimeoutEvent() {
  showTimeout.value = true
  startCountdown()
}

function goLogin() {
  showTimeout.value = false
  // Force a full document reload to the login page
  window.location.replace('/')
}

function startCountdown() {
  stopCountdown()
  countdown.value = 10
  countdownTimer = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      stopCountdown()
      goLogin()
    }
  }, 1000)
}

function stopCountdown() {
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = null
  }
}

onMounted(() => {
  window.addEventListener('gtm:session-timeout', onTimeoutEvent)
})

onBeforeUnmount(() => {
  window.removeEventListener('gtm:session-timeout', onTimeoutEvent)
  stopCountdown()
})
</script>

<style scoped>
.animate-pulse-subtle {
  animation: pulseSubtle 1.6s ease-in-out infinite;
}
@keyframes pulseSubtle {
  0%, 100% { transform: scale(1); filter: saturate(1); }
  50% { transform: scale(1.05); filter: saturate(1.15); }
}
</style>



<template>
  <div class="min-h-svh flex flex-col items-center gap-8 px-6 pb-safe pt-28">
    <!-- Brand -->
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-0" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="-mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <!-- Activation content -->
    <div class="w-full max-w-md text-center">
      <p class="text-base opacity-80">Your Activation Code</p>
      <p class="text-2xl font-extrabold tracking-widest select-all">{{ activationCode || '—' }}</p>


      <button
        class="mt-5 h-12 w-full max-w-sm mx-auto rounded-xl bg-primary text-white font-semibold"
        @click="onActivate"
        :disabled="processing || !activationCode"
      >
        {{ processing ? 'Activating…' : 'Activate this GoTapMode' }}
      </button>

    </div>

    <Modal v-model="showError" title="Activation failed" :message="errorMsg" />
    <Modal v-model="showSuccess" title="">
      <div class="space-y-2 text-center">
        <p class="text-green-600 text-lg font-extrabold">Success</p>
        <p class="text-sm opacity-80">Your card is now activated.</p>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../config/api'
import Modal from '../components/Modal.vue'

const activationCode = ref('')
const processing = ref(false)
const errorMsg = ref('')
const showError = ref(false)
const showSuccess = ref(false)
const userId = ref(null)
const cardInfo = ref(null)
const router = useRouter()

onMounted(() => {
  // support both /activate?x=y and #/activate?x=y in hash mode
  const fromSearch = new URLSearchParams(window.location.search)
  const fromHash = (() => {
    const h = window.location.hash
    const q = h.indexOf('?')
    return q !== -1 ? new URLSearchParams(h.slice(q + 1)) : new URLSearchParams('')
  })()

  const getParam = (name) => fromSearch.get(name) || fromHash.get(name) || ''

  activationCode.value = getParam('code') || ''
  const unique = getParam('unique_code') || getParam('unique')

  if (unique) {
    api.get(`/cards/${encodeURIComponent(unique)}`)
      .then((data) => {
        cardInfo.value = data
        if (!activationCode.value) activationCode.value = data.activation_code
      })
      .catch((e) => {
        activationCode.value = 'Card is not registered to GoTapMode'
      })
  }

  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
  } catch {}
})

function onActivate() {
  const params = new URLSearchParams()
  if (activationCode.value) params.set('code', activationCode.value)
  if (cardInfo.value?.unique_code) params.set('unique_code', cardInfo.value.unique_code)
  router.push({ name: 'signup', query: Object.fromEntries(params.entries()) })
}
</script>

<style scoped></style>



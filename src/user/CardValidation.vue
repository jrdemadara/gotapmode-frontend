<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <!-- Loading Screen with Logo -->
    <div v-if="loading" class="text-center">
      <div class="animate-pulse">
        <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-24 h-24 mx-auto mb-6" />
        <h1 class="text-3xl font-bold text-gray-900 mb-2">GoTapMode</h1>
        <p class="text-gray-600 mb-8">Validating your card...</p>
      </div>
      
      <!-- Loading Spinner -->
      <div class="flex justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
      
      <p class="mt-6 text-sm text-gray-500">Please keep your card near the device</p>
    </div>

    <!-- Error Display -->
    <div v-if="error" class="text-center max-w-md mx-auto px-4">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-red-900 mb-2">Card Validation Failed</h2>
        <p class="text-red-700 mb-6">{{ error }}</p>
        <button
          @click="goToLogin"
          class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>

    <!-- Success Display -->
    <div v-if="success" class="text-center max-w-md mx-auto px-4">
      <div class="bg-green-50 border border-green-200 rounded-lg p-6">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-green-900 mb-2">Card Validated Successfully!</h2>
        <p class="text-green-700 mb-6">{{ success }}</p>
        <p class="text-sm text-gray-600">Redirecting you to the appropriate page...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { api, FRONTEND_BASE } from '../config/api'

const router = useRouter()
const route = useRoute()

// Reactive state
const loading = ref(true)
const error = ref(null)
const success = ref(null)
const cardData = ref(null)
const nfcSupported = ref(false)
const nfcEnabled = ref(false)

// Check NFC support
const checkNfcSupport = async () => {
  try {
    if ('NDEFReader' in window) {
      nfcSupported.value = true
      const ndef = new NDEFReader()
      await ndef.scan()
      nfcEnabled.value = true
      
      // Stop scan immediately since we're just checking
      ndef.addEventListener('reading', () => {})
    } else {
      nfcSupported.value = false
      nfcEnabled.value = false
    }
  } catch (err) {
    nfcSupported.value = true
    nfcEnabled.value = false
  }
}

// Start NFC scanning for card validation
const startNfcScan = async () => {
  if (!nfcSupported.value || !nfcEnabled.value) {
    error.value = 'NFC is not available on this device. Please use a device with NFC capability.'
    loading.value = false
    return
  }

  try {
    const ndef = new NDEFReader()
    await ndef.scan()

    ndef.addEventListener('reading', async ({ message}) => {
      // Card detected, now read the URL from the card
      await readCardData(message)
    })

    ndef.addEventListener('readingerror', () => {
      error.value = 'Error reading NFC card. Please try again.'
      loading.value = false
    })

    // Timeout after 15 seconds
    setTimeout(() => {
      if (loading.value) {
        error.value = 'No card detected. Please tap your card near the device.'
        loading.value = false
      }
    }, 15000)

  } catch (err) {
    if (err.name === 'NotAllowedError') {
      error.value = 'NFC permission denied. Please enable NFC and try again.'
      nfcEnabled.value = false
    } else {
      error.value = 'Failed to start NFC scanning: ' + err.message
    }
    loading.value = false
  }
}

// Function to read card data (URL only)
const readCardData = async (message) => {
  try {
    let activationCode = null
    
    // Read the URL from the NDEF message
    for (const record of message.records) {
      if (record.recordType === 'url') {
        const url = new TextDecoder().decode(record.data)
        
        // Extract activation code from URL
        // URL format: https://GoTapMode.info/activationcode
        if (url.startsWith(FRONTEND_BASE)) {
          activationCode = url.replace(FRONTEND_BASE + '/', '')
        } else {
          // Fallback: get the last part of URL
          const urlParts = url.split('/')
          activationCode = urlParts[urlParts.length - 1]
        }
        break
      }
    }

    if (!activationCode) {
      error.value = 'No valid URL found on card. Please ensure the card is properly written.'
      loading.value = false
      return
    }

    // Generate hash and redirect
    await generateHashAndRedirect(activationCode)

  } catch (err) {
    error.value = 'Failed to read card data: ' + (err.message || 'Unknown error')
    loading.value = false
  }
}

// Generate hash and redirect to profile
const generateHashAndRedirect = async (activationCode) => {
  try {
    loading.value = true
    error.value = null
    success.value = null

    // Generate hash from activation code
    const response = await api.post('/cards/generate-hash', {
      activation_code: activationCode
    })

    // Redirect to public profile with hash
    router.push({ 
      name: 'public-profile', 
      params: { code: response.hash }
    })

  } catch (err) {
    if (err.response?.status === 404) {
      error.value = 'Card is not valid. This card is not registered in our system.'
    } else if (err.response?.status === 403) {
      error.value = err.response.data.message || 'Card validation failed.'
    } else {
      error.value = 'Failed to validate card: ' + (err.message || 'Unknown error')
    }
    loading.value = false
  }
}

// Validate card with backend (keep for backward compatibility)
const validateCard = async (uid) => {
  try {
    loading.value = true
    error.value = null
    success.value = null

    // Get card information from backend
    const response = await api.get(`/cards/${encodeURIComponent(uid)}`)
    cardData.value = response

    // Check card status and redirect accordingly
    if (!cardData.value || !cardData.value.id) {
      // Card doesn't exist - redirect to activate.vue
      router.push({ name: 'activate', query: { unique_code: uid } })
    } else if (!cardData.value.is_activated || cardData.value.is_activated === 0) {
      // Card exists but not activated - redirect to activate.vue
      router.push({ 
        name: 'activate', 
        query: { 
          unique_code: uid,
          activation_code: cardData.value.activation_code 
        } 
      })
    } else {
      // Card exists and is activated - generate hash and redirect
      await generateHashAndRedirect(cardData.value.activation_code)
    }

  } catch (err) {
    if (err.response?.status === 404) {
      // Card not found - redirect to activate.vue
      router.push({ name: 'activate', query: { unique_code: uid } })
    } else {
      error.value = 'Failed to validate card: ' + (err.message || 'Unknown error')
      loading.value = false
    }
  }
}

// Validate activation code from NFC card
const validateActivationCode = async (activationCode) => {
  try {
    loading.value = true
    error.value = null
    success.value = null

    // Get card information by activation code from backend
    const response = await api.get(`/cards/activation/${encodeURIComponent(activationCode)}`)
    cardData.value = response

    // Check card status and redirect accordingly
    if (!cardData.value || !cardData.value.id) {
      // Card not found - redirect to activate.vue
      router.push({ name: 'activate', query: { activation_code: activationCode } })
    } else if (!cardData.value.is_activated || cardData.value.is_activated === 0) {
      // Card exists but not activated - redirect to activate.vue
      router.push({ 
        name: 'activate', 
        query: { 
          unique_code: cardData.value.unique_code,
          activation_code: activationCode 
        } 
      })
    } else {
      // Card is activated - generate hash and redirect
      await generateHashAndRedirect(cardData.value.activation_code)
    }

  } catch (err) {
    if (err.response?.status === 404) {
      // Card not found - redirect to activate.vue
      router.push({ name: 'activate', query: { activation_code: activationCode } })
    } else {
      error.value = 'Failed to validate activation code: ' + (err.message || 'Unknown error')
      loading.value = false
    }
  }
}


// Go to login page
const goToLogin = () => {
  router.push({ name: 'login' })
}

// Initialize on mount
onMounted(async () => {
  await checkNfcSupport()
  
  // Check if there's an error message from URL (e.g., from expired card)
  const urlParams = new URLSearchParams(window.location.search)
  const errorFromUrl = urlParams.get('error')
  
  if (errorFromUrl) {
    error.value = errorFromUrl
    loading.value = false
    return
  }
  
  // Check if coming from writing process
  const fromWriting = route.query.from_writing === 'true'
  const uniqueCode = route.query.unique_code
  
  if (fromWriting && uniqueCode) {
    // Coming from writing process, validate the card immediately
    await validateCard(uniqueCode)
  } else if (route.params.activationCode) {
    // Coming from NFC card tap - validate activation code
    const activationCode = route.params.activationCode
    await validateActivationCode(activationCode)
  } else {
    // Normal flow - start NFC scanning
    startNfcScan()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  // Clean up any NFC listeners if needed
})
</script>

<style scoped>
/* Custom styles if needed */
</style>

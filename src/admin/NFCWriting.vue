<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hamburger button -->
    <button @click="showSidebar = !showSidebar" class="absolute left-3 sm:left-4 top-3 sm:top-4 z-50 w-12 h-12 sm:w-10 sm:h-10 rounded-xl sm:rounded-lg border-2 sm:border border-gray-300 bg-white/95 backdrop-blur flex flex-col items-center justify-center gap-1.5 sm:gap-1 shadow-lg hover:shadow-xl transition-all duration-200">
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
    </button>

    <!-- Header -->
    <div class="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <!-- Mobile: Centered Layout -->
        <div class="flex flex-col items-center py-4 sm:py-6 gap-3 sm:hidden">
          <div class="flex items-center justify-center w-full">
            <div class="w-12 h-12 rounded-xl  flex items-center justify-center shadow-lg">
              <img src="/logo/GoTapMode.png" alt="Logo" class="w-8 h-8 object-contain" />
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900">GoTapMode</h1>
            <p class="text-sm text-gray-600 mt-1">NFC Card Writer</p>
          </div>
          <div class="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            <div class="w-2 h-2 rounded-full animate-pulse" :class="nfcSupported && nfcEnabled ? 'bg-green-500' : 'bg-red-500'"></div>
            <span class="text-sm text-gray-600 font-medium">
              {{ nfcSupported && nfcEnabled ? 'NFC Ready' : 'NFC Not Ready' }}
            </span>
          </div>
        </div>

        <!-- Desktop: Original Layout -->
        <div class="hidden sm:flex sm:justify-between sm:items-center py-4 sm:py-6 gap-3 sm:gap-0 ml-20">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-xl  flex items-center justify-center shadow-lg mr-4">
              <img src="/logo/GoTapMode.png" alt="Logo" class="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 class="text-2xl lg:text-3xl font-bold text-gray-900">NFC Card Writer</h1>
              <p class="text-sm text-gray-600 mt-1">Write and configure NFC cards</p>
            </div>
          </div>
          <div class="flex items-center justify-end space-x-4">
            <div class="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
              <div class="w-2 h-2 rounded-full animate-pulse" :class="nfcSupported && nfcEnabled ? 'bg-green-500' : 'bg-red-500'"></div>
              <span class="text-sm text-gray-600 font-medium">
                {{ nfcSupported && nfcEnabled ? 'NFC Ready' : 'NFC Not Ready' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      <!-- NFC Card Scanner -->
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-4 sm:p-6 mb-4 sm:mb-6 lg:mb-8">
        <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
          <div class="w-10 h-10 rounded-xl  flex items-center justify-center shadow-md">
            <img src="/icons/scan.png" alt="Scan" class="w-5 h-5" />
          </div>
          <h2 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Scan NFC Card</h2>
        </div>
        
        <div class="space-y-4 sm:space-y-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Card UID</label>
            <div class="relative">
              <input
                v-model="cardData.unique_code"
                type="text"
                readonly
                placeholder="Scan a card to get UID..."
                class="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <div class="absolute right-3 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <button
            @click="scanNfc"
            :disabled="scanning || !nfcSupported || !nfcEnabled"
            class="w-full px-6 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            <div class="flex items-center justify-center gap-2">
              <svg v-if="!scanning" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.582m0 0a8.001 8.001 0 00-15.356-2m15.356 2H15"></path>
              </svg>
              {{ scanning ? 'Scanning...' : 'Scan NFC Card' }}
            </div>
          </button>
        </div>
      </div>

      <!-- Reset Button -->
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-6 sm:mb-8">
        <div class="flex justify-center">
          <button
            @click="resetForm"
            class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-xl hover:from-gray-300 hover:to-gray-400 text-base font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <div class="flex items-center justify-center gap-2">
              <img src="/icons/refresh.png" alt="Refresh" class="w-5 h-5 opacity-70" />
              Reset Form
            </div>
          </button>
        </div>
      </div>

      <!-- Status Messages -->
      <div v-if="error" class="bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl p-6 mb-4 sm:mb-6 shadow-lg">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 mt-0.5">
            <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              <svg class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-base text-red-800 font-medium">{{ error }}</p>
          </div>
        </div>
      </div>

      <div v-if="success" class="bg-green-50/90 backdrop-blur-sm border border-green-200 rounded-2xl p-6 mb-4 sm:mb-6 shadow-lg">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 mt-0.5">
            <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-base text-green-800 font-medium">{{ success }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Writing Modal -->
    <div v-if="showWritingModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div class="relative top-4 sm:top-20 mx-auto p-4 sm:p-5 border-0 w-11/12 sm:w-96 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-4">Write to NFC Card</h3>
          <div class="mt-4 px-4 sm:px-6 py-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
            <div class="text-sm text-gray-700 space-y-3 text-left">
              <div class="bg-white p-3 rounded-lg border border-gray-200">
                <span class="font-semibold text-gray-800">Card UID:</span><br>
                <span class="break-all text-gray-600 font-mono text-xs">{{ cardData?.unique_code }}</span>
              </div>
              <div class="bg-white p-3 rounded-lg border border-gray-200">
                <span class="font-semibold text-gray-800">URL:</span><br>
                <span class="break-all text-gray-600 font-mono text-xs">{{ cardData?.url || `googlechrome://navigate?url=${encodeURIComponent(`https://192.168.50.56:5173/${cardData?.activation_code || 'Will be generated'}`)}` }}</span>
              </div>
              <div class="bg-white p-3 rounded-lg border border-gray-200">
                <span class="font-semibold text-gray-800">Activation Code:</span><br>
                <span class="break-all text-gray-600 font-mono text-xs">{{ cardData?.activation_code || 'Will be generated' }}</span>
              </div>
            </div>
          </div>
          
          <div class="items-center px-2 sm:px-4 py-4 space-y-3">
            <button
              @click="startWriting"
              :disabled="writing"
              class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div class="flex items-center justify-center gap-2">
                <svg v-if="!writing" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.582m0 0a8.001 8.001 0 00-15.356-2m15.356 2H15"></path>
                </svg>
                {{ writing ? 'Writing...' : 'Write to Card' }}
              </div>
            </button>
            <button
              @click="closeWritingModal"
              class="w-full px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-sm sm:text-base font-semibold rounded-xl shadow-md hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- NFC Enable Modal -->
    <div v-if="showNfcEnableModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div class="relative top-4 sm:top-20 mx-auto p-4 sm:p-5 border-0 w-11/12 sm:w-96 shadow-2xl rounded-2xl bg-white/95 backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg">
            <svg class="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-4">NFC Not Enabled</h3>
          <div class="mt-4 px-4 sm:px-6 py-4 bg-yellow-50/80 rounded-xl border border-yellow-200/50">
            <p class="text-sm text-yellow-800">Please enable NFC on your device to use this feature.</p>
          </div>
          <div class="items-center px-2 sm:px-4 py-4 space-y-3">
            <button
              @click="enableNfc"
              class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Try to Enable NFC
            </button>
            <button
              @click="showNfcEnableModal = false"
              class="w-full px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-sm sm:text-base font-semibold rounded-xl shadow-md hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div v-if="showSidebar" @click="showSidebar = false" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
    <div v-if="showSidebar" class="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/logo/GoTapMode.png" alt="logo" class="w-9 h-9 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900">GoTapMode</h3>
            <p class="text-sm text-gray-600">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav class="p-6 space-y-3">
        <router-link to="/admin/dashboard" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          </svg>
          Dashboard
        </router-link>
        <router-link to="/admin/users" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          Users
        </router-link>
        <router-link to="/admin/nfc-writing" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Writing
        </router-link>
        <router-link to="/admin/nfc-cards" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Cards
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          Administrators
        </router-link>
        <button @click="logout" class="flex items-center gap-4 px-6 py-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { adminApi, FRONTEND_BASE } from '../config/api.js'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive state
const scanning = ref(false)
const writing = ref(false)
const error = ref(null)
const success = ref(null)
const showWritingModal = ref(false)
const showNfcEnableModal = ref(false)
const nfcSupported = ref(false)
const nfcEnabled = ref(false)
const showSidebar = ref(false)

const cardData = ref({
  unique_code: '',
  activation_code: '',
  url: '',
  card_user_id: null,
  is_activated: 0
})

// NFC Scanning
const scanNfc = async () => {
  if (!nfcSupported.value || !nfcEnabled.value) {
    error.value = 'NFC is not available. Please enable NFC first.'
    return
  }

  scanning.value = true
  error.value = null
  success.value = null

  try {
    const ndef = new NDEFReader()
    await ndef.scan()

    ndef.addEventListener('reading', async ({ message, serialNumber }) => {
      const uid = serialNumber || 'Unknown UID'
      cardData.value.unique_code = uid
      scanning.value = false
      
      // If serial is detected, proceed directly to writing
      if (uid && uid !== 'Unknown UID') {
        success.value = 'NFC card scanned successfully! Proceeding to write URL and activation code...'
        
        // Show writing modal immediately
        setTimeout(() => {
          showWritingModal.value = true
          success.value = null
        }, 1000)
      } else {
        error.value = 'No valid serial number detected. Please try again.'
      }
    })

    ndef.addEventListener('readingerror', () => {
      error.value = 'Error reading NFC card. Please try again.'
      scanning.value = false
    })

    // Timeout after 10 seconds
    setTimeout(() => {
      if (scanning.value) {
        scanning.value = false
        error.value = 'Scanning timeout. Please try again.'
      }
    }, 10000)

  } catch (err) {
    if (err.name === 'NotAllowedError') {
      nfcEnabled.value = false
      error.value = 'NFC permission denied. Please enable NFC and try again.'
      showNfcEnableModal.value = true
    } else {
      error.value = 'Failed to scan NFC card: ' + err.message
    }
    scanning.value = false
  }
}

// Save Card function removed - now integrated into writing flow

// Start Writing
const startWriting = async () => {
  if (!cardData.value?.unique_code) return

  writing.value = true
  error.value = null
  success.value = null

  try {
    // Generate activation code FIRST before writing to NFC
    const activationCode = Math.floor(100000 + Math.random() * 900000).toString()
    cardData.value.activation_code = activationCode
    
    const ndef = new NDEFReader()
    
         // Write both the URL and the activation code as separate records
     const baseUrl = `${FRONTEND_BASE}/${cardData.value.activation_code}`
    
    
    // Set the URL in cardData for database storage (store the Chrome scheme URL)
    cardData.value.url = baseUrl
    
          await ndef.write({
        records: [
          {
            recordType: 'url',
            data: baseUrl
          },
          {
            recordType: 'text',
            data: cardData.value.activation_code
          }
        ]
      })

    success.value = 'URL and activation code successfully written to NFC card! Now saving to database...'
    
    // After successful writing, save to database
    try {

      const response = await adminApi.createNfcCard(cardData.value)
      
      success.value = 'URL and activation code written to NFC card and saved to database successfully!'
      
      // Close modal and reset form after 2 seconds
      setTimeout(() => {
        closeWritingModal()
        resetForm()
      }, 2000)
      
    } catch (dbError) {
      error.value = 'URL and activation code written to NFC card successfully, but failed to save to database: ' + dbError.message
    }

  } catch (err) {
    if (err.name === 'NotAllowedError') {
      error.value = 'NFC permission denied. Please enable NFC and try again.'
      nfcEnabled.value = false
      showNfcEnableModal.value = true
    } else if (err.name === 'NotSupportedError') {
      error.value = 'NFC writing is not supported on this device.'
    } else if (err.message.includes('Failed to execute write')) {
      error.value = 'Failed to execute write. Check if the NFC card is writable and properly positioned.'
    } else {
      error.value = 'Failed to write URL and activation code to NFC card: ' + err.message
    }
  } finally {
    writing.value = false
  }
}

// Close Writing Modal
const closeWritingModal = () => {
  showWritingModal.value = false
}

// Reset Form
const resetForm = () => {
  cardData.value = {
    unique_code: '',
    activation_code: '',
    url: '',
    card_user_id: null,
    is_activated: 0
  }
  error.value = null
  success.value = null
}

// Check NFC Support
const checkNfcSupport = async () => {
  try {
    if ('NDEFReader' in window) {
      nfcSupported.value = true
      const ndef = new NDEFReader()
      await ndef.scan()
      nfcEnabled.value = true
      
      // Stop scan immediately
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

// Enable NFC
const enableNfc = async () => {
  try {
    const ndef = new NDEFReader()
    await ndef.scan()
    nfcEnabled.value = true
    showNfcEnableModal.value = false
    success.value = 'NFC enabled successfully!'
    setTimeout(() => success.value = null, 3000)
  } catch (err) {
    error.value = 'Failed to enable NFC: ' + err.message
    showNfcEnableModal.value = false
  }
}

// Navigation functions
function goDashboard() {
  showSidebar.value = false
  router.push({ name: 'admin-dashboard' })
}

function goUsers() {
  showSidebar.value = false
  router.push({ name: 'admin-users' })
}

function goNfcWriting() {
  showSidebar.value = false
  router.push({ name: 'admin-nfc-writing' })
}

function goAdministrators() {
  showSidebar.value = false
  router.push({ name: 'admin-administrators' })
}

// Logout
const logout = async () => {
  try {
    localStorage.removeItem('gtm_admin_token')
    localStorage.removeItem('gtm_admin_user')
    router.replace({ name: 'login' })
  } catch (err) {
    console.error('Logout error:', err)
  }
}

// Initialize on mount
onMounted(async () => {
  await checkNfcSupport()
})
</script>

<style scoped>
/* Custom styles if needed */
</style>

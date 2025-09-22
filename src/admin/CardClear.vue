<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
    <!-- Desktop Sidebar -->
    <div class="hidden lg:flex flex-col bg-white border-r border-gray-200 shadow-sm" :class="sidebarCollapsed ? 'w-16' : 'w-64'">
      <!-- Sidebar Header -->
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center" :class="sidebarCollapsed ? 'justify-center' : 'justify-between'">
          <div v-if="!sidebarCollapsed" class="flex items-center gap-3">
            <img class="w-10 h-10" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
            <div>
              <h1 class="m-0 text-lg font-extrabold tracking-tight text-gray-900">Go Tap Mode</h1>
              <p class="m-0 text-xs text-gray-600">Activate Connection Instantly</p>
            </div>
          </div>
          <!-- Collapse Button -->
          <button @click="sidebarCollapsed = !sidebarCollapsed" class="w-8 h-8 rounded-lg border border-gray-300 bg-white flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors duration-200">
            <span class="block w-4 h-0.5 bg-gray-700"></span>
            <span class="block w-4 h-0.5 bg-gray-700"></span>
            <span class="block w-4 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>

      <!-- Sidebar Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <router-link to="/admin/dashboard" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Dashboard</span>
        </router-link>
        <router-link to="/admin/users" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Users</span>
        </router-link>
        <router-link to="/admin/nfc-writing" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">NFC Writing</span>
        </router-link>
        <router-link to="/admin/card-clear" class="flex items-center gap-3 px-3 py-2 bg-red-100 text-red-700 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Card Clear</span>
        </router-link>
        <router-link to="/admin/nfc-cards" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">NFC Cards</span>
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Administrators</span>
        </router-link>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-gray-200">
        <button @click="logout" class="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Logout</span>
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <!-- Mobile Header -->
      <div class="lg:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40 shadow-sm flex-shrink-0">
        <div class="px-3 sm:px-6 py-4">
          <div class="flex items-center justify-between">
            <!-- Left Section - Logo and Brand -->
            <div class="flex items-center gap-3">
              <img class="w-12 h-12" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
              <div>
                <h1 class="m-0 text-xl font-extrabold tracking-tight text-gray-900">Go Tap Mode</h1>
                <p class="m-0 text-xs text-gray-600">Activate Connection Instantly</p>
              </div>
            </div>

            <!-- Right Section - Menu Button -->
            <button @click="showSidebar = !showSidebar" class="w-12 h-12 sm:w-10 sm:h-10 rounded-lg border border-gray-300 bg-white flex flex-col items-center justify-center gap-1.5 sm:gap-1 hover:bg-gray-50 transition-colors duration-200">
              <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
              <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
              <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>
      </div>

      <main class="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
        <!-- Page Title -->
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900">NFC Card Clear</h2>
          <p class="text-sm text-gray-600 mt-2">Clear data written to the NFC card</p>
        </div>

        <!-- NFC Status Indicator -->
        <div class="flex justify-center">
          <div class="flex items-center space-x-2 bg-gray-100 px-4 py-2 border border-gray-200">
            <div class="w-2 h-2 rounded-full animate-pulse" :class="nfcSupported && nfcEnabled ? 'bg-green-500' : 'bg-red-500'"></div>
            <span class="text-sm text-gray-600 font-medium">
              {{ nfcSupported && nfcEnabled ? 'NFC Ready' : 'NFC Not Ready' }}
            </span>
          </div>
        </div>

        <!-- Card Scanner -->
        <div class="bg-white border border-gray-200 p-6">
          <div class="text-center mb-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-2">Scan Card to Clear</h2>
            <p class="text-sm text-gray-600">Place the NFC card near the device to scan and clear its data</p>
          </div>
          
          <div class="space-y-4">
            <div>
              <label for="card-written-url" class="block text-sm font-medium text-gray-700 mb-2">Written URL</label>
              <input
                id="card-written-url"
                name="card-written-url"
                v-model="cardData.written_url"
                type="text"
                readonly
                placeholder="Scan a card to view written URL..."
                class="w-full px-3 py-2 border border-gray-300 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div class="flex justify-center gap-3">
              <button
                @click="scanNfc"
                :disabled="scanning || !nfcSupported || !nfcEnabled"
                class="px-6 py-2 bg-red-600 text-white border border-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed text-sm font-medium transition-colors duration-200"
              >
                <div class="flex items-center justify-center gap-2">
                  <svg v-if="!scanning" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <svg v-else class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.582m0 0a8.001 8.001 0 00-15.356-2m15.356 2H15"></path>
                  </svg>
                  {{ scanning ? 'Scanning...' : 'Scan Card' }}
                </div>
              </button>
              
              <button
                @click="resetForm"
                class="px-6 py-2 bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300 text-sm font-medium transition-colors duration-200"
              >
                <div class="flex items-center justify-center gap-2">
                  <img src="/icons/refresh.png" alt="Refresh" class="w-4 h-4" />
                  Reset Form
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Status Messages -->
        <div v-if="error" class="bg-red-50 border border-red-200 p-4">
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 mt-0.5">
              <div class="w-6 h-6 bg-red-100 flex items-center justify-center">
                <svg class="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-red-800 font-medium">{{ error }}</p>
            </div>
          </div>
        </div>

        <div v-if="success" class="bg-green-50 border border-green-200 p-4">
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 mt-0.5">
              <div class="w-6 h-6 bg-green-100 flex items-center justify-center">
                <svg class="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-green-800 font-medium">{{ success }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Clear Confirmation Modal -->
    <div v-if="showClearModal" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div class="relative top-4 sm:top-20 mx-auto p-4 w-11/12 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 shadow-lg">
            <svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-4">Clear NFC Card Data</h3>
          <div class="mt-4 px-4 sm:px-6 py-4 bg-red-50/80 rounded-xl border border-red-200/50">
            <div class="text-sm text-red-800 space-y-3 text-left">
              <div class="bg-white p-3 rounded-lg border border-red-200 shadow-sm">
                <span class="font-semibold text-red-800">Written URL:</span><br>
                <span class="break-all text-red-600 font-mono text-xs">{{ cardData?.written_url || 'No URL found' }}</span>
              </div>
              <p class="text-red-700 font-medium">
                <strong>Warning:</strong> This action will clear the URL and data written to the NFC card. This cannot be undone.
              </p>
            </div>
          </div>
          
          <div class="items-center px-2 sm:px-4 py-4 space-y-3">
            <button
              @click="startClearing"
              :disabled="clearing"
              class="w-full px-6 py-4 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:bg-gray-400 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div class="flex items-center justify-center gap-2">
                <svg v-if="!clearing" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.582m0 0a8.001 8.001 0 00-15.356-2m15.356 2H15"></path>
                </svg>
                {{ clearing ? 'Clearing...' : 'Clear Card Data' }}
              </div>
            </button>
            <button
              @click="closeClearModal"
              class="w-full px-6 py-3 bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold rounded-xl shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- NFC Enable Modal -->
    <div v-if="showNfcEnableModal" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div class="relative top-4 sm:top-20 mx-auto p-4 w-11/12 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 shadow-lg">
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
              class="w-full px-6 py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Try to Enable NFC
            </button>
            <button
              @click="showNfcEnableModal = false"
              class="w-full px-6 py-3 bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold rounded-xl shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <div v-if="showSidebar" @click="showSidebar = false" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
    <div v-if="showSidebar" class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center gap-4">
          <img src="/logo/GoTapMode.png" alt="logo" class="w-12 h-12 object-contain" />
          <div>
            <h3 class="text-lg font-bold text-gray-900">GoTapMode</h3>
            <p class="text-sm text-gray-600">Activate Connection Instantly</p>
          </div>
        </div>
      </div>
      <nav class="p-6 space-y-4">
        <router-link to="/admin/dashboard" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          </svg>
          Dashboard
        </router-link>
        <router-link to="/admin/users" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          Users
        </router-link>
        <router-link to="/admin/nfc-writing" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Writing
        </router-link>
        <router-link to="/admin/card-clear" class="flex items-center gap-4 px-6 py-4 bg-red-100 text-red-700 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Card Clear
        </router-link>
        <router-link to="/admin/nfc-cards" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          NFC Cards
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
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
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive state
const scanning = ref(false)
const clearing = ref(false)
const error = ref(null)
const success = ref(null)
const showClearModal = ref(false)
const showNfcEnableModal = ref(false)
const nfcSupported = ref(false)
const nfcEnabled = ref(false)
const showSidebar = ref(false)
const sidebarCollapsed = ref(false)

const cardData = ref({
  unique_code: '',
  written_url: '',
  id: null
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
      
      // Read the URL from the NFC card
      let writtenUrl = 'No URL found'
      if (message.records && message.records.length > 0) {
        for (const record of message.records) {
          if (record.recordType === 'url') {
            const decoder = new TextDecoder()
            writtenUrl = decoder.decode(record.data)
            break
          } else if (record.recordType === 'text') {
            const decoder = new TextDecoder()
            const textData = decoder.decode(record.data)
            // Check if it's a URL (starts with http)
            if (textData.startsWith('http')) {
              writtenUrl = textData
              break
            }
          }
        }
      }
      
      cardData.value.written_url = writtenUrl
      scanning.value = false
      
      // If serial is detected, proceed directly to clearing confirmation
      if (uid && uid !== 'Unknown UID') {
        success.value = 'NFC card scanned successfully!'
        
        // Show clearing modal immediately
        setTimeout(() => {
          showClearModal.value = true
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

// Start Clearing
const startClearing = async () => {
  if (!cardData.value?.unique_code) return

  clearing.value = true
  error.value = null
  success.value = null

    try {
      // Clear the NFC card by writing empty data
      const ndef = new NDEFReader()
      
      // Write a single empty text record to clear the card
      // Don't try to write empty URL records as they're invalid
      await ndef.write({
        records: [
          {
            recordType: 'text',
            data: ''
          }
        ]
      })
    
    success.value = 'NFC card cleared successfully! The card data has been erased.'
    
    // Close modal and reset form after 2 seconds
    setTimeout(() => {
      closeClearModal()
      resetForm()
    }, 2000)

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
      error.value = 'Failed to clear NFC card: ' + err.message
    }
  } finally {
    clearing.value = false
  }
}

// Close Clear Modal
const closeClearModal = () => {
  showClearModal.value = false
}

// Reset Form
const resetForm = () => {
  cardData.value = {
    unique_code: '',
    written_url: '',
    id: null
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

// Logout
const logout = async () => {
  localStorage.removeItem('gtm_admin_token')
  localStorage.removeItem('gtm_admin_user')
  router.replace({ name: 'login' })
}

// Initialize on mount
onMounted(async () => {
  await checkNfcSupport()
})
</script>

<style scoped>
/* Custom styles if needed */
</style>

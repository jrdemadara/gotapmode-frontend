<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
    <!-- Desktop Sidebar -->
    <div class="hidden lg:flex flex-col bg-white/80 backdrop-blur-sm border-r border-gray-200/50 shadow-xl" :class="sidebarCollapsed ? 'w-16' : 'w-64'">
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
        <router-link to="/admin/card-clear" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
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
    <div class="flex-1 flex flex-col">
      <!-- Mobile Header -->
      <div class="lg:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
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

      <main class="flex-1 p-6 sm:p-8">
      <div class="max-w-7xl mx-auto w-full space-y-8 sm:space-y-10">

      <div v-if="loading || error" class="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8 text-center">
        <div v-if="loading" class="text-gray-600 text-lg">Loading admin dashboard…</div>
        <div v-else class="text-red-600 text-lg">{{ error }}</div>
      </div> 
      
      <template v-else>
        <!-- Main Metrics Row - Stacked on mobile, responsive on larger screens -->
        <section>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            <!-- Registered Users -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Registered Users</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.card_users }}</div>
                  <div class="text-xs text-blue-600 leading-tight mt-0.5">Today: {{ last(stats.series?.data?.card_users) }}</div>
                </div>
              </div>
            </div>

            <!-- Cards -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Cards</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.cards }}</div>
                  <div class="text-xs text-purple-600 leading-tight mt-0.5">Today: {{ last(stats.series?.data?.cards) }}</div>
                </div>
              </div>
            </div>

            <!-- Activated -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Activated</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.activated_cards }}</div>
                  <div class="text-xs text-green-600 leading-tight mt-0.5">Today: {{ last(stats.series?.data?.activations) }}</div>
                </div>
              </div>
            </div>

            <!-- Expired Cards -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Expired Cards</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.expired_cards }}</div>
                  <div class="text-xs text-orange-600 leading-tight mt-0.5">Expired</div>
                </div>
              </div>
            </div>

            <!-- Taps / Day -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-pink-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Taps / Day</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ last(stats.series?.data?.taps) }}</div>
                  <div class="text-xs text-pink-600 leading-tight mt-0.5">vs. yesterday: {{ deltaSign(last(stats.series?.data?.taps) - secondLast(stats.series?.data?.taps)) }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Metrics Row -->
        <section class="mt-6 sm:mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <!-- Email Addresses -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Email Addresses</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.emails }}</div>
                  <div class="text-xs text-blue-600 leading-tight mt-0.5">Contact Info</div>
                </div>
              </div>
            </div>

            <!-- Contact Numbers -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Contact Numbers</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.phones }}</div>
                  <div class="text-xs text-green-600 leading-tight mt-0.5">Phone Numbers</div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Social Links</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.socials }}</div>
                  <div class="text-xs text-purple-600 leading-tight mt-0.5">Social Media</div>
                </div>
              </div>
            </div>

            <!-- Other Links -->
            <div class="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 overflow-hidden min-h-[90px] sm:min-h-[110px]">
              <div class="flex items-center h-full gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/></svg>
                </div>
                <div class="flex-1">
                  <div class="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Other Links</div>
                  <div class="text-3xl sm:text-3xl font-black text-gray-900 leading-none">{{ stats.totals.others }}</div>
                  <div class="text-xs text-orange-600 leading-tight mt-0.5">Web Links</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Chart and Sidebar Section -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Chart Section -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 lg:col-span-2 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <!-- Header Section -->
            <div class="flex flex-col mb-4 sm:mb-6">
              <div class="mb-3 sm:mb-0">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">Activity Overview</h3>
                <p class="text-xs sm:text-sm text-gray-600">Last 14 days performance metrics</p>
              </div>
              <!-- Chart Legend -->
              <div class="mt-3 sm:mt-4">
                <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                  <div class="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 bg-gray-50 rounded-md sm:rounded-lg border border-gray-200">
                    <span class="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-900"></span>
                    <span class="text-xs sm:text-sm font-medium text-gray-700">Users</span>
                  </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 bg-gray-50 rounded-md sm:rounded-lg border border-gray-200">
                    <span class="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-500"></span>
                    <span class="text-xs sm:text-sm font-medium text-gray-700">Cards</span>
                </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 bg-blue-50 rounded-md sm:rounded-lg border border-blue-200">
                    <span class="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600"></span>
                    <span class="text-xs sm:text-sm font-medium text-blue-700">Activations</span>
                </div>
                  <div class="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 bg-pink-50 rounded-md sm:rounded-lg border border-pink-200">
                    <span class="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-pink-600"></span>
                    <span class="text-xs sm:text-sm font-medium text-pink-700">Taps</span>
                </div>
                </div>
              </div>
            </div>
            
            <!-- Chart Container -->
            <div class="h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-100 shadow-inner">
               <div v-if="stats.series?.data && stats.series?.dates" class="w-full h-full">
                 <apexchart 
                   :options="chartOptions" 
                   :series="chartSeries"
                   height="100%"
                   width="100%"
                 />
               </div>
               <div v-else class="flex items-center justify-center h-full">
                 <div class="text-center px-4">
                   <div class="relative">
                     <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-4 border-gray-200 mx-auto mb-3 sm:mb-4"></div>
                     <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-4 border-blue-600 border-t-transparent absolute top-0 left-1/2 transform -translate-x-1/2 mb-3 sm:mb-4"></div>
                   </div>
                   <div class="text-gray-600 font-medium text-sm sm:text-base">Loading chart data...</div>
                   <div class="text-xs sm:text-sm text-gray-500 mt-1">Preparing your analytics</div>
                 </div>
               </div>
             </div>
          </div>

          <!-- Sidebar Section -->
          <div class="lg:col-span-1 space-y-4 sm:space-y-6">
            <!-- Recent Activations -->
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">Recent Activations</h3>
              <div v-if="stats.recent_activated_cards.length === 0" class="text-sm text-gray-500 text-center py-4">No recent activations</div>
              <ul v-else class="space-y-3">
                <li v-for="c in stats.recent_activated_cards" :key="c.id" class="p-3 bg-gray-50 rounded border border-gray-200">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="font-semibold text-sm text-gray-900">Card {{ c.unique_code }}</div>
                      <div class="text-xs text-gray-600">User ID: {{ c.card_user_id }}</div>
                    </div>
                    <div class="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">{{ formatDate(c.updated_at) }}</div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- System Health -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">System Health</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                  <div>
                    <div class="text-sm text-gray-600 font-medium">API Status</div>
                    <div class="text-lg font-bold" :class="health.ok ? 'text-green-600' : 'text-red-600'">
                      {{ health.ok ? 'OK' : 'DOWN' }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-600 font-medium">Response Time</div>
                    <div class="text-lg font-bold text-gray-900">{{ health.rttMs }} ms</div>
                  </div>
                </div>
                <button @click="refreshHealth" class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Refresh Status
                </button>
              </div>
            </div>
          </div>
        </section>
      </template>
      </div>
    </main>
    </div>

    <!-- Mobile Sidebar -->
    <div v-if="showSidebar" @click="showSidebar = false" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
    <div v-if="showSidebar" class="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm shadow-2xl z-50 transform transition-transform duration-300 lg:hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center gap-4">
          <img src="/logo/GoTapMode.png" alt="logo" class="w-12 h-12 object-contain" />
          <div>
            <h3 class="text-lg font-bold text-gray-900">GoTapMode</h3>
            <p class="text-sm text-gray-600">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav class="p-6 space-y-3">
        <router-link to="/admin/dashboard" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
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
        <router-link to="/admin/nfc-writing" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Writing
        </router-link>
        <router-link to="/admin/card-clear" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Card Clear
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
import { ref, computed, onMounted, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi, api } from '../config/api'


const router = useRouter()
const loading = ref(true)
const error = ref('')
const stats = ref({ totals: { admins: 0, card_users: 0, cards: 0, activated_cards: 0, expired_cards: 0 }, series: { dates: [], data: { card_users: [], cards: [], activations: [] } }, recent_activated_cards: [] })
const adminName = ref('Admin')
const showSidebar = ref(false)
const sidebarCollapsed = ref(false)
const health = ref({ ok: false, time: '', rttMs: '-' })

// Uniform stat card component for consistent layout/placement
const StatCard = defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: [String, Number], required: true },
    color: { type: String, default: 'blue' },
    chipText: { type: String, default: '' },
  },
  setup(props, { slots }) {
    const styles = computed(() => {
      const map = {
        blue:   { from: 'from-blue-100',   to: 'to-blue-200',   text: 'text-blue-600',   chipText: 'text-blue-700',   chipBg: 'bg-blue-50' },
        purple: { from: 'from-purple-100', to: 'to-purple-200', text: 'text-purple-600', chipText: 'text-purple-700', chipBg: 'bg-purple-50' },
        green:  { from: 'from-green-100',  to: 'to-green-200',  text: 'text-green-600',  chipText: 'text-green-700',  chipBg: 'bg-green-50' },
        orange: { from: 'from-orange-100', to: 'to-orange-200', text: 'text-orange-600', chipText: 'text-orange-700', chipBg: 'bg-orange-50' },
        red:    { from: 'from-red-100',    to: 'to-red-200',    text: 'text-red-600',    chipText: 'text-red-700',    chipBg: 'bg-red-50' },
        pink:   { from: 'from-pink-100',   to: 'to-pink-200',   text: 'text-pink-600',   chipText: 'text-pink-700',   chipBg: 'bg-pink-50' },
      }
      return map[props.color] || map.blue
    })
    return { styles, slots }
  },
  template: `
    <div class="min-h-[160px] bg-white/95 rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
      <div class="h-full flex flex-col">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-md" :class="[styles.from, styles.to]">
            <slot name="icon"></slot>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-xs sm:text-sm text-gray-700 font-bold leading-tight min-h-[1.5rem]">{{ label }}</div>
            <div class="mt-1 text-3xl font-extrabold text-gray-900 leading-none truncate">{{ value }}</div>
          </div>
        </div>
        <div v-if="chipText" class="mt-auto pt-3">
          <span class="inline-block text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full" :class="[styles.chipText, styles.chipBg]">{{ chipText }}</span>
        </div>
      </div>
    </div>
  `,
})

// derived
const unactivatedCards = computed(() => Math.max(0, (stats.value.totals?.cards || 0) - (stats.value.totals?.activated_cards || 0)))

// Chart data computed properties
const chartSeries = computed(() => {
  if (!stats.value.series?.data || !stats.value.series?.dates) return []
  
  return [
    {
      name: 'Users',
      data: stats.value.series.data.card_users?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Cards',
      data: stats.value.series.data.cards?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Activations',
      data: stats.value.series.data.activations?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Taps',
      data: stats.value.series.data.taps?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    }
  ]
})

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
    height: '100%',
    fontFamily: 'Inter, system-ui, sans-serif',
    zoom: {
      enabled: true,
      type: 'x'
    },
    toolbar: {
      show: true,
      offsetY: -10,
      tools: {
        download: true,
        selection: false,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      }
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    background: 'transparent'
  },
  colors: ['#1F2937', '#6B7280', '#3B82F6', '#EC4899'],
  stroke: {
    curve: 'smooth',
    width: [3, 3, 3, 4],
    lineCap: 'round'
  },
  markers: {
    size: [4, 4, 4, 5],
    strokeWidth: 2,
    strokeColors: '#fff',
    hover: {
      size: [6, 6, 6, 7]
    }
  },
  grid: {
    borderColor: '#F3F4F6',
    strokeDashArray: 3,
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'MMM dd',
      style: {
        colors: '#6B7280',
        fontSize: '11px',
        fontWeight: 500
      },
      offsetY: 5
    },
    axisBorder: {
      show: true,
      color: '#E5E7EB'
    },
    axisTicks: {
      show: true,
      color: '#E5E7EB'
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '11px',
        fontWeight: 500
      },
      offsetX: -5
    },
    title: {
      text: 'Activity Count',
      style: {
        color: '#374151',
        fontSize: '13px',
        fontWeight: 600
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'light',
    style: {
      fontSize: '12px'
    },
    x: {
      format: 'MMM dd, yyyy'
    },
    y: {
      formatter: function(value, { seriesIndex, w }) {
        const seriesName = w.config.series[seriesIndex].name
        return `<strong>${value}</strong> ${seriesName.toLowerCase()}`
      }
    },
    marker: {
      show: true
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.05,
      gradientToColors: ['#F9FAFB', '#F3F4F6', '#EBF8FF', '#FDF2F8'],
      inverseColors: false,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 100]
    }
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        legend: {
          show: false
        },
        chart: {
          toolbar: {
            show: false
          }
        }
      }
    }
  ]
}))

function last(arr) { try { return Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0 } catch { return 0 } }

function formatDate(val) { try { return new Date(val).toLocaleString() } catch { return val } }

async function logout() { 
  try {
    await adminApi.logout()
  } catch (e) {
    console.log('Logout API call failed:', e)
    // Even if API call fails, we still clear local storage and redirect
  }
  // Always clear local storage and redirect, regardless of API call success
  localStorage.removeItem('gtm_admin_token')
  localStorage.removeItem('gtm_admin_user')
  router.replace({ name: 'login' })
}

async function refreshHealth() {
  try { const t0 = performance.now(); const res = await api.get('/health'); const t1 = performance.now(); health.value = { ok: !!res?.ok, time: res?.time || '', rttMs: Math.round(t1 - t0) } }
  catch { health.value = { ok: false, time: '', rttMs: '-' } }
}

async function load() {
  loading.value = true; error.value = ''
  try { 
    const data = await adminApi.stats(); 
    console.log('Admin stats data:', data);
    stats.value = data 
  } catch (e) { 
    console.error('Failed to load stats:', e);
    error.value = e?.message || 'Failed to load stats' 
  }
  loading.value = false
}

function getAdmin() { try { const raw = localStorage.getItem('gtm_admin_user'); if (raw) adminName.value = JSON.parse(raw)?.name || 'Admin' } catch {} }

function secondLast(arr) { try { return Array.isArray(arr) && arr.length > 1 ? arr[arr.length - 2] : 0 } catch { return 0 } }
function deltaSign(n) { const v = Number(n||0); const sign = v>0?'+':''; return `${sign}${v}` }

onMounted(() => { getAdmin(); load(); refreshHealth() })
</script>



<style scoped>
</style>



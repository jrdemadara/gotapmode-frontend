<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex">
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
        <router-link to="/admin/card-clear" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          <span v-if="!sidebarCollapsed">Card Clear</span>
        </router-link>
        <router-link to="/admin/nfc-cards" class="flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
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

      <main class="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 lg:space-y-8 overflow-y-auto">
      <!-- Page Title -->
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900">NFC Cards Management System</h2>
      </div>

      <!-- Loading and Error States -->
      <div v-if="loading" class="bg-white rounded-2xl shadow p-8 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <div class="text-lg text-gray-600">Loading NFC cards...</div>
      </div>

      <div v-else-if="error" class="bg-white rounded-2xl shadow p-6 text-center">
        <div class="text-red-600 text-lg mb-2">{{ error }}</div>
        <button @click="fetchCards" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Try Again
        </button>
      </div>

      <!-- Cards Table -->
      <div v-else class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <!-- Table Header -->
        <div class="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex items-center gap-3">
                <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-10 h-10" />
                <div>
                  <h2 class="text-xl font-bold text-gray-900">NFC Cards</h2>
                  <p class="text-sm text-gray-600">Manage and view all NFC cards</p>
                </div>
              </div>
            </div>
            
            <!-- Search Section -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div class="relative w-full sm:w-80 lg:w-96">
                <input
                  id="nfc-search"
                  name="nfc-search"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by card ID, user name, or email..."
                  class="w-full pl-12 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div class="absolute left-4 top-3.5 text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Quick Actions (Desktop & Mobile) -->
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
                <button @click="openRestoreModal" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-red-700 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                  </svg>
                  <span class="hidden xs:inline">Restore</span>
                </button>
                <button @click="fetchCards" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span class="hidden xs:inline">Refresh</span>
                </button>
                <button @click="exportCards" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span class="hidden xs:inline">Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Table -->
        <div class="hidden lg:block w-full overflow-hidden">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <table class="w-full enhanced-table" role="table" aria-label="NFC Cards table">
              <thead class="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-b-2 border-gray-200/80">
                <tr class="backdrop-blur-sm">
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[20%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Card Details</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[25%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">User Information</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[15%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Status</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[20%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Expiration Date</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider w-[20%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Actions</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100/80">
                <tr v-for="(card, index) in paginatedCards" :key="card.id"
                    :class="[
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    ]"
                    role="row">
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                    <div class="flex items-center gap-3">
                      <div class="relative">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0 ring-2 ring-blue-100">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                          </svg>
                        </div>
                        <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-semibold text-gray-900 truncate leading-tight">{{ card.unique_code }}</div>
                        <div class="text-xs text-gray-500 mt-0.5">ID: {{ card.id }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[25%]" role="gridcell">
                    <div class="flex items-center gap-2 min-w-0">
                      <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-200">
                        <svg class="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors truncate leading-tight">{{ card.user?.name || 'Unknown User' }}</div>
                        <div class="text-xs text-gray-500 truncate">{{ card.user?.email || 'No email' }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[15%]" role="gridcell">
                    <div class="flex items-center">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 status-badge">
                        <div class="w-2 h-2 rounded-full mr-1.5 bg-emerald-500"></div>
                        {{ card.is_activated ? 'Activated' : 'Unactivated' }}
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                    <div class="flex items-center gap-2 min-w-0">
                      <div class="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors duration-200">
                        <svg class="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div v-if="card.expiry_date" class="text-sm font-medium text-gray-900 group-hover:text-yellow-700 transition-colors truncate leading-tight">{{ formatDate(card.expiry_date) }}</div>
                        <div v-else class="text-sm text-gray-500 italic">Not set</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 w-[20%]" role="gridcell">
                    <div class="flex items-center gap-1.5 justify-start">
                      <button @click="viewCard(card)" 
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="View card">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>View</span>
                      </button>
                      <button @click="deleteCard(card)" 
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-md hover:from-red-100 hover:to-red-200 hover:border-red-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="Delete card">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Mobile Cards -->
        <div class="lg:hidden">
          <div class="p-4 space-y-4">
            <div v-for="card in paginatedCards" :key="card.id"
                 class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div class="space-y-3">
                <!-- Card Header -->
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="text-base font-medium text-gray-900">{{ card.unique_code }}</div>
                    <div class="text-sm text-gray-600">{{ card.user?.name || 'Unknown User' }}</div>
                    <div class="text-xs text-gray-500">{{ card.user?.email || 'No email' }}</div>
                  </div>
                </div>

                <!-- Status and Date -->
                <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div class="flex items-center gap-2">
                    <span :class="[
                      'inline-flex items-center px-2 py-1 rounded text-xs font-medium',
                      card.is_activated ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    ]">
                      <div :class="[
                        'w-2 h-2 rounded-full mr-1',
                        card.is_activated ? 'bg-green-500' : 'bg-yellow-500'
                      ]"></div>
                      {{ card.is_activated ? 'Activated' : 'Unactivated' }}
                    </span>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-900">{{ formatDate(card.created_at) }}</div>
                    <div class="text-xs text-gray-500">{{ getTimeAgo(card.created_at) }}</div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="pt-2 flex gap-2">
                  <button @click="viewCard(card)"
                          class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    View
                  </button>
                  <button @click="deleteCard(card)"
                          class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-lg hover:bg-red-700 transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="filteredCards.length > 0" class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 w-full">
          <!-- Desktop Pagination Layout -->
          <div class="hidden lg:flex items-center justify-between">
            <!-- Left Section: Page Size & Info -->
            <div class="flex items-center gap-4">
              <!-- Page Size Selector -->
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-700">Show:</span>
                <select
                  id="nfc-items-per-page"
                  name="nfc-items-per-page"
                  v-model="itemsPerPage"
                  class="border border-gray-300 rounded px-7 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span class="text-sm text-gray-600">entries</span>
              </div>

              <!-- Pagination Info -->
              <div class="text-sm text-gray-700">
                <span class="font-medium">{{ paginationInfo.start }}-{{ paginationInfo.end }}</span>
                <span class="text-gray-500"> of </span>
                <span class="font-medium">{{ paginationInfo.total }}</span>
                <span class="text-gray-500"> results</span>
              </div>
            </div>

            <!-- Right Section: Navigation -->
            <div class="flex items-center gap-2">
              <!-- Page Jump Input -->
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-700">Go to:</span>
                <input
                  id="nfc-page-jump"
                  name="nfc-page-jump"
                  type="number"
                  :min="1"
                  :max="totalPages"
                  v-model.number="currentPage"
                  @keyup.enter="validateAndChangePage(currentPage)"
                  @blur="validateAndChangePage(currentPage)"
                  class="w-16 px-2 py-1 text-sm text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span class="text-sm text-gray-600">of {{ totalPages }}</span>
              </div>

              <!-- Pagination Navigation -->
              <div class="flex items-center gap-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <!-- Previous Button -->
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="p-2 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-r border-gray-200"
                  title="Previous Page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- Page Numbers -->
                <div class="flex items-center">
                  <button
                    v-for="page in getVisiblePages()"
                    :key="page"
                    @click="changePage(page)"
                    :class="[
                      'px-3 py-2 text-sm font-medium border-r border-gray-200 transition-colors hover:bg-gray-50',
                      page === currentPage
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'text-gray-700 bg-white hover:text-gray-600'
                    ]"
                  >
                    {{ page }}
                  </button>
                </div>

                <!-- Next Button -->
                <button
                  @click="changePage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                  class="p-2 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Next Page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Pagination Layout -->
          <div class="lg:hidden">
            <div class="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
              <!-- Left: Page Size -->
              <div class="flex items-center gap-2">
                <select
                  id="nfc-items-per-page-mobile"
                  name="nfc-items-per-page-mobile"
                  v-model="itemsPerPage"
                  class="text-xs border border-gray-300 rounded px-7 py-1 focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span class="text-xs text-gray-500">items</span>
              </div>

              <!-- Center: Navigation Controls -->
              <div class="flex items-center gap-1">
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="p-1.5 text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded"
                  title="Previous"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <div class="flex items-center gap-1 px-2">
                  <span class="text-xs text-gray-600">{{ currentPage }}</span>
                  <span class="text-xs text-gray-400">/</span>
                  <span class="text-xs text-gray-600">{{ totalPages }}</span>
                </div>

                <button
                  @click="changePage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                  class="p-1.5 text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded"
                  title="Next"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- Right: Page Jump -->
              <div class="flex items-center gap-1">
                <input
                  id="nfc-page-jump-mobile"
                  name="nfc-page-jump-mobile"
                  type="number"
                  :min="1"
                  :max="totalPages"
                  v-model.number="currentPage"
                  @keyup.enter="validateAndChangePage(currentPage)"
                  @blur="validateAndChangePage(currentPage)"
                  class="w-12 px-1 py-1 text-xs text-center border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Page"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredCards.length === 0" class="px-6 py-12 text-center w-full">
          <div class="text-gray-400 text-6xl mb-4">💳</div>
          <div class="text-lg font-medium text-gray-900 mb-2">No NFC cards found</div>
          <div class="text-gray-500">{{ searchQuery ? 'Try adjusting your search terms' : 'No NFC cards have been created yet' }}</div>
        </div>
      </div>
      </main>
    </div>

    <!-- Mobile Sidebar -->
    <div v-if="showSidebar" @click="showSidebar = false" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
    <div v-if="showSidebar" class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden">
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
        <router-link to="/admin/nfc-cards" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
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

    <!-- Card Details Modal -->
    <div v-if="showCardModal" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden border border-gray-200 flex flex-col mx-auto">
        <!-- Modal Header -->
        <div class="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h2 class="text-lg font-semibold text-gray-900 truncate">NFC Card Details</h2>
              <p class="text-sm text-gray-600 truncate">Complete card information</p>
            </div>
          </div>
          <button
            @click="closeCardModal"
            class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors duration-200 flex-shrink-0 ml-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div v-if="selectedCard" class="p-4 space-y-4 overflow-y-auto flex-1 min-h-0">
          <!-- Information Cards -->
          <div class="space-y-3">
            <!-- User Information -->
            <div class="bg-white rounded-lg p-4 border border-gray-200">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded bg-purple-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h4 class="text-sm font-semibold text-gray-900">User Information</h4>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Name</p>
                  <p class="text-sm font-medium text-gray-900">{{ selectedCard.user?.name || 'Unknown User' }}</p>
                </div>
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Email</p>
                  <p class="text-sm font-medium text-gray-900">{{ selectedCard.user?.email || 'No email' }}</p>
                </div>
              </div>
            </div>

            <!-- Card Information -->
            <div class="bg-white rounded-lg p-4 border border-gray-200">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                </div>
                <h4 class="text-sm font-semibold text-gray-900">Card Information</h4>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Unique Code</p>
                  <p class="text-sm font-medium text-gray-900">{{ selectedCard.unique_code }}</p>
                </div>
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Card ID</p>
                  <p class="text-sm font-medium text-gray-900">{{ selectedCard.id }}</p>
                </div>
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Activation Code</p>
                  <p class="text-sm font-medium text-gray-900">{{ selectedCard.activation_code || 'Not set' }}</p>
                </div>
                <div class="p-2 bg-gray-50 rounded">
                  <p class="text-xs text-gray-500">Expiry Date</p>
                  <p class="text-sm font-medium text-gray-900">
                    {{ selectedCard.expiry_date ? formatDate(selectedCard.expiry_date) : 'Not set' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Information -->
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded bg-yellow-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="text-sm font-semibold text-gray-900">Timeline</h4>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="p-2 bg-gray-50 rounded">
                <p class="text-xs text-gray-500">Created Date</p>
                <p class="text-sm font-medium text-gray-900">{{ formatDate(selectedCard.created_at) }}</p>
              </div>
              <div class="p-2 bg-gray-50 rounded">
                <p class="text-xs text-gray-500">Last Updated</p>
                <p class="text-sm font-medium text-gray-900">{{ formatDate(selectedCard.updated_at) }}</p>
              </div>
            </div>
          </div>

          <!-- URL Information -->
          <div v-if="selectedCard.url" class="bg-white rounded-lg p-4 border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <h4 class="text-sm font-semibold text-gray-900">Card URL</h4>
            </div>
            <div class="flex items-center gap-2 p-2 bg-gray-50 rounded">
              <div class="flex-1 min-w-0">
                <a :href="selectedCard.url" target="_blank" class="text-sm text-blue-600 hover:text-blue-800 underline truncate block">
                  {{ selectedCard.url }}
                </a>
              </div>
              <button @click="copyToClipboard(selectedCard.url)" class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                Copy
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full border border-gray-200">
        <!-- Modal Header -->
        <div class="bg-red-50 px-6 py-4 border-b border-red-200 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-semibold text-red-900">Delete NFC Card</h2>
              <p class="text-sm text-red-700">This action cannot be undone</p>
            </div>
          </div>
          <button
            @click="closeDeleteModal"
            class="w-8 h-8 rounded-lg bg-red-200 hover:bg-red-300 flex items-center justify-center text-red-600 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div class="text-center">
            <div class="text-red-600 text-4xl mb-4">⚠️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Are you sure?</h3>
            <p class="text-sm text-gray-600 mb-4">
              You are about to delete NFC Card #{{ cardToDelete?.id }}. This will permanently remove the card and cannot be undone.
            </p>
            <div class="bg-gray-50 rounded-lg p-3 text-left">
              <p class="text-xs text-gray-600">Card Details:</p>
              <p class="text-sm font-medium text-gray-900">Card #{{ cardToDelete?.id }}</p>
              <p class="text-xs text-gray-600">User: {{ cardToDelete?.user?.name || 'Unknown User' }}</p>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end gap-2">
          <button
            @click="closeDeleteModal"
            class="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            @click="confirmDelete"
            :disabled="isDeleting"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <svg v-if="isDeleting" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>{{ isDeleting ? 'Deleting...' : 'Delete Card' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Restore Cards Modal - Enhanced Design -->
    <div v-if="showRestoreModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Backdrop -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <!-- Modal Container -->
        <div class="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full max-w-7xl rounded-2xl shadow-2xl border border-gray-100">
          
          <!-- Header Section - Flat Design -->
          <div class="bg-white border-b border-gray-200 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Deleted NFC Cards</h3>
                  <p class="text-sm text-gray-500">Manage and restore deleted NFC cards</p>
                </div>
              </div>
              <button @click="showRestoreModal = false" class="w-8 h-8 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Content Section -->
          <div class="bg-white px-6 py-6">
            
            <!-- Search Section -->
            <div class="mb-6">
              <div class="flex items-center gap-4">
                <div class="relative w-80">
                  <input
                    id="nfc-restore-search"
                    name="nfc-restore-search"
                    v-model="restoreSearchQuery"
                    type="text"
                    placeholder="Search deleted cards..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div class="absolute left-3 top-2.5 text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cards Table - Desktop -->
            <div v-if="filteredRestoreCards.length > 0" class="hidden sm:block">
              <div class="overflow-x-auto">
                <table class="w-full enhanced-table" role="table" aria-label="Deleted cards table">
                  <thead class="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-b-2 border-gray-200/80">
                    <tr class="backdrop-blur-sm">
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[18%]" role="columnheader" aria-sort="none">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Card Details</span>
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[22%]" role="columnheader" aria-sort="none">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">User Info</span>
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[20%]" role="columnheader" aria-sort="none">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Status</span>
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[20%]" role="columnheader" aria-sort="none">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Timeline</span>
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider w-[20%]" role="columnheader" aria-sort="none">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Actions</span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-100/80">
                    <tr v-for="(card, index) in filteredRestoreCards" :key="card.id"
                        :class="[
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        ]"
                        role="row">
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[18%]" role="gridcell">
                        <div class="flex items-center gap-3">
                          <div class="relative">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0 ring-2 ring-red-100 user-avatar">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                              </svg>
                            </div>
                            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="text-sm font-semibold text-gray-900 truncate leading-tight">#{{ card.id }}</div>
                            <div class="text-xs text-gray-500 mt-0.5">{{ card.unique_code }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[22%]" role="gridcell">
                        <div class="space-y-1">
                          <div class="text-sm text-gray-900 truncate">{{ card.user?.name || 'No user assigned' }}</div>
                          <div v-if="card.user?.email" class="text-xs text-gray-500 truncate">{{ card.user.email }}</div>
                          <div v-else class="text-xs text-gray-400">No email</div>
                        </div>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                        <div v-if="card.is_activated" class="space-y-1">
                          <span class="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                            Activated
                          </span>
                        </div>
                        <span v-else class="text-gray-400 text-sm">Unactivated</span>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                        <div class="flex items-center gap-3">
                          <div class="flex-1">
                            <div class="text-xs text-gray-500">Created:</div>
                            <div class="text-sm text-gray-900">{{ formatDate(card.created_at) }}</div>
                          </div>
                          <div class="flex-1">
                            <div class="text-xs text-red-600 font-medium">Deleted:</div>
                            <div class="text-sm text-red-600 font-medium">{{ formatDate(card.deleted_at) }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-5 w-[20%]" role="gridcell">
                        <div class="flex items-center gap-1.5 justify-start">
                          <button @click="restoreCard(card)" 
                                  class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-green-700 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md hover:from-green-100 hover:to-green-200 hover:border-green-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                  role="button"
                                  aria-label="Restore card">
                            <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                            </svg>
                            <span>Restore</span>
                          </button>
                          <button @click="viewCardDetails(card)" 
                                  class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                  role="button"
                                  aria-label="View card details">
                            <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            <span>View Only</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Mobile Cards for Deleted Cards -->
            <div v-if="filteredRestoreCards.length > 0" class="sm:hidden space-y-4">
              <div v-for="card in filteredRestoreCards" :key="card.id" 
                   class="bg-white border border-red-200 rounded-lg p-4 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Card #{{ card.id }}</div>
                      <div class="text-sm text-gray-600">{{ card.user?.name || 'No user assigned' }}</div>
                    </div>
                  </div>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="card.is_activated ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                    {{ card.is_activated ? 'Activated' : 'Unactivated' }}
                  </span>
                </div>
                
                <!-- Deleted Date -->
                <div class="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-gray-500">Deleted:</span>
                    <span class="ml-2 font-medium text-gray-900">{{ formatDate(card.deleted_at) }}</span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                  <button @click="restoreCard(card)" 
                          class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Restore Card
                  </button>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-8">
              <div class="text-lg font-medium text-gray-900 mb-2">No deleted cards found</div>
              <div class="text-gray-500">{{ restoreSearchQuery ? 'Try adjusting your search terms' : 'All cards are currently active' }}</div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="bg-gray-50 px-6 py-3 flex justify-end gap-2">
            <button @click="showRestoreModal = false" 
                    class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Close
            </button>
            <button @click="loadSoftDeletedCards" 
                    class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi } from '../config/api'

const router = useRouter()
const loading = ref(true)
const error = ref('')
const cards = ref([])
const selectedCard = ref(null)
const cardToDelete = ref(null)
const searchQuery = ref('')
const showSidebar = ref(false)
const sidebarCollapsed = ref(false)

// Server-side pagination state
const currentPage = ref(1)
const itemsPerPage = ref(10)
const totalPages = ref(0)
const totalItems = ref(0)
const stats = ref({ total: 0, activated: 0, unactivated: 0 })

// Modal states
const showCardModal = ref(false)
const showDeleteModal = ref(false)
const isDeleting = ref(false)

// Soft delete states
const softDeletedCards = ref([])
const showRestoreModal = ref(false)
const restoreSearchQuery = ref('')

const isRestoring = ref(false)

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getTimeAgo = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)
  
  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`
  return formatDate(dateString)
}

const fetchCards = async () => {
  loading.value = true
  error.value = ''

  try {
    const token = localStorage.getItem('gtm_admin_token')
    if (!token) {
      throw new Error('No admin token found')
    }

    // Fetch with server-side pagination
    const data = await adminApi.getCards(currentPage.value, itemsPerPage.value, searchQuery.value)
    
    // Server-side pagination response structure
    if (data && data.data && Array.isArray(data.data)) {
      cards.value = data.data
      
      // Update pagination metadata
      if (data.pagination) {
        currentPage.value = data.pagination.current_page
        totalPages.value = data.pagination.last_page
        totalItems.value = data.pagination.total
      }

      // Update stats if available
      if (data.stats) {
        stats.value = data.stats
      }
    } else {
      cards.value = []
      totalPages.value = 0
      totalItems.value = 0
    }
  } catch (err) {
    console.error('Error fetching cards:', err)
    if (err.message && err.message.includes('401')) {
      localStorage.removeItem('gtm_admin_token')
      localStorage.removeItem('gtm_admin_user')
      router.replace({ name: 'login' })
      return
    }
    error.value = err.message || 'Failed to load NFC cards. Please try again.'
    cards.value = []
  } finally {
    loading.value = false
  }
}

// Computed properties for server-side pagination
const paginatedCards = computed(() => {
  // Cards are already paginated from the server
  return Array.isArray(cards.value) ? cards.value : []
})

const filteredCards = computed(() => {
  // For compatibility - cards are already filtered on server
  return paginatedCards.value
})

const paginationInfo = computed(() => {
  const start = totalItems.value > 0 ? ((currentPage.value - 1) * itemsPerPage.value) + 1 : 0
  const end = Math.min(currentPage.value * itemsPerPage.value, totalItems.value)
  return { start, end, total: totalItems.value }
})

// Watch for search query and pagination changes - debounce search
let searchTimeout = null
watch(searchQuery, () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    currentPage.value = 1 // Reset to first page on search
    fetchCards()
  }, 500) // 500ms debounce
})

// Watch for itemsPerPage changes
watch(itemsPerPage, () => {
  currentPage.value = 1 // Reset to first page on page size change
  fetchCards()
})

const filteredRestoreCards = computed(() => {
  if (!Array.isArray(softDeletedCards.value)) return []
  if (!restoreSearchQuery.value) return softDeletedCards.value
  
  const query = restoreSearchQuery.value.toLowerCase()
  return softDeletedCards.value.filter(card => 
    card.id.toString().includes(query) ||
    card.user?.name?.toLowerCase().includes(query) ||
    card.user?.email?.toLowerCase().includes(query)
  )
})

// Functions
function viewCard(card) {
  selectedCard.value = card
  showCardModal.value = true
}

function deleteCard(card) {
  cardToDelete.value = card
  showDeleteModal.value = true
}

function closeCardModal() {
  showCardModal.value = false
  selectedCard.value = null
}

function closeDeleteModal() {
  showDeleteModal.value = false
  cardToDelete.value = null
}

async function confirmDelete() {
  if (!cardToDelete.value || isDeleting.value) return

  try {
    isDeleting.value = true
    console.log('Deleting card:', cardToDelete.value.id)
    
    const token = localStorage.getItem('gtm_admin_token')
    if (!token) {
      throw new Error('No admin token found')
    }

    await adminApi.deleteCard(cardToDelete.value.id)

    // Remove card from list
    cards.value = cards.value.filter(card => card.id !== cardToDelete.value.id)
    
    console.log('Card deleted successfully')
    closeDeleteModal()
  } catch (err) {
    console.error('Error deleting card:', err)
    if (err.message && err.message.includes('401')) {
      // Token expired or invalid
      localStorage.removeItem('gtm_admin_token')
      localStorage.removeItem('gtm_admin_user')
      router.replace({ name: 'login' })
      return
    }
    error.value = err.message || 'Failed to delete card'
  } finally {
    isDeleting.value = false
  }
}

// Soft delete functions
async function loadSoftDeletedCards() {
  try {
    const data = await adminApi.getSoftDeletedCards()
    softDeletedCards.value = data.cards || []
  } catch (e) {
    console.error('Failed to load soft deleted cards:', e)
    softDeletedCards.value = []
  }
}

async function openRestoreModal() {
  showRestoreModal.value = true
  await loadSoftDeletedCards()
}

async function restoreCard(card) {
  if (!card || isRestoring.value) return

  try {
    isRestoring.value = true
    await adminApi.restoreCard(card.id)
    
    // Remove from soft deleted list
    softDeletedCards.value = softDeletedCards.value.filter(c => c.id !== card.id)
    
    // Refresh main cards list
    await fetchCards()
    
    console.log('Card restored successfully')
  } catch (e) {
    console.error('Failed to restore card:', e)
    alert('Failed to restore card: ' + e.message)
  } finally {
    isRestoring.value = false
  }
}

function viewCardDetails(card) {
  // Show card details in an alert for deleted cards
  const details = `
Deleted Card Details:
Card ID: ${card.id}
Unique Code: ${card.unique_code}
User: ${card.user?.name || 'No user assigned'}
Email: ${card.user?.email || 'No email'}
Status: ${card.is_activated ? 'Activated' : 'Unactivated'}
Created: ${formatDate(card.created_at)}
Deleted: ${formatDate(card.deleted_at)}
  `.trim()
  
  alert(details)
}

function exportCards() {
  // TODO: Implement export functionality
  console.log('Export cards:', filteredCards.value)
  alert('Export functionality coming soon!')
}

const changePage = (page) => {
  const validPage = Math.max(1, Math.min(page, totalPages.value))
  if (validPage !== currentPage.value) {
    currentPage.value = validPage
    fetchCards() // Fetch new page from server
  }
}

const validateAndChangePage = (page) => {
  changePage(page)
}

const getVisiblePages = () => {
  const pages = []
  const maxVisible = 5

  if (totalPages.value <= maxVisible) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages.value, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }

  return pages
}

// Handle ESC key to close modals
const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    if (showDeleteModal.value) {
      closeDeleteModal()
    } else if (showCardModal.value) {
      closeCardModal()
    } else if (showRestoreModal.value) {
      showRestoreModal.value = false
    }
  }
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
    console.log('URL copied to clipboard')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

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

onMounted(() => {
  fetchCards()
  loadSoftDeletedCards()
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

// Watch for restore modal to reset search
watch(showRestoreModal, (newVal) => {
  if (newVal) {
    restoreSearchQuery.value = ''
  }
})
</script>

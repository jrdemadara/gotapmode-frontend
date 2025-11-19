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
        <router-link to="/admin/nfc-cards" class="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          <span v-if="!sidebarCollapsed">NFC Cards</span>
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
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

      <main class="flex-1 p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-y-auto">
      <!-- Page Title -->
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900">Administrator Management System</h2>
      </div>

      <!-- Loading and Error States -->
      <div v-if="loading" class="bg-white rounded-2xl shadow p-8 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <div class="text-lg text-gray-600">Loading administrators...</div>
      </div>

      <div v-else-if="error" class="bg-white rounded-2xl shadow p-6 text-center">
        <div class="text-red-600 text-lg mb-2">{{ error }}</div>
        <button @click="fetchAdministrators" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Try Again
        </button>
      </div>

             <!-- Administrators Table -->
       <div v-else class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <!-- Table Header -->
        <div class="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex items-center gap-3">
                <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-10 h-10" />
                <div>
                  <h2 class="text-xl font-bold text-gray-900">Administrator Accounts</h2>
                  <p class="text-sm text-gray-600">Manage and view all system administrators</p>
                </div>
              </div>
            </div>
            
            <!-- Search Section -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div class="relative w-full sm:w-80 lg:w-96">
                <input
                  id="admin-search"
                  name="admin-search"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by name, email, or ID..."
                  class="w-full pl-12 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div class="absolute left-4 top-3.5 text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
                <button @click="openRestoreModal" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-red-700 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                  </svg>
                  <span class="hidden xs:inline">Restore</span>
                </button>
                <button @click="openAddModal" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span class="hidden xs:inline">Add Admin</span>
                </button>
                <button @click="() => fetchAdministrators(true)" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                  <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span class="hidden xs:inline">Refresh</span>
                </button>
                <button @click="exportAdministrators" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-all duration-200">
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
            <table class="w-full enhanced-table" role="table" aria-label="Administrators table">
              <thead class="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-b-2 border-gray-200/80">
                <tr class="backdrop-blur-sm">
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[25%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Administrator</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[30%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Email Address</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[25%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Joined Date</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-center text-xs font-bold text-gray-800 uppercase tracking-wider w-[20%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center justify-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(admin, index) in paginatedAdministrators" :key="admin.id"
                    class="hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-300 cursor-pointer group"
                    role="row">
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-3">
                      <div class="relative user-avatar">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 text-white flex items-center justify-center text-sm font-semibold shadow-lg">
                          {{ getUserInitials(admin.name) }}
                        </div>
                        <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{{ admin.name }}</div>
                        <div class="text-xs text-gray-500">ID: #{{ admin.id }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{{ admin.email }}</div>
                    <div class="text-xs text-gray-500">Primary Email</div>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{{ formatDate(admin.created_at) }}</div>
                    <div class="text-xs text-gray-500">Since {{ new Date(admin.created_at).getFullYear() }}</div>
                  </td>
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-1.5 justify-start">
                      <button @click="viewAdministrator(admin)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="View administrator details">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>View</span>
                      </button>
                      <button @click="openEditModal(admin)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-green-700 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md hover:from-green-100 hover:to-green-200 hover:border-green-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="Edit administrator">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        <span>Edit</span>
                      </button>
                      <button @click="softDeleteAdministrator(admin)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-md hover:from-red-100 hover:to-red-200 hover:border-red-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="Delete administrator">
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
          <div class="p-2 sm:p-4 space-y-3 sm:space-y-4">
            <div v-for="admin in paginatedAdministrators" :key="admin.id"
                 class="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div class="space-y-3">
                <!-- Admin Header -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 text-white flex items-center justify-center text-sm font-bold">
                      {{ getUserInitials(admin.name) }}
                    </div>
                    <div>
                      <div class="font-medium text-gray-900">{{ admin.name }}</div>
                      <div class="text-sm text-gray-500">{{ admin.email }}</div>
                    </div>
                  </div>
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>

                <!-- Admin Info -->
                <div class="border-t border-gray-100 pt-3">
                  <div class="text-sm">
                    <span class="text-gray-500">Joined:</span>
                    <span class="ml-2 font-medium text-gray-900">{{ formatDate(admin.created_at) }}</span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="border-t border-gray-100 pt-3 flex gap-2">
                  <button @click="viewAdministrator(admin)"
                          class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    View
                  </button>
                  <button @click="openEditModal(admin)"
                          class="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                    Edit
                  </button>
                  <button @click="softDeleteAdministrator(admin)"
                          class="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

                 <!-- Pagination -->
                   <div v-if="filteredAdministrators.length > 0" class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 w-full">
          <!-- Desktop Pagination Layout -->
          <div class="hidden lg:flex items-center justify-between">
            <!-- Left Section: Page Size & Info -->
            <div class="flex items-center gap-4">
              <!-- Page Size Selector -->
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-700">Show:</span>
                <select
                  id="admin-items-per-page"
                  name="admin-items-per-page"
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
                  id="admin-page-jump"
                  name="admin-page-jump"
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
                  id="admin-items-per-page-mobile"
                  name="admin-items-per-page-mobile"
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
                  id="admin-page-jump-mobile"
                  name="admin-page-jump-mobile"
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
          <div v-if="filteredAdministrators.length === 0" class="px-6 py-12 text-center w-full lg:max-w-7xl">
           <div class="text-gray-400 text-6xl mb-4">👥</div>
           <div class="text-lg font-medium text-gray-900 mb-2">No administrators found</div>
           <div class="text-gray-500">{{ searchQuery ? 'Try adjusting your search terms' : 'No administrators have been added yet' }}</div>
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
                 <router-link to="/admin/nfc-cards" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Cards
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
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

    

    <!-- Administrator Details Modal -->
    <div v-if="showAdminModal" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-200 flex flex-col">
        <!-- Modal Header -->
        <div class="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h2 class="text-lg font-semibold text-gray-900 truncate">Administrator Details</h2>
              <p class="text-sm text-gray-600 truncate">Complete profile information</p>
            </div>
          </div>
          <button
            @click="closeModal"
            class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors duration-200 flex-shrink-0 ml-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div v-if="selectedAdmin" class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 min-h-0">
          <!-- Profile Header -->
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="w-16 h-16 rounded-lg bg-gray-600 text-white flex items-center justify-center text-lg font-semibold">
                {{ getUserInitials(selectedAdmin.name) }}
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">{{ selectedAdmin.name }}</h3>
              <p class="text-sm text-gray-600">ID: #{{ selectedAdmin.id }}</p>
              <div class="flex items-center gap-2 mt-2">
                <span :class="[
                  'inline-flex items-center px-2 py-1 rounded text-xs font-medium',
                  selectedAdmin.email_verified_at
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                ]">
                  <div :class="`w-2 h-2 rounded-full mr-1 ${selectedAdmin.email_verified_at ? 'bg-green-500' : 'bg-yellow-500'}`"></div>
                  {{ selectedAdmin.email_verified_at ? 'Verified' : 'Pending' }}
                </span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  <div class="w-2 h-2 rounded-full mr-1 bg-gray-500"></div>
                  Administrator
                </span>
              </div>
            </div>
          </div>

          <!-- Information Cards -->
          <div class="space-y-3">
            <!-- Email Information -->
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 class="text-sm font-semibold text-gray-900 mb-2">Email Address</h4>
              <p class="text-sm text-gray-700 break-all">{{ selectedAdmin.email }}</p>
              <div class="mt-2 text-xs text-gray-600">
                <span class="font-medium">Status:</span>
                <span class="ml-2" :class="selectedAdmin.email_verified_at ? 'text-green-600' : 'text-yellow-600'">
                  {{ selectedAdmin.email_verified_at ? 'Verified' : 'Pending' }}
                </span>
              </div>
            </div>

            <!-- Account Information -->
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 class="text-sm font-semibold text-gray-900 mb-3">Account Information</h4>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <p class="text-xs text-gray-600">Joined Date</p>
                  <p class="text-sm font-medium text-gray-900">{{ formatDate(selectedAdmin.created_at) }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-600">Last Updated</p>
                  <p class="text-sm font-medium text-gray-900">{{ formatDate(selectedAdmin.updated_at) }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-600">User ID</p>
                  <p class="text-sm font-medium text-gray-900">#{{ selectedAdmin.id }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-600">Role</p>
                  <p class="text-sm font-medium text-gray-700">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-4 sm:px-6 py-3 border-t border-gray-200 flex-shrink-0">
          <div class="flex justify-end gap-2">
            <button
              @click="closeModal"
              class="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
            <button @click="openEditModal" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Administrator Modal -->
  <div v-if="showAddModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden border border-gray-200">
      <!-- Modal Header -->
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Add Administrator</h2>
            <p class="text-sm text-gray-600">Create a new admin account</p>
          </div>
        </div>
        <button
          @click="closeAddModal"
          class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6 space-y-6">
        <!-- Error Message -->
        <div v-if="addError" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-sm text-red-700">{{ addError }}</p>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="addNewUser" class="space-y-4">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              v-model="newUser.name"
              type="text"
              autocomplete="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter full name"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              v-model="newUser.email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="admin@example.com"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Password <span class="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              v-model="newUser.password"
              type="password"
              autocomplete="new-password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Minimum 8 characters"
            />
          </div>

          <!-- Confirm Password Field -->
          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password <span class="text-red-500">*</span>
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              v-model="newUser.password_confirmation"
              type="password"
              autocomplete="new-password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Confirm your password"
            />
          </div>

          <!-- Admin Role (Fixed) -->
          <div>
            <div class="block text-sm font-medium text-gray-700 mb-2">
              Role <span class="text-red-500">*</span>
            </div>
                         <div class="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
               <svg class="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
               </svg>
               <span class="text-sm font-medium text-gray-700">Administrator</span>
               <span class="text-xs text-gray-600 ml-2 bg-gray-100 px-2 py-1 rounded-full">Fixed Role</span>
            </div>
          </div>
        </form>
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end gap-2">
        <button
          @click="closeAddModal"
          :disabled="isSubmitting"
          class="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          @click="addNewUser"
          :disabled="isSubmitting"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>{{ isSubmitting ? 'Creating...' : 'Create Administrator' }}</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Edit Administrator Modal -->
  <div v-if="showEditModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden border border-gray-200">
      <!-- Modal Header -->
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Edit Administrator</h2>
            <p class="text-sm text-gray-600">Update profile information</p>
          </div>
        </div>
        <button
          @click="closeEditModal"
          class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6 space-y-6">
        <!-- Error Message -->
        <div v-if="editError" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-sm text-red-700">{{ editError }}</p>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="editSuccess" class="bg-green-50 border border-green-200 rounded-lg p-4">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-sm text-green-700">{{ editSuccess }}</p>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="updateAdministrator" class="space-y-4">
          <!-- Name Field -->
          <div>
            <label for="edit_name" class="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              id="edit_name"
              name="edit_name"
              v-model="editForm.name"
              type="text"
              autocomplete="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter full name"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="edit_email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              id="edit_email"
              name="edit_email"
              v-model="editForm.email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="admin@example.com"
            />
          </div>

          <!-- Password Field (Optional) -->
          <div>
            <label for="edit_password" class="block text-sm font-medium text-gray-700 mb-2">
              New Password <span class="text-gray-500">(Optional)</span>
            </label>
            <input
              id="edit_password"
              name="edit_password"
              v-model="editForm.password"
              type="password"
              autocomplete="new-password"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Leave blank to keep current password"
            />
            <p class="text-xs text-gray-500 mt-1">Minimum 8 characters if changing</p>
          </div>

          <!-- Confirm Password Field -->
          <div v-if="editForm.password">
            <label for="edit_password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password <span class="text-red-500">*</span>
            </label>
            <input
              id="edit_password_confirmation"
              name="edit_password_confirmation"
              v-model="editForm.password_confirmation"
              type="password"
              autocomplete="new-password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Confirm new password"
            />
          </div>

          <!-- Admin Role (Fixed) -->
          <div>
            <div class="block text-sm font-medium text-gray-700 mb-2">
              Role <span class="text-red-500">*</span>
            </div>
                         <div class="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
               <svg class="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
               </svg>
               <span class="text-sm font-medium text-gray-700">Administrator</span>
               <span class="text-xs text-gray-600 ml-2 bg-gray-100 px-2 py-1 rounded-full">Fixed Role</span>
            </div>
          </div>
        </form>
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end gap-2">
        <button
          @click="closeEditModal"
          :disabled="isUpdating"
          class="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          @click="updateAdministrator"
          :disabled="isUpdating"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <svg v-if="isUpdating" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>{{ isUpdating ? 'Updating...' : 'Update Profile' }}</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Restore Administrators Modal - Enhanced Design -->
  <div v-if="showRestoreModal" class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Backdrop -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      <!-- Modal Container -->
      <div class="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full max-w-7xl rounded-2xl shadow-2xl border border-gray-100">
        
        <!-- Header Section - Flat Design -->
        <div class="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Restore Deleted Administrators</h2>
                <p class="text-sm text-gray-600">Restore soft-deleted administrator accounts</p>
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
            <div class="relative w-full max-w-md">
              <input
                id="admin-restore-search"
                name="admin-restore-search"
                v-model="restoreSearchQuery"
                type="text"
                placeholder="Search deleted administrators..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div class="absolute left-3 top-3.5 text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Desktop Table -->
          <div v-if="filteredSoftDeletedAdministrators.length > 0" class="hidden lg:block overflow-hidden">
            <div class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
              <table class="w-full enhanced-table" role="table" aria-label="Deleted administrators table">
                <thead class="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-b-2 border-gray-200/80">
                  <tr class="backdrop-blur-sm">
                    <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[25%]" role="columnheader">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center column-icon">
                          <svg class="w-3 h-3 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-[10px]">Administrator</span>
                        </div>
                      </div>
                    </th>
                    <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[30%]" role="columnheader">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center column-icon">
                          <svg class="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-[10px]">Email Address</span>
                        </div>
                      </div>
                    </th>
                    <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[25%]" role="columnheader">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center column-icon">
                          <svg class="w-3 h-3 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-[10px]">Deleted Date</span>
                        </div>
                      </div>
                    </th>
                    <th class="px-4 py-4 text-center text-xs font-bold text-gray-800 uppercase tracking-wider w-[20%]" role="columnheader">
                      <div class="flex items-center justify-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                          <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                          </svg>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-[10px]">Actions</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="admin in filteredSoftDeletedAdministrators" :key="admin.id"
                      class="hover:bg-gradient-to-r hover:from-red-50/30 hover:to-orange-50/30 transition-all duration-300 cursor-pointer group"
                      role="row">
                    <td class="px-4 py-4">
                      <div class="flex items-center gap-3">
                        <div class="relative user-avatar">
                          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-400 to-gray-500 text-white flex items-center justify-center text-sm font-semibold shadow-lg">
                            {{ getUserInitials(admin.name) }}
                          </div>
                          <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="text-sm font-semibold text-gray-900 group-hover:text-red-700 transition-colors">{{ admin.name }}</div>
                          <div class="text-xs text-gray-500">ID: #{{ admin.id }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4">
                      <div class="text-sm font-medium text-gray-900 group-hover:text-red-700 transition-colors">{{ admin.email }}</div>
                      <div class="text-xs text-gray-500">Primary Email</div>
                    </td>
                    <td class="px-4 py-4">
                      <div class="text-sm font-medium text-gray-900 group-hover:text-red-700 transition-colors">{{ formatDate(admin.deleted_at) }}</div>
                      <div class="text-xs text-gray-500">Deleted {{ new Date(admin.deleted_at).getFullYear() }}</div>
                    </td>
                    <td class="px-4 py-4">
                      <div class="flex items-center gap-1.5 justify-start">
                        <button @click="restoreAdministrator(admin)" 
                                class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-green-700 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md hover:from-green-100 hover:to-green-200 hover:border-green-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                role="button"
                                aria-label="Restore administrator">
                          <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                          </svg>
                          <span>Restore</span>
                        </button>
                        <button @click="viewAdministrator(admin)"
                                class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                role="button"
                                aria-label="View administrator details">
                          <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                          <span>View</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Mobile Cards -->
          <div v-if="filteredSoftDeletedAdministrators.length > 0" class="lg:hidden">
            <div class="space-y-4">
              <div v-for="admin in filteredSoftDeletedAdministrators" :key="admin.id"
                   class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
                <div class="space-y-3">
                  <!-- Admin Header -->
                  <div class="flex items-center gap-3">
                    <div class="relative">
                      <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-400 to-gray-500 text-white flex items-center justify-center text-sm font-semibold">
                        {{ getUserInitials(admin.name) }}
                      </div>
                      <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="text-base font-medium text-gray-900">{{ admin.name }}</div>
                      <div class="text-sm text-gray-600">{{ admin.email }}</div>
                      <div class="text-xs text-gray-500">ID: #{{ admin.id }}</div>
                    </div>
                  </div>

                  <!-- Date Info -->
                  <div class="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <div class="text-sm text-gray-900">{{ formatDate(admin.deleted_at) }}</div>
                      <div class="text-xs text-gray-500">Deleted {{ new Date(admin.deleted_at).getFullYear() }}</div>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="pt-2 flex gap-2">
                    <button @click="restoreAdministrator(admin)"
                            class="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Restore
                    </button>
                    <button @click="viewAdministrator(admin)"
                            class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredSoftDeletedAdministrators.length === 0" class="text-center py-12">
            <div class="text-gray-400 text-6xl mb-4">🗑️</div>
            <div class="text-lg font-medium text-gray-900 mb-2">No deleted administrators found</div>
            <div class="text-gray-500">{{ restoreSearchQuery ? 'Try adjusting your search terms' : 'No administrators have been deleted yet' }}</div>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-end">
            <button @click="showRestoreModal = false" 
                    class="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
              Close
            </button>
            <button @click="loadSoftDeletedAdministrators" 
                    class="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 transition-colors">
              Refresh List
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="showDeleteConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900">Delete Administrator</h3>
          <p class="text-sm text-gray-600">This action cannot be undone</p>
        </div>
      </div>
      <p class="text-gray-700 mb-6">
        Are you sure you want to delete <strong>{{ adminToDelete?.name }}</strong>? 
        This will soft delete the administrator account.
      </p>
      <div class="flex gap-3 justify-end">
        <button @click="cancelDeleteAdministrator" 
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button @click="confirmDeleteAdministrator" 
                class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
          Delete
        </button>
      </div>
    </div>
  </div>

  <!-- Restore Confirmation Modal -->
  <div v-if="showRestoreConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900">Restore Administrator</h3>
          <p class="text-sm text-gray-600">Restore the administrator account</p>
        </div>
      </div>
      <p class="text-gray-700 mb-6">
        Are you sure you want to restore <strong>{{ adminToRestore?.name }}</strong>? 
        This will restore the administrator account and make it active again.
      </p>
      <div class="flex gap-3 justify-end">
        <button @click="cancelRestoreAdministrator" 
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button @click="confirmRestoreAdministrator" 
                class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
          Restore
        </button>
      </div>
    </div>
  </div>

  <!-- Success Notification -->
  <div v-if="showSuccessNotification" class="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>{{ successMessage }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi } from '../config/api'

const router = useRouter()
const loading = ref(true)
const error = ref('')
const administrators = ref([])
const selectedAdmin = ref(null)
const searchQuery = ref('')
const adminName = ref('Admin')
const showSidebar = ref(false)
const sidebarCollapsed = ref(false)

// Server-side pagination state
const currentPage = ref(1)
const itemsPerPage = ref(10)
const totalPages = ref(0)
const totalItems = ref(0)

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getUserInitials = (name) => {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

const fetchAdministrators = async (forceRefresh = false) => {
  loading.value = true
  error.value = ''

  try {
    // Fetch with server-side pagination
    // If forceRefresh is true (from refresh button), bypass cache to get fresh data
    const response = await adminApi.getAdministrators(currentPage.value, itemsPerPage.value, searchQuery.value, forceRefresh)

    console.log('Administrators API response:', response) // Debug log

    // Server-side pagination response structure
    if (response && response.data && Array.isArray(response.data)) {
      administrators.value = response.data
      
      // Update pagination metadata
      if (response.pagination) {
        currentPage.value = response.pagination.current_page
        totalPages.value = response.pagination.last_page
        totalItems.value = response.pagination.total
      }
    } else {
      administrators.value = []
      totalPages.value = 0
      totalItems.value = 0
    }
  } catch (err) {
    console.error('Error:', err)
    error.value = err?.message || 'Failed to load administrators'
    administrators.value = []
  } finally {
    loading.value = false
  }
}

// Computed properties for server-side pagination
const paginatedAdministrators = computed(() => {
  // Administrators are already paginated from the server
  return Array.isArray(administrators.value) ? administrators.value : []
})

const filteredAdministrators = computed(() => {
  // For compatibility - administrators are already filtered on server
  return paginatedAdministrators.value
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
    fetchAdministrators()
  }, 300) // 300ms debounce
})

// Watch for itemsPerPage changes
watch(itemsPerPage, () => {
  currentPage.value = 1 // Reset to first page on page size change
  fetchAdministrators()
})

// Functions
function viewAdministrator(admin) {
  selectedAdmin.value = admin
  showAdminModal.value = true
}

function getAdmin() {
  try {
    const raw = localStorage.getItem('gtm_admin_user')
    if (raw) adminName.value = JSON.parse(raw)?.name || 'Admin'
  } catch {}
}

// Modal state
const showAdminModal = ref(false)
const showAddModal = ref(false)
const showEditModal = ref(false)
const showRestoreModal = ref(false)

// Add new state variables for confirmation modals and notifications
const showDeleteConfirmModal = ref(false)
const showRestoreConfirmModal = ref(false)
const adminToDelete = ref(null)
const adminToRestore = ref(null)
const showSuccessNotification = ref(false)
const successMessage = ref('')
const notificationTimer = ref(null)

// Soft deleted administrators
const softDeletedAdministrators = ref([])
const restoreSearchQuery = ref('')

// Add user form data
const newUser = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  is_admin: true
})

const isSubmitting = ref(false)
const addError = ref('')

// Edit form data
const editForm = ref({
  id: null,
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const isUpdating = ref(false)
const editError = ref('')
const editSuccess = ref('')

// Close modal
const closeModal = () => {
  showAdminModal.value = false
  selectedAdmin.value = null
}

// Add modal functions
const openAddModal = () => {
  showAddModal.value = true
}

const closeAddModal = () => {
  showAddModal.value = false
  resetAddForm()
}

// Edit modal functions
const openEditModal = (admin = null) => {
  const adminToEdit = admin || selectedAdmin.value
  if (adminToEdit) {
    editForm.value = {
      id: adminToEdit.id,
      name: adminToEdit.name,
      email: adminToEdit.email,
      password: '',
      password_confirmation: ''
    }
    editError.value = ''
    editSuccess.value = ''
    showEditModal.value = true
    // Close the view modal when opening edit modal
    showAdminModal.value = false
  }
}

const closeEditModal = () => {
  showEditModal.value = false
  resetEditForm()
}

const resetEditForm = () => {
  editForm.value = {
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
  editError.value = ''
  editSuccess.value = ''
}

const resetAddForm = () => {
  newUser.value = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    is_admin: true
  }
  addError.value = ''
}

const addNewUser = async () => {
  if (isSubmitting.value) return

  try {
    isSubmitting.value = true
    addError.value = ''

    // Validate form
    if (!newUser.value.name.trim()) {
      addError.value = 'Name is required'
      return
    }

    if (!newUser.value.email.trim()) {
      addError.value = 'Email is required'
      return
    }

    if (!newUser.value.password) {
      addError.value = 'Password is required'
      return
    }

    if (newUser.value.password !== newUser.value.password_confirmation) {
      addError.value = 'Passwords do not match'
      return
    }

    if (newUser.value.password.length < 8) {
      addError.value = 'Password must be at least 8 characters'
      return
    }

      // Make API call to create the user
  try {
    console.log('Making API call with data:', {
      name: newUser.value.name,
      email: newUser.value.email,
      password: newUser.value.password,
      password_confirmation: newUser.value.password_confirmation,
      is_admin: newUser.value.is_admin
    })

    // Check if admin token exists
    const adminToken = localStorage.getItem('gtm_admin_token')
    console.log('Admin token exists:', !!adminToken)

    const response = await adminApi.createAdministrator({
      name: newUser.value.name,
      email: newUser.value.email,
      password: newUser.value.password,
      password_confirmation: newUser.value.password_confirmation,
      is_admin: newUser.value.is_admin
    })

    console.log('User created successfully:', response)

      // Success - close modal and refresh list
      closeAddModal()
      await fetchAdministrators()

      // Show success message (you can implement a toast notification here)
      console.log('Administrator created successfully!')

    } catch (apiError) {
      console.error('API Error:', apiError)
      console.error('Error response:', apiError.response)
      console.error('Error status:', apiError.response?.status)
      console.error('Error data:', apiError.response?.data)

      // Handle specific validation errors
      if (apiError.response?.status === 422 && apiError.response?.data?.errors) {
        // Handle validation errors
        const errors = apiError.response.data.errors
        if (errors.email) {
          addError.value = errors.email[0] // Email already exists
        } else if (errors.password) {
          addError.value = errors.password[0]
        } else {
          addError.value = 'Validation failed: ' + Object.values(errors).flat().join(', ')
        }
      } else if (apiError.response?.data?.message) {
        addError.value = apiError.response.data.message
      } else {
        addError.value = 'Failed to create administrator. Please try again.'
      }
      return // Don't continue to success flow
    }

  } catch (error) {
    addError.value = error.message || 'Failed to create user'
  } finally {
    isSubmitting.value = false
  }
}

const updateAdministrator = async () => {
  if (isUpdating.value) return

  try {
    isUpdating.value = true
    editError.value = ''
    editSuccess.value = ''

    // Validate form
    if (!editForm.value.name.trim()) {
      editError.value = 'Name is required'
      return
    }

    if (!editForm.value.email.trim()) {
      editError.value = 'Email is required'
      return
    }

    // Validate password if changing
    if (editForm.value.password) {
      if (editForm.value.password.length < 8) {
        editError.value = 'Password must be at least 8 characters'
        return
      }

      if (editForm.value.password !== editForm.value.password_confirmation) {
        editError.value = 'Passwords do not match'
        return
      }
    }

    // Prepare update data
    const updateData = {
      name: editForm.value.name.trim(),
      email: editForm.value.email.trim()
    }

    // Only include password if it's being changed
    if (editForm.value.password) {
      updateData.password = editForm.value.password
      updateData.password_confirmation = editForm.value.password_confirmation
    }

    // Make API call to update the administrator
    try {
      console.log('Updating administrator with data:', updateData)

      const response = await adminApi.updateAdministrator(editForm.value.id, updateData)

      console.log('Administrator updated successfully:', response)

      // Success - close modal and refresh list
      editSuccess.value = 'Administrator profile updated successfully!'
      
      // Wait a moment to show success message, then close modal
      setTimeout(() => {
        closeEditModal()
        closeModal() // Close the view modal as well
        fetchAdministrators() // Refresh the list
      }, 1500)

    } catch (apiError) {
      console.error('API Error:', apiError)
      console.error('Error response:', apiError.response)
      console.error('Error status:', apiError.response?.status)
      console.error('Error data:', apiError.response?.data)

      // Handle specific validation errors
      if (apiError.response?.status === 422 && apiError.response?.data?.errors) {
        const errors = apiError.response.data.errors
        if (errors.email) {
          editError.value = errors.email[0] // Email already exists
        } else if (errors.password) {
          editError.value = errors.password[0]
        } else {
          editError.value = 'Validation failed: ' + Object.values(errors).flat().join(', ')
        }
      } else if (apiError.response?.data?.message) {
        editError.value = apiError.response.data.message
      } else {
        editError.value = 'Failed to update administrator. Please try again.'
      }
      return
    }

  } catch (error) {
    editError.value = error.message || 'Failed to update administrator'
  } finally {
    isUpdating.value = false
  }
}

// Handle ESC key to close modal
const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    if (showAddModal.value) {
      closeAddModal()
    } else if (showEditModal.value) {
      closeEditModal()
    } else if (showAdminModal.value) {
      closeModal()
    }
  }
}

// Cleanup event listener
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

const changePage = (page) => {
  const validPage = Math.max(1, Math.min(page, totalPages.value))
  if (validPage !== currentPage.value) {
    currentPage.value = validPage
    fetchAdministrators() // Fetch new page from server
  }
}

function changeItemsPerPage(newSize) {
  itemsPerPage.value = parseInt(newSize)
  currentPage.value = 1 // Reset to first page when changing page size
}

const validateAndChangePage = (page) => {
  const validPage = Math.max(1, Math.min(page, totalPages.value))
  if (validPage !== currentPage.value) {
    changePage(validPage)
  }
}

const handlePageJump = (event) => {
  const page = parseInt(event.target.value)
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    changePage(page)
  }
}

const getVisiblePages = () => {
  const pages = []
  const maxVisible = 5 // Show max 5 page numbers

  if (totalPages.value <= maxVisible) {
    // If total pages is less than max visible, show all pages
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    // Show pages around current page
    let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages.value, start + maxVisible - 1)

    // Adjust start if we're near the end
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }

  return pages
}

// Export function
const exportAdministrators = () => {
  // Placeholder for export functionality
  console.log('Export administrators functionality to be implemented')
}

// Soft delete and restore functions
async function softDeleteAdministrator(admin) {
  adminToDelete.value = admin
  showDeleteConfirmModal.value = true
}

async function confirmDeleteAdministrator() {
  if (!adminToDelete.value) return
  
  try {
    await adminApi.softDeleteAdministrator(adminToDelete.value.id)
    showSuccessNotification.value = true
    successMessage.value = `Administrator ${adminToDelete.value.name} deleted successfully`
    
    // Auto-hide notification after 3 seconds
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
    }, 3000)
    
    showDeleteConfirmModal.value = false
    adminToDelete.value = null
    await fetchAdministrators()
  } catch (e) {
    console.error('Failed to delete administrator:', e)
    alert('Failed to delete administrator: ' + e.message)
  }
}

function cancelDeleteAdministrator() {
  showDeleteConfirmModal.value = false
  adminToDelete.value = null
}

async function restoreAdministrator(admin) {
  adminToRestore.value = admin
  showRestoreConfirmModal.value = true
}

async function confirmRestoreAdministrator() {
  if (!adminToRestore.value) return
  
  try {
    await adminApi.restoreAdministrator(adminToRestore.value.id)
    showSuccessNotification.value = true
    successMessage.value = `Administrator ${adminToRestore.value.name} restored successfully`
    
    // Auto-hide notification after 3 seconds
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
    }, 3000)
    
    showRestoreConfirmModal.value = false
    adminToRestore.value = null
    await loadSoftDeletedAdministrators()
    await fetchAdministrators()
    
    // Close restore modal if no more deleted administrators
    if (softDeletedAdministrators.value.length === 0) {
      showRestoreModal.value = false
    }
  } catch (e) {
    console.error('Failed to restore administrator:', e)
    alert('Failed to restore administrator: ' + e.message)
  }
}

function cancelRestoreAdministrator() {
  showRestoreConfirmModal.value = false
  adminToRestore.value = null
}

async function openRestoreModal() {
  showRestoreModal.value = true
  await loadSoftDeletedAdministrators()
}

async function loadSoftDeletedAdministrators() {
  try {
    const response = await adminApi.getSoftDeletedAdministrators()
    // Handle new paginated response structure
    if (response.data && Array.isArray(response.data)) {
      softDeletedAdministrators.value = response.data
    } else if (response.administrators && Array.isArray(response.administrators)) {
      // Fallback for old response format
      softDeletedAdministrators.value = response.administrators
    } else {
      softDeletedAdministrators.value = []
    }
  } catch (e) {
    console.error('Failed to load soft deleted administrators:', e)
    softDeletedAdministrators.value = []
  }
}

// Computed property for filtered soft deleted administrators
const filteredSoftDeletedAdministrators = computed(() => {
  if (!restoreSearchQuery.value) return softDeletedAdministrators.value

  const query = restoreSearchQuery.value.toLowerCase()
  return softDeletedAdministrators.value.filter(admin =>
    admin.name.toLowerCase().includes(query) ||
    admin.email.toLowerCase().includes(query) ||
    admin.id.toString().includes(query)
  )
})



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
  getAdmin()
  fetchAdministrators()
  document.addEventListener('keydown', handleKeyDown)
})

// Watch for restore modal to reset search
watch(showRestoreModal, (newVal) => {
  if (!newVal) {
    restoreSearchQuery.value = ''
  }
})
</script>

<style scoped>
/* Enhanced table styling for proper screen fitting */
.enhanced-table {
  width: 100%;
  max-width: 100vw;
  overflow: visible;
  table-layout: fixed;
}

.enhanced-table thead {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1);
  backdrop-filter: blur(10px);
}

.enhanced-table tbody tr {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.enhanced-table tbody tr:nth-child(even) {
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.3), rgba(241, 245, 249, 0.2));
}

.enhanced-table tbody tr:hover {
  transform: translateY(-1px) scale(1.002);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(59, 130, 246, 0.1);
}

/* Ensure table fits within container */
.enhanced-table {
  width: 100%;
  table-layout: fixed;
}

.enhanced-table th,
.enhanced-table td {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Button animations */
.action-button {
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.action-button:hover::before {
  left: 100%;
}

/* Status badge animation */
.status-badge {
  position: relative;
  overflow: hidden;
}

.status-badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Avatar enhancement */
.user-avatar {
  position: relative;
  transition: all 0.3s ease;
}

.user-avatar::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.user-avatar:hover::after {
  opacity: 1;
}

/* Column header icons */
.column-icon {
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.column-icon:hover {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

/* Responsive enhancements */
@media (max-width: 1280px) {
  .enhanced-table th,
  .enhanced-table td {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .enhanced-table {
    font-size: 0.875rem;
  }
}

@media (max-width: 1024px) {
  .enhanced-table {
    font-size: 0.75rem;
  }

  .enhanced-table th,
  .enhanced-table td {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .action-button {
    padding: 0.375rem 0.5rem;
    font-size: 0.625rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .enhanced-table tbody tr,
  .enhanced-table tbody tr:hover,
  .action-button,
  .action-button::before,
  .status-badge::after,
  .user-avatar,
  .user-avatar::after,
  .column-icon {
    animation: none;
    transition: none;
    transform: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .enhanced-table {
    border: 2px solid;
  }

  .enhanced-table th,
  .enhanced-table td {
    border: 1px solid;
  }
}

/* Print styles */
@media print {
  .enhanced-table {
    box-shadow: none;
    background: white;
  }

  .action-button {
    display: none;
  }
}
</style>
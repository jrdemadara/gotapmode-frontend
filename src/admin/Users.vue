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
        <router-link to="/admin/users" class="flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200" :class="sidebarCollapsed ? 'justify-center' : ''">
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
        <h2 class="text-2xl font-bold text-gray-900">User Management System</h2>
      </div>

      <!-- Error State -->
      <div v-if="error && !loading" class="bg-white rounded-2xl shadow p-6 text-center mb-4">
        <div class="text-red-600 text-lg mb-2">{{ error }}</div>
        <button @click="loadUsers" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Try Again
        </button>
      </div>

             <!-- Users Table -->
       <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
         <!-- Table Header -->
         <div class="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
           <div class="flex flex-col gap-4">
             <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex items-center gap-3">
                <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-10 h-10" />
                <div>
                  <h2 class="text-xl font-bold text-gray-900">User Accounts</h2>
                  <p class="text-sm text-gray-600">Manage and view all registered users</p>
                </div>
              </div>
               
             </div>
             
                           <!-- Search Section -->
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div class="relative w-full sm:w-80 lg:w-96">
                <input
                  id="users-search"
                  name="users-search"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by name, email, company, contacts, or status (active/inactive)..."
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
                  <button @click="() => loadUsers(true)" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                    <svg class="w-4 h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <span class="hidden xs:inline">Refresh</span>
                  </button>
                  <button @click="exportUsers" class="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-all duration-200">
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
          <div class="hidden lg:block w-full overflow-hidden relative">
            <div v-if="loading" class="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <div class="text-lg text-gray-600">Loading users...</div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
              <table class="w-full enhanced-table" role="table" aria-label="Users table">
              <thead class="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-b-2 border-gray-200/80">
                <tr class="backdrop-blur-sm">
                                    <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[18%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Full Name</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[22%]" role="columnheader" aria-sort="none">
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
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[16%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Company</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[12%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Status</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[14%]" role="columnheader" aria-sort="none">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center column-icon">
                        <svg class="w-3 h-3 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-[10px]">Joined Date</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider w-[18%]" role="columnheader" aria-sort="none">
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
                <tr v-for="(user, index) in paginatedUsers" :key="user.id"
                    :class="[
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    ]"
                    role="row">
                                    <td class="px-4 py-5 border-r border-gray-100/60 w-[18%]" role="gridcell">
                    <div class="flex items-center gap-3">
                      <div class="relative">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0 ring-2 ring-blue-100 user-avatar">
                          {{ getUserInitials(user.name) }}
                        </div>
                        <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-semibold text-gray-900 truncate leading-tight">{{ user.name }}</div>
                        <div class="text-xs text-gray-500 mt-0.5">ID: {{ user.id }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[22%]" role="gridcell">
                    <div class="flex items-center gap-2 min-w-0">
                      <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-200">
                        <svg class="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors truncate leading-tight">{{ user.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[16%]" role="gridcell">
                    <div class="flex items-center gap-2 min-w-0">
                      <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-200">
                        <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div v-if="user.profile?.company" class="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors truncate leading-tight">{{ user.profile.company }}</div>
                        <div v-else class="text-sm text-gray-400 italic">No company</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[12%]" role="gridcell">
                    <div class="flex items-center">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 status-badge">
                        <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></div>
                        <span>Active</span>
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-5 border-r border-gray-100/60 w-[14%]" role="gridcell">
                    <div class="flex items-center gap-2 min-w-0">
                      <div class="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors duration-200">
                        <svg class="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-sm font-medium text-gray-900 group-hover:text-indigo-700 transition-colors whitespace-nowrap leading-tight">{{ formatDate(user.created_at) }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-5 w-[18%]" role="gridcell">
                    <div class="flex items-center gap-1.5 justify-start">
                      <button @click="viewUserDetails(user)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="View user details">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>View</span>
                      </button>
                      <button @click="editUser(user)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-green-700 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md hover:from-green-100 hover:to-green-200 hover:border-green-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="Edit user">
                        <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        <span>Edit</span>
                      </button>
                      <button @click="softDeleteUser(user)"
                              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-md hover:from-red-100 hover:to-red-200 hover:border-red-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 action-button whitespace-nowrap"
                              role="button"
                              aria-label="Delete user">
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
         <div class="lg:hidden relative">
           <div v-if="loading" class="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
             <div class="text-center">
               <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
               <div class="text-lg text-gray-600">Loading users...</div>
             </div>
           </div>
           <div class="p-2 sm:p-4 space-y-3 sm:space-y-4">
             <div v-for="user in paginatedUsers" :key="user.id" 
                  class="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200">
               <div class="space-y-3">
                 <!-- User Header -->
                 <div class="flex items-center justify-between">
                   <div class="flex items-center gap-3">
                     <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold">
                       {{ getUserInitials(user.name) }}
                     </div>
                     <div>
                       <div class="font-medium text-gray-900">{{ user.name }}</div>
                       <div class="text-sm text-gray-500">{{ user.email }}</div>
                     </div>
                   </div>
                   <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                     Active
                   </span>
                 </div>
                 
                 <!-- Company Info -->
                 <div class="border-t border-gray-100 pt-3">
                   <div class="text-sm">
                     <span class="text-gray-500">Company:</span>
                     <span class="ml-2 font-medium text-gray-900">
                       {{ user.profile?.company || 'No company' }}
                     </span>
                   </div>
                 </div>
                 
                 <!-- Joined Date -->
                 <div class="border-t border-gray-100 pt-3">
                   <div class="text-sm">
                     <span class="text-gray-500">Joined:</span>
                     <span class="ml-2 font-medium text-gray-900">{{ formatDate(user.created_at) }}</span>
                   </div>
                 </div>
                 
                 <!-- Actions -->
                 <div class="border-t border-gray-100 pt-3 flex gap-2">
                   <button @click="viewUserDetails(user)"
                           class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                     View
                   </button>
                   <button @click="editUser(user)"
                           class="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                     Edit
                   </button>
                   <button @click="softDeleteUser(user)"
                           class="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                     Delete
                   </button>
                 </div>
               </div>
             </div>
           </div>
           
           
         </div>

         <!-- Empty State -->
         <div v-if="filteredUsers.length === 0" class="px-6 py-12 text-center">
           <div class="text-gray-400 text-6xl mb-4">👥</div>
           <div class="text-lg font-medium text-gray-900 mb-2">No users found</div>
           <div class="text-gray-500">{{ searchQuery ? 'Try adjusting your search terms' : 'No users have registered yet' }}</div>
         </div>

                   
         
        <!-- Pagination -->
        <div v-if="filteredUsers.length > 0" class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 w-full">
             <!-- Desktop Pagination Layout -->
             <div class="hidden lg:flex items-center justify-between">
               <!-- Left Section: Page Size & Info -->
            <div class="flex items-center gap-4">
                 <!-- Page Size Selector -->
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-700">Show:</span>
                   <select 
                     id="users-items-per-page"
                     name="users-items-per-page"
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
                     id="users-page-jump"
                     name="users-page-jump"
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
                      'px-3 py-2 text-sm font-medium border-r border-gray-200 transition-colors',
                         page === currentPage 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'text-gray-700 bg-white hover:bg-gray-50'
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
                     id="users-items-per-page-mobile"
                     name="users-items-per-page-mobile"
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
                     id="users-page-jump-mobile"
                     name="users-page-jump-mobile"
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
        <router-link to="/admin/users" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
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

         <!-- Enhanced User Details Modal -->
     <div v-if="selectedUser || loadingUserDetails" class="fixed inset-0 z-[60] overflow-y-auto">
       <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
         <!-- Backdrop with blur effect -->
         <div class="fixed inset-0 transition-opacity z-[59]" aria-hidden="true">
           <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
         </div>
         
         <!-- Loading State -->
         <div v-if="loadingUserDetails" class="relative z-[61] inline-block align-bottom bg-white rounded-2xl text-center overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle w-full max-w-md border border-gray-200/50 p-8">
           <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
           <div class="text-lg text-gray-600">Loading user details...</div>
         </div>
         
                   <!-- Modal Container -->
          <div v-else class="relative z-[61] inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle w-full max-w-6xl border border-gray-200/50">
           
           <!-- Header Section -->
           <div class="bg-gray-50 px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-200 relative">
             <!-- Mobile Close Button - Top Right -->
             <button @click="selectedUser = null" class="absolute top-2 right-2 sm:hidden w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
               </svg>
             </button>
             
             <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
               <div class="flex items-center gap-3">
                 <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                   <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                 </div>
                 <div>
                   <h3 class="text-lg sm:text-xl font-bold text-gray-900">User Profile</h3>
                   <p class="text-sm text-gray-600">{{ selectedUser.name }}</p>
                 </div>
               </div>
               <!-- Desktop Close Button -->
               <button @click="selectedUser = null" class="hidden sm:flex w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200">
                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                 </svg>
               </button>
             </div>
           </div>
           
           <!-- Content Section -->
           <div class="bg-white px-3 sm:px-6 py-4 sm:py-6">
             
             <!-- Basic Information Cards -->
             <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
               <!-- Basic Info Card -->
               <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                   <div class="flex items-center gap-2 mb-3">
                     <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                       <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                       </svg>
                     </div>
                     <h4 class="text-sm font-semibold text-gray-900">Basic Information</h4>
                   </div>
                   <div class="space-y-2">
                     <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                       <span class="text-sm font-medium text-gray-600">Full Name</span>
                       <div class="flex items-center gap-3 mt-1 lg:mt-0">
                         <div v-if="selectedUser.profile?.profile_pic_url" class="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0 relative">
                           <img :src="selectedUser.profile.profile_pic_url" 
                                :alt="selectedUser.name" 
                                class="w-full h-full object-cover"
                                @error="handleImageError">
                           <div class="fallback-initials absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold" style="display: none;">
                             {{ getUserInitials(selectedUser.name) }}
                           </div>
                         </div>
                         <div v-else class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                           {{ getUserInitials(selectedUser.name) }}
                         </div>
                         <span class="text-sm font-semibold text-gray-900">{{ selectedUser.name }}</span>
                       </div>
                     </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                     <span class="text-sm font-medium text-gray-600">Email</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0 break-all">{{ selectedUser.email }}</span>
                   </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                     <span class="text-sm font-medium text-gray-600">Status</span>
                     <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200 mt-1 lg:mt-0">
                       <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                       Active
                     </span>
                   </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2">
                     <span class="text-sm font-medium text-gray-600">Joined</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0">{{ formatDate(selectedUser.created_at) }}</span>
                   </div>
                 </div>
               </div>

               <!-- Profile Details Card -->
               <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                 <div class="flex items-center gap-2 mb-3">
                   <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center">
                     <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                     </svg>
                   </div>
                   <h4 class="text-sm font-semibold text-gray-900">User Profile</h4>
                 </div>
                 <div class="space-y-2">
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                     <span class="text-sm font-medium text-gray-600">Company</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0">{{ selectedUser.profile?.company || 'N/A' }}</span>
                   </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                     <span class="text-sm font-medium text-gray-600">Company Number</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0">{{ selectedUser.profile?.companynumber || 'N/A' }}</span>
                   </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 border-b border-gray-200/50">
                     <span class="text-sm font-medium text-gray-600">Company Email</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0 break-all">{{ selectedUser.profile?.companyemail || 'N/A' }}</span>
                   </div>
                   <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2">
                     <span class="text-sm font-medium text-gray-600">Company Address</span>
                     <span class="text-sm font-semibold text-gray-900 mt-1 lg:mt-0 text-right">{{ selectedUser.profile?.companyadress || 'N/A' }}</span>
                   </div>
                 </div>
               </div>
             </div>

             <!-- User Statistics -->
             <div class="mb-4 sm:mb-6">
               <h4 class="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                 <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                 </svg>
                 Account Overview
               </h4>
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 <div class="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                   <div class="flex items-center justify-between">
                     <div>
                       <p class="text-xs font-medium text-gray-600">NFC Card Status</p>
                       <p class="text-lg font-bold" :class="selectedUser.cards?.[0]?.is_activated ? 'text-green-600' : 'text-orange-600'">
                         {{ selectedUser.cards?.[0]?.is_activated ? 'Activated' : 'Not Activated' }}
                       </p>
                     </div>
                     <div class="w-8 h-8 rounded flex items-center justify-center" :class="selectedUser.cards?.[0]?.is_activated ? 'bg-green-100' : 'bg-orange-100'">
                       <svg class="w-4 h-4" :class="selectedUser.cards?.[0]?.is_activated ? 'text-green-600' : 'text-orange-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                       </svg>
                     </div>
                   </div>
                 </div>
                 
                 <div class="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                   <div class="flex items-center justify-between">
                     <div>
                       <p class="text-xs font-medium text-gray-600">Contact Methods</p>
                       <p class="text-lg font-bold text-gray-900">{{ selectedUser.contact_info?.length || 0 }}</p>
                     </div>
                     <div class="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                       <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <!-- Contact Information Section -->
             <div class="mb-6 sm:mb-8">
               <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                 <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                 </svg>
                 Contact Information
               </h4>
               
               <!-- Contact Columns -->
               <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                 <!-- Phone Numbers Column -->
                 <div class="bg-white rounded-lg border border-gray-200 shadow-sm">
                   <div class="p-4 border-b border-gray-200">
                     <div class="flex items-center gap-2">
                       <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                         <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                         </svg>
                       </div>
                       <h5 class="text-sm font-semibold text-gray-900">Phone Numbers</h5>
                     </div>
                   </div>
                   <div class="p-4">
                     <div v-if="selectedUser.phones && selectedUser.phones.length > 0" class="space-y-2">
                       <div v-for="phone in selectedUser.phones" :key="phone.id" 
                            class="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                         <div class="flex-1">
                           <div class="text-sm font-medium text-gray-900">{{ phone.phonenumber }}</div>
                           <div class="text-xs text-gray-600">{{ phone.type || 'Phone' }}</div>
                         </div>
                         <span v-if="phone.is_main" class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Main</span>
                       </div>
                     </div>
                     <div v-else class="text-center py-4">
                       <div class="text-gray-400 text-sm">No phone numbers</div>
                     </div>
                   </div>
                 </div>

                 <!-- Email Addresses Column -->
                 <div class="bg-white rounded-lg border border-gray-200 shadow-sm">
                   <div class="p-4 border-b border-gray-200">
                     <div class="flex items-center gap-2">
                       <div class="w-6 h-6 rounded bg-purple-100 flex items-center justify-center">
                         <svg class="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                         </svg>
                       </div>
                       <h5 class="text-sm font-semibold text-gray-900">Email Addresses</h5>
                     </div>
                   </div>
                   <div class="p-4">
                     <div v-if="selectedUser.emails && selectedUser.emails.length > 0" class="space-y-2">
                       <div v-for="email in selectedUser.emails" :key="email.id" 
                            class="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                         <div class="flex-1">
                           <div class="text-sm font-medium text-gray-900 break-all">{{ email.email }}</div>
                           <div class="text-xs text-gray-600">{{ email.type || 'Email' }}</div>
                         </div>
                         <span v-if="email.is_main" class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Main</span>
                       </div>
                     </div>
                     <div v-else class="text-center py-4">
                       <div class="text-gray-400 text-sm">No email addresses</div>
                     </div>
                   </div>
                 </div>

                 <!-- Social Media Column -->
                 <div class="bg-white rounded-lg border border-gray-200 shadow-sm">
                   <div class="p-4 border-b border-gray-200">
                     <div class="flex items-center gap-2">
                       <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center">
                         <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                         </svg>
                       </div>
                       <h5 class="text-sm font-semibold text-gray-900">Social Media</h5>
                     </div>
                   </div>
                   <div class="p-4">
                     <div v-if="selectedUser.socials && selectedUser.socials.length > 0" class="space-y-2">
                       <div v-for="social in selectedUser.socials" :key="social.id" 
                            class="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                         <div class="flex-1">
                           <div class="text-sm font-medium text-gray-900 break-all">{{ social.social }}</div>
                           <div class="text-xs text-gray-600">{{ social.type || 'Social' }}</div>
                         </div>
                         <span v-if="social.is_main" class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Main</span>
                       </div>
                     </div>
                     <div v-else class="text-center py-4">
                       <div class="text-gray-400 text-sm">No social media</div>
                     </div>
                   </div>
                 </div>

                 <!-- Other Links Column -->
                 <div class="bg-white rounded-lg border border-gray-200 shadow-sm">
                   <div class="p-4 border-b border-gray-200">
                     <div class="flex items-center gap-2">
                       <div class="w-6 h-6 rounded bg-orange-100 flex items-center justify-center">
                         <svg class="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                         </svg>
                       </div>
                       <h5 class="text-sm font-semibold text-gray-900">Other Links</h5>
                     </div>
                   </div>
                   <div class="p-4">
                     <div v-if="selectedUser.others && selectedUser.others.length > 0" class="space-y-2">
                       <div v-for="other in selectedUser.others" :key="other.id" 
                            class="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                         <div class="flex-1">
                           <div class="text-sm font-medium text-gray-900 break-all">{{ other.others }}</div>
                           <div class="text-xs text-gray-600">{{ other.type || 'Link' }}</div>
                         </div>
                         <span v-if="other.is_main" class="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">Main</span>
                       </div>
                     </div>
                     <div v-else class="text-center py-4">
                       <div class="text-gray-400 text-sm">No other links</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <!-- NFC Card Information Section -->
             <div v-if="selectedUser.cards && selectedUser.cards.length > 0">
               <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                 <svg class="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 003 3z"></path>
                 </svg>
                 NFC Card Details
               </h4>
               <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200/50 shadow-sm">
                 <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                   <div class="flex items-center gap-3">
                     <div class="w-10 h-10 rounded-lg bg-orange-200 flex items-center justify-center">
                       <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 003 3z"></path>
                       </svg>
                     </div>
                     <div>
                       <div class="text-sm font-medium text-orange-900">Activation Code</div>
                       <div class="text-lg font-bold text-orange-800 font-mono">{{ selectedUser.cards[0].unique_code }}</div>
                     </div>
                   </div>
                   <span :class="[
                     'inline-flex px-3 py-1 text-sm font-semibold rounded-full',
                     selectedUser.cards[0].is_activated 
                       ? 'bg-green-100 text-green-800 border border-green-200' 
                       : 'bg-orange-100 text-orange-800 border border-orange-200'
                   ]">
                     <div :class="`w-2 h-2 rounded-full mr-2 ${selectedUser.cards[0].is_activated ? 'bg-green-500' : 'bg-orange-500'}`"></div>
                     {{ selectedUser.cards[0].is_activated ? 'Activated' : 'Not Activated' }}
                   </span>
                 </div>
                 <div class="text-sm text-orange-600">
                   <span class="font-medium">Created:</span> {{ formatDate(selectedUser.cards[0].created_at) }}
                 </div>
               </div>
             </div>
             
             <!-- No Card State -->
             <div v-else class="mb-6 sm:mb-8">
               <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                 <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 003 3z"></path>
                 </svg>
                 NFC Card Details
               </h4>
               <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                 <div class="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                   <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 003 3z"></path>
                   </svg>
                 </div>
                 <div class="text-gray-600 font-medium mb-1">No NFC Card Assigned</div>
                 <div class="text-sm text-gray-500">This user doesn't have an NFC card yet</div>
               </div>
             </div>
           </div>
           
           <!-- Footer Section -->
           <div class="bg-gradient-to-r from-gray-50 to-blue-50 px-4 sm:px-6 py-4 border-t border-gray-200/50">
             <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-end">
               <button @click="selectedUser = null" 
                       class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md">
                 <div class="flex items-center justify-center gap-2">
                   <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                   </svg>
                   Close
                 </div>
               </button>
               <button @click="editUser(selectedUser)"
                       class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border border-transparent rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                 <div class="flex items-center justify-center gap-2">
                   <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                   </svg>
                   Edit
                 </div>
               </button>
             </div>
           </div>
                   </div>
        </div>
      </div>

    <!-- Restore Users Modal - Enhanced Design -->
       <div v-if="showRestoreModal" class="fixed inset-0 z-50 overflow-y-auto" @click.self="showRestoreModal = false">
         <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Backdrop -->
           <div class="fixed inset-0 transition-opacity z-40" aria-hidden="true">
             <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           </div>
           
           <!-- Modal Container -->
        <div class="relative z-50 inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full max-w-7xl rounded-2xl shadow-2xl border border-gray-100" @click.stop>
          
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
                  <h3 class="text-xl font-semibold text-gray-900">Deleted Users</h3>
                  <p class="text-sm text-gray-500">Manage and restore deleted user accounts</p>
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
                      id="users-restore-search"
                      name="users-restore-search"
                      v-model="restoreSearchQuery"
                      type="text"
                    placeholder="Search deleted users..."
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

               <!-- Users Table - Desktop -->
            <div v-if="filteredRestoreUsers.length > 0" class="hidden sm:block">
                 <div class="overflow-x-auto">
                <table class="w-full enhanced-table" role="table" aria-label="Deleted users table">
                  <thead class="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-b-2 border-gray-200/80">
                    <tr class="backdrop-blur-sm">
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[18%]" role="columnheader" aria-sort="none">
                           <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                             </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Full Name</span>
                          </div>
                           </div>
                         </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[22%]" role="columnheader" aria-sort="none">
                           <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                             </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Contact Info</span>
                          </div>
                           </div>
                         </th>
                      <th class="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200/60 w-[20%]" role="columnheader" aria-sort="none">
                           <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center column-icon">
                            <svg class="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                             </svg>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[10px]">Company</span>
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
                    <tr v-for="(user, index) in filteredRestoreUsers" :key="user.id"
                        :class="[
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        ]"
                        role="row">
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[18%]" role="gridcell">
                        <div class="flex items-center gap-3">
                          <div class="relative">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0 ring-2 ring-red-100 user-avatar">
                              {{ getUserInitials(user.name) }}
                            </div>
                            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="text-sm font-semibold text-gray-900 truncate leading-tight">{{ user.name }}</div>
                            <div class="text-xs text-gray-500 mt-0.5">ID: {{ user.id }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[22%]" role="gridcell">
                        <div class="space-y-1">
                          <div class="text-sm text-gray-900 truncate">{{ user.email }}</div>
                          <div v-if="user.phone" class="text-xs text-gray-500 truncate">{{ user.phone }}</div>
                          <div v-else class="text-xs text-gray-400">No phone</div>
                        </div>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                        <div v-if="user.profile?.company" class="space-y-1">
                          <span class="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">
                             {{ user.profile.company }}
                           </span>
                          <div v-if="user.profile?.companyemail" class="text-xs text-gray-500 truncate">{{ user.profile.companyemail }}</div>
                        </div>
                        <span v-else class="text-gray-400 text-sm">No company</span>
                      </td>
                      <td class="px-4 py-5 border-r border-gray-100/60 w-[20%]" role="gridcell">
                        <div class="flex items-center gap-3">
                          <div class="flex-1">
                            <div class="text-xs text-gray-500">Created:</div>
                            <div class="text-sm text-gray-900">{{ formatDate(user.created_at) }}</div>
                          </div>
                          <div class="flex-1">
                            <div class="text-xs text-red-600 font-medium">Deleted:</div>
                            <div class="text-sm text-red-600 font-medium">{{ formatDate(user.deleted_at) }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-5 w-[20%]" role="gridcell">
                        <div class="flex items-center gap-1.5 justify-start">
                           <button @click="restoreUser(user)" 
                                  class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-green-700 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md hover:from-green-100 hover:to-green-200 hover:border-green-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                  role="button"
                                  aria-label="Restore user">
                             <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                             </svg>
                             <span>Restore</span>
                           </button>
                          <button @click="viewUserDetails(user)" 
                                  class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-200 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 action-button whitespace-nowrap"
                                  role="button"
                                  aria-label="View user details">
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

               <!-- Mobile Cards for Deleted Users -->
               <div v-if="filteredRestoreUsers.length > 0" class="sm:hidden">
                 <div class="p-2 space-y-3">
                   <div v-for="user in filteredRestoreUsers" :key="user.id" 
                        class="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200">
                     <div class="space-y-3">
                       <!-- User Header -->
                       <div class="flex items-center justify-between">
                         <div class="flex items-center gap-3">
                           <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-sm font-bold">
                             {{ getUserInitials(user.name) }}
                           </div>
                           <div>
                             <div class="font-medium text-gray-900">{{ user.name }}</div>
                             <div class="text-sm text-gray-500">{{ user.email }}</div>
                           </div>
                         </div>
                         <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                           Deleted
                         </span>
                       </div>
                       
                       <!-- Contact Info -->
                       <div class="border-t border-gray-100 pt-3">
                         <div class="text-sm">
                           <span class="text-gray-500">Phone:</span>
                           <span class="ml-2 font-medium text-gray-900">{{ user.phone || 'No phone' }}</span>
                         </div>
                       </div>
                       
                       <!-- Company Info -->
                       <div class="border-t border-gray-100 pt-3">
                         <div class="text-sm">
                           <span class="text-gray-500">Company:</span>
                           <span class="ml-2 font-medium text-gray-900">{{ user.profile?.company || 'No company' }}</span>
                         </div>
                       </div>
                       
                       <!-- Timeline -->
                       <div class="border-t border-gray-100 pt-3">
                         <div class="text-sm">
                           <span class="text-gray-500">Created:</span>
                           <span class="ml-2 font-medium text-gray-900">{{ formatDate(user.created_at) }}</span>
                         </div>
                         <div class="text-sm mt-1">
                           <span class="text-gray-500">Deleted:</span>
                           <span class="ml-2 font-medium text-red-600">{{ formatDate(user.deleted_at) }}</span>
                         </div>
                       </div>
                       
                       <!-- Actions -->
                       <div class="border-t border-gray-100 pt-3 flex gap-2">
                         <button @click="restoreUser(user)"
                                 class="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                           Restore
                         </button>
                         <button @click="viewUserDetails(user)"
                                 class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                           View Only
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               <!-- Empty State -->
            <div v-else class="text-center py-16">
              <div class="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 mx-auto mb-6 flex items-center justify-center rounded-2xl">
                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              <div class="text-xl font-semibold text-gray-900 mb-2">No deleted users found</div>
              <div class="text-gray-500 max-w-md mx-auto">{{ restoreSearchQuery ? 'Try adjusting your search terms to find what you\'re looking for' : 'All users are currently active and no accounts have been deleted' }}</div>
               </div>
             </div>
             
             <!-- Footer Section -->
          <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-end">
                 <button @click="showRestoreModal = false" 
                      class="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                     Close
                 </button>
                 <button @click="loadSoftDeletedUsers" 
                      class="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 transition-colors">
                     Refresh List
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>

    <!-- Delete User Confirmation Modal - Enhanced Design -->
       <div v-if="showDeleteConfirmModal" class="fixed inset-0 z-50 overflow-y-auto" @click.self="cancelDeleteUser">
         <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Backdrop -->
           <div class="fixed inset-0 transition-opacity z-40" aria-hidden="true">
             <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           </div>
           
           <!-- Modal Container -->
        <div class="relative z-50 inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full max-w-md rounded-2xl shadow-2xl border border-gray-100" @click.stop>
          
          <!-- Header Section - Enhanced Design -->
          <div class="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100 px-6 py-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                 </div>
                 <div>
                <h3 class="text-2xl font-bold text-gray-900">Confirm Deletion</h3>
                <p class="text-sm text-gray-600">This action cannot be undone</p>
                 </div>
               </div>
             </div>
             
             <!-- Content Section -->
          <div class="bg-white px-6 py-8">
               <div class="text-center">
              <div class="mx-auto flex items-center justify-center h-16 w-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl mb-6 shadow-sm">
                <svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                   </svg>
                 </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Delete User Account</h3>
              <p class="text-sm text-gray-600 mb-6 leading-relaxed">
                Are you sure you want to delete <span class="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">{{ userToDelete?.name }}</span>? 
                   This will move their account to the deleted users list where it can be restored later.
                 </p>
               </div>
             </div>
             
             <!-- Footer Section -->
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 flex flex-col sm:flex-row gap-3 justify-end">
               <button @click="cancelDeleteUser" 
                    class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md">
                 Cancel
               </button>
               <button @click="confirmDeleteUser" 
                    class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md">
                 Delete User
               </button>
             </div>
           </div>
         </div>
       </div>

    <!-- Restore User Confirmation Modal - Enhanced Design -->
       <div v-if="showRestoreConfirmModal" class="fixed inset-0 z-50 overflow-y-auto" @click.self="cancelRestoreUser">
         <div class="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Backdrop -->
           <div class="fixed inset-0 transition-opacity z-40" aria-hidden="true">
             <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           </div>
           
           <!-- Modal Container -->
        <div class="relative z-50 inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full max-w-md rounded-2xl shadow-2xl border border-gray-100" @click.stop>
          
          <!-- Header Section - Enhanced Design -->
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 px-6 py-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                 </div>
                 <div>
                <h3 class="text-2xl font-bold text-gray-900">Confirm Restoration</h3>
                <p class="text-sm text-gray-600">Restore user account</p>
                 </div>
               </div>
             </div>
             
             <!-- Content Section -->
          <div class="bg-white px-6 py-8">
               <div class="text-center">
              <div class="mx-auto flex items-center justify-center h-16 w-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 shadow-sm">
                <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Restore User Account</h3>
              <p class="text-sm text-gray-600 mb-6 leading-relaxed">
                Are you sure you want to restore <span class="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">{{ userToRestore?.name }}</span>? 
                   This will reactivate their account and move them back to the active users list.
                 </p>
               </div>
             </div>
             
             <!-- Footer Section -->
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 flex flex-col sm:flex-row gap-3 justify-end">
               <button @click="cancelRestoreUser" 
                    class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md">
                 Cancel
               </button>
               <button @click="confirmRestoreUser" 
                    class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md">
                 Restore User
               </button>
             </div>
           </div>
         </div>
       </div>

       <!-- Success Notification -->
       <div v-if="showSuccessNotification" 
            class="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out"
            :class="showSuccessNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'">
         <div class="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400/50 backdrop-blur-sm">
           <div class="flex items-center gap-3">
             <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
               <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
               </svg>
             </div>
             <div>
               <div class="font-semibold text-sm">Success!</div>
               <div class="text-xs text-green-100">{{ successMessage }}</div>
             </div>
             <button @click="showSuccessNotification = false" 
                     class="ml-4 text-white/80 hover:text-white transition-colors">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
               </svg>
             </button>
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
const users = ref([])
const softDeletedUsers = ref([])
const selectedUser = ref(null)
const searchQuery = ref('')
const restoreSearchQuery = ref('')
const adminName = ref('Admin')
const showSidebar = ref(false)
const sidebarCollapsed = ref(false)
const showRestoreModal = ref(false)

// Add new state variables for confirmation modals and notifications
const showDeleteConfirmModal = ref(false)
const showRestoreConfirmModal = ref(false)
const userToDelete = ref(null)
const userToRestore = ref(null)
const showSuccessNotification = ref(false)
const successMessage = ref('')
const notificationTimer = ref(null)
const loadingUserDetails = ref(false)

// Server-side pagination state
const currentPage = ref(1)
const itemsPerPage = ref(10)
const totalPages = ref(0)
const totalItems = ref(0)

// Computed properties for server-side pagination
const paginatedUsers = computed(() => {
  // Users are already paginated from the server
  return Array.isArray(users.value) ? users.value : []
})

const filteredUsers = computed(() => {
  // For compatibility - users are already filtered on server
  return paginatedUsers.value
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
    loadUsers()
  }, 300) // 300ms debounce
})

// Watch for itemsPerPage changes
watch(itemsPerPage, () => {
  currentPage.value = 1 // Reset to first page on page size change
  loadUsers()
})

const filteredRestoreUsers = computed(() => {
  if (!restoreSearchQuery.value) return softDeletedUsers.value
  
  const query = restoreSearchQuery.value.toLowerCase()
  return softDeletedUsers.value.filter(user => 
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query) ||
    (user.profile?.company && user.profile.company.toLowerCase().includes(query))
  )
})

// Functions
function getUserInitials(name) {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function handleImageError(event) {
  // Hide the image and show initials instead
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  const fallback = parent.querySelector('.fallback-initials')
  if (fallback) {
    fallback.style.display = 'flex'
  }
}

function formatDate(date) {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

async function viewUserDetails(user) {
  // Check if this is a deleted user (has deleted_at property)
  if (user.deleted_at) {
    // For deleted users, show detailed information in an alert
    const details = `
Deleted User Details:
Name: ${user.name}
Email: ${user.email}
Phone: ${user.phone || 'No phone'}
Company: ${user.profile?.company || 'No company'}
Company Email: ${user.profile?.companyemail || 'No company email'}
Created: ${formatDate(user.created_at)}
Deleted: ${formatDate(user.deleted_at)}
    `.trim()
    
    alert(details)
  } else {
    // For regular users, fetch full details from API
    loadingUserDetails.value = true
    try {
      const fullUserData = await adminApi.getUser(user.id)
      selectedUser.value = fullUserData
    } catch (e) {
      console.error('Failed to load user details:', e)
      alert('Failed to load user details: ' + e.message)
    } finally {
      loadingUserDetails.value = false
    }
  }
}

function editUser(user) {
  // Navigate to the dedicated edit page
  router.push({ name: 'admin-edit-user', params: { id: user.id } })
}

async function softDeleteUser(user) {
  userToDelete.value = user
  showDeleteConfirmModal.value = true
}

async function confirmDeleteUser() {
  if (!userToDelete.value) return
  
  try {
    await adminApi.softDeleteUser(userToDelete.value.id)
    showSuccessNotification.value = true
    successMessage.value = `User ${userToDelete.value.name} deleted successfully`
    
    // Auto-hide notification after 3 seconds
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
    
    // Close modal
    showDeleteConfirmModal.value = false
    userToDelete.value = null
    
    // Remove from users list and reload
    await loadUsers()
    await loadSoftDeletedUsers()
  } catch (e) {
    console.error('Failed to delete user:', e)
    alert('Failed to delete user: ' + e.message)
  }
}

function cancelDeleteUser() {
  showDeleteConfirmModal.value = false
  userToDelete.value = null
}

async function restoreUser(user) {
  userToRestore.value = user
  showRestoreConfirmModal.value = true
}

async function confirmRestoreUser() {
  if (!userToRestore.value) return
  
  try {
    await adminApi.restoreUser(userToRestore.value.id)
    showSuccessNotification.value = true
    successMessage.value = `User ${userToRestore.value.name} restored successfully`
    
    // Auto-hide notification after 3 seconds
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
    
    // Close modal
    showRestoreConfirmModal.value = false
    userToRestore.value = null
    
    // Reload both lists
    await loadUsers()
    await loadSoftDeletedUsers()
    // Close restore modal if no more deleted users
    if (softDeletedUsers.value.length === 0) {
      showRestoreModal.value = false
    }
  } catch (e) {
    console.error('Failed to restore user:', e)
    alert('Failed to restore user: ' + e.message)
  }
}

function cancelRestoreUser() {
  showRestoreConfirmModal.value = false
  userToRestore.value = null
}



async function openRestoreModal() {
  showRestoreModal.value = true
  await loadSoftDeletedUsers()
}

async function loadSoftDeletedUsers() {
  try {
    const response = await adminApi.getSoftDeletedUsers()
    // Handle new paginated response structure
    if (response.data && Array.isArray(response.data)) {
      softDeletedUsers.value = response.data
    } else if (response.users && Array.isArray(response.users)) {
      // Fallback for old response format
      softDeletedUsers.value = response.users
    } else {
      softDeletedUsers.value = []
    }
  } catch (e) {
    console.error('Failed to load soft deleted users:', e)
    softDeletedUsers.value = []
  }
}


function exportUsers() {
  // TODO: Implement export functionality
  alert('Export functionality coming soon!')
}

function changePage(page) {
  const validPage = Math.max(1, Math.min(page, totalPages.value))
  if (validPage !== currentPage.value) {
    currentPage.value = validPage
    loadUsers() // Fetch new page from server
  }
}



function validateAndChangePage(page) {
  const validPage = Math.max(1, Math.min(page, totalPages.value))
  if (validPage !== currentPage.value) {
    changePage(validPage)
  }
}

function resetPagination() {
  currentPage.value = 1
}

function getVisiblePages() {
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


async function logout() {
  try {
    await adminApi.logout()
  } catch (e) {
    // Even if API call fails, we still clear local storage and redirect
  }
  // Always clear local storage and redirect, regardless of API call success
  localStorage.removeItem('gtm_admin_token')
  localStorage.removeItem('gtm_admin_user')
  router.replace({ name: 'login' })
}

async function loadUsers(forceRefresh = false) {
  loading.value = true
  error.value = ''
  
  try {
    // Fetch with server-side pagination
    // If forceRefresh is true (from refresh button), bypass cache to get fresh data
    const data = await adminApi.getUsers(currentPage.value, itemsPerPage.value, searchQuery.value, forceRefresh)
    
    // Server-side pagination response structure
    if (data && data.data && Array.isArray(data.data)) {
      users.value = data.data
      
      // Update pagination metadata
      if (data.pagination) {
        currentPage.value = data.pagination.current_page
        totalPages.value = data.pagination.last_page
        totalItems.value = data.pagination.total
      }
    } else {
      console.warn('Unexpected response structure:', data)
      users.value = []
      totalPages.value = 0
      totalItems.value = 0
    }
  } catch (e) {
    console.error('Failed to load users:', e)
    error.value = e?.message || 'Failed to load users'
    users.value = []
  } finally {
    loading.value = false
  }
}

function getAdmin() {
  try {
    const raw = localStorage.getItem('gtm_admin_user')
    if (raw) adminName.value = JSON.parse(raw)?.name || 'Admin'
  } catch {}
}

onMounted(() => {
  getAdmin()
  loadUsers()
  loadSoftDeletedUsers()
})

// Cleanup timer on component unmount
onUnmounted(() => {
  if (notificationTimer.value) {
    clearTimeout(notificationTimer.value)
  }
})

// Watch for search query changes to reset pagination
watch(searchQuery, () => {
  resetPagination()
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

.enhanced-table tbody tr:nth-child(even) {
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.3), rgba(241, 245, 249, 0.2));
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
}

/* Column header icons */
.column-icon {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
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
  .action-button,
  .action-button::before,
  .status-badge::after {
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


<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
    <!-- Hamburger button -->
    <button @click="showSidebar = !showSidebar" class="absolute left-3 sm:left-4 top-3 sm:top-4 z-50 w-12 h-12 sm:w-10 sm:h-10 rounded-xl sm:rounded-lg border-2 sm:border border-gray-300 bg-white/95 backdrop-blur flex flex-col items-center justify-center gap-1.5 sm:gap-1 shadow-lg hover:shadow-xl transition-all duration-200">
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
    </button>

                                                                                                                                                               <main class="max-w-7xl mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6 lg:space-y-8 lg:flex lg:flex-col lg:items-center">
               <!-- Page Header -->
                 <div class="flex flex-col items-center text-center mt-8 sm:mt-12 lg:mt-16">
        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white flex items-center justify-center shadow-md overflow-hidden mb-2 sm:mb-3">
          <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-9 h-9 object-contain" />
        </div>
        <div>
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900">GoTapMode</h1>
          <p class="text-sm sm:text-base text-gray-600">User Management System</p>
        </div>
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
       <div v-else class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full lg:max-w-7xl">
        <!-- Table Header -->
                 <div class="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900">Administrator Accounts</h2>
                  <p class="text-sm text-gray-600">Manage and view all system administrators</p>
                </div>
              </div>
              
              <!-- Desktop Stats -->
              <div class="hidden lg:flex items-center gap-6">
                <div class="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                  <div class="text-center">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Total Admins</div>
                    <div class="text-2xl font-bold text-blue-600">{{ administrators.length }}</div>
                  </div>
                </div>
                <div class="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                  <div class="text-center">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Filtered</div>
                    <div class="text-2xl font-bold text-green-600">{{ filteredAdministrators.length }}</div>
                  </div>
                </div>
                <div class="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                  <div class="text-center">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Pages</div>
                    <div class="text-2xl font-bold text-purple-600">{{ totalPages }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Search Section -->
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div class="relative w-full lg:w-96">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by name, email, or ID..."
                                     class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                />
                <div class="absolute left-4 top-3.5 text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div class="absolute right-4 top-3.5 text-gray-400">
                  <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">{{ filteredAdministrators.length }} results</span>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="flex items-center gap-3 justify-end">
                                 <button @click="openAddModal" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-500 to-gray-600 border border-gray-500 rounded-lg hover:from-gray-600 hover:to-gray-700 hover:border-gray-600 transition-all duration-200">
                   <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                   </svg>
                   Add Admin
                 </button>
                <button @click="fetchAdministrators" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Table -->
        <div class="hidden lg:block w-full overflow-hidden">
          <div class="bg-white border border-gray-200 overflow-hidden shadow-sm">
            <table class="w-full enhanced-table" role="table" aria-label="Administrators table">
                             <thead class="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-200/80 sticky top-0 z-10">
                <tr class="backdrop-blur-sm">
                                     <th class="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4 group cursor-pointer hover:bg-gray-100/50 transition-colors duration-200">
                    <div class="flex items-center gap-3">
                                             <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                         <svg class="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                         </svg>
                       </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-semibold text-gray-800">Full Name</span>
                        <span class="text-xs text-gray-500 font-normal">Administrator</span>
                      </div>
                    </div>
                  </th>
                  <th class="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4 group cursor-pointer hover:bg-gray-100/50 transition-colors duration-200">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                        <svg class="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-semibold text-gray-800">Email Address</span>
                        <span class="text-xs text-gray-500 font-normal">Contact Info</span>
                      </div>
                    </div>
                  </th>

                  <th class="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/6 group cursor-pointer hover:bg-gray-100/50 transition-colors duration-200">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                        <svg class="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-semibold text-gray-800">Joined Date</span>
                        <span class="text-xs text-gray-500 font-normal">Registration</span>
                      </div>
                    </div>
                  </th>
                                     <th class="px-6 py-5 text-center text-xs font-bold text-gray-700 uppercase tracking-wider w-1/6">
                    <div class="flex items-center justify-center gap-3">
                      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center shadow-sm">
                        <svg class="w-4 h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-semibold text-gray-800">Actions</span>
                        <span class="text-xs text-gray-500 font-normal">Management</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100/80">
                <tr v-for="(admin, index) in paginatedAdministrators" :key="admin.id"
                                         :class="[
                       'group hover:bg-gradient-to-r hover:from-gray-50/30 hover:to-gray-100/30 transition-all duration-300 hover:shadow-sm hover:scale-[1.002] transform-gpu',
                       index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                     ]"
                    role="row">
                  <td class="px-6 py-5 border-r border-gray-100/50">
                    <div class="flex items-center gap-4">
                      <div class="relative">
                                                 <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 text-white flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex-shrink-0 ring-2 ring-gray-100 group-hover:ring-gray-200">
                          {{ getUserInitials(admin.name) }}
                        </div>
                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-white shadow-sm animate-pulse">
                          <div class="w-full h-full rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div class="min-w-0 flex-1">
                                                 <div class="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">{{ admin.name }}</div>
                        <div class="text-sm text-gray-500 mt-1 font-mono">ID: #{{ admin.id }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-5 border-r border-gray-100/50">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">{{ admin.email }}</div>
                        <div class="text-sm text-gray-500 mt-1">Primary Email Address</div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-5 border-r border-gray-100/50">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="text-base font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">{{ formatDate(admin.created_at) }}</div>
                        <div class="text-sm text-gray-500 mt-1">Member since {{ new Date(admin.created_at).getFullYear() }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-center">
                    <div class="flex items-center justify-center gap-2">
                      <button
                        @click="viewAdministrator(admin)"
                        class="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 border border-gray-500 rounded-lg hover:from-gray-600 hover:to-gray-700 hover:border-gray-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105 group-hover:shadow-xl"
                      >
                        <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Details
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
          <div class="p-4 space-y-6">
            <div v-for="admin in paginatedAdministrators" :key="admin.id"
                 class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
              <div class="space-y-4">
                <!-- User Header -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="relative">
                                             <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 text-white flex items-center justify-center text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-200">
                        {{ getUserInitials(admin.name) }}
                      </div>
                      <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-white shadow-sm animate-pulse">
                        <div class="w-full h-full rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                                             <div class="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">{{ admin.name }}</div>
                      <div class="text-sm text-gray-600 font-medium">{{ admin.email }}</div>
                      <div class="text-xs text-gray-500 mt-1 font-mono">ID: #{{ admin.id }}</div>
                    </div>
                  </div>

                </div>

                <!-- Email & Date Info -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-sm">
                      <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ admin.email }}</div>
                      <div class="text-xs text-gray-500">Primary Email</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center shadow-sm">
                      <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ formatDate(admin.created_at) }}</div>
                      <div class="text-xs text-gray-500">Joined {{ new Date(admin.created_at).getFullYear() }}</div>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="border-t border-gray-100 pt-4">
                  <button @click="viewAdministrator(admin)"
                          class="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 border border-gray-500 rounded-lg hover:from-gray-600 hover:to-gray-700 hover:border-gray-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    View Administrator Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

                 <!-- Enhanced Pagination -->
                   <div v-if="filteredAdministrators.length > 0" class="px-4 sm:px-6 py-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 w-full lg:max-w-7xl">
          <!-- Desktop Pagination Layout -->
          <div class="hidden lg:flex items-center justify-between">
            <!-- Left Section: Page Size & Info -->
            <div class="flex items-center gap-6">
              <!-- Page Size Selector -->
              <div class="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                <span class="text-sm font-semibold text-gray-700">Show:</span>
                <select
                  v-model="itemsPerPage"
                  class="border-0 bg-transparent px-6 py-1 text-sm font-bold text-blue-600 focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-700 transition-colors"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span class="text-sm text-gray-600">entries</span>
              </div>

              <!-- Pagination Info -->
              <div class="bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-lg">
                <div class="text-sm text-gray-700">
                  <span class="font-bold text-blue-600 text-lg">{{ paginationInfo.start }}-{{ paginationInfo.end }}</span>
                  <span class="text-gray-500"> of </span>
                  <span class="font-bold text-gray-900 text-lg">{{ paginationInfo.total }}</span>
                  <span class="text-gray-500"> results</span>
                </div>
              </div>
            </div>

            <!-- Right Section: Page Jump & Navigation -->
            <div class="flex items-center gap-6">
              <!-- Page Jump Input -->
              <div class="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <span class="text-sm font-semibold text-gray-700">Go to:</span>
                <input
                  type="number"
                  :min="1"
                  :max="totalPages"
                  v-model.number="currentPage"
                  @keyup.enter="validateAndChangePage(currentPage)"
                  @blur="validateAndChangePage(currentPage)"
                                     class="w-20 px-3 py-1 text-sm text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent font-semibold"
                />
                <span class="text-sm text-gray-600">of {{ totalPages }}</span>
              </div>

              <!-- Pagination Navigation -->
              <div class="flex items-center gap-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <!-- First Page Button -->
                <button
                  @click="changePage(1)"
                  :disabled="currentPage === 1"
                  class="p-3 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border-r border-gray-200"
                  title="First Page"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- Previous Button -->
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="p-3 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border-r border-gray-200"
                  title="Previous Page"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      'px-4 py-3 text-sm font-semibold border-r border-gray-200 transition-all duration-200 hover:bg-gray-50',
                      page === currentPage
                        ? 'bg-gray-600 text-white hover:bg-gray-700 shadow-lg'
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
                  class="p-3 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border-r border-gray-200"
                  title="Next Page"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <!-- Last Page Button -->
                <button
                  @click="changePage(totalPages)"
                  :disabled="currentPage === totalPages"
                  class="p-3 text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  title="Last Page"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Pagination Layout - Single Line -->
          <div class="lg:hidden">
            <!-- Compact Single Line Pagination -->
            <div class="flex items-center justify-between gap-2 bg-white px-3 py-3 rounded-xl border border-gray-200 shadow-lg">
              <!-- Left: Page Size -->
              <div class="flex items-center gap-2 flex-shrink-0">
                <select
                  v-model="itemsPerPage"
                  class="text-xs bg-transparent border-0 px-6 py-1 text-gray-600 focus:ring-0 focus:outline-none cursor-pointer font-semibold"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span class="text-xs text-gray-500 hidden xs:inline">items</span>
              </div>

              <!-- Center: Navigation Controls -->
              <div class="flex items-center gap-1 flex-shrink-0">
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="p-2 text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 rounded-lg"
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
                  class="p-2 text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 rounded-lg"
                  title="Next"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- Right: Page Jump & Info -->
              <div class="flex items-center gap-2 flex-shrink-0">
                <input
                  type="number"
                  :min="1"
                  :max="totalPages"
                  v-model.number="currentPage"
                  @keyup.enter="validateAndChangePage(currentPage)"
                  @blur="validateAndChangePage(currentPage)"
                                     class="w-12 px-2 py-1 text-xs text-center border border-gray-300 rounded focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Page"
                />
                <span class="text-xs text-gray-500 hidden sm:inline">{{ paginationInfo.total }} total</span>
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
         <router-link to="/admin/nfc-writing" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
           </svg>
           NFC Writing
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
      <div class="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-200 flex flex-col">
        <!-- Modal Header -->
        <div class="bg-gray-900 px-4 sm:px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h2 class="text-lg sm:text-xl font-bold text-white truncate">Administrator Details</h2>
              <p class="text-sm sm:text-base text-gray-300 truncate">Complete profile information</p>
            </div>
          </div>
          <button
            @click="closeModal"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0 ml-2"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div v-if="selectedAdmin" class="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1 min-h-0">
          <!-- Profile Header -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div class="relative flex justify-center sm:justify-start">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-800 text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
                {{ getUserInitials(selectedAdmin.name) }}
              </div>
              <div class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-white">
                <div class="w-full h-full rounded-full bg-green-500"></div>
              </div>
            </div>
            <div class="flex-1 text-center sm:text-left">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 break-words">{{ selectedAdmin.name }}</h3>
              <p class="text-base sm:text-lg text-gray-600">ID: #{{ selectedAdmin.id }}</p>
              <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mt-3">
                <span :class="[
                  'inline-flex items-center px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium',
                  selectedAdmin.email_verified_at
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                ]">
                  <div :class="`w-2 h-2 rounded-full mr-2 ${selectedAdmin.email_verified_at ? 'bg-green-500' : 'bg-yellow-500'}`"></div>
                  {{ selectedAdmin.email_verified_at ? 'Email Verified' : 'Pending Verification' }}
                </span>
                <span class="inline-flex items-center px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium bg-gray-100 text-gray-800">
                  <div class="w-2 h-2 rounded-full mr-2 bg-gray-500"></div>
                  Administrator
                </span>
              </div>
            </div>
          </div>

          <!-- Information Cards -->
          <div class="grid gap-3 sm:gap-4">
            <!-- Email Information -->
            <div class="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
              <div class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0 text-center sm:text-left">
                  <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email Address</h4>
                  <p class="text-sm sm:text-base text-gray-700 break-all">{{ selectedAdmin.email }}</p>
                  <div class="mt-3 text-xs sm:text-sm text-gray-600">
                    <span class="font-medium">Status:</span>
                    <span class="ml-2" :class="selectedAdmin.email_verified_at ? 'text-green-600' : 'text-yellow-600'">
                      {{ selectedAdmin.email_verified_at ? 'Verified' : 'Pending' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Account Information -->
            <div class="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
              <div class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0 text-center sm:text-left">
                  <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Account Information</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p class="text-xs sm:text-sm text-gray-600">Joined Date</p>
                      <p class="text-sm sm:text-base font-medium text-gray-900">{{ formatDate(selectedAdmin.created_at) }}</p>
                    </div>
                    <div>
                      <p class="text-xs sm:text-sm text-gray-600">Last Updated</p>
                      <p class="text-sm sm:text-base font-medium text-gray-900">{{ formatDate(selectedAdmin.updated_at) }}</p>
                    </div>
                    <div>
                      <p class="text-xs sm:text-sm text-gray-600">User ID</p>
                      <p class="text-sm sm:text-base font-medium text-gray-900">#{{ selectedAdmin.id }}</p>
                    </div>
                    <div>
                      <p class="text-xs sm:text-sm text-gray-600">Role</p>
                      <p class="text-sm sm:text-base font-medium text-gray-700">Administrator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Verification Status -->
            <div class="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
              <div class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0 text-center sm:text-left">
                  <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Account Status</h4>
                  <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-green-500"></div>
                      <span class="text-sm sm:text-base text-gray-900">Active Administrator</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div :class="`w-3 h-3 rounded-full ${selectedAdmin.email_verified_at ? 'bg-green-500' : 'bg-yellow-500'}`"></div>
                      <span class="text-sm sm:text-base text-gray-900">Email {{ selectedAdmin.email_verified_at ? 'Verified' : 'Pending' }}</span>
                    </div>
                  </div>
                  <div class="mt-3 text-xs sm:text-sm text-gray-600">
                    This account has full administrative privileges and access to all system features.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200 flex-shrink-0">
          <div class="flex flex-col sm:flex-row justify-end gap-3">
            <button
              @click="closeModal"
              class="w-full sm:w-auto px-4 sm:px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200 shadow-sm"
            >
              Close
            </button>
            <button @click="openEditModal" class="w-full sm:w-auto px-4 sm:px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm">
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
    <div class="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden border border-gray-200">
      <!-- Modal Header -->
             <div class="bg-gray-600 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-bold text-white">Add Administrator</h2>
                         <p class="text-gray-100">Create a new admin account</p>
          </div>
        </div>
        <button
          @click="closeAddModal"
          class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              v-model="newUser.name"
              type="text"
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
              v-model="newUser.email"
              type="email"
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
              v-model="newUser.password"
              type="password"
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
              v-model="newUser.password_confirmation"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Confirm your password"
            />
          </div>

          <!-- Admin Role (Fixed) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Role <span class="text-red-500">*</span>
            </label>
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
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
        <button
          @click="closeAddModal"
          :disabled="isSubmitting"
          class="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200 shadow-sm disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          @click="addNewUser"
          :disabled="isSubmitting"
          class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm disabled:opacity-50 flex items-center gap-2"
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
    <div class="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden border border-gray-200">
      <!-- Modal Header -->
             <div class="bg-gray-600 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-bold text-white">Edit Administrator</h2>
                         <p class="text-gray-100">Update profile information</p>
          </div>
        </div>
        <button
          @click="closeEditModal"
          class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              v-model="editForm.name"
              type="text"
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
              v-model="editForm.email"
              type="email"
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
              v-model="editForm.password"
              type="password"
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
              v-model="editForm.password_confirmation"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-200"
              placeholder="Confirm new password"
            />
          </div>

          <!-- Admin Role (Fixed) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Role <span class="text-red-500">*</span>
            </label>
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
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
        <button
          @click="closeEditModal"
          :disabled="isUpdating"
          class="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200 shadow-sm disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          @click="updateAdministrator"
          :disabled="isUpdating"
          class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm disabled:opacity-50 flex items-center gap-2"
        >
          <svg v-if="isUpdating" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>{{ isUpdating ? 'Updating...' : 'Update Profile' }}</span>
        </button>
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
const administrators = ref([])
const selectedAdmin = ref(null)
const searchQuery = ref('')
const adminName = ref('Admin')
const showSidebar = ref(false)

// Pagination state
const currentPage = ref(1)
const itemsPerPage = ref(10)

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

const fetchAdministrators = async () => {
  loading.value = true
  error.value = ''

  try {
    console.log('Fetching administrators...')
    const response = await adminApi.getAdministrators()
    console.log('API Response:', response)

    // The api.get wrapper already extracts r.data, so response is the actual JSON object
    if (response && response.administrators) {
      administrators.value = response.administrators
      console.log('Administrators loaded:', administrators.value)
    } else {
      administrators.value = []
      console.log('No administrators found in response')
    }
  } catch (err) {
    console.error('Error:', err)
    error.value = err?.message || 'Failed to load administrators'
    administrators.value = []
  } finally {
    loading.value = false
  }
}

// Computed properties
const filteredAdministrators = computed(() => {
  if (!searchQuery.value) return administrators.value

  const query = searchQuery.value.toLowerCase()
  return administrators.value.filter(admin =>
    admin.name.toLowerCase().includes(query) ||
    admin.email.toLowerCase().includes(query) ||
    admin.id.toString().includes(query)
  )
})

const paginatedAdministrators = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredAdministrators.value.slice(start, end)
})

// Watch for search query changes to reset pagination
watch(searchQuery, () => {
  resetPagination()
})

const totalPages = computed(() => {
  return Math.ceil(filteredAdministrators.value.length / itemsPerPage.value)
})

const paginationInfo = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value + 1
  const end = Math.min(currentPage.value * itemsPerPage.value, filteredAdministrators.value.length)
  return { start, end, total: filteredAdministrators.value.length }
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

function resetPagination() {
  currentPage.value = 1
}

// Modal state
const showAdminModal = ref(false)
const showAddModal = ref(false)
const showEditModal = ref(false)

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
const openEditModal = () => {
  if (selectedAdmin.value) {
    editForm.value = {
      id: selectedAdmin.value.id,
      name: selectedAdmin.value.name,
      email: selectedAdmin.value.email,
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
  currentPage.value = page
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



function logout() {
  localStorage.removeItem('gtm_admin_token')
  localStorage.removeItem('gtm_admin_user')
  router.replace({ name: 'login' })
}

onMounted(() => {
  getAdmin()
  fetchAdministrators()
  document.addEventListener('keydown', handleKeyDown)
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
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <!-- Professional Header -->
    <div class="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <!-- Left Section -->
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button @click="$router.push({ name: 'admin-users' })" class="group p-2.5 sm:p-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>

            <!-- Mobile Title -->
            <div class="sm:hidden flex flex-col">
              <h1 class="text-lg font-bold text-gray-900 tracking-tight">Edit Profile</h1>
              <p class="text-xs text-gray-600 font-medium">{{ user?.name || 'Loading...' }}</p>
          </div>

            <div class="hidden sm:flex items-center space-x-4">
              <div class="flex items-center space-x-3">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
          </div>
                <div class="space-y-0.5">
                  <h1 class="text-xl font-bold text-gray-900 tracking-tight">Edit User Profile</h1>
                  <p class="text-sm text-gray-600 font-medium">Manage user information and settings</p>
        </div>
          </div>
        </div>
          </div>

          <!-- Center - Brand -->
          <div class="flex items-center space-x-2 sm:space-x-3 bg-gray-50/80 rounded-xl px-3 sm:px-4 py-2 border border-gray-200/60">
            <div class="relative">
              <img class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg shadow-sm" src="/logo/GoTapMode.png" alt="GoTapMode" />
            </div>
            <div class="hidden sm:block">
              <span class="text-base font-bold text-gray-800 tracking-wide">GoTapMode</span>
              <div class="text-xs text-gray-500 font-medium">Admin Panel</div>
      </div>
    </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-4">
            <div class="text-right hidden sm:block">
              <div class="bg-white rounded-lg px-3 py-2 border border-gray-200/60 shadow-sm">
                <div class="text-xs font-semibold text-gray-600 uppercase tracking-wider">Currently Editing</div>
                <div class="text-sm font-bold text-gray-900 mt-0.5">{{ user?.name || 'Loading...' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Professional Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-32">
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
      <div class="text-center">
          <div class="relative mb-6">
            <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div class="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-t-indigo-600 mx-auto animate-spin animation-delay-150"></div>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Loading User Data</h3>
          <p class="text-sm text-gray-600">Please wait while we fetch the user information...</p>
        </div>
      </div>
    </div>

    <!-- Professional Error State -->
    <div v-else-if="error" class="flex items-center justify-center py-32">
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-200/30 max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Unable to Load User</h3>
          <p class="text-sm text-gray-600 mb-6">{{ error }}</p>
          <button @click="loadUser" class="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
        Try Again
      </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else-if="user" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid gap-8 lg:gap-10">

                <!-- Basic Information Card -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 py-5 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20"></div>
            <div class="relative flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
                <div>
                  <h2 class="text-xl font-bold text-white">Personal Information</h2>
                  <p class="text-blue-100 text-sm">Manage user's basic details</p>
            </div>
          </div>
              <button @click="saveBasicInfo" :disabled="savingBasic" type="button" class="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-xl hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl ring-2 ring-white/20">
                <div class="flex items-center space-x-2">
                  <svg v-if="savingBasic" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ savingBasic ? 'Saving...' : 'Save Changes' }}</span>
                </div>
              </button>
            </div>
          </div>
                    <div class="p-8">
            <!-- Personal Data Section -->
            <div class="mb-8 pb-8 border-b border-gray-200/60">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Personal Details</h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    v-model="formData.personal_data.first_name"
                  type="text"
                    class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter first name"
                />
              </div>
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">Middle Name</label>
                <input
                    v-model="formData.personal_data.middle_name"
                    type="text"
                    class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter middle name (optional)"
                />
              </div>
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    v-model="formData.personal_data.last_name"
                    type="text"
                    class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter last name"
                  />
            </div>
          </div>
        </div>


          </div>
        </div>

        <!-- Company Profile Card -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-6 py-5 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
            <div class="relative flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
                <div>
                  <h2 class="text-xl font-bold text-white">Company Profile</h2>
                  <p class="text-emerald-100 text-sm">Manage company information & branding</p>
            </div>
          </div>
              <button @click="saveProfileInfo" :disabled="savingProfile" type="button" class="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-xl hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl ring-2 ring-white/20">
                <div class="flex items-center space-x-2">
                  <svg v-if="savingProfile" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ savingProfile ? 'Saving...' : 'Save Changes' }}</span>
                </div>
              </button>
            </div>
          </div>
          <div class="p-8">
            <!-- Profile Picture Upload -->
            <div class="flex items-center justify-center mb-8">
              <label class="w-36 h-36 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center cursor-pointer overflow-hidden hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group">
                <input type="file" accept="image/*" class="hidden" @change="onProfilePicFile" />
                <img v-if="profilePicPreview" :src="profilePicPreview" class="w-36 h-36 object-cover" alt="Company Profile" />
                <div v-else class="text-center p-4">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-sm text-gray-600 font-medium">Click to upload company logo</span>
                  <p class="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                </div>
              </label>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="md:col-span-2 space-y-3">
                <label class="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  v-model="formData.profile.company"
                  type="text"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter company name"
                />
              </div>
              <div class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Company Phone</label>
                <input
                  v-model="formData.profile.companynumber"
                  type="tel"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter company phone number"
                />
              </div>
              <div class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Company Email</label>
                <input
                  v-model="formData.profile.companyemail"
                  type="email"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter company email address"
                />
              </div>
              <div class="md:col-span-2 space-y-3">
                <label class="block text-sm font-medium text-gray-700">Company Address</label>
                <textarea
                  v-model="formData.profile.companyadress"
                  rows="4"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-all duration-200 resize-none placeholder-gray-400"
                  placeholder="Enter complete company address"
                ></textarea>
              </div>
              <div class="md:col-span-2 space-y-3">
                <label class="block text-sm font-medium text-gray-700">Company Bio</label>
                <textarea
                  v-model="formData.profile.bio"
                  rows="4"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-all duration-200 resize-none placeholder-gray-400"
                  placeholder="Tell us about your company..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone Numbers -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-semibold text-white">Phone Numbers</h2>
              </div>
              <button @click="openAddPhone" type="button" class="px-3 py-1 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors">
                + Add Phone
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div v-for="(phone, index) in formData.phones" :key="phone.id" class="flex items-center gap-3 h-14 px-4 bg-gray-50 border border-gray-200 rounded-lg">
                <img :src="phone.type === 'telephone' ? '/icons/phone-call.png' : '/icons/smartphone.png'" class="w-5 h-5" alt="type" />
                <div class="flex-1 text-sm font-medium">{{ phone.number }}</div>
                <div class="flex items-center gap-3">
                  <button @click="onToggleMainPhone(phone)" type="button" aria-label="Set main phone"
                          class="relative w-10 h-6 rounded-full transition-colors duration-200"
                          :class="phone.isMain ? 'bg-blue-600' : 'bg-gray-300'">
                    <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                          :class="phone.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
                  </button>
                  <button @click="removePhone(index)" type="button" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                  </div>
              </div>
            <div v-if="formData.phones.length === 0" class="text-center py-8 text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <p>No phone numbers added</p>
              <button @click="openAddPhone" type="button" class="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                Add First Phone
              </button>
            </div>
          </div>
        </div>

        <!-- Email Addresses -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-semibold text-white">Email Addresses</h2>
              </div>
              <button @click="openAddEmail" type="button" class="px-3 py-1 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors">
                + Add Email
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div v-for="(email, index) in formData.emails" :key="email.id" class="flex items-center gap-3 h-14 px-4 bg-gray-50 border border-gray-200 rounded-lg">
                <img src="/icons/email.png" class="w-5 h-5" alt="email" />
                <div class="flex-1 text-sm font-medium">{{ email.value }}</div>
                <div class="flex items-center gap-3">
                  <button @click="onToggleMainEmail(email)" type="button" aria-label="Set main email"
                          class="relative w-10 h-6 rounded-full transition-colors duration-200"
                          :class="email.isMain ? 'bg-green-600' : 'bg-gray-300'">
                    <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                          :class="email.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
                  </button>
                  <button @click="removeEmail(index)" type="button" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            <div v-if="formData.emails.length === 0" class="text-center py-8 text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p>No email addresses added</p>
              <button @click="openAddEmail" type="button" class="mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Add First Email
              </button>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-semibold text-white">Social Media Links</h2>
              </div>
              <button @click="openAddSocial" type="button" class="px-3 py-1 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors">
                + Add Social
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div v-for="(social, index) in formData.socials" :key="social.id" class="flex items-center gap-3 h-14 px-4 bg-gray-50 border border-gray-200 rounded-lg">
                <img :src="socialIcon(social.platform)" class="w-5 h-5" alt="social" />
                <div class="flex-1 text-sm font-medium">{{ social.value }}</div>
                <div class="flex items-center gap-3">
                  <button @click="onToggleMainSocial(social)" type="button" aria-label="Set main social"
                          class="relative w-10 h-6 rounded-full transition-colors duration-200"
                          :class="social.isMain ? 'bg-purple-600' : 'bg-gray-300'">
                    <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                          :class="social.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
                  </button>
                  <button @click="removeSocial(index)" type="button" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            <div v-if="formData.socials.length === 0" class="text-center py-8 text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
              <p>No social media links added</p>
              <button @click="openAddSocial" type="button" class="mt-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                Add First Social Link
              </button>
            </div>
          </div>
        </div>

        <!-- Other Links -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-semibold text-white">Other Links</h2>
              </div>
              <button @click="openAddOther" type="button" class="px-3 py-1 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors">
                + Add Link
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div v-for="(other, index) in formData.others" :key="other.id" class="flex items-center gap-3 h-14 px-4 bg-gray-50 border border-gray-200 rounded-lg">
                <img src="/icons/web.png" class="w-5 h-5" alt="web" />
                <div class="flex-1 text-sm font-medium">{{ other.value }}</div>
                <div class="flex items-center gap-3">
                  <button @click="onToggleMainOther(other)" type="button" aria-label="Set main link"
                          class="relative w-10 h-6 rounded-full transition-colors duration-200"
                          :class="other.isMain ? 'bg-orange-600' : 'bg-gray-300'">
                    <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                          :class="other.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
                  </button>
                  <button @click="removeOther(index)" type="button" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div v-if="formData.others.length === 0" class="text-center py-8 text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <p>No other links added</p>
              <button @click="openAddOther" type="button" class="mt-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors">
                Add First Link
              </button>
            </div>
          </div>
        </div>




      </div>
    </div>

    <!-- Add Phone Modal -->
    <div v-if="showAddPhone" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full mx-4">
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-2xl">
          <h3 class="text-lg font-semibold text-white">Add Phone Number</h3>
        </div>
        <div class="p-6 space-y-4">
                  <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
              v-model="newPhone"
              type="tel"
              placeholder="e.g. +1 234 567 8900"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              v-model="newPhoneType"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
              <option value="telephone">Telephone</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button @click="showAddPhone = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                Cancel
          </button>
          <button @click="saveAddPhone" :disabled="!newPhone" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Add Phone
          </button>
              </div>
      </div>
    </div>

    <!-- Add Email Modal -->
    <div v-if="showAddEmail" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full mx-4">
        <div class="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 rounded-t-2xl">
          <h3 class="text-lg font-semibold text-white">Add Email Address</h3>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
              v-model="newEmail"
              type="email"
              placeholder="name@company.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              v-model="newEmailType"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button @click="showAddEmail = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Cancel
            </button>
          <button @click="saveAddEmail" :disabled="!newEmail" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Add Email
          </button>
        </div>
      </div>
    </div>

    <!-- Add Social Modal -->
    <div v-if="showAddSocial" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full mx-4">
        <div class="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4 rounded-t-2xl">
          <h3 class="text-lg font-semibold text-white">Add Social Media Link</h3>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">URL / Username</label>
                      <input
              v-model="newSocial"
              type="url"
              placeholder="https://platform.com/username"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <div class="relative">
              <button
                type="button"
                @click="showSocialTypePicker = !showSocialTypePicker"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <img :src="currentSocialPlatform.icon" class="w-5 h-5" />
                  <span>{{ currentSocialPlatform.label }}</span>
                </div>
                <svg class="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.063l3.71-3.832a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
                      </svg>
              </button>
              <div v-if="showSocialTypePicker" class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                <button
                  v-for="platform in socialPlatforms"
                  :key="platform.key"
                  type="button"
                  @click="selectSocialPlatform(platform.key)"
                  class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50"
                >
                  <img :src="platform.icon" class="w-5 h-5" />
                  <span>{{ platform.label }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        <div class="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button @click="showAddSocial = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button @click="saveAddSocial" :disabled="!newSocial" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Add Social
              </button>
            </div>
          </div>
        </div>

    <!-- Add Other Modal -->
    <div v-if="showAddOther" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full mx-4">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 rounded-t-2xl">
          <h3 class="text-lg font-semibold text-white">Add Other Link</h3>
              </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Link</label>
            <input
              v-model="newOther"
              type="url"
              placeholder="https://your-website.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
              </div>
        </div>
        <div class="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button @click="showAddOther = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button @click="saveAddOther" :disabled="!newOther" class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Add Link
            </button>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { adminApi, api } from '../config/api'

const route = useRoute()
const router = useRouter()

const loading = ref(true)

const savingBasic = ref(false)
const savingProfile = ref(false)
const savingContacts = ref(false)

// Profile picture upload variables
const profilePic = ref('')
const profilePicPreview = ref('')

const error = ref('')
const user = ref(null)
const showSuccessNotification = ref(false)
const successMessage = ref('')
const notificationTimer = ref(null)

// Contact management modals
const showAddPhone = ref(false)
const showAddEmail = ref(false)
const showAddSocial = ref(false)
const showAddOther = ref(false)
const newPhone = ref('')
const newPhoneType = ref('personal')
const newEmail = ref('')
const newEmailType = ref('personal')
const newSocial = ref('')
const newSocialType = ref('facebook')
const newOther = ref('')

// Social platforms list
const socialPlatforms = [
  { key: 'facebook', label: 'Facebook', icon: '/icons/facebook.png' },
  { key: 'instagram', label: 'Instagram', icon: '/icons/instagram.png' },
  { key: 'linkedin', label: 'LinkedIn', icon: '/icons/linkedin.png' },
  { key: 'twitter', label: 'X (Twitter)', icon: '/icons/twitter.png' },
  { key: 'reddit', label: 'Reddit', icon: '/icons/reddit.png' },
  { key: 'tiktok', label: 'TikTok', icon: '/icons/tiktok.png' },
  { key: 'youtube', label: 'Youtube', icon: '/icons/youtube.png' },
  { key: 'discord', label: 'Discord', icon: '/icons/discord.png' },
  { key: 'telegram', label: 'Telegram', icon: '/icons/telegram.png' },
  { key: 'skype', label: 'Skype', icon: '/icons/skype.png' },
  { key: 'snapchat', label: 'Snapchat', icon: '/icons/snapchat.png' },
  { key: 'viber', label: 'Viber', icon: '/icons/viber.png' },
  { key: 'whatsapp', label: 'WhatsApp', icon: '/icons/whatsapp.png' },
]
const showSocialTypePicker = ref(false)
const currentSocialPlatform = ref(socialPlatforms[0])

const formData = ref({
  name: '',
  email: '',
  personal_data: {
    first_name: '',
    middle_name: '',
    last_name: ''
  },
  profile: {
    profile_pic: '',
    bio: '',
    company: '',
    companynumber: '',
    companyemail: '',
    companyadress: ''
  },
  contact_info: [],
  phones: [],
  emails: [],
  socials: [],
        others: []
})

// Functions
function addContactInfo() {
  formData.value.contact_info.push({
    type: 'phone',
    value: '',
    is_main: false
  })
}

function removeContactInfo(index) {
  formData.value.contact_info.splice(index, 1)
}

function addCard() {
  formData.value.cards.push({
    unique_code: '',
    activation_code: '',
    is_activated: false
  })
}



// Individual save functions
async function saveBasicInfo() {
  if (!user.value) return
  savingBasic.value = true

  try {
    // Update personal data separately
    const personalDataPayload = {
      user_id: user.value.id,
      first_name: formData.value.personal_data.first_name,
      middle_name: formData.value.personal_data.middle_name || null,
      last_name: formData.value.personal_data.last_name
    }

    if (formData.value.personal_data.id) {
      personalDataPayload.id = formData.value.personal_data.id
    }

    await api.post('/card-users/personal-data', personalDataPayload)

    showSuccessNotification.value = true
    successMessage.value = 'Personal information updated successfully'

    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)

  } catch (e) {
    console.error('Failed to update basic info:', e)
    alert('Failed to update basic info: ' + e.message)
  }

  savingBasic.value = false
}

async function saveProfileInfo() {
  if (!user.value) return
  savingProfile.value = true

  try {
    const profilePayload = {
      user_id: user.value.id,
      bio: formData.value.profile.bio || null,
      company: formData.value.profile.company || null,
      companynumber: formData.value.profile.companynumber || null,
      companyemail: formData.value.profile.companyemail || null,
      companyadress: formData.value.profile.companyadress || null,
    }

    // Include profile picture if a new one was uploaded
    if (profilePic.value && profilePic.value.startsWith('data:')) {
      profilePayload.profile_pic = profilePic.value
    }

    await api.post('/card-users/profile', profilePayload)

    // Clear the uploaded image after successful save
    profilePic.value = ''

    showSuccessNotification.value = true
    successMessage.value = 'Profile information updated successfully'

    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)

  } catch (e) {
    console.error('Failed to update profile:', e)
    alert('Failed to update profile: ' + (e.message || e))
  }

  savingProfile.value = false
}

async function saveContactsInfo() {
  if (!user.value) return
  savingContacts.value = true

  try {
    await adminApi.updateUser(user.value.id, {
      contact_info: formData.value.contact_info
    })

    showSuccessNotification.value = true
    successMessage.value = 'Contact information updated successfully'

    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)

  } catch (e) {
    console.error('Failed to update contacts:', e)
    alert('Failed to update contacts: ' + e.message)
  }

  savingContacts.value = false
}



// Contact management functions
function openAddPhone() { showAddPhone.value = true; newPhone.value = ''; newPhoneType.value = 'personal' }
function openAddEmail() { showAddEmail.value = true; newEmail.value = ''; newEmailType.value = 'personal' }
function openAddSocial() { showAddSocial.value = true; newSocial.value = ''; newSocialType.value = 'facebook'; currentSocialPlatform.value = socialPlatforms[0] }
function openAddOther() { showAddOther.value = true; newOther.value = '' }

function selectSocialPlatform(key) {
  newSocialType.value = key
  currentSocialPlatform.value = socialPlatforms.find(p => p.key === key) || socialPlatforms[0]
  showSocialTypePicker.value = false
}

async function saveAddPhone() {
  if (!newPhone.value || !user.value) return
  try {
    const row = await adminApi.addUserPhone(user.value.id, {
      phonenumber: newPhone.value,
      type: newPhoneType.value
    })
    formData.value.phones.unshift({
      id: row.id,
      number: row.phonenumber || newPhone.value,
      type: row.type || newPhoneType.value,
      isMain: !!row.is_main
    })
    showAddPhone.value = false
    newPhone.value = ''
    showSuccessNotification.value = true
    successMessage.value = 'Phone added successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
  } catch (e) {
    console.error('Failed to add phone:', e)
    alert('Failed to add phone: ' + (e.message || e))
  }
}

async function saveAddEmail() {
  if (!newEmail.value || !user.value) return
  try {
    const row = await adminApi.addUserEmail(user.value.id, {
      email: newEmail.value,
      type: newEmailType.value
    })
    formData.value.emails.unshift({
      id: row.id,
      value: row.email || newEmail.value,
      type: row.type || newEmailType.value,
      isMain: !!row.is_main
    })
    showAddEmail.value = false
    newEmail.value = ''
    showSuccessNotification.value = true
    successMessage.value = 'Email added successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
  } catch (e) {
    console.error('Failed to add email:', e)
    alert('Failed to add email: ' + (e.message || e))
  }
}

async function saveAddSocial() {
  if (!newSocial.value || !user.value) return
  try {
    const row = await adminApi.addUserSocial(user.value.id, {
      social: newSocial.value,
      type: newSocialType.value
    })
    formData.value.socials.unshift({
      id: row.id,
      platform: row.type || newSocialType.value,
      value: row.social || newSocial.value,
      isMain: !!row.is_main
    })
    showAddSocial.value = false
    newSocial.value = ''
    showSuccessNotification.value = true
    successMessage.value = 'Social link added successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
  } catch (e) {
    console.error('Failed to add social:', e)
    alert('Failed to add social: ' + (e.message || e))
  }
}

async function saveAddOther() {
  if (!newOther.value || !user.value) return
  try {
    const row = await adminApi.addUserOther(user.value.id, {
      others: newOther.value,
      type: 'link'
    })
    formData.value.others.unshift({
      id: row.id,
      value: row.others || newOther.value,
      type: row.type || 'link',
      isMain: !!row.is_main
    })
    showAddOther.value = false
    newOther.value = ''
    showSuccessNotification.value = true
    successMessage.value = 'Link added successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 3000)
  } catch (e) {
    console.error('Failed to add other:', e)
    alert('Failed to add other: ' + (e.message || e))
  }
}

// Toggle main functions
async function onToggleMainPhone(p) {
  if (!p?.id || !user.value) return
  try {
    const response = await adminApi.setMainPhone(user.value.id, p.id)
    // Update local state with the response
    if (response.phones) {
      formData.value.phones = response.phones.map(phone => ({
        id: phone.id,
        number: phone.phonenumber || phone.number || '',
        type: phone.type || 'personal',
        isMain: !!phone.is_main
      }))
    }
    showSuccessNotification.value = true
    successMessage.value = 'Primary phone updated'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to toggle main phone:', e)
    alert('Failed to update primary phone: ' + (e.message || e))
  }
}

async function onToggleMainEmail(e) {
  if (!e?.id || !user.value) return
  try {
    const response = await adminApi.setMainEmail(user.value.id, e.id)
    if (response.emails) {
      formData.value.emails = response.emails.map(email => ({
        id: email.id,
        value: email.email || email.value || '',
        type: email.type || 'personal',
        isMain: !!email.is_main
      }))
    }
    showSuccessNotification.value = true
    successMessage.value = 'Primary email updated'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to toggle main email:', e)
    alert('Failed to update primary email: ' + (e.message || e))
  }
}

async function onToggleMainSocial(s) {
  if (!s?.id || !user.value) return
  try {
    const response = await adminApi.setMainSocial(user.value.id, s.id)
    if (response.socials) {
      formData.value.socials = response.socials.map(social => ({
        id: social.id,
        platform: social.type || social.platform || 'link',
        value: social.social || social.value || '',
        isMain: !!social.is_main
      }))
    }
    showSuccessNotification.value = true
    successMessage.value = 'Primary social link updated'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to toggle main social:', e)
    alert('Failed to update primary social link: ' + (e.message || e))
  }
}

async function onToggleMainOther(o) {
  if (!o?.id || !user.value) return
  try {
    const response = await adminApi.setMainOther(user.value.id, o.id)
    if (response.others) {
      formData.value.others = response.others.map(other => ({
        id: other.id,
        value: other.others || other.value || '',
        type: other.type || 'link',
        isMain: !!other.is_main
      }))
    }
    showSuccessNotification.value = true
    successMessage.value = 'Primary link updated'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to toggle main other:', e)
    alert('Failed to update primary link: ' + (e.message || e))
  }
}

// Remove functions
async function removePhone(index) {
  const phone = formData.value.phones[index]
  if (!phone?.id || !user.value) return
  if (!confirm('Are you sure you want to remove this phone number?')) return

  try {
    await adminApi.removeUserPhone(user.value.id, phone.id)
    formData.value.phones.splice(index, 1)
    showSuccessNotification.value = true
    successMessage.value = 'Phone removed successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to remove phone:', e)
    alert('Failed to remove phone: ' + (e.message || e))
  }
}

async function removeEmail(index) {
  const email = formData.value.emails[index]
  if (!email?.id || !user.value) return
  if (!confirm('Are you sure you want to remove this email address?')) return

  try {
    await adminApi.removeUserEmail(user.value.id, email.id)
    formData.value.emails.splice(index, 1)
    showSuccessNotification.value = true
    successMessage.value = 'Email removed successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to remove email:', e)
    alert('Failed to remove email: ' + (e.message || e))
  }
}

async function removeSocial(index) {
  const social = formData.value.socials[index]
  if (!social?.id || !user.value) return
  if (!confirm('Are you sure you want to remove this social link?')) return

  try {
    await adminApi.removeUserSocial(user.value.id, social.id)
    formData.value.socials.splice(index, 1)
    showSuccessNotification.value = true
    successMessage.value = 'Social link removed successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to remove social:', e)
    alert('Failed to remove social: ' + (e.message || e))
  }
}

async function removeOther(index) {
  const other = formData.value.others[index]
  if (!other?.id || !user.value) return
  if (!confirm('Are you sure you want to remove this link?')) return

  try {
    await adminApi.removeUserOther(user.value.id, other.id)
    formData.value.others.splice(index, 1)
    showSuccessNotification.value = true
    successMessage.value = 'Link removed successfully'
    if (notificationTimer.value) clearTimeout(notificationTimer.value)
    notificationTimer.value = setTimeout(() => {
      showSuccessNotification.value = false
      successMessage.value = ''
    }, 2000)
  } catch (e) {
    console.error('Failed to remove other:', e)
    alert('Failed to remove other: ' + (e.message || e))
  }
}

function socialIcon(platform) {
  const map = {
    facebook: '/icons/facebook.png',
    twitter: '/icons/twitter.png',
    instagram: '/icons/instagram.png',
    linkedin: '/icons/linkedin.png',
    reddit: '/icons/reddit.png',
    tiktok: '/icons/tiktok.png',
    youtube: '/icons/youtube.png',
    discord: '/icons/discord.png',
    telegram: '/icons/telegram.png',
    skype: '/icons/skype.png',
    snapchat: '/icons/snapchat.png',
    viber: '/icons/viber.png',
    whatsapp: '/icons/whatsapp.png',
  }
  return map[platform] || '/icons/web.png'
}

// Profile picture upload function
function onProfilePicFile(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    profilePic.value = reader.result
    profilePicPreview.value = reader.result
  }
  reader.readAsDataURL(file)
}

async function loadUser() {
  loading.value = true
  error.value = ''

  try {
    const userId = route.params.id

    // Load main user data
    const userData = await adminApi.getUser(userId)
    user.value = userData

    // Load personal data - try to get it from userData or load separately
    let personalData = userData.personal_data || {}
    if (!personalData.first_name && !personalData.last_name) {
      try {
        const pd = await api.get(`/card-users/personal-data/${userId}`)
        personalData = pd || {}
        console.log('Loaded personal data separately:', personalData)
      } catch (personalError) {
        console.warn('Could not load personal data:', personalError)
      }
    }

    // Build full name from personal data
    const firstName = personalData.first_name || userData.first_name || ''
    const middleName = personalData.middle_name || userData.middle_name || ''
    const lastName = personalData.last_name || userData.last_name || ''
    const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ') || userData.name || 'Unknown User'

    console.log('Personal data extracted:', { firstName, middleName, lastName, fullName })

    // Load contact data separately to ensure we get all contacts
    let contactData = { phones: [], emails: [], socials: [], others: [] }
    try {
      contactData = await api.get(`/contacts/${userId}`)
    } catch (contactError) {
      console.warn('Could not load contact data:', contactError)
      // Continue with empty contact data if contacts endpoint fails
    }

    // Populate form with user data
    formData.value = {
      name: fullName,
      email: userData.email || '',
      personal_data: {
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        id: personalData.id // Include the ID if available
      },
      profile: {
        profile_pic: userData.profile?.profile_pic || '',
        bio: userData.profile?.bio || '',
        company: userData.profile?.company || '',
        companynumber: userData.profile?.companynumber || '',
        companyemail: userData.profile?.companyemail || '',
        companyadress: userData.profile?.companyadress || ''
      },
      contact_info: userData.contact_info || [],
      phones: (contactData.phones || userData.phones || []).map(p => ({
        id: p.id,
        number: p.phonenumber || p.number || '',
        type: p.type || 'personal',
        isMain: !!p.is_main
      })),
      emails: (contactData.emails || userData.emails || []).map(e => ({
        id: e.id,
        value: e.email || e.value || '',
        type: e.type || 'personal',
        isMain: !!e.is_main
      })),
      socials: (contactData.socials || userData.socials || []).map(s => ({
        id: s.id,
        platform: s.type || s.platform || 'link',
        value: s.social || s.value || '',
        isMain: !!s.is_main
      })),
      others: (contactData.others || userData.others || []).map(o => ({
        id: o.id,
        value: o.others || o.value || '',
        type: o.type || 'link',
        isMain: !!o.is_main
      }))
    }

    // Set profile picture preview from loaded data
    profilePicPreview.value = formData.value.profile.profile_pic || ''

    console.log('Loaded user data:', formData.value)
    console.log('Contact data loaded:', contactData)
    console.log('Profile picture preview set to:', profilePicPreview.value)
  } catch (e) {
    console.error('Failed to load user:', e)
    error.value = e?.message || 'Failed to load user'
  }

  loading.value = false
}



onMounted(() => {
  loadUser()
})

onUnmounted(() => {
  if (notificationTimer.value) {
    clearTimeout(notificationTimer.value)
  }
})
</script>

<style scoped>
/* Custom scrollbar for form sections */
.bg-white::-webkit-scrollbar {
  width: 6px;
}

.bg-white::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.bg-white::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #cbd5e1, #94a3b8);
  border-radius: 3px;
}

.bg-white::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #94a3b8, #64748b);
}

/* Form focus states */
input:focus, textarea:focus, select:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

/* Button hover animations */
button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* Loading spinner */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive form sections */
@media (max-width: 768px) {
  .grid-cols-1.md\\:grid-cols-2 > div {
    margin-bottom: 1rem;
  }

  .grid-cols-1.md\\:grid-cols-3 > div {
    margin-bottom: 1rem;
  }
}
</style>

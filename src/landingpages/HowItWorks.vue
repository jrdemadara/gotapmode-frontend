<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Navigation Component -->
    <Navigation />

    <!-- Hero Section with Dynamic Background -->
    <section class="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[70vh] flex items-center">
      <!-- Dynamic Background -->
      <div class="absolute inset-0">
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out transform"
          :class="{ 
            'opacity-100 scale-100': currentImage === 'cover1', 
            'opacity-0 scale-105': currentImage !== 'cover1' 
          }"
          style="background-image: url('/logo/cover1.jpg');"
        ></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out transform"
          :class="{ 
            'opacity-100 scale-100': currentImage === 'cover2', 
            'opacity-0 scale-105': currentImage !== 'cover2' 
          }"
          style="background-image: url('/logo/cover2.jpg');"
        ></div>
        
        <!-- Enhanced overlays -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-green-900/30"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Main Content -->
          <div class="text-left">
            <div class="inline-flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-white/95 mb-8">
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Simple Process</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-[0.9]">
              <span class="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">How It Works</span>
              <span class="block text-cyan-300 mt-3 font-light">Step by Step</span>
            </h1>
            
            <p class="text-lg sm:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
              Getting started with your GoTapMode digital business card is simple. Follow our step-by-step process to transform your networking.
            </p>
            
            <!-- Quick overview badges -->
            <div class="flex flex-wrap gap-3 mb-8">
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  6 Simple Steps
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  1 Week Setup
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Instant Results
                </span>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Process Preview -->
          <div class="hidden lg:block">
            <div class="relative">
              <!-- Process flow preview -->
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span class="text-white font-medium">Get Your Card</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl ml-8">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span class="text-white font-medium">Production & Delivery</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span class="text-white font-medium">Card Activation</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl ml-8">
                  <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <span class="text-white font-medium">Profile Setup</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                  <span class="text-white font-medium">Add Contact Details</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl ml-8">
                  <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <span class="text-white font-medium">Start Networking!</span>
                </div>
              </div>
              
              <!-- Connecting lines -->
              <div class="absolute top-12 left-4 w-px h-full bg-gradient-to-b from-blue-400 via-green-400 via-purple-400 via-orange-400 via-indigo-400 to-emerald-400 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Process Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Journey to Digital Networking</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">From placing your order to sharing your first contact - here's how it all works</p>
        </div>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-emerald-200"></div>
          
          <!-- Step 1: Order -->
          <div class="relative mb-16 lg:mb-20">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-blue-600 mb-1">STEP 1</div>
                      <h3 class="text-2xl font-bold text-gray-900">Get Your Card</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">Obtain your GoTapMode digital business card through our distribution channels or authorized partners.</p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Contact authorized distributors</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Receive your personalized card</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Ready for activation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pl-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-gray-900 rounded-2xl p-8 text-white">
                    <h4 class="text-xl font-bold mb-4">What We Need:</h4>
                    <div class="space-y-3 text-sm">
                      <div class="flex justify-between">
                        <span class="text-gray-300">Full Name:</span>
                        <span>For card printing</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Position:</span>
                        <span>Your job title</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Company:</span>
                        <span>Organization name</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-300">Address:</span>
                        <span>For shipping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>

          <!-- Step 2: Production & Shipping -->
          <div class="relative mb-16 lg:mb-20">
            <div class="flex flex-col lg:flex-row-reverse items-center">
              <div class="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-green-600 mb-1">STEP 2</div>
                      <h3 class="text-2xl font-bold text-gray-900">Production & Delivery</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">Our partners produce premium cards with high-quality materials and handle secure delivery with full tracking information.</p>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-green-50 rounded-lg">
                      <div class="text-2xl font-bold text-green-600 mb-1">Premium</div>
                      <div class="text-sm text-gray-600">Quality</div>
                    </div>
                    <div class="text-center p-4 bg-blue-50 rounded-lg">
                      <div class="text-2xl font-bold text-blue-600 mb-1">Secure</div>
                      <div class="text-sm text-gray-600">Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pr-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-white rounded-2xl p-8 border border-gray-200">
                    <h4 class="text-xl font-bold mb-4 text-gray-900">Premium Quality:</h4>
                    <div class="space-y-4">
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-sm text-gray-600">Durable PVC material</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-sm text-gray-600">NFC chip embedded</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-sm text-gray-600">QR code printed</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-sm text-gray-600">Professional finish</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>

          <!-- Step 3: Activation -->
          <div class="relative mb-16 lg:mb-20">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-purple-600 mb-1">STEP 3</div>
                      <h3 class="text-2xl font-bold text-gray-900">Card Activation</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">When your card arrives, simply tap it with your NFC-enabled phone or scan the QR code to begin the setup process.</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-purple-50 rounded-lg">
                      <svg class="w-8 h-8 text-purple-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div class="text-sm font-semibold text-purple-600">NFC Tap</div>
                    </div>
                    <div class="text-center p-4 bg-indigo-50 rounded-lg">
                      <svg class="w-8 h-8 text-indigo-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <div class="text-sm font-semibold text-indigo-600">QR Scan</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pl-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h4 class="text-xl font-bold mb-4">Instant Setup:</h4>
                    <div class="space-y-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span class="text-sm">Tap card or scan QR code</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span class="text-sm">Redirected to signup page</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span class="text-sm">Card automatically activated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>

          <!-- Step 4: Profile Setup -->
          <div class="relative mb-16 lg:mb-20">
            <div class="flex flex-col lg:flex-row-reverse items-center">
              <div class="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-orange-600 mb-1">STEP 4</div>
                      <h3 class="text-2xl font-bold text-gray-900">Profile Setup</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">Create your account and complete your profile setup. Add your photo, personal details, and customize your digital presence.</p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Create account & login</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Upload profile picture</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span class="text-sm text-gray-600">Complete profile details</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pr-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-white rounded-2xl p-8 border border-gray-200">
                    <h4 class="text-xl font-bold mb-4 text-gray-900">Profile Information:</h4>
                    <div class="space-y-4">
                      <div class="p-3 bg-gray-50 rounded-lg">
                        <div class="text-sm font-semibold text-gray-900 mb-1">Personal Details</div>
                        <div class="text-xs text-gray-600">Bio, description, personal info</div>
                      </div>
                      <div class="p-3 bg-gray-50 rounded-lg">
                        <div class="text-sm font-semibold text-gray-900 mb-1">Professional Info</div>
                        <div class="text-xs text-gray-600">Company details, position, industry</div>
                      </div>
                      <div class="p-3 bg-gray-50 rounded-lg">
                        <div class="text-sm font-semibold text-gray-900 mb-1">Visual Elements</div>
                        <div class="text-xs text-gray-600">Profile photo, company logo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>

          <!-- Step 5: Add Contacts -->
          <div class="relative mb-16 lg:mb-20">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-indigo-600 mb-1">STEP 5</div>
                      <h3 class="text-2xl font-bold text-gray-900">Add Contact Details</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">Complete your dashboard by adding all your contact information. Phone numbers, emails, social media, and website links.</p>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span class="text-sm text-gray-600">Phone</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span class="text-sm text-gray-600">Email</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      <span class="text-sm text-gray-600">Website</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v2m0 0v2a1 1 0 01-1 1H8a1 1 0 01-1-1V4m0 0V2a1 1 0 011-1h8a1 1 0 011 1v2" />
                      </svg>
                      <span class="text-sm text-gray-600">Social</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pl-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h4 class="text-xl font-bold mb-4">Contact Types:</h4>
                    <div class="space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-300">Phone Numbers</span>
                        <span class="text-xs bg-indigo-500 px-2 py-1 rounded">Multiple</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-300">Email Addresses</span>
                        <span class="text-xs bg-indigo-500 px-2 py-1 rounded">Multiple</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-300">Social Media</span>
                        <span class="text-xs bg-indigo-500 px-2 py-1 rounded">All Platforms</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-300">Custom Links</span>
                        <span class="text-xs bg-indigo-500 px-2 py-1 rounded">Unlimited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>

          <!-- Step 6: Start Networking -->
          <div class="relative">
            <div class="flex flex-col lg:flex-row-reverse items-center">
              <div class="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-emerald-600 mb-1">STEP 6</div>
                      <h3 class="text-2xl font-bold text-gray-900">Start Networking!</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-6">You're ready! Share your contact information instantly. Others can tap your card or scan the QR code to view your profile and save your details.</p>
                  <div class="bg-emerald-50 rounded-lg p-4">
                    <div class="flex items-center gap-3 mb-3">
                      <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm font-semibold text-emerald-800">Ready to Share!</span>
                    </div>
                    <p class="text-xs text-emerald-700">Your card is now active and ready for professional networking. Start making connections!</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 lg:pr-12">
                <div class="relative">
                  <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-xl"></div>
                  <div class="relative bg-white rounded-2xl p-8 border border-gray-200">
                    <h4 class="text-xl font-bold mb-4 text-gray-900">How Others Connect:</h4>
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div class="text-sm font-semibold text-gray-900">Tap or Scan</div>
                          <div class="text-xs text-gray-600">They tap your card or scan QR code</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div class="text-sm font-semibold text-gray-900">View Profile</div>
                          <div class="text-xs text-gray-600">Your public profile opens instantly</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 0V6a3 3 0 00-6 0v1m6 0a3 3 0 11-6 0m6 0H9" />
                          </svg>
                        </div>
                        <div>
                          <div class="text-sm font-semibold text-gray-900">Save Contacts</div>
                          <div class="text-xs text-gray-600">One tap saves all your details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why This Process Works</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Our streamlined approach ensures you get the most out of your digital business card</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Fast Setup</h3>
            <p class="text-gray-600">From getting your card to active networking in just days. Simple, straightforward process.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">No Hassle</h3>
            <p class="text-gray-600">Everything is handled for you. Just get your card, activate it, and start networking.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
            <p class="text-gray-600">Start making professional connections immediately. No learning curve required.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p class="text-xl text-gray-300 mb-8">Begin your journey to effortless networking today</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <router-link :to="{ name: 'contact' }" class="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            Contact Us
          </router-link>
          <router-link :to="{ name: 'login' }" class="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            Sign In
          </router-link>
        </div>
        <p class="text-sm text-gray-400">Digital business cards for modern professionals</p>
      </div>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSEO } from '../utils/seo.js'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

// SEO Meta Tags
useSEO({
  title: 'How It Works - GoTapMode Digital Business Cards',
  description: 'Learn how to get started with GoTapMode digital business cards. Simple 6-step process from getting your card to networking success.',
  keywords: 'how it works, digital business card setup, NFC activation, profile setup, GoTapMode process',
  ogTitle: 'How It Works - GoTapMode Digital Business Cards',
  ogDescription: 'Learn how to get started with GoTapMode digital business cards. Simple 6-step process from getting your card to networking success.',
  ogImage: '/logo/cover2.jpg'
})

// Background image rotation (same as Landing page)
const currentImage = ref('cover1')
let imageRotationInterval = null

// Function to rotate background images
const rotateBackgroundImage = () => {
  currentImage.value = currentImage.value === 'cover1' ? 'cover2' : 'cover1'
}

// Start image rotation when component mounts
onMounted(() => {
  // Rotate every 60 seconds (1 minute)
  imageRotationInterval = setInterval(rotateBackgroundImage, 60000)
})

// Clean up interval when component unmounts
onUnmounted(() => {
  if (imageRotationInterval) {
    clearInterval(imageRotationInterval)
  }
})
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Glassmorphism effects */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Enhanced shadows */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Gradient text effects */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-transparent {
  color: transparent;
}

/* Professional transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Enhanced focus states */
a:focus, button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>

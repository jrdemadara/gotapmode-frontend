<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Navigation Component -->
    <Navigation />

            <!-- Hero Section with Enhanced Design -->
            <section class="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[90vh] sm:min-h-[85vh] flex items-center">
              <!-- Enhanced Background with Cover Image -->
              <div class="absolute inset-0">
                <!-- Dynamic Background Images with Enhanced Crossfade -->
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
                
                <!-- Transition overlay effect -->
                <div 
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-500"
                  :class="{ 'opacity-100': isTransitioning, 'opacity-0': !isTransitioning }"
                ></div>
                
                <!-- Layered overlays for readability -->
                <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-green-900/20"></div>
                
                <!-- Enhanced floating elements -->
                <div class="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div class="hidden sm:block absolute bottom-20 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 1s;"></div>
                <div class="hidden lg:block absolute top-1/2 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
                
                <!-- Geometric shapes -->
                <div class="hidden lg:block absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.5s;"></div>
                <div class="hidden lg:block absolute bottom-32 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
                
                <!-- Subtle grid pattern -->
                <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
              </div>
      
      <!-- Left side content - positioned for better composition with cover image -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <!-- Left Column - Main Content -->
          <div class="text-left lg:text-left">
            <!-- Enhanced badge with animation -->
            <div class="inline-flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-white/95 mb-8 animate-fade-in hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg">
              <span class="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              <span>Now available in the Philippines</span>
            </div>
            
            <!-- Enhanced headline with better typography -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-[0.9] animate-slide-up">
              <span class="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-shimmer">Digital Business Cards</span>
              <span class="block text-cyan-300 mt-3 font-light animate-slide-up" style="animation-delay: 0.2s;">Made Simple</span>
            </h1>
            
            <!-- Enhanced description -->
            <p class="text-lg sm:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed animate-slide-up" style="animation-delay: 0.4s;">
              Transform networking with <span class="text-cyan-400 font-bold">NFC-enabled</span> digital business cards. 
              Share your contact information instantly with just a <span class="text-green-400 font-bold">tap or scan</span>.
            </p>
            
            <!-- Enhanced CTA buttons with new layout -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style="animation-delay: 0.6s;">
              <router-link :to="{ name: 'how-it-works' }" class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 text-center overflow-hidden transform-gpu">
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                <span class="relative flex items-center justify-center gap-3 text-lg">
                  <svg class="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  How It Works
                  <svg class="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </router-link>
              <router-link :to="{ name: 'login' }" class="group px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-white/70 transition-all duration-300 hover:scale-105 text-center backdrop-blur-md shadow-lg hover:shadow-white/20">
                <span class="flex items-center justify-center gap-3 text-lg">
                  <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </span>
              </router-link>
            </div>

            <!-- Tech badges to complement the tech background -->
            <div class="flex flex-wrap gap-3 animate-slide-up" style="animation-delay: 0.8s;">
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  NFC Technology
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  QR Code Support
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Real-time Updates
                </span>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Feature highlights that work with the tech background -->
          <div class="hidden lg:block">
            <div class="relative">
              <!-- Floating feature cards -->
              <div class="space-y-6">
                <div class="ml-auto w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl animate-float" style="animation-delay: 1s;">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Instant Connection</h3>
                  </div>
                  <p class="text-gray-300 text-sm">Share contacts with just a tap. No apps required for recipients.</p>
                </div>
                
                <div class="w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl animate-float" style="animation-delay: 1.5s;">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Always Updated</h3>
                  </div>
                  <p class="text-gray-300 text-sm">Update your information anytime. Changes reflect immediately.</p>
                </div>
                
                <div class="ml-auto w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl animate-float" style="animation-delay: 2s;">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Secure & Private</h3>
                  </div>
                  <p class="text-gray-300 text-sm">Enterprise-grade security protects your data with privacy controls.</p>
                </div>
              </div>
              
              <!-- Decorative tech elements -->
              <div class="absolute -top-10 -right-10 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div class="absolute -bottom-10 -left-10 w-16 h-16 border border-green-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div class="group p-4 sm:p-0">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">1,000+</div>
            <div class="text-xs sm:text-sm text-gray-600 font-medium">Cards Delivered</div>
          </div>
          <div class="group p-4 sm:p-0">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">500+</div>
            <div class="text-xs sm:text-sm text-gray-600 font-medium">Active Users</div>
          </div>
          <div class="group p-4 sm:p-0">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">10,000+</div>
            <div class="text-xs sm:text-sm text-gray-600 font-medium">Connections Made</div>
          </div>
          <div class="group p-4 sm:p-0">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">99%</div>
            <div class="text-xs sm:text-sm text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 sm:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose GoTapMode?</h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Modern networking tools for the digital age</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-blue-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">Instant Connection</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Share your contact information with just a tap or scan. No apps required for recipients.</p>
            </div>
          </div>
          
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-green-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">Always Updated</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Update your information anytime through your dashboard. Changes reflect immediately.</p>
            </div>
          </div>
          
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-emerald-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors duration-300">Eco-Friendly</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Reduce paper waste with digital cards that never run out or get damaged.</p>
            </div>
          </div>
          
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-orange-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">Analytics Dashboard</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Track your networking success with detailed insights on profile views and contact interactions.</p>
            </div>
          </div>
          
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-purple-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">Secure & Private</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Your data is protected with enterprise-grade security and privacy controls.</p>
            </div>
          </div>
          
          <div class="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 touch-manipulation hover:border-indigo-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors duration-300">Global Compatibility</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Works worldwide with any NFC-enabled device or QR code scanner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works Section -->
    <section id="how-it-works" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 sm:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Get started in minutes with our simple 6-step process</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">Get Your Card</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">Contact our authorized distributors to obtain your personalized GoTapMode digital business card.</p>
            </div>
          </div>
          
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">Receive & Scan</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">When your card arrives, tap via NFC or scan the QR code to begin the setup process.</p>
            </div>
          </div>
          
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">Create Account</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">Sign up and continue to Profile Setup and Profile Details to personalize your card.</p>
            </div>
          </div>
          
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">Complete Dashboard</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">Add your contact details: phone numbers, emails, social media, and website links.</p>
            </div>
          </div>
          
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">Share Instantly</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">Others can scan your QR or tap your card to view your public profile and contact information.</p>
            </div>
          </div>
          
          <div class="relative group h-full flex flex-col">
            <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 mt-2 min-h-[3.5rem] flex items-center">One Tap Save</h3>
              <p class="text-gray-600 leading-relaxed flex-1 flex items-center">Recipients simply tap "Save" to store your contact details directly to their phone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 sm:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of professionals who've transformed their networking</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"GoTapMode completely changed how I network at events. No more fumbling with paper cards or typing contact details. Just tap and done!"</p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">MR</div>
              <div class="ml-3">
                <div class="font-semibold text-gray-900">Maria Rodriguez</div>
                <div class="text-sm text-gray-600">Marketing Director</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"As a real estate agent, I share my contact info dozens of times daily. This card saves me so much time and impresses my clients!"</p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">JS</div>
              <div class="ml-3">
                <div class="font-semibold text-gray-900">Juan Santos</div>
                <div class="text-sm text-gray-600">Real Estate Agent</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"GoTapMode completely changed how I network at events. No more fumbling with paper cards or typing contact details. Just tap and done!"</p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">MR</div>
              <div class="ml-3">
                <div class="font-semibold text-gray-900">Maria Rodriguez</div>
                <div class="text-sm text-gray-600">Marketing Director</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"The environmental impact was important to me. No more wasted paper cards, and I can update my info anytime. Perfect solution!"</p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">AC</div>
              <div class="ml-3">
                <div class="font-semibold text-gray-900">Ana Cruz</div>
                <div class="text-sm text-gray-600">Sustainability Consultant</div>
              </div>
            </div>
          </div>
        </div>
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
  title: 'GoTapMode - Digital Business Cards Made Simple',
  description: 'Transform networking with NFC-enabled digital business cards. Share contact information instantly with just a tap or scan. No apps required for recipients.',
  keywords: 'digital business cards, NFC cards, contact sharing, networking, Philippines, GoTapMode',
  ogTitle: 'GoTapMode - Digital Business Cards Made Simple',
  ogDescription: 'Transform networking with NFC-enabled digital business cards. Share contact information instantly with just a tap or scan.',
  ogImage: '/logo/cover1.jpg'
})

// Background image rotation with enhanced transitions
const currentImage = ref('cover1')
const isTransitioning = ref(false)
let imageRotationInterval = null

// Function to rotate background images with transition effect
const rotateBackgroundImage = () => {
  // Start transition effect
  isTransitioning.value = true
  
  // Change image after brief transition delay
  setTimeout(() => {
    currentImage.value = currentImage.value === 'cover1' ? 'cover2' : 'cover1'
    
    // End transition effect
    setTimeout(() => {
      isTransitioning.value = false
    }, 1000) // Match the image transition duration
  }, 250) // Brief delay for transition overlay
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
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom breakpoint for extra small devices */
@media (min-width: 475px) {
  .xs\:inline { display: inline; }
  .xs\:hidden { display: none; }
  .xs\:flex-row { flex-direction: row; }
  .xs\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .xs\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .xs\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .xs\:gap-6 { gap: 1.5rem; }
  .xs\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .xs\:max-w-none { max-width: none; }
  .xs\:block { display: block; }
}

/* Touch optimization */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Subtle backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Fallback for older browsers */
@supports not (backdrop-filter: blur(8px)) {
  .bg-white\/95 {
    background-color: rgba(255, 255, 255, 0.98);
  }
  
  .bg-white\/10 {
    background-color: rgba(255, 255, 255, 0.15);
  }
}

/* Enhanced focus states for accessibility */
a:focus, button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Clean hover effects - reduced on mobile */
@media (hover: hover) {
  .group:hover {
    transform: translateY(-2px);
  }
}

/* Professional shadows */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Mobile responsive improvements */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .text-6xl {
    font-size: 3rem;
    line-height: 1.1;
  }
  
  .text-7xl {
    font-size: 3.75rem;
    line-height: 1.1;
  }
  
  /* Improve mobile text readability */
  .leading-tight {
    line-height: 1.1;
  }
  
  /* Better mobile spacing */
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Ultra small mobile devices */
@media (max-width: 374px) {
  .text-3xl {
    font-size: 1.75rem;
    line-height: 2rem;
  }
  
  .px-4 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Better mobile touch targets */
@media (max-width: 768px) {
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Improve mobile readability */
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

/* Enhanced Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
}

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

/* Enhanced card hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Glassmorphism effects */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Enhanced shadows */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient text effects */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-transparent {
  color: transparent;
}
</style>
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
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get in Touch</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-[0.9]">
              <span class="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">Contact Us</span>
              <span class="block text-cyan-300 mt-3 font-light">We're Here to Help</span>
            </h1>
            
            <p class="text-lg sm:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
              Have questions about GoTapMode? Need support with your digital business card? We're here to help you succeed.
            </p>
            
            <!-- Contact method badges -->
            <div class="flex flex-wrap gap-3 mb-8">
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Email Support
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  Phone Support
                </span>
              </div>
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-sm font-medium">
                <span class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Quick Response
                </span>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Quick Contact Info -->
          <div class="hidden lg:block">
            <div class="relative">
              <!-- Contact cards -->
              <div class="space-y-6">
                <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Email Us</h3>
                  </div>
                  <p class="text-cyan-300 font-medium">gotapmode@gmail.com</p>
                </div>
                
                <div class="ml-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Call Us</h3>
                  </div>
                  <p class="text-green-300 font-medium">+63 956 091 97710</p>
                </div>
                
                <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 class="text-white font-bold">Visit Us</h3>
                  </div>
                  <p class="text-purple-300 font-medium">Isulan, Sultan Kudarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p class="text-lg text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="group">
                  <label for="firstName" class="block text-sm font-semibold text-gray-900 mb-2 group-focus-within:text-blue-600 transition-colors">First Name</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      id="firstName"
                      v-model="form.firstName"
                      required
                      autocomplete="given-name"
                      :class="[
                        'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 hover:shadow-md',
                        errors.firstName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                      ]"
                      placeholder="Enter your first name"
                    />
                    <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">{{ errors.firstName }}</p>
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  v-model="form.lastName"
                  required
                  autocomplete="family-name"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                    errors.lastName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  ]"
                  placeholder="Enter your last name"
                />
                <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">{{ errors.lastName }}</p>
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  required
                  autocomplete="email"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                    errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  ]"
                  placeholder="Enter your email address"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  v-model="form.phone"
                  autocomplete="tel"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                    errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  ]"
                  placeholder="Enter your phone number"
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <select 
                  id="subject"
                  v-model="form.subject"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                    errors.subject ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  ]"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="card-info">Card Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
                <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none',
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  ]"
                  placeholder="Tell us how we can help you..."
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
            
            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="lg:pl-8">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p class="text-lg text-gray-600">Reach out to us directly through any of these channels.</p>
            </div>
            
            <div class="space-y-8">
              <!-- Office Location -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Office Location</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Isulan, Sultan Kudarat<br />
                    Philippines
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                  <div class="space-y-1">
                    <p><a href="mailto:gotapmode@gmail.com" class="text-blue-600 hover:text-blue-800 transition-colors">gotapmode@gmail.com</a></p>
                  </div>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                  <div class="space-y-1">
                    <p><a href="tel:+6395609197710" class="text-blue-600 hover:text-blue-800 transition-colors">+63 956 091 97710</a></p>
                  </div>
                </div>
              </div>
              
              <!-- Business Hours -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <div class="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p class="text-sm text-gray-500 mt-2">Philippine Standard Time (PST)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div class="flex items-center gap-4">
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-200 hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-800 transition-all duration-200 hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-700 transition-all duration-200 hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-600 transition-all duration-200 hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 5.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 sm:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600">Quick answers to common questions about GoTapMode</p>
        </div>
        
        <div class="space-y-6">
          <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">How do I get a GoTapMode card?</h3>
            <p class="text-gray-600">Contact our authorized distributors or partners to obtain your personalized GoTapMode digital business card. We'll help connect you with the right distributor in your area.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Can I update my card information after activation?</h3>
            <p class="text-gray-600">Yes! Once you activate your card, you can update all your contact information anytime through your dashboard. Changes reflect immediately across all shared links.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Do recipients need an app to view my information?</h3>
            <p class="text-gray-600">No app required! Recipients can view your information by simply tapping your card with any NFC-enabled device or scanning the QR code with their phone camera.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">What if my card gets damaged or lost?</h3>
            <p class="text-gray-600">Contact our support team and we'll help you transfer your information to a replacement card. Your digital profile remains safe in the cloud.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">How secure is my information?</h3>
            <p class="text-gray-600">Your data is protected with enterprise-grade security. You control what information is shared and can update privacy settings anytime through your dashboard.</p>
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
  title: 'Contact Us - GoTapMode Digital Business Cards',
  description: 'Get in touch with GoTapMode support team. We\'re here to help with your digital business card questions and provide technical support.',
  keywords: 'contact GoTapMode, customer support, digital business card help, technical support, Philippines',
  ogTitle: 'Contact Us - GoTapMode Digital Business Cards',
  ogDescription: 'Get in touch with GoTapMode support team. We\'re here to help with your digital business card questions.',
  ogImage: '/logo/cover1.jpg'
})

// Background image rotation (same as other pages)
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

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const errors = ref({})

// Form validation
const validateForm = () => {
  errors.value = {}
  
  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }
  
  if (!form.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  if (form.value.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(form.value.phone)) {
    errors.value.phone = 'Please enter a valid phone number'
  }
  
  if (!form.value.subject) {
    errors.value.subject = 'Please select a subject'
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
  }
  
  return Object.keys(errors.value).length === 0
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Show success message
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    errors.value.submit = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Enhanced focus states */
input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Form animations */
.group:hover {
  transform: translateY(-2px);
}

/* Loading animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

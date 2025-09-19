<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div class="max-w-6xl mx-auto px-6 sm:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Enhanced Logo -->
        <router-link :to="{ name: 'home' }" class="flex items-center gap-3 group">
          <div class="relative">
            <img class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
          </div>
          <span class="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">GoTapMode</span>
        </router-link>
        
        <!-- Enhanced Desktop Navigation -->
        <div class="hidden sm:flex items-center gap-8">
          <router-link :to="{ name: 'home' }" class="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 group rounded-lg">
            <span class="relative z-10">Home</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:shadow-md"></div>
          </router-link>
          <router-link :to="{ name: 'how-it-works' }" class="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 group rounded-lg">
            <span class="relative z-10">How it Works</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:shadow-md"></div>
          </router-link>
          <router-link :to="{ name: 'contact' }" class="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 group rounded-lg">
            <span class="relative z-10">Contact</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:shadow-md"></div>
          </router-link>
          <router-link :to="{ name: 'login' }" class="relative px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm font-semibold rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-600/50 hover:border-slate-500">
            <span class="relative z-10">Sign In</span>
          </router-link>
        </div>
        
        <!-- Enhanced Mobile Menu Button -->
        <div class="sm:hidden">
          <button 
            @click="toggleMobileMenu" 
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
            class="relative p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:bg-gray-100 rounded-lg group"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg v-if="!mobileMenuOpen" class="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div v-if="mobileMenuOpen" class="sm:hidden fixed inset-0 z-40" @click="closeMobileMenu">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>
    
    <!-- Mobile Menu Panel -->
    <div 
      v-if="mobileMenuOpen" 
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      class="sm:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out"
      :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <img class="w-8 h-8" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
            <span class="text-xl font-semibold tracking-tight text-gray-900">GoTapMode</span>
          </div>
          <button @click="closeMobileMenu" aria-label="Close navigation menu" class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Menu Items -->
        <div class="flex-1 overflow-y-auto py-6">
          <nav class="px-6 space-y-2">
            <router-link :to="{ name: 'home' }" @click="closeMobileMenu" class="group block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-300 hover:shadow-sm">Home</router-link>
            <router-link :to="{ name: 'how-it-works' }" @click="closeMobileMenu" class="group block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-300 hover:shadow-sm">How it Works</router-link>
            <router-link :to="{ name: 'contact' }" @click="closeMobileMenu" class="group block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-300 hover:shadow-sm">Contact</router-link>
            <router-link :to="{ name: 'login' }" @click="closeMobileMenu" class="group block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-300 hover:shadow-sm">Sign In</router-link>
          </nav>
        </div>
        
        <!-- Bottom Action -->
        <div class="p-6 border-t border-gray-200">
          <router-link :to="{ name: 'login' }" @click="closeMobileMenu" class="block w-full px-6 py-3 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors text-center">
            Sign In
          </router-link>
          <div class="mt-3 text-center">
            <span class="text-sm text-gray-500">Access your digital card</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Fallback for older browsers */
@supports not (backdrop-filter: blur(8px)) {
  .bg-white\/95 {
    background-color: rgba(255, 255, 255, 0.98);
  }
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Enhanced focus states for accessibility */
a:focus, button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Professional shadows */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Mobile menu animations */
.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(100%);
}

/* Ensure mobile menu is above everything */
.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

/* Mobile menu styling */
@media (max-width: 640px) {
  .fixed {
    position: fixed;
  }
  
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  .top-0 {
    top: 0;
  }
  
  .right-0 {
    right: 0;
  }
  
  .h-full {
    height: 100vh;
  }
}
</style>

<template>
  <img
    v-if="isLoaded || isInView"
    :src="src"
    :alt="alt"
    :class="imageClass"
    @load="onLoad"
    @error="onError"
  />
  <div
    v-else
    ref="imageRef"
    :class="[placeholderClass, imageClass]"
    :style="placeholderStyle"
    :data-lazy-image="src"
  >
    <div v-if="showPlaceholder" class="flex items-center justify-center h-full">
      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  placeholderClass: {
    type: String,
    default: 'bg-gray-200'
  },
  placeholderStyle: {
    type: Object,
    default: () => ({})
  },
  rootMargin: {
    type: String,
    default: '50px' // Start loading 50px before image enters viewport
  },
  showPlaceholder: {
    type: Boolean,
    default: true
  }
})

const isInView = ref(false)
const isLoaded = ref(false)
const imageRef = ref(null)
let observer = null

const onLoad = () => {
  isLoaded.value = true
}

const onError = () => {
  // Handle image load error if needed
  isLoaded.value = true // Still mark as loaded to prevent infinite retry
}

onMounted(() => {
  // Use Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    // Wait for next tick to ensure DOM is ready
    nextTick(() => {
      const targetElement = imageRef.value
      if (targetElement) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isInView.value = true
                // Disconnect observer once image is in view
                if (observer && targetElement) {
                  observer.unobserve(targetElement)
                }
              }
            })
          },
          {
            rootMargin: props.rootMargin
          }
        )
        observer.observe(targetElement)
      } else {
        // If element not found, load immediately
        isInView.value = true
      }
    })
  } else {
    // Fallback for browsers without Intersection Observer
    isInView.value = true
  }
})

onUnmounted(() => {
  if (observer && imageRef.value) {
    observer.unobserve(imageRef.value)
    observer.disconnect()
  }
})
</script>

<script>
export default {
  name: 'LazyImage'
}
</script>


<template>
  <router-view />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

function onTimeoutEvent() {
  // Auto-logout directly without countdown
  window.location.replace('/')
}

onMounted(() => {
  window.addEventListener('gtm:session-timeout', onTimeoutEvent)
})




onBeforeUnmount(() => {
  window.removeEventListener('gtm:session-timeout', onTimeoutEvent)
})
</script>




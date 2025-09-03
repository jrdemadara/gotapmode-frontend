<template>
  <teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50 transition-opacity" @click="close" />
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div role="dialog" aria-modal="true" :aria-label="title" class="w-full max-w-md rounded-2xl bg-white text-gray-900 shadow-xl border border-gray-100 animate-modal-in">
          <div class="px-5 pt-4 pb-2">
            <h3 class="text-lg font-bold">{{ title }}</h3>
          </div>
          <div class="px-5 pb-4 text-sm opacity-90">
            <slot>{{ message }}</slot>
          </div>
          <div class="px-5 pb-4">
            <slot name="footer">
              <div class="flex justify-end gap-2">
                <button @click="close" class="h-10 px-4 rounded-md bg-black text-white hover:-translate-y-0.5 transition-transform">OK</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Error' },
  message: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
@keyframes modalIn {
  from { transform: translateY(8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-modal-in { animation: modalIn .18s ease-out; }
</style>



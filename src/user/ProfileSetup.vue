<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-6 sm:px-8 pb-safe pt-36">
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-5 sm:p-7 mt-6 sm:mt-8">
      <h2 class="text-center text-2xl sm:text-3xl font-black mb-1">Setup My Profile</h2>
      <form class="grid gap-3" @submit.prevent="onSubmit">
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="first">Firstname</label>
          <input id="first" v-model.trim="first" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" placeholder="John" />
        </div>
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="middle">Middlename</label>
          <input id="middle" v-model.trim="middle" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" placeholder="A." />
        </div>
        <div>
          <label class="block text-xs font-medium mb-1 opacity-80" for="last">Lastname</label>
          <input id="last" v-model.trim="last" class="block w-full h-11 rounded-lg border border-gray-300 bg-gray-50 px-3.5 text-[15px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Doe" />
        </div>

        <button type="submit" :disabled="!first || !last || loading" class="mt-1 h-12 rounded-lg w-full bg-primary text-white font-semibold disabled:opacity-50">Create My Profile</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, userApi } from '../config/api'

const first = ref('')
const middle = ref('')
const last = ref('')
const loading = ref(false)
const userId = ref(null)
const router = useRouter()

onMounted(() => {
  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
  } catch {}
})

async function onSubmit() {
  loading.value = true
  try {
    await userApi.updatePersonalData({
      first_name: first.value,
      middle_name: middle.value || null,
      last_name: last.value,
    })
    router.push({ name: 'profile-details' })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>



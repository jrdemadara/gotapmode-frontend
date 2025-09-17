<template>
  <div class="min-h-svh flex flex-col items-center px-8 sm:px-12 pb-16 pt-10 relative">
    <!-- Hamburger button -->
    <button @click="showSidebar = true"
      class="absolute left-4 top-4 z-50 w-10 h-10 rounded-lg border border-gray-200 bg-white flex flex-col items-center justify-center gap-1">
      <span class="block w-5 h-0.5 bg-black"></span>
      <span class="block w-5 h-0.5 bg-black"></span>
      <span class="block w-5 h-0.5 bg-black"></span>
    </button>
    <!-- Brand -->
    <div class="text-center mb-6">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <!-- Loading / Error -->
    <div class="w-full max-w-2xl mb-4" v-if="loading || loadError">
      <div v-if="loading" class="bg-white rounded-xl border border-gray-200 p-4 text-center">Loading dashboard…</div>
      <div v-else class="bg-white rounded-xl border border-red-200 p-4 text-center text-red-700">{{ loadError }}</div>
    </div>

    <!-- Profile header -->
    <div class="flex flex-col items-center mb-6">
      <img class="w-40 h-40 rounded-full object-cover border border-black" :src="profile.photo || '/icons/user.png'"
        alt="profile" />
      <h2 class="mt-4 text-xl font-extrabold">{{ formatPosition(profile.name) }}</h2>
      <p class="text-sm opacity-80 font-bold">{{ formatPosition(profile.company) }}</p>
      <p class="text-sm opacity-70 font-bold text-blue-500" v-if="profile.position">{{ formatPosition(profile.position)
        }}</p>
      <p class="text-sm font-bold" v-if="profile.bio">{{ profile.bio }}</p>
    </div>

    <div class="w-full max-w-2xl space-y-px" v-if="!loading && !loadError">
      <!-- Contact Links -->
      <section>
        <h3 class="px-3 py-2 rounded-md bg-black/90 text-white text-sm font-bold">Contact Links</h3>
        <div class="mt-2 space-y-2">
          <div v-for="p in phones" :key="p.id"
            class="flex items-center gap-3 h-12 px-3 bg-gray-100 border border-gray-200 rounded-lg">
            <img :src="p.type === 'telephone' ? '/icons/phone-call.png' : '/icons/smartphone.png'" class="w-5 h-5"
              alt="type" />
            <div class="flex-1 text-sm">{{ p.number }}</div>
            <div class="flex items-center gap-3">
              <button @click="onToggleMain(p)" type="button" aria-label="Set main phone"
                class="relative w-10 h-6 rounded-full transition-colors duration-200"
                :class="p.isMain ? 'bg-black' : 'bg-gray-300'">
                <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                  :class="p.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
              </button>
              <button @click="onDial(p)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Call or copy number">
                <img src="/icons/phone.png" class="w-5 h-5" alt="phone" />
              </button>
              <button @click="deletePhone(p)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Delete phone">
                <img src="/icons/delete.png" class="w-5 h-5" alt="delete" />
              </button>
            </div>
          </div>
        </div>
        <!-- Add new contact button that opens a modal -->
        <button @click="openAddPhone"
          class="mt-2 mb-2 w-full h-10 rounded-md border border-gray-300 flex items-center justify-center gap-2 px-3">
          <img src="/icons/add.png" class="w-5 h-5" />
          <span class="text-center">Add Phone</span>
        </button>
      </section>

      <!-- Email Links -->
      <section>
        <h3 class="px-3 py-2 rounded-md bg-black/90 text-white text-sm font-bold">Email Links</h3>
        <div class="mt-2 space-y-2">
          <div v-for="(e, idx) in emails" :key="e.id || ('e-' + idx)"
            class="flex items-center gap-3 h-12 px-3 bg-gray-100 border border-gray-200 rounded-lg">
            <img src="/icons/email.png" class="w-5 h-5" alt="email" />
            <div class="flex-1 text-sm">
              <span class="hidden sm:inline">{{ e.value }}</span>
              <span class="sm:hidden">{{ e.value.length > 15 ? e.value.substring(0, 15) + '...' : e.value }}</span>
            </div>
            <div class="flex items-center gap-3">
              <button @click="onToggleMainEmail(e)" type="button" aria-label="Set main email"
                class="relative w-10 h-6 rounded-full transition-colors duration-200"
                :class="e.isMain ? 'bg-black' : 'bg-gray-300'">
                <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                  :class="e.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
              </button>
              <button @click="sendEmail(e)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Send email">
                <img src="/icons/send.png" class="w-5 h-5" alt="send" />
              </button>
              <button @click="deleteEmail(e)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Delete email">
                <img src="/icons/delete.png" class="w-5 h-5" alt="delete" />
              </button>
            </div>
          </div>
        </div>
        <button @click="openAddEmail"
          class="mt-2 mb-2 w-full h-10 rounded-md border border-gray-300 flex items-center justify-center gap-2 px-3">
          <img src="/icons/add.png" class="w-5 h-5" />
          <span class="text-center">Add Email</span>
        </button>
      </section>

      <!-- Social Media Links -->
      <section>
        <h3 class="px-3 py-2 rounded-md bg-black/90 text-white text-sm font-bold">Social Media Links</h3>
        <div class="mt-2 space-y-2">
          <div v-for="(s, idx) in socials" :key="s.id || ('s-' + idx)"
            class="flex items-center gap-3 h-12 px-3 bg-gray-100 border border-gray-200 rounded-lg">
            <img :src="socialIcon(s.platform)" class="w-5 h-5" alt="social" />
            <div class="flex-1">
              <div class="text-sm font-medium">{{ getSocialDisplayName(s) }}</div>
            </div>
            <div class="flex items-center gap-3">
              <button @click="onToggleMainSocial(s)" type="button" aria-label="Set main social"
                class="relative w-10 h-6 rounded-full transition-colors duration-200"
                :class="s.isMain ? 'bg-black' : 'bg-gray-300'">
                <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                  :class="s.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
              </button>
              <button @click="openSocialLink(s)" type="button" class="w-4 h-4 cursor-pointer active:scale-95"
                title="Open social link">
                <img src="/icons/expand-arrows.png" class="w-4 h-4" alt="open" />
              </button>
              <button @click="deleteSocial(s)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Delete social">
                <img src="/icons/delete.png" class="w-5 h-5" alt="delete" />
              </button>
            </div>
          </div>
        </div>
        <button @click="openAddSocial"
          class="mt-2 mb-2 w-full h-10 rounded-md border border-gray-300 flex items-center justify-center gap-2 px-3">
          <img src="/icons/add.png" class="w-5 h-5" />
          <span class="text-center">Add Social</span>
        </button>
      </section>

      <!-- Other Links -->
      <section>
        <h3 class="px-3 py-2 rounded-md bg-black/90 text-white text-sm font-bold">Other Links</h3>
        <div class="mt-2 space-y-2">
          <div v-for="(o, idx) in others" :key="o.id || ('o-' + idx)"
            class="flex items-center gap-3 h-12 px-3 bg-gray-100 border border-gray-200 rounded-lg">
            <img src="/icons/web.png" class="w-5 h-5" alt="web" />
            <div class="flex-1">
              <div class="text-sm font-medium">{{ getOtherLinkDisplayName(o) }}</div>
            </div>
            <div class="flex items-center gap-3">
              <button @click="onToggleMainOther(o)" type="button" aria-label="Set main link"
                class="relative w-10 h-6 rounded-full transition-colors duration-200"
                :class="o.isMain ? 'bg-black' : 'bg-gray-300'">
                <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-200"
                  :class="o.isMain ? 'translate-x-4' : 'translate-x-0'"></span>
              </button>
              <button @click="openOtherLink(o)" type="button" class="w-4 h-4 cursor-pointer active:scale-95"
                title="Open link">
                <img src="/icons/expand-arrows.png" class="w-4 h-4" alt="open" />
              </button>
              <button @click="deleteOther(o)" type="button" class="w-5 h-5 cursor-pointer active:scale-95"
                title="Delete link">
                <img src="/icons/delete.png" class="w-5 h-5" alt="delete" />
              </button>
            </div>
          </div>
        </div>
        <button @click="openAddOther"
          class="mt-2 mb-2 w-full h-10 rounded-md border border-gray-300 flex items-center justify-center gap-2 px-3">
          <img src="/icons/add.png" class="w-5 h-5" />
          <span class="text-center">Add Other</span>
        </button>
      </section>
    </div>

    <!-- Phone add modal instance (inside root to keep single template) -->
    <Modal v-model="showAddPhone" title="Add Phone">
      <div class="space-y-4">
        <div class="text-left">
          <label for="new-phone" class="block text-xs font-medium mb-1">Phone number</label>
          <input id="new-phone" name="new-phone" v-model="newPhone" type="tel" inputmode="tel"
            placeholder="e.g. 0977 301 6902"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
        </div>
        <div class="text-left">
          <label for="new-phone-type" class="block text-xs font-medium mb-1">Type</label>
          <select id="new-phone-type" name="new-phone-type" v-model="newPhoneType"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500">
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="telephone">Telephone</option>
          </select>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center justify-between gap-2">
          <button class="px-4 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 active:scale-[.98] transition"
            @click="showAddPhone = false">Cancel</button>
          <button
            class="px-4 h-10 rounded-lg bg-black text-white disabled:opacity-50 hover:-translate-y-0.5 active:scale-[.98] transition"
            :disabled="!newPhone" @click="saveAddPhone">Save</button>
        </div>
      </template>
    </Modal>

    <!-- Email add modal -->
    <Modal v-model="showAddEmail" title="Add Email">
      <div class="space-y-4">
        <div class="text-left">
          <label for="new-email" class="block text-xs font-medium mb-1">Email</label>
          <input id="new-email" name="new-email" v-model="newEmail" type="email" placeholder="name@company.com"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
        </div>
        <div class="text-left">
          <label for="new-email-type" class="block text-xs font-medium mb-1">Type</label>
          <select id="new-email-type" name="new-email-type" v-model="newEmailType"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500">
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center justify-between gap-2">
          <button class="px-4 h-10 rounded-lg border border-gray-300" @click="showAddEmail = false">Cancel</button>
          <button class="px-4 h-10 rounded-lg bg-black text-white disabled:opacity-50" :disabled="!newEmail"
            @click="saveAddEmail">Save</button>
        </div>
      </template>
    </Modal>

    <!-- Social add modal -->
    <Modal v-model="showAddSocial" title="Add Social Link">
      <div class="space-y-4">
        <div class="text-left">
          <label for="new-social" class="block text-xs font-medium mb-1">URL / Username</label>
          <input id="new-social" name="new-social" v-model="newSocial" placeholder="https://platform/username"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
        </div>
        <div class="text-left">
          <label for="social-platform-select" class="block text-xs font-medium mb-1">Platform</label>
          <div class="relative" ref="socialPlatformContainer">
            <button id="social-platform-select" type="button" @click="toggleSocialTypePicker"
              class="w-full h-11 rounded-xl border border-gray-300 px-3 flex items-center justify-between">
              <span class="flex items-center gap-2">
                <img :src="currentSocialPlatform.icon" class="w-5 h-5" />
                <span>{{ currentSocialPlatform.label }}</span>
              </span>
              <svg class="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.063l3.71-3.832a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <teleport to="body">
              <div v-if="showSocialTypePicker"
                class="fixed z-[9999] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style="background-color: white !important; opacity: 1 !important; backdrop-filter: none !important; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;"
                :style="dropdownStyle">
                <button v-for="p in socialPlatforms" :key="p.key" type="button" @click="selectSocialPlatform(p.key)"
                  class="w-full flex items-center gap-2 px-3 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none active:bg-gray-100 transition-colors touch-manipulation">
                  <img :src="p.icon" class="w-5 h-5 flex-shrink-0" />
                  <span class="text-sm">{{ p.label }}</span>
                </button>
              </div>
            </teleport>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center justify-between gap-2">
          <button class="px-4 h-10 rounded-lg border border-gray-300" @click="showAddSocial = false">Cancel</button>
          <button class="px-4 h-10 rounded-lg bg-black text-white disabled:opacity-50" :disabled="!newSocial"
            @click="saveAddSocial">Save</button>
        </div>
      </template>
    </Modal>

    <!-- Other add modal -->
    <Modal v-model="showAddOther" title="Add Other Link">
      <div class="space-y-4">
        <div class="text-left">
          <label for="new-other" class="block text-xs font-medium mb-1">Link</label>
          <input id="new-other" name="new-other" v-model="newOther" placeholder="https://your-link"
            class="w-full h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500" />
        </div>
      </div>
      <template #footer>
        <div class="flex items-center justify-between gap-2">
          <button class="px-4 h-10 rounded-lg border border-gray-300" @click="showAddOther = false">Cancel</button>
          <button class="px-4 h-10 rounded-lg bg-black text-white disabled:opacity-50" :disabled="!newOther"
            @click="saveAddOther">Save</button>
        </div>
      </template>
    </Modal>
    <!-- Sidebar overlay -->
    <div v-if="showSidebar" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" @click="showSidebar = false"></div>
    <!-- Collapsible sidebar -->
    <div
      class="fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-white to-gray-50 text-gray-900 shadow-2xl transform transition-transform duration-200 rounded-r-2xl border-r border-gray-200/70"
      :class="showSidebar ? 'translate-x-0' : '-translate-x-full'">
      <!-- Header -->
      <div class="px-5 pt-6 pb-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img :src="profile.photo || '/icons/user.png'" alt="avatar"
            class="w-10 h-10 rounded-full object-cover border border-gray-200" />
          <div>
            <div class="text-sm font-extrabold leading-tight">{{ profile.name || 'User' }}</div>
            <div class="text-xs opacity-70">GoTapMode</div>
          </div>
        </div>
        <button @click="showSidebar = false"
          class="w-8 h-8 rounded-lg border border-gray-300 bg-white/70 flex items-center justify-center shadow-sm">✕</button>
      </div>
      <div class="px-5">
        <div class="h-px bg-gray-200"></div>
      </div>
      <!-- Nav -->
      <nav class="py-2">
        <button @click="goEditProfile"
          class="w-full flex items-center justify-between gap-3 px-5 h-12 hover:bg-black/5">
          <span class="flex items-center gap-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
            <span class="text-sm">Edit Profile</span>
          </span>
          <span class="opacity-60">›</span>
        </button>
        <button @click="doLogout"
          class="w-full flex items-center justify-between gap-3 px-5 h-12 hover:bg-black/5 text-red-600">
          <span class="flex items-center gap-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span class="text-sm">Logout</span>
          </span>
          <span class="opacity-60">›</span>
        </button>
      </nav>
      <div class="mt-auto"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { userApi } from '../config/api'
import Modal from '../components/Modal.vue'
import { processProfileImage } from '../utils/imageUtils'

const profile = ref({
  photo: '',
  name: 'GoTapMode',
  subtitle: 'Activate Connection Instantly',
  company: 'Company',
  bio: 'Bio',
  title: 'Position',
})

const userId = ref(null)
const loading = ref(true)
const loadError = ref('')
const phones = ref([])
const emails = ref([])
const socials = ref([])
const others = ref([])
const showSidebar = ref(false)
const router = useRouter()

// Add phone modal state
const showAddPhone = ref(false)
const newPhone = ref('')
const newPhoneType = ref('personal')
const showAddEmail = ref(false)
const newEmail = ref('')
const newEmailType = ref('personal')
const showAddSocial = ref(false)
const newSocial = ref('')
const newSocialType = ref('facebook')
const showAddOther = ref(false)
const newOther = ref('')

// Refs for click-outside handling
const socialPlatformContainer = ref(null)
const dropdownStyle = ref({})

// Social platforms list with icons
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
  { key: 'linkedin', label: 'LinkedIn', icon: '/icons/linkedin.png' },
  { key: 'skype', label: 'Skype', icon: '/icons/skype.png' },
  { key: 'snapchat', label: 'Snapchat', icon: '/icons/snapchat.png' },
  { key: 'viber', label: 'Viber', icon: '/icons/viber.png' },
  { key: 'whatsapp', label: 'WhatsApp', icon: '/icons/whatsapp.png' },






]
const showSocialTypePicker = ref(false)
const currentSocialPlatform = ref(socialPlatforms.find(p => p.key === newSocialType.value) || socialPlatforms[0])
function selectSocialPlatform(key) {
  newSocialType.value = key
  currentSocialPlatform.value = socialPlatforms.find(p => p.key === key) || socialPlatforms[0]
  showSocialTypePicker.value = false

  // Auto-fill the textbox with platform-specific URL template
  const platformTemplates = {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/@',
    twitter: 'https://twitter.com/@',
    linkedin: 'https://linkedin.com/in/',
    youtube: 'https://youtube.com/@',
    tiktok: 'https://tiktok.com/@',
    snapchat: 'https://snapchat.com/add/',
    whatsapp: 'https://wa.me/',
    telegram: 'https://t.me/@',
    discord: 'https://discord.gg/',
    github: 'https://github.com/',
    behance: 'https://behance.net/',
    dribbble: 'https://dribbble.com/',
    pinterest: 'https://pinterest.com/',
    reddit: 'https://reddit.com/user/',
    twitch: 'https://twitch.tv/',
    spotify: 'https://open.spotify.com/user/',
    soundcloud: 'https://soundcloud.com/',
    vimeo: 'https://vimeo.com/',
    medium: 'https://medium.com/@',
    patreon: 'https://patreon.com/',
    onlyfans: 'https://onlyfans.com/',
    link: 'https://'
  }

  newSocial.value = platformTemplates[key] || 'https://'
}

function updateDropdownPosition() {
  if (socialPlatformContainer.value && showSocialTypePicker.value) {
    const rect = socialPlatformContainer.value.getBoundingClientRect()
    dropdownStyle.value = {
      top: `${rect.bottom + 4}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`
    }
  }
}

function toggleSocialTypePicker() {
  showSocialTypePicker.value = !showSocialTypePicker.value
  if (showSocialTypePicker.value) {
    // Use nextTick to ensure DOM is updated before calculating position
    nextTick(() => {
      updateDropdownPosition()
    })
  }
}


// Click outside handler for dropdowns
function handleClickOutside(event) {
  if (socialPlatformContainer.value && !socialPlatformContainer.value.contains(event.target)) {
    showSocialTypePicker.value = false
  }
}
function openAddPhone() { showAddPhone.value = true; newPhone.value = '' }
function openAddEmail() { showAddEmail.value = true; newEmail.value = '' }
function openAddSocial() {
  showAddSocial.value = true
  // Initialize with Facebook as default
  newSocialType.value = 'facebook'
  currentSocialPlatform.value = socialPlatforms.find(p => p.key === 'facebook') || socialPlatforms[0]
  newSocial.value = 'https://facebook.com/'
}
function openAddOther() { showAddOther.value = true; newOther.value = 'https://' }

// Platform-specific URL validation
function validateSocialUrlForPlatform(url, platform) {
  const lowerUrl = url.toLowerCase()

  switch (platform) {
    case 'facebook':
      return lowerUrl.includes('facebook.com/') || lowerUrl.includes('fb.com/')
    case 'instagram':
      return lowerUrl.includes('instagram.com/')
    case 'twitter':
      return lowerUrl.includes('twitter.com/') || lowerUrl.includes('x.com/')
    case 'linkedin':
      return lowerUrl.includes('linkedin.com/in/') || lowerUrl.includes('linkedin.com/company/')
    case 'youtube':
      return lowerUrl.includes('youtube.com/') || lowerUrl.includes('youtu.be/')
    case 'tiktok':
      return lowerUrl.includes('tiktok.com/@')
    case 'snapchat':
      return lowerUrl.includes('snapchat.com/add/')
    case 'whatsapp':
      return lowerUrl.includes('wa.me/') || lowerUrl.includes('whatsapp.com/')
    case 'telegram':
      return lowerUrl.includes('t.me/')
    case 'discord':
      return lowerUrl.includes('discord.gg/') || lowerUrl.includes('discord.com/')
    case 'github':
      return lowerUrl.includes('github.com/')
    case 'behance':
      return lowerUrl.includes('behance.net/')
    case 'dribbble':
      return lowerUrl.includes('dribbble.com/')
    case 'pinterest':
      return lowerUrl.includes('pinterest.com/')
    case 'reddit':
      return lowerUrl.includes('reddit.com/')
    case 'twitch':
      return lowerUrl.includes('twitch.tv/')
    case 'spotify':
      return lowerUrl.includes('open.spotify.com/')
    case 'soundcloud':
      return lowerUrl.includes('soundcloud.com/')
    case 'vimeo':
      return lowerUrl.includes('vimeo.com/')
    case 'medium':
      return lowerUrl.includes('medium.com/')
    case 'patreon':
      return lowerUrl.includes('patreon.com/')
    case 'onlyfans':
      return lowerUrl.includes('onlyfans.com/')
    case 'link':
      return true // Generic link, any valid URL is acceptable
    default:
      return true
  }
}

// Check if URL contains only template content (no actual username/profile)
function hasOnlyTemplateContent(url, platform) {
  const lowerUrl = url.toLowerCase()

  // Define template patterns for each platform (full URLs)
  const templatePatterns = {
    facebook: ['https://facebook.com/', 'https://fb.com/', 'http://facebook.com/', 'http://fb.com/'],
    instagram: ['https://instagram.com/', 'http://instagram.com/'],
    twitter: ['https://twitter.com/', 'https://x.com/', 'http://twitter.com/', 'http://x.com/'],
    linkedin: ['https://linkedin.com/in/', 'https://linkedin.com/company/', 'http://linkedin.com/in/', 'http://linkedin.com/company/'],
    youtube: ['https://youtube.com/', 'https://youtu.be/', 'http://youtube.com/', 'http://youtu.be/'],
    tiktok: ['https://tiktok.com/@', 'http://tiktok.com/@'],
    snapchat: ['https://snapchat.com/add/', 'http://snapchat.com/add/'],
    whatsapp: ['https://wa.me/', 'https://whatsapp.com/', 'http://wa.me/', 'http://whatsapp.com/'],
    telegram: ['https://t.me/', 'http://t.me/'],
    discord: ['https://discord.gg/', 'https://discord.com/', 'http://discord.gg/', 'http://discord.com/'],
    github: ['https://github.com/', 'http://github.com/'],
    behance: ['https://behance.net/', 'http://behance.net/'],
    dribbble: ['https://dribbble.com/', 'http://dribbble.com/'],
    pinterest: ['https://pinterest.com/', 'http://pinterest.com/'],
    reddit: ['https://reddit.com/', 'http://reddit.com/'],
    twitch: ['https://twitch.tv/', 'http://twitch.tv/'],
    spotify: ['https://open.spotify.com/', 'http://open.spotify.com/'],
    soundcloud: ['https://soundcloud.com/', 'http://soundcloud.com/'],
    vimeo: ['https://vimeo.com/', 'http://vimeo.com/'],
    medium: ['https://medium.com/', 'http://medium.com/'],
    patreon: ['https://patreon.com/', 'http://patreon.com/'],
    onlyfans: ['https://onlyfans.com/', 'http://onlyfans.com/'],
    link: ['https://', 'http://']
  }

  const patterns = templatePatterns[platform] || ['https://', 'http://']
  console.log('Platform:', platform, 'Patterns:', patterns, 'URL:', lowerUrl)

  // Check if URL exactly matches any of the template patterns
  const result = patterns.some(pattern => {
    const matches = lowerUrl === pattern
    console.log('Pattern:', pattern, 'URL:', lowerUrl, 'Matches:', matches)
    return matches
  })

  console.log('Final result:', result)
  return result
}
async function saveAddPhone() {
  if (!userId.value) return

  // Validation
  const phone = newPhone.value?.trim()
  if (!phone) {
    alert('Please enter a phone number')
    return
  }

  // Remove all non-digit characters for validation
  const cleanPhone = phone.replace(/\D/g, '')
  if (cleanPhone.length < 7 || cleanPhone.length > 15) {
    alert('Please enter a valid phone number (7-15 digits)')
    return
  }

  // Check for duplicates
  const existingPhone = phones.value.find(p => p.number.replace(/\D/g, '') === cleanPhone)
  if (existingPhone) {
    alert('This phone number already exists')
    return
  }

  try {
    await addPhone(phone, newPhoneType.value)
    showAddPhone.value = false
    newPhone.value = ''
  } catch (error) {
    alert('Failed to add phone number. Please try again.')
    console.error('Phone save error:', error)
  }
}
async function saveAddEmail() {
  if (!userId.value) return

  // Validation
  const email = newEmail.value?.trim()
  if (!email) {
    alert('Please enter an email address')
    return
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address')
    return
  }

  // Check for duplicates (case insensitive)
  const existingEmail = emails.value.find(e => e.value.toLowerCase() === email.toLowerCase())
  if (existingEmail) {
    alert('This email address already exists')
    return
  }

  try {
    await addEmail(email)
    showAddEmail.value = false
    newEmail.value = ''
  } catch (error) {
    alert('Failed to add email address. Please try again.')
    console.error('Email save error:', error)
  }
}
async function saveAddSocial() {
  if (!userId.value) return

  // Validation
  const socialUrl = newSocial.value?.trim()
  if (!socialUrl) {
    alert('Please enter a social media URL')
    return
  }

  // URL validation
  try {
    new URL(socialUrl)
  } catch (error) {
    alert('Please enter a valid URL (must start with http:// or https://)')
    return
  }

  // Check if URL starts with http/https
  if (!socialUrl.startsWith('http://') && !socialUrl.startsWith('https://')) {
    alert('Please enter a valid URL (must start with http:// or https://)')
    return
  }

  // Check for duplicates
  const existingSocial = socials.value.find(s => s.value.toLowerCase() === socialUrl.toLowerCase())
  if (existingSocial) {
    alert('This social media URL already exists')
    return
  }

  // Platform-specific validation
  const platform = newSocialType.value
  const isValidForPlatform = validateSocialUrlForPlatform(socialUrl, platform)
  if (!isValidForPlatform) {
    alert(`Please enter a valid ${platform} URL`)
    return
  }

  // Check if URL has actual content (not just template)
  console.log('Checking template content for:', socialUrl, 'platform:', platform)
  const isTemplateOnly = hasOnlyTemplateContent(socialUrl, platform)
  console.log('Is template only:', isTemplateOnly)

  if (isTemplateOnly) {
    alert(`Please enter a complete ${platform} URL with your username or profile`)
    return
  }

  try {
    await addSocial(socialUrl)
    showAddSocial.value = false
    newSocial.value = ''
  } catch (error) {
    alert('Failed to add social media link. Please try again.')
    console.error('Social save error:', error)
  }
}
async function saveAddOther() {
  if (!userId.value) return

  // Validation
  const otherUrl = newOther.value?.trim()
  if (!otherUrl) {
    alert('Please enter a URL')
    return
  }

  // URL validation
  try {
    new URL(otherUrl)
  } catch (error) {
    alert('Please enter a valid URL (must start with http:// or https://)')
    return
  }

  // Check if URL starts with http/https
  if (!otherUrl.startsWith('http://') && !otherUrl.startsWith('https://')) {
    alert('Please enter a valid URL (must start with http:// or https://)')
    return
  }

  // Check for duplicates
  const existingOther = others.value.find(o => o.value.toLowerCase() === otherUrl.toLowerCase())
  if (existingOther) {
    alert('This URL already exists')
    return
  }

  // Check if URL has actual content (not just template)
  if (hasOnlyTemplateContent(otherUrl, 'link')) {
    alert('Please enter a complete URL with actual content')
    return
  }

  try {
    await addOther(otherUrl)
    showAddOther.value = false
    newOther.value = ''
  } catch (error) {
    alert('Failed to add link. Please try again.')
    console.error('Other save error:', error)
  }
}

onMounted(async () => {
  try {
    const u = JSON.parse(localStorage.getItem('gtm_user') || 'null')
    userId.value = u?.id || null
    if (!userId.value) {
      loadError.value = 'Not logged in.'
      return
    }

    // OPTIMIZED: Load all data in parallel instead of sequential
    const [contactsData, personalData, profileData] = await Promise.all([
      userApi.getContacts(),
      userApi.getPersonalData().catch(() => null),
      userApi.getProfile().catch(() => null)
    ])

    // OPTIMIZED: Transform data with helper function
    const transformContacts = (data, type) => {
      return (data || []).map(r => {
        const base = { id: r.id, isMain: !!r.is_main }
        switch (type) {
          case 'phones': return { ...base, number: r.phonenumber, type: r.type }
          case 'emails': return { ...base, value: r.email, type: r.type }
          case 'socials': return { ...base, platform: r.type || 'link', value: r.social }
          case 'others': return { ...base, value: r.others }
          default: return base
        }
      }).sort((a, b) => a.id - b.id)
    }

    phones.value = transformContacts(contactsData.phones, 'phones')
    emails.value = transformContacts(contactsData.emails, 'emails')
    socials.value = transformContacts(contactsData.socials, 'socials')
    others.value = transformContacts(contactsData.others, 'others')

    // Update profile data
    if (personalData?.full_name) profile.value.name = personalData.full_name
    if (profileData?.profile_pic) {
      profile.value.photo = processProfileImage(profileData.profile_pic)
    } else {
      profile.value.photo = ''
    }
    if (profileData?.company) profile.value.company = profileData.company
    if (profileData?.bio) profile.value.bio = profileData.bio
    if (profileData?.position) profile.value.position = profileData.position

  } catch (e) {
    loadError.value = e?.message || 'Failed to load dashboard.'
  } finally {
    loading.value = false
  }

  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

// Cleanup event listeners
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

async function addPhone(v, t) {
  if (!v) return;
  const row = await userApi.addPhone({ phonenumber: v, type: t || null });
  const newPhone = { id: row.id, number: row.phonenumber, type: row.type, isMain: !!row.is_main };
  phones.value.push(newPhone);

  // If this is the first phone, set it as main
  if (phones.value.length === 1) {
    await onToggleMain(newPhone);
  }
}
async function onToggleMain(p) {
  if (!p?.id) return;
  try {
    await userApi.setMainPhone(p.id);
    // Update only the isMain status without reordering
    phones.value.forEach(phone => {
      phone.isMain = phone.id === p.id;
    });
  } catch (_) { }
}
async function deletePhone(phone) {
  if (!phone?.id) return;
  try {
    await userApi.deleteContact('phones', phone.id);
    phones.value = phones.value.filter(p => p.id !== phone.id);
  } catch (error) {
    console.error("Error deleting phone:", error);
  }
}
async function addEmail(v) {
  if (!v) return;
  const row = await userApi.addEmail({ email: v });
  const newEmail = { id: row.id, value: row.email, isMain: !!row.is_main };
  emails.value.push(newEmail);

  // If this is the first email, set it as main
  if (emails.value.length === 1) {
    await onToggleMainEmail(newEmail);
  }
}
async function addSocial(v) {
  if (!v) return;
  const row = await userApi.addSocial({ social: v, type: newSocialType.value || 'link' });
  const newSocial = { id: row.id, platform: row.type || 'link', value: row.social, isMain: !!row.is_main };
  socials.value.push(newSocial);

  // If this is the first social link, set it as main
  if (socials.value.length === 1) {
    await onToggleMainSocial(newSocial);
  }
}
async function addOther(v) {
  if (!v) return;
  const row = await userApi.addOther({ others: v });
  const newOther = { id: row.id, value: row.others, isMain: !!row.is_main };
  others.value.push(newOther);

  // If this is the first other link, set it as main
  if (others.value.length === 1) {
    await onToggleMainOther(newOther);
  }
}
async function onToggleMainEmail(e) {
  if (!e?.id) return;
  try {
    await userApi.setMainEmail(e.id);
    // Update only the isMain status without reordering
    emails.value.forEach(email => {
      email.isMain = email.id === e.id;
    });
  } catch (_) { }
}
async function onToggleMainSocial(s) {
  if (!s?.id) return;
  try {
    await userApi.setMainSocial(s.id);
    // Update only the isMain status without reordering
    socials.value.forEach(social => {
      social.isMain = social.id === s.id;
    });
  } catch (_) { }
}
async function onToggleMainOther(o) {
  if (!o?.id) return;
  try {
    await userApi.setMainOther(o.id);
    // Update only the isMain status without reordering
    others.value.forEach(other => {
      other.isMain = other.id === o.id;
    });
  } catch (_) { }
}
async function deleteEmail(email) {
  if (!email?.id) return;
  try {
    await userApi.deleteContact('emails', email.id);
    emails.value = emails.value.filter(e => e.id !== email.id);
  } catch (error) {
    console.error("Error deleting email:", error);
  }
}
async function deleteSocial(social) {
  if (!social?.id) return;
  try {
    await userApi.deleteContact('socials', social.id);
    socials.value = socials.value.filter(s => s.id !== social.id);
  } catch (error) {
    console.error("Error deleting social:", error);
  }
}
async function deleteOther(other) {
  if (!other?.id) return;
  try {
    await userApi.deleteContact('others', other.id);
    others.value = others.value.filter(o => o.id !== other.id);
  } catch (error) {
    console.error("Error deleting other:", error);
  }
}

function goEditProfile() {
  showSidebar.value = false
  try { router.push({ name: 'edit-profile' }) } catch { }
}

// Removed goProfilePhoto; profile photo handled in Edit Profile and Profile Details

async function doLogout() {
  try {
    await userApi.logout()
  } catch (e) {
    console.log('Logout API call failed:', e)
    // Even if API call fails, we still clear local storage and redirect
  }
  // Always clear local storage and redirect, regardless of API call success
  localStorage.removeItem('gtm_token')
  localStorage.removeItem('gtm_user')
  window.location.replace('/')
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

// Format position to proper case (first letter capitalized)
function formatPosition(position) {
  if (!position) return ''
  return position.toLowerCase().split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

// Get smart display name for social media links
function getSocialDisplayName(social) {
  const platform = social.platform;

  // Return only the platform name with proper formatting
  const platformNames = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    twitter: 'X (Twitter)',
    youtube: 'YouTube',
    tiktok: 'TikTok',
    discord: 'Discord',
    telegram: 'Telegram',
    skype: 'Skype',
    snapchat: 'Snapchat',
    viber: 'Viber',
    whatsapp: 'WhatsApp',
    reddit: 'Reddit',
    link: 'Link'
  };

  return platformNames[platform] || 'Social Media';
}

// Get smart display name for other links (similar to social media)
function getOtherLinkDisplayName(link) {
  const url = link.value;

  if (!url) return 'Link';

  try {
    // Parse the URL to extract the domain name
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    // Remove www. prefix
    const cleanHostname = hostname.replace(/^www\./, '');

    // Extract domain name (remove subdomains for common services)
    const domainParts = cleanHostname.split('.');
    let domain = cleanHostname;

    // Handle common domains - show main domain for known services
    if (domainParts.length > 2) {
      const mainDomain = domainParts.slice(-2).join('.');
      if (['github.com', 'bitbucket.org', 'gitlab.com', 'stackoverflow.com', 'medium.com', 'dev.to', 'codepen.io', 'jsfiddle.net', 'repl.it', 'codesandbox.io'].includes(mainDomain)) {
        domain = mainDomain;
      }
    }

    // Return domain in original case
    return domain;

  } catch (error) {
    // If URL parsing fails, show "Website" as fallback
    return 'Website';
  }
}


// Open phone app with number; copy as fallback
async function onDial(p) {
  const raw = (p?.number || '').toString().trim()
  if (!raw) return
  const digits = raw.replace(/[^+0-9]/g, '')
  try { await navigator.clipboard?.writeText?.(raw) } catch { }
  try {
    window.location.href = `tel:${encodeURIComponent(digits)}`
  } catch {
    // If tel: not supported, keep clipboard copy as fallback
  }
}

// Send email
function sendEmail(email) {
  if (!email?.value) return
  try {
    window.location.href = `mailto:${encodeURIComponent(email.value)}`
  } catch (error) {
    console.error("Error opening email client:", error)
    // Fallback: copy email to clipboard
    try {
      navigator.clipboard?.writeText?.(email.value)
    } catch { }
  }
}

// Open social media link
function openSocialLink(social) {
  if (!social?.value) return
  try {
    window.open(social.value, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error("Error opening social link:", error)
    // Fallback: copy link to clipboard
    try {
      navigator.clipboard?.writeText?.(social.value)
    } catch { }
  }
}

// Open other link
function openOtherLink(other) {
  if (!other?.value) return
  try {
    window.open(other.value, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error("Error opening link:", error)
    // Fallback: copy link to clipboard
    try {
      navigator.clipboard?.writeText?.(other.value)
    } catch { }
  }
}


</script>

<script>
// Reusable local components
export default {
  components: {
    LinkRow: {
      props: { icon: String, value: String, enabled: Boolean, actions: Array },
      emits: ['toggle'],
      template: `
        <div class="flex items-center gap-3 px-3 py-3 bg-white">
          <img :src="icon" class="w-5 h-5" alt="icon" />
          <div class="flex-1 text-sm">{{ value }}</div>
          <div class="flex items-center gap-2">
            <template v-for="(a, i) in (actions || [])">
              <img :key="i" :src="a.icon" :title="a.title" class="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
            </template>
            <button @click="$emit('toggle')" class="w-10 h-6 rounded-full bg-gray-300 relative">
              <span :class="['absolute top-0.5 transition-all h-5 w-5 rounded-full', enabled ? 'right-0.5 bg-green-500' : 'left-0.5 bg-white']"></span>
            </button>
          </div>
        </div>
      `,
    },
    AddRow: {
      props: { label: String, placeholder: String },
      emits: ['add'],
      data() { return { input: '' } },
      methods: {
        onAdd() { if (!this.input) return; this.$emit('add', this.input); this.input = ''; },
      },
      template: `
        <div class="mt-2">
          <div class="flex items-center gap-2 px-3 py-2 text-sm opacity-80">
            <img src="/icons/add.png" class="w-4 h-4" />
            <span>{{ label }}</span>
          </div>
          <div class="flex gap-2 px-3 pb-2">
            <input id="add-input" name="add-input" :placeholder="placeholder" v-model="input" class="flex-1 h-10 rounded-lg border border-gray-300 px-3" />
            <button @click="onAdd" class="px-3 h-10 rounded-lg bg-black text-white">Add</button>
          </div>
        </div>
      `,
    },
    Modal
  }
}
</script>

<style scoped>
/* Custom scrollbar for mobile */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Mobile-specific improvements */
@media (max-width: 768px) {
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: #94a3b8;
  }

  /* Better touch targets for mobile */
  button {
    min-height: 25px;
  }

  /* Improve dropdown positioning on mobile */
  .relative {
    position: relative;
  }
}
</style>

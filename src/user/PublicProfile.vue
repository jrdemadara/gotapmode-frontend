<template>
  <div class="min-h-svh flex flex-col items-center gap-6 px-8 sm:px-8 pb-16 pt-10">
    <!-- Brand -->
    <div class="text-center">
      <img class="w-16 h-16 mx-auto mb-2" src="/logo/GoTapMode.png" alt="Go Tap Mode" />
      <h1 class="m-0 text-2xl font-extrabold tracking-tight">Go Tap Mode</h1>
      <p class="mt-1 text-sm opacity-70">Activate Connection Instantly</p>
    </div>

    <!-- Profile card -->
    <section class="w-full max-w-md bg-white text-gray-900 border border-gray-100 shadow-card rounded-2xl p-6">
      <div class="text-center">
        <img class="w-40 h-40 rounded-full object-cover border-[2px] border-gray-300 mx-auto" :src="profile.photo || '/icons/user.png'" :alt="`${profile.name || 'User'} profile picture`" />
        <h2 class="mt-4 text-xl font-extrabold">{{ profile.name || 'User' }}</h2>
        <p class="text-sm opacity-80" v-if="profile.company">{{ profile.company }}</p>
        <p class="text-sm opacity-70 text-blue-500 font-bold" v-if="profile.position">{{ profile.position }}</p>
        <p class="text-sm opacity-70 mt-2 max-w-xs mx-auto leading-relaxed" v-if="profile.bio">{{ profile.bio }}</p>
      </div>

      <!-- Actions row: Phone, Email, Social(main), Web -->
      <div class="mt-4 flex items-center justify-center gap-5">
        <button :disabled="!mainPhone" @click="dialMain" class="w-12 h-12 rounded-full bg-black flex items-center justify-center disabled:opacity-40">
          <img src="/icons/phone-call.png" class="w-5 h-5 invert" alt="call" />
        </button>
        <button :disabled="!mainEmail" @click="emailMain" class="w-12 h-12 rounded-full bg-black flex items-center justify-center disabled:opacity-40">
          <img src="/icons/email.png" class="w-5 h-5 invert" alt="email" />
        </button>
        <button :disabled="!mainSocial" @click="openMainSocial" class="w-12 h-12 rounded-full bg-black flex items-center justify-center disabled:opacity-40">
          <img :src="socialIcon(mainSocial?.platform)" class="w-5 h-5 filter invert" alt="social" />
        </button>
        <button :disabled="!mainWeb" @click="openMainWeb" class="w-12 h-12 rounded-full bg-black flex items-center justify-center disabled:opacity-40">
          <img src="/icons/web.png" class="w-5 h-5 invert" alt="web" />
        </button>
      </div>

      <button @click="saveToContacts" class="mt-4 w-full h-10 rounded-md bg-gray-900 text-white text-sm font-semibold flex items-center justify-center gap-2">
        <img src="/icons/user.png" alt="save to contacts" class="w-6 h- invert" />
        <span>Save to Contacts</span>
      </button>
    </section>

    <!-- Social Links -->
    <section v-if="socials.length" class="w-full max-w-md">
      <h3 class="text-sm font-bold mb-2 opacity-70">Social Links</h3>
      <div class="space-y-2">
        <button v-for="(s, i) in socials" :key="i" @click="openUrl(s.value)" class="w-full h-11 rounded-lg border border-gray-200 flex items-center gap-3 px-3 text-sm bg-gray-100">
          <img :src="socialIcon(s.platform)" class="w-4 h-4" alt="social" />
          <span>{{ socialLabel(s.platform) }}</span>
        </button>
      </div>
    </section>

    <!-- Other Links -->
    <section v-if="others.length" class="w-full max-w-md">
      <h3 class="text-sm font-bold mb-2 opacity-70">Other Links</h3>
      <div class="space-y-2">
        <button v-for="(o, i) in others" :key="i" @click="openUrl(o.value)" class="w-full h-11 rounded-lg border border-gray-200 flex items-center gap-3 px-3 text-sm bg-gray-100">
          <img src="/icons/web.png" class="w-4 h-4" alt="web" />
          <span>{{ cleanUrl(o.value) }}</span>
        </button>
      </div>
    </section>
  </div>
  
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../config/api'
import { updatePageTitle, updateMetaDescription, updateOpenGraphTags, generateStructuredData } from '../utils/seo.js'

const route = useRoute()
const router = useRouter()

const profile = ref({ photo: '', name: '', company: '', bio: '' })
const phones = ref([])
const emails = ref([])
const socials = ref([])
const others = ref([])

const mainPhone = computed(() => phones.value.find(p => p.isMain) || phones.value[0] || null)
const mainEmail = computed(() => emails.value.find(e => e.isMain) || emails.value[0] || null)
const mainWeb = computed(() => others.value.find(o => o.isMain) || others.value[0] || null)
const mainSocial = computed(() => socials.value.find(s => s.isMain) || socials.value[0] || null)

onMounted(async () => {
  const hash = route.params.code
  
  if (!hash) {
    console.log('No hash provided, redirecting to card validation')
    router.push({ 
      name: 'card-validation', 
      query: { error: 'Please scan your NFC card to access this profile.' } 
    })
    return
  }

  try {
    // Validate hash and get card data
    const response = await api.get(`/cards/validate-hash/${hash}`)
    
    if (!response.valid) {
      console.error('Invalid hash:', response.message)
      router.push({ 
        name: 'card-validation', 
        query: { error: 'Invalid card. Please scan a valid NFC card.' } 
      })
      return
    }

    const card = response.card

    // Check if card is expired
    if (card.expiry_date) {
      const expiryDate = new Date(card.expiry_date)
      const now = new Date()
      
      if (expiryDate < now) {
        // Card is expired, show error and redirect
        router.push({ 
          name: 'card-validation', 
          query: { error: 'Card expired. This card is no longer valid.' } 
        })
        return
      }
    }

    const userId = card.card_user_id
    if (!userId) {
      console.error('Card found but no user linked:', card)
      return
    }

    // Load all data in parallel for maximum speed
    const [c, pd, pr] = await Promise.all([
      api.get(`/contacts/${userId}`),
      api.get(`/card-users/personal-data/${userId}`).catch(() => null),
      api.get(`/card-users/profile/${userId}`).catch(() => null),
    ])

    // Update all data simultaneously
    phones.value = (c.phones || []).map(r => ({ id: r.id, number: r.phonenumber, type: r.type, isMain: !!r.is_main }))
    emails.value = (c.emails || []).map(r => ({ id: r.id, value: r.email, isMain: !!r.is_main }))
    socials.value = (c.socials || []).map(r => ({ id: r.id, platform: r.type || 'link', value: r.social, isMain: !!r.is_main }))
    others.value = (c.others || []).map(r => ({ id: r.id, value: r.others, isMain: !!r.is_main }))

    // Update profile data
    if (pd?.full_name) profile.value.name = pd.full_name
    if (pr?.profile_pic) {
      profile.value.photo = pr.profile_pic
      console.log('Loaded profile pic:', pr.profile_pic)
      console.log('Profile pic type:', typeof pr.profile_pic)
      if (pr.profile_pic) {
        console.log('Profile pic starts with data:', pr.profile_pic.startsWith('data:'))
        console.log('Profile pic starts with http:', pr.profile_pic.startsWith('http'))
      }
    }
    if (pr?.company) profile.value.company = pr.company
    if (pr?.position) profile.value.position = pr.position
    if (pr?.bio) profile.value.bio = pr.bio

    // Update SEO after loading profile data
    updateSEOForProfile()
  } catch (err) {
    console.error('Error loading profile:', err)
    router.push({ 
      name: 'card-validation', 
      query: { error: 'Failed to load profile. Please try again.' } 
    })
  }
})

function updateSEOForProfile() {
  const fullName = profile.value.name || 'User'
  const company = profile.value.company || ''
  const position = profile.value.position || ''
  const bio = profile.value.bio || ''
  
  // Create SEO-friendly title and description
  const title = `${fullName}${company ? ` - ${company}` : ''}${position ? ` (${position})` : ''} | GoTapMode`
  const description = bio || `${fullName}${company ? ` from ${company}` : ''}${position ? ` - ${position}` : ''}. Connect instantly with GoTapMode digital business cards.`
  
  // Update page title and meta description
  updatePageTitle(title)
  updateMetaDescription(description)
  
  // Update Open Graph tags
  updateOpenGraphTags({
    title,
    description,
    image: profile.value.photo || 'https://gotapmode.info/logo/GoTapMode.png',
    url: window.location.href
  })
  
  // Add structured data
  const structuredData = generateStructuredData(profile.value)
  let scriptTag = document.querySelector('script[type="application/ld+json"]')
  if (!scriptTag) {
    scriptTag = document.createElement('script')
    scriptTag.type = 'application/ld+json'
    document.head.appendChild(scriptTag)
  }
  scriptTag.textContent = JSON.stringify(structuredData)
}

function dialMain() {
  const n = mainPhone.value?.number
  if (!n) return
  const digits = String(n).replace(/[^+0-9]/g, '')
  try { navigator.clipboard?.writeText?.(String(n)) } catch {}
  window.location.href = `tel:${encodeURIComponent(digits)}`
}

function emailMain() {
  const e = mainEmail.value?.value
  if (!e) return
  try { navigator.clipboard?.writeText?.(String(e)) } catch {}
  window.location.href = `mailto:${encodeURIComponent(e)}`
}

function openMainWeb() {
  const u = mainWeb.value?.value
  if (!u) return
  openUrl(u)
}

function openMainSocial() {
  const s = mainSocial.value
  if (!s?.value) return
  openUrl(s.value)
}

function openUrl(u) {
  let url = String(u || '')
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url
  window.open(url, '_blank', 'noopener,noreferrer')
}

function cleanUrl(u) {
  try { return new URL(/^https?:\/\//i.test(u) ? u : 'https://' + u).host } catch { return u }
}

// Helper function to convert image URL to base64
async function imageUrlToBase64(url) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error('Error converting image to base64:', error)
    return null
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
    wechat: '/icons/wechat.png',
    whatsapp: '/icons/whatsapp.png',

  }
  return map[platform] || '/icons/web.png'
}

function socialLabel(platform) {
  const labels = {
    facebook: 'Follow us on Facebook',
    twitter: 'Follow us on X',
    instagram: 'Follow us on Instagram',
    linkedin: 'Connect on LinkedIn',
    reddit: 'Join us on Reddit',
    tiktok: 'Follow us on TikTok',
    youtube: 'Subscribe on YouTube',
    discord: 'Join our Discord',
    telegram: 'Chat on Telegram',
    skype: 'Chat on Skype',
    snapchat: 'Chat on Snapchat',
    viber: 'Chat on Viber',
    wechat: 'Chat on WeChat',
    whatsapp: 'Chat on WhatsApp',

  }
  return labels[platform] || 'Open link'
}

async function saveToContacts() {
  const fullName = profile.value.name || 'Contact'
  const org = profile.value.company || ''
  
  // Debug: Log photo information
  console.log('Photo data:', profile.value.photo)
  console.log('Photo type:', typeof profile.value.photo)
  if (profile.value.photo) {
    console.log('Photo starts with data:', profile.value.photo.startsWith('data:'))
    console.log('Photo starts with http:', profile.value.photo.startsWith('http'))
  }
  
  // Clean and validate the full name for iOS compatibility
  const cleanName = fullName.trim().replace(/[^\w\s-]/g, '') || 'Contact'

  const normalizeUrl = (u) => {
    if (!u) return ''
    const s = String(u)
    return /^https?:\/\//i.test(s) ? s : 'https://' + s
  }

  const phoneTypeToken = (t) => {
    switch ((t || '').toLowerCase()) {
      case 'business': return 'WORK,CELL'
      case 'personal': return 'HOME,CELL'
      case 'telephone': return 'VOICE,HOME'
      default: return 'CELL'
    }
  }

  const phoneLines = phones.value.map(p => `TEL;TYPE=${phoneTypeToken(p.type)}:${String(p.number).replace(/\s+/g,'')}`)
  const emailLines = emails.value.map(e => `EMAIL;TYPE=INTERNET:${e.value}`)

  const socialLines = socials.value.flatMap(s => {
    const url = normalizeUrl(s.value)
    if (!url) return []
    const type = (s.platform || 'social').toUpperCase()
    return [
      `URL:${url}`,
      `X-SOCIALPROFILE;TYPE=${type}:${url}`,
    ]
  })

  const webLines = others.value.map(o => {
    const url = normalizeUrl(o.value)
    return url ? `URL:${url}` : ''
  }).filter(Boolean)

  // iOS-compatible photo format - use base64 encoding for better compatibility
  let photoLine = ''
  if (profile.value.photo) {
    // Handle different photo formats
    if (profile.value.photo.startsWith('data:image/')) {
      // It's already a base64 data URL
      const base64Data = profile.value.photo.split(',')[1]
      if (base64Data) {
        photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64Data}`
        console.log('Using base64 data URL photo')
      }
    } else if (profile.value.photo.startsWith('http')) {
      // It's a URL - convert to base64 for better compatibility
      try {
        const base64Data = await imageUrlToBase64(profile.value.photo)
        if (base64Data) {
          const base64String = base64Data.split(',')[1]
          photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64String}`
          console.log('Converted URL to base64 photo')
        } else {
          // Fallback to URI format if conversion fails
          photoLine = `PHOTO;VALUE=URI:${profile.value.photo}`
          console.log('Using URI photo format as fallback')
        }
      } catch (err) {
        console.warn('Could not convert photo URL to base64:', err)
        photoLine = `PHOTO;VALUE=URI:${profile.value.photo}`
        console.log('Using URI photo format due to conversion error')
      }
    } else {
      // Assume it's already base64 data
      photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${profile.value.photo}`
      console.log('Using raw base64 photo data')
    }
  }
  
  console.log('Final photo line:', photoLine)

  const v = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${cleanName}`,
    `N:${cleanName};;;;`, // Structured name format for iOS
    (org ? `ORG:${org}` : ''),
    ...(photoLine ? [photoLine] : []), // Only include photo line if it exists
    ...phoneLines,
    ...emailLines,
    ...socialLines,
    ...webLines,
    'END:VCARD',
  ].filter(Boolean).join('\n')
  
  console.log('vCard content preview:', v.substring(0, 500) + '...')

  const blob = new Blob([v], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${cleanName.replace(/[^a-z0-9_-]+/gi,'_')}.vcf`
  
  console.log('Downloading vCard with size:', blob.size, 'bytes')
  console.log('Photo included:', !!photoLine)
  
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}
</script>

<style scoped></style>



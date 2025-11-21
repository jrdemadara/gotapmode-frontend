<template>
  <div class="min-h-svh flex flex-col items-center px-8 sm:px-12 pb-16 pt-0 relative">

    <!-- Profile header -->
    <div class="w-full mb-6">
      <!-- Mobile: edge-to-edge; Desktop: align to contacts (max-w-2xl) -->
      <div class="-mx-8 relative sm:mx-auto sm:max-w-2xl sm:w-full">
        <div v-if="profile.cover" class="w-full h-56 sm:h-64">
          <img :src="profile.cover" alt="cover"
            class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-full h-56 sm:h-64 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex flex-col items-center justify-start pt-4 relative overflow-hidden">
          <!-- Subtle pattern overlay -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
            <div class="absolute top-8 right-8 w-6 h-6 border border-white/20 rounded-full"></div>
            <div class="absolute bottom-12 left-12 w-4 h-4 border border-white/20 rounded-full"></div>
            <div class="absolute bottom-8 right-16 w-10 h-10 border border-white/20 rounded-full"></div>
          </div>
          
          <!-- GoTapMode branded icon -->
          <div class="relative z-10 flex flex-col items-center">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 border border-white/20">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span class="text-white/90 text-sm font-semibold tracking-wide">Upload Cover Photo</span>
            <span class="text-white/60 text-xs mt-1">Make your profile stand out</span>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
        <!-- Circular profile avatar overlapping bottom-left -->
        <img :src="profile.photo || '/icons/user.png'" alt="avatar"
          class="absolute left-1/2 -translate-x-1/2 -bottom-14 sm:-bottom-16 w-35 h-35 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-xl" />
      </div>
      <!-- Details under the profile photo, centered -->
      <div class="mt-15 sm:mt-16 px-6 sm:px-0 text-center sm:max-w-2xl sm:mx-auto">
        <h2 class="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">{{ formatPosition(profile.name) }}</h2>
        <div class="mt-0 sm:mt-1 text-sm sm:text-base text-gray-700">
          <p v-if="profile.company">{{ formatPosition(profile.company) }}</p>
          <p v-if="profile.position" class="mt-0 sm:mt-0.5 text-blue-600">{{ formatPosition(profile.position) }}</p>
        </div>
        <p v-if="profile.bio" class="mt-0.5 sm:mt-1 text-sm text-gray-700 max-w-3xl mx-auto">{{ profile.bio }}</p>
      </div>
    </div>

    <!-- Contact Actions Section -->
    <div class="w-full max-w-md">
      <!-- Actions row: Phone, Email, Social(main), Web -->
      <div class="mb-4 flex items-center justify-center gap-5">
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

      <button @click="saveToContacts" class="w-full h-10 rounded-md bg-gray-900 text-white text-sm font-semibold flex items-center justify-center gap-2 mb-6">
        <img src="/icons/user.png" alt="save to contacts" class="w-6 h- invert" />
        <span>Save to Contacts</span>
      </button>
    </div>

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
          <span>{{ getOtherLinkDisplayName(o) }}</span>
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
import { processProfileImage } from '../utils/imageUtils'

const route = useRoute()
const router = useRouter()

const profile = ref({ photo: '', cover: '', name: '', company: '', bio: '', position: '' })
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

    // Use batch endpoint to load all data in a single request (optimized)
    try {
      const batchData = await api.get(`/card-users/public-data/${userId}`)
      
      const c = batchData.contacts || { phones: [], emails: [], socials: [], others: [] }
      const pd = batchData.personal_data || null
      const pr = batchData.profile || null

      // Update all data simultaneously
      phones.value = (c.phones || []).map(r => ({ id: r.id, number: r.phonenumber, type: r.type, isMain: !!r.is_main }))
      emails.value = (c.emails || []).map(r => ({ id: r.id, value: r.email, isMain: !!r.is_main }))
      socials.value = (c.socials || []).map(r => ({ id: r.id, platform: r.type || 'link', value: r.social, isMain: !!r.is_main })).sort((a, b) => a.id - b.id)
      others.value = (c.others || []).map(r => ({ id: r.id, value: r.others, isMain: !!r.is_main })).sort((a, b) => a.id - b.id)

      // Update profile data
      if (pd?.full_name) profile.value.name = pd.full_name
      if (pr?.profile_pic) {
        profile.value.photo = processProfileImage(pr.profile_pic)
      }
      if (pr?.cover_pic) {
        profile.value.cover = processProfileImage(pr.cover_pic)
      }
      if (pr?.company) profile.value.company = pr.company
      if (pr?.position) profile.value.position = pr.position
      if (pr?.bio) profile.value.bio = pr.bio

      // Update SEO after loading profile data
      updateSEOForProfile()
    } catch (batchErr) {
      // Fallback to individual requests if batch endpoint fails
      console.warn('Batch endpoint failed, falling back to individual requests:', batchErr)
      try {
        const [c, pd, pr] = await Promise.all([
          api.get(`/contacts/${userId}`),
          api.get(`/card-users/personal-data/${userId}`).catch(() => null),
          api.get(`/card-users/profile/${userId}`).catch(() => null),
        ])
        
        phones.value = (c.phones || []).map(r => ({ id: r.id, number: r.phonenumber, type: r.type, isMain: !!r.is_main }))
        emails.value = (c.emails || []).map(r => ({ id: r.id, value: r.email, isMain: !!r.is_main }))
        socials.value = (c.socials || []).map(r => ({ id: r.id, platform: r.type || 'link', value: r.social, isMain: !!r.is_main })).sort((a, b) => a.id - b.id)
        others.value = (c.others || []).map(r => ({ id: r.id, value: r.others, isMain: !!r.is_main })).sort((a, b) => a.id - b.id)

        if (pd?.full_name) profile.value.name = pd.full_name
        if (pr?.profile_pic) profile.value.photo = processProfileImage(pr.profile_pic)
        if (pr?.cover_pic) profile.value.cover = processProfileImage(pr.cover_pic)
        if (pr?.company) profile.value.company = pr.company
        if (pr?.position) profile.value.position = pr.position
        if (pr?.bio) profile.value.bio = pr.bio

        updateSEOForProfile()
      } catch (fallbackErr) {
        console.error('Fallback requests also failed:', fallbackErr)
        router.push({ 
          name: 'card-validation', 
          query: { error: 'Failed to load profile. Please try again.' } 
        })
      }
    }
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
  try { 
    const url = new URL(/^https?:\/\//i.test(u) ? u : 'https://' + u)
    return url.host.replace(/^www\./, '')
  } catch { return u }
}

// Get smart display name for other links (same as dashboard)
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

// Helper function to convert image URL to base64
async function imageUrlToBase64(url) {
  try {
    // Add cache busting to ensure we get the latest image
    const urlWithCacheBust = url.includes('?') ? `${url}&cb=${Date.now()}` : `${url}?cb=${Date.now()}`
    
    const response = await fetch(urlWithCacheBust, {
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'image/*'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const blob = await response.blob()
    
    // Check if it's actually an image
    if (!blob.type.startsWith('image/')) {
      throw new Error('Response is not an image')
    }
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.onerror = (error) => {
        console.error('FileReader error:', error)
        reject(error)
      }
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

  // Enhanced photo handling for VCF
  let photoLine = ''
  if (profile.value.photo) {
    try {
      // Handle different photo formats
      if (profile.value.photo.startsWith('data:image/')) {
        // It's already a base64 data URL
        const base64Data = profile.value.photo.split(',')[1]
        if (base64Data) {
          photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64Data}`
        }
      } else if (profile.value.photo.startsWith('http')) {
        // It's a URL - try to convert to base64
        try {
          const base64Data = await imageUrlToBase64(profile.value.photo)
          if (base64Data && base64Data.includes(',')) {
            const base64String = base64Data.split(',')[1]
            photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64String}`
          } else {
            // Fallback to URI format
            photoLine = `PHOTO;VALUE=URI:${profile.value.photo}`
          }
        } catch (err) {
          console.warn('Failed to convert photo to base64, using URI:', err)
          photoLine = `PHOTO;VALUE=URI:${profile.value.photo}`
        }
      } else {
        // Assume it's already base64 data
        photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${profile.value.photo}`
      }
    } catch (err) {
      console.error('Error processing photo for VCF:', err)
      // Don't include photo if there's an error
    }
  }

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

  const blob = new Blob([v], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${cleanName.replace(/[^a-z0-9_-]+/gi,'_')}.vcf`
  
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}

function formatPosition(position) {
  if (!position) return ''
  return position.toLowerCase().split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}
</script>

<style scoped></style>



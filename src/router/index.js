import { createRouter, createWebHistory } from 'vue-router'

// Route-based code splitting with dynamic imports
// This reduces initial bundle size by loading components only when needed
const routes = [
  // Landing pages (loaded immediately for fast initial load)
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../landingpages/Landing.vue') 
  },
  { 
    path: '/get-card', 
    name: 'landing-get-card', 
    component: () => import('../landingpages/Landing.vue') 
  },
  { 
    path: '/contact', 
    name: 'contact', 
    component: () => import('../landingpages/Contact.vue') 
  },
  { 
    path: '/how-it-works', 
    name: 'how-it-works', 
    component: () => import('../landingpages/HowItWorks.vue') 
  },
  
  // Public user routes (lazy loaded)
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('../user/userlogin.vue') 
  },
  { 
    path: '/signup', 
    name: 'signup', 
    component: () => import('../user/Signup.vue') 
  },
  { 
    path: '/forgot-password', 
    name: 'forgot-password', 
    component: () => import('../user/ForgotPassword.vue') 
  },
  { 
    path: '/verify-reset-code', 
    name: 'verify-reset-code', 
    component: () => import('../user/VerifyResetCode.vue') 
  },
  { 
    path: '/set-new-password', 
    name: 'set-new-password', 
    component: () => import('../user/SetNewPassword.vue') 
  },
  { 
    path: '/activate', 
    name: 'activate', 
    component: () => import('../user/Activate.vue') 
  },
  { 
    path: '/card-validation', 
    name: 'card-validation', 
    component: () => import('../user/CardValidation.vue') 
  },
  { 
    path: '/:activationCode', 
    name: 'nfc-card', 
    component: () => import('../user/CardValidation.vue') 
  },
  { 
    path: '/p/:code', 
    name: 'public-profile', 
    component: () => import('../user/PublicProfile.vue') 
  },
  
  // Authenticated user routes (lazy loaded)
  { 
    path: '/profile-setup', 
    name: 'profile-setup', 
    component: () => import('../user/ProfileSetup.vue'), 
    meta: { requiresUser: true } 
  },
  { 
    path: '/profile-details', 
    name: 'profile-details', 
    component: () => import('../user/ProfileDetails.vue'), 
    meta: { requiresUser: true } 
  },
  { 
    path: '/dashboard', 
    name: 'dashboard', 
    component: () => import('../user/UserDashboard.vue'), 
    meta: { requiresUser: true } 
  },
  { 
    path: '/edit-profile', 
    name: 'edit-profile', 
    component: () => import('../user/EditProfile.vue'), 
    meta: { requiresUser: true } 
  },
  { 
    path: '/change-password', 
    name: 'change-password', 
    component: () => import('../user/ChangePassword.vue'), 
    meta: { requiresUser: true } 
  },
  
  // Admin routes (lazy loaded - largest components)
  { 
    path: '/admin/forgot-password', 
    name: 'admin-forgot-password', 
    component: () => import('../admin/ForgotPassword.vue') 
  },
  { 
    path: '/admin/verify-reset-code', 
    name: 'admin-verify-reset-code', 
    component: () => import('../admin/VerifyResetCode.vue') 
  },
  { 
    path: '/admin/set-new-password', 
    name: 'admin-set-new-password', 
    component: () => import('../admin/SetNewPassword.vue') 
  },
  { 
    path: '/admin/dashboard', 
    name: 'admin-dashboard', 
    component: () => import('../admin/Dashboard.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/users', 
    name: 'admin-users', 
    component: () => import('../admin/Users.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/users/:id/edit', 
    name: 'admin-edit-user', 
    component: () => import('../admin/EditUser.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/administrators', 
    name: 'admin-administrators', 
    component: () => import('../admin/Administrators.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/nfc-writing', 
    name: 'admin-nfc-writing', 
    component: () => import('../admin/NFCWriting.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/card-clear', 
    name: 'admin-card-clear', 
    component: () => import('../admin/CardClear.vue'), 
    meta: { requiresAdmin: true } 
  },
  { 
    path: '/admin/nfc-cards', 
    name: 'admin-nfc-cards', 
    component: () => import('../admin/NFCCards.vue'), 
    meta: { requiresAdmin: true } 
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => { // eslint-disable-line no-unused-vars
  if (to.meta?.requiresAdmin) {
    try {
      const token = localStorage.getItem('gtm_admin_token')
      const userRaw = localStorage.getItem('gtm_admin_user')
      const user = userRaw ? JSON.parse(userRaw) : null
      if (!token || !user) return next({ name: 'login', query: { redirect: to.fullPath } })
    } catch {}
  }
  
  if (to.meta?.requiresUser) {
    try {
      const token = localStorage.getItem('gtm_token')
      const userRaw = localStorage.getItem('gtm_user')
      const user = userRaw ? JSON.parse(userRaw) : null
      if (!token || !user) return next({ name: 'login', query: { redirect: to.fullPath } })
    } catch {}
  }
  
  next()
})



import { createRouter, createWebHistory } from 'vue-router'
import Login from '../user/userlogin.vue'
import Signup from '../user/Signup.vue'
import Activate from '../user/Activate.vue'
import CardValidation from '../user/CardValidation.vue'
import ProfileSetup from '../user/ProfileSetup.vue'
import ProfileDetails from '../user/ProfileDetails.vue'
import UserDashboard from '../user/UserDashboard.vue'
import EditProfile from '../user/EditProfile.vue'
import PublicProfile from '../user/PublicProfile.vue'
import AdminDashboard from '../admin/Dashboard.vue'
import AdminUsers from '../admin/Users.vue'
import EditUser from '../admin/EditUser.vue'
import NfcWriting from '../admin/NFCWriting.vue'
import Administrators from '../admin/Administrators.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/activate', name: 'activate', component: Activate },
  { path: '/card-validation', name: 'card-validation', component: CardValidation },
  { path: '/:activationCode', name: 'nfc-card', component: CardValidation },
  { path: '/profile-setup', name: 'profile-setup', component: ProfileSetup },
  { path: '/profile-details', name: 'profile-details', component: ProfileDetails },
  { path: '/dashboard', name: 'dashboard', component: UserDashboard },
  { path: '/edit-profile', name: 'edit-profile', component: EditProfile },
  { path: '/p/:code', name: 'public-profile', component: PublicProfile },
  { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboard, meta: { requiresAdmin: true } },
  { path: '/admin/users', name: 'admin-users', component: AdminUsers, meta: { requiresAdmin: true } },
  { path: '/admin/users/:id/edit', name: 'admin-edit-user', component: EditUser, meta: { requiresAdmin: true } },
  { path: '/admin/administrators', name: 'admin-administrators', component: Administrators, meta: { requiresAdmin: true } },
  { path: '/admin/nfc-writing', name: 'admin-nfc-writing', component: NfcWriting, meta: { requiresAdmin: true } },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta?.requiresAdmin) {
    try {
      const token = localStorage.getItem('gtm_admin_token')
      const userRaw = localStorage.getItem('gtm_admin_user')
      const user = userRaw ? JSON.parse(userRaw) : null
      if (!token || !user) return next({ name: 'login', query: { redirect: to.fullPath } })
    } catch {}
  }
  next()
})



import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import './style.css'
import { initIdleLogout } from './utils/idle.js'
import VueApexCharts from 'vue3-apexcharts'

// FORCE LIGHT THEME - JavaScript approach
function forceLightTheme() {
  const root = document.documentElement;

  // Set CSS custom properties for light theme
  root.style.setProperty('--bg-primary', '#ffffff');
  root.style.setProperty('--bg-secondary', '#f9fafb');
  root.style.setProperty('--bg-tertiary', '#f3f4f6');
  root.style.setProperty('--bg-accent', '#000000');
  root.style.setProperty('--text-primary', '#111827');
  root.style.setProperty('--text-secondary', '#374151');
  root.style.setProperty('--text-accent', '#ffffff');
  root.style.setProperty('--border-primary', '#d1d5db');

  // Force light color scheme
  document.documentElement.style.colorScheme = 'light only';
  document.documentElement.setAttribute('data-theme', 'light');

  // Override any system dark mode detection
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery.matches) {
    // User has dark mode enabled, but we force light mode
    console.log('System dark mode detected - forcing light mode');
  }
}

// Apply theme immediately
forceLightTheme();

// Listen for any dynamic theme changes
window.addEventListener('load', forceLightTheme);
window.addEventListener('DOMContentLoaded', forceLightTheme);

const app = createApp(App)
app.use(router)
app.component('apexchart', VueApexCharts)
app.mount('#app')

// Idle logout after 3 minutes, but not on the login page
let idleController = null
function startIdle() {
  if (idleController) return
  idleController = initIdleLogout({
    idleMs: 10 * 60 * 1000, // 3 minutes
    onTimeout: async () => {
      try {
        // Try to logout via API if user is logged in
        const token = localStorage.getItem('gtm_token')
        if (token) {
          const { userApi } = await import('./config/api')
          await userApi.logout()
        }
      } catch (e) {
        console.log('Idle logout API call failed:', e)
      }
      localStorage.removeItem('gtm_token')
      localStorage.removeItem('gtm_user')
      window.dispatchEvent(new CustomEvent('gtm:session-timeout'))
    },
  })
}
function stopIdle() {
  try { idleController?.cleanup?.() } catch {}
  idleController = null
}
function updateIdle(to) {
  const routeName = (to?.name || router.currentRoute.value.name)
  const onLogin = routeName === 'login'
  if (onLogin) stopIdle()
  else startIdle()
}
updateIdle(router.currentRoute.value)
router.afterEach((to) => updateIdle(to))



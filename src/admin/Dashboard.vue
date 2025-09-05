<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
    <!-- Hamburger button -->
    <button @click="showSidebar = !showSidebar" class="absolute left-3 sm:left-4 top-3 sm:top-4 z-50 w-12 h-12 sm:w-10 sm:h-10 rounded-xl sm:rounded-lg border-2 sm:border border-gray-300 bg-white/95 backdrop-blur flex flex-col items-center justify-center gap-1.5 sm:gap-1 shadow-lg hover:shadow-xl transition-all duration-200">
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
      <span class="block w-6 sm:w-5 h-0.5 bg-gray-700"></span>
    </button>

    <main class="max-w-7xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
      <!-- Dashboard Header -->
      <div class="bg-white/95 backdrop-blur rounded-2xl border-2 sm:border border-gray-300 shadow-lg px-6 py-2 sm:px-4 sm:py-5 mt-16 sm:mt-20">
        <div class="flex items-center justify-center gap-4">
          <img src="/logo/GoTapMode.png" alt="GoTapMode Logo" class="w-12 h-12 sm:w-16 sm:h-16" />
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-2">GoTapMode</div>
            <div class="text-lg sm:text-xl text-gray-600 leading-tight">Activate Connection Instantly</div>
          </div>
        </div>
      </div>

      <div v-if="loading || error" class="bg-white rounded-2xl shadow p-6 text-center">
        <div v-if="loading">Loading admin dashboard…</div>
        <div v-else class="text-red-600">{{ error }}</div>
      </div> 
      
      <template v-else>
        <!-- Main Metrics - Responsive Grid -->
        <section>
          <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            <!-- Registered Users -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Registered Users</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ stats.totals.card_users }}</div>
                <div class="text-[9px] sm:text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                  Today: {{ last(stats.series?.data?.card_users) }}
                </div>
              </div>
            </div>

            <!-- Cards -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Cards</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ stats.totals.cards }}</div>
                <div class="text-[9px] sm:text-xs text-purple-600 font-medium bg-purple-50 px-2 py-0.5 rounded-full">
                  Today: {{ last(stats.series?.data?.cards) }}
                </div>
              </div>
            </div>

            <!-- Activated -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Activated</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ stats.totals.activated_cards }}</div>
                <div class="text-[9px] sm:text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                  Today: {{ last(stats.series?.data?.activations) }}
                </div>
              </div>
            </div>

            <!-- Expired Cards -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Expired Cards</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ stats.totals.expired_cards }}</div>
                <div class="text-[9px] sm:text-xs text-orange-600 font-medium bg-orange-50 px-2 py-0.5 rounded-full">
                  Expired
                </div>
              </div>
            </div>

            <!-- Unactivated -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Unactivated</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ unactivatedCards }}</div>
                <div class="text-[9px] sm:text-xs text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded-full">
                  Pending
                </div>
              </div>
            </div>

            <!-- Taps / Day -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Taps / Day</div>
                <div class="text-lg sm:text-xl font-extrabold text-gray-900 mb-1">{{ last(stats.series?.data?.taps) }}</div>
                <div class="text-[9px] sm:text-xs text-pink-600 font-medium bg-pink-50 px-2 py-0.5 rounded-full">
                  vs. yesterday: {{ deltaSign(last(stats.series?.data?.taps) - secondLast(stats.series?.data?.taps)) }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Metrics - Responsive Grid -->
        <section>
          <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <!-- Emails -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Emails</div>
                <div class="text-base sm:text-lg font-extrabold text-gray-900">{{ stats.totals.emails }}</div>
              </div>
            </div>

            <!-- Phones -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Phones</div>
                <div class="text-base sm:text-lg font-extrabold text-gray-900">{{ stats.totals.phones }}</div>
              </div>
            </div>

            <!-- Socials -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Socials</div>
                <div class="text-base sm:text-lg font-extrabold text-gray-900">{{ stats.totals.socials }}</div>
              </div>
            </div>

            <!-- Others -->
            <div class="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:-translate-y-0.5 transition-all duration-200 border border-gray-100">
              <div class="flex flex-col items-center text-center">
                <div class="text-xs sm:text-sm text-gray-600 font-medium mb-1">Others</div>
                <div class="text-base sm:text-lg font-extrabold text-gray-900">{{ stats.totals.others }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Chart and Sidebar Section -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <!-- Chart Section -->
          <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:col-span-2 border border-gray-100">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">Last 14 Days Activity</h3>
              <div class="flex flex-wrap gap-2">
                <div class="flex items-center gap-2 text-xs sm:text-sm">
                  <span class="inline-block w-3 h-3 rounded-full bg-gray-900"></span>
                  <span class="text-gray-600">Users</span>
                </div>
                <div class="flex items-center gap-2 text-xs sm:text-sm">
                  <span class="inline-block w-3 h-3 rounded-full bg-gray-500"></span>
                  <span class="text-gray-600">Cards</span>
                </div>
                <div class="flex items-center gap-2 text-xs sm:text-sm">
                  <span class="inline-block w-3 h-3 rounded-full bg-blue-600"></span>
                  <span class="text-gray-600">Activations</span>
                </div>
                <div class="flex items-center gap-2 text-xs sm:text-sm">
                  <span class="inline-block w-3 h-3 rounded-full bg-pink-600"></span>
                  <span class="text-gray-600">Taps</span>
                </div>
              </div>
            </div>
            
                         <div class="h-64 sm:h-80 lg:h-96 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
               <div v-if="stats.series?.data && stats.series?.dates" class="w-full h-full">
                 <apexchart 
                   :options="chartOptions" 
                   :series="chartSeries"
                   height="100%"
                   width="100%"
                 />
               </div>
               <div v-else class="flex items-center justify-center h-full text-gray-500">
                 <div class="text-center">
                   <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                   <div>Loading chart data...</div>
                 </div>
               </div>
             </div>
          </div>

          <!-- Sidebar Section -->
          <div class="lg:col-span-1 space-y-4 sm:space-y-6">
            <!-- Recent Activations -->
            <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">Recent Activations</h3>
              <div v-if="stats.recent_activated_cards.length === 0" class="text-sm text-gray-500 text-center py-4">No recent activations</div>
              <ul v-else class="space-y-3">
                <li v-for="c in stats.recent_activated_cards" :key="c.id" class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="font-semibold text-sm text-gray-900">Card {{ c.unique_code }}</div>
                      <div class="text-xs text-gray-600">User ID: {{ c.card_user_id }}</div>
                    </div>
                    <div class="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">{{ formatDate(c.updated_at) }}</div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- System Health -->
            <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">System Health</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div class="text-sm text-gray-600 font-medium">API Status</div>
                    <div class="text-lg font-bold" :class="health.ok ? 'text-green-600' : 'text-red-600'">
                      {{ health.ok ? 'OK' : 'DOWN' }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-600 font-medium">Response Time</div>
                    <div class="text-lg font-bold text-gray-900">{{ health.rttMs }} ms</div>
                  </div>
                </div>
                <button @click="refreshHealth" class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Refresh Status
                </button>
              </div>
            </div>
          </div>
        </section>
      </template>
    </main>

    <!-- Sidebar overlay -->
    <div v-if="showSidebar" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" @click="showSidebar=false"></div>
    
    <!-- Sidebar -->
    <div v-if="showSidebar" @click="showSidebar = false" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
    <div v-if="showSidebar" class="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/logo/GoTapMode.png" alt="logo" class="w-9 h-9 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900">GoTapMode</h3>
            <p class="text-sm text-gray-600">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav class="p-6 space-y-3">
        <router-link to="/admin/dashboard" class="flex items-center gap-4 px-6 py-4 bg-blue-100 text-blue-700 rounded-xl text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          </svg>
          Dashboard
        </router-link>
        <router-link to="/admin/users" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          Users
        </router-link>
        <router-link to="/admin/nfc-writing" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Writing
        </router-link>
        <router-link to="/admin/nfc-cards" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          NFC Cards
        </router-link>
        <router-link to="/admin/administrators" class="flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          Administrators
        </router-link>
        <button @click="logout" class="flex items-center gap-4 px-6 py-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 w-full text-left text-base font-medium">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { adminApi, api } from '../config/api'


const router = useRouter()
const loading = ref(true)
const error = ref('')
const stats = ref({ totals: { admins: 0, card_users: 0, cards: 0, activated_cards: 0, expired_cards: 0 }, series: { dates: [], data: { card_users: [], cards: [], activations: [] } }, recent_activated_cards: [] })
const adminName = ref('Admin')
const showSidebar = ref(false)
const health = ref({ ok: false, time: '', rttMs: '-' })

// derived
const unactivatedCards = computed(() => Math.max(0, (stats.value.totals?.cards || 0) - (stats.value.totals?.activated_cards || 0)))

// Chart data computed properties
const chartSeries = computed(() => {
  if (!stats.value.series?.data || !stats.value.series?.dates) return []
  
  return [
    {
      name: 'Users',
      data: stats.value.series.data.card_users?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Cards',
      data: stats.value.series.data.cards?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Activations',
      data: stats.value.series.data.activations?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    },
    {
      name: 'Taps',
      data: stats.value.series.data.taps?.map((value, index) => ({
        x: new Date(stats.value.series.dates[index]).getTime(),
        y: value
      })) || []
    }
  ]
})

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
    height: '100%',
    fontFamily: 'Inter, system-ui, sans-serif',
    zoom: {
      enabled: true,
      type: 'x'
    },
    toolbar: {
      show: true,
      offsetY: -10,
      tools: {
        download: true,
        selection: false,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      }
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    background: 'transparent'
  },
  colors: ['#1F2937', '#6B7280', '#3B82F6', '#EC4899'],
  stroke: {
    curve: 'smooth',
    width: [3, 3, 3, 4],
    lineCap: 'round'
  },
  markers: {
    size: [4, 4, 4, 5],
    strokeWidth: 2,
    strokeColors: '#fff',
    hover: {
      size: [6, 6, 6, 7]
    }
  },
  grid: {
    borderColor: '#F3F4F6',
    strokeDashArray: 3,
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'MMM dd',
      style: {
        colors: '#6B7280',
        fontSize: '11px',
        fontWeight: 500
      },
      offsetY: 5
    },
    axisBorder: {
      show: true,
      color: '#E5E7EB'
    },
    axisTicks: {
      show: true,
      color: '#E5E7EB'
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '11px',
        fontWeight: 500
      },
      offsetX: -5
    },
    title: {
      text: 'Activity Count',
      style: {
        color: '#374151',
        fontSize: '13px',
        fontWeight: 600
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'light',
    style: {
      fontSize: '12px'
    },
    x: {
      format: 'MMM dd, yyyy'
    },
    y: {
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        const seriesName = w.config.series[seriesIndex].name
        return `<strong>${value}</strong> ${seriesName.toLowerCase()}`
      }
    },
    marker: {
      show: true
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontSize: '13px',
    fontWeight: 500,
    offsetY: -5,
    markers: {
      width: 8,
      height: 8,
      radius: 4,
      offsetX: -2
    },
    itemMargin: {
      horizontal: 12,
      vertical: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.05,
      gradientToColors: ['#F9FAFB', '#F3F4F6', '#EBF8FF', '#FDF2F8'],
      inverseColors: false,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 100]
    }
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '12px'
        },
        chart: {
          toolbar: {
            show: false
          }
        }
      }
    }
  ]
}))

function last(arr) { try { return Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0 } catch { return 0 } }
function pct(n, d) { if (!d) return 0; return (n / d) * 100 }
function formatPct(v) { return `${(v||0).toFixed(1)}%` }
const rateAll = computed(() => pct(stats.value.totals.activated_cards, stats.value.totals.cards))
const rateToday = computed(() => pct(last(stats.value.series.data.activations), last(stats.value.series.data.cards)))
const rate7d = computed(() => {
  const a = (stats.value.series.data.activations || []).slice(-7).reduce((s, v) => s + (+v||0), 0)
  const c = (stats.value.series.data.cards || []).slice(-7).reduce((s, v) => s + (+v||0), 0)
  return pct(a, c)
})

function formatDate(val) { try { return new Date(val).toLocaleString() } catch { return val } }

function goDashboard() { showSidebar.value = false; try { router.replace({ name: 'admin-dashboard' }) } catch {} }
function goUsers() { showSidebar.value = false; try { router.push({ name: 'admin-users' }) } catch {} }
function goNfcWriting() { showSidebar.value = false; try { router.push({ name: 'admin-nfc-writing' }) } catch {} }
function goAdministrators() { showSidebar.value = false; try { router.push({ name: 'admin-administrators' }) } catch {} }
function logout() { localStorage.removeItem('gtm_admin_token'); localStorage.removeItem('gtm_admin_user'); router.replace({ name: 'login' }) }

async function refreshHealth() {
  try { const t0 = performance.now(); const res = await api.get('/health'); const t1 = performance.now(); health.value = { ok: !!res?.ok, time: res?.time || '', rttMs: Math.round(t1 - t0) } }
  catch { health.value = { ok: false, time: '', rttMs: '-' } }
}

async function load() {
  loading.value = true; error.value = ''
  try { 
    const data = await adminApi.stats(); 
    console.log('Admin stats data:', data);
    stats.value = data 
  } catch (e) { 
    console.error('Failed to load stats:', e);
    error.value = e?.message || 'Failed to load stats' 
  }
  loading.value = false
}

function getAdmin() { try { const raw = localStorage.getItem('gtm_admin_user'); if (raw) adminName.value = JSON.parse(raw)?.name || 'Admin' } catch {} }

function secondLast(arr) { try { return Array.isArray(arr) && arr.length > 1 ? arr[arr.length - 2] : 0 } catch { return 0 } }
function deltaSign(n) { const v = Number(n||0); const sign = v>0?'+':''; return `${sign}${v}` }

onMounted(() => { getAdmin(); load(); refreshHealth() })
</script>



<style scoped>
</style>



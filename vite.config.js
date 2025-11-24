import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vue core libraries
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
            return 'vue-vendor'
          }
          
          // Vue Router
          if (id.includes('node_modules/vue-router')) {
            return 'vue-router'
          }
          
          // Chart libraries (ApexCharts) - large library, keep separate
          if (id.includes('node_modules/apexcharts') || id.includes('node_modules/vue3-apexcharts')) {
            return 'charts'
          }
          
          // Image processing (CropperJS)
          if (id.includes('node_modules/cropperjs')) {
            return 'cropper'
          }
          
          // HTTP client (Axios)
          if (id.includes('node_modules/axios')) {
            return 'axios'
          }
          
          // Admin components (large, separate chunk)
          if (id.includes('/admin/')) {
            return 'admin'
          }
          
          // Landing pages
          if (id.includes('/landingpages/')) {
            return 'landing'
          }
          
          // User components
          if (id.includes('/user/')) {
            return 'user'
          }
          
          // Other node_modules (utilities, etc.)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    strictPort: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://api.gotapmode.info/api',
        changeOrigin: true,
        secure: false,
      },
    },
  }
})



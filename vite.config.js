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



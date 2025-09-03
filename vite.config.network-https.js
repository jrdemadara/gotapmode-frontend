import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'

// HTTPS dev server config for Vite using local certificates
// Configured for network access on 192.168.50.56

const host = '192.168.50.56'
const certsDir = path.resolve(__dirname, '../certs')
const certPath = path.join(certsDir, `${host}.pem`)
const keyPath = path.join(certsDir, `${host}-key.pem`)

const httpsOptions = fs.existsSync(certPath) && fs.existsSync(keyPath)
  ? { cert: fs.readFileSync(certPath), key: fs.readFileSync(keyPath) }
  : true // fallback to self-signed if files not present

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    https: httpsOptions,
    open: true,
    cors: true,
    proxy: {
      // Proxy API calls to the HTTPS backend during development
      '/api': {
        target: `https://${host}:8443`, // This goes through Caddy
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p,
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios']
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
})

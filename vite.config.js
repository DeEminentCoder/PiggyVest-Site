import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    host: "0.0.0.0"
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '79a9230fc050.ngrok-free.app'  // ✅ No "https://"
    ]
  }
})

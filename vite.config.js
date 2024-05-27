import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    'Permissions-Policy': 'interest-cohort=()'
 // This will use your machine's default IP address
  },
  base: '/Portfolio_Website/'
})

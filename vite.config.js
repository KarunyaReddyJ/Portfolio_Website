import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   
    'Permissions-Policy': 'interest-cohort=()'
  },
  base: '/Portfolio_Website/'
})

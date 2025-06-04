import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Janaka-Jeewantha/', // <-- Add this line
  plugins: [react()],
})

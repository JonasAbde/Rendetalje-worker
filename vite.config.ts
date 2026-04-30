import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

import { cloudflare } from "@cloudflare/vite-plugin";

const routes = [
  '/', '/om-os', '/services',
  '/services/fast-rengoering', '/services/flytterengoering',
  '/services/hovedrengoering', '/services/erhvervsrengoering',
  '/priser', '/service-omraade', '/faq', '/kontakt',
  '/handelsbetingelser', '/privatlivspolitik', '/cookiepolitik',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({ hostname: 'https://rendetalje.dk', routes }),
    cloudflare()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
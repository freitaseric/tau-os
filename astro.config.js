// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import vercel from '@astrojs/vercel'
import config from './src/config'

export default defineConfig({
  site: config.site,
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  adapter: vercel({
    isr: true,
    edgeMiddleware: true,
  }),
})

// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  //adapter: node({ mode: 'standalone' }), // Use this for docker production with Node.js
  adapter: vercel(),
  site: 'https://corporate-website-swart.vercel.app',
  trailingSlash: "ignore",
  integrations: [
    tailwind()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components'
      }
    }
  },
});
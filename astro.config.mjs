// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  //adapter: node({ mode: 'standalone' }), // Use this for docker production with Node.js
  adapter: vercel(), // Use this for deployment on Vercel
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  },
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
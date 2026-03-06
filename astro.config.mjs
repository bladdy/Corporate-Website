// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  trailingSlash: 'ignore',
  site: 'http://localhost:4321/',
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
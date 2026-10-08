import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://duerremedia.com',
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});


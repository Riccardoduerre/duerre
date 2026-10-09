import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duerremedia.com',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ]
});

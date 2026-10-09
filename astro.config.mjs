import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duerremedia.com',
  base: '/',
  output: 'static',
  redirects: {
    '/about': '/en/about',
    '/projects': '/en/projects',
    '/blog': '/en/blog',
    '/contact': '/en/contact',
    '/portfolio': '/en/projects',
  },
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ]
});

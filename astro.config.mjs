import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duerremedia.com',
  base: '/',
  output: 'static',
  prefetch: true,
  redirects: {
    '/en': '/',
    '/en/[...slug]': '/[...slug]',
    '/portfolio': '/projects',
    '/portfolio/[...slug]': '/projects/[...slug]',
    '/it/portfolio': '/it/projects',
    '/it/portfolio/[...slug]': '/it/projects/[...slug]',
    '/portfolio.html': '/projects',
    '/about.html': '/about',
    '/contact.html': '/contact',
    '/blog.html': '/blog',
  },
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

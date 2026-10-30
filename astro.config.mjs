import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duerremedia.com',
  base: '/',
  output: 'static',
  redirects: {
    '/it': '/',
    '/it/about': '/about',
    '/it/services': '/services',
    '/servizi': '/services',
    '/en/servizi': '/en/services',
    '/it/projects': '/portfolio',
    '/it/projects/alps-brand-campaign': '/portfolio/alps-brand-campaign',
    '/it/projects/commercial-showreel': '/portfolio/commercial-showreel',
    '/it/projects/ethereal-landscapes': '/portfolio/ethereal-landscapes',
    '/it/projects/lumen-atelier': '/portfolio/lumen-atelier',
    '/it/projects/urban-character-study': '/portfolio/urban-character-study',
    '/it/portfolio': '/portfolio',
    '/it/portfolio/alps-brand-campaign': '/portfolio/alps-brand-campaign',
    '/it/portfolio/commercial-showreel': '/portfolio/commercial-showreel',
    '/it/portfolio/ethereal-landscapes': '/portfolio/ethereal-landscapes',
    '/it/portfolio/lumen-atelier': '/portfolio/lumen-atelier',
    '/it/portfolio/urban-character-study': '/portfolio/urban-character-study',
    '/it/blog': '/blog',
    '/it/contact': '/contact',
    '/it/thanks': '/thanks',
    '/portfolio.html': '/portfolio',
    '/about.html': '/about',
    '/contact.html': '/contact',
    '/blog.html': '/blog',
  },
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

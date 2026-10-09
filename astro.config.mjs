import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duerremedia.com',
  base: '/',
  output: 'static',
  redirects: {
    '/en': '/',
    '/en/about': '/about',
    '/en/projects': '/projects',
    '/en/projects/alps-brand-campaign': '/projects/alps-brand-campaign',
    '/en/projects/commercial-showreel': '/projects/commercial-showreel',
    '/en/projects/ethereal-landscapes': '/projects/ethereal-landscapes',
    '/en/projects/lumen-atelier': '/projects/lumen-atelier',
    '/en/projects/urban-character-study': '/projects/urban-character-study',
    '/en/blog': '/blog',
    '/en/contact': '/contact',
    '/en/thanks': '/thanks',
    '/portfolio': '/projects',
    '/portfolio/alps-brand-campaign': '/projects/alps-brand-campaign',
    '/portfolio/commercial-showreel': '/projects/commercial-showreel',
    '/portfolio/ethereal-landscapes': '/projects/ethereal-landscapes',
    '/portfolio/lumen-atelier': '/projects/lumen-atelier',
    '/portfolio/urban-character-study': '/projects/urban-character-study',
    '/it/portfolio': '/it/projects',
    '/it/portfolio/alps-brand-campaign': '/it/projects/alps-brand-campaign',
    '/it/portfolio/commercial-showreel': '/it/projects/commercial-showreel',
    '/it/portfolio/ethereal-landscapes': '/it/projects/ethereal-landscapes',
    '/it/portfolio/lumen-atelier': '/it/projects/lumen-atelier',
    '/it/portfolio/urban-character-study': '/it/projects/urban-character-study',
    '/portfolio.html': '/projects',
    '/about.html': '/about',
    '/contact.html': '/contact',
    '/blog.html': '/blog',
    '/index.html': '/',
  },
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

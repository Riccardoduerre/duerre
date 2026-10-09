#!/bin/bash

# Create basic scaffolding for all components
cat << 'EOF' > src/components/BaseHead.astro
---
import '../styles/global.css';

interface Props {
	title: string;
	description: string;
	image?: string;
}

const { title, description, image = '/favicon.svg' } = Astro.props;
---

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />

<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} />
EOF

cat << 'EOF' > src/components/ThemeToggle.astro
---
import { useTranslations } from '../i18n';
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<button id="theme-toggle" class="js-only rounded-full p-2 text-ink hover:bg-surface transition-colors" aria-label={t('theme_toggle')}>
  <svg class="h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <!-- Moon icon for light mode -->
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
  <svg class="h-5 w-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <!-- Sun icon for dark mode -->
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
</button>

<script is:inline>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  window.localStorage.setItem('theme', theme);
</script>

<script>
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle('dark');
    
    const isDark = element.getAttribute('data-theme') === 'dark';
    element.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  }

  document.getElementById('theme-toggle')?.addEventListener('click', handleToggleClick);
</script>
EOF

cat << 'EOF' > src/components/Header.astro
---
import { type Locale, useTranslations, localePath, switchLocalePath } from '../i18n';
import ThemeToggle from './ThemeToggle.astro';

interface Props {
  lang: Locale;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
const currentPath = Astro.url.pathname;
const otherLang = lang === 'en' ? 'it' : 'en';
---

<header class="sticky top-0 z-50 w-full border-b border-line/50 bg-bg/80 backdrop-blur">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <a href={localePath(lang, '/')} class="text-xl font-bold tracking-tight">Duerre Media</a>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href={localePath(lang, '/projects/')} class="hover:text-accent transition-colors">{t('nav_projects')}</a>
      <a href={localePath(lang, '/about/')} class="hover:text-accent transition-colors">{t('nav_about')}</a>
      <a href={localePath(lang, '/blog/')} class="hover:text-accent transition-colors">{t('nav_blog')}</a>
      <a href={localePath(lang, '/contact/')} class="hover:text-accent transition-colors">{t('nav_contact')}</a>
      
      <div class="flex items-center gap-4 ml-4 pl-4 border-l border-line">
        <a href={switchLocalePath(currentPath, otherLang)} class="text-xs font-bold uppercase hover:text-accent">{otherLang}</a>
        <ThemeToggle lang={lang} />
      </div>
    </nav>
  </div>
</header>
EOF

cat << 'EOF' > src/components/Footer.astro
---
import { type Locale, useTranslations, localePath } from '../i18n';

interface Props {
  lang: Locale;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
const year = new Date().getFullYear();
---

<footer class="border-t border-line bg-surface py-12 md:py-16 mt-24">
  <div class="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight mb-4">{t('contact_title')}</h2>
      <a href={localePath(lang, '/contact/')} class="btn-primary mt-4 inline-flex">{t('nav_cta')}</a>
    </div>
    <div class="grid grid-cols-2 gap-8 text-sm">
      <div>
        <h3 class="font-semibold mb-4 text-accent uppercase tracking-wider text-xs">Menu</h3>
        <ul class="space-y-3 flex flex-col">
          <li><a href={localePath(lang, '/projects/')} class="hover:text-accent transition-colors">{t('nav_projects')}</a></li>
          <li><a href={localePath(lang, '/about/')} class="hover:text-accent transition-colors">{t('nav_about')}</a></li>
          <li><a href={localePath(lang, '/blog/')} class="hover:text-accent transition-colors">{t('nav_blog')}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4 text-accent uppercase tracking-wider text-xs">{t('social_label')}</h3>
        <ul class="space-y-3 flex flex-col">
          <li><a href="#" class="hover:text-accent transition-colors">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center text-xs text-muted">
    <p>&copy; {year} Duerre Media. All rights reserved.</p>
    <p class="mt-4 md:mt-0">{t('footer_stack')}</p>
  </div>
</footer>
EOF

cat << 'EOF' > src/components/ProjectCard.astro
---
import { Image } from 'astro:assets';
import type { Project } from '../lib/content';
import { splitId } from '../lib/content';

interface Props {
  project: Project;
}

const { project } = Astro.props;
const { slug, lang } = splitId(project.id);
---

<a href={`/${lang}/projects/${slug}/`} class="group block">
  <div class="relative overflow-hidden rounded-xl bg-surface aspect-[4/3] media-zoom">
    <Image 
      src={project.data.cover} 
      alt={project.data.coverAlt} 
      class="object-cover w-full h-full"
      width={800}
      height={600}
    />
    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <span class="btn-primary text-xs pointer-events-none opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Project</span>
    </div>
  </div>
  <div class="mt-4">
    <h3 class="text-lg font-semibold group-hover:text-accent transition-colors">{project.data.title}</h3>
    <p class="text-sm text-muted mt-1">{project.data.client} — {project.data.year}</p>
  </div>
</a>
EOF

cat << 'EOF' > src/components/PhotoGallery.astro
---
import { Image } from 'astro:assets';

interface Props {
  images: { image: any; alt: string; caption?: string }[];
}

const { images } = Astro.props;
---

<div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
  {images.map((img) => (
    <figure class="break-inside-avoid">
      <Image 
        src={img.image} 
        alt={img.alt} 
        class="w-full rounded-lg bg-surface"
        width={800}
      />
      {img.caption && <figcaption class="text-xs text-muted mt-2 text-center">{img.caption}</figcaption>}
    </figure>
  ))}
</div>
EOF

cat << 'EOF' > src/components/YouTubeEmbed.astro
---
interface Props {
  id: string;
  title?: string;
}

const { id, title = 'YouTube video player' } = Astro.props;
---

<div class="relative w-full aspect-video rounded-xl overflow-hidden bg-surface">
  <iframe
    class="absolute inset-0 w-full h-full"
    src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
    title={title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
EOF

cat << 'EOF' > src/components/PostPreview.astro
---
import { Image } from 'astro:assets';
import type { Post } from '../lib/content';
import { formatDate, splitId, readingMinutes } from '../lib/content';

interface Props {
  post: Post;
}

const { post } = Astro.props;
const { slug, lang } = splitId(post.id);
const mins = readingMinutes(post.body);
---

<article class="group relative flex flex-col items-start justify-between">
  <div class="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-xl bg-surface media-zoom">
    <Image 
      src={post.data.coverImage} 
      alt={post.data.coverAlt || post.data.title} 
      class="object-cover w-full h-full"
      width={800}
      height={450}
    />
  </div>
  <div class="flex items-center gap-x-4 text-xs">
    <time datetime={post.data.pubDate.toISOString()} class="text-muted">
      {formatDate(post.data.pubDate, lang)}
    </time>
    <span class="text-muted/50">&bull;</span>
    <span class="text-muted">{mins} min read</span>
  </div>
  <div class="group relative">
    <h3 class="mt-3 text-xl font-semibold leading-6 group-hover:text-accent transition-colors">
      <a href={`/${lang}/blog/${slug}/`}>
        <span class="absolute inset-0"></span>
        {post.data.title}
      </a>
    </h3>
    <p class="mt-3 line-clamp-3 text-sm leading-6 text-muted">{post.data.description}</p>
  </div>
</article>
EOF

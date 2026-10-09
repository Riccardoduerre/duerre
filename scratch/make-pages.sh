#!/bin/bash

mkdir -p src/pages/\[lang\]/projects src/pages/\[lang\]/blog

cat << 'EOF' > src/pages/index.astro
---
import { LOCALES, DEFAULT_LOCALE } from '../i18n';

// Static redirect for the root URL
// This generates an empty HTML page that immediately redirects the user
// based on their browser language or falls back to DEFAULT_LOCALE.
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Duerre Media</title>
  <script is:inline define:vars={{ LOCALES, DEFAULT_LOCALE }}>
    const userLang = navigator.language.split('-')[0];
    const targetLang = LOCALES.includes(userLang) ? userLang : DEFAULT_LOCALE;
    window.location.replace(`/${targetLang}/`);
  </script>
</head>
<body>
  <p>Redirecting to <a href={`/${DEFAULT_LOCALE}/`}>/{DEFAULT_LOCALE}/</a>...</p>
</body>
</html>
EOF

cat << 'EOF' > src/pages/[lang]/index.astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ProjectCard from '../../components/ProjectCard.astro';
import PostPreview from '../../components/PostPreview.astro';
import { getProjects, getPosts } from '../../lib/content';
import { LOCALES, useTranslations, type Locale } from '../../i18n';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);

const allProjects = await getProjects(lang);
const featuredProjects = allProjects.filter(p => p.data.featured).slice(0, 4);
if (featuredProjects.length === 0) {
    featuredProjects.push(...allProjects.slice(0, 4));
}

const latestPosts = (await getPosts(lang)).slice(0, 3);
---

<BaseLayout 
  title={`Duerre Media | ${t('hero_eyebrow')}`} 
  description={t('studio_blurb')} 
  lang={lang}
>
  <section class="py-24 md:py-32 px-6 max-w-7xl mx-auto">
    <p class="eyebrow mb-6">{t('hero_eyebrow')}</p>
    <h1 class="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
      Riccardo Riva is a director and photographer based in Italy, focusing on high-end visual production.
    </h1>
    <div class="mt-12 flex gap-4">
      <a href={`/${lang}/contact/`} class="btn-primary">{t('nav_cta')}</a>
      <a href={`/${lang}/projects/`} class="btn-ghost">{t('all_projects_link')}</a>
    </div>
  </section>

  <section class="py-16 md:py-24 px-6 bg-surface">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between mb-12">
        <div>
          <p class="eyebrow mb-3">{t('selected_works')}</p>
          <h2 class="text-3xl md:text-4xl font-bold">{t('projects_title')}</h2>
        </div>
        <a href={`/${lang}/projects/`} class="link-underline text-sm font-semibold hidden sm:block">{t('all_projects_link')}</a>
      </div>
      <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
        {featuredProjects.map(project => <ProjectCard project={project} />)}
      </div>
      <div class="mt-12 sm:hidden">
        <a href={`/${lang}/projects/`} class="btn-ghost w-full">{t('all_projects_link')}</a>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p class="eyebrow mb-3">{t('studio_eyebrow')}</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Small by design, hands-on from concept to final grade.</h2>
      <p class="text-muted leading-relaxed mb-8">{t('studio_blurb')}</p>
      <a href={`/${lang}/about/`} class="link-underline text-sm font-semibold">{t('nav_about')} →</a>
    </div>
    <div class="aspect-square bg-surface rounded-xl overflow-hidden relative">
      <!-- Optional: Add a studio or self portrait here -->
      <div class="absolute inset-0 bg-gradient-to-tr from-surface to-bg opacity-50"></div>
    </div>
  </section>

  {latestPosts.length > 0 && (
    <section class="py-16 md:py-24 px-6 bg-surface border-t border-line">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="eyebrow mb-3">{t('nav_blog')}</p>
            <h2 class="text-3xl md:text-4xl font-bold">{t('latest_articles')}</h2>
          </div>
          <a href={`/${lang}/blog/`} class="link-underline text-sm font-semibold hidden sm:block">{t('all_articles')}</a>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          {latestPosts.map(post => <PostPreview post={post} />)}
        </div>
      </div>
    </section>
  )}
</BaseLayout>
EOF

cat << 'EOF' > src/pages/[lang]/about.astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { LOCALES, useTranslations, type Locale } from '../../i18n';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
---

<BaseLayout 
  title={`${t('nav_about')} | Duerre Media`} 
  description={t('studio_blurb')} 
  lang={lang}
>
  <article class="max-w-3xl mx-auto px-6 py-24 md:py-32 prose prose-studio prose-invert max-w-none">
    <h1>{t('nav_about')}</h1>
    <p class="lead text-xl md:text-2xl text-muted font-medium mb-12">
      {t('studio_blurb')}
    </p>
    
    <h2>Workflow & Services</h2>
    <p>
      From the first spark of an idea to the final delivery, I handle all aspects of production. 
      Whether it's a still life product shoot, an editorial fashion film, or a fully CGI rendered commercial,
      the goal is always the same: visual excellence that speaks for itself.
    </p>
    <ul>
      <li>Commercial Photography</li>
      <li>Fashion & Editorial Film</li>
      <li>3D Product Rendering</li>
      <li>Color Grading</li>
    </ul>

    <h2>Selected Clients</h2>
    <p>
      I've had the pleasure of working with brands that value craft and precision.
      (Client list can be populated here).
    </p>
  </article>
</BaseLayout>
EOF

cat << 'EOF' > src/pages/[lang]/contact.astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { LOCALES, useTranslations, type Locale } from '../../i18n';
import { CONTACT_FORM, contactFormMode, siteConfig } from '../../config/site';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
const mode = contactFormMode();
---

<BaseLayout 
  title={`${t('nav_contact')} | Duerre Media`} 
  description={t('contact_title')} 
  lang={lang}
>
  <div class="max-w-3xl mx-auto px-6 py-24 md:py-32">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">{t('contact_title')}</h1>
    <p class="text-muted text-lg mb-12">{t('project_cta_desc')}</p>

    {mode === 'mailto' ? (
      <div class="bg-surface border border-line rounded-xl p-8 text-center">
        <p class="mb-6">{t('contact_form_fallback_note')} <a href={`mailto:${siteConfig.email}`} class="text-accent hover:underline">{siteConfig.email}</a>.</p>
        <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(t('contact_form_subject'))}`} class="btn-primary">
          Open Email App
        </a>
      </div>
    ) : (
      <form action={CONTACT_FORM.action} method="POST" class="space-y-6">
        {mode === 'web3forms' && <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />}
        <input type="hidden" name="subject" value={t('contact_form_subject')} />
        <input type="hidden" name="redirect" value={`${Astro.url.origin}/${lang}/thanks/`} />
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-muted mb-2">Name</label>
            <input type="text" id="name" name="name" required class="field" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-muted mb-2">Email</label>
            <input type="email" id="email" name="email" required class="field" />
          </div>
        </div>
        
        <div>
          <label for="budget" class="block text-sm font-medium text-muted mb-2">{t('contact_form_budget')}</label>
          <input type="text" id="budget" name="budget" placeholder={t('contact_form_budget_placeholder')} class="field" />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-muted mb-2">Message & Brief</label>
          <textarea id="message" name="message" required rows="6" class="field resize-y"></textarea>
        </div>

        <button type="submit" class="btn-primary w-full md:w-auto">Send Message</button>
      </form>
    )}
  </div>
</BaseLayout>
EOF

cat << 'EOF' > src/pages/[lang]/thanks.astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { LOCALES, useTranslations, type Locale } from '../../i18n';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
---

<BaseLayout 
  title={`${t('thanks_title')} | Duerre Media`} 
  description={t('thanks_desc')} 
  lang={lang}
>
  <div class="max-w-3xl mx-auto px-6 py-32 text-center">
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-8">
      <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h1 class="text-4xl font-bold mb-4">{t('thanks_title')}</h1>
    <p class="text-muted text-lg mb-12">{t('thanks_desc')}</p>
    <a href={`/${lang}/`} class="btn-ghost">{t('thanks_back')}</a>
  </div>
</BaseLayout>
EOF

chmod +x scratch/make-pages.sh 2>/dev/null || true

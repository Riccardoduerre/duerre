#!/bin/bash

cat << 'EOF' > src/pages/[lang]/projects/index.astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import ProjectCard from '../../../components/ProjectCard.astro';
import { getProjects } from '../../../lib/content';
import { LOCALES, useTranslations, type Locale } from '../../../i18n';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
const projects = await getProjects(lang);
---

<BaseLayout 
  title={`${t('projects_title')} | Duerre Media`} 
  description={t('projects_intro')} 
  lang={lang}
>
  <div class="px-6 py-24 md:py-32 max-w-7xl mx-auto">
    <div class="max-w-3xl mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">{t('projects_title')}</h1>
      <p class="text-xl text-muted">{t('projects_intro')}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
      {projects.map(project => <ProjectCard project={project} />)}
    </div>
  </div>
</BaseLayout>
EOF

cat << 'EOF' > src/pages/[lang]/projects/[slug].astro
---
import { render } from 'astro:content';
import ProjectGalleryLayout from '../../../layouts/ProjectGalleryLayout.astro';
import PhotoGallery from '../../../components/PhotoGallery.astro';
import YouTubeEmbed from '../../../components/YouTubeEmbed.astro';
import { getProjects, splitId } from '../../../lib/content';
import { LOCALES, useTranslations, type Locale } from '../../../i18n';

export async function getStaticPaths() {
  const paths = [];
  for (const lang of LOCALES) {
    const projects = await getProjects(lang);
    for (const project of projects) {
      paths.push({
        params: { lang, slug: splitId(project.id).slug },
        props: { project },
      });
    }
  }
  return paths;
}

const { lang } = Astro.params as { lang: Locale };
const { project } = Astro.props;
const { Content } = await render(project);
const t = useTranslations(lang);
---

<ProjectGalleryLayout 
  title={`${project.data.title} | Duerre Media`} 
  description={project.data.description} 
  lang={lang}
  image={project.data.cover.src}
>
  <header class="mb-16 md:mb-24">
    <div class="max-w-3xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">{project.data.title}</h1>
      <p class="text-xl md:text-2xl text-muted mb-12">{project.data.description}</p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-line text-sm">
        <div>
          <span class="block text-muted mb-1 uppercase tracking-wider text-xs font-semibold">Client</span>
          <span class="font-medium">{project.data.client}</span>
        </div>
        <div>
          <span class="block text-muted mb-1 uppercase tracking-wider text-xs font-semibold">Role</span>
          <span class="font-medium">{project.data.role}</span>
        </div>
        <div>
          <span class="block text-muted mb-1 uppercase tracking-wider text-xs font-semibold">Year</span>
          <span class="font-medium">{project.data.year}</span>
        </div>
        <div>
          <span class="block text-muted mb-1 uppercase tracking-wider text-xs font-semibold">Category</span>
          <span class="font-medium">{t(`category_${project.data.category}`)}</span>
        </div>
      </div>
    </div>
  </header>

  <div class="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
    <div class="lg:col-span-8 prose prose-studio prose-invert max-w-none">
      <Content />
    </div>
    
    <div class="lg:col-span-4 space-y-12">
      {project.data.challenge && (
        <div>
          <h3 class="text-lg font-semibold mb-3">The Challenge</h3>
          <p class="text-muted text-sm leading-relaxed">{project.data.challenge}</p>
        </div>
      )}
      {project.data.solution && (
        <div>
          <h3 class="text-lg font-semibold mb-3">The Solution</h3>
          <p class="text-muted text-sm leading-relaxed">{project.data.solution}</p>
        </div>
      )}
    </div>
  </div>

  {project.data.youtubeId && (
    <div class="mb-24">
      <YouTubeEmbed id={project.data.youtubeId} title={project.data.title} />
    </div>
  )}

  {project.data.gallery && project.data.gallery.length > 0 && (
    <div class="mb-24">
      <PhotoGallery images={project.data.gallery} />
    </div>
  )}

  <div class="text-center py-24 border-t border-line">
    <h2 class="text-3xl font-bold mb-6">{t('project_cta_title')}</h2>
    <p class="text-muted mb-8">{t('project_cta_desc')}</p>
    <a href={`/${lang}/contact/`} class="btn-primary">{t('nav_cta')}</a>
  </div>
</ProjectGalleryLayout>
EOF

cat << 'EOF' > src/pages/[lang]/blog/index.astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import PostPreview from '../../../components/PostPreview.astro';
import { getPosts } from '../../../lib/content';
import { LOCALES, useTranslations, type Locale } from '../../../i18n';

export async function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
const posts = await getPosts(lang);
---

<BaseLayout 
  title={`${t('nav_blog')} | Duerre Media`} 
  description="Thoughts on photography, filmmaking, and visual arts." 
  lang={lang}
>
  <div class="px-6 py-24 md:py-32 max-w-7xl mx-auto">
    <div class="max-w-3xl mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">{t('nav_blog')}</h1>
      <p class="text-xl text-muted">Process, behind the scenes, and thoughts on visual arts.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {posts.map(post => <PostPreview post={post} />)}
    </div>
  </div>
</BaseLayout>
EOF

cat << 'EOF' > src/pages/[lang]/blog/[slug].astro
---
import { render } from 'astro:content';
import { Image } from 'astro:assets';
import BlogPostLayout from '../../../layouts/BlogPostLayout.astro';
import { getPosts, splitId, formatDate, readingMinutes } from '../../../lib/content';
import { LOCALES, useTranslations, type Locale } from '../../../i18n';

export async function getStaticPaths() {
  const paths = [];
  for (const lang of LOCALES) {
    const posts = await getPosts(lang);
    for (const post of posts) {
      paths.push({
        params: { lang, slug: splitId(post.id).slug },
        props: { post },
      });
    }
  }
  return paths;
}

const { lang } = Astro.params as { lang: Locale };
const { post } = Astro.props;
const { Content } = await render(post);
const t = useTranslations(lang);
const mins = readingMinutes(post.body);
---

<BlogPostLayout 
  title={`${post.data.title} | Duerre Media`} 
  description={post.data.description} 
  lang={lang}
  image={post.data.coverImage.src}
>
  <header class="mb-12 text-center">
    <div class="flex items-center justify-center gap-x-4 text-sm text-muted mb-6">
      <time datetime={post.data.pubDate.toISOString()}>
        {formatDate(post.data.pubDate, lang)}
      </time>
      <span>&bull;</span>
      <span>{mins} min read</span>
    </div>
    <h1 class="text-3xl md:text-5xl font-bold mb-6">{post.data.title}</h1>
    
    {post.data.tags.length > 0 && (
      <div class="flex flex-wrap justify-center gap-2 mt-6">
        {post.data.tags.map(tag => (
          <span class="px-3 py-1 bg-surface border border-line rounded-full text-xs text-muted">{tag}</span>
        ))}
      </div>
    )}
  </header>

  <div class="mb-16 aspect-[16/9] rounded-xl overflow-hidden bg-surface">
    <Image 
      src={post.data.coverImage} 
      alt={post.data.coverAlt || post.data.title} 
      class="w-full h-full object-cover"
      width={1200}
      height={675}
    />
  </div>

  <div class="prose prose-studio prose-invert max-w-none">
    <Content />
  </div>
  
  <div class="mt-24 pt-12 border-t border-line text-center">
    <p class="text-muted mb-6">{t('post_cta_title')}</p>
    <a href={`/${lang}/contact/`} class="btn-primary">{t('nav_cta')}</a>
  </div>
</BlogPostLayout>
EOF

chmod +x scratch/make-pages2.sh 2>/dev/null || true


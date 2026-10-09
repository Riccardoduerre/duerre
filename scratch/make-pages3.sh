#!/bin/bash

cat << 'EOF' > src/pages/404.astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { useTranslations, DEFAULT_LOCALE } from '../i18n';

const t = useTranslations(DEFAULT_LOCALE);
---

<BaseLayout 
  title={`${t('not_found_title')} | Duerre Media`} 
  description="Page not found" 
  lang={DEFAULT_LOCALE}
>
  <div class="max-w-3xl mx-auto px-6 py-32 text-center flex flex-col items-center justify-center min-h-[60vh]">
    <h1 class="text-8xl font-bold mb-6 text-line">404</h1>
    <h2 class="text-2xl md:text-3xl font-semibold mb-12">{t('not_found_title')}</h2>
    <a href={`/${DEFAULT_LOCALE}/`} class="btn-ghost">{t('thanks_back')}</a>
  </div>
</BaseLayout>
EOF

cat << 'EOF' > src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getPosts, splitId } from '../lib/content';
import { siteConfig } from '../config/site';

export async function GET(context: any) {
  // We'll just generate the RSS feed for the default English locale.
  const posts = await getPosts('en');

  return rss({
    title: siteConfig.name,
    description: "Riccardo Riva's Journal",
    site: context.site || siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
EOF

chmod +x scratch/make-pages3.sh 2>/dev/null || true

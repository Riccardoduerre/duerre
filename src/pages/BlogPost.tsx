import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import posts from '../data/posts';
import { renderMarkdown } from '../lib/markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const { locale, t } = useLocale();

  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="bg-theme-bg py-24 sm:py-28">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-[0.22em]">{t('not_found_blog')}</h1>
          <p className="mt-4 text-theme-muted">{t('not_found_blog_desc')}</p>
          <Link
            to="/blog"
            className="mt-8 inline-block rounded-full bg-theme-mad px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            ← {t('blog')}
          </Link>
        </div>
      </section>
    );
  }

  const wordCount = post.content[locale]?.split(/\s+/).length || 500;
  const readMin = Math.max(1, Math.ceil(wordCount / 200));
  const readingTimeText = t('reading_time').replace('{{min}}', String(readMin));

  return (
    <article className="bg-theme-bg py-20 sm:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="group mb-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-theme-muted transition hover:text-theme-mad"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>{t('blog')}</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-theme-accent">
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', {
                  dateStyle: 'long',
                }).format(new Date(`${post.date}T12:00:00`))}
              </time>
              <span className="text-theme-border">·</span>
              <span>{readingTimeText}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold uppercase tracking-[0.16em] sm:text-5xl lg:text-5xl">
              {post.title[locale]}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-theme-muted sm:text-xl">
              {post.excerpt[locale]}
            </p>
          </header>

          <div className="section-shell mb-16 overflow-hidden">
            <img
              src={post.image}
              alt={post.title[locale]}
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div
            className="blog-content border-t border-theme-border/60 pt-12"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content[locale]) }}
          />

          <div className="mt-16 border-t border-theme-border pt-12 flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-theme-mad hover:underline underline-offset-4"
            >
              ← {t('blog')}
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-theme-mad px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:brightness-110"
            >
              {t('contact')} →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

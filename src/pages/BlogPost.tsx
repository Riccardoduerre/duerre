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
      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-[0.22em]">{t('not_found_blog')}</h1>
          <p className="mt-4 text-theme-muted">{t('not_found_blog_desc')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-theme-bg py-16 sm:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <article className="mx-auto max-w-5xl">
          <Link to="/blog" className="mb-8 inline-flex text-sm font-semibold text-theme-accent underline decoration-theme-border underline-offset-4 hover:text-theme-mad hover:decoration-theme-mad">
            ← {t('blog')}
          </Link>
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-[0.18em] text-theme-accent">
              {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', { dateStyle: 'long' }).format(new Date(`${post.date}T12:00:00`))}
            </time>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{post.title[locale]}</h1>
            <p className="mt-5 text-base leading-relaxed text-theme-muted sm:text-lg">{post.excerpt[locale]}</p>
          </header>
          <div className="section-shell mx-auto mb-10 max-w-4xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title[locale]}
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content[locale]) }} />
        </article>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import posts from '../data/posts';

export default function Blog() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-theme-bg pt-8 pb-20 sm:pt-12 sm:pb-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-theme-accent">
            {t('blog')}
          </p>
          <h1 className="mt-4 text-3xl font-bold uppercase tracking-[0.2em] sm:text-4xl md:text-5xl">
            {t('blog_title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">
            {t('blog_intro')}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {posts.map((post) => {
            const wordCount = post.content[locale]?.split(/\s+/).length || 500;
            const readMin = Math.max(1, Math.ceil(wordCount / 200));
            const readingTimeText = t('reading_time').replace('{{min}}', String(readMin));

            return (
              <article
                key={post.slug}
                className="portfolio-card group flex flex-col overflow-hidden rounded-2xl"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-theme-border/20"
                >
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-theme-accent">
                    <time dateTime={post.date}>
                      {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', {
                        dateStyle: 'long',
                      }).format(new Date(`${post.date}T12:00:00`))}
                    </time>
                    <span className="text-theme-border">·</span>
                    <span>{readingTimeText}</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-theme-text sm:text-3xl">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="transition hover:text-theme-mad"
                    >
                      {post.title[locale]}
                    </Link>
                  </h2>

                  <p className="mt-4 flex-1 text-base leading-relaxed text-theme-muted">
                    {post.excerpt[locale]}
                  </p>

                  <div className="mt-8 border-t border-theme-border/60 pt-6">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-theme-mad transition hover:gap-3"
                    >
                      <span>{t('read_more')}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

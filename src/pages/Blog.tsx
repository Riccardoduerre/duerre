import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import posts from '../data/posts';

export default function Blog() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-theme-accent">{t('blog')}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{t('blog_title')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">{t('blog_intro')}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="portfolio-card group overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-mad"
            >
              <img
                src={post.image}
                alt={post.title[locale]}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 sm:p-7">
                <time dateTime={post.date} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-theme-accent">
                  {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', { dateStyle: 'long' }).format(new Date(`${post.date}T12:00:00`))}
                </time>
                <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{post.title[locale]}</h2>
                <p className="mt-3 leading-relaxed text-theme-muted">{post.excerpt[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

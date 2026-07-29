import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import posts from '../data/posts';

export default function Blog() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{t('blog')}</p>
          <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.2em] md:text-6xl">{t('blog')}</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/${locale}/blog/${post.slug}`}
              className="group overflow-hidden rounded-sm border border-theme-border bg-theme-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={post.image} alt={post.title[locale]} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em]">{post.title[locale]}</h2>
                <p className="mt-4 text-theme-muted leading-relaxed">{post.excerpt[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

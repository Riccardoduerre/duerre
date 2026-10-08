import ViewWrapper from '../components/ViewWrapper';
import { Link } from '../components/Link';
import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import posts, { formatBlogDate } from '../data/posts';
import { renderMarkdown } from '../lib/markdown';

function BlogPostContent({ slug }: { slug: string }) {
    const { locale, t } = useLocale();

  const post = useMemo(
    () => posts.find((item) => item.slug === slug || item.aliases?.includes(slug || '')),
    [slug],
  );

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

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null; // Newer post
  const prevPost = currentIndex !== -1 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null; // Older post

  return (
    <article className="bg-theme-bg pt-8 pb-20 sm:pt-12 sm:pb-28">
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
                {formatBlogDate(post.date)}
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
        
          {/* Post Navigation */}
          <nav className="mt-16 border-t border-theme-border pt-12 flex flex-col sm:flex-row justify-between gap-8">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group flex-1">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-accent mb-2 transition-colors group-hover:text-theme-mad">← {t('prev_post') || 'Previous Post'}</span>
                <span className="block text-lg font-semibold tracking-tight text-theme-text">{prevPost.title[locale]}</span>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group flex-1 text-right">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-accent mb-2 transition-colors group-hover:text-theme-mad">{t('next_post') || 'Next Post'} →</span>
                <span className="block text-lg font-semibold tracking-tight text-theme-text">{nextPost.title[locale]}</span>
              </Link>
            ) : <div className="flex-1" />}
          </nav>
        </div>
      </div>
    </article>
  );
}


export default function BlogPost(props: any) {
  return (
    <ViewWrapper lang={props.lang}>
      <BlogPostContent {...props} />
    </ViewWrapper>
  );
}

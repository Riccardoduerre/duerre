import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import posts from '../data/posts';
import { renderMarkdown } from '../lib/markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const { locale } = useLocale();

  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-[0.2em]">Post not found</h1>
          <p className="mt-4 text-theme-muted">The blog post you requested does not exist.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <article className="max-w-4xl space-y-8">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-[0.2em]">{post.title[locale]}</h1>
            <p className="text-theme-muted mt-3">{post.date}</p>
          </div>
          <img src={post.image} alt={post.title[locale]} className="rounded-sm" />
          <div className="prose max-w-none text-theme-text" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content[locale]) }} />
        </article>
      </div>
    </section>
  );
}

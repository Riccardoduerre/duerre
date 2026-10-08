// Auto-generated blog posts with full Italian and English content

export type LocaleStrings = Record<'en' | 'it', string>;

export interface BlogPostData {
  slug: string;
  title: LocaleStrings;
  date: string;
  image: string;
  excerpt: LocaleStrings;
  content: LocaleStrings;
  aliases?: string[];
}

export function sortPostsByDateDesc(postList: BlogPostData[]): BlogPostData[] {
  return [...postList].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) {
      return timeB - timeA;
    }
    return b.date.localeCompare(a.date);
  });
}

const metaModules = import.meta.glob('../content/blog/*/index.ts', { eager: true }) as Record<string, { meta: any }>;
const enModules = import.meta.glob('../content/blog/*/en.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;
const itModules = import.meta.glob('../content/blog/*/it.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;

const rawPosts: BlogPostData[] = Object.keys(metaModules).map(key => {
  const slug = key.split('/')[3];
  const meta = metaModules[key].meta;
  
  const enKey = `../content/blog/${slug}/en.md`;
  const itKey = `../content/blog/${slug}/it.md`;
  
  return {
    slug,
    title: meta.title,
    date: meta.date,
    image: meta.image,
    excerpt: meta.excerpt,
    aliases: meta.aliases,
    content: {
      en: enModules[enKey]?.default || '',
      it: itModules[itKey]?.default || ''
    }
  };
});

export const posts: BlogPostData[] = sortPostsByDateDesc(rawPosts);

export { formatBlogDate } from '../lib/date';

export default posts;

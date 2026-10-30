import { getCollection, type CollectionEntry } from 'astro:content';
import { type Locale } from '../i18n';

export type PortfolioItem = CollectionEntry<'portfolio'>;
export type Project = PortfolioItem;
export type Post = CollectionEntry<'blog'>;

/**
 * Supports both localized subfolder entries (`<slug>/it.md`, `<slug>/en.md`)
 * and single drop-in Markdown files (`<slug>.md` or `<slug>/index.md`).
 */
export function splitId(id: string): { slug: string; lang: Locale | 'shared' } {
  const normalized = id.replace(/\.(md|mdx)$/i, '');
  const parts = normalized.split('/');
  if (parts.length === 1) {
    return { slug: parts[0], lang: 'shared' };
  }
  const last = parts[parts.length - 1];
  const slug = parts.slice(0, -1).join('/');
  if (last === 'it' || last === 'en') {
    return { slug, lang: last };
  }
  if (last === 'index') {
    return { slug, lang: 'shared' };
  }
  return { slug: normalized, lang: 'shared' };
}

export const slugOf = (entry: { id: string }) => splitId(entry.id).slug;

const visible = (data: { draft?: boolean }) => import.meta.env.DEV || !data.draft;

function matchesLocale(entryId: string, lang: Locale): boolean {
  const parsed = splitId(entryId);
  return parsed.lang === lang || parsed.lang === 'shared';
}

export async function getPortfolio(lang: Locale): Promise<PortfolioItem[]> {
  const all = await getCollection('portfolio', (e: PortfolioItem) => matchesLocale(e.id, lang) && visible(e.data));
  return all.sort(
    (a: PortfolioItem, b: PortfolioItem) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

export const getProjects = getPortfolio;

export async function getPosts(lang: Locale): Promise<Post[]> {
  const all = await getCollection('blog', (e: Post) => matchesLocale(e.id, lang) && visible(e.data));
  return all.sort((a: Post, b: Post) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function readingMinutes(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, lang: Locale, style: 'long' | 'month' = 'long') {
  return new Intl.DateTimeFormat(lang === 'it' ? 'it-IT' : 'en-GB', {
    day: style === 'long' ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

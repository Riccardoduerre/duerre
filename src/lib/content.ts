import { getCollection, type CollectionEntry } from 'astro:content';
import { isLocale, type Locale } from '../i18n';

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'blog'>;

export function splitId(id: string): { slug: string; lang: Locale } {
  const parts = id.split('/');
  const slug = parts[0];
  const langPart = parts[1] || 'en';
  const lang: Locale = langPart === 'it' ? 'it' : 'en';
  return { slug, lang };
}

export const slugOf = (entry: { id: string }) => splitId(entry.id).slug;

const visible = (data: { draft?: boolean }) => import.meta.env.DEV || !data.draft;

export async function getProjects(lang: Locale): Promise<Project[]> {
  const all = await getCollection('projects', (e: Project) => splitId(e.id).lang === lang && visible(e.data));
  return all.sort((a: Project, b: Project) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts(lang: Locale): Promise<Post[]> {
  const all = await getCollection('blog', (e: Post) => splitId(e.id).lang === lang && visible(e.data));
  return all.sort((a: Post, b: Post) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
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


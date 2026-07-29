import post1En from '../content/blog/post1.en.md?raw';
import post1It from '../content/blog/post1.it.md?raw';
import post2En from '../content/blog/post2.en.md?raw';
import post2It from '../content/blog/post2.it.md?raw';

export type LocaleStrings = Record<'en' | 'it', string>;

export interface BlogPostData {
  slug: string;
  title: LocaleStrings;
  date: string;
  image: string;
  excerpt: LocaleStrings;
  content: LocaleStrings;
}

const post1Image = new URL('../assets/images/DSCN7050.JPG', import.meta.url).href;
const post2Image = new URL('../assets/images/_DSC2919.jpg', import.meta.url).href;

const posts: BlogPostData[] = [
  {
    slug: 'post1',
    title: {
      en: 'My First Blog Post Title',
      it: 'Il mio primo post sul blog',
    },
    date: 'August 11, 2025',
    image: post1Image,
    excerpt: {
      en: 'A short introduction to the first blog post, rendered from Markdown.',
      it: 'Una breve introduzione al primo post del blog, renderizzata da Markdown.',
    },
    content: {
      en: post1En,
      it: post1It,
    },
  },
  {
    slug: 'post2',
    title: {
      en: 'The Art of Photography',
      it: 'L’arte della fotografia',
    },
    date: 'September 8, 2025',
    image: post2Image,
    excerpt: {
      en: 'Exploring photography techniques and creative inspiration in a second post.',
      it: 'Esplorando tecniche fotografiche e ispirazione creativa in un secondo post.',
    },
    content: {
      en: post2En,
      it: post2It,
    },
  },
];

export default posts;

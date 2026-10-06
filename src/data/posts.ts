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

const post1Image = new URL('../assets/images/optimized/DSCN7050.webp', import.meta.url).href;
const post2Image = new URL('../assets/images/optimized/_DSC2919.webp', import.meta.url).href;

const posts: BlogPostData[] = [
  {
    slug: 'post1',
    title: {
      en: 'Build a Cohesive Visual Story for a Brand',
      it: 'Costruire una storia visiva coerente per un brand',
    },
    date: '2025-08-11',
    image: post1Image,
    excerpt: {
      en: 'A practical framework for turning a brand message into a considered, versatile photography series.',
      it: 'Un metodo pratico per trasformare il messaggio di un brand in una serie fotografica coerente e versatile.',
    },
    content: {
      en: post1En,
      it: post1It,
    },
  },
  {
    slug: 'post2',
    title: {
      en: 'How to Read Natural Light in a Scene',
      it: 'Come leggere la luce naturale in una scena',
    },
    date: '2025-09-08',
    image: post2Image,
    excerpt: {
      en: 'Learn to read direction, softness, and contrast before choosing exposure settings.',
      it: 'Impara a valutare direzione, morbidezza e contrasto prima di scegliere l’esposizione.',
    },
    content: {
      en: post2En,
      it: post2It,
    },
  },
];

export default posts;

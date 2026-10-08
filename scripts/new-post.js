import fs from 'fs';
import path from 'path';

const slug = process.argv[2];
if (!slug) {
  console.error('Please provide a slug for the new post: npm run new-post -- <slug>');
  process.exit(1);
}

const dir = path.join('src/content/blog', slug);
if (fs.existsSync(dir)) {
  console.error(`Post ${slug} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const indexContent = `import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/default.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "New Post Title",
    it: "Titolo del Nuovo Post"
  } as LocaleStrings,
  date: new Date().toISOString().split('T')[0],
  image,
  excerpt: {
    en: "English excerpt here.",
    it: "Estratto italiano qui."
  } as LocaleStrings
};
`;

fs.writeFileSync(path.join(dir, 'index.ts'), indexContent);
fs.writeFileSync(path.join(dir, 'en.md'), '# English Content\n');
fs.writeFileSync(path.join(dir, 'it.md'), '# Contenuto in Italiano\n');

console.log(`Created new post scaffolding in ${dir}`);

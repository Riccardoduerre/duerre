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

const date = new Date().toISOString().split('T')[0];

const enContent = `---
title: "New Post Title"
date: ${date}
image: ../../assets/images/optimized/default.webp
excerpt: "English excerpt here."
---
# English Content
`;

const itContent = `---
title: "Titolo del Nuovo Post"
date: ${date}
image: ../../assets/images/optimized/default.webp
excerpt: "Estratto italiano qui."
---
# Contenuto in Italiano
`;

fs.writeFileSync(path.join(dir, 'en.md'), enContent);
fs.writeFileSync(path.join(dir, 'it.md'), itContent);

console.log(`Created new post scaffolding in ${dir}`);

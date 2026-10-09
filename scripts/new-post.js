import fs from 'fs';
import path from 'path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Usage: npm run new-post -- <kebab-case-slug>');
  process.exit(1);
}

const dir = path.join('src/content/blog', slug);
if (fs.existsSync(dir)) {
  console.error(`Post ${slug} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const date = new Date().toISOString().split('T')[0];

// Starts as a draft (visible in `npm run dev`, excluded from builds) with a shared placeholder cover.
const frontmatter = (title, description) => `---
title: "${title}"
pubDate: ${date}
coverImage: ../../../assets/blog/_RIK7376_HDR.webp
coverAlt: ""
description: "${description}"
tags: ["Cinematography"]
featured: false
draft: true
---
`;

fs.writeFileSync(path.join(dir, 'en.md'), `${frontmatter('New Post Title', 'English summary.')}\nEnglish content.\n`);
fs.writeFileSync(path.join(dir, 'it.md'), `${frontmatter('Titolo del Nuovo Post', 'Sommario in italiano.')}\nContenuto in italiano.\n`);

console.log(`Created draft post in ${dir} — set draft: false to publish.`);

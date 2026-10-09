import fs from 'fs';
import path from 'path';

const blogDir = './src/content/blog';
const projectDir = './src/content/projects';

// 1. Fix Blogs
const blogFolders = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
for (const folder of blogFolders) {
  for (const lang of ['en.md', 'it.md']) {
    const filePath = path.join(blogDir, folder, lang);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace frontmatter keys
    content = content.replace(/^date: (.*)$/m, 'pubDate: $1');
    content = content.replace(/^image: (.*)$/m, 'coverImage: $1');
    content = content.replace(/^excerpt: (.*)$/m, 'description: $1');
    
    // Add missing required fields
    if (!content.includes('\ntags:')) {
       content = content.replace(/^(---.*?)(^---)/sm, '$1tags: []\n$2');
    }

    fs.writeFileSync(filePath, content);
  }
}

console.log('Blog posts fixed');

// 2. Fix Projects (converting index.ts back to markdown)
const projectFolders = fs.readdirSync(projectDir).filter(f => fs.statSync(path.join(projectDir, f)).isDirectory());

for (const folder of projectFolders) {
  const tsPath = path.join(projectDir, folder, 'index.ts');
  if (!fs.existsSync(tsPath)) continue;

  const content = fs.readFileSync(tsPath, 'utf-8');

  // We need to parse the object. It's a bit tricky but regex can help.
  const getMatch = (regex) => (content.match(regex) || [])[1];
  
  const titleEn = getMatch(/title:\s*\{\s*en:\s*['"](.*?)['"]/);
  const titleIt = getMatch(/title:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);
  const clientEn = getMatch(/client:\s*\{\s*en:\s*['"](.*?)['"]/);
  const clientIt = getMatch(/client:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);
  const roleEn = getMatch(/scope:\s*\{\s*en:\s*['"](.*?)['"]/);
  const roleIt = getMatch(/scope:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);
  
  const challengeEn = getMatch(/challenge:\s*\{\s*en:\s*['"](.*?)['"]/);
  const challengeIt = getMatch(/challenge:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);
  const solutionEn = getMatch(/solution:\s*\{\s*en:\s*['"](.*?)['"]/);
  const solutionIt = getMatch(/solution:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);
  const resultsEn = getMatch(/results:\s*\{\s*en:\s*['"](.*?)['"]/);
  const resultsIt = getMatch(/results:\s*\{\s*en:.*?it:\s*['"](.*?)['"]/);

  const year = getMatch(/year:\s*['"](.*?)['"]/);
  const date = getMatch(/date:\s*['"](.*?)['"]/);
  const category = getMatch(/category:\s*['"](.*?)['"]/);
  const featured = getMatch(/featured:\s*(true|false)/);
  const ytId = getMatch(/youtubeId:\s*['"](.*?)['"]/);

  // Images imports
  const imgRegex = /import\s+(\w+)\s+from\s+['"](.*?)['"]/g;
  let match;
  const imgMap = {};
  while ((match = imgRegex.exec(content)) !== null) {
      imgMap[match[1]] = match[2];
  }
  
  const mainImageVar = getMatch(/image:\s*([a-zA-Z0-9_]+),/);
  const coverImage = imgMap[mainImageVar] || '../../assets/images/optimized/_RIK7376_HDR.webp';
  
  const galleryVarStr = getMatch(/gallery:\s*\[(.*?)\]/);
  let gallery = [];
  if (galleryVarStr) {
      const vars = galleryVarStr.split(',').map(v => v.trim()).filter(Boolean);
      gallery = vars.map(v => imgMap[v]).filter(Boolean);
  }

  // Create frontmatter
  for (const lang of ['en', 'it']) {
      const frontmatter = `---
title: "${lang === 'en' ? titleEn : titleIt}"
description: "${lang === 'en' ? titleEn : titleIt} project details"
client: "${lang === 'en' ? clientEn : clientIt}"
role: "${lang === 'en' ? roleEn : roleIt}"
year: "${year}"
date: ${date}
category: "${category}"
featured: ${featured}
cover: "${coverImage}"
coverAlt: "${lang === 'en' ? titleEn : titleIt} cover"
${ytId ? `youtubeId: "${ytId}"` : ''}
${challengeEn ? `challenge: "${lang === 'en' ? challengeEn : challengeIt}"` : ''}
${solutionEn ? `solution: "${lang === 'en' ? solutionEn : solutionIt}"` : ''}
${resultsEn ? `results: "${lang === 'en' ? resultsEn : resultsIt}"` : ''}
${gallery.length > 0 ? `gallery:\n${gallery.map(img => `  - image: "${img}"\n    alt: "Gallery image"`).join('\n')}` : 'gallery: []'}
---
`;
      fs.writeFileSync(path.join(projectDir, folder, `${lang}.md`), frontmatter);
  }

  fs.unlinkSync(tsPath);
}

console.log('Projects fixed');

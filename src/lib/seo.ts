export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Riccardo Riva",
    "url": "https://duerremedia.com/",
    "jobTitle": "Visual Director",
    "worksFor": {
      "@type": "Organization",
      "name": "Duerre Media"
    }
  };
}

export function generateArticleSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title.en,
    "image": [
      `https://duerremedia.com${post.image}`
    ],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": "Riccardo Riva",
      "url": "https://duerremedia.com/about"
    }]
  };
}

export function setSEOTags({ title, description }: { title: string, description: string }) {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
}

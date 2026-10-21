import rss from '@astrojs/rss';
import { getPosts, splitId } from '../lib/content';
import { SITE } from '../config/site';

export async function GET(context: any) {
  const posts = await getPosts('it');

  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Articoli e approfondimenti su fotografia, cinema, 3D CGI e digital marketing di Riccardo Riva.',
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>it-it</language>`,
  });
}

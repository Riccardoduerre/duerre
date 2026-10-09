import rss from '@astrojs/rss';
import { getPosts, splitId } from '../../lib/content';
import { SITE } from '../../config/site';

export async function GET(context: any) {
  const posts = await getPosts('it');

  return rss({
    title: `${SITE.name} — Journal`,
    description: "Riflessioni su fotografia, cinema e arti visive di Riccardo Riva.",
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/it/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>it-it</language>`,
  });
}


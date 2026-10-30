import rss from '@astrojs/rss';
import { getPosts, splitId } from '../../lib/content';
import { SITE } from '../../config/site';

export async function GET(context: any) {
  const posts = await getPosts('en');

  return rss({
    title: `${SITE.name} — Journal`,
    description: 'Technical essays on commercial photography, anamorphic cinema, 3D CGI, and visual strategy by Riccardo Riva.',
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/en/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

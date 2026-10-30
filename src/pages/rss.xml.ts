import rss from '@astrojs/rss';
import { getPosts, splitId } from '../lib/content';
import { SITE } from '../config/site';

export async function GET(context: any) {
  const posts = await getPosts('it');

  return rss({
    title: `${SITE.name} — Journal`,
    description: 'Saggi tecnici su fotografia commerciale, cinema anamorfico, 3D CGI e digital marketing di Riccardo Riva.',
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>it-it</language>`,
  });
}

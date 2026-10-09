import rss from '@astrojs/rss';
import { getPosts, splitId } from '../lib/content';
import { SITE } from '../config/site';

export async function GET(context: any) {
  // We'll just generate the RSS feed for the default English locale.
  const posts = await getPosts('en');

  return rss({
    title: SITE.name,
    description: "Riccardo Riva's Journal",
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/blog/${splitId(post.id).slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

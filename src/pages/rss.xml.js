import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import config from '../config'
import { getPath } from '../lib/blogUtils'

export async function GET() {
  const posts = await getCollection('blog')

  return rss({
    title: config.rss.title,
    description: config.rss.description,
    site: config.site,
    items: posts
      .sort(
        (a, b) =>
          (b.data.updatedAt?.valueOf() ?? b.data.publishedAt.valueOf()) -
          (a.data.updatedAt?.valueOf() ?? a.data.publishedAt.valueOf()),
      )
      .map(({ data, id, filePath }) => ({
        link: getPath(id, filePath),
        title: data.title,
        description: data.description,
        pubDate: new Date(data.updatedAt ?? data.publishedAt),
      })),
  })
}

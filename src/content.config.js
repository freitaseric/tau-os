import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const BLOG_PATH = 'src/content/posts'

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: `./${BLOG_PATH}` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
})

export const collections = { blog }

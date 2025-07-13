import {
  getCollection,
  type CollectionEntry,
  type CollectionKey,
} from 'astro:content'

import kebabcase from 'lodash.kebabcase'

import { BLOG_PATH } from '../content.config'

import type { MarkdownHeading } from 'astro'
import type { HeadingHierarchy } from '../types'

export const getTaxa = async (collection: CollectionKey, name: string) => {
  const entries = await getCollection(collection)
  const taxonomyPages = entries.map((entry) => entry.data[name])
  const taxonomies: string[] = []
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i]
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]))
    }
  }
  const taxonomy = [...new Set(taxonomies)]
  taxonomy.sort((a, b) => a.localeCompare(b)) // alphabetize
  return taxonomy
}

export const slugify = (str: string) => kebabcase(str)

export const slugifyAll = (arr: string[]) => arr.map((str) => slugify(str))

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, '')
    .split('/')
    .filter((path) => path !== '')
    .filter((path) => !path.startsWith('_'))
    .slice(0, -1)
    .map((segment) => slugify(segment))

  const basePath = includeBase ? '/blog/posts' : ''

  const blogId = id.split('/')
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId

  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join('/')
  }

  return [basePath, ...pathSegments, slug].join('/')
}

export const similerItems = (
  currentItem: CollectionEntry<'blog'>,
  allItems: CollectionEntry<'blog'>[],
  id: string,
) => {
  const tags = currentItem.data.tags

  // filter by tags
  const filterByTags = allItems.filter((item) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  )

  // Remove self from list
  const filteredItems = filterByTags.filter((item) => item.id !== id)

  // remove duplicates
  const uniqueItems = [...new Set(filteredItems)]

  return uniqueItems
}

export const sortByDate = (
  a: CollectionEntry<'blog'>,
  b: CollectionEntry<'blog'>,
): number => {
  return (
    new Date(b.data.updatedAt ?? b.data.publishedAt).valueOf() -
    new Date(a.data.updatedAt ?? a.data.publishedAt).valueOf()
  )
}

export function createHeadingHierarchy(headings: MarkdownHeading[]) {
  const topLevelHeadings: HeadingHierarchy[] = []

  headings.forEach((heading) => {
    const h = {
      ...heading,
      subheadings: [],
    }

    if (h.depth >= 2) {
      topLevelHeadings.push(h)
    } else {
      const parent = topLevelHeadings[topLevelHeadings.length - 1]
      if (parent) {
        parent.subheadings.push(h)
      }
    }
  })

  return topLevelHeadings
}

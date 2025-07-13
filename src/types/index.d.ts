import type { MarkdownHeading } from "astro";

export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}
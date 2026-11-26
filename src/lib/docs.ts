import type { MarkdownInstance } from 'astro';

interface DocFrontmatter {
  title: string;
  description: string;
  // Where the page goes in the navigation. Pages without one come last, by title.
  order?: number;
  // `false` keeps the page out of the navigation. It is still built, searchable, and in the sitemap.
  nav?: boolean;
}

const modules = import.meta.glob<MarkdownInstance<DocFrontmatter>>('../content/docs/*.md', { eager: true });
const sources = import.meta.glob<string>('../content/docs/*.md', { eager: true, query: '?raw', import: 'default' });

// Every Markdown file in src/content/docs is a page, at the path of its file name.
export const docs = Object.entries(modules).map(([key, module]) => ({
  id: key.slice(key.lastIndexOf('/') + 1, -'.md'.length),
  title: module.frontmatter.title,
  order: module.frontmatter.order ?? Number.MAX_SAFE_INTEGER,
  nav: module.frontmatter.nav !== false,
  module,
  source: sources[key],
})).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export const getDoc = (id: string) => docs.find((doc) => doc.id === id)!;

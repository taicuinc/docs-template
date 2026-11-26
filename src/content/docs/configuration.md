---
title: Configuration
description: Name the site and build the home page.
order: 3
---

Two files describe the site: `site.config.ts` names it, and `src/content/home.ts` is its home page.

## Site

| Field | Description |
| --- | --- |
| `name` | The wordmark, and the end of every page title. |
| `title` | The home page's title. |
| `description` | The default description for search engines and link previews. |
| `url` | Where the site is published. Used for canonical links and the sitemap. |
| `repositoryUrl` | The project's repository. |
| `packageName` | The package in the install commands on the home page. |
| `favicon` | The icon's path under `public`. |
| `socialImage` | A 1200×630 image for link previews. Optional. |
| `sidebar` | `'left'` or `'right'`: the side of the page the navigation is on. |
| `headerLinks` | Links under the search, in the mobile menu, and in the footer. |
| `footer.note` | The line of text in the footer. |
| `footer.author` | A name, link, and avatar at the end of the footer. Optional. |

## Home page

The home page is a hero followed by sections. Each section has an `id`, a `title`, and a `type`.

| Type | Shows |
| --- | --- |
| `comparison` | A table that compares columns, row by row. |
| `install` | Install commands for npm, pnpm, yarn, and bun, with an optional note and code sample. |
| `cards` | A grid of links. |
| `text` | A heading and a paragraph. |
| `custom` | An Astro component of your own. It is given `id` and `title`. |

```ts title="src/content/home.ts"
export const home: HomeContent = {
  navTitle: 'Introduction',
  summary: 'What the project is and how to install it.',
  hero: { lede: 'Project does [one thing](/getting-started) well.' },
  sections: [
    { type: 'text', id: 'about', title: 'About', body: 'Who makes it.' },
  ],
};
```

Text takes inline Markdown: links and `code`.

## Navigation

The home page comes first, then the pages in `src/content/docs` by their `order`. See [Writing pages](/writing#frontmatter).

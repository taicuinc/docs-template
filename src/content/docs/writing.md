---
title: Writing pages
description: Markdown, code blocks, and tables.
order: 2
---

Each Markdown file in `src/content/docs` is a page. `api.md` is served at `/api`, listed in the navigation, added to the sitemap, and indexed for search.

## Frontmatter

```md title="src/content/docs/api.md"
---
title: API
description: One line about the page.
order: 2
---
```

| Field | Type | Description |
| --- | --- | --- |
| `title` | `string` | The page's heading and its name in the navigation. |
| `description` | `string` | The page's description for search engines and search results. |
| `order` | `number` | The page's place in the navigation. Pages without one come last, by title. |

## Headings

Start sections with `##` and subsections with `###`. Both appear in the page's outline and in search.

### Subsections

A subsection is indented in the outline.

## Code

Fence code with a language. `ts`, `shell`, `css`, `xml`, and `mermaid` are highlighted, with `js`, `bash`, and `html` as aliases.

```ts
import { run } from 'your-package';

const result = run('input', { strict: true });
```

Add a title to label the block:

```css title="theme.css"
:root {
  --accent: #5aa2ff;
}
```

Every block has a copy button. Inline code such as `run()` is highlighted when it reads as code.

## Tables

Tables scroll sideways on a narrow screen. A row whose first cell is `code` is indexed for search as a field, so searching for `order` finds its row above.

## Notes

> **Note.** A blockquote is drawn as a panel. Use it for something the reader should not miss.

## Links

Link to another page with `[Theming](/theming)` and to a section with `[Code](#code)`. Links to other sites open in a new tab.

## Markdown for agents

Every page is also served as Markdown, at its path with `.md` added. The buttons under a page's title copy or open it.

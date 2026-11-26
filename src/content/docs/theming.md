---
title: Theming
description: Colors, fonts, and layout.
order: 4
---

The site is styled with CSS variables, set at the top of `src/styles/base.scss`.

## Colors

| Variable | Default | Used for |
| --- | --- | --- |
| `--ink` | `#100f0f` | The page background |
| `--panel` | `#1c1b1a` | Code blocks, cards, and tables |
| `--line` | `#282726` | Borders |
| `--body` | `#cecdc3` | Text |
| `--paper` | `#cecdc3` | Headings and emphasized text |
| `--muted` | `#878580` | Secondary text |
| `--faint` | `#575653` | Tertiary text |
| `--accent` | `#5aa2ff` | Links, the current page, buttons, and focus rings |
| `--accent-hover` | `#8fc0ff` | Links under the pointer |

To change the accent, set two variables:

```css title="src/styles/base.scss"
:root {
  --accent: #5aa2ff;
  --accent-hover: #8fc0ff;
}
```

Code is colored by the `--syntax-*` variables.

## Fonts

| Variable | Font | Used for |
| --- | --- | --- |
| `--font-sans` | Geist | Text |
| `--font-mono` | Geist Mono | Code |
| `--font-display` | Geist Pixel | The wordmark and headings |

The fonts are bundled. To use another, import it in `src/layouts/BaseLayout.astro` and name it in the variable. Headings are styled in `src/styles/typography.scss`.

## Layout

| Variable | Default | Sets |
| --- | --- | --- |
| `--reading` | 42 times the body size | The width of the text column |
| `--font-size-body` | `1rem` to `1.125rem` | The size of body text |
| `--radius-panel` | `10.5px` | The corners of panels |

The navigation's side is set by `sidebar` in `site.config.ts`. See [Configuration](/configuration#site).

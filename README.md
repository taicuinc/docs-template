# taicudocs

A dark, single-column documentation site: a home page, Markdown docs, search (⌘K), a page
outline, a mobile menu, and a Markdown version of every page. Built with Astro; the output
is static files.

## Develop

Node 24 and pnpm 12.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site in dist/
pnpm check    # type check
pnpm deploy   # build, then publish to Cloudflare Workers (set the name in wrangler.jsonc)
```

## Start a new site

| What | Where |
| --- | --- |
| Name, title, description, URL, repository, package name, sidebar side, header links, footer | `site.config.ts` |
| Home page: hero and sections | `src/content/home.ts` |
| Docs pages | `src/content/docs/*.md` |
| Logo and favicon | `public/logo.svg`, `public/favicon.svg` |
| Colors, fonts, sizes | CSS variables at the top of `src/styles/base.scss` |

The pages that ship with the template document it: Getting started, Writing pages,
Configuration, and Theming.

## License

MIT, see `LICENSE`. The design and code derive from the website of
[Pele](https://github.com/obsidianmd/pele) by kepano; its copyright notice has to stay in
`LICENSE`.

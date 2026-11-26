# taicudocs

Astro static docs site. See README.md for structure.

- Node 24, pnpm 12. `pnpm dev`, `pnpm build`, `pnpm check` (type check; run after changes).
- Site identity: `site.config.ts`. Home page: `src/content/home.ts`. Docs: `src/content/docs/*.md`.
- Colors are CSS variables at the top of `src/styles/base.scss`; use `--accent` rather than a literal color.
- Comment only non-obvious decisions. Keep comments brief.

---
title: Getting started
description: Run the site and publish it.
order: 1
---

This site is a template. Replace its name, home page, and these pages with your own.

## Requirements

Node 24 and pnpm 12.

## Run it

```shell
pnpm install
pnpm dev
```

The site is served at `http://localhost:4321` and reloads as you edit.

## Make it yours

1. Set the name, description, and URL in `site.config.ts`. See [Configuration](/configuration).
2. Write the home page in `src/content/home.ts`.
3. Replace the pages in `src/content/docs`. See [Writing pages](/writing).
4. Replace `public/logo.svg` and `public/favicon.svg`.
5. Pick your colors. See [Theming](/theming).

## Build

```shell
pnpm build
```

The site is written to `dist` as static files. Host them anywhere.

## Deploy

`pnpm deploy` builds the site and publishes it to Cloudflare Workers with the settings in `wrangler.jsonc`. Set `name` there first.

> **Any static host works.** Upload `dist`, and serve `404.html` for paths that do not exist.

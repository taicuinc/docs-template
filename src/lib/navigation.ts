import { home } from '../content/home';
import { docs } from './docs';
import { site, type NavPage } from './site';

export const homePageId = 'introduction';

// The home page comes first, then the Markdown pages by `order`.
export const navPages: NavPage[] = [
  { id: homePageId, title: home.navTitle, href: '/', order: Number.NEGATIVE_INFINITY, summary: home.summary },
  ...docs.map((doc) => ({ id: doc.id, title: doc.title, href: `/${doc.id}`, order: doc.order, summary: doc.module.frontmatter.description })),
];

export const headerLinks = site.headerLinks;
export const isExternal = (href: string) => /^https?:\/\//.test(href);

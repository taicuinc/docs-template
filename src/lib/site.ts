import site from '../../site.config';

export { site };
export type { SiteLink } from '../../site.config';

export interface Heading {
  depth: number;
  slug: string;
  text: string;
}

// A page in the documentation's navigation.
export interface NavPage {
  id: string;
  title: string;
  href: string;
  // Pages are listed in ascending order, after the home page.
  order: number;
  // Shown with the page in search results.
  summary?: string;
}

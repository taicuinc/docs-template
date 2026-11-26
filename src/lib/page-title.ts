import { site } from './site';

export function formatPageTitle(title?: string): string {
  return title ? `${title} · ${site.name}` : site.title;
}

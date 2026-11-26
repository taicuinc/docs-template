import type { APIRoute } from 'astro';
import { navPages } from '../lib/navigation';

export const GET: APIRoute = ({ site }) => {
  const routes = navPages.map((page) => page.href);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${new URL(route, site)}</loc></url>`).join('')}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

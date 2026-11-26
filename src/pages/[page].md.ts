import type { APIRoute } from 'astro';
import { formatPageTitle } from '../lib/page-title';
import { docs, getDoc } from '../lib/docs';

export function getStaticPaths() {
  return docs.map((doc) => ({ params: { page: doc.id } }));
}

// The page's source, without the fields that only place it in this site's navigation.
const markdown = (source: string) => source.replace(/^---\n[\s\S]*?\n---\n/, (frontmatter) => frontmatter
  .replace(/^(?:order|nav): .*\n/gm, '')
  .replace(/^title: (.+)$/m, (_line, title: string) => `title: ${formatPageTitle(title)}`));

export const GET: APIRoute = ({ params }) => new Response(markdown(getDoc(params.page!).source), {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
});

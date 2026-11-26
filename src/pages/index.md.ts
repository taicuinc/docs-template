import type { APIRoute } from 'astro';
import { home } from '../content/home';
import type { HomeSection } from '../lib/home';
import { site } from '../lib/site';

const cell = (value: string) => value.replaceAll('|', '\\|');

function body(section: HomeSection): string {
  switch (section.type) {
    case 'comparison': return [
      ...(section.description ? [section.description, ''] : []),
      `| | ${section.columns.map(cell).join(' | ')} |`,
      `| --- | ${section.columns.map(() => '---').join(' | ')} |`,
      ...section.rows.map((row) => `| ${cell([row.label, row.detail].filter(Boolean).join(' '))} | ${row.values.map(cell).join(' | ')} |`),
    ].join('\n');
    case 'install': return [
      section.description,
      '```shell\nnpm install ' + site.packageName + '\n```',
      section.note,
      section.code && '```' + section.code.language + '\n' + section.code.source + '\n```',
    ].filter(Boolean).join('\n\n');
    case 'cards': return section.cards.map((card) => `### [${card.title}](${card.href})\n\n${card.description}`).join('\n\n');
    case 'text': return section.body;
    // A component of your own has no Markdown form.
    case 'custom': return '';
  }
}

const content = `---\ntitle: ${site.title}\ndescription: ${site.description}\n---\n\n# ${site.name}\n\n${home.hero.lede}\n\n`
  + home.sections.map((section) => `## ${section.title}\n\n${body(section)}`.trimEnd()).join('\n\n') + '\n';

export const GET: APIRoute = () => new Response(content, {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
});

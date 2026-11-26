import type { HomeContent } from '../lib/home';
import site from '../../site.config';

// The home page: a hero, then sections in order. Text is inline Markdown: links and `code`.
// The same content is served as Markdown at /index.md.
export const home: HomeContent = {
  navTitle: 'Introduction',
  summary: 'What the project is, why to use it, and how to install it.',
  hero: {
    logo: { src: '/logo.svg', width: 96, height: 96 },
    lede: `Project is an [open source](${site.repositoryUrl}) something that does one thing well. Say what it is in a sentence, and [link to the first page](/getting-started) someone should read.`,
  },
  sections: [
    {
      type: 'comparison',
      id: 'why',
      title: 'Why Project?',
      description: 'A sentence or two on what sets it apart, then the numbers.',
      columns: ['Project', 'The alternative'],
      rows: [
        { label: 'Bundle size', detail: 'gzip', values: ['12 kB', '140 kB'] },
        { label: 'Dependencies', values: ['0', '23'] },
        { label: 'Configuration', values: ['One file', 'Several files'] },
      ],
    },
    {
      type: 'install',
      id: 'install',
      title: 'Install',
      description: 'Add Project to your app, then follow [Getting started](/getting-started).',
      note: 'Call `run()` with your input.',
      code: {
        language: 'ts',
        source: `import { run } from '${site.packageName}';

const result = run('input');`,
      },
    },
    {
      type: 'cards',
      id: 'explore',
      title: 'Explore',
      cards: [
        { title: 'Getting started', description: 'Run the site and publish it.', href: '/getting-started' },
        { title: 'Writing pages', description: 'Markdown, code blocks, and tables.', href: '/writing' },
        { title: 'Configuration', description: 'Name the site and build the home page.', href: '/configuration' },
        { title: 'Theming', description: 'Colors, fonts, and layout.', href: '/theming' },
      ],
    },
    {
      type: 'text',
      id: 'about',
      title: 'About',
      body: `Project is [open source](${site.repositoryUrl}). Use this paragraph for who makes it, who uses it, or where to get help.`,
    },
  ],
};

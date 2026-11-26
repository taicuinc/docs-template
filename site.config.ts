// Everything that names the site. Page content lives in src/content.
export interface SiteLink {
  label: string;
  href: string;
  // The inner markup of a 24×24 stroked SVG icon.
  icon?: string;
}

export interface SiteConfig {
  name: string;
  // The home page's title. Other pages are titled `Page · name`.
  title: string;
  description: string;
  url: string;
  repositoryUrl: string;
  // Used by the install commands on the home page.
  packageName: string;
  // Paths under public/. The social image is 1200×630; leave it out to publish without one.
  favicon: string;
  socialImage?: string;
  // Which side of the page the navigation is on, on a wide screen.
  sidebar: 'left' | 'right';
  // Links under the search in the sidebar, in the mobile menu, and in the footer.
  headerLinks: SiteLink[];
  footer: {
    // Inline Markdown: links and `code`.
    note: string;
    author?: { name: string; href: string; avatar: string; prefix?: string };
  };
}

const site: SiteConfig = {
  name: 'Project',
  title: 'Project · A short line about what it does',
  description: 'One or two sentences that say what the project is and who it is for.',
  url: 'https://example.com',
  repositoryUrl: 'https://github.com/you/project',
  packageName: 'your-package',
  favicon: '/favicon.svg',
  sidebar: 'right',
  headerLinks: [
    { label: 'GitHub', href: 'https://github.com/you/project', icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>' },
  ],
  footer: {
    note: 'Project is [open source](https://github.com/you/project) under the MIT license.',
  },
};

export default site;

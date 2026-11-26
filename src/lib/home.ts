import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { CodeLanguage } from './highlight';

interface SectionBase {
  // The heading's anchor, and its title in the page's outline.
  id: string;
  title: string;
}

// A table that compares the columns, row by row.
export interface ComparisonSection extends SectionBase {
  type: 'comparison';
  description?: string;
  columns: string[];
  rows: { label: string; detail?: string; values: string[] }[];
}

// Install commands for each package manager, then an optional note and code sample.
export interface InstallSection extends SectionBase {
  type: 'install';
  description?: string;
  note?: string;
  code?: { language: CodeLanguage; source: string };
}

export interface CardsSection extends SectionBase {
  type: 'cards';
  cards: { title: string; description: string; href: string }[];
}

export interface TextSection extends SectionBase {
  type: 'text';
  body: string;
}

// An Astro component of your own. It is given `id` and `title`, and renders its own heading.
export interface CustomSection extends SectionBase {
  type: 'custom';
  component: AstroComponentFactory;
}

export type HomeSection = ComparisonSection | InstallSection | CardsSection | TextSection | CustomSection;

export interface HomeContent {
  // The home page's name in the navigation, and its line in search results.
  navTitle: string;
  summary: string;
  hero: {
    logo?: { src: string; width: number; height: number; alt?: string };
    lede: string;
  };
  sections: HomeSection[];
}

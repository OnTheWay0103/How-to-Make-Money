/**
 * Schema.org structured-data generators (JSON‑LD).
 *
 * Every function returns a plain JavaScript object ready to be serialised
 * as <script type="application/ld+json">.  No external dependencies.
 *
 * @see https://schema.org
 */

import { SITE_CONFIG } from './seo-config';

/* ─── Shared helpers ─────────────────────────────────────────── */

/** Absolute URL helper — ensures the path is joined to the site root. */
function absUrl(path: string): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, '');
  const clean = path.replace(/^\/?/, '/');
  return `${base}${clean}`;
}

/* ─── 1. WebSite Schema ──────────────────────────────────────── */

/**
 * Global WebSite schema — should be rendered on **every** page
 * (typically in the root layout) so search engines understand the
 * site as a whole and see the built‑in search action.
 */
export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ─── 2. VideoGame Schema ────────────────────────────────────── */

/**
 * VideoGame schema for the homepage.
 *
 * Describes Welcome to Elderfield as a software application / video game so
 * rich results can display the Steam link, genre, platform, etc.
 * Price is intentionally omitted — the official price had not been
 * announced as of 2026-08-30.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Welcome to Elderfield',
    description:
      'A cosy horror RPG by Chris Cote and published by Kwalee. Hand-drawn horror-manga art, a dark lofi soundtrack by Dated, farming with a Lovecraftian twist, turn-based combat, mystery investigation and relationships in the isolated town of Elderfield.',
    url: 'https://store.steampowered.com/app/3195440/Welcome_to_Elderfield/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['RPG', 'Horror', 'Farming Sim', 'Lovecraftian', 'Adventure', 'Pixel Graphics'],
    author: {
      '@type': 'Person',
      name: 'Chris Cote',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kwalee',
    },
    datePublished: '2026-09-10',
    platform: 'PC',
  };
}

/* ─── 3. FAQPage Schema ──────────────────────────────────────── */

/**
 * FAQPage schema for the FAQ page or any page with a FAQ section.
 *
 * Each question should be a concise string; each answer should be
 * a complete sentence (or short paragraph).
 *
 * @example
 *   faqPageSchema([
 *     { question: 'Is Welcome to Elderfield free?', answer: 'No — the demo is free, the full game is paid.' },
 *     { question: 'Can I play solo?',   answer: 'Yes — the game is single-player only.' },
 *   ])
 */
export function faqPageSchema(
  questions: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

/* ─── 4. Article Schema ──────────────────────────────────────── */

/**
 * Article schema for individual guide / wiki pages.
 *
 * Provide the frontmatter values from the Markdown file.  The
 * `url` should be the **canonical** page URL (absolute).
 */
export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/* ─── 5. BreadcrumbList Schema ───────────────────────────────── */

/**
 * BreadcrumbList schema for hierarchical navigation.
 *
 * Each item is rendered as a ListItem with position (1‑based).
 *
 * @example
 *   breadcrumbSchema([
 *     { name: 'Home',     url: '/' },
 *     { name: 'Guides',   url: '/guides' },
 *     { name: 'Crafting', url: '/guides/crafting-guide' },
 *   ])
 */
export function breadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

/* ─── 6. ItemList Schema ─────────────────────────────────────── */

/**
 * ItemList schema for hub / index pages that list multiple guides.
 *
 * Useful on the homepage featured section, the /guides listing page,
 * the /tier-list page, etc.
 */
export function itemListSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absUrl(item.url),
    })),
  };
}

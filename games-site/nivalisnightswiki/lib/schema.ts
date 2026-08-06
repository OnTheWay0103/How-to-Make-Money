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
 * Describes Nivalis Nights as a software application / video game so
 * rich results can display the Steam link, genre, platform, etc.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Nivalis Nights',
    description:
      'A cyberpunk life simulation game set in the rain-soaked city of Nivalis. Inherit a noodle bar, build an empire of food stalls, restaurants and nightclubs, go fishing from your private boat, make friends and rivals among 135+ citizens, and take part in the city’s chess tournament. From ION LANDS, published by 505 Games.',
    url: 'https://store.steampowered.com/app/1488490/Nivalis_Nights/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Simulation', 'Life Simulation', 'Cyberpunk', 'Indie', 'Single-Player'],
    author: {
      '@type': 'Organization',
      name: 'ION LANDS',
    },
    publisher: {
      '@type': 'Organization',
      name: '505 Games',
    },
    datePublished: '2026-09-29',
    platform: ['Steam', 'Epic Games Store'],
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
 *     { question: 'When does Nivalis Nights release?', answer: 'It launches on September 29, 2026 on Steam.' },
 *     { question: 'Is it single-player?',   answer: 'Yes — Nivalis Nights is a single-player experience.' },
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

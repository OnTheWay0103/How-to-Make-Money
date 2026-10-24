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
 * ⚠️ Attribution: Wych Elm is the **developer**; Team17 is the
 * **publisher**. Never collapse the two — Steam reports
 * `developers: ["Wych Elm"]` and `publishers: ["Team17"]`.
 *
 * Price reflects Steam's `price_overview` for the US store as of
 * 2026-10-24: $24.99 USD, no discount. The game is released
 * (`coming_soon: false`, released 2026-10-08).
 *
 * `operatingSystem` reflects Steam's platform data, which lists
 * Windows only; the console versions are announced but are not
 * represented by this Steam-scoped schema.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Silver Pines',
    description:
      'A survival horror metroidvania set in small-town America, developed by Wych Elm and published by Team17. Private investigator Red Walker searches for a vanished musician, Eddie Velvet, while managing scarce ammunition, a limited inventory and a save system that costs coins.',
    url: 'https://store.steampowered.com/app/2333000/Silver_Pines/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Survival Horror', 'Metroidvania', 'Action', 'Adventure'],
    author: {
      '@type': 'Organization',
      name: 'Wych Elm',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Team17',
    },
    offers: {
      '@type': 'Offer',
      price: '24.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/2333000/Silver_Pines/',
    },
    datePublished: '2026-10-08',
    gamePlatform: [
      'PC',
      'PlayStation 5',
      'Xbox Series X|S',
      'Nintendo Switch',
      'Nintendo Switch 2',
    ],
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
 *     { question: 'When did Silver Pines come out?', answer: 'It was released on October 8, 2026.' },
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

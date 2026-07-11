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
 * Describes Echoes of Aincrad as a software application / video game so
 * rich results can display the Steam link, genre, platform, etc.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'The Mound: Omen of Cthulhu',
    description:
      'A 1-4 player co-op PvE extraction horror game set in 1652 Chile. Descend into a Lovecraftian jungle, manage your sanity, fight the Y\'m-bhi, and extract before the forest awakens.',
    url: 'https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Horror', 'Co-op', 'Extraction', 'Survival', 'Lovecraftian', 'First-Person'],
    author: {
      '@type': 'Organization',
      name: 'ACE Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NACON',
    },
    offers: {
      '@type': 'Offer',
      price: '29.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/',
    },
    datePublished: '2026-07-15',
    platform: 'Steam',
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
 *     { question: 'Is Echoes of Aincrad free?', answer: 'No, it is a paid game on Steam.' },
 *     { question: 'Can I play solo?',   answer: 'Yes — the game scales for 1–4 players.' },
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

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
 * Describes Grain Rot as a software application / video game so
 * rich results can display the Steam link, genre, platform, etc.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Grain Rot',
    description:
      'A horror co-op extraction builder where you and up to 3 friends descend into procedurally shifting underground ruins as Living Sparks inhabiting fragile wooden vessels. Scavenge loot, fight Corrupted, rebuild your Outpost, and extract before the Rot consumes you.',
    url: 'https://store.steampowered.com/app/4450620/GRAIN_ROT/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Horror', 'Co-op', 'Extraction', 'Building', 'Action'],
    author: {
      '@type': 'Organization',
      name: 'Beck & Branch Games',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neem Interactive',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/4450620/GRAIN_ROT/',
    },
    datePublished: '2026-08-07',
    platform: 'Steam',
  };
}

/* ─── 3. FAQPage Schema ──────────────────────────────────────── */

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

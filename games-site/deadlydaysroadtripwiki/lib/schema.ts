/**
 * Schema.org structured-data generators (JSON‑LD) for Deadly Days: Roadtrip Wiki.
 *
 * Every function returns a plain JavaScript object ready to be serialised
 * as <script type="application/ld+json">. No external dependencies.
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
 * Describes Deadly Days: Roadtrip as a video game so rich results can display the
 * Steam link, developer, publisher, release date, and platforms.
 */
export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Deadly Days: Roadtrip',
    description:
      'Unofficial wiki and guide hub for Deadly Days: Roadtrip, developed by Pixelsplit and published by Sidekick Publishing.',
    url: 'https://store.steampowered.com/app/3026450/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Video Game'],
    author: {
      '@type': 'Organization',
      name: 'Pixelsplit',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sidekick Publishing',
    },
    datePublished: '2026-10-29',
    platform: ['Steam', 'PC'],
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

/**
 * Next.js Metadata API helpers for Silver Pines Wiki.
 *
 * Provides a single `generateGuideMetadata()` factory so every
 * guide page produces consistent <title>, meta description, OG
 * tags, Twitter cards, and robots directives from its frontmatter.
 *
 * The default metadata object (`defaultMetadata`) is intended to be
 * re‑exported from the root layout via:
 *
 *   export const metadata = defaultMetadata;
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */

import type { Metadata } from 'next';
import { SITE_CONFIG } from './seo-config';

/* ─── Default metadata (export from root layout) ─────────────── */

/**
 * Catch‑all metadata applied to every page unless a page overrides it.
 *
 * - title uses a template so child pages produce `Page Name · Silver Pines Wiki`
 * - robots defaults to index,follow
 * - Open Graph and Twitter card are configured with the site logo
 *
 * ⚠️ Keyword policy (per the 2026-09-16 build gate): the bare query
 * `Silver Pines` is heavily polluted by unrelated entities (a mobile
 * home park, a healthcare group, a ranch resort chain, a rehab centre,
 * and World of Warcraft's Silverpine Forest). Only 3 of the first 10
 * Google Suggest results for the bare name belong to this game. Every
 * keyword below is therefore anchored to `silver pines game`, or to a
 * `wiki` / `steam` / platform / mechanic qualifier that resolves to the
 * game rather than to a namesake business.
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s · ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    'Silver Pines game',
    'Silver Pines game wiki',
    'Silver Pines wiki',
    'Silver Pines game guide',
    'Silver Pines Steam',
    'Silver Pines demo',
    'Silver Pines game release date',
    'Silver Pines game price',
    'Silver Pines game platforms',
    'Silver Pines PS5',
    'Silver Pines Switch',
    'Silver Pines Wych Elm',
    'Silver Pines Team17',
    'Silver Pines survival horror metroidvania',
    'Silver Pines phone booth save',
    'Silver Pines save coins',
    'Silver Pines walkthrough',
    'Silver Pines beginner guide',
  ],

  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 512, height: 512 }],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

/* ─── Guide‑page metadata factory ────────────────────────────── */

export interface GuideFrontmatter {
  /** Page <title> / og:title */
  title: string;
  /** Meta description / og:description */
  description: string;
  /** Content keywords for robots */
  keywords: string[];
  /** ISO‑8601 date of last content update (e.g. "2026-09-16") */
  updated: string;
  /** URL slug (without leading slash or .md extension) */
  slug: string;
  /** Optional override for the published date (defaults to updated) */
  published?: string;
  /** Optional override for the OG image path (relative to site root) */
  ogImage?: string;
}

/**
 * Build a complete Metadata object for a guide / wiki page.
 *
 * Usage from a page or layout:
 *
 *   export const metadata = generateGuideMetadata({
 *     title: 'Beginner Guide',
 *     description: '...',
 *     keywords: ['silver pines game guide'],
 *     updated: '2026-09-16',
 *     slug: 'silver-pines-beginner-guide',
 *   });
 */
export function generateGuideMetadata(
  frontmatter: GuideFrontmatter,
): Metadata {
  const url = `${SITE_CONFIG.url}/guides/${frontmatter.slug}`;
  const ogImage = frontmatter.ogImage ?? SITE_CONFIG.ogImage;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    // Canonical URL — tells search engines which URL is the authoritative one.
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.name,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: frontmatter.published ?? frontmatter.updated,
      modifiedTime: frontmatter.updated,
      images: [{ url: ogImage, width: 512, height: 512 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

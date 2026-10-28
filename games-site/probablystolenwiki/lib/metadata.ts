/**
 * Next.js Metadata API helpers for Probably Stolen Wiki.
 *
 * Provides a single `generateGuideMetadata()` factory so every
 * guide page produces consistent <title>, meta description, OG
 * tags, Twitter cards, and robots directives from its frontmatter.
 */

import type { Metadata } from 'next';
import { SITE_CONFIG } from './seo-config';

/* ─── Default metadata (export from root layout) ─────────────── */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s · ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    'Probably Stolen',
    'Probably Stolen wiki',
    'Probably Stolen guide',
    'Probably Stolen guides',
    'Probably Stolen walkthrough',
    'Probably Stolen tips',
    'Probably Stolen starting scenarios',
    'Probably Stolen upgrade priority',
    'Probably Stolen beginner guide',
    'Probably Stolen water guide',
    'Probably Stolen achievements',
    'Probably Stolen release date',
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
  /** ISO‑8601 date of last content update (e.g. "2026-10-24") */
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

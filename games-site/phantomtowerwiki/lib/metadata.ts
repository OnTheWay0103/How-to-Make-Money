/**
 * Next.js Metadata API helpers for Phantom Tower Wiki.
 *
 * Provides a single `generateGuideMetadata()` factory so every
 * guide page produces consistent <title>, meta description, OG
 * tags, Twitter cards, and robots directives from its frontmatter.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
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
    'Phantom Tower',
    'Phantom Tower wiki',
    'Phantom Tower guide',
    'Phantom Tower builds',
    'Phantom Tower classes',
    'Phantom Tower weapons',
    'Phantom Tower elements',
    'Phantom Tower beginner guide',
    'Phantom Tower tips',
    'Phantom Tower bosses',
    'Phantom Tower blessings',
    'Phantom Tower tier list',
    'Phantom Tower survival mode',
    'Phantom Tower elemental reactions',
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
  title: string;
  description: string;
  keywords: string[];
  updated: string;
  slug: string;
  published?: string;
  ogImage?: string;
}

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

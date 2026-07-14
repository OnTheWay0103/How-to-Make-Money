import type { Metadata } from 'next';
import { SITE_CONFIG } from './seo-config';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s · ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Skills & Raids',
    'Skills and Raids wiki',
    'Skills & Raids guide',
    'Skills & Raids builds',
    'Skills & Raids extraction',
    'Skills & Raids skills',
    'Skills & Raids beginner guide',
    'Skills & Raids crafting',
    'Skills & Raids weapons',
    'Skills & Raids maps',
    'Skills & Raids tier list',
    'extraction RPG',
    'team-based RPG',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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

export interface GuideFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  updated: string;
  slug: string;
  published?: string;
  ogImage?: string;
}

export function generateGuideMetadata(frontmatter: GuideFrontmatter): Metadata {
  const url = `${SITE_CONFIG.url}/guides/${frontmatter.slug}`;
  const ogImage = frontmatter.ogImage ?? SITE_CONFIG.ogImage;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: { canonical: url },
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
      googleBot: { index: true, follow: true },
    },
  };
}

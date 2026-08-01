import { SITE_CONFIG } from './seo-config';

function absUrl(path: string): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, '');
  const clean = path.replace(/^\/?/, '/');
  return `${base}${clean}`;
}

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

export function videoGameSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'MineGeon: Renegades',
    description:
      'A 1-3 player co-op sci-fi bullet-hell roguelite focused on resource gathering. Choose Marshall, Trevor, or Ari, descend the procedurally generated minegeons of PAIMO, mine minerals for permanent upgrades, and fight the Scavengers and biome bosses.',
    url: 'https://store.steampowered.com/app/3227240/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['Action Roguelike', 'Bullet Hell', 'Co-op', 'Mining', 'Sci-fi', 'Indie'],
    author: { '@type': 'Organization', name: 'Kickstone Studio' },
    publisher: { '@type': 'Organization', name: 'Kickstone Studio' },
    offers: {
      '@type': 'Offer',
      price: '77',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/3227240/',
    },
    datePublished: '2026-07-30',
    platform: 'Steam',
  };
}

export function faqPageSchema(questions: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

export function articleSchema(title: string, description: string, url: string, datePublished: string, dateModified: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    publisher: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
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

export function itemListSchema(items: { name: string; url: string }[]): Record<string, unknown> {
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

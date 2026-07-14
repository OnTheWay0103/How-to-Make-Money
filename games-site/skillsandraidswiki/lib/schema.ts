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
    name: 'Skills & Raids',
    description:
      'A team-based extraction RPG blending tactical turn-based combat with high-stakes raid extraction. Build your squad, mix skills across 5 rarity tiers, craft gear, and extract alive.',
    url: 'https://store.steampowered.com/app/3357710/Skills__Raids/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['RPG', 'Extraction', 'Turn-Based', 'Tactical', 'Team-Based', 'Fantasy'],
    author: { '@type': 'Person', name: 'Lootsurvivor' },
    publisher: { '@type': 'Organization', name: 'Lootsurvivor' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/3357710/Skills__Raids/',
    },
    datePublished: '2026-07-01',
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

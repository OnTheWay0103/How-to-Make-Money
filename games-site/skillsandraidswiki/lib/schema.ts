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
      'A party-based extraction RPG by solo developer Eddie H. Hinestroza. Command Shelldon, Clawrk, and Owlivia in real-time ability-driven combat, extract resources, and craft gear and skills between runs.',
    url: 'https://store.steampowered.com/app/4401370/Skills__Raids/',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    genre: ['RPG', 'Extraction', 'Dungeon Crawler', 'Real-Time with Pause', 'Dark Fantasy', 'Party-Based'],
    author: { '@type': 'Person', name: 'Eddie H. Hinestroza' },
    publisher: { '@type': 'Organization', name: 'Eddie H. Hinestroza' },
    offers: {
      '@type': 'Offer',
      price: '42',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      url: 'https://store.steampowered.com/app/4401370/Skills__Raids/',
    },
    datePublished: '2026-07-27',
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

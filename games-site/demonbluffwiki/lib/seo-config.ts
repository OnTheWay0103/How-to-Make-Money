export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Demon Bluff Wiki',
  shortName: 'Demon Bluff Wiki',
  description: 'Unofficial Demon Bluff wiki: card roles, ability order, mode guides and deckbuilding tips for this social deduction roguelite, updated as patches land.',
  url: 'https://demonbluffwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: 'G-P13TN2YD87',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

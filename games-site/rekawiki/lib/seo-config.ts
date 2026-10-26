export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'REKA Game Wiki',
  shortName: 'REKA Game Wiki',
  description: 'Unofficial REKA game wiki and guide hub — cooking recipes, beginner tips, flour and salt sources, cottage building, quests and FAQs, updated as patches land.',
  url: 'https://rekawiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: '',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

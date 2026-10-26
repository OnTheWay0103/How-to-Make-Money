export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'GONE Fishing Horror Game Wiki',
  shortName: 'GONE Fishing Horror Game Wiki',
  description: 'An unofficial GONE Fishing horror game wiki: co-op roles, daily sacrifice routes, enemy survival, perks, the Lake Entity boss, and legendary fish.',
  url: 'https://gonefishingwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: '',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

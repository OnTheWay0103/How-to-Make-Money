export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Probably Stolen Wiki',
  shortName: 'Probably Stolen Wiki',
  description: 'Probably Stolen wiki and guides: release date, price, the nine starting scenarios, water trading, black market reputation, and the Aquafarmer route.',
  url: 'https://probablystolenwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: 'G-PPHEP0XC8R',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

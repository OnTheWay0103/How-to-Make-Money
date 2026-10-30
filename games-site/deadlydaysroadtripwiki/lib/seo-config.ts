export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Deadly Days: Roadtrip Wiki',
  shortName: 'Deadly Days: Roadtrip Wiki',
  description: 'Unofficial Deadly Days: Roadtrip wiki and guide hub — beginner guides, tier lists, boss strategies, and FAQs for Deadly Days: Roadtrip, updated as patches land.',
  url: 'https://deadlydaysroadtripwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: '',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

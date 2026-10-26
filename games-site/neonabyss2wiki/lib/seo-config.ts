export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Neon Abyss 2 Wiki',
  shortName: 'Neon Abyss 2 Wiki',
  description: 'Unofficial Neon Abyss 2 wiki and guide hub — codes, beginner guides, tier lists, boss strategies, and FAQs for Neon Abyss 2, updated as patches land.',
  url: 'https://neonabyss2wiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: 'G-0JXZXK4RTC',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

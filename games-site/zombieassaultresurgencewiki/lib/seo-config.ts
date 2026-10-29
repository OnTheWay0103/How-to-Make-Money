export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Zombie Assault: Resurgence Wiki',
  shortName: 'Zombie Assault: Resurgence Wiki',
  description: 'Unofficial Zombie Assault: Resurgence guide hub — class builds, weapon tiers, mods, boss tips, and co-op answers for Ninja Kiwi’s top-down zombie shooter.',
  url: 'https://zombieassaultresurgencewiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // Fill in per site. Leave '' to render nothing.
  // GA4: create the property, then add the dashboard service account as a reader.
  googleAnalyticsId: '',
  // AdSense is paused project-wide (docs/STRATEGY-域名与部署.md §6) — leave ''.
  googleAdsenseId: '',
} as const;

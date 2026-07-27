export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#1a1a2e',
};

export const SITE_CONFIG = {
  name: 'Lunarium Wiki',
  shortName: 'Lunarium Wiki',
  description:
    'Unofficial Lunarium wiki and guide hub — combat guides, builds for Ave and Lune, boss strategies, skill trees, equipment, charm builds, walkthrough, and endings guide for the hand-drawn action RPG.',
  url: 'https://lunariumwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: 'G-G4GPXYJW7C',
  googleAdsenseId: '',
} as const;

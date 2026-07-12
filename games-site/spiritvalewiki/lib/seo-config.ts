export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#1a1a3e',
};

export const SITE_CONFIG = {
  name: 'SpiritVale Wiki',
  shortName: 'SpiritVale Wiki',
  description:
    'Unofficial SpiritVale wiki and guide hub — classes, builds, cards, bosses, crafting and beginner guide for the class-based MMORPG.',
  url: 'https://spiritvalewiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: '',
  googleAdsenseId: '',
} as const;

export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0f0f23',
};

export const SITE_CONFIG = {
  name: 'Delverium Wiki',
  shortName: 'Delverium Wiki',
  description:
    'Unofficial Delverium wiki and guide hub — release date, demo guide, co-op multiplayer, crafting recipes, builds, dungeons and bosses for the Sagestone Games survival sandbox RPG.',
  url: 'https://delveriumwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: 'G-79NJB5KFHX',
  googleAdsenseId: '',
} as const;

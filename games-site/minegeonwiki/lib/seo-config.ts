export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#1a1a2e',
};

export const SITE_CONFIG = {
  name: 'MineGeon Wiki',
  shortName: 'MineGeon Wiki',
  description:
    'Unofficial MineGeon: Renegades wiki and guide hub — class builds, boss strategies, mining tips, crafting recipes, base building, and beginner guide for the 1-3 player co-op roguelite.',
  url: 'https://minegeonwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: 'G-GWZ0DR4S01',
  googleAdsenseId: '',
} as const;

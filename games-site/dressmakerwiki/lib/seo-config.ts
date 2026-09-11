export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0f0f23',
};

export const SITE_CONFIG = {
  name: 'Dressmaker Wiki',
  shortName: 'Dressmaker Wiki',
  description:
    'Unofficial Dressmaker wiki and guide hub for the cozy dressmaking simulation developed by Cozy Lives and published by Free Lives — release date, price, platforms, the free itch.io prototype vs the Steam game, and beginner guides to fabric, patterns and sewing.',
  url: 'https://dressmakerwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: '',
  googleAdsenseId: 'ca-pub-7211682665758448',
} as const;

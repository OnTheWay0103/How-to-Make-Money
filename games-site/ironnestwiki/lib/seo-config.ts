export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Iron Nest Wiki',
  shortName: 'Iron Nest Wiki',
  description:
    'Unofficial Iron Nest wiki and guide hub — heavy turret simulator guides for IRON NEST: Heavy Turret Simulator. Map plotting, ballistic calculator, shell types, upgrades, counter-battery tactics and beginner tips.',
  url: 'https://ironnestwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: 'G-1HJWW5Z0S8',
  googleAdsenseId: '',
} as const;

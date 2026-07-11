export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'The Mound Wiki',
  shortName: 'The Mound Wiki',
  description:
    'Unofficial The Mound: Omen of Cthulhu wiki and guide hub — weapons, enemies, sanity system, contracts, extraction tips and beginner guide for the ACE Team co-op Lovecraftian horror game.',
  url: 'https://themoundwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: '',
  googleAdsenseId: '',
} as const;

export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'DREADMOOR Wiki',
  shortName: 'DREADMOOR Wiki',
  description:
    'Unofficial DREADMOOR wiki and guide hub — fishing mechanics, bait and line tension, fish species, boat upgrades, survival, regions, combat, and Early Access details for the post-apocalyptic fishing horror game from Dream Dock.',
  url: 'https://dreadmoorwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  // TODO: replace with the real GA4 measurement ID before deployment.
  googleAnalyticsId: 'G-264X3F7FYX',
  googleAdsenseId: 'ca-pub-7211682665758448',
} as const;

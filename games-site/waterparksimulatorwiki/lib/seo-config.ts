export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#0d1117',
};

export const SITE_CONFIG = {
  name: 'Waterpark Simulator Wiki',
  shortName: 'WPS Wiki',
  description:
    'Unofficial Waterpark Simulator wiki and guide hub — slide tier lists, staff management, research tree, museum questline walkthroughs, visitor happiness tips, and money-making guides for the CayPlay waterpark management sim.',
  url: 'https://waterparksimulatorwiki.vercel.app',
  ogImage: '/icon.png',
  locale: 'en_US',
  twitterHandle: '',
  googleAnalyticsId: '',
  googleAdsenseId: '',
} as const;

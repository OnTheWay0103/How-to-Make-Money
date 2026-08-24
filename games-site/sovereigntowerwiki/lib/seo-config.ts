/**
 * Default viewport / theme-color settings.
 *
 * Export this alongside `defaultMetadata` in the root layout:
 *
 *   export const viewport = defaultViewport;
 */
export const defaultViewport = {
  width: 'device-width' as const,
  initialScale: 1,
  themeColor: '#1a1a2e', // deep blue-purple matching the game aesthetic
};

/**
 * Global SEO configuration for Sovereign Tower Wiki.
 *
 * Centralises all site-wide meta values so URLs, descriptions, and
 * social-card settings can be changed in a single place.
 *
 * Use `SITE_CONFIG.url` as the base when constructing absolute URLs
 * throughout the application; replace the placeholder value once the
 * real domain is registered.
 */
export const SITE_CONFIG = {
  /** Human-readable site name used in <title>, og:site_name, etc. */
  name: 'Sovereign Tower Wiki',

  /** Short name for PWA / structured-data contexts. */
  shortName: 'Sovereign Tower Wiki',

  /** Default meta description — shown in search-engine snippets. */
  description:
    'Unofficial Sovereign Tower wiki and guide hub — knight recruitment, romance options, factions, time rewind, and beginner guides for the Arthurian round-table management RPG by WILD WITS / Curve Games.',

  /** Canonical base URL (trailing slash omitted). */
  url: 'https://sovereigntowerwiki.vercel.app',

  /** Default Open Graph / Twitter card image (relative to url). */
  ogImage: '/icon.png',

  /** Content locale (ISO 639‑1 + ISO 3166‑1 alpha‑2). */
  locale: 'en_US',

  /** Optional Twitter/X handle (omit the @). */
  twitterHandle: '',

  /* ─── Third‑party integration IDs (fill in when available) ─── */

  /** Google Analytics 4 measurement ID — deferred to main Agent setup. */
  googleAnalyticsId: '',

  /** Google AdSense publisher ID (e.g. ca-pub-XXXXXXXXXXXXXXXX). */
  googleAdsenseId: 'ca-pub-7211682665758448',
} as const;

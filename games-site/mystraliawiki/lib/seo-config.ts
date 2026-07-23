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
 * Global SEO configuration for Echoes of Mystralia Wiki.
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
  name: 'Echoes of Mystralia Wiki',

  /** Short name for PWA / structured-data contexts. */
  shortName: 'Mystralia Wiki',

  /** Default meta description — shown in search-engine snippets. */
  description:
    'Unofficial Echoes of Mystralia wiki and guide hub — spell crafting builds, all 110 Memories, Relics, Guardian boss strategies, Lotus progression, and beginner guide for the Borealys Games action-RPG roguelite.',

  /** Canonical base URL (trailing slash omitted). */
  url: 'https://mystraliawiki.vercel.app',

  /** Default Open Graph / Twitter card image (relative to url). */
  ogImage: '/icon.png',

  /** Content locale (ISO 639‑1 + ISO 3166‑1 alpha‑2). */
  locale: 'en_US',

  /** Optional Twitter/X handle (omit the @). */
  twitterHandle: '',

  /* ─── Third‑party integration IDs (fill in when available) ─── */

  /** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). */
  googleAnalyticsId: 'G-16X86K2J44',

  /** Google AdSense publisher ID (e.g. ca-pub-XXXXXXXXXXXXXXXX). */
  googleAdsenseId: '',
} as const;

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
  themeColor: '#2a1a0a', // dark brown-gold matching dwarf mining aesthetic
};

/**
 * Global SEO configuration for Dwarf Delve Wiki.
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
  name: 'Dwarf Delve Wiki',

  /** Short name for PWA / structured-data contexts. */
  shortName: 'Dwarf Delve Wiki',

  /** Default meta description — shown in search-engine snippets. */
  description:
    'Unofficial Dwarf Delve wiki and guide hub — mining strategies, best gear, perks, crafting, enemies, extraction tips and beginner guide for the first-person extraction roguelite by Gloom Box.',

  /** Canonical base URL (trailing slash omitted). */
  url: 'https://dwarfdelvewiki.vercel.app',

  /** Default Open Graph / Twitter card image (relative to url). */
  ogImage: '/icon.png',

  /** Content locale (ISO 639‑1 + ISO 3166‑1 alpha‑2). */
  locale: 'en_US',

  /** Optional Twitter/X handle (omit the @). */
  twitterHandle: '',

  /* ─── Third‑party integration IDs (fill in when available) ─── */

  /** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). */
  googleAnalyticsId: '',

  /** Google AdSense publisher ID (e.g. ca-pub-XXXXXXXXXXXXXXXX). */
  googleAdsenseId: '',
} as const;

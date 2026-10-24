# DREADMOOR Wiki

Unofficial fan wiki and guide hub for **DREADMOOR**, the first-person post-apocalyptic fishing survival horror game from Dream Dock, published by Digital Vortex Entertainment.

- Steam: https://store.steampowered.com/app/3629430/
- Early Access: November 9, 2026 — PC, $19.99, single-player
- Live site (planned): https://dreadmoorwiki.vercel.app

## Development

```bash
pnpm install
pnpm dev
```

Build:

```bash
pnpm build
```

## Content

Guides live in `content/guides/*.md` with YAML frontmatter. `related` must be a block YAML list, and each guide needs at least two `sources`, including one with `tier: "Official"`.

Nine launch guides:

- `beginner-guide`
- `fishing-guide`
- `fish-species-guide`
- `boat-upgrades-guide`
- `combat-guide`
- `survival-guide`
- `regions-guide`
- `early-access-roadmap`
- `faq`

## Configuration

- Site metadata: `lib/seo-config.ts`
- GA4 measurement ID: `SITE_CONFIG.googleAnalyticsId` — currently a placeholder (`G-XXXXXXXXXX`), replace before deployment
- AdSense client ID: `SITE_CONFIG.googleAdsenseId` — empty, so the AdSense script is not rendered
- GSC verification: `public/google12f8715471cef7b7.html`

## Notes

This is an unofficial fan project, not affiliated with Dream Dock or Digital Vortex Entertainment. Unconfirmed mechanics are labeled in the guides rather than presented as fact.

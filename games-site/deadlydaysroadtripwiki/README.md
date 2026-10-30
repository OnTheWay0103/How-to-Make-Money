# Deadly Days: Roadtrip Wiki

Unofficial wiki and guide hub for **Deadly Days: Roadtrip**, developed by Pixelsplit and published by Sidekick Publishing.

- Live site: https://deadlydaysroadtripwiki.vercel.app
- Steam: https://store.steampowered.com/app/3026450/
- Release date: 2026-10-29

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

Guides live in `content/guides/*.md` with YAML frontmatter. `related` must be a block YAML list,
and each guide needs at least two `sources`, including one with `tier: "Official"`.
See `docs/STRATEGY-内容生产.md` for the page matrix and writing spec.

## Configuration

- Site metadata: `lib/seo-config.ts` (GA4 id empty until the property exists)
- Ad slots: `lib/adsterra-zones.ts` — injected by `scripts/adsterra-sync.mjs`, never edited by hand

## Notes

Unofficial fan project, not affiliated with Pixelsplit / Sidekick Publishing.
Unconfirmed mechanics are labelled in the guides rather than presented as fact.

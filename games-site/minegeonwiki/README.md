# MineGeon Wiki

Unofficial wiki and guide hub for **MineGeon: Renegades**, the 1-3 player co-op sci-fi bullet-hell mining roguelite. Built with Next.js 16 + Vercel.

## Site

**URL**: https://minegeonwiki.vercel.app

## Content

27 guides in `content/guides/`, rendered at `/guides/<slug>`.

| Guide | Category |
|-------|----------|
| Beginner Guide | Beginner |
| Demo Guide | Beginner |
| Classes Guide | Classes |
| Class Builds | Guides |
| Endgame Builds | Guides |
| Walkthrough Guide | Guides |
| Tier List | Tier List |
| Boss Guide | Bosses |
| Enemy Guide | Enemies |
| Biomes Guide | Biomes |
| Cave Navigation | Exploration |
| Mining Guide | Mining |
| Extraction Guide | Mining |
| Resource Farming Guide | Mining |
| Progression Guide | Progression |
| Upgrades Guide | Upgrades |
| Weapons Guide | Weapons |
| Gadgets Guide | Gadgets |
| Base Building Guide | Base Building |
| Co-op & Multiplayer Guide | Multiplayer |
| Solo Strategy Guide | Solo |
| Secrets & Easter Eggs | Secrets |
| Achievements Guide | Achievements |
| How Long to Beat | Info |
| Platforms Guide | Info |
| Review Guide | Info |
| FAQ | FAQ |

## Tech Stack

Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 (Geist self-hosted via `geist/font`).

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

## Deployment

Connected to Vercel (`vercel.json` sets `installCommand` to `pnpm install`). Deploy from the `games-site` repo root with `./deploy-wiki-site.sh minegeonwiki`.

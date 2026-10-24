# Welcome to Elderfield — Post-Launch Compliance Fix

- **Date:** 2026-10-24
- **Auditor:** 内容合规审计员（岗位卡 01 / Profile 02）
- **Scope:** `games-site/welcomeelderfieldwiki/`
- **Trigger:** Game released 2026-09-10; site still framed it as unreleased.

## Verification Sources

| Fact | Source | Result |
|------|--------|--------|
| Released, `coming_soon: false`, `release_date: "Sep 10, 2026"` | https://store.steampowered.com/api/appdetails?appids=3195440&cc=us&l=english | Confirmed 2026-10-24 |
| Price `$17.99` USD, `discount_percent: 0` | Same appdetails response (`price_overview`) | Confirmed 2026-10-24 |
| Windows-only, single-player, full controller support, Steam Cloud, 51 achievements | Same appdetails response (`platforms`, `categories`) | Confirmed 2026-10-24 |
| Recommended system requirements (16 GB RAM, GTX 1650 / RX 570 4GB or RX 5500 / RX 5300) | Same appdetails response (`pc_requirements.recommended`) | Confirmed 2026-10-24 |
| Only extra is soundtrack DLC, $4.99; no Deluxe/Ultimate edition | https://store.steampowered.com/api/appdetails?appids=5145770&cc=us&l=english | Confirmed 2026-10-24 |
| Romance + marriage in release build | Official store description: "befriend the odd townsfolk (or even marry one!)"; "full RPG life sim with relationships" | Confirmed 2026-10-24 |
| Romance specifics (9 candidates, Ring of Binding, one marriage per save) | https://tposegaming.com/welcome-to-elderfield-romance/ (published 2026-09-12, updated 2026-09-27) | Community-tier only |
| Elderfield Wiki romance guide (heart events, gifts, marriage achievement) | https://elderfieldgame.wiki/guides/romance-guide/ | Search-index summary only; not directly fetched — kept at Community tier |
| Demo page (free, App 3195680) | https://store.steampowered.com/app/3195680/Welcome_to_Elderfield_Demo/ | Referenced; demo review counts not re-verified this pass |

## Changed Files (22)

### Content (17)

| File | Before → After |
|------|----------------|
| `content/home-content.md` | "from the free demo to the September 10, 2026 launch" / "has not launched yet" → "out now", launch date past tense, $17.99 USD, romance/marriage in release build; closing note now dated 2026-10-24 |
| `content/guides/faq-content.md` | Price "not announced [Unconfirmed]" → $17.99 USD + $4.99 soundtrack DLC; release Q past tense; romance "planned but not yet implemented" → in release build (official quote), spouse/roommate split [Unconfirmed]; platforms → controller support + Steam Cloud; controller/cloud answers now Yes; Early Access answer past tense; verification block updated |
| `content/guides/price-platforms.md` | Full rewrite: released status, $17.99, no Deluxe, soundtrack DLC, platform table, regional pricing, buying checklist, post-launch FAQ, verification |
| `content/guides/npcs-romance-guide.md` | Full rewrite: romance/marriage confirmed in release build; community claims (9 candidates, Ring of Binding, one marriage/save) labeled [Community]; old roommate/platonic plan labeled [Unconfirmed]; FAQ and verification rewritten |
| `content/guides/beginner-guide.md` | "Expecting romance at launch" mistake replaced with "Skipping the relationship system"; verification note updated |
| `content/guides/core-mechanics-guide.md` | Romance "planned but not yet implemented" → in release build; [Unconfirmed] list and verification updated |
| `content/guides/demo-guide.md` | Demo vs full-game table: price $17.99, romance in release build; "planned but not implemented" removed; demo-vs-full distinction clarified; verification updated |
| `content/guides/difficulty-modes-guide.md` | "before September 10" / "before launch" / "after launch" removed; "safest first pick" → "reasonable first pick"; verification past tense |
| `content/guides/progression-upgrades-guide.md` | Launch tense fixed; romance/marriage confirmed; "Expected Long-Term Systems" → "Not Yet Documented"; pre-launch/pre-release wording removed; verification updated |
| `content/guides/system-requirements.md` | Added official recommended tier (16 GB RAM etc.); added controller + Steam Cloud section and FAQ answers; "no recommended tier" removed; verification 2026-10-24 |
| `content/guides/game-length-guide.md` | "isn't out yet" / "launches" removed; "romance (once implemented)" → romance in release; "after launch" → "as verified data appears"; verification updated |
| `content/guides/farming-economy-guide.md` | "Because the full game launches" → released; "until launch"/"after launch" removed; verification updated |
| `content/guides/fishing-guide.md` | "Pre-Release" heading → "Fishing Tips"; "After Launch" → "Still to Document"; verification past tense |
| `content/guides/map-regions-guide.md` | Release tense; "expected to add" → "reported to add"; "After Launch" → "Still to Document"; verification updated |
| `content/guides/money-making-guide.md` | Launch tense fixed; "pre-release ranking" → post-launch; "Demo-Tested" → "Demo-Based" (no hands-on claim); verification updated |
| `content/guides/rest-sleep-guide.md` | Launch tense fixed; "Pre-Release" labels removed; "after launch" removed; verification updated |
| `content/guides/mysteries-guide.md` | "planned game" → full game; "may shift at launch" → "may differ in the full release"; verification updated |

### App / lib (5)

| File | Before → After |
|------|----------------|
| `app/page.tsx` | Hero "Launching September 10, 2026" → "Out now — released… $17.99"; CTA "Wishlist" → "Buy on Steam"; featured cards and FAQ rewritten (price, release, romance) |
| `app/faq/page.tsx` | Release/price/platforms/romance/length answers rewritten; "When is" → "When was"; last-checked note added |
| `app/tier-list/page.tsx` | Title/description/badge/comment "Pre-Release" → "Post-Launch"; relationships note now romance-inclusive; "before September 10" removed; bottom section rewritten |
| `app/about/page.tsx` | "to the September 10, 2026 launch" → "through the … release and beyond"; "as the game launches" → "as the game receives patches"; pre-release honesty bullet rewritten |
| `lib/schema.ts` | Stale comment "price had not been announced as of 2026-08-30" → released 2026-09-10, $17.99 (comment only; schema structure unchanged) |

### Files checked but intentionally not changed

- `content/guides/combat-guide.md` — already post-launch; no pre-release framing or romance claim.
- `content/guides/cooking-guide.md` — already post-launch (v1.0.2a, 2026-10-23); correctly distinguishes shipped cooking from announced profession rework.
- `app/guides/page.tsx`, `app/guides/[slug]/page.tsx`, `components/*`, `lib/guides.ts`, `lib/metadata.ts`, `lib/seo-config.ts` — no release-status assertions found.
- Trust pages (About/Privacy/Terms/Contact) — only About had release framing; Privacy/Terms/Contact clean.

## Residual [Unconfirmed] Items

| Item | Why it remains |
|------|----------------|
| Romantic (spouse) vs platonic (roommate) outcome | Pre-launch developer statement; no post-launch official confirmation found. Not asserted as shipped. |
| Exact romance roster (community says 9), heart thresholds, gift tables, Ring of Binding recipe, one-marriage-per-save rule | Community documentation only; official store page confirms marriage but publishes no mechanics. Labeled [Community], not official. |
| Full-game length / playtime | No official figure; 20–40 h remains an editorial estimate. |
| Full-game scope (~3x town, ≥3 dungeons, more mysteries) | Not confirmed in detail post-launch. |
| Demo save carryover | Developer has not stated it. |
| Old God alignment / calendar events | Not documented. |
| Exact crop catalogue, sell prices, recipes | Not officially published. |
| Fishing mini-game specifics | Not documented. |
| Curse catalogue / rest options beyond demo | Not documented. |
| Mode switching mid-save | Store page does not state it. |
| Demo review counts (~95–96%, ~550–600 reviews) | Legacy claims carried over from prior content; **not re-verified this pass**. Flagged for a future review-count refresh. |

## Build

```
cd welcomeelderfieldwiki && pnpm build
Next.js 16.3.4 (Turbopack)
✓ Compiled successfully in 630ms
✓ Finished TypeScript in 1123ms
✓ Generating static pages (31/31)
```

- Build: **PASS** (0 errors)
- Rendered-output checks: `.next/server/app/index.html` contains "Romance and marriage are in the release build"; `.next/server/app/faq.html` contains "17.99 USD"; no "not yet implemented" / "launches September 10" in rendered server output (only a stale Turbopack cache entry remains, which is not served).

## Compliance Notes

- No deployment performed.
- `related` / `sources` array formats preserved (only text values updated).
- No Chinese `[待确认]` or Hugo shortcodes introduced.
- No scores, review counts, or mechanics fabricated; community claims are labeled as such.
- Only one factual conflict encountered: none. The task's stated facts matched the Steam appdetails API.

# QA quick — gonefishingwiki (BUILD-R3-GONEDFISH)

- Date: 2026-10-26
- Site: `gonefishingwiki/` → https://gonefishingwiki.vercel.app
- Deployment: `dpl_CY5UKRs2AkftGzkKjQBrcX2NLqHN` (`gonefishingwiki-6zw8zmayq-zhaoq0103s-projects.vercel.app`)
- Verdict: **PASS** (0 🔴, 5 🟡)

## Build gates

| Check | Result |
|---|---|
| `node scripts/lint-guides.mjs gonefishingwiki` | 7 guides, **0 ERROR / 0 WARN** |
| `pnpm install` | OK (pnpm store link) |
| `pnpm build` | **0 errors**, 20/20 static pages generated |
| Live homepage | HTTP 200 |
| Live `/faq`, `/tier-list`, `/guides` | HTTP 200 |
| 7 guide URLs | all HTTP 200 |
| `vercel inspect gonefishingwiki.vercel.app` | alias → `gonefishingwiki-6zw8zmayq-...` (this deployment) |

## Content inventory

7 guides, 9,950 words by lint count (target ≥8,000; every page ≥1,200):

| Page | Words |
|---|---|
| gone-fishing-beginner-guide | 1,589 |
| gone-fishing-sacrifice-quota | 1,434 |
| gone-fishing-co-op-guide | 1,365 |
| gone-fishing-enemies-guide | 1,499 |
| gone-fishing-best-perks | 1,220 |
| gone-fishing-lake-entity-boss | 1,504 |
| gone-fishing-legendary-fish | 1,339 |

Static pages: `/faq` (10 verified Q&As), `/tier-list` (upgrade spending order), plus the 4-question homepage block. All guide titles/descriptions are 40–60 / 140–160 chars, one H1 each (frontmatter only), `related` uses block arrays.

## Residue scan

- `{{PLACEHOLDER}}`, TODO, FIXME, lorem ipsum, TBD: **0 hits** across `content/`, `app/`, `lib/`, `components/`.
- CJK characters in rendered content: **0**. Two CJK comments remain in template files (`lib/adsterra-zones.ts`, `lib/seo-config.ts`); `adsterra-zones.ts` is off-limits per task rules, and neither comment renders.
- Live HTML spot-check: no placeholders, title/H1 anchored to "GONE Fishing Horror Game Wiki".

## Fabrication / source audit

Every numeric claim is traceable:

| Claim | Source | Handling |
|---|---|---|
| 1–8 players, Windows only, 20 Oct 2026 | Steam AppDetails API, read 2026-10-26 | Official, first-hand |
| ¥32.99 base / ¥22.10 (−33%) | Steam AppDetails API, read 2026-10-26 | Official; regional snapshot dated in answer |
| Big Grill / Fish Value +50%; depth 2,500+; bait 60+; Troll 86; +20% JW weight | Official FAQ | Official |
| Cooking +33%; quota grows; blue flame | Steam community guide | Marked community source |
| Regen 7.5→6s / +10%, turtle 75→60, eyeball hitbox +50%, whale nuke fix | Official 1.0 hotfix notes | Official |
| 9 perks, 7-day unlock, pick 2, Fish Whisperer +5% | Fandom + Steam discussion | Community; Sticky Hook/Tackle Box effects labelled `[Unconfirmed]` |
| Nessie 690–125,000 lbs, all maps | Fandom Species | Community, explicitly `[Unconfirmed]` |
| MOBY rod + Jeremy Wade unlock | Steam 1.0 announcement | Official |
| Rhizo requires MOBY | Steam discussion | Community, `[Unconfirmed]` |
| 53 achievements | Steam API | Not published on site (dropped from FAQ to keep 4–10 limit) |

Developer note: the task brief said "ABCT Productions"; Steam AppDetails (2026-10-26) lists developer **and** publisher as **GONE Studios**. The site uses GONE Studios to avoid publishing a fact that contradicts the official store.

Source-retrieval caveat: `fandom.com`, `steamcommunity.com` and archive endpoints are DNS-poisoned on this machine (resolved to Meta IPs, TLS timeouts). Official Steam API was fetched directly; official FAQ, Steam announcements, Fandom and community pages were read through search-index excerpts. This is stated in `keyword-results/gonefishing-sources.md`, not hidden.

## Fandom differentiation

- No species table or bait table as primary content.
- Main axes: how to play, daily quota route, co-op roles, enemy counters, perk picks, boss phases, legendary hunt levers.
- `codes` page type replaced by the sacrifice-quota page: no verified code system exists, and `GONE Fishing codes` SERP is occupied by the unrelated Roblox game.
- Species/legendary page adds official bait-score levers and a hunt plan rather than duplicating Fandom's list; Nessie specifics are explicitly marked community/unconfirmed.

## Open items (🟡)

1. `public/icon.png` is still the template icon (36 KB); replace with game art when available.
2. `googleAnalyticsId` remains `''` — GA4 property not created (forbidden by task); dashboard cannot count the site yet.
3. GSC not submitted; no verification file added.
4. Site not registered in `dashboard/lib/sites.ts` (forbidden by task); must be filled via the Feishu manual ledger → 20:00 sync.
5. Five of the nine perks are unranked because their 1.0 names/effects could not be verified; revisit after a datamined or developer-published list appears.

## Conclusion

Mechanical gates pass, live deployment is the aliased production build, and unverified claims are either marked `[Unconfirmed]` or excluded. Remaining work is operational (icon, GA4/GSC, dashboard registration), not content-blocking.

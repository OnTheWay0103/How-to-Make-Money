# QA Report — games-site

## Deep QA Audit Report — 2026-08-25

## Executive Summary
- Mode: deep (full fleet) | Sites audited: 35 | Date: 2026-08-25 | Snapshot: commit 4d9c047 (clean at audit start)
- Since last deep audit (8/9): 16 days (>7-day threshold) → full deep pass
- **Results: 34 PASS / 1 FAIL. Fabrication: none found fleet-wide (0 🔴 content issues). Residue: 1 🔴 code-level (JSON-LD domain error). Build: 3/3 pass.**
- Total guides snapshot: **841** across 35 sites (8/9: 985 across 34 — fleet shrank because the AdSense compliance batch `6f553d9` deleted 200 unverifiable guide files, incl. witchspire −12, aincrad −9)
- doloctownwiki (built 8/22) entered deep coverage for the first time — content clean, but GA4/GSC infrastructure missing.

## Per-Site Audit Table (Residue / Fabrication / Status)

| Site | Guides | Template Residue | Fabrication | Status |
|------|:--:|:--:|:--:|:--:|
| witchspirewiki | 34 | ✅ Clean | None | PASS |
| mistfallhunterwiki | 38 | ✅ Clean | None | PASS |
| aincradwiki | 38 | 🟡 rapier-build.md:149 PvP phrasing (minor) | None | PASS* |
| themoundwiki | 32 | ✅ Clean | None | PASS |
| spiritvalewiki | 39 | ✅ Clean | None | PASS |
| skillsandraidswiki | 18 | 🔵 home-content.md no frontmatter | None | PASS |
| minegeonwiki | 27 | 🔵 home-content.md no frontmatter, orphaned | None | PASS |
| sephiriawiki | 29 | ✅ Clean | None | PASS |
| dinobladewiki | 15 | 🔵 home-content.md no frontmatter | None | PASS |
| mystraliawiki | 29 | ✅ Clean | None | PASS |
| tearsofmetalwiki | 27 | 🟡 review/CCU figures drift vs published (home-content.md:15, patch-notes.md:43) | None | PASS* |
| grainrotwiki | 25 | ✅ Clean | None | PASS |
| dragonswordwiki | 22 | ✅ Clean | None | PASS |
| dwarfdelvewiki | 17 | ✅ Clean | None | PASS |
| lunariumwiki | 19 | ✅ Clean | None | PASS |
| taivalwiki | 19 | ✅ Clean | None | PASS |
| **vahrinscallwiki** | 24 | **🔴 JSON-LD canonical domain error — app/guides/[slug]/page.tsx:57** | None | **FAIL** |
| relicfirstguardianwiki | 31 | ✅ Clean | None | PASS |
| graphitewiki | 16 | ✅ Clean | None | PASS |
| shiftatmidnightwiki | 28 | ✅ Clean | None | PASS |
| moonlightpeakswiki | 16 | ✅ Clean | None | PASS |
| boneholdwiki | 23 | ✅ Clean | None | PASS |
| phantomtowerwiki | 17 | 🟡 12× Chinese `[待确认]` marker (3 files) | None | PASS* |
| ardentwildswiki | 25 | ✅ Clean | None | PASS |
| gotownwiki | 16 | 🟡 4× Chinese `[待确认]` marker (2 files) | None | PASS* |
| expeditionssamuraiwiki | 33 | ✅ Clean | None | PASS |
| delveriumwiki | 17 | 🟡 17× Chinese `[待确认]` marker (3 files) | None | PASS* |
| lowbudgetrepairswiki | 36 | 🔵 5× stray `slug:` fields; 🔵 pre-release framing stale post-launch | None | PASS |
| bigwalkwiki | 16 | 🔵 6 guides carry `date:`+`updated:` | None | PASS |
| ironnestwiki | 21 | 🔵 home-content.md no frontmatter | None | PASS |
| nivalisnightswiki | 17 | 🔵 17 guides carry `date:`+`updated:` | None | PASS |
| restorywiki | 17 | ✅ Clean | None | PASS |
| beastreincarnationwiki | 24 | 🟡 "Nobudou" vs "Koo" terminology (3 guides) | None | PASS* |
| waterparksimulatorwiki | 16 | 🟡 4× Chinese `[待确认]` marker (1 file) | None | PASS* |
| doloctownwiki | 20 | 🟡 infra: `googleAnalyticsId: ''` + no GSC file; 🟡 48× `[待确认]` (20 files) | None | PASS (content) / infra follow-up |

\* PASS with WARNING — content honest, no fabrication; see findings.

## Findings (by severity)

**🔴 BLOCKING (1)**

1. **vahrinscallwiki — JSON-LD canonical domain error on every article page.** `app/guides/[slug]/page.tsx:57` hardcodes `https://witchspire.wiki${url}` as the articleSchema URL. Vahrin's Call's own domain is `vahrinscallwiki.vercel.app` (lib/seo-config.ts) — so every guide page emits an Article schema canonical pointing at another site's domain. Root cause: page copied from witchspirewiki (whose identical line at the same position is correct there). One-line fix: use `SITE_CONFIG.url`. Verified scope: sitemap/robots/lib-schema clean on all sites; this is the only hardcoded-domain instance in the fleet. SEO harm: Google may attribute/de-rank vahrinscall article pages.

**🟡 WARNING (5)**

2. **doloctownwiki missing analytics infrastructure.** `lib/seo-config.ts:50` has `googleAnalyticsId: ''` and `public/` has NO GSC verification file (only site of 35 without both). Built 8/22 — SOP requires GA4+GSC before launch. 34/35 sites verified with unique real GA4 IDs (all G-…, no placeholders).
3. **Chinese `[待确认]` ("to be confirmed") marker leaked into 5 English sites: 85 occurrences in 29 files** — doloctownwiki 48×/20 files, delveriumwiki 17×/3, phantomtowerwiki 12×/3, gotownwiki 4×/2, waterparksimulatorwiki 4×/1. Content-generation pipeline's Chinese prompt residue; reads unprofessional in SERP-facing copy. Simple global replace `[待确认]` → "unconfirmed".
4. **tearsofmetalwiki review figures drift vs public record.** home-content.md:15 + patch-notes.md:43 claim "~87% Very Positive, peak ~4,500 CCU"; published launch coverage (handheld.guru) reports 92% positive / ~4,000 CCU peak. Honest-framed ("roughly … at the time of writing") but number is off vs sources.
5. **aincradwiki rapier-build.md:149** — "A mind-game technique for **PvP** and aggressive humanoid enemies" — PvP reference on a site whose own pvp-duel-guide.md confirms the game is single-player-only. Same failure class as the 8/9 floor-guide finding, one line. Reword to "aggressive humanoid enemies".

**🔵 INFO (7)**

6. **GSC verification token still shared fleet-wide (from 8/9 rec #2, see table below).**
7. **beastreincarnationwiki terminology drift persists** — "Nobudou: Burst"/"Acid Burst (Nobudou)" in corvus-boss-guide.md:26/69/70, weapons-armor-guide.md:95, bloom-arts-guide.md:72 vs "Koo" everywhere else (chapter-1-walkthrough, nushi-boss-reference, koo-rapport…).
8. **Orphaned home-content.md without frontmatter in 4 sites** (minegeonwiki, skillsandraidswiki, dinobladewiki, ironnestwiki) — no code references; dead files (all other 31 sites' home-content.md have frontmatter; doloctown's does too).
9. **Frontmatter lint leftovers**: aincradwiki daily-quests.md:5 `version: 1.0` unquoted; lowbudgetrepairswiki 5× stray `slug:` (painting-guide, faq, renovation-jobs-guide, tiling-guide, system-requirements); 60 guides still carry `date:` alongside `updated:` (lowbudget 36, nivalisnights 17, bigwalk 6, mystralia 1).
10. **lowbudgetrepairswiki cost-cutting-tips.md stale pre-release framing** — version "Pre-release" + "The game launches August 13, 2026" (game launched 8/13; now live). Sourcing marks are correct; freshness pass needed.
11. **dinobladewiki minor figure drift** — "~400 reviews" at 89% launch (actual day-1: 562 reviews at 89%); "pass 500,000 wishlists" (reported 600K+). Honest-framed; harmless.
12. **REC#8 confirmed live**: auto-build launchd job (`com.gamesite.auto-build-site`, PID active) mutated the tree mid-audit (`docs/人工任务清单.md` M, `scripts/ga4-pv-rank.mjs` untracked) — site content dirs untouched, guide counts in this report are the stable committed snapshot.

## 8/9 Deep Audit Recommendations — Landing Check

| # | Recommendation (8/9) | Status | Evidence |
|---|----------------------|:--:|------|
| 1 | aincradwiki floor-guide.md PvP residue (lines 239/247) | ✅ | floor-guide.md deleted in AdSense compliance batch `6f553d9`; surviving PvP refs are correctional (greatsword-build.md:197 "no PvP… single-player only", best-floor-order.md:239 "single-player only — no PvP") |
| 2 | GSC per-property verification files | ❌ | All 35 sites still carry byte-identical `google12f8715471cef7b7.html` (cksum 725682468 everywhere — one token can verify at most one property); doloctownwiki has none |
| 3 | Freshness pass on 5 oldest sites | ✅ | witchspire 34/34 `version: "0.1.4"` (current per own patch notes; was 37 stale at 0.1.1d); mistfall 38/38 "1.0"; aincrad 38/38 "1.0"; spiritvale 39/39 "EA"; themound 32/32 "1.0" |
| 4 | lowbudgetrepairswiki pre-launch sourcing | ✅ | cost-cutting-tips.md: sourcing note (8/10) + every claim tagged `[Demo-verified]`/`[Speculative — awaiting launch confirmation]`, version "Pre-release", `sources:` block; electrical-work-guide uses `[Needs launch verification]` |
| 5 | Frontmatter standardization (date/updated) | 🟡 | `updated:` on 100% of guides (all 35 sites); `date:` reduced 66→60 (lowbudget 36, nivalis 17, bigwalk 6, mystralia 1); tearsofmetal beginner-guide now has category+version+related+sources ✅; themound sanity-mechanics unquoted-version case gone (file deleted); new: aincrad daily-quests unquoted `version: 1.0`, lowbudget 5× `slug:` |
| 6 | beastreincarnation Koo/Nobudou consistency | 🟡 | Most guides consistent on "Koo"; 3 guides still "Nobudou" (corvus-boss-guide, weapons-armor-guide, bloom-arts-guide) — auto-built content again introduced the second term |
| 7 | minegeonwiki orphaned home-content.md | ❌ | Still present, no frontmatter, zero code references; pattern also in skillsandraids, dinoblade, ironnest |
| 8 | QA runs on committed snapshot | 🟡 | This audit ran on clean commit 4d9c047, but the auto-build launchd job is still active — working tree mutated mid-audit (docs/scripts only), confirming the process risk remains |

## Build Verification (3 sites)

| Site | Age | Build | Result |
|------|-----|-------|:--:|
| witchspirewiki (oldest, 6/29) | ~8 weeks | `npm run build` | ✅ Pass — 34 guides + static routes prerendered (SSG), 0 errors/warnings |
| sephiriawiki (mid, 7/21) | ~5 weeks | `npm run build` | ✅ Pass — 29 guides + static routes prerendered (SSG), 0 errors/warnings |
| doloctownwiki (newest, 8/22) | 3 days | `npm run build` | ✅ Pass — 20 guides + static routes prerendered (SSG), 0 errors/warnings |

## Cross-Site Patterns

1. **Fabrication is at zero fleet-wide.** 30%+ sampling (3+ guides/site, 6 for doloctown) + fleet-wide greps (unmarked precise numbers, ratings/sales claims, absolute claims, survey data, invented-name risk) found no invented bosses/weapons/characters, no unmarked precise values. The honest-guide convention is now the fleet standard: "community-reported", "[Demo-verified]", "no official frame data", "TBD/awaiting confirmation", correction pages (taival fishing, vahrinscall magic, grainrot enemies, bonehold endgame, lunarium co-op, dwarfdelve tier-list, aincrad pvp) — all confirmed in sampled content.
2. **Verification spot-checks (Steam/press) all passed:** Dinoblade (89% Very Positive ✅, $19.99 ✅, 83K first-week sales consistent); Grain Rot (350K+ demo downloads ✅, Top-15 June Next Fest ✅); Tears of Metal (7/22 EA @ $24.99 ✅; ~87%/~4.5K CCU vs published 92%/~4K — see 🟡 4); MineGeon (Mixed launch reception ✅, $19.99 ✅, Trevor/Marshall/Ari ✅); Doloc Town (95% OP ✅, 1.0 on 8/6/26 ✅, EA 5/8/25 ✅, RedSaw Games/Logoi ✅, farming automation ✅).
3. **Cross-site pollution: zero.** No foreign domains in content; game-name hits adjudicated as false positives (mystralia "first Guardian" = in-game boss; waterpark "Go-Go Town" = genre comparison). JSON-LD/sitemap/robots derive correctly from SITE_CONFIG on 34/35 sites (vahrinscall 🔴 #1).
4. **Hugo/template residue: zero** — no `{{<` shortcodes, no TODO/lorem/placeholder anywhere.

## Assessment

The fleet is in its healthiest state since tracking began: zero fabrication, uniform honest-content practice, uniform version stamps, all builds green. The two actionable items this round are (a) the vahrinscallwiki JSON-LD domain fix (1 line, site-wide SEO impact) and (b) doloctownwiki GA4+GSC provisioning per SOP. The 8/9 rec #2 (GSC) and #7 (orphan files) remain open with unchanged evidence; #6 (Koo/Nobudou) needs a term-injection step in the auto-build prompt.

---

## Quick QA — Coordinator Expansion (2026-08-10)

Two sites expanded by Coordinator ahead of imminent launches: Mystralia (+5, EA tomorrow 8/11) and Low-Budget Repairs (+8, launch 8/13).

### Residue Scan

| Site | Guides | Template Residue | Status |
|------|:--:|:--:|:--:|
| mystraliawiki | 35→40 | ✅ Clean | PASS |
| lowbudgetrepairswiki | 33→41 | ✅ Clean | PASS |

### Content Quality Sampling

| Site | Guides Added | Fabrication | Notes |
|------|:--:|:--:|------|
| mystraliawiki | 5 (weapons, crafting-materials, story-lore, enemy-monster, difficulty-settings) | ✅ None | Honest-guide format maintained; "no weapon system exists" declared upfront in weapons guide; all unconfirmed mechanics marked TBD; lotus/frozen-depths fabricated legacy avoided |
| lowbudgetrepairswiki | 8 (electrical-work, bathroom-renovation, kitchen-renovation, demolition, achievements, permits, room-strategy, hidden-secrets) | ✅ None | QA-flagged cost-cutting-tips.md fixed: sourcing note added + 12 claims tagged [Demo-verified]/[Speculative]; all new guides tag speculative content explicitly |

### Build Health

| Site | Build | Result |
|------|-------|:--:|
| mystraliawiki | `npm run build` | ✅ Pass (SSG, all routes) |
| lowbudgetrepairswiki | `npm run build` | ✅ Pass (SSG, 54 routes) |

### Infrastructure

| Site | GA4 | GSC | SITE_CONFIG |
|------|:--:|:--:|:--:|
| mystraliawiki | ✅ G-16X86K2J44 | ✅ | ✅ 'Echoes of Mystralia Wiki' |
| lowbudgetrepairswiki | ✅ G-94GLV86TJZ | ✅ | ✅ 'Low-Budget Repairs Wiki' |

### Assessment

Both expansions pass quick QA. No fabrication, no residue, clean builds. Total fleet: 994 → 1007 (+13 guides).

### New Candidates Discovered

Game discovery agent found 13 new candidates (16–22/25). Top pick: **DOLOC TOWN (22/25)** — farming/life sim, 8/6 1.0 launch, 95% positive (2.4K reviews), zero wiki. Full report: `keyword-results/discovery-2026-08-10.md`. Candidate pool refreshed in `keyword-results/CANDIDATE-POOL.md`.

---

## Deep QA Audit Report — 2026-08-09 (previous)

## Executive Summary
- Mode: deep | Sites audited: 34 | Date: 2026-08-09
- Infrastructure: 34/34 healthy | Content: 6 issues found (1 blocking) | Build: 3/3 pass
- Total guides: 985 (snapshot; count is a moving target — see Cross-Site Patterns #4)
- Prior quick QA (waterparksimulatorwiki, today) results incorporated and confirmed clean.

**Headline: 33 of 34 sites are in good shape. One blocking fabrication residue found in aincradwiki (floor-guide.md still describes PvP on a game the site itself documents as single-player). All builds pass; GA4 is correctly configured everywhere; no template residue found anywhere.**

## Infrastructure Health

| Site | Guides | GA4 | GSC | package.json | Vercel | Status |
|------|:--:|------|------|:--:|:--:|:--:|
| witchspirewiki | 46 | ✅ G-VJWN6CZ5PM | ✅ * | ✅ ^16.2.9 | ✅ | 🟡 (stale version stamps, 37 guides) |
| mistfallhunterwiki | 53 | ✅ G-PHHQH61FLC | ✅ * | ✅ | ✅ | ✅ |
| aincradwiki | 47 | ✅ G-109H13Q3KN | ✅ * | ✅ | ✅ | 🔴 (fabricated PvP residue in floor-guide) |
| themoundwiki | 54 | ✅ G-KDMF9VH9EZ | ✅ * | ✅ | ✅ | ✅ |
| spiritvalewiki | 51 | ✅ G-LMNG7L3GHJ | ✅ * | ✅ | ✅ | ✅ |
| skillsandraidswiki | 26 | ✅ G-393K5RDZ0B | ✅ * | ✅ | ✅ | ✅ |
| minegeonwiki | 31 | ✅ G-GWZ0DR4S01 | ✅ * | ✅ | ✅ | 🔵 (orphaned home-content.md, no frontmatter) |
| sephiriawiki | 43 | ✅ G-JP8PP1V90D | ✅ * | ✅ | ✅ | ✅ |
| dinobladewiki | 27 | ✅ G-E6FDYLD3S2 | ✅ * | ✅ | ✅ | ✅ |
| mystraliawiki | 35 | ✅ G-16X86K2J44 | ✅ * | ✅ | ✅ | ✅ |
| tearsofmetalwiki | 37 | ✅ G-YDQ050PFB4 | ✅ * | ✅ | ✅ | 🔵 (beginner-guide missing category/version) |
| grainrotwiki | 30 | ✅ G-KFV2F7XT4J | ✅ * | ✅ | ✅ | ✅ |
| dragonswordwiki | 25 | ✅ G-709FGNFQEM | ✅ * | ✅ | ✅ | ✅ |
| dwarfdelvewiki | 25 | ✅ G-6PG5B1FMPG | ✅ * | ✅ | ✅ | ✅ |
| lunariumwiki | 25 | ✅ G-G4GPXYJW7C | ✅ * | ✅ | ✅ | ✅ |
| taivalwiki | 23 | ✅ G-6EBSLPDH5P | ✅ * | ✅ | ✅ | ✅ |
| vahrinscallwiki | 26 | ✅ G-0NTT5WMLGF | ✅ * | ✅ | ✅ | ✅ |
| relicfirstguardianwiki | 38 | ✅ G-JEEKBP66NL | ✅ * | ✅ | ✅ | ✅ |
| graphitewiki | 18 | ✅ G-1K2RZYN021 | ✅ * | ✅ | ✅ | ✅ |
| shiftatmidnightwiki | 28 | ✅ G-M8577QD2NQ | ✅ * | ✅ | ✅ | ✅ |
| moonlightpeakswiki | 17 | ✅ G-Q2T75BBQN6 | ✅ * | ✅ | ✅ | ✅ |
| boneholdwiki | 25 | ✅ G-FETT7T07F7 | ✅ * | ✅ | ✅ | ✅ |
| phantomtowerwiki | 14 | ✅ G-D2LXC98S3C | ✅ * | ✅ | ✅ | ✅ |
| ardentwildswiki | 25 | ✅ G-16S551280V | ✅ * | ✅ | ✅ | ✅ |
| gotownwiki | 14 | ✅ G-BLSQ0N9M26 | ✅ * | ✅ | ✅ | ✅ |
| expeditionssamuraiwiki | 33 | ✅ G-D09S2186H2 | ✅ * | ✅ | ✅ | ✅ |
| delveriumwiki | 14 | ✅ G-79NJB5KFHX | ✅ * | ✅ | ✅ | ✅ |
| lowbudgetrepairswiki | 33 | ✅ G-94GLV86TJZ | ✅ * | ✅ | ✅ | 🟡 (pre-launch tips unmarked) |
| bigwalkwiki | 18 | ✅ G-107M9FTLTE | ✅ * | ✅ | ✅ | ✅ |
| ironnestwiki | 24 | ✅ G-1HJWW5Z0S8 | ✅ * | ✅ | ✅ | ✅ |
| nivalisnightswiki | 20 | ✅ G-WH2SMVV8EB | ✅ * | ✅ | ✅ | ✅ |
| restorywiki | 23 | ✅ G-ND1MCMNPCZ | ✅ * | ✅ | ✅ | ✅ |
| beastreincarnationwiki | 24 | ✅ G-LNXR9K40HE | ✅ * | ✅ | ✅ | 🔵 (Koo/Nobudou term inconsistency) |
| waterparksimulatorwiki | 14 | ✅ G-JMLQMKR4X4 | ✅ * | ✅ | ✅ | ✅ (quick QA today passed) |

\* GSC file present on all 34 sites, but **the file is byte-identical everywhere** (`google12f8715471cef7b7.html`) — see Cross-Site Patterns #2. Guide counts are a live snapshot (auto-build coordinator was writing new guides during the audit).

## Content Quality Findings

Ranked by severity:

1. **🔴 BLOCKING — aincradwiki `/content/guides/floor-guide.md` lines 239 & 247: fabricated PvP content on a single-player game.**
   - Line 239: "Unique weapons with PvP-oriented EX-Mods"
   - Line 247: "**Only floor with PvP-enabled zones**. Watch for player invaders in the arena outskirts."
   - This directly contradicts the site's own correction pages: `pvp-duel-guide.md` (updated 8/1) explicitly states "an earlier version of this page described a PvP arena... that content does not exist in the game," and `home-content.md` says "the game has no multiplayer or PvP."
   - Same failure class as the historical Witchspire PvP fabrication. The 8/1 correction wave fixed the *standalone* PvP page but left the Floor 9 (Colosseum) section of floor-guide.md uncleaned. **Action: delete/rewrite those two lines** (keep the PvE arena framing — "humanoid enemies... treat them like PvP opponents" is fine as analogy, "player invaders" is not).

2. **🟡 WARNING — witchspirewiki: 37 of 46 guides carry stale `version: "0.1.1d"` stamps while the game is at 0.1.4** (per the site's own patch-notes page, updated 8/1). Old `updated:` dates (7/11–7/29) across 11+ guides mean content has not been reviewed since the 0.1.4 patch. Mechanic changes may be missing. Same staleness pattern exists fleet-wide (see Cross-Site Patterns #3), but witchspire is the worst offender.

3. **🟡 WARNING — lowbudgetrepairswiki `cost-cutting-tips.md`: unverified pre-launch tips presented as fact.** The game launches 8/13 (3 days after this report). The guide's shortcut table presents detailed gameplay ("Leave trash in common areas — dump debris in the hallway", "water down paint 1:5 ratio") with savings/risk ratings, sourced only as "per demo players" in one case. Other pre-launch sites handle this well (nivalisnightswiki marks every unverified claim). Without source marking, this is fabrication-adjacent risk for a game nobody has played yet. **Action: add a sourcing/verification note, or flag tips as demo-verified vs. speculative.**

4. **🔵 INFO — Frontmatter schema inconsistencies (fleet-wide, low risk):**
   - tearsofmetalwiki `beginner-guide.md` missing both `category` and `version` fields.
   - 66 guides fleet-wide use `date:` instead of (or in addition to) `updated:` — lowbudgetrepairswiki guides carry BOTH `date:` and `updated:`, and a stray `slug:` field in painting-guide.md.
   - themoundwiki `sanity-mechanics.md` has unquoted `version: 1.0` (all others quoted).
   - Guides missing `keywords` (15), `category` (24), `version` (44), `related` (50) fleet-wide.
   - None of these break rendering (verified in builds), but a shared frontmatter schema/lint would be worthwhile.

5. **🔵 INFO — beastreincarnationwiki terminology drift: "Koo" vs "Nobudou".** `tier-list.md` (8/8) calls the system "Koo Acid Art"; the auto-generated `corvus-boss-guide.md` (8/9, today) calls it "Nobudou: Acid Burst (Nobudou)" plus "Nobudou: Burst II". Same game mechanic, two names across guides in the same site — indicates the coordinator's source material was inconsistent. Unverifiable which is correct, but internal inconsistency is a quality signal.

6. **🔵 INFO — minegeonwiki `content/home-content.md` is orphaned:** no frontmatter, and no code reference in app/lib/components (home page content is hardcoded in `app/page.tsx`). Harmless dead file, but if the intent was to render home content from markdown, it isn't wired up. The file is also the only home-content file without frontmatter.

## Cross-Site Patterns

1. **GA4: 0 active placeholders.** No site uses `G-PLACEHOLDER` or `G-000000`. `G-XXXXXXXXXX` appears in 8 `lib/seo-config.ts` files but only inside doc comments (`/** ... (e.g. G-XXXXXXXXXX) */`), never as the active `googleAnalyticsId`. All 34 sites have unique, real measurement IDs wired through `components/GoogleAnalytics.tsx`. Historical GA4 misconfiguration is resolved.

2. **GSC verification token is identical on all 34 sites** (`public/google12f8715471cef7b7.html`, byte-for-byte the same file). Google Search Console tokens are per-property; the same token can verify only one domain. Either (a) only one site is actually verified and the rest are not, or (b) there is deliberate sharing under one property that cannot work across 34 distinct vercel.app domains. Combined with the STATS doc marking many sites "GSC 待验证", this is a **systemic 🟡 — GSC verification must be checked property-by-property and per-domain files generated.** This is likely why "GSC 待验证" persists.

3. **Content freshness is uneven but acceptable overall:** `updated:` stamps cluster on 8/1 (203 guides — the correction wave), 8/4–8/8 (new content), and 8/9. Older guides (6/29–7/30) are untouched since creation; for live games (Witchspire, Mistfall, Sephiria) those may be stale. No guide has an impossible/future date. All sampled dates are internally consistent with site timelines.

4. **Live auto-build during audit:** the `com.gamesite.auto-build-site` launchd job plus a coordinator `claude -p` process were actively writing guides while this audit ran (beastreincarnationwiki +10, ironnestwiki +11, restorywiki +9 within ~90 minutes). Guide counts are therefore a moving target (task brief said 956; verified snapshot: 985). The freshly generated guides sampled (corvus-boss-guide, story-lore-guide) follow correct frontmatter, cite version numbers, and reference the game correctly — the pipeline's output format is healthy. Recommend QA runs target a git-committed snapshot.

5. **No template residue anywhere:** all "foreign game name" hits in cross-site greps resolved to legitimate in-game items ("relics" as loot in Sephiria/Dwarf Delve/The Mound) or intentional genre comparisons ("If you liked Low-Budget Repairs, Go-Go Town..." in waterparksimulatorwiki — the same hit the quick QA flagged as a false positive). Header components and layouts carry the correct site name on all 34 sites. Sitemap/robots derive from `SITE_CONFIG.url` on 34/34.

6. **vercel.json: 34/34 sites (plus dashboard).** All pass static output config; three sampled builds confirmed.

7. **Honest-content practices are becoming the norm — explicitly recommended as the pattern to keep:** no-PvP correction pages (witchspire, aincrad, dragonsword), pre-launch sourcing notes (nivalisnightswiki marks every unconfirmed claim, even naming sources), "no fabricated guides" statements (minegeon extraction-guide), and "Pending — awaiting confirmation" tier flags (beastreincarnation tier-list). These were absent in the June-July content and are now standard in August content.

## Build Verification

| Site | Age | Build | Result |
|------|-----|-------|:--:|
| witchspirewiki (oldest, 6/29) | ~6 weeks | `npm run build` | ✅ Pass — 46 guides prerendered (SSG) |
| sephiriawiki (mid, 7/21) | ~3 weeks | `npm run build` | ✅ Pass — 43 guides prerendered (SSG) |
| beastreincarnationwiki (newest, 8/8) | 1 day | `npm run build` | ✅ Pass — 24 guides prerendered (SSG) |

No warnings or errors in any of the three builds. All sites use static generation with `generateStaticParams`.

## Recommendations

Prioritized:

1. **🔴 Fix aincradwiki floor-guide.md PvP residue** (lines 239, 247) — the only confirmed fabrication remaining in the fleet. Rewrite the two PvP-specific claims to PvE framing; verify no other Floor 9 descriptions (best-floor-order.md references "Arena-exclusive weapons" — fine, but re-check) contain similar residue.
2. **🟡 GSC verification sweep** — replace the shared `google12f8715471cef7b7.html` with per-site verification files, confirm each property in GSC, and update STATS doc. This is the most likely silent operational gap (analytics reach).
3. **🟡 Content freshness pass on the 5 oldest sites** (witchspire 37 stale guides, mistfall, aincrad, spiritvale, themound) — refresh `version:` stamps against current game versions and review guides for mechanics changes since their 7/11–7/29 creation.
4. **🟡 Pre-launch sourcing rule for lowbudgetrepairswiki** — apply the nivalisnightswiki pattern (mark every claim beyond official confirmation) to the 3-day-out game; retrofit the "cost-cutting tips" table.
5. **🔵 Frontmatter standardization** — decide one date field (`updated:` only), require `category`/`version`/`keywords`/`related`, add a lint script; fix the 66 `date:`-style guides.
6. **🔵 Terminology consistency check for auto-built guides** — the coordinator produced "Nobudou" vs "Koo" in the same site (beastreincarnationwiki); add a per-site glossary/term-injection step to the build prompt so new guides reuse existing terms.
7. **🔵 Remove or wire up minegeonwiki orphaned home-content.md** (and audit other sites' home-content files for the same pattern).
8. **Process note:** QA audits should run against a committed snapshot (auto-build keeps mutating content mid-audit); consider pausing the launchd job during future QA runs.

---

## Quick QA — Coordinator Expansion (2026-08-09 ~19:00)

Three sites expanded by Coordinator: Iron Nest (+11), ReStory (+10), Beast of Reincarnation (+12).

### Residue Scan

| Site | Guides | Template Residue | Status |
|------|:--:|:--:|:--:|
| beastreincarnationwiki | 26 | ✅ Clean | PASS |
| restorywiki | 24 | ✅ Clean | PASS |
| ironnestwiki | 24 | ✅ Clean | PASS |

### Content Quality Sampling

| Site | Guides Sampled | Fabrication | Notes |
|------|:--:|:--:|------|
| beastreincarnationwiki | 3 (rangifer-boss, bloom-arts, endings) | ✅ None | Boss stats verified; "awaiting confirmation" used for unverified drops; Koo/Kagura naming consistent |
| restorywiki | 3 (cleaning, shop-management, easter-eggs) | ✅ None | Poseidon't/Clara Loft/Goldie marked role-unconfirmed; cleaning techniques match community guides |
| ironnestwiki | 3 (crew-stations, advanced-ballistics, tips-tricks) | ✅ None | All ballistics figures marked "community-reported"; honest multiplayer status page confirms single-player |

### Build Health

| Site | Build | Result |
|------|-------|:--:|
| beastreincarnationwiki | `npm run build` | ✅ Pass (39 routes) |
| restorywiki | `npm run build` | ✅ Pass (37 routes) |
| ironnestwiki | `npm run build` | ✅ Pass (37 routes) |

### Infrastructure

| Site | GA4 | GSC | SITE_CONFIG |
|------|:--:|:--:|:--:|
| beastreincarnationwiki | ✅ G-X82XWX79LF | ✅ | ✅ 'Beast of Reincarnation Wiki' |
| restorywiki | ✅ G-65WY3HFQQL | ✅ | ✅ 'ReStory Wiki' |
| ironnestwiki | ✅ G-648XW0CN8B | ✅ | ✅ 'IRON NEST Wiki' |

### Assessment

All 3 expansions pass quick QA. No fabrication, no residue, clean builds. Total guide count: 956 → 989 (+33).

> **Recommendation #1 (aincradwiki PvP residue) resolved** — fixed during this session (3 lines in floor-guide.md rewritten).

---

## Quick QA — 2026-08-25 (3 sites)

- Mode: quick | Date: 2026-08-25 | Materials: BUILD-002 (sovereigntowerwiki 新站, 18 篇), EXPAND-003 (shiftatmidnightwiki +5), EXPAND-004 (phantomtowerwiki +4)
- **Results: 2 PASS / 1 FAIL. 新增攻略内容编造：无。FAIL 原因：shiftatmidnightwiki 站级渲染元数据编造（开发者/发行商/价格/Steam 链接/官方站），同 deep audit 中 vahrinscall JSON-LD FAIL 缺陷类别。**

### Residue Scan

| Site | Guides | Template Residue | Status |
|------|:--:|------|:--:|
| sovereignthwiki | 18 | ✅ Clean（无 doloc/witchspire 跨站、无 Hugo shortcodes、中文[待确认] 为零、schema 域名正确） | ✅ |
| shiftatmidnightwiki | 31 | ❌ 站级编造元数据（见 FAIL 清单）+ 🟡 lib/schema.ts:51,95 JSDoc 注释残留 "Echoes of Aincrad"（不渲染） | ❌ |
| phantomtowerwiki | 20 | ✅ Clean（TBD 均为诚实「官方未发布」披露，中文[待确认] 为零、无跨站名） | ✅ |

### Content Quality Sampling

| Site | Guides Sampled | Fabrication | Notes |
|------|------|:--:|------|
| sovereignthwiki | 6/18（price-platforms, factions-guide, tier-list, knight-recruitment-guide, dragon-knight-guide, recruit-brunhilda） | ✅ None | $19.99 ✓、WILD WITS ✓、Curve Games ✓、5 派系+Treasury ✓、8/6 发售 ✓、50K 首周销量（Curve 官方 8/14 公告 ✓）、Hildegard Von Blingin' 两曲 ✓、Metacritic 86 ✓；[Unconfirmed] 标记规范，来源链完整 |
| shiftatmidnightwiki | 3/5 + 2 篇 grep 核验（endings, characters, multiplayer-faq + endings-explained, story-walkthrough） | ✅ None（新增 5 篇） | 3 结局（True/Grave/Empty Home）三篇口径一致 ✓、$250 个人现金 ✓、Night 12 不呼 Clyde ✓、成就 200/100/100 ✓、无 PS5 ✓、7/22 发售 ✓、Steam 池隔离 ✓；**但站级文件（非本批新增）含编造元数据** |
| phantomtowerwiki | 2/4 + 2 篇 head-scan（platforms-purchase, items-catalog + best-builds, review-and-community） | ✅ None | EA 7/13 ✓、$12.99/€12.99/£11.75 ✓、24% 折扣 ✓、Horien Studio SRL（Genoa, VIA RENATA BIANCHI 45 ✓）、移动版免费+IAP ✓、128 武器/200+ 装备/47 Blessings/60+ 敌人 ✓、4 职业已命名 4 TBD ✓；"Artemis Dive" 为公开变体名（主名 Artemis Descent，一处来源用 Dive），非编造 |

### Build Health

| Site | Build | Result |
|------|-------|:--:|
| sovereignthwiki | `npm run build` | ✅ Pass (31 routes) |
| shiftatmidnightwiki | `npm run build` | ✅ Pass (44 routes) |
| phantomtowerwiki | `npm run build` | ✅ Pass (33 routes) |

### Infrastructure

| Site | GA4 | GSC | SITE_CONFIG |
|------|:--:|:--:|:--:|
| sovereignthwiki | ⏸️ PENDING（留空属人工任务预期，非缺陷） | ✅ google12f8715471cef7b7.html | ✅ 'Sovereign Tower Wiki' / sovereignthwiki.vercel.app |
| shiftatmidnightwiki | ✅ G-M8577QD2NQ | ✅ google12f8715471cef7b7.html | ✅ 'Shift At Midnight Wiki' / shiftatmidnightwiki.vercel.app |
| phantomtowerwiki | ✅ G-D2LXC98S3C | ✅ google12f8715471cef7b7.html | ✅ 'Phantom Tower Wiki' / phantomtowerwiki.vercel.app |

### Per-Site Verdicts

**sovereigntowerwiki — ✅ PASS**（GA4 标记 PENDING，按人工任务处理，不阻塞部署）
**phantomtowerwiki — ✅ PASS**
**shiftatmidnightwiki — ❌ FAIL** — 编造站级渲染元数据 + JSON-LD 链接/价格/主体错误

### FAIL 清单 — shiftatmidnightwiki（Steam 官方正作: app/3722330，开发者 Bun Muen，发行 Kwalee，价格 $9.99/10% 折扣）

1. **lib/schema.ts:61, 78** — VideoGame JSON-LD url 指向 `app/4050060`（此为免费 Multiplayer Demo，2025-09-29 发布），正作链接应为 app/3722330
2. **lib/schema.ts:67, 71** — author/publisher 均为 **'Fiddlesticks Games'（编造，公开无此记录）**；实际: Bun Muen / Kwalee（Steam 商店页直接核验）
3. **lib/schema.ts:75** — offers price `'12.99'`（实际 $9.99）
4. **content/home-content.md:3, 7, 15, 55** — "Developed by Fiddlesticks Games"（编造开发者）
5. **content/home-content.md:59** — "$12.99 with a 32% launch discount (regular $19.99)"（编造价格）+ "peak of 37,000+ concurrent players"（公开峰值 7/24 约 12,500+，无法核实）
6. **content/home-content.md:79** — Steam 链接指向 demo app/4050060
7. **content/home-content.md:80** — "Fiddlesticks Games official site" `https://www.fiddlesticksgames.com`（编造官方站，无官方记录）
8. **app/page.tsx:16, 20, 35, 39** — 首页渲染: Fiddlesticks Games + $12.99/32% 折扣 + Steam CTA 指向 demo
9. **app/faq/page.tsx:12, 20, 23, 25, 27** — FAQ 渲染: Fiddlesticks Games + $12.99 (32% off, regular $19.99) + "all 6 endings"（实为 3 结局）+ 编造未来更新计划与付费 DLC
10. **内部自相矛盾**: `content/guides/faq-content.md:53-55` 正确写 $9.99/10% 折扣/7-29 截止，与首页、FAQ 页、JSON-LD 冲突——同一站点两套价格口径

补充（非阻塞）: lib/schema.ts:51,95 JSDoc 注释残留 "Echoes of Aincrad"（模板注释，不渲染，建议随修复清理）。

修复范围 = 4 个文件（lib/schema.ts、content/home-content.md、app/page.tsx、app/faq/page.tsx）。本次 EXPAND-003 新增的 5 篇攻略内容本身事实干净，无需改动。主 Agent 决策: 该站重部署前 MUST 退回建站协调员修复上述 10 项。

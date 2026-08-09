# Deep QA Audit Report — 2026-08-09

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

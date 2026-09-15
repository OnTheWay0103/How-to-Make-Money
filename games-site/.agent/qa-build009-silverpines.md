# QA Report — silverpineswiki (BUILD-009)

- **Date**: 2026-09-16
- **Mode**: quick (residue scan + fabrication check), per `docs/agents/06-Profile-QA审核员.md`
- **Scope**: 1 site (new) — 10 P0 guides + 8 site-level pages + 5 lib/config files
- **Build state at audit time**: `pnpm build` ✓ Compiled successfully, 23 static routes; deployed to production, all 23 live-verified
- **Intent**: pre-release honesty audit (Steam launch 2026-10-08, 22 days out; 0 reviews on the main game)
- **Constraint honoured**: the only file modified during QA was a single factual-accuracy correction to `app/privacy/page.tsx` §2 (logged as W-3 below, re-built and re-deployed). No git operation.

## Verdict

**PASS** — 0 blockers. 5 warnings, 3 suggestions.

No fabrication, no cross-site template residue, no honesty-marker violations, no attribution violation,
no wishlist-scope conflation, no fabricated mechanic values.

---

## Execution Summary

| Severity | Count | Blocking? |
|:--|:--:|:--|
| 🔴 Blocker | **0** | — |
| 🟡 Warning | **5** | No — submittable, address in next pass |
| 🟢 Suggestion | **3** | No |

---

## 1. Template Residue Scan — ✅ CLEAN

Scan basis: the full other-site name list from Profile §2.2A, run over the entire site directory excluding `node_modules/` and `.next/`.

| Check | Result |
|:--|:--|
| Other game / site names (`dressmaker`, `cozy lives`, `free lives`, `witchspire`, `mistfall`, `aincrad`, `themound`, `spiritvale`, `tearsofmetal`, `sephiria`, `grainrot`, `elderfield`) across `*.ts *.tsx *.md *.json *.mjs` | **0 matches** |
| **EX-Mod cross-site template residue** (the defect that has hit 4 sites — whole-block template prose copied between games) | **0 matches** |
| `rose-` palette residue from the dressmakerwiki lineage (79 replacements were made) | **0 real matches** (1 apparent hit was `prose-invert` matching the substring `rose-`; verified false positive) |
| `next/font/google` (blocked in CN, local build fails) | **0 matches** — `app/layout.tsx` uses `geist/font/sans` + `geist/font/mono` |
| Fake GA4 fallback value (`G-XXXXXXX` hardcoded) | **0 matches** — `SITE_CONFIG.googleAnalyticsId` is `''` and `components/GoogleAnalytics.tsx` returns `null` on falsy |
| CJK character leakage into the English site (residue of the `美工刀` defect found earlier in this build) | **0 matches** across `app/ components/ lib/ content/` |
| `localhost` / `example.com` / `your-domain` / `TODO` / `FIXME` / `lorem ipsum` / `PLACEHOLDER` | **0 matches** |
| Web-verified live: string `dressmaker` on all 8 site-level pages | **0 occurrences on every page** |

**Live cross-check (independent of the build agent's claims):** fetched each deployed page over HTTPS with `--resolve` and grepped the rendered HTML — no residue in the production output either.

---

## 2. Fabrication Check — ✅ NO FABRICATION FOUND

This was the highest-risk area for this build: the game is **unreleased**, the store page publishes **no** price, **no** weapon list, **no** damage figures, **no** coin costs, and **no** Memento list. Three other sites in the last expansion batch were caught fabricating exactly this class of content (themoundwiki 4 characters + 4 Traits, spiritvalewiki P2W shop entries, tearsofmetalwiki 5 named Companions + values), so it was audited explicitly.

| Check | Method | Result |
|:--|:--|:--|
| **Price fabricated?** | grep for currency patterns + manual read of the price section | **No.** `Price — Not Announced Yet`; the page states the price had not been published as of 2026-09-16 and marks it `[Unconfirmed]`. No `$`, no regional pricing, no "estimated". |
| **Sales / CCU / review-count for the main game fabricated?** | grep for sales/CCU terms + read of the numbers table | **No.** The main game is explicitly recorded at **0 reviews** (pre-release). The **802 reviews / 95.9%** figure appears only for the **demo**, attributed to `Steam appreviews API, 2026-09-16`. |
| **Wishlist scope conflated?** | grep `200K\|83K\|wishlist` | **No — this is handled correctly and unusually well.** Both figures appear, each with its scope in the same row: `"200K+ across all platforms"` (official Steam news post 2026-06-19) vs `~83K` Steam-only (third-party Raijin estimate, marked `[Unverified]`). `home-content.md` adds an explicit note that they must not be added, averaged, or quoted as "the" wishlist number. `app/tier-list/page.tsx` repeats the separation in its evidence ledger. |
| **Weapon names / damage values invented?** | grep for damage/HP/rounds/percent patterns across `content/guides/` | **No numeric weapon claim exists anywhere.** The only named weapons are the cutter/utility knife, pistol and shotgun, each labelled `[Community-reported]`, with a standing statement that **no official weapon list exists**. |
| **Mechanic values invented?** | grep for `%`, damage, seconds, slots, coins-per | **No.** Every mechanic page carries a sourcing note and a table of `[Unconfirmed]` rows for the values. `silver-pines-*` guides contain **0** invented numbers. |
| **Sources fabricated?** | manual read of every `*Sources:` footer (10/10) | **No.** Footers cite only: the Steam store page and store data for App ID 2333000 / demo App ID 4540100, Steam appreviews, a Game8 developer interview with Mattias Snygg, and joint Wych Elm / Team17 release material. Nothing invented, nothing cited that was not actually read or recorded by the gate agent. |
| **Player voices fabricated?** | read of every quoted-attribution passage | **No named or paraphrased player quote is attributed to a real person.** Community material is described collectively ("demo players report", "preview coverage describes") and labelled. |
| **Gate-report mechanics repeated without verification?** | cross-check every gate mechanic against the guide text | **No — and this is a positive finding.** 5 of the gate report's 12 mechanics could not be verified this round (`gun locker code`, `herbs/glass bottle`, `camera photo map`, `hip pouch`, `stiletto`). Rather than repeat them as fact, the build either **omitted** them or **answered the question honestly with "no verifiable source"** (see the shotgun-code and hip-pouch sections). |
| **`[Unconfirmed]` markers present?** | count per guide | **123 occurrences across 10/10 guides**; 0 guides missing the marker. |

### 2.1 The shotgun-code decision (audited specifically)

`silver pines demo shotgun code` is a **real Suggest hit** and the single most fabrication-tempting query in this build.

The deployed answer is: *no verifiable shotgun code exists; any page quoting a button sequence is guessing.* The demo guide carries the marker `**[Unconfirmed — no verified code exists in any official source as of 2026-09-16]**`.

**QA position: this is the correct call.** It forfeits a cheap click to keep the site's factual baseline intact, and it is consistent with the pre-release discipline the build was given.

---

## 3. Honesty Markers — ✅ COMPLIANT

Three-tier labelling (Official / Community-reported / Editorial) is applied consistently.

| Guide | `[Unconfirmed]` | `Community-reported` | Source footer |
|:--|:--:|:--:|:--:|
| release-date-price-platforms | 15 | 0 | ✅ |
| inventory-storage-guide | 12 | 11 | ✅ |
| stamina-dodge-mementos | 11 | 17 | ✅ |
| coins-vending-machines-economy | 9 | 11 | ✅ |
| guns-ammo-reloading | 9 | 17 | ✅ |
| map-backtracking-exploration | 9 | 10 | ✅ |
| demo-guide | 8 | 10 | ✅ |
| melee-weapons-durability-repair | 7 | 11 | ✅ |
| save-system-phone-booths | 6 | 13 | ✅ |
| beginner-guide | 3 | 10 | ✅ |

- The release-info guide legitimately has **0** `Community-reported` markers: everything on it is official store data, which is the correct split.
- Structural claims traceable to the Steam store description are attributed as official; everything from demo players and preview coverage is labelled `Community-reported`; conclusions drawn by the site are labelled as reasoning rather than fact.
- "What is *not* confirmed yet" sections exist on the homepage content, the release page, and the tier-list page — the honesty is not buried.

---

## 4. Attribution Red Line — ✅ COMPLIANT

| Check | Result |
|:--|:--|
| Developer / publisher named correctly | **Wych Elm (developer) / Team17 (publisher)** — consistent across `lib/schema.ts`, `components/Footer.tsx`, `content/home-content.md`, all 10 guides, and the legal pages |
| Conflict-of-interest / non-affiliation disclaimer | Present on 10/10 guides (source footer) and on `/about` |
| Site claims to be official? | **No.** `/about` states the site is unofficial and unaffiliated; the homepage FAQ has a dedicated "is this the official site?" answer |
| Steam store link | `https://store.steampowered.com/app/2333000/Silver_Pines/` — correct App ID |
| Game title spelled correctly | `Silver Pines` (not `Silverpine` / `Silver Pines Game`) throughout |

### 4.1 Bare-word policy — ✅ COMPLIANT

The gate's SEO red line was that the bare name `Silver Pines` is polluted and must never be the primary target.

- Homepage `<meta name="keywords">` leads with **`Silver Pines game`**, then `Silver Pines game wiki`, `Silver Pines game guide`, `Silver Pines game release date`, `Silver Pines game price`, `Silver Pines game platforms` — the bare word never appears alone in the list.
- Every guide's `keywords` array is anchored (`silver pines demo`, `silver pines game demo`, `silver pines game price`, …).
- The rendered homepage contains **12** occurrences of the literal string `silver pines game`.
- `/about` carries an explicit disambiguation passage so a visitor who wanted the **ranch book series**, the **medical group**, the **apartments**, or the **rehab centre** is told plainly that this is not it.
- `lib/metadata.ts` carries a source comment documenting *why* the bare word is unusable, so a future maintainer cannot "simplify" it back.

---

## 5. Compliance Pages (AdSense 9/9) — ✅ COMPLIANT

| Check | Result |
|:--|:--|
| `/privacy`, `/terms`, `/about`, `/contact` all exist and return 200 | ✅ (29,514 / 25,629 / 31,295 / 22,039 bytes live) |
| **Conditional** ad phrasing | ✅ `We may display advertisements…`, `Where advertising is enabled…`, `via Google AdSense (where advertising is enabled)`, `(if approved)`, `(where advertising is enabled)` |
| Forbidden phrasing absent | ✅ **0 matches** for `We use Google AdSense` / `We intend to apply for Google AdSense` / `We have applied for` |
| Opt-out links preserved | ✅ `https://www.google.com/settings/ads`, `https://www.aboutads.info/choices/`, `https://tools.google.com/dlpage/gaoptout` |
| `ads.txt` | ✅ live, `google.com, pub-7211682665758448, DIRECT, f08c47fec0942fa0` |
| Contact email | ✅ `zhaoq8278@gmail.com` on `/contact` (mailto link) |
| GSC verification file | ✅ live, returns `google-site-verification: google12f8715471cef7b7.html` |
| Ads script tag | ✅ present in layout (`pagead2.googlesyndication.com … client=ca-pub-7211682665758448`) |

---

## 6. Internal Consistency — ✅ NO CONTRADICTIONS

| Check | Result |
|:--|:--|
| Release date consistent everywhere | ✅ `October 8, 2026` — verified identical in frontmatter, body, schema `datePublished`, FAQ, and homepage |
| App IDs consistent | ✅ `2333000` (main) and `4540100` (demo). The earlier `2330000` typo was fixed and verified: **0** occurrences of the wrong ID remain |
| Demo release date | ✅ `June 1, 2026` — consistent across the demo guide, economy guide, and release page |
| Demo review figures | ✅ `802 / 95.9%` used identically in all 4 places they appear, each attributed to the same source and date |
| Wishlist figures | ✅ never added, averaged, or merged; each carries its scope inline |
| Version / date fields | ✅ `version: '1.0'` and `updated: '2026-09-16'` on **10/10** guides |
| Categories | ✅ 9 distinct categories, no duplicates caused by casing; `Combat` shared by 3 guides by design (melee / guns / stamina) with non-overlapping scopes |
| Slug de-duplication | ✅ 10 unique slugs, all prefixed `silver-pines-`; no two guides target the same query |
| FAQ deliverable | ✅ deliberately delivered as a **dedicated `/faq` page (31 items) + homepage FAQ block (17 items)** rather than an 11th guide, to avoid self-cannibalisation with the 10 P0 guides. This is a documented, intentional deviation from the gate's suggested "FAQ ×1" slot. |

---

## 7. Dead / Self Links — ✅ CLEAN

| Check | Result |
|:--|:--|
| Every `/guides/silver-pines-*` link in `app/ content/ components/` resolves to a real `content/guides/*.md` | ✅ **10/10 OK, 0 dead** |
| Every `related:` slug in all 10 guides resolves | ✅ **0 dead** |
| Self-links (a guide linking to itself in `related`) | ✅ 0 |
| Broken internal links live | ✅ sitemap lists **18 URLs**, all of which were independently fetched and returned 200 |
| Orphan guides (not linked from anywhere) | ✅ 0 — all 10 appear in `content/home-content.md`, `/guides`, and the sitemap |

> **Note:** the final guide written (`silver-pines-beginner-guide`) was referenced by 7 other guides' `related` arrays, `app/page.tsx` FEATURED_GUIDES and `home-content.md` **before it existed**. Had the build shipped before it was written, those would have been dead links. It now exists and resolves — verified above.

---

## 8. Word Count (target 1000–1500, body excluding frontmatter)

| Guide | Words | Status |
|:--|:--:|:--|
| release-date-price-platforms | 2,180 | 🟡 over budget (+680) |
| demo-guide | 1,653 | 🟡 over budget (+153) |
| map-backtracking-exploration | 1,570 | 🟡 over budget (+70) |
| beginner-guide | 1,514 | 🟢 marginal (+14) |
| coins-vending-machines-economy | 1,412 | ✅ in range |
| save-system-phone-booths | 1,386 | ✅ in range |
| inventory-storage-guide | 1,382 | ✅ in range |
| guns-ammo-reloading-guide | 1,374 | ✅ in range |
| melee-weapons-durability-repair | 1,375 | ✅ in range |
| stamina-dodge-mementos-guide | 1,283 | ✅ in range |

**QA position:** the three over-budget guides are the **transactional** pages (release info, demo, map) and their length comes from FAQ blocks and `[Unconfirmed]` tables rather than padding. Being over on a commercial-intent page is a much smaller problem than being thin on one; **no action recommended**, logged for awareness.

---

## 9. Live Verification (independent re-run, `--resolve`)

`silverpineswiki.vercel.app` resolves to `64.29.17.195`. Without `--resolve` the request returns **HTTP 000** (local DNS poisoning — the same condition documented in `games-site/CLAUDE.md`); with `--resolve` all routes serve normally.

| Route | HTTP | Bytes | Verdict |
|:--|:--:|--:|:--|
| `/` | 200 | 73,192 | PASS |
| `/faq` | 200 | 78,033 | PASS |
| `/tier-list` | 200 | 67,710 | PASS |
| `/guides` | 200 | 48,701 | PASS |
| `/about` | 200 | 31,295 | PASS |
| `/privacy` | 200 | 29,514 | PASS |
| `/terms` | 200 | 25,629 | PASS |
| `/contact` | 200 | 22,039 | PASS |
| `/icon.png` | 200 | 2,369 | PASS |
| `/sitemap.xml` | 200 | 3,488 | PASS |
| `/robots.txt` | 200 | 123 | PASS |
| `/ads.txt` | 200 | 59 | PASS |
| `/google12f8715471cef7b7.html` | 200 | 53 | PASS |
| `/guides/silver-pines-release-date-price-platforms` | 200 | 77,531 | PASS |
| `/guides/silver-pines-demo-guide` | 200 | 65,830 | PASS |
| `/guides/silver-pines-save-system-phone-booths` | 200 | 59,726 | PASS |
| `/guides/silver-pines-coins-vending-machines-economy` | 200 | 61,259 | PASS |
| `/guides/silver-pines-inventory-storage-guide` | 200 | 60,892 | PASS |
| `/guides/silver-pines-melee-weapons-durability-repair` | 200 | 62,070 | PASS |
| `/guides/silver-pines-guns-ammo-reloading-guide` | 200 | 62,493 | PASS |
| `/guides/silver-pines-stamina-dodge-mementos-guide` | 200 | 60,587 | PASS |
| `/guides/silver-pines-map-backtracking-exploration` | 200 | 62,581 | PASS |
| `/guides/silver-pines-beginner-guide` | 200 | 65,487 | PASS |

**23 / 23 PASS · 0 未验证 · 0 HTTP 000 · 0 size 0.**

Additional live checks: sitemap contains **18 `<loc>` entries** (8 static + 10 guides); `robots.txt` allows all and points at the sitemap; homepage meta contains `keywords` with `Silver Pines game` first and a full OG/Twitter card set; **0** `gtag(`/`googletagmanager` occurrences (GA4 correctly disabled); AdSense script tag present.

---

## 10. Warning & Suggestion Detail

### 🟡 W-1 — `sources:` frontmatter field absent on 10/10 guides
Frontmatter carries `title / description / category / version / updated / keywords / related` — no `sources:` key. The source attribution lives in a `*Sources: …*` footer at the bottom of each body instead. `lib/guides.ts` does not read a `sources` field, so nothing breaks. This is the same network-convention drift logged for dressmakerwiki (BUILD-008).
**Recommendation:** adopt one convention network-wide, or drop `sources:` from the schema deliberately. Not blocking.

### 🟡 W-2 — three guides exceed the 1000–1500 word target
See §8. `release-date-price-platforms` at 2,180 is the notable one.
**Recommendation:** none for launch; consider splitting the release page if it later needs platform-specific sub-pages.

### 🟡 W-3 — privacy §2 asserted Google Analytics collection unconditionally (**fixed during this audit**)
`app/privacy/page.tsx` line 22 originally read *"This data is collected via Google Analytics, and may be collected via Google AdSense if the site is approved"*. GA4 is deliberately **not configured** on this site (`googleAnalyticsId: ''`), so the unconditional clause was factually wrong on a compliance page.
**Fix applied:** rewritten to *"Where analytics is enabled, this data is collected via Google Analytics; where advertising is enabled, it may also be collected via Google AdSense. Neither is active on this site unless the corresponding integration is configured."* The site was rebuilt and redeployed, and `/privacy` was re-verified live (200 / 29,514 bytes, new wording confirmed in the rendered HTML).

### 🟡 W-4 — page titles do not literally contain the string `silver pines game`
Guide titles are e.g. `Silver Pines Demo Guide — What the Free Steam Demo Contains`. They are anchored by `Silver Pines` + a strong qualifier (`Wiki` / `Demo Guide` / `Save System`), and the `keywords` meta carries the `silver pines game` form, so the disambiguation requirement is met in substance. It is **not** met by literal substring in `<title>`.
**Recommendation:** acceptable as-is (forcing `game` into every title would read badly and hurt CTR). Logged so it is a conscious choice, not an oversight.

### 🟡 W-5 — the 802 / 95.9% demo figure could not be re-fetched this round
`store.steampowered.com/appreviews/…` failed with `curl` both with and without `--resolve` during this build. The figure is used in 4 places, always attributed to `Steam appreviews API, 2026-09-16` (the gate agent's collection).
**Recommendation:** re-verify before launch day and update both the number and the date if it has moved. Also record the scope conflict note in the build record.

### 🟢 S-1 — `/tier-list` is a deliberate non-tier-list
`silver pines game weapons` has search demand, but no official weapon list exists. The page ranks **survival priorities** and carries a 24-row system-status table with three-tier sourcing, plus an evidence ledger. It states at the top that it is not a weapon tier list because no arsenal has been published. Correct call; noted so it is not "fixed" into a fabricated tier list later.

### 🟢 S-2 — `public/` assets are tracked normally
The build brief warned that `public/` is globally gitignored (`Public/` rule, macOS case-insensitive) so new assets need `git add -f`. **Verified this does not apply here:** `git check-ignore` returns no match for `silverpineswiki/public/icon.png`, `ads.txt`, or `google12f8715471cef7b7.html`, and sibling sites (`dressmakerwiki/public/`) have these files tracked. Normal `git add` will pick them up.

### 🟢 S-3 — dashboard registration uses a comment block, not a placeholder value
`dashboard/lib/sites.ts` gained a `Silver Pines Wiki` entry with `propertyId: 'PENDING'` and `gaId: ''` (matching the dressmakerwiki pattern), plus an inline comment naming the three manual steps (create the GA4 property → fill `propertyId` + `gaId` → set `SITE_CONFIG.googleAnalyticsId`). Crucially it contains **no** `G-PLACEHOLDER`-style fallback: that was the STATS §5.1 bug (15 sites affected, fixed 7/27). Verified: 0 fake `G-` values in the site code.

---

## 11. Recommended Fixes — Priority Order

1. **Before launch day (2026-10-08):** re-verify the demo review count and rating; update the figure, the date, and the source note in all 4 locations. (W-5)
2. **Before launch day:** confirm the price the moment Steam publishes it, and replace the "Price — Not Announced Yet" section with the real figure and regional breakdown. (pre-release dependency, not a defect)
3. **Next content pass:** decide the `sources:` frontmatter convention network-wide. (W-1)
4. **Post-launch:** revisit `/tier-list` once an official weapon list exists — it can then become a real tier list. (S-1)
5. **Post-launch:** create the GA4 property, fill `propertyId` + `gaId` in `dashboard/lib/sites.ts`, and set `SITE_CONFIG.googleAnalyticsId`. (S-3)

---

## Note for Launch-Day (2026-10-08)

`silverpineswiki` is a **pre-release** site: 22 days before launch, with 0 reviews on the main game and no published price. Its honesty markers (`123 × [Unconfirmed]`, `[Unverified]` on the third-party wishlist figure, `[Community-reported]` on every demo-derived mechanic) are **not padding** — they are the correct state of knowledge on 2026-09-16.

On launch day the following become answerable and **must** be updated rather than left stale:
- the actual price and any launch discount
- main-game review count and rating (currently explicitly 0)
- platform-verified performance, Steam Deck rating, achievement list
- the reported demo mechanics that are still `[Community-reported]` — some will be confirmable from the release build

The one thing that **must not** change at launch: the two wishlist figures stay separated by scope. Launch-day pressure to quote a single impressive number is exactly when that rule is most likely to be broken.

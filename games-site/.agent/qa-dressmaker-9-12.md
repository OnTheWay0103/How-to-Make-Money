# QA Report — dressmakerwiki (BUILD-008)

- **Date**: 2026-09-12
- **Mode**: quick (residue scan + fabrication check)
- **Scope**: 1 site, 12 guides — 7 written today (P1) + 5 built earlier today (P0)
- **Auditor**: QA 审核员 (05 / 06), independent of Build Agent
- **Constraint honoured**: read-only. No file modified, no git operation, no `pnpm build`.

## Verdict

**PASS** — 0 blockers. 7 warnings, 3 suggestions.

No fabrication, no template residue, no honesty-marker violations, no attribution violation.
The two issues worth acting on are the missing `sources:` frontmatter field (network-convention
drift, 12/12 guides) and two guides over the 800–1500 word budget.

---

## Execution Summary

| Severity | Count | Blocking? |
|:--|:--:|:--|
| 🔴 Blocker | 0 | — |
| 🟡 Warning | 7 | No — submittable, fix in next pass |
| 🟢 Suggestion | 3 | No |

---

## 1. Template Residue Scan — ✅ CLEAN

| Check | Command basis | Result |
|:--|:--|:--|
| Other game names (full list from Profile §2.2A) | grep -rniE over whole site dir, excl. node_modules/.next | **0 matches** |
| welcomeelderfieldwiki / elderfield template lineage | grep -rniE "elderfield\|welcomeelder" | **0 matches** |
| The Mound phrase block (Profile §2.2B) | "cooperative PvE extraction horror", "cursed jungle", "The Mound community" | **0 matches** |
| False studio residue (Profile §2.2C) | "SpiritVale Studio", "published by NACON" | **0 matches** |
| Hugo shortcodes | `{{<`, `{{%`, `shortcode` | **0 matches** |
| Scaffold placeholders | lorem / TODO / FIXME / PLACEHOLDER / example.com | **0 matches** |
| Cross-site links | https?:// extraction across all 12 guides | only `store.steampowered.com`, `itch.io` — **no sister-site links** |

`lib/seo-config.ts` `SITE_CONFIG.name` = `'Dressmaker Wiki'` — correct, not a template name.

---

## 2. Fabrication Check — ✅ NO FABRICATION FOUND

Cross-verified every concrete claim against a live Steam `appdetails` fetch on 2026-09-12
(`appid=4019220`, `cc=us&l=english`). Local DNS returns a poisoned A record for
`store.steampowered.com` (`59.151.137.185`); resolved via `dig +short @8.8.8.8` → `23.45.138.131`
and fetched with `--resolve`. Raw response: HTTP 200, `success:true`.

| Site claim | Location | Steam API result | Verdict |
|:--|:--|:--|:--:|
| Developer Cozy Lives / publisher Free Lives | all 12 guides + app pages | `developers:["Cozy Lives"]`, `publishers:["Free Lives"]` | ✅ |
| Release date September 21, 2026 | all 12 | `release_date:{coming_soon:true,date:"Sep 21, 2026"}` | ✅ |
| Price not announced `[Unconfirmed]` | `release-date-price-platforms.md:58`, `free-steam-vs-itch-prototype.md:44` | `price_overview` is **null** | ✅ |
| Paid, not free | `release-date-price-platforms.md:62`, `free-steam-vs-itch-prototype.md:33` | `is_free:false` | ✅ |
| Windows + macOS only, no Linux | `platforms-mac-console-mobile.md:39-43`, `release-date-price-platforms.md:80-89` | `platforms:{windows:true,mac:true,linux:false}` | ✅ |
| Genres Casual, Simulation | `release-date-price-platforms.md:101`, `schema.ts:66` | `genres:['Casual','Simulation']` | ✅ |
| Single-player only, no co-op/PvP | `release-date-price-platforms.md:107`, `beginner-guide.md:239` | categories = `Single-player` only | ✅ |
| Mouse Only Option + Playable without Timed Input | `sewing-guide-clean-seams.md:64-65`, `beginner-guide.md:173-174` | category ids 76 and 74 present | ✅ |
| **Achievements ship with the game** | `release-date-price-platforms.md:104,111` | category id 22 `Steam Achievements` present | ✅ |
| **English / Simplified Chinese / Japanese, all with full audio** | `release-date-price-platforms.md:117-123`, `platforms-mac-console-mobile.md:120-126` | `supported_languages:"English*, Simplified Chinese*, Japanese*"` + `*` = full audio | ✅ |
| System requirements (Win 10+/i5/8GB/UHD 630/DX11/1GB; macOS M1/8GB/1GB) | `release-date-price-platforms.md:131-148`, `platforms-mac-console-mobile.md:59-67` | verbatim match to store data | ✅ |
| No recommended specs published | `release-date-price-platforms.md:156` | `recommended` absent | ✅ |
| No Steam demo build | `free-steam-vs-itch-prototype.md:58`, `app/page.tsx:82` | `type:"game"`, no demo appid | ✅ |
| Five fabrics: cotton/linen/wool/silk/velvet | `fabric-guide.md:33-37`, `beginner-guide.md:76-82` | matches store description verbatim | ✅ |

**Two claims the internal facts baseline did not cover, verified independently and found CORRECT:**
`facts-dressmaker-9-11.md` §3 enumerates categories without listing `Steam Achievements`, and the
document does not cover languages at all. The build agent asserted both anyway — and both survive
live verification. Worth noting as a positive: these were not guesses that happened to pass.

**Second-order check on the comparison apps** (`vs-dressmaker-pro.md:37-41`) — live fetch:

| App ID | Guide claims | Steam API | Verdict |
|:--|:--|:--|:--:|
| 1487080 | DressMaker, Suzuki Cecil, Dream Factory Co., Ltd., Mar 26 2021, $9.99, Windows | exact match | ✅ |
| 1599300 | DressMaker Pro, same parties, Jul 15 2021, $54.99, Windows | exact match | ✅ |

**Pre-release discipline is good.** All prototype/preview-sourced mechanics are marked:
green alignment cue (`grain-direction-bias-cut.md:56`), per-piece quality cap (`:61`),
seam-straightness quality driver (`sewing-guide-clean-seams.md:50`), style tags
(`customer-requests-style-tags.md:63`), four-part garment structure
(`sketchbook-dress-parts.md:67`), decoration attach bug (`decoration-placement-guide.md:93`),
patterned fabrics (`fabric-guide.md:92`). No NPC name, price, stat, achievement name or recipe is
asserted anywhere — seven guides explicitly enumerate what is *not* published
(`customer-requests-style-tags.md:113-124`, `decoration-placement-guide.md:124-130`,
`sketchbook-dress-parts.md:130-136`).

---

## 3. Honesty Markers — ✅ COMPLIANT

- **Chinese characters anywhere in `content/`, `app/`, `components/`, `lib/`: 0 matches**
  (`grep -rnP "[\x{4e00}-\x{9fff}]"`). No `待确认` / `待验证` / `未确认` occurrences.
- Marker used is the English string `[Unconfirmed]` throughout — **132 occurrences** across the 12 guides.

| Guide | `[Unconfirmed]` |
|:--|:--:|
| dressmaker-beginner-guide | 17 |
| dressmaker-customer-requests-style-tags | 15 |
| dressmaker-decoration-placement-guide | 13 |
| dressmaker-release-date-price-platforms | 13 |
| dressmaker-sketchbook-dress-parts | 13 |
| dressmaker-sewing-guide-clean-seams | 10 |
| dressmaker-grain-direction-bias-cut | 9 |
| dressmaker-fabric-guide | 8 |
| dressmaker-free-steam-vs-itch-prototype | 8 |
| dressmaker-pattern-placement-cutting | 7 |
| dressmaker-platforms-mac-console-mobile | 5 |
| dressmaker-vs-dressmaker-pro | 2 |

Every guide also carries an inline `*Sources: …*` footer as its last line.

---

## 4. Attribution Red Line — ✅ COMPLIANT

`grep -rn "developed by Free Lives"` over the entire site returns exactly **2 hits**, both legitimate:

- `app/page.tsx:90` — inside an explicit correction parenthetical:
  *"(It is not “developed by Free Lives” — Free Lives is the publisher.)"*
- `content/guides/dressmaker-vs-dressmaker-pro.md:112` — the sanctioned correction paragraph
  (*"A number of pre-release articles and fan pages describe Dressmaker as 'developed by Free
  Lives.' That is not what the official store data says."*)

**No other occurrence anywhere.** No unflagged violation.

---

## 5. Internal Consistency — ✅ NO CONTRADICTIONS

Cross-checked every fact stated on more than one page:

| Fact | Pages stating it | Consistent? |
|:--|:--|:--:|
| Release date September 21, 2026 | 12 guides + `app/page.tsx:55,130` + `home-content.md:15` | ✅ |
| Developer Cozy Lives / publisher Free Lives | 12 guides + 6 app pages | ✅ |
| Price unannounced `[Unconfirmed]` | 5 pages | ✅ |
| Platform list (Win/macOS only) | 4 pages | ✅ |
| Five-fabric list | `fabric-guide`, `beginner-guide`, `release-date`, `app/page.tsx:105` | ✅ |
| Languages (EN/zh-Hans/ja, full audio) | `release-date:117-123`, `platforms:120-126` | ✅ |
| System requirements | `release-date:131-148`, `platforms:59-67`, `app/page.tsx:100` | ✅ |
| No co-op/multiplayer/PvP | `release-date:107`, `beginner-guide:239`, `app/page.tsx:76` | ✅ |
| No mobile / no APK | `platforms:95-99`, `free-steam:91-93`, `release-date:89` | ✅ |

Days-to-launch arithmetic also checks out (`free-steam-vs-itch-prototype.md:151` — "nine days" from 9/12 to 9/21).

---

## 6. Dead / Self Links — ✅ CLEAN

All 12 body `/guides/<slug>` link targets resolve to a real `.md` file in this site. All
frontmatter `related:` slugs likewise. No slug appears in its own `related:` list, and no guide
links to itself in the body. Verified by file-existence test against the 12 real guides.

---

## 7. Frontmatter Integrity — 🟡 ONE FIELD MISSING ON ALL 12

Present and well-formed on all 12: `title`, `description`, `category`, `version`, `updated`,
`keywords` (8–14 entries each), `related` (4 entries each). All string values are single-quoted;
`version: '1.0'` and `updated: '2026-09-12'` are consistent across the batch. No malformed or
unterminated values, no bare colons inside unquoted scalars — no YAML parse risk.

**🟡 W-1 — `sources:` frontmatter missing from 12/12 guides.**
`grep -c "^sources:"` returns 0 for every guide. This is a network-convention gap, not a
rendering bug: `dressmakerwiki/lib/guides.ts:5-13` (`GuideFrontmatter`) has no `sources` field and
`components/GuideLayout.tsx` contains no `sources` block (0 matches), so the field would not render
even if added. Newer sites in the network implement it end-to-end —
`sephiriawiki/lib/guides.ts:18` and `grainrotwiki/lib/guides.ts:18` declare
`sources?: EvidenceSource[]`, and `sephiriawiki/components/GuideLayout.tsx:72-80` renders a
tiered Verification block. dressmakerwiki descends from the older `welcomeelderfieldwiki` scaffold
lineage (confirmed in `build-history.json`) which predates that convention.
**Mitigation:** all 12 guides carry an inline `*Sources: …*` footer, so source disclosure is
present to the reader — this is why it is a warning, not a blocker.

---

## 8. Word Count (800–1500, body excluding frontmatter) — 🟡 TWO OVER BUDGET

| Guide | Words | Status |
|:--|:--:|:--:|
| dressmaker-beginner-guide | 2213 | 🟡 over |
| dressmaker-release-date-price-platforms | 1798 | 🟡 over |
| dressmaker-free-steam-vs-itch-prototype | 1353 | ✅ |
| dressmaker-grain-direction-bias-cut | 1340 | ✅ |
| dressmaker-fabric-guide | 1322 | ✅ |
| dressmaker-customer-requests-style-tags | 1282 | ✅ |
| dressmaker-sketchbook-dress-parts | 1281 | ✅ |
| dressmaker-platforms-mac-console-mobile | 1280 | ✅ |
| dressmaker-vs-dressmaker-pro | 1265 | ✅ |
| dressmaker-decoration-placement-guide | 1263 | ✅ |
| dressmaker-sewing-guide-clean-seams | 1221 | ✅ |
| dressmaker-pattern-placement-cutting | 1182 | ✅ |

Both over-budget guides are P0 (already reviewed once). Their length is substantively justified —
the beginner guide is the loop walkthrough, the release-date guide carries the system-requirements
and languages tables — so this is a trim recommendation, not a defect. The 7 guides written today
are all comfortably in range (1182–1340).

---

## Warning & Suggestion Detail

| # | Sev | File:line | Issue | Recommended fix |
|:--|:--:|:--|:--|:--|
| W-1 | 🟡 | all 12 guides (frontmatter) | `sources:` field absent network-wide; `lib/guides.ts:5-13` and `GuideLayout.tsx` lack support | Add tiered `sources:` frontmatter + `EvidenceSource` support in line with `sephiriawiki`. Or accept the inline-footer convention and record the deviation. |
| W-2 | 🟡 | `dressmaker-beginner-guide.md` (2213 w) | 47% over the 1500-word ceiling | Trim the "Common Beginner Mistakes" and "Your First Session" lists — they restate the step sections. |
| W-3 | 🟡 | `dressmaker-release-date-price-platforms.md` (1798 w) | 20% over the ceiling | The FAQ block near-duplicates the body tables; cut 3–4 entries. |
| W-4 | 🟡 | `dressmaker-grain-direction-bias-cut.md:3` | Meta description asserts the green cue and the quality score as fact — *"the single biggest lever on a Dressmaker garment quality score … how the green alignment cue works"* — while the body correctly marks both `[Unconfirmed]` (`:56`, `:61`, `:83`). The SERP snippet is the one surface with no hedge. | Reword to "reported quality cue … what prototype players have described". |
| W-5 | 🟡 | `dressmaker-sewing-guide-clean-seams.md:119` | *"The game has no failure state"* stated flatly. Sibling guides hedge the same claim: `beginner-guide.md:230` and `customer-requests-style-tags.md:131` both write *"No failure state has been described."* | Match the hedged phrasing. |
| W-6 | 🟡 | `dressmaker-free-steam-vs-itch-prototype.md:89` | *"a small, highly-wishlisted indie game"* — wishlist-scale claim with no source. `facts-dressmaker-9-11.md` §7 requires wishlist figures to carry a source or `[Unconfirmed]`. | Drop "highly-wishlisted" or cite the developer-published figure with its date. |
| W-7 | 🟡 | `dressmaker-vs-dressmaker-pro.md:76` | Table row *"Genre on the page"* gives the tools' genre as *"Utilities / avatar texturing"*. Live Steam data for 1487080/1599300 lists **Casual, Animation & Modeling, Design & Illustration, Game Development** — "Utilities" appears nowhere. | Correct the cell to the actual genre tags. |
| S-1 | 🟢 | `dressmaker-grain-direction-bias-cut.md:25` | *"there is no dedicated grain page anywhere"* — unverifiable negative claim about the whole web; the facts baseline logs only one known competitor (`dressmakergame.com`). | Soften to a statement about the known competitor. |
| S-2 | 🟢 | `dressmaker-pattern-placement-cutting.md:119` | *"the saving is not worth the cap"* presupposes the quality cap is real; body marks it `[Unconfirmed]` at `:45`. | Add "if the reported cap holds". |
| S-3 | 🟢 | `app/page.tsx:105`, `content/home-content.md:87` | *"bought from a wide range of suppliers"* misreads the official text *"Buy from a wide range of fabrics"* — suppliers were invented, fabrics were meant. Outside the 12-guide scope; site-level. | Change "suppliers" → "fabrics". |

**On `dressmaker-vs-dressmaker-pro.md` having only 2 `[Unconfirmed]` markers:** reviewed and accepted.
Every concrete claim in that guide (three app IDs, two developers, two publishers, two prices, two
release dates, platform lists) was independently verified live and matched exactly, so the low
marker count reflects a fully-sourced claim set rather than missing discipline.

**On GA4:** `lib/seo-config.ts` `googleAnalyticsId` is `''` and `twitterHandle` is `''`.
Per `build-history.json` this is deliberate (GA4 property not yet created; `dashboard`
`propertyId` is `'PENDING'`) and a human task is already logged. **Not re-reported as a new
finding** — noted only for completeness. `public/google12f8715471cef7b7.html` and `public/ads.txt`
both exist.

---

## Infrastructure Spot-Check (independent verification)

| Item | Method | Result |
|:--|:--|:--|
| Homepage reachable | `curl -I` with `--resolve dressmakerwiki.vercel.app:443:216.198.79.67` (poisoned local DNS) | **HTTP/2 200** ✅ |
| `/sitemap.xml` | same | **20 `<loc>` entries** ✅ |
| `/ads.txt` | same | **HTTP/2 200** ✅ |
| `vercel.json` `installCommand` | read | `pnpm install` ✅ |
| GSC verification file | `ls public/` | `google12f8715471cef7b7.html` present ✅ |
| `SITE_CONFIG.name` | read | `'Dressmaker Wiki'` ✅ |

Build was not re-run (already verified passing today, per task constraints).

---

## Recommended Fixes — Priority Order

1. **W-5, W-4** — one-line hedging corrections on two guides. Cheapest, and they close the only
   places where an `[Unconfirmed]`-class claim leaks out unhedged. Do these first.
2. **W-7** — correct the genre cell in the comparison table; it is the one factually wrong cell
   found in the batch.
3. **W-6, S-3** — remove or source the two soft claims ("highly-wishlisted", "suppliers").
4. **W-1** — decide the `sources:` frontmatter question at the network level, not per-site.
   dressmakerwiki cannot adopt it without a `lib/guides.ts` + `GuideLayout.tsx` change that would
   also apply to other old-lineage sites.
5. **W-2, W-3** — trim the two P0 guides in the next expansion pass.
6. **S-1, S-2** — optional wording softening.

**No action needed on:** template residue, fabrication, honesty markers, attribution, dead links,
internal consistency, deployment. All clean with evidence above.

---

## Note for Launch-Day (2026-09-21)

Everything marked `[Unconfirmed]` in this batch becomes verifiable on release. The batch is
disproportionately dependent on pre-release markers relative to released-site QA — 132 markers
across 12 guides. A launch-day refresh pass should convert price, quality-score thresholds,
reputation tiers, customer roster, order deadlines, achievement list and the green-cue behaviour
from `[Unconfirmed]` to cited fact. This is already logged as a manual task in `build-history.json`;
flagging it here so the QA record reflects the follow-up obligation.

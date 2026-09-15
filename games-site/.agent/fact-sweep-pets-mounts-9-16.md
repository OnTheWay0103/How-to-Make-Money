# Fact-Sweep Report — spiritvalewiki pets/mounts + themoundwiki Expedition Rank

> Date: 2026-09-16 | Role: fact-sweep agent (内容合规审计员 01/02 → QA 05/06)
> Tasks: (A) `spiritvalewiki/content/guides/pets-mounts-guide.md` (primary) · (B) `themoundwiki/content/guides/characters-classes.md` (small)
> Verdict: **A — 19 named entities + 8 fabricated systems deleted; 4 official claims re-verified and preserved.** **B — `Expedition Rank`/`loadout slot` zero-hit, line deleted.**
> Build ✅ both sites · Deploy ✅ both (production, Ready) · Live-verified ✅ both (HTTP 200, real bytes)

---

## 0. Corpus actually searched (surface + endpoint + measured size)

Every count below is reproducible from this table. All requests made from this machine, 2026-09-16.

| # | Surface | Endpoint / query | Measured |
|---|---|---|---|
| **C1** | SpiritVale official announcements (live app) | `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=3767850&count=200&format=json` | **30 announcements**, 2025-07-22 → 2026-09-10, 66,509 B. `count=200` requested; 30 returned = the complete feed |
| **C2** | SpiritVale **Playtest** official announcements | `api.steampowered.com/...?appid=3918510&count=200&format=json` | **54 announcements**, 2025-08-08 → 2026-06-12, 111,542 B |
| **C3** | Steam store page body | `store.steampowered.com/app/3767850/SpiritVale/?l=english` | HTTP 200, 150,023 B raw → **12,864 B text** |
| **C4** | Steam reviews, **full pagination** | `store.steampowered.com/appreviews/3767850?json=1&num_per_page=100&cursor=*&language=all&purchase_type=all&filter=recent` | **53 pages → 5,211 reviews**, 964,752 B text. `query_summary.total_reviews = 5211` → **100% coverage** |
| **C5** | Editorial | 2UpSkill (read in full), MassivelyOP, MMO.Net, Kickstarter, WebSearch | 2UpSkill reachable → **explicitly "NO PET OR MOUNT MENTIONS"**. MassivelyOP **403**, MMO.Net **404**, Kickstarter **403** → recorded 未验证, NOT zero-hit |
| **C6** | The Mound official announcements | `api.steampowered.com/...?appid=2569760&count=200` | **39 announcements**, 97,596 B |
| **C7** | The Mound store page + reviews | store page (3,466 B text); `appreviews/2569760?json=1...` | **4,067 of 4,071 reviews (99.9%)**, 2,110,059 B |

⚠️ **`json=1` was included on every reviews call.** Confirmed non-empty (5,211 / 4,067) — a silent empty array would have been a false zero-hit.

⚠️ **Corpus correction that changed the whole verdict — read this first.** My initial pass searched only C1 and found `wardrobe = 0`, `tradable = 0`, `40%` unrelated — which looked like it *refuted* the coordinator's brief. That was a **corpus gap, not a finding**: the March 2026 cosmetics notes are posted under a **separate Steam app, "SpiritVale Playtest" (appid 3918510)**, and are absent from the live app's news feed (C1 jumps 2026-02-06 → 2026-04-19). Adding **C2** confirmed every claim in the brief verbatim. **The coordinator's instructions were correct; my first corpus was incomplete.** This is the single most important methodological note in this report.

---

## 1. Task A — per-term hit-count table (term × corpus × count)

### 1.1 Named entities — all zero-hit

| Term | C1 (30 ann.) | C2 (54 ann.) | C3 store | C4 (5,211 rev.) | Verdict |
|---|---|---|---|---|---|
| Iron Shell Turtle | 0 | 0 | 0 | 0 | **DELETE** |
| Ember Fox | 0 | 0 | 0 | 0 | **DELETE** |
| Luminous Sprite | 0 | 0 | 0 | 0 | **DELETE** |
| Wind Runner Cub | 0 | 0 | 0 | 0 | **DELETE** |
| Celestial Griffin | 0 | 0 | 0 | 0 | **DELETE** |
| Void Stalker | 0 | 0 | 0 | 0 | **DELETE** |
| Tamed Horse | 0 | 0 | 0 | 0 | **DELETE** |
| Riding Ram | 0 | 0 | 0 | 0 | **DELETE** |
| Swift Stag | 0 | 0 | 0 | 0 | **DELETE** |
| Armored Wolf | 0 | 0 | 0 | 0 | **DELETE** |
| Shadow Panther | 0 | 0 | 0 | 0 | **DELETE** |
| Crystal Drake | 0 | 0 | 0 | 0 | **DELETE** |
| Primal Unicorn | 0 | 0 | 0 | 0 | **DELETE** |
| Evolution Stone(s) | 0 | 0 | 0 | 0 | **DELETE** |
| Mythic Core | 0 | 0 | 0 | 0 | **DELETE** |
| Rare Crystal | 0 | 0 | 0 | 0 | **DELETE** |
| Training Manual | 0 | 0 | 0 | 0 | **DELETE** |
| Rare Herb | 0 | 0 | 0 | 0 | **DELETE** |
| Legendary Pet Cache | 0 | 0 | 0 | 0 | **DELETE** |
| Pet XP Boost | 0 | 0 | 0 | 0 | **DELETE** |
| Master Collector | 0 | 0 | 0 | 0 | **DELETE** |
| Shield Bash | **1** | **2** | 0 | 0 | **DELETE as pet ability** — 3 official hits, all **Paladin/summon skills** (`Shield Bash: 500% > 300% Total`), never a pet |
| Fire Breath / Group Buff | 0 | 0 | 0 | 0 | **DELETE** (pet active abilities) |

### 1.2 System-shaped claims

| Term | C1 | C2 | C3 | C4 | Verdict |
|---|---|---|---|---|---|
| `pet level` / `pet XP` / `pet stat` | 0 | 0 | 0 | 0 | **DELETE** (whole leveling + stat system) |
| `evolve` / `evolution` (official) | 0 | 0 | 0 | 9 (see note) | **DELETE** |
| `rarity` | 0 | 2 | 0 | 3 | **DELETE as pet rarity** — official hits are **essence** rarity (Flow→Growth→Destruction→Rebirth→Chaos) and boss-drop rarity |
| `training` (pet/mount) | 0 | 3 | 0 | 0 | **DELETE** — official hits are **Training Dummies**, a combat target |
| `speed tier` / `sprint speed` / `mount speed` | 0 | 0 | 0 | 0 | **DELETE** (mount speed ladder) |
| collector milestones (`Pet Cache`, `Master Collector`, `Primal Unicorn`) | 0 | 0 | 0 | 0 | **DELETE** |
| `level 20/30/40/50` | 0 | 0 | 0 | 5/1/1/4 | **DELETE as evolution thresholds** — all review hits are **character/monster** levels |
| `stable` (mount stable) / `breeder` | 1/0 | 0/0 | 0/0 | 80/0 | **DELETE** — all 80 review "stable" hits are **server stability**; `stables` plural = 0 |

### 1.3 Claims the brief said were confirmed — **re-verified, all TRUE**

| Claim | C1 | C2 | C3 | C4 | Verbatim source |
|---|---|---|---|---|---|
| "Mounts & Pets" listed under **Cosmetics** | ✅ 1 (0.30.0, 2026-07-15) | 0 | 0 | — | inside `Cosmetics Store` block, beside Costume Sets / Accessories / Emotes |
| World-drop pet/mount cosmetics → **wardrobe**, **tradable** | 0 | ✅ 3 | 0 | 0 | `World drop cosmetics like pets and mounts can be added/removed from wardrobe and traded`; `All premium cosmetics are account bound, world droppable monster pets and mounts are tradable` |
| Pets **periodically pick up items** | 0 | ✅ 1 | 0 | ✅ 1 | `Pets: periodically pick up items for you`; plus live hotfix `Fix: pet pickup / pickup with V issues` (0.30.1, 2026-07-17) |
| Mounts grant **40% movement speed out of combat** | 0 | ✅ 1 | 0 | ✅ (community) | `Mount: give you 40% movespeed out of combat` |

**All four preserved.** Sources: `[Update 0.14.0] Cosmetics Update`, 2026-03-15, **SpiritVale Playtest app 3918510**. Independent editorial corroboration: 2UpSkill (read in full) and the MassivelyOP/MMO.Net headlines ("Spiritvale adds cosmetics, pets, and mounts").

**One accuracy upgrade (not a contradiction).** The 40% figure is **Playtest-era (March 2026)**. The **`[0.31.0] Dark Fortress`** patch (2026-08-25, C1) states `Movespeed Bonus now capped at +100% (increased on non-combat Mounts)` — so the out-of-combat bonus was later *increased* and capped at +100%. The page now gives both figures **with their dates** rather than presenting 40% as current. I did not substitute one unsourced number for another; the +100% number is itself sourced.

---

## 2. Task A — exactly what was deleted

File: `spiritvalewiki/content/guides/pets-mounts-guide.md` (was 147 lines / 7.7K → now 178 lines).

| Deleted | Why |
|---|---|
| §1.1 **Pet Rarity and Base Stats** table (Common→Legendary ladder, stat bonuses, ability slots, acquisition) | Whole system, 0 hits everywhere |
| §1.2 **Best Pet Types by Role** table (Tank/DPS/Healer/Support + 4 fabricated pets + "Shield Bash" misattributed) | All 4 entities 0 hits; Shield Bash is a Paladin skill |
| §2.1 **Leveling Table** | `pet level`/`pet XP` = 0 hits |
| §2.2 **Evolution Requirements** (levels 20/30/40/50 + Evolution Stones / Rare Crystal / Mythic Core) | 0 hits; review "level N" hits are character levels |
| §3.1 **Mount Speed Tiers** (Basic→Legendary + 8 fabricated mounts) | 0 hits |
| §3.2 **Mount Acquisition** table (difficulty + time investment) | 0 hits |
| §4.1 **Mount Training Tiers** (materials + times) | 0 hits |
| §4.2 **Cosmetic Customization** (Armor Sets / Saddle Bags / Dye / Mount Flourishes) | 0 hits |
| §5 **Collector's Checklist** (milestones, Primal Unicorn, Master Collector title) | 0 hits |
| §6 **Pro Tips** (pet XP scaling, tank/DPS pet swapping, mount quests, "breeders sell pet eggs") | Built entirely on the deleted systems; rewritten as sourced tips |
| §1 lead: "Pets follow your character and provide **passive stat bonuses** alongside an **active ability on a cooldown**" | 0 hits |
| Frontmatter: "how to acquire, **train**, and customize … **the fastest mounts**"; keywords `mount training`, `pet collection` | Unsourced promises removed |
| The old blanket `[Unconfirmed]` banner | Replaced by a §7 that names and rejects each removed system. A disclaimer must not launder a precise number (Profile §「免责句不可漂白精确数值」) |

**Preserved and strengthened (with newly found official detail):** cosmetics framing; the four confirmed effects; real cosmetic pet/mount names — Fire Fox, Ice Fox, Banana Duck, Green Whale, Horse & Griffin mounts, Cats/Dogs/Griffin pets (0.30.0), Angelic/Demonic Pet, Angelic Lion, Demonic Dragon (Kickstarter exclusives), and the 0.31.0 backer-designed pets/mounts (Raiga-The Stormbreaker, Bobby, Cubeman, Refubeespa, Skyland Sanctuary, Armonia, Mommy-Chan); Mystery Pet Box / Mystery Mount Box; monster-exclusive drops; boss-exclusive cosmetics; the five acquisition routes; the wardrobe/trading binding rules. Added a `sources:` frontmatter block (Official/Community/Editorial tiers) matching the convention already used in `cosmetics-wardrobe-guide.md`.

**Template-layer diffusion check (Profile §「模板层扩散检查」).** `grep -rl` for all 18 fabricated names across the whole repo: content-wise they existed **only in this one file**. Other hits are `.agent/*` reports and `keyword-results/*` research notes (not rendered). "Rare Crystal" also appears in `taivalwiki` and `themoundwiki` **as other games' materials** — unrelated, no cross-contamination. Separately, a repo-wide sweep of `spiritvalewiki` shows all other "pet" mentions refer to the **Summoner/Necromancer summon mechanic** (a real, official class system: `Summon Command/Recall/Swap/Mount: Auto unlocked`) — a different system, not diffusion of this fabrication. **Files needing fix: 1.**

---

## 3. Task B — themoundwiki `characters-classes.md`

The Mound appid **2569760** (from `themoundwiki/lib/schema.ts`).

| Term | C6 (39 ann.) | C7 store | C7 (4,067 rev.) | Verdict |
|---|---|---|---|---|
| `Expedition Rank` (case-insensitive) | **0** | **0** | **0** | **DELETE** |
| `loadout slot(s)` | **0** | **0** | **0** | **DELETE** |

**Deleted:** the single bullet `- **Expedition Rank** — Increases with successful extractions, unlocking new loadout slots`. Rendered artifact and live page both now = 0 hits.

**Not a false zero** — the constituent words *do* appear, and I checked each context:
- `expedition` is a real, common word (official 3, reviews 26) = the mission run, never a rank.
- `loadout` (official 6, reviews 63) — official hits are **promotional** ("we'll be showcasing different **loadouts**: each highlighting a particular playstyle") = weapon kits, not an unlockable slot system. `rank` = **0 hits in the entire 39-announcement archive**.
- Official meta-progression is instead: **Weapon Upgrade Anvil** (spend tokens to upgrade contract weapons), Steam **achievements**, and Occult Items unlocked by finding hidden jewel boxes. No slot-unlock system exists.
- Confirming: a review states `your weapons do not persist between missions. You are provided with a stock of gear to choose from` — which is the opposite of unlocking loadout slots.

**⚑ Adjacent findings in the same 4-line block — reported, NOT acted on (outside Task B scope).** The coordinator scoped Task B to the `Expedition Rank` line, and `qa-report.md:1451` records this item as "转 9/17 deep", so I did not unilaterally widen the edit:
- **`Perks` — Unlocked through achievements and milestones`:** `perk` = **0 hits in all 39 official announcements**. Its 25 review hits are **reverse evidence** — players *asking for* the feature: "it would be great if you could unlock different skills, or find special artifacts that give strong Perks"; "A more meaningful progression system, such as **permanent perks**, weapon upgrades or different builds, could add a lot of replayability". Per Profile §「反向证据优先」 this is gap evidence, not existence evidence.
- **`Logbook` — … completing entries grants permanent bonuses`:** `logbook` **is** real (official: "Logbook Camp", "first Logbook onboarding contract", "logbook narrations"), but **"completing entries grants permanent bonuses" is 0-hit**. Atomic-assertion rule would keep the first clause and drop the second.
- Recommendation: authorize a follow-up pass on those two bullets; the "Character Progression" list currently retains two assertions of similar evidential quality to the one just deleted.

---

## 4. Build / deploy / live-verify evidence

| Step | spiritvalewiki | themoundwiki |
|---|---|---|
| `pnpm install` + `pnpm build` | ✅ 57/57 static pages, 0 errors | ✅ 0 errors |
| Artifact-level check (`.next/server/app/guides/*.html`) | fabricated terms appear **only** inside the §7 removed-list; deleted table headers = 0 | `Expedition Rank` = 0, `loadout slot` = 0 |
| Deploy (`vercel` global 58.9.4, `--prod`) | ✅ **Ready / Production**, 18s, `dpl_rod6G5mBB3Z9Sf4jtCEyjTDaHfE8` | ✅ **Ready / Production**, 16s, `themoundwiki-8uqy0q3yz…` |
| Alias | `https://spiritvalewiki.vercel.app` | `https://themoundwiki.vercel.app` |
| Vercel IP used for `--resolve` | **64.29.17.3** (via `dig @1.1.1.1`) | **64.29.17.195** |
| Live fetch | `--resolve spiritvalewiki.vercel.app:443:64.29.17.3` → **HTTP 200, 75,815 B** | `--resolve themoundwiki.vercel.app:443:64.29.17.195` → **HTTP 200, 63,258 B** |
| Live content assertion | fabricated terms **0 hits outside the §7 removed-list** (verified by printing every occurrence's context); preserved claims live: `pick up items`=15, `40% movespeed out of combat`=4, `Mystery Pet Box`=7, `capped at +100%`=6, `account bound`=10, `tradable`=10 | `Expedition Rank`=0, `loadout slot`=0 live; progression list renders the 3 remaining bullets |
| Discoverability (product-level, per orphan-file rule) | `/sitemap.xml` HTTP 200 (9,479 B) contains `pets-mounts-guide`; `/guides` HTTP 200 (128,402 B) links it | `/sitemap.xml` HTTP 200 (8,728 B) contains `characters-classes` |

Local DNS is confirmed poisoned: `dig spiritvalewiki.vercel.app` → **157.240.10.36** (a Meta IP), versus the true **64.29.17.3** from a public resolver. All live checks therefore used `--resolve`.

**No HTTP 000 / size=0 results** — nothing on this task is recorded as 未验证 deployment-wise.

---

## 5. Claims I could NOT resolve (honest 未验证 list)

1. **Kickstarter "enhanced pets and mounts" stretch goal.** Search summaries of the March 2026 / July 2026 MassivelyOP coverage indicate a stretch goal for enhanced pets and mounts that was **not** reached. That would neatly explain the absence of any pet progression system. **MassivelyOP returned HTTP 403, Kickstarter HTTP 403, MMO.Net HTTP 404** from this machine. I therefore recorded this on the page as **unverified** and did **not** assert a missed stretch goal. This is 未验证, **not** zero-hit — it was never counted into any deletion decision.
2. **2UpSkill** was reachable and read in full; it confirms the monetization picture but returns **"NO PET OR MOUNT MENTIONS"** — so it neither supports nor refutes the pet systems. It is not a zero-hit corpus member for pet terms.
3. **Reddit r/SpiritVale and steamcommunity.com** remain unreachable (continuing the 9/3 and 9/16 QA records). Community evidence in this report therefore rests on the Steam review corpus (C4/C7), which is complete.
4. **`Rare Crystal` cross-site hits** in `taivalwiki` / `themoundwiki` are other games' materials. They are not SpiritVale evidence; I verified SpiritVale's own store page and full review corpus are 0, satisfying the Profile's "items need store page + reviews cleared" requirement for single-item terms.

---

## 6. Compliance with Profile 06 §「⚠️ 零命中的误判防线」 (added mid-task — re-read and applied)

| Check | How this task satisfies it |
|---|---|
| **1. Counts reproducible (surface + query + count triple)** | §0 lists all 7 surfaces with exact endpoints and measured sizes; §1/§3 give per-term counts **per surface**, never a bare `X = 0`. |
| **2. Evidence strength graded by entity type** | Named pets/mounts (20 terms) and whole systems (8) = **strong** categories → official absence suffices. Single materials (`Evolution Stones`, `Mythic Core`, `Rare Crystal`, `Training Manual`, `Rare Herb`, `Legendary Pet Cache`) are the **weak** category → I additionally cleared **store page (C3) AND the full review corpus (C4)**, both 0, before deleting. No material was deleted on announcement-absence alone. |
| **3. Contradicting on-site lists ≠ proof of fabrication** | No deletion here rests on two lists disagreeing. Every deletion rests on corpus zero-hit. Where the page contradicted *itself* (Task B: "Expedition Rank" vs "characters have no traditional level-ups"), that is recorded as an **inconsistency**, and the deletion is justified by the 0/0/0 corpus result — not by the self-contradiction. |
| **Reverse-evidence rule** | Applied to Task B `perk`: the only hits are players *requesting* the feature → gap evidence. Same rule checked for each pet term; no pet term had "please add this" hits that could be mistaken for support. |
| **Disclaimer cannot launder numbers** | The old blanket `[Unconfirmed]` banner was **removed**; the fabricated numbers were deleted outright rather than kept under a label. |
| **Template-layer diffusion** | Repo-wide `grep -rl` for all fabricated names: 1 content file. Site-wide sweep for the same failure mode: no diffusion. |

---

## 7. Coordinator corrections

**None required — the brief was correct on every disputed point.** The only correction is to **my own** first pass: I initially searched only appid 3767850's news feed and briefly appeared to refute the "wardrobe / tradable / 40%" claims. The cause was a **corpus gap**: those notes live under the separate **SpiritVale Playtest app (3918510)**. After adding that surface, every claim in the brief was confirmed verbatim. The one **factual refinement** (not a contradiction): the 40% out-of-combat figure is **Playtest-era March 2026**; the live-app 0.31.0 patch (2026-08-25) later **increased** it and caps movespeed at **+100%**. The page now presents both with dates.

## 8. Files changed (working tree — not committed; coordinator commits)

- `spiritvalewiki/content/guides/pets-mounts-guide.md` — rewritten (fabricated systems deleted, official claims kept and dated, sources block added)
- `themoundwiki/content/guides/characters-classes.md` — one bullet deleted (line ~109)
- `.agent/fact-sweep-pets-mounts-9-16.md` — this report

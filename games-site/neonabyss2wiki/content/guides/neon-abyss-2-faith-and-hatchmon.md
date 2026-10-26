---
title: "Neon Abyss 2 Faith System and Hatchmon, Explained"
description: "Faith has three official sinks: items, Hatchmon and chance. How the 1.0 Artisanism rework changed badges, how Hatchmon evolve, and the co-op bugs now fixed."
category: "Mechanics"
version: "1.0"
updated: "2026-10-26"
keywords: ["neon abyss 2 faith system", "neon abyss 2 faith", "neon abyss 2 hatchmon", "neon abyss 2 artisanism", "neon abyss 2 badges", "neon abyss 2 pet temple"]
related:
  - neon-abyss-2-beginner-guide
  - neon-abyss-2-agents
  - neon-abyss-2-weapon-tier-list
  - neon-abyss-2-boss-list
  - neon-abyss-2-wonder-room
sources:
  - tier: "Official"
    text: "Steam store listing for appid 2235200 (fetched 2026-10-26) — Faith System description: spend it in a shop of powerful items, recruit more Hatchmon, or risk it in a game of chance; Hatchmon 'hatch, collect, evolve'"
  - tier: "Official"
    text: "Steam announcement 'Neon Abyss 2 - Available Now in 1.0' (2026-10-08) — Artisanism Faith reworked to use badges for a new Affix after crafting; Lovely Legion egg-to-shield visuals; evolution unlock order refined"
  - tier: "Official"
    text: "Steam announcement 'Weekly Update Roundup | October 10–16' (2026-10-19) — Glass Dice badge generation now uses the current weapon's affix pool; simultaneous Faith machine fix; duplicate Hatchmon count fix"
  - tier: "Official"
    text: "Steam announcement 'Patch Notes 6.26' (2026-06-26) — multiplayer Faith machine overwriting the host's Faith; Faith not cleared after leaving the Faith Room; egg hatching trigger optimisation"
  - tier: "Editorial"
    text: "The run-order advice and the 'spend, do not bank' recommendation are our synthesis of the official changes"
---

Faith is Neon Abyss 2's run currency, and it has three officially documented uses: buy items in a Faith shop, recruit more Hatchmon, or gamble it in a game of chance. Since 1.0 the Artisanism Faith also turns badges into Affixes. This page covers all four paths and the bugs that were fixed.

## 1. What Faith Actually Is

The store page describes the Faith System as something "designed to turn the tides when the Abyss gets unreasonable," then asks how you will wield it. Three answers are named, and they define the whole system:

| Sink | Official wording | What it buys you |
|---|---|---|
| **Faith shop** | "Spend it in a shop stocked with powerful items" | Direct item purchases — the most predictable use |
| **Hatchmon recruitment** | "Recruit more Hatchmon to fight by your side" | A permanent ally for the run, on top of eggs you hatch yourself |
| **Game of chance** | "Risk it all in a game of chance" | Variance — the only sink that can return more than it takes |

That is the entire official description. How much Faith each sink costs, what the odds are in the chance option, and whether the shop's stock is seeded per floor are all unpublished. `[Unconfirmed]` covers all three, and this page does not fill them in.

One structural detail is inferable from patch notes rather than stated: the 6.26 notes fixed "Faith not being properly cleared after leaving the Faith Room." If Faith were meant to bank between rooms, that fix would not describe clearing as correct behaviour. Treat Faith as a per-room resource and spend it before you leave. The same notes also fixed the multiplayer Faith machine "incorrectly overwriting the host's Faith," which is the same rule in co-op form: Faith belongs to the player, and the room does not hand it out twice.

## 2. Artisanism: The 1.0 Faith Rework

The clearest mechanical change to Faith in 2026 was the Artisanism rework. Veewo's 1.0 note is short and worth quoting exactly:

> "The Artisanism Faith has been reworked, now using badges to provide a new Affix after crafting. This has been slotted in to open up far more potential and build possibilities, regardless of which weapon you take into the Abyss"

Three things follow from that sentence:

- **Artisanism is now craft-linked.** The reward arrives after crafting, not on entering a room, so the Faith you spend has to be spent where crafting happens.
- **The output is an Affix**, the same modifier family introduced in the March Weapon Reforge update with its own rarity tiers (Common, Rare, Epic, Legendary).
- **The point is weapon independence.** The rework exists so a build does not need a specific weapon to benefit — you are buying a modifier, not a gun.

### Badges and the Glass Dice fix

Badges are the delivery mechanism, and the October roundup fixed a real problem with them: badge generation with Glass Dice. New badges now "use the affix pool for the player's current weapon, falling back to the general pool if no eligible options are available."

That fix is worth understanding even if you never touch Glass Dice, because it tells you how badges are rolled. A badge is drawn from a pool keyed to your equipped weapon, and the general pool is a fallback. So if you are hunting for a specific effect from Artisanism, the weapon in your hands at the moment the badge is generated matters — swap to the weapon family you want the affix from before you craft.

A related 6.26 fix covers the failure mode on the other side: "gold affix attributes could reset to zero when the Artisan Faith Temple is downgraded." If an Artisanism reward ever looked like it vanished, that was the bug.

## 3. Hatchmon: Hatch, Collect, Evolve

Hatchmon are the companions, and the store page describes the loop plainly: "Hatch and collect these cute creatures, then evolve them into powerful and unique allies to spice up your runs."

The pieces the notes confirm:

| Fact | Source |
|---|---|
| Eggs hatch into Hatchmon you collect for the run | Store page; 6.26 "optimized the trigger mechanism for Egg hatching" |
| Hatchmon evolve into stronger allies | Store page; 1.0 refined "the order of evolution unlocks" for early game |
| Faith can recruit additional Hatchmon | Store page Faith System description |
| They can convert into shields via the Lovely Legion set | 1.0 improved "the visuals of Hatchmon eggs turning into shields" |
| They gate at least one boss challenge | Dark Aphrodite: defeat Hermes to reach the next floor "while having at least 10 Hatchmons" |
| The stats screen once double-counted them | October roundup fixed "duplicate Hatchmon counts" |

Two practical consequences. First, Hatchmon are not decoration: the Dark Aphrodite challenge turns a roster of ten into a routing requirement, so a run chasing that challenge should treat Faith spent on recruitment as progress, not as a luxury. Second, because 1.0 reordered evolution unlocks, early-run guides written before October 8 are describing a different progression curve — including anything that quotes a specific evolution order.

## 4. Faith Rooms, Temples, and Co-op Edge Cases

Faith content is physical: rooms with machines, Temples of Faith, and teleport pads. Most of the 2026 patch notes about Faith are about those spaces behaving badly, and knowing them saves you from filing a bug that is already fixed.

| Symptom | Status |
|---|---|
| Two players using a Faith machine at once caused interaction problems | Fixed in the October roundup |
| A client's Faith machine action overwrote the host's Faith | Fixed in 6.26 |
| Faith not cleared after leaving the Faith Room | Fixed in 6.26 |
| Teleport return point overlapping the gathering area in certain Temples of Faith | Fixed in the October roundup |
| Trapped in a Faith Room in Storm Breach with no way back to the main route | Fixed in the 1.0 notes |

If you are on the current default branch, all of these are behind you. If a teammate is on the Beta branch, you cannot play together at all — branch mismatch blocks co-op before any room logic runs.

## 5. Spending Order for a Normal Run

No official priority list exists, so here is the reasoning we use, clearly labelled as advice rather than data:

1. **Shop first if the item solves a problem you already have.** A shop purchase is deterministic; the chance option is not.
2. **Recruit Hatchmon when a challenge demands a count.** Ten Hatchmon for the Dark Aphrodite line is the one hard number the game states.
3. **Craft when you are holding the weapon family you want the badge from.** The October fix made badges weapon-pool aware, so handing a random weapon in is handing the roll in.
4. **Gamble the remainder.** Faith that resets on room exit is only worth what the next room can use.

The mistake the system punishes is banking. Every fixed bug around Faith clearing points the same direction: Faith is meant to be spent where you find it.

## 6. What Is Unconfirmed

- **Faith sources.** The notes describe sinks, machines and rooms, but not the exact drop table or per-kill gain. `[Unconfirmed]`.
- **Chance odds.** No official post states the payout structure of the game of chance. `[Unconfirmed]`.
- **Hatchmon count cap.** Whether a run can hold every Hatchmon or a fixed number is not published. `[Unconfirmed]`.
- **Full evolution tree.** 1.0 says the unlock order was refined; it does not publish the tree. `[Unconfirmed]`.
- **Whether Faith carries between floors on the same run.** The room-clearing fixes imply it does not. That is an inference, not a quote.

## 7. FAQ

**How do you get Faith in Neon Abyss 2?**
Faith is a run resource earned inside the Abyss. The official material describes what you spend it on but not the drop structure of every source, so we do not state a rate. `[Unconfirmed]`.

**What is the best use of Faith?**
Deterministic value first — shop items and Hatchmon recruitment — with the gamble last. That is our advice, not a published ranking.

**Does Faith carry over between runs?**
No. Faith is per-run; Hatchmon recruitment is also per-run. Permanent progress sits in unlocks and Agent profiles, not in Faith.

**What is Artisanism?**
A Faith path reworked in 1.0 that uses badges to grant a new weapon Affix after crafting, aimed at opening build options regardless of which weapon you carry.

**Why did my badge give a bad affix?**
Before the October patch, badge generation could pull from the wrong pool. It now uses the current weapon's affix pool first, falling back to the general pool only if no eligible option exists.

**How many Hatchmon do I need for Dark Aphrodite?**
At least ten in hand when you defeat Hermes and take the next floor. That is the challenge condition Veewo published.

## 8. Next

- Roster, profiles and the 3-Agent achievement: [Agents](/guides/neon-abyss-2-agents)
- Which sets and weapons turn Faith purchases into damage: [weapon tier list](/guides/neon-abyss-2-weapon-tier-list)
- Wonder Blocks, Wonder Jars and rerolls: [Wonder Blocks](/guides/neon-abyss-2-wonder-room)
- Boss unlock lines: [boss list](/guides/neon-abyss-2-boss-list)

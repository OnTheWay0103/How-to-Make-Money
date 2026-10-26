---
title: "The Mound Daily Challenges — Is There a Daily System?"
description: "The Mound: Omen of Cthulhu has no daily challenges, no streak bonuses, no leaderboards and no Personal Rank. What the contract board actually offers, verified against all 40 official announcements."
category: "Guides"
version: "1.0"
updated: "2026-09-17"
keywords: ["The Mound daily challenges", "The Mound daily contracts", "The Mound contract board", "The Mound contract tiers", "The Mound progression loop"]
related:
  - contracts-guide
  - extraction-guide
  - crafting-recipes
  - beginner-guide
---

# Daily Challenges — Is There a Daily System?

> **Rewritten September 17, 2026.** This page used to describe a live-service daily loop: a board that
> refreshes at 00:00 UTC, five Easy / three Medium / one Hard contract per day, Contract Streaks,
> weekly rotations, a monthly leaderboard, seasonal currency and a Personal Rank. **None of it exists.**
> See [Why this page was rewritten](#why-this-page-was-rewritten).

**No.** The Mound: Omen of Cthulhu has no daily challenges, no weekly rotation, no streak bonus, no
leaderboard, no seasonal currency and no Personal Rank. `daily challenge` returns **0 hits** across all
40 official Steam announcements and **0** across the 576-review corpus, and no third-party guide
describes such a system either.

What the game has is a **contract board**, and contracts are the whole of the repeatable content. That is
not a criticism — it is the design. This game is a session-based extraction game, not a live-service
game, and nothing about it resets on a timer.

---

## What the contract board actually is

You take a contract from the Captain on the Galleon before each expedition. The developer's framing of
what a contract gives you is the best summary of the whole loop:

> *"The Captain provides, but he is not generous. Each contract comes with a selection of equipment for
> your party — a handful of weapons, a few precious supplies, a single lamp against the oppressive dark.
> These are not individual loadouts; they are a shared arsenal."*
> — *The Captain's bargain: Choosing your contract*

There is no lockout, no daily allowance, and no reason you cannot run ten contracts in an evening.

### Contract tiers

Tiers are the game's difficulty axis. **All of the following is player-reported** — the official
announcements mention *"contract tiers"* only once, and only in the context of payouts (patch 1.02:
*"Slight increase for tokens given for contract tiers"*):

| Tier (player-reported) | What it looks like |
|------------------------|--------------------|
| **Basic** | Short objectives, lighter spawn pressure |
| **Legendary** | Richer treasure objectives, harder pressure — one player notes a Legendary treasure-mission can be easier than a Basic portal-mission, i.e. the ladder is not clean |
| **Portal** | Portal contracts; players ask for these to matter more |
| **Final mission** | The story's closing contract |

`[Unconfirmed — the tiers above come from player reviews, not from the developer. No official source
publishes a tier list, a per-tier limit, or a per-tier reward multiplier beyond the patch-1.02 note.]`

### Contract objectives

Players describe the objective set as narrow, and they are right:

> *"The mission variety is basically nonexistent, it's retrieve a logbook, reclaim a fort, or retrieve a
> steel canister, over and over."*
> — Steam review

> *"Having only 'Find the Treasures,' 'Find the Fort,' and 'Close the Portal' as mission types is very
> limited. Later on, there are 'Find a specific Item' missions, plus the final mission."*
> — Steam review

The official record adds texture rather than new types: patch 1.0 notes that *"Contracts now display
more mission information and a greater variety of treasure requirements"* and added *"better diversity
of treasure shrines and additional treasure pickups in missions."*

---

## Rewards: what a contract pays

| Reward | Detail | Source |
|--------|--------|--------|
| **Tokens** | The permanent currency; scales with contract tier | Patch 1.02; player reports |
| **Experience** | The official launch post names it: *"Experience to sharpen your skills"* | Official launch announcement |
| **Bonus for overshooting** | One player reports extra money and XP for exceeding the treasure target, capping around 2x | Player report |
| **The haul itself** | Only converts if you extract. Die on the mainland and the run paid nothing | Player-reported, consistent |

There is no streak bonus, no "complete all five Easy contracts for a cache" reward, and no weekly or
monthly meta-reward. The board does not refresh on a schedule — it reflects the contracts available in
your current progression.

---

## The real efficiency question

Since there is no daily reset to optimise around, the only question that matters is **which contract to
take next**:

1. **Take the richest tier you can actually finish.** Token payout scales with tier.
2. **Match the contract to the weather.** Rain silences gunpowder weapons outright, so a Matchlock
   contract in a downpour is a wasted slot.
3. **Extract on a schedule, not a whim.** Patch 1.01 removed the mandatory end-of-mission hard cap —
   *"players can now remain on the mainland as long as they can survive"* — which makes staying too long
   *your* decision, with the forest as the clock.
4. **Logbook contracts first if you want the map to open up.** The store page is explicit:
   *"Discover abandoned forts during your expedition and recover their logbooks to unlock them as new
   starting point for future expeditions."*
5. **Treat every contract as a fresh allocation.** Nothing you carried in survives the run —
   *"the flintlock that kept you alive on that same run just evaporates."*

---

## Why this page was rewritten

The old page described a live-service progression layer that does not exist:

| Old claim | Evidence |
|-----------|----------|
| Daily challenges / daily contracts refreshing at 00:00 UTC | `daily challenge` = **0 hits** in all 40 official announcements and **0** across 576 reviews |
| 5 Easy / 3 Medium / 1 Hard per day, "x1.0 / x1.5 / x2.5" risk modifiers | No official source publishes per-tier daily limits or multipliers |
| Contract Streaks, weekly rotation, "Silver Ore Week", monthly leaderboard, seasonal currency | None appear in any corpus. `seasonal` and `leaderboard` = 0 hits in both |
| A **Personal Rank** that contracts progress | `rank` = **0 hits** in all 40 announcements. (Third-party guides do describe a separate XP **Rank Rewards** ladder — see the note below.) |
| Ten named objective types (Salvage Run, Elimination, Boss Hunt, Ritual Disruption, Storm Survival, Full Clear, No-Damage Run…) | Matches the game's actual objective set almost not at all. The real set is treasure retrieval, logbook retrieval, fort reclamation and portal contracts |
| "Boss Hunt — defeat a specific boss" | `boss` = **0 hits** in all 40 announcements, and players complain there are none |
| Crafting consumables and ammunition from contract materials | There is no crafting system — see the [Crafting Guide](/guides/crafting-recipes) |
| Buying blueprints from a Quartermaster | No Quartermaster and no blueprint system appears anywhere in the record |
| Storm Essence, storm gear, Artifact Fragment, Scrap Metal as named currencies/materials | All **0 hits** in both corpora |

### Method

- **Official corpus:** Steam `ISteamNews` for app ID `2569760`, all **40** items, full text —
  `daily challenge` 0, `streak` 0, `leaderboard` 0, `seasonal` 0, `rank` 0.
- **App-ID check:** `2569760` plus four add-on apps (`4630450`, `4630440`, `4630460`, `4925780`), each
  queried for its own news feed and returning **0 items** — no second announcement stream exists.
- **Store page:** `appdetails` for `2569760`, English.
- **Community corpus:** Steam `appreviews` with `json=1`; 576 unique reviews retained with IDs.
- **Web cross-check:** an independent search pass across editorial guides found no daily-challenge,
  streak, or leaderboard system.

### One honest caveat — the Rank Rewards ladder

This page previously claimed a **Personal Rank** that contracts progress. That, as stated, is wrong
(`rank` = **0 hits** in the official corpus). But third-party guides do describe an **XP Rank Rewards**
ladder — Rank 2 Extra Knife, Rank 4 Extra Inventory Slot, Rank 10 improved ally revival health, Rank
14/26 Weapon Grip Bonus, Rank 18 Extra Inventory Slot, Rank 30 Ring of Isolation Resistance — and
in-game trophies named *Proven in the Field* (Rank 10), *Scarred but Standing* (Rank 20) and *Tempered by
Madness* (Rank 30).

`[Unconfirmed — reported by third-party guides only. Those reward names return 0 hits in the official
announcement corpus and 0 in the 576-review corpus, so this wiki does not present them as fact. It is
recorded here so the page is not silent about a system that may exist.]`

What is *not* in doubt: a levelling path exists, and the permanent rewards along it are scarce — one
player summarises it as *"no permanent unlocks aside from skins and a couple of inventory slots."*

---

## Related Guides

- [Contracts Guide](/guides/contracts-guide) — the contract types and how to choose one
- [Extraction Guide](/guides/extraction-guide) — the walk out, and why it decides the payout
- [Crafting Guide](/guides/crafting-recipes) — why there is no crafting system, and what replaces it
- [Progression Guide](/guides/progression-system-guide) — what actually carries over between runs
- [Beginner Guide](/guides/beginner-guide) — the core loop from the first expedition

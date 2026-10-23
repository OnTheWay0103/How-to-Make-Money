---
title: "How to Save a Run in MineGeon: Renegades — Rest Between Biomes and Room Checkpoints Explained"
description: "MineGeon Patch 3 (August 28, 2026) split one feature into two: voluntary Rest after a biome boss, and automatic room checkpoints for interrupted runs. This guide explains what each one banks, what carries over, how RESUME works, and the rules that can still cost you a run."
category: "Guides"
version: "1.0"
updated: "2026-10-23"
keywords: ["minegeon save run", "minegeon rest between biomes", "minegeon checkpoint", "minegeon resume run", "minegeon renegades save", "minegeon how to save", "minegeon run ending", "minegeon patch 3"]
related:
  - "walkthrough-guide"
  - "extraction-guide"
  - "progression-guide"
  - "boss-guide"
  - "coop-multiplayer-guide"
sources:
  - tier: "Official"
    title: "Patch 3 update: Rest between biomes, resume any run where you left it, 40+ Fixes"
    url: "https://store.steampowered.com/news/app/3227240/view/1842212951304526"
    date: "2026-08-28"
    text: "Kickstone Studio's Patch 3 announcement is the primary source for both systems. It documents the rest prompt after a biome boss, the normal-finish banking of minerals and experience, the next descent starting at the next biome's level selector with gear equipped and an empty backpack, the full carry-over list (gear, gadgets, weapons, ultimate, food, coins, experience, spores, reroll charges, recruits and pets), co-op support, the three run endings (Victory green, Defeat red, Rest blue), the removed 50% auto-conversion of leftover underground coins, the drop-pod summary card, room checkpoints saving position, entry door, loadout, food, keys, difficulty, resources, visited rooms, burned cards and experience, the PLAY-to-RESUME menu change, the health-only mid-room save, and the rule that a paused run must be resumed or cleared by death or surrender."
  - tier: "Official"
    title: "Week One Update: Thank You for a Week of Feedback"
    url: "https://store.steampowered.com/news/app/3227240/view/1840310314346823"
    date: "2026-08-08"
    text: "The earlier Patch 2 note establishes the pre-Patch-3 run structure and the changes that sit around it: the customizable crosshair, ore variety across biomes, difficulty flames, and reloading while jumping. It is used here only as context for what Patch 3 later changed."
  - tier: "Community"
    title: "MineGeon: Renegades Review — PC (ROG Xbox Ally X) (Duuro)"
    url: "https://duuro.net/blog/minegeon-renegades-review-pc-rog-xbox-ally-x"
    date: "2026-07 (accessed 2026-10-23)"
    text: "An independent review confirming the run structure Patch 3 modifies: play proceeds through biome nodes toward a boss, upgrades last during a run, and mined minerals provide permanent progression between runs. It also confirms online co-op for up to three players, which is the mode in which rest and checkpoint behaviour matters most."
  - tier: "Community"
    title: "MineGeon: Renegades — test et avis (InsertCoins)"
    url: "https://insertcoins.press/articles/minegeon-renegades-test"
    date: "2026-07 (accessed 2026-10-23)"
    text: "A second independent review describing each descent as a race against the mine's collapse, with solo or two-friend co-op. It corroborates that runs were designed as committed sessions before Patch 3 added voluntary banking and automatic checkpoints."
  - tier: "Editorial"
    title: "Session planning and retrofit note"
    url: "https://minegeonwiki.vercel.app/guides/minegeon-save-rest-resume-guide"
    date: "2026-10-23"
    text: "The session-planning advice, the recommended rest cadence, the explanation of how food timing interacts with resting, and the note that older site pages still describe runs as unsavable are this guide's editorial assessment. The article also flags the co-op edge cases the patch notes do not specify."
---

# How to Save a Run in MineGeon: Renegades — Rest Between Biomes and Room Checkpoints Explained

MineGeon: Renegades used to treat a descent as one unbroken sitting. **Patch 3 on August 28, 2026** ended that, but it did so with **two separate features**, and most players conflate them:

> **Source note (October 24, 2026):** the Patch 3 announcement could not be reopened during the October 23 QA pass, and external searches returned no independent coverage of it. The systems below are quoted from Kickstone Studio's Patch 3 post; verify the exact wording in-game or on the Steam news page before relying on edge cases.

- **Rest** is voluntary. You choose it after killing a biome boss, and it ends the run cleanly.
- **Room checkpoints** are automatic. They exist so an interrupted run can be resumed where it stopped. [Official]

They solve different problems. Rest is a session-planning tool; checkpoints are a crash-and-quit safety net. This guide explains both, what each one banks, and the rules that can still cost you progress.

## Rest vs. checkpoint at a glance

| Question | Rest between biomes | Room checkpoint |
|---|---|---|
| When does it happen? | After you kill a biome boss, when the prompt appears | Automatically, every time you enter a room |
| Who triggers it? | You | The game |
| What does it do? | Ends the run as a normal finish, banking minerals and experience | Saves the run so it can be resumed |
| Where do you continue? | At the next biome's level selector, with gear equipped and an empty backpack | Back in the room where the run was interrupted |
| Does it work in co-op? | Yes, per the patch notes | Yes, per the patch notes |

## How Rest works

Killing a biome boss no longer teleports you straight into the next biome. A prompt now asks whether you want to rest. [Official]

If you accept:

1. **The run ends the way a normal finish does.** You cash in your minerals and experience and return to the ship.
2. **Your next descent starts at the level selector of the next biome**, not at the beginning of the game.
3. **Your gear is equipped and your backpack is empty.** The haul has been banked, so there is nothing carried in the bag.
4. **Everything else carries over:** gear, gadgets, weapons, ultimate, food, coins, experience, spores, reroll charges, recruits and pets. [Official]

That carry-over list is the important part. Resting is not a soft reset. You keep the build you assembled, the companions you recruited, and the currency you earned. You are only choosing to stop before the next biome.

There are now **three run endings**: **Victory (green)**, **Defeat (red)** and **Rest (blue)**. A rest is a legitimate completion state, not a failure. [Official]

### The coin decision

Patch 3 also removed the old automatic **50% conversion** of leftover underground coins. When you rest, you choose: **exchange them now, or take them back down with you.** [Official]

That is a real decision rather than a formality. Exchanging converts the coins on the spot; carrying them down keeps the full value but puts it back at risk in the next biome. If you are resting because the session is over, exchange. If you are resting only to bank a boss reward and plan to continue later, carrying may be better — but only if you are confident about the next run. [Editorial]

The drop pod also shows a **summary card** of the run you are about to resume, with your stats, gadgets, weapons and ultimate. If a boss drops a character key, the cutscene plays first and the rest prompt waits its turn. [Official]

## How room checkpoints work

The game now saves your run **every time you enter a room**. The saved snapshot includes:

- position and entry door
- full loadout
- food and keys
- difficulty
- resources
- rooms already visited
- burned cards
- experience [Official]

If a run is cut short, the main menu button changes from **PLAY** to **RESUME** and drops you back into your room without going through the base. [Official]

### The health-only rule

**Health is the only thing saved mid-room.** Everything else is the snapshot from when you walked in. [Official]

That means a checkpoint is not a rewind. If you enter a room at full health, take damage, and then quit, you resume with the health you had when you left — but the room's resources and your loadout are restored to the entry state. You cannot use a checkpoint to undo a bad resource decision, but you also cannot be punished for quitting after a hit.

### There is no abandon button

A paused run is always resumed. There is no "abandon run" option, and to clear it you have to **die or surrender**. Leaving on purpose is now a legal retry instead of a lost run. [Official]

That distinction matters. Quitting is no longer a way to erase a run from the record; it is a way to pause it. If you want the run gone, the game wants you to resolve it in-game.

## What this changes in practice

### Plan sessions around biome bosses, not rooms

The natural stopping point is now **after a biome boss**, because that is where Rest is offered. A run that stops mid-biome relies on the checkpoint system, which is a safety net rather than a planned exit. If you know you have 40 minutes, aim to reach a boss and rest there. [Editorial]

### Resting is not the same as extracting

Extraction is the risk decision inside a biome: leave with what you have or push deeper. Rest is the decision **between** biomes: bank the completed biome and start the next one fresh. You can rest with a full backpack because the backpack is emptied into the bank as part of the rest. [Official]

### Food timing changed

Food is now **redeemed when the run ends instead of at takeoff**, so swapping food between rests is no longer free. Food buffs also no longer apply while you are in the base. [Official]

Practically, that means you should not eat a buff before a rest expecting it to carry into the next biome. The run ends, the food is consumed, and the next descent begins without the buff. Save food for the biome you actually need it in. [Editorial]

### Co-op works, with one open question

The patch notes state that rest works in co-op. What they do not specify is what happens when one player wants to rest and another wants to continue. Treat that as **[Unconfirmed]** and agree on the call before the boss dies. The same applies to checkpoint resumption in a party: the notes confirm the feature works in co-op but do not describe host migration or partial-party resume. [Official]

## Other Patch 3 changes worth knowing

Patch 3 was not only about saving. Several changes affect how a run plays:

- **The end-of-room magnet now pulls in everything** — underground and galactic coins, keys, rubies, spores, ammo and food ingredients, not just experience orbs. In solo runs the magnet is global and also picks up minerals and hearts. [Official]
- **Allies split their work.** Recruits and pets claim targets instead of piling onto the same rock or enemy, with at most two attacking the same target while others are free. A hired recruit now shoots and helps fight. [Official]
- **Achievement targets were lowered.** Examples include DIY Maniac from 100 to 20 starters, Glitched Through Reality from 1,000 to 300 teleports, Grind Paid Off from 100k to 10k galactic, Master Chef from 100 to 50 meals, and Rich and Reckless from 5,000 to 1,000 converted coins. [Official]
- **The Collection Log is completable again**, and cards that cannot be obtained no longer take up a slot or count toward completion. [Official]
- **A UI Scale slider** was added, and biome skip doors now have description panels. [Official]
- **Mineral Bomb and Mineral Barrage** were reworked, two new card stat tags (Ore Damage and Enemy Damage) were added, and the hit shield is now a per-room resource that no longer refills mid-room. [Official]

## A correction to older guides

Older MineGeon guides — including pages on this site written before Patch 3 — describe a run as unsavable and say there is no mid-run save. That was true at launch, but it is no longer true after August 28, 2026. **Room checkpoints save the run on every room entry**, and **Rest lets you bank a completed biome on purpose**. The [Walkthrough](/guides/walkthrough-guide) has been updated to reflect this. [Official]

## FAQ

**Can I save in the middle of a biome?**
Yes, automatically. The game checkpoints every time you enter a room. You resume from that room through the RESUME button. [Official]

**Does resting end my run?**
Yes, but as a completed run, not a failure. It banks your minerals and experience and returns you to the ship. [Official]

**Do I keep my gear after resting?**
Yes. Gear, gadgets, weapons, ultimate, food, coins, experience, spores, reroll charges, recruits and pets all carry over. Your backpack is empty because the haul was banked. [Official]

**Can I abandon a paused run?**
No. A paused run is always resumed. To clear it, you have to die or surrender. [Official]

**Does Rest work in co-op?**
Yes, according to the patch notes. The specific behaviour when players disagree is not documented. [Official]

## Related Guides

- [Walkthrough](/guides/walkthrough-guide) — the full run structure
- [Extraction Guide](/guides/extraction-guide) — when to leave a biome
- [Progression Guide](/guides/progression-guide) — what persists between runs
- [Boss Guide](/guides/boss-guide) — biome boss preparation
- [Co-op & Multiplayer Guide](/guides/coop-multiplayer-guide) — playing with friends

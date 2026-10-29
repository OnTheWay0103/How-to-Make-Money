---
title: "Sephiria Artifact Evolution Guide: All Five Triggers"
description: "Sephiria artifact evolution guide: the exact trigger for all five transforming artifacts, the weapon that can perform each one, and why your item never changes."
category: "Artifacts"
version: "1.0.33"
updated: "2026-10-29"
date: "2026-10-29"
keywords:
  - "sephiria artifact evolution"
  - "sephiria evolving artifacts"
  - "sephiria rusty tsuba"
  - "sephiria faded shield crest"
  - "sephiria stiff crank"
  - "sephiria dull resonance stone"
  - "sephiria artifact not evolving"
  - "sephiria crest of the iron wall"
related:
  - "artifacts-guide"
  - "patch-1-0-31-build-changes-guide"
  - "sword-shield-build-guide"
  - "katana-build-guide"
  - "crossbow-build-guide"
  - "tablets-guide"
  - "mystic-pot-guide"
  - "stats-explained-guide"
sources:
  - tier: "Official"
    title: "Sephiria 1.0.31 Update (Steam announcement, app 2436940)"
    url: "https://store.steampowered.com/news/app/2436940/view/1843481262692576"
    date: "2026-09-10"
    text: "Read verbatim from the Steam News API. The patch introduced five artifacts that transform after a named condition: 'Faded Shield Crest … Weapon Damage +5/10/15 … Transforms into Crest of the Iron Wall after 50 successful uses of Perfect guard. Crest of the Iron Wall: Weapon Damage +15/20/25, reduces Block cost by 20/30/40%'; 'Rusty Tsuba … Weapon Damage +2/4/6 … Transforms into Master's Tsuba after blocking enemy attacks 30 times with Unsheath or Sheath'; 'Dull Resonance Stone … Highest Elemental Damage +2/4/6/8 … Transforms into Resonance Stone when Move Speed reaches 140% or higher. Resonance Stone: Highest Elemental Damage +8/10/12/14'; 'Stiff Crank … Crossbow Reload Speed +5/10 … Transforms into Marksman's Crank after completing Reload 50 times. Marksman's Crank: Crossbow Reload Speed +10/20, increases Normal Attack Damage by 30/40% and Special Attack Damage by 30/40% for 10 seconds after completing Reload'; 'Trainee Duelist's Epaulette … Duelist's Epaulette: Fires a sword spirit upon a successful Special Attack: Parry, a Special Attack: Fury hit, or a hit with the final strike of the Normal Attack combo (350%)'. The same announcement also fixed 'an issue where the pre-evolution or post-evolution forms of evolving Artifacts would appear and then disappear in the Mystic Pot', added the Comprehensive Training Grounds, and introduced the Cerulean Cloud Sword 'Arges', which 'Replaces Sheath with Special Attack: Cloud Slash'."
  - tier: "Official"
    title: "Sephiria 1.0.33 Update (Steam announcement, app 2436940)"
    url: "https://store.steampowered.com/news/app/2436940/view/1843481262695189"
    date: "2026-09-11"
    text: "Read verbatim from the Steam News API. Master's Tsuba effect changed: before 'Weapon Damage +5/10/15, Increases the invincibility duration of Sheath and Unsheath by 0.05/0.15/0.25 seconds'; after 'Weapon Damage +5/10/15, Increases the invincibility duration of Sheath and Unsheath by 40/70/120%'. The announcement opens with a Known Issues note that enemies have been reported moving outside of walls, suspected to relate to the new collision system added in 1.0.31."
  - tier: "Official"
    title: "Sephiria 1.0 Update (Steam announcement, app 2436940)"
    url: "https://store.steampowered.com/news/app/2436940/view/1839676055887303"
    date: "2026-07-31"
    text: "The Side Bag rule that governs whether a held artifact can act at all: 'A Side Bag feature for storing spare items has been added', 'Items in the Side Bag are inactive'."
  - tier: "Community"
    title: "Sephiria Artifact Evolutions: Triggers & Upgrades (sephiriawiki.com)"
    url: "https://sephiriawiki.com/guides/artifact-evolutions"
    date: "2026-10-29 (accessed)"
    text: "Independent wiki page, fetched in full. States the working rule that the evolving artifact must sit in the active inventory rather than the Side Bag, that 'normal blocks are not a substitute for Perfect Guards', that you should check 'whether your upgraded Blade still has a qualifying action' for Rusty Tsuba, that Move Speed should be read from the character screen rather than summed from item text, and that 'Tablet levels and evolution are different upgrades'. It also converts the 1.0.33 Tsuba percentages into 1.4x / 1.7x / 2.2x the starting invincibility duration without claiming a base duration in seconds."
  - tier: "Editorial"
    title: "Trigger-by-trigger farming notes and the why-it-is-not-transforming checklist"
    url: "https://sephiriawiki.vercel.app/guides/artifact-evolution-guide"
    date: "2026-10-29"
    text: "The weapon-to-trigger pairings, the per-trigger farming advice, the symptom table and the list of unconfirmed behaviour are our synthesis of the sources above, not developer statements."
---

# Sephiria Artifact Evolution Guide — Every Transform Trigger

Five artifacts in Sephiria transform into stronger versions mid-run, and none of them are waiting on a level or a rarity roll — each one waits for a specific counted action. Here is the exact trigger for all five, which weapon can actually perform it, why an artifact sometimes refuses to change, and the post-1.0.33 numbers.

## What "transform" means in the patch notes

The 1.0.31 notes use one consistent word for this mechanic: **"Transforms into"**. [Official] A base artifact sits in your grid carrying a modest stat line, you perform a named action a set number of times, and the item becomes a different, stronger item without leaving the board.

Three things are worth separating before the table, because players routinely mix them up:

- **Evolution is not a stat threshold.** Four of the five triggers read your actions or your sheet — three counters and one percentage — and the fifth has no published trigger at all.
- **Evolution is not Tablet levelling.** Tablets improve what is already adjacent to them; evolution swaps the artifact's identity. An independent wiki makes the same distinction explicit. [Community]
- **The artifact has to be working.** Items in the Side Bag are inactive, so an artifact parked there is not counting anything. [Official] If you are farming a trigger, the item belongs in the live grid.

## All five transforming artifacts

| Base artifact | Base effect | Trigger | Evolved name | Evolved effect |
|---|---|---|---|---|
| **Faded Shield Crest** | Weapon Damage +5/10/15 | **50 successful Perfect guards** | Crest of the Iron Wall | Weapon Damage +15/20/25, Block cost −20/30/40% |
| **Rusty Tsuba** | Weapon Damage +2/4/6 | **Block enemy attacks 30 times with Unsheath or Sheath** | Master's Tsuba | Weapon Damage +5/10/15, Sheath/Unsheath invincibility **+40/70/120%** (1.0.33) |
| **Dull Resonance Stone** | Highest Elemental Damage +2/4/6/8 | **Move Speed reaches 140%** | Resonance Stone | Highest Elemental Damage +8/10/12/14 |
| **Stiff Crank** | Crossbow Reload Speed +5/10 | **Complete 50 Reloads** | Marksman's Crank | Reload Speed +10/20, **+30/40%** Normal and Special Attack damage for **10 s** after a Reload |
| **Trainee Duelist's Epaulette** | Sword spirit on a successful Special Attack: Parry (250% of Highest Elemental Damage, Chaos) | **Not stated** | Duelist's Epaulette | Also fires on a Fury hit or the final Normal Attack combo strike (350%) |

Every value above comes from the 1.0.31 announcement except Master's Tsuba, which is the 1.0.33 revision. [Official]

## Faded Shield Crest → Crest of the Iron Wall

The trap here is the word **Perfect**. The trigger counts "50 successful uses of **Perfect guard**", not 50 blocks — and a normal held block is not a Perfect guard. [Official] Community documentation makes the same warning. [Community]

That means the artifact is not "do 50 defensive things"; it is "do 50 well-timed guards". If you hold block through a boss string, you can spend a whole floor without moving the counter.

What you get back is a Block economy item. Crest of the Iron Wall raises Weapon Damage from **5/10/15 to 15/20/25** and cuts Block cost by **20/30/40%**. [Official] On a Sword & Shield run that guards under pressure, the second half is the real prize: longer uptime means more Perfect guards. The [Sword & Shield build guide](/guides/sword-shield-build-guide) covers where that fits in a full loadout.

## Rusty Tsuba → Master's Tsuba

The counter is **30 enemy attacks blocked with Unsheath or Sheath** — two named Blade actions, not generic blocks. [Official] That makes Rusty Tsuba a Katana-family item in practice: if your weapon cannot Sheath or Unsheath, the counter never starts.

This is where a recent upgrade can quietly break your plan. The 1.0.31 notes added the **Cerulean Cloud Sword 'Arges'**, which explicitly **"Replaces Sheath with Special Attack: Cloud Slash."** [Official] Take that upgrade and the Sheath half of the trigger is gone. If you are chasing Master's Tsuba, check what your current node still lets you press before you commit more materials. [Community]

The payoff changed after launch. Through 1.0.31, Master's Tsuba extended Sheath and Unsheath invincibility by a flat **0.05/0.15/0.25 seconds**. Since **1.0.33** it extends it by **40/70/120%** instead. [Official] A percentage scales with whatever invincibility the action already has, which is why the flat figure is now the wrong number to reason with; the community reading is 1.4x, 1.7x and 2.2x of the base window. [Community] The base window in seconds is not published, so treat those multipliers as relative.

## Dull Resonance Stone → Resonance Stone

This is the only evolution with a stat gate instead of a counter: transform happens **when Move Speed reaches 140% or higher**. [Official] Because it is a displayed-value check, do not add up your item text and assume you are there — read the number on your character screen, which is also the advice the community wiki gives. [Community]

Why care at all: **Highest Elemental Damage** is the stat several weapons scale from. The Prismatic Magic Wand sets its element from it, and the Duelist's Epaulette's sword spirit deals 250% of it as Chaos damage. [Official] Resonance Stone roughly doubles the base line — from **+2/4/6/8** to **+8/10/12/14** — so it is a support piece for elemental routes rather than a damage item in its own right. Our [Stats Explained guide](/guides/stats-explained-guide) covers the rest of the stat sheet.

## Stiff Crank → Marksman's Crank

**50 completed Reloads** on a Crossbow. [Official] Two details matter. First, "completed" — a cancelled reload animation is not a reload, and shots fired are not reloads. Second, the evolved item pays out immediately: Marksman's Crank gives **+30/40% Normal and Special Attack damage for 10 seconds after completing a Reload**. [Official]

So the pattern after it evolves is reload, then spend the window — not reload and then retreat to reposition. The 1.0.31 patch also added **M-9200**, which turns a compression of 10 or more rounds into an Enhanced Round with **+20% damage**, and the [Crossbow build guide](/guides/crossbow-build-guide) already treats the Crank line as part of that package. [Official]

## Trainee Duelist's Epaulette → Duelist's Epaulette

This one is in the same announcement and looks like the other four — two forms, the second strictly better — but the notes never use "Transforms into" for it and never state a trigger. [Official] The base version fires a sword spirit at the nearest enemy on a successful **Special Attack: Parry** for 250% of Highest Elemental Damage as Chaos damage; the named version adds **Fury hits** and the **final strike of the Normal Attack combo**, at **350%**.

Because the trigger is unstated, treat any guide that gives you a number as speculation. We list it here so you know the pair exists, not to promise a method.

## Why your artifact is not transforming

| What you see | What to check |
|---|---|
| Still shows the base name after many fights | Is it in the active grid, or was it parked in the Side Bag? Side Bag items are inactive. [Official] |
| Crest still faded | Are you landing **Perfect guards**, or ordinary blocks? The counter does not move on a held block. [Official] |
| Tsuba still rusty after a weapon upgrade | Does your current node still give you **Sheath / Unsheath**? Arges replaces Sheath. [Official] |
| Stone still dull at high movement | Is the **displayed** Move Speed at 140%? Read the character screen, do not sum item text. [Community] |
| Crank has not changed | Count **completed** reloads, not shots or cancelled animations. [Official] |
| Both forms flicker and vanish in the Mystic Pot | That was a client bug fixed in **1.0.31** — update the game. [Official] |

That last row is worth keeping separate from the others. The Mystic Pot is a conversion UI, not an evolution station; the 1.0.31 fix was about the pot *displaying* pre- and post-evolution forms incorrectly, not about the pot performing the transform. [Official] See the [Mystic Pot guide](/guides/mystic-pot-guide) for what it actually does.

## Inspecting before you commit a slot

Since 1.0.31 you can open your inventory inside the **Comprehensive Training Grounds** and "take out and try items you have unlocked so far". [Official] That is the cheapest way to confirm a tooltip before spending a slot on an artifact your build cannot trigger. Our [Artifacts Guide](/guides/artifacts-guide) covers the wider pool, and the [Tablets Guide](/guides/tablets-guide) covers what to place next to it once it evolves.

## What is still unconfirmed

- **Whether counters survive between runs.** Nothing in the 1.0 to 1.0.33 notes says whether 30 of 50 guards carry over, so assume per-attempt progress and verify yourself.
- **Whether triggers accrue while the artifact is unequipped.** The Side Bag rule implies inactive items do not help, but that is inference, not a published statement.
- **The Trainee Duelist's Epaulette trigger.** Named pair, no stated condition anywhere in the official notes.
- **Whether any artifact outside the 1.0.31 batch evolves.** No earlier announcement uses the transform wording; we are not claiming a complete list beyond the five documented.
- **The base Sheath/Unsheath invincibility duration.** Without it, the 40/70/120% figures stay relative.

## FAQ

**Do evolving artifacts stay evolved for the rest of the run?**
The notes describe a transformation, not a temporary buff, so the evolved item is what you carry afterwards. Nothing suggests it reverts, and nothing suggests it carries between runs.

**Can I evolve the same artifact twice in one run?**
No. There is one transformation per artifact, into a single named form.

**Which one should I chase first?**
The one your weapon can already perform repeatedly. A Crest demands Perfect guards, the Tsuba demands Blade actions, the Crank demands a Crossbow. Anything else is a slot spent on an item that will not change.

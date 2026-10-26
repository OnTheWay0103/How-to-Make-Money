---
title: "Neon Abyss 2 Wonder Blocks and the Wonder Pocket"
description: "Wonder Blocks reroll your build mid-run, and 1.0 added Great Wonder Blocks to shops. How the Wonder Pocket works, why blocks start fights, and the fixes."
category: "Mechanics"
version: "1.0"
updated: "2026-10-26"
keywords: ["neon abyss 2 wonder room", "neon abyss 2 wonder block", "neon abyss 2 wonder pocket", "neon abyss 2 wonder jar", "neon abyss 2 great wonder block"]
related:
  - neon-abyss-2-faith-and-hatchmon
  - neon-abyss-2-beginner-guide
  - neon-abyss-2-agents
  - neon-abyss-2-weapon-tier-list
  - neon-abyss-2-1-0-update
sources:
  - tier: "Official"
    text: "Steam announcement 'Neon Abyss 2 - Available Now in 1.0' (2026-10-08) — shops and Athena reward rooms can now offer a Great Wonder Block; Wonder Block/Pocket fix list; extra-battle state fixes; unique Wonder items no longer drop twice per run"
  - tier: "Official"
    text: "Steam announcement 'Weekly Update Roundup | October 10–16' (2026-10-19) — shop reroll and reward-source fixes relevant to Wonder Block rerolling"
  - tier: "Official"
    text: "Steam announcement 'Wonder Flow Update Live Now!' (2026-06-14) — Tino's power duplicates Wonder Jars at the cost of a little life"
  - tier: "Editorial"
    text: "The decision rules for when to use a Great Wonder Block are our advice; Veewo has not published a Wonder Block guide"
---

Wonder Blocks are the reroll layer of a Neon Abyss 2 run, and 1.0 expanded where you can find one. Great Wonder Blocks can now appear in some shops and Athena reward rooms, Wonder Blocks can be carried in the Wonder Pocket, and a block can trigger an extra battle. This page covers what is documented and what is not.

## 1. What a Wonder Block Does

A Wonder Block is a physical object you interact with to reroll something in your run — most visibly a shop's stock. The 1.0 fix list is the best evidence for how they behave, because every entry describes a failure:

| Fixed behaviour | What it tells you |
|---|---|
| "Rerolling shop displays after purchases" | A block can reroll a shop after you have already bought from it |
| "Items moving incorrectly when rerolled inside the crane machine" | Blocks interact with crane machines, not only shops |
| "Private souls or locked drops being rerolled incorrectly" | Rerolls respect ownership and locked items — they are not supposed to touch them |
| "Compatibility between forged Affix rewards, reroll items, and room mechanisms" | Affix rewards and rerolls had to be made compatible, meaning both can land in the same room |

The practical read: a Wonder Block is a reroll currency in object form, and the game treats "which items may be rerolled" as a rule with exceptions. Anything private, locked, or already rewarded is supposed to be excluded.

The 1.0 notes also fixed "unique Wonder items dropping more than once per run," which is a different problem in the same system: Wonder-tier loot is meant to be unique per run, and duplicates were leaking through.

## 2. Great Wonder Blocks: The 1.0 Addition

The headline addition is one line long:

> "Some shops and Athena reward rooms now have a chance to offer a Great Wonder Block, giving you more opportunities to shape the build you want."

Three things follow, and all three matter for how you route a floor:

- **The source is shops and Athena rooms**, not every floor and not every merchant. You cannot farm one on demand.
- **It is a chance**, so a shop without one is not a bug.
- **It is a build-shaping tool**, which is how Veewo frames it. A Great Wonder Block is aimed at the case where your run's items are fine but not the ones you wanted.

Before 1.0, reroll opportunities were thinner. If you learned the game during Early Access, your sense of how often you can reshape a build is out of date.

## 3. The Wonder Pocket

The Wonder Pocket is where carried Wonder Blocks live. The 1.0 fixes describe every way that went wrong: blocks "snapping back, appearing at the wrong scale, or becoming invisible after being taken out of the Wonder Pocket, as well as incorrect co-op interaction ownership."

Two useful conclusions:

1. **You can carry a block between rooms.** If blocks could not be carried, "taken out of the Wonder Pocket" would not be a thing that happens.
2. **Co-op ownership is per player.** The fix mentions incorrect ownership, so in a four-player run a block in someone's pocket belongs to that player, not to the group.

That second point is the practical co-op rule: agree on who is holding the block before a shop, because the pocket is not a shared inventory.

## 4. Blocks That Trigger a Fight

One 1.0 fix stands apart from the rest: "Fixed incorrect monster and wave states when Wonder Blocks triggered an extra battle, including monsters not being registered in combat and rooms remaining in combat after being cleared."

So a Wonder Block can start a fight. That is a real mechanic, not a bug — the bug was the fight's bookkeeping. The operational consequence is simple: before interacting with a block, clear the room and know your health, because the block may spawn enemies rather than reroll quietly.

`[Unconfirmed]`: whether the trigger is random, tied to block type, or timing-based. The notes say blocks can trigger an extra battle; they do not say when.

## 5. Tino, Wonder Jars, and the Duplication Loop

Tino's documented power is duplicating Wonder Jars "at the cost of a little life." That makes him the Agent most directly tied to this system: Jars and Blocks both live in the wonder vocabulary of the game, and Tino's value is repetition.

The honest limit: Veewo describes Tino duplicating **Wonder Jars**, and describes **Wonder Blocks** separately. Whether a duplicated Jar counts as a block for reroll purposes, and whether duplication works while a block is in your pocket, is not stated. `[Unconfirmed]`.

What is safe to say is the strategic shape. If you are playing Tino, the first Jar worth duplicating is the one that fixes the problem your build cannot otherwise solve. Duplicating early and cheaply beats duplicating at 15% health in a boss room.

## 6. How to Use a Reroll Well

No official guide exists, so this is our method, labelled as advice:

1. **Reroll after you buy.** The shop reroll fix implies purchases survive the reroll. Buy the item that is clearly correct, then reroll for what is left.
2. **Check the room state before a block.** Blocks can start a fight; entering at half health is a choice you will regret.
3. **Hold the block if the current shop is good.** Blocks are carryable — a block spent on a mediocre floor is a block unavailable on the floor that has the item you need.
4. **Decide ownership in co-op first.** Pockets are per player.
5. **Do not expect a Great Wonder Block every shop.** It is a chance, and the chance is what makes the find worth noticing.

## 7. What Is Still Unconfirmed

- **Reroll odds and reroll pool size.** Not published in any post. `[Unconfirmed]`.
- **Whether Great Wonder Blocks reroll more items than standard blocks, or the same pool with a different weighting.** `[Unconfirmed]` — the name implies a stronger effect, but the notes never say what it is.
- **Which rooms count as "Athena reward rooms."** The term appears once, in the 1.0 notes, without a list. `[Unconfirmed]`.
- **Cooldown or one-use rules.** Not stated. `[Unconfirmed]`.
- **Interaction between Wonder Blocks and the Bloodied Dice.** 1.0 fixed an issue "when combining Bloodied Dice and Great Wonder Blocks," which confirms a combination exists, but not what it does. `[Unconfirmed]`.

## 8. FAQ

**What is a Wonder Block in Neon Abyss 2?**
A carryable object that rerolls part of your run, most commonly a shop's stock. Great Wonder Blocks, added in 1.0, can also appear in some shops and Athena reward rooms.

**Do Wonder Blocks fight you?**
They can trigger an extra battle. That is documented as a mechanic; the 1.0 patch fixed the combat bookkeeping around it.

**Can I store a Wonder Block for later?**
Yes — the Wonder Pocket exists for exactly that, and 1.0 fixed blocks behaving badly when taken out of it.

**Where do Great Wonder Blocks come from?**
Some shops and Athena reward rooms, as a chance rather than a guarantee.

**Does Tino make Wonder Blocks stronger?**
He duplicates Wonder Jars at a health cost. Whether that applies to blocks is not documented. `[Unconfirmed]`.

**Why did my reroll change a locked item?**
That was a bug fixed in 1.0: locked drops and private souls were being rerolled when they should not be.

## 9. Next

- Faith, badges and Hatchmon: [Faith System](/guides/neon-abyss-2-faith-and-hatchmon)
- Which sets reward a rerolled build: [weapon tier list](/guides/neon-abyss-2-weapon-tier-list)
- Full 1.0 change list: [1.0 update notes](/guides/neon-abyss-2-1-0-update)
- First two hours with the systems explained: [beginner guide](/guides/neon-abyss-2-beginner-guide)

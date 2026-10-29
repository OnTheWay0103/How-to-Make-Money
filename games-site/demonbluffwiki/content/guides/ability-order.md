---
title: "Demon Bluff Ability Order: Who Acts First and Why"
description: "Start Order decides which card resolves first and which disguised cards lose their window. Here is the full order, how disguises slot in, and your read."
category: "Mechanics"
version: "Demo build (2026-10-29)"
updated: "2026-10-29"
date: "2026-10-29"
keywords:
  - "demon bluff ability order"
  - "demon bluff start order"
  - "demon bluff resolution order"
  - "demon bluff priority"
  - "demon bluff mechanics"
  - "demon bluff skills"
related:
  - "characters-list"
  - "beginner-guide"
  - "release-date-and-platforms"
  - "demo-and-ascension"
  - "unlocks-and-skins"
sources:
  - tier: "Official"
    title: "Demon Bluff — Steam store page"
    url: "https://store.steampowered.com/app/3522600/"
    date: "2026-10-29 (accessed)"
    text: "Confirms the game is built around 'increasingly complex mechanics' and that Demons and Minions 'have disguised themselves as Villagers', which is the premise the ordering rules operate on. The store page does not document resolution order itself."
  - tier: "Community"
    title: "Demon Bluff Wiki — Start Order"
    url: "https://demonbluff.wiki.gg/wiki/Start_Order"
    date: "2026-10-29 (accessed)"
    text: "Primary source for this page: Start Order decides which card's ability goes first; duplicates resolve by highest to lowest numbered position; Start Order runs before Disguises are chosen; disguise order runs from the highest numbered card down in a counter-clockwise pattern. Its illustrated order is Baa, Counsellor, Pooka, Poisoner, Witch, Puppeteer, Plague Doctor, Shaman, Alchemist."
  - tier: "Community"
    title: "Demon Bluff Wiki — Keywords"
    url: "https://demonbluff.wiki.gg/wiki/Keywords"
    date: "2026-10-29 (accessed)"
    text: "Defines Disguise ('pretends to be a different role; the real role is revealed when Executed') and Lie, including the rule that a Disguised character's disguised ability will not work."
  - tier: "Community"
    title: "Demon Bluff Wiki — Game Modes"
    url: "https://demonbluff.wiki.gg/wiki/Game_Modes"
    date: "2026-10-29 (accessed)"
    text: "Documents the game-start abilities that the Start Order governs: Chancellor converting a Villager, Poisoner corrupting a neighbour, Puppeteer creating a Puppet, Shaman duplicating a role, and Pooka corrupting adjacent villages."
---

# Demon Bluff Ability Order: Who Acts First and Why

When several cards want to act at the start of a round, the game does not roll dice — it uses a fixed **Start Order**. That order decides which ability resolves first, and because disguises are chosen after it, it also decides which disguised copies miss their window. Here is the order and what it changes at the table.

The order below comes from the community wiki's Start Order page, read on 29 October 2026. The game is pre-launch, so verify it in-game after a patch.

## The round-start order

Cards with a game-start ability resolve in this sequence, top to bottom:

1. **Baa** (Demon — hides an Outcast in the deck)
2. **Counsellor** (listed in the wiki's order chart; the role index calls this card **Chancellor** — see the naming note below)
3. **Pooka** (Demon — corrupts adjacent villages)
4. **Poisoner** (Minion — corrupts an adjacent Villager)
5. **Witch** (Minion — blocks revealing the last card)
6. **Puppeteer** (Minion — turns an adjacent Villager into a Puppet)
7. **Plague Doctor** (Outcast — corrupts a Good Villager)
8. **Shaman** (Minion — duplicates a Villager role)
9. **Alchemist** (Villager — cures Corruption in Range 2)

> ⚠️ **Patch caveat.** Patch v0.730 (June 2026) moved the **Puppeteer and Shaman earlier** in the round-start order, and the wiki page this sequence comes from has not been rewritten since. The general rule — corruptors before the Alchemist, disguises after everything — still holds; the exact positions of Puppeteer and Shaman may not. Verified positions, in order, at the time of writing: Baa, Counsellor/Chancellor, Pooka, Poisoner, Witch, Puppeteer, Plague Doctor, Shaman, Alchemist.

Read that list as a dependency chain rather than a schedule. Baa goes first because it changes what the deck contains. Pooka, Poisoner and Plague Doctor all apply Corruption before anything has a chance to cure it, and the Alchemist — the only cure in the game — resolves last.

That ordering is the whole design: **corruption is applied before it can be removed**, and the Alchemist only gets to sweep up what is still in its range after every corruptor has already acted.

## Disguises resolve after Start Order

This is the part that wins games. Start Order always goes before Disguises are chosen, and disguise selection then proceeds from the highest numbered card downward in a counter-clockwise pattern.

The wiki's worked example makes the consequence concrete. A Doppelganger disguises as an Alchemist. Because the original Alchemist acts first under Start Order, the original gets to cure before the Doppelganger Alchemist ever gets a turn. If a curable Corruption sat inside both of their ranges, the Doppelganger would have missed its chance — its ability is still there, but the corruption was already gone.

Two rules follow:

- **A disguised card's disguised ability does not work if the card is also lying.** The wiki states this directly: if a character is Disguised, "the disguised ability will not work". A Minion wearing a Villager's face is noise, not a second copy of that Villager.
- **Position numbering matters.** With duplicates, the highest-numbered copy resolves first. On a board with two Alchemists, which one is "the original" comes down to numbering, not to which one you revealed first.

## What Start Order does not control

Your reveal order is yours alone. Start Order governs round-start abilities; the order in which you flip character cards is a player decision and the main strategic lever you have.

That distinction matters because beginners tend to conflate the two. The board resolves its opening moves in a fixed sequence you cannot influence. You influence what happens next by choosing which card to expose, knowing that:

- Each reveal ticks the night clock, and the night falls after four ticks in rounds containing Lilis or Lycanthrope.
- Abilities mostly do **not** refresh after a night any more. The developers' June 2026 note says "most abilities will no longer refresh after each Night Cycle" and that currently only the **Dreamer** does. Older guides that promise a refresh are out of date.
- A card that is still unrevealed when night falls can be killed by Lilis.

So the board's fixed order sets the starting state, and your reveal order decides which of the remaining cards ever get to speak.

## The naming note: Counsellor vs Chancellor

The wiki's Start Order chart lists **Counsellor**; the wiki's own role index and role page list **Chancellor**. Same ability, same position in the order — one of the two names is stale.

We use **Chancellor** throughout this site because it matches the role page and the category listing. If a patch renames the card, the position in the Start Order matters more than the label: the card that converts a Villager into an Outcast and sits next to it is still second in line.

## Why the order changes what a claim means

Once you know that corruption lands before the cure, several otherwise confusing board states become readable:

- **An Alchemist reporting "0 Corruptions around me" is a real signal.** It resolved last, so anything it can see is what survived every corruptor. It is one of the few clean reads in the game.
- **A Poisoner report of "one adjacent Villager is Corrupted" is downstream of Pooka and Baa.** The Poisoner converts a neighbour; Pooka may already have converted the whole area. Two corruption sources stacking is normal, not a bug.
- **A Shaman duplicate is created before the Alchemist's cure.** If the Shaman duplicated a card that later got corrupted, both copies exist and only the one in range gets cured.
- **A Doppelganger that claims a Villager role is suspect by construction.** Its ability is copied after Start Order, so if the original already resolved, the copy's window is gone — a claim of "I did the thing" from a Doppelganger is exactly what a liar would say.

That last point is the practical payoff of learning the order. You are not memorising a list for its own sake; you are learning which claims are physically possible given the sequence.

## A five-second version for the table

If you do not want to hold the whole sequence in your head mid-run, keep these four facts:

1. **Baa is first, the Alchemist is last.** Anything the Alchemist reports has already been through every corruptor.
2. **Disguises are picked after Start Order.** A disguised copy acts later than the original, if it acts at all.
3. **Duplicates resolve high-to-low by position number.** Two of the same role are not interchangeable.
4. **Round-start effects cannot be interrupted.** Killing the card later does not undo what it already did.

Everything else on this page is elaboration on those four lines.

## What to re-check after a patch

The game is still pre-launch, so this order is a snapshot. After any update that adds, removes or renames a role, check three things before trusting the list above:

- **Position of the new card.** A new corruptor inserted before Pooka changes whether the Alchemist ever sees the corruption it caused.
- **Whether the disguise step still runs after Start Order.** This single rule is what makes Doppelganger reads meaningful; if it inverts, several of our example reads invert with it.
- **Which Demon or Minion causes the night.** The night cycle is currently tied to Lilis and Lycanthrope; adding a third night trigger changes how many reveals you can afford before the board reacts.

We date every mechanic page and re-verify after patches that touch roles. If a claim here contradicts what you see in-game, the game wins — send it in and we will correct the page rather than defend it.

## Frequently asked

**Does Start Order change between runs?**
No. It is a fixed sequence; what changes is which of those cards are in the deck.

**Do duplicate cards resolve in a fixed order?**
Yes — highest to lowest numbered position, per the wiki.

**Can I choose the order cards act in?**
Only for your own reveals. Round-start abilities resolve automatically in Start Order.

**Does killing a card stop its start-of-round effect?**
The ability already resolved at round start, so no. The same logic applies to the night cycle, which the wiki notes continues even if the character that caused it dies.

**Is the order documented by the developer?**
Not on the Steam page. The sequence above is community-documented and should be re-checked after any patch that adds or renames roles.

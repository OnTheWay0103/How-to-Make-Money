---
title: "The Mound Inventory Management Guide — How to Reorganise Your Hotbar and Items"
description: "Can't rearrange items in The Mound: Omen of Cthulhu? Inventory management was one of the first features the developers publicly promised after launch. This guide covers what Patch 1.01 and Patch 1.03 actually changed, how to reorganise your hotbar on PC and controller, how the shared ox-wagon inventory works, and which item-slot problems players still report."
category: "Guides"
version: "1.0"
updated: "2026-09-17"
keywords: ["the mound inventory management", "the mound how to reorder items", "the mound hotbar", "the mound inventory slots", "the mound can't rearrange items", "the mound ox wagon inventory", "themound item slot problem"]
related:
  - loadout-guide
  - ox-cart-guide
  - controls-settings-guide
  - updates-patch-notes
  - beginner-loadouts
  - coop-strategy-guide
---

# The Mound Inventory Management Guide — How to Reorganise Your Hotbar and Items

You pick up a pistol. It lands in slot 3, you want it in slot 1, and there is nothing to click. In most games that takes one drag. In *The Mound: Omen of Cthulhu* it was, for the first weeks after launch, not possible — and the developers said so themselves. This guide covers the **container**, not the contents: which weapons to carry is a [separate decision](/guides/loadout-guide).

> **Sourcing.** We paged the full English Steam review pool for app `2569760` via Steam's reviews API (`json=1`) — Steam reports **2,680 English reviews** (1,873 positive / 807 negative, **30.1% negative**), de-duplicated to 2,679 — plus **all 40 official Steam announcements**. **136 reviews** mention inventory, hotbar or item-slot handling. Official quotes are verbatim.

---

## The Short Version

| Question | Answer |
|---------|--------|
| Reorder items on PC? | Partly — with the mouse, **at the wagon**. Patch 1.01. |
| Reorder the hotbar on controller? | Yes — Patch 1.03. |
| Rearrange items anywhere else? | No. [Community] |
| A backpack or slot upgrade? | No — never announced. |
| Can I choose the target slot? | Players report inconsistent results. [Community] |
| Is the wagon inventory shared? | Yes — multiple players at once. [Official] |

## The Official Timeline

Inventory management is one of the few systems the developers openly named as a defect after launch, then tracked through two patches.

| Date | Source | What it says |
|------|--------|--------------|
| Jul 15 | *What's new since the demo?* | *"Multiple players can now interact with the ox-wagon inventory simultaneously."* |
| Jul 17 | *Test next week's patch on a Beta Branch* | Under **"Things we're looking into"**: *"Inventory Management (coming next patch for keyboard & mouse. Controller support to follow in a later update)"* |
| Jul 21 | Patch 1.01 | *"Ability to organise items in your own inventory with a mouse during interactions with the wagon added"* |
| Aug 13 | Patch 1.03 | *"Players can reorganise their hotbar inventory with a gamepad."* |

The studio committed to **keyboard-and-mouse first, controller second**, and delivered in that order within a month — a rare documented complaint-to-patch loop in this game.

## Reorganising on PC (Patch 1.01)

The official wording restricts the feature twice: **mouse**, **during wagon interactions**.

So reordering is not a general inventory screen. Players describe it the same way in practice — *"you have to use the Cart to move items around"* [Community, [Jul 29 2026](https://steamcommunity.com/profiles/76561198152197312/recommended/2569760/)]. The practical rule: **the wagon is your inventory screen.** If you cannot drag something, you are probably not standing at it.

## Reorganising on Controller (Patch 1.03)

Patch 1.03 targets something different: the **hotbar**, the quick-select strip you fight from. For controller players this is the one that matters — the slot-order complaints are almost all about the hotbar, not the pack. *"You can't reorder your weapons. If you pick up a pistol and it goes into slot 3, you're stuck with it there."* [Community, [Jul 19 2026](https://steamcommunity.com/profiles/76561199106076681/recommended/2569760/)] Before 1.03 that was correct; after it, it is only correct if you are not using the gamepad reorganise function.

## The Wagon Inventory Is Shared

*"Multiple players can now interact with the ox-wagon inventory simultaneously"* is easy to miss and changes how you loot. The wagon is not a private chest — it is the squad's shared depot, and all four players can load or unload at once. Combined with the [Command Wheel 2.0 stop order (Patch 1.04)](/guides/ox-cart-guide), a squad can park the wagon and deposit together instead of taking turns.

The trade-off is the one reviews keep circling: *"the lack of inventory space"* is real, and *"having a backpack or some kind of inventory upgrade is a must"* [Community, [Jul 19 2026](https://steamcommunity.com/profiles/76561197975522493/recommended/2569760/)]. Because your own slots are tight, heavy loot belongs in the wagon — see the [Extraction Guide](/guides/extraction-guide).

## Why Your Items Land in Slots You Didn't Choose

This is the most-repeated specific complaint in the corpus, and it is a **different** problem from "there is no reorder button" — only one of the two is officially fixed. Players describe automatic assignment that ignores intent:

- *"Moving an item to a specific slot (like slot 2) doesn't work; the game just randomly assigns it to a different slot (like slot 7)."* [Community, [Jul 15 2026](https://steamcommunity.com/profiles/76561198014093419/recommended/2569760/)]
- *"You can't rearrange items in any inventories, and moving items back and forth results in random placement."* [Community, [Jul 16 2026](https://steamcommunity.com/profiles/76561197993680453/recommended/2569760/)]
- *"No way to drag and drop items in player hotbar, reorganizing is a clumsy process."* The same reviewer later edited their own review: *"(EDIT: first patch added ability to drag items in your inventory when interacting with wagon)"* [Community, [Jul 16 2026](https://steamcommunity.com/profiles/76561198007094444/recommended/2569760/)]
- *"You can't organize your item bar."* [Community, [Jul 20 2026](https://steamcommunity.com/profiles/76561198072021803/recommended/2569760/)]

**One explanation is offered, and it is a single report — [Unconfirmed]:** the wagon remembers where the last item was removed, so the next pickup refills that gap before spilling into slot 1, 2, 3. *"It also remembers where the last was removed, so the first item you collect goes in that spot, and then it goes from slot 1, 2, 3, etc."* [Community, [Jul 29 2026](https://steamcommunity.com/profiles/76561198152197312/recommended/2569760/)] If right, it is a useful model — **the pack backfills holes** rather than appending. No developer statement describes slot assignment, so we do not present it as fact.

## The Known Slot-Selection Issue

The developers' own closed-beta known-issues list contains an entry whose symptom still appears in later reports: *"Inventory slot mismatch after starting an expedition on map. Each game starts with the 1st inventory slot being selected instead of what the player was holding before starting the mission. This is only visual, as scrolling actually uses the selected weapon as the starting point."* [Official, [Jun 5 2026](https://store.steampowered.com/news/app/2569760/view/1834602721191291)]

Take the practical half: **when a run starts, verify what you are actually holding.** The highlight can lie; the scroll position is what the game uses.

## What Has Not Been Fixed

Two things are absent from all 40 announcements:

- **No general reorder.** Reordering stays tied to the wagon (PC) and the hotbar (controller). No standalone inventory screen is announced.
- **No capacity upgrade.** No backpack, pouch or slot expansion has ever been announced, despite repeated requests in July.

If inventory space is your bottleneck, the answers available are loadout discipline and the wagon — a [slot-budgeting question](/guides/loadout-guide), not an inventory-management one. (Note: the game has no weight system. `weight`, as a mechanic, returns **0 hits** across all 40 official announcements and **0** on the store page — what constrains you is slots.)

## Practical Inventory Workflow

| Do | Don't |
|----|-------|
| Bank heavy treasure in the wagon as you pass it | Carry loot you could deposit — your slots are the scarce resource |
| Deposit as a squad while the wagon is stopped | Queue one at a time; the wagon is multi-user |
| On controller, fix the hotbar before the fight | Assume a pickup landed where you wanted |
| Re-check the selected slot when a run starts | Trust the on-screen highlight at mission start |
| Use the mouse at the wagon for full reordering | Expect to rearrange your pack anywhere else |

## Sources

**Official**
- ["Test next week's patch on a Beta Branch" (Jul 17, 2026)](https://store.steampowered.com/news/app/2569760/view/1838407329259770) — the KBM-then-controller commitment.
- [Patch 1.01 Post Launch Hotfixes (Jul 21, 2026)](https://store.steampowered.com/news/app/2569760/view/1838407329269270) — mouse organising at the wagon.
- [Patch 1.03 Quality of Life Hotfixes (Aug 13, 2026)](https://store.steampowered.com/news/app/2569760/view/1840944183776882) — gamepad hotbar reorganisation.
- ["What's new since the demo ?" (Jul 15, 2026)](https://store.steampowered.com/news/app/2569760/view/1838407329253806) — simultaneous ox-wagon inventory access.
- ["Closed Beta: Known issues & Temporary workarounds" (Jun 5, 2026)](https://store.steampowered.com/news/app/2569760/view/1834602721191291) — inventory slot mismatch entry.
- [Steam store page — app 2569760](https://store.steampowered.com/app/2569760/) — confirms splitting "weapons and equipment among your party"; no inventory controls described.

**Community** — Steam reviews of app 2569760, via Steam's reviews API, linked to author profiles.
- [76561198014093419 — Jul 15](https://steamcommunity.com/profiles/76561198014093419/recommended/2569760/) — item assigned to a random slot.
- [76561197993680453 — Jul 16](https://steamcommunity.com/profiles/76561197993680453/recommended/2569760/) — "random placement".
- [76561198007094444 — Jul 16](https://steamcommunity.com/profiles/76561198007094444/recommended/2569760/) — no hotbar drag-and-drop; edit credits the 1.01 wagon fix.
- [76561197975522493 — Jul 19](https://steamcommunity.com/profiles/76561197975522493/recommended/2569760/) — inventory space; cannot rearrange.
- [76561199106076681 — Jul 19](https://steamcommunity.com/profiles/76561199106076681/recommended/2569760/) — "you can't reorder your weapons".
- [76561198072021803 — Jul 20](https://steamcommunity.com/profiles/76561198072021803/recommended/2569760/) — "You can't organize your item bar."
- [76561198152197312 — Jul 29](https://steamcommunity.com/profiles/76561198152197312/recommended/2569760/) — cart-based moving; slot-backfill theory.

> **Honesty note:** Steam Community discussion threads were unreadable from our tooling; every player quote came from Steam's reviews API for app `2569760` (HTTP 200) and is linked to its author profile. No developer has published an inventory mechanics breakdown. The slot-backfill explanation is a **single** report — **[Unconfirmed]**.

---

## Related Guides

- [Loadout Guide — What to Bring, and How to Budget Your Slots](/guides/loadout-guide)
- [Ox Cart Guide — Why It Won't Follow You and How to Control It](/guides/ox-cart-guide)
- [Controls & Settings Guide — Keybindings, Graphics and Technical Fixes](/guides/controls-settings-guide)
- [Update Log and Patch Notes — Version History](/guides/updates-patch-notes)
- [Beginner Loadouts — Budget Builds That Work](/guides/beginner-loadouts)
- [Co-op Strategy Guide — Team Play and Communication](/guides/coop-strategy-guide)

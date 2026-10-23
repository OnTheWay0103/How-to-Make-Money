---
title: "How to Automate Your Greenhouse in Nivalis Nights (Update 5 & 6)"
description: "Nivalis Nights greenhouse automation guide. Unlock the Automatic Harvester at Farming 15 and the RePlanter 4000 at 16, set up greenhouse storage, run modules remotely from the Tab panel, and feed your venues with Use Greenhouse Stock."
category: "Farming"
version: "1.0"
updated: "2026-10-23"
date: "2026-10-23"
keywords:
  - "nivalis nights greenhouse automation"
  - "nivalis nights automatic harvester"
  - "nivalis nights replanter 4000"
  - "nivalis nights greenhouse storage"
  - "nivalis nights use greenhouse stock"
  - "nivalis nights farming level 15"
  - "nivalis nights remote greenhouse"
related:
  - "greenhouse-guide"
  - "best-business-guide"
  - "fishing-guide"
  - "day-night-cycle-guide"
sources:
  - tier: "Official"
    title: "Nivalis Nights - Update #4"
    url: "https://store.steampowered.com/news/app/1488490/view/1846018067933485"
    date: "2026-10-09"
    text: "Steam announcement 'Nivalis Nights - Update #4' (2026-10-09): venue restock targets Lean (2 of each required ingredient), Normal (5 of each, the default), Extra (10 of each), and Recent Sales (based on meals sold within the last 4 in-game hours, minimum 2). Link: https://store.steampowered.com/news/app/1488490/view/1846018067933485"
  - tier: "Official"
    title: "Small Patch - Additional Venue Balancing & Fixes"
    url: "https://store.steampowered.com/news/app/1488490/view/1846651706681865"
    date: "2026-10-16"
    text: "Steam announcement 'Small Patch - Additional Venue Balancing & Fixes' (2026-10-16): everyone restores hunger every 6 game hours, which produces a large morning rush. Link: https://store.steampowered.com/news/app/1488490/view/1846651706681865"
  - tier: "Official"
    title: "Nivalis Nights - Update #5"
    url: "https://store.steampowered.com/news/app/1488490/view/1846651706678000"
    date: "2026-10-15"
    text: "Steam announcement 'Nivalis Nights - Update #5' (2026-10-15): Automatic Harvester unlocks at Farming level 15, RePlanter 4000 at level 16, greenhouse storage, the Tab-menu Remote Control panel, Use Greenhouse Stock, and the 40% faster farming animations."
  - tier: "Official"
    title: "Nivalis Nights - Update 6"
    url: "https://store.steampowered.com/news/app/1488490/view/1847286114032742"
    date: "2026-10-22"
    text: "Steam announcement 'Nivalis Nights - Update 6' (2026-10-22): auto-plant now replants the same crop even with full greenhouse storage, level-locked farming modules are refunded, venue finances count greenhouse produce at growing cost, and venues keep running while you sleep."
  - tier: "Community"
    title: "Nivalis Nights Received Update #5 - GameSpace"
    url: "https://gamespace.com/all-articles/news/nivalis-nights-received-update-5/"
    date: "2026-10-15"
    text: "GameSpace news report on Update #5 (2026-10-15), independently summarising the two automation upgrades, greenhouse storage, the Tab-menu remote console, Use Greenhouse Stock, fast travel, and the Farming level rebalance."
  - tier: "Community"
    title: "Nivalis Nights Greenhouse Guide - Nivalis Nights Wiki"
    url: "https://nivalisnights.wiki/greenhouses/"
    date: "2026-10-23 (accessed)"
    text: "Nivalis Nights Wiki greenhouse guide (accessed 2026-10-23): the console controls temperature, humidity and light, and those settings affect growth speed; it predates the automation upgrades and does not cover them."
  - tier: "Editorial"
    title: "Automation workflow and troubleshooting"
    url: "https://nivalisnightswiki.vercel.app/guides/greenhouse-automation-guide"
    date: "2026-10-23"
    text: "Our recommendations for storage placement, module grouping, venue restock targets, and the troubleshooting table are editorial advice based on the official patch notes and the community reports above."
---

# How to Automate Your Greenhouse in Nivalis Nights (Update 5 & 6)

Nivalis Nights spent its first two weeks fixing performance and venue finances. Then **Update #5 (October 15, 2026)** turned greenhouses from a daily chore into a passive supply chain, and **Update #6 (October 22)** fixed the one bug that broke the loop. If you already know how to plant and harvest, this guide covers the automation layer only. For the basics — renting a greenhouse, the temperature/humidity/light console, and why home-grown ingredients beat market prices — read the [Greenhouse Guide](/guides/greenhouse-guide).

The short version: two upgrades automate harvesting and replanting, storage keeps the output off the floor, a Tab-menu panel lets you run every greenhouse remotely, and one venue setting makes your managers consume your own crops before they spend a single coin at market.

## What the automation actually does

| System | What it changes | Requirement |
|--------|-----------------|-------------|
| **Automatic Harvester** | Harvests ripe modules without you visiting | Farming level 15 |
| **RePlanter 4000** | Replants seeds after each harvest, closing the loop | Farming level 16 |
| **Greenhouse Storage** | Harvested crops move into furniture placed inside the greenhouse | Any regular furniture with a storage value |
| **Remote Control** | Inspect modules, toggle automation and pick crops from anywhere | Update #5; opened from the Tab menu |
| **Use Greenhouse Stock** | Venue managers use your crops before buying ingredients | Per-venue management setting |

The upgrades are bought at the greenhouse itself. Prices are not published in the patch notes, so treat any exact figure you see elsewhere as **[Unconfirmed]** until you check your own build.

## Step 1: Reach Farming level 15, then 16

The Automatic Harvester unlocks at **Farming level 15**. The RePlanter 4000 unlocks at the new **level 16**. There is no shortcut in the patch notes: you level Farming by doing the work — planting, harvesting and processing crops. The exact XP values per action are **[Unconfirmed]**, so the reliable approach is to keep every module planted and harvest on cooldown rather than optimising for a number nobody has published.

One warning for existing saves: Update #5 rebalanced Farming, and your Farming level may drop by a few levels when you load an old save. Update #6 cleans up the fallout — **farming modules that the level change locked are refunded at their base price**, with a message telling you how many modules were refunded and for how much. A crop growing in a refunded module also gives its seed back. If your greenhouse suddenly looks smaller after the patch, check for that refund message before buying anything.

## Step 2: Give the greenhouse somewhere to put the harvest

Automation without storage just moves the bottleneck. Update #5 gave greenhouses their own storage: place **any regular furniture with a storage value** inside, the same basic or refrigerated storage you would use in a restaurant. Harvested crops are moved there automatically.

The overflow rules matter:

- If one storage type fills up, crops spill into the other.
- If both are full, crops go to your main inventory with a warning notification.
- Update #6 fixed auto-plant so it replants the **same crop** after an auto-harvest even when greenhouse storage is full. Before that fix, a full greenhouse could leave the module empty or switch it to a different crop.

Practical setup: place at least one basic storage unit and one refrigerated unit close to the modules, and leave headroom. A greenhouse that is 100% full every morning is one bad harvest away from dumping crops into your personal inventory.

## Step 3: Configure each module

Each module grows one crop. Open the greenhouse console or a module's radial menu and choose what to cultivate, then toggle automatic harvesting and planting per module.

Update #6 added a small but important usability change: **the last planted crop is now marked** in both the module list and the radial menu. That mark is your quickest way to see which modules are running the crop you expect, especially in a large greenhouse with several identical modules.

Group crops by what they feed. A restaurant menu that uses three ingredients should have at least one module on each, with spare capacity on the ingredient used by your best-selling dish. The console's temperature, humidity and light settings are greenhouse-wide in the community documentation we checked, so crops with incompatible needs are better split across greenhouses than forced into one room. Treat that as **[Unconfirmed]** for your build and test one variable at a time.

## Step 4: Run everything from the Tab menu

The **Remote Control** panel is the feature that makes automation feel like automation. Open it from the Tab menu to see every greenhouse you own:

- Inspect the status of all modules.
- Toggle automatic harvesting or planting.
- Click any entry to jump into that module and change what it grows.

This is also the fastest way to diagnose a stalled greenhouse. If a module is not harvesting, the panel shows whether automation is off, the crop is still growing, or storage is full. You no longer need to physically visit each site to find the one module you forgot to configure.

## Step 5: Point your venues at the greenhouse

Automation only pays if the food reaches a customer. In each venue's overview window, open the management settings and enable **Use Greenhouse Stock**. Managers will then consume your greenhouse produce first and buy only what is still missing.

Update #6 tightened the accounting: venue finances now show what ingredients really cost, and **produce from your own greenhouse counts at its growing cost instead of the market price**. Sales recorded before the patch still show the old estimate, so do not compare pre-patch and post-patch profit screens as if they used the same maths.

Pair this with the restock settings added in **Update #4** [Official]:

- **Lean** — 2 of each required ingredient.
- **Normal** — 5 of each, the default.
- **Extra** — 10 of each.
- **Recent Sales** — based on meals sold in the last four in-game hours, minimum 2.

Set a daily restock budget you can actually afford, and turn restock notifications on until you trust the loop. If managers keep buying despite a full greenhouse, the usual causes are a recipe that needs an ingredient you do not grow, a stock target higher than your harvest, or a budget that is too low to cover the gap.

## Step 6: Let the whole loop run overnight

Update #6 added a second passive layer: **venues keep running while you sleep**. If you go to bed before curfew, the evening plays out — customers are served, they pay and leave reviews, and staff are paid for those hours. Combine that with automated greenhouses and Use Greenhouse Stock, and a well-configured venue can earn while you are not touching the keyboard.

Do not expect zero maintenance. The October 16 small patch changed NPC hunger so everyone restores it every six game hours [Official], which creates a large morning rush. Stock and staff still need to survive that rush. Automation removes the farming clicks, not the management decisions.

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Harvester does nothing | Farming level below 15, upgrade not bought, or automation toggled off | Check level, buy the upgrade, enable it in the module or Tab panel |
| Modules empty after harvest | RePlanter 4000 missing or auto-plant off | Reach level 16 and enable planting |
| Same crop not replanted after Update 6 | Outdated build | Update the game; Update #6 specifically fixes this with full storage |
| Crops appear in your inventory | Both greenhouse storage types full | Add storage or sell/process the backlog |
| Modules disappeared after Update #5 | Farming level rebalance locked them | Check the refund message; modules are refunded at base price and seeds returned |
| Managers still buy ingredients | Not enough greenhouse stock, wrong restock target, or low budget | Enable Use Greenhouse Stock, raise output, adjust Lean/Normal/Extra/Recent Sales |

## Automation checklist

- [ ] Farming level 15 reached and Automatic Harvester purchased.
- [ ] Farming level 16 reached and RePlanter 4000 purchased.
- [ ] Basic and refrigerated storage placed inside each greenhouse.
- [ ] Every module assigned a crop that a venue actually serves.
- [ ] Automation toggles verified from the Tab-menu Remote Control panel.
- [ ] Use Greenhouse Stock enabled on each venue.
- [ ] Restock target and daily budget set per venue.
- [ ] A pre-patch backup save kept, in case a rebalance changes your layout again.

The result is not a greenhouse you can forget. It is a greenhouse you can check in thirty seconds from the Tab menu, then leave alone while you run the rest of the city. That is the actual upgrade: not free food, but free time.

*Verified against the official Update #5 (2026-10-15) and Update #6 (2026-10-22) announcements. Prices, exact XP values and per-crop console behaviour are marked [Unconfirmed] where the patch notes do not state them.*

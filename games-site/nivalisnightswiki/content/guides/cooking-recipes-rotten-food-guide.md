---
title: "Nivalis Nights: Cooking, Recipes & Rotten Food Guide"
description: "Nivalis Nights cooking guide: how recipes become meals at the Food Processor and Drink Machine, which storage keeps food fresh, and what to do with rotten food."
category: "Business"
version: "1.0"
updated: "2026-10-28"
date: "2026-10-28"
keywords:
  - "nivalis nights cooking"
  - "nivalis nights recipes"
  - "nivalis nights rotten food"
  - "nivalis nights how to cook"
  - "nivalis nights food spoiling"
  - "nivalis nights food storage"
  - "nivalis nights composter"
related:
  - "manager-restock-guide"
  - "greenhouse-guide"
  - "greenhouse-automation-guide"
  - "best-business-guide"
  - "fishing-guide"
  - "beginner-guide"
sources:
  - tier: "Official"
    title: "Nivalis Nights - Update #2"
    url: "https://store.steampowered.com/news/app/1488490/view/1845383656386240"
    date: "2026-10-02"
    text: "Steam announcement 'Nivalis Nights - Update #2' (2026-10-02): decorative furniture configured with a normal storage or refrigerated storage value now counts toward the venue's storage space; the Kitchen Buffet holds 100 normal and 50 refrigerated storage space; older ingredients are used first for mealmaking, which reduces rotten food but can lower the food freshness aspect of customer reviews; the staff task list runs Serve a meal, Process ingredient, Make meal at Food Processor or Drink Machine, Take new order, then manager tasks, Cleanup meal, Cleanup trash and Cleanup storage (Cleaner role)."
  - tier: "Official"
    title: "Nivalis Nights - Update #3"
    url: "https://store.steampowered.com/news/app/1488490/view/1845383656393863"
    date: "2026-10-05"
    text: "Steam announcement 'Nivalis Nights - Update #3' (2026-10-05): fixed cleaning up rotten food from venue storage when large amounts were stored in both normal and refrigerated storage; Calypso Island was missing trash bins for rotten food; fixed a vending machine and composter item duplication glitch; venue storage restock notification now appears after delivery."
  - tier: "Official"
    title: "Nivalis Nights - Update #4"
    url: "https://store.steampowered.com/news/app/1488490/view/1846018067933485"
    date: "2026-10-09"
    text: "Steam announcement 'Nivalis Nights - Update #4' (2026-10-09): the menu now identifies recipes with missing ingredients or processors more easily; the venue inventory and transfer window show whether an ingredient is currently used for meals or drinks; player recipe customisations now only apply to venues you own or rent; ingredients set aside for an order and lost when customers left are returned to storage."
  - tier: "Official"
    title: "Nivalis Nights - Update #5"
    url: "https://store.steampowered.com/news/app/1488490/view/1846651706678000"
    date: "2026-10-15"
    text: "Steam announcement 'Nivalis Nights - Update #5' (2026-10-15): greenhouses now have their own storage, with crops spilling over to the other store and the main inventory as a fallback; the vending machine, venue storage and composter now properly take remaining storage space into account; fixed the Beer Soup recipe configuration."
  - tier: "Official"
    title: "Nivalis Nights - Update 6"
    url: "https://store.steampowered.com/news/app/1488490/view/1847286114032742"
    date: "2026-10-22"
    text: "Steam announcement 'Nivalis Nights - Update 6' (2026-10-22): fridges keep food fresh after loading a save, where previously chilled food spoiled twice as fast; Squid Ink no longer spoils, no longer needs a fridge and no longer turns into Rotten Food; recipe fixes now reach older saves; switching between the fridge and cupboard tabs no longer clears the item selected; venues keep running while you sleep."
  - tier: "Official"
    title: "What's on the menu in Nivalis Nights?"
    url: "https://store.steampowered.com/news/app/1488490/view/1840944183779921"
    date: "2026-08-14"
    text: "Developer post 'What's on the menu in Nivalis Nights?' (2026-08-14): dishes need the right recipes and ingredients, as well as the right equipment; the game groups food into meat dishes, fish and seafood, salads, sandwiches, pizza, soups, desserts and snacks; each dish has its own character and some are decidedly more exclusive than others; players unlock new recipes and can customise them; offering the right variety of dishes to customers can make all the difference."
  - tier: "Community"
    title: "Steam review — Moralio, Nivalis Nights first impressions"
    url: "https://steamcommunity.com/id/moraliosan/recommended/1488490/"
    date: "2026-10-28 (accessed)"
    text: "Steam review written as first impressions: 'Ooops, your produce has spoiled, better sprint to the market to buy new, but you're running out of money and your noodles are generating a loss'; the reviewer also reports cooks using fresh ingredients before food that is about to expire and managers wasting money on supplies. Both complaints predate the October patches that changed ingredient ordering and manager buying."
  - tier: "Editorial"
    title: "GameSpace — Nivalis Nights Received Update #3"
    url: "https://gamespace.com/all-articles/news/nivalis-nights-received-update-3/"
    date: "2026-10-05"
    text: "News coverage of Update #3 confirming the rotten food cleanup fix, the Calypso Island trash bins and the composter changes as community-facing quality-of-life work rather than new content."
  - tier: "Editorial"
    title: "Kitchen routine, menu discipline and disposal advice"
    url: "https://nivalisnightswiki.vercel.app/guides/cooking-recipes-rotten-food-guide"
    date: "2026-10-28"
    text: "The station table, the storage rules of thumb, the symptom-to-cause table and the daily routine are our editorial advice built on the official patch notes above; no internal game values are claimed."
---

# Nivalis Nights: Cooking, Recipes & Rotten Food Guide

You never stand at a stove in Nivalis Nights. Your staff turn recipes into meals at the **Food Processor** or the **Drink Machine**, using the ingredients the venue holds and the equipment each recipe requires. That is why cooking problems are usually storage problems: a recipe you cannot make, a stale fridge, or Rotten Food eating the profit line.

This guide covers how meals are actually produced, how ingredients spoil, which storage keeps them alive, and what to do with the Rotten Food once it appears. For the manager side of the same loop — restock targets and daily budgets — read the [Manager & Restock Guide](/guides/manager-restock-guide) instead.

## How cooking works: recipe, ingredients, equipment

The developers describe food as needing three things: **the right recipes, the ingredients, and the right equipment**. A dish is not a thing you assemble by hand — it is a job your staff pick up when the venue holds everything the recipe calls for. [Official]

The official dish categories are **meat dishes, fish and seafood, salads, sandwiches, pizza, soups, desserts and snacks**. The same post is explicit that "each dish has its own character, and some are decidedly more exclusive than others", which is the design reason a short menu beats a wide one early on: harder dishes mean rarer ingredients and more chances to be missing something. [Official]

Recipe mechanics, as far as the patch notes and the developer post confirm:

- You **unlock recipes over time and can customise them**. [Official]
- A recipe customised by you now **only applies to venues you own or rent** — previously one edit leaked across the whole city. [Official]
- The **menu itself flags recipes with missing ingredients or processors**, so a dish that cannot be made is visible before service starts. [Official]
- The **venue inventory and transfer window** show whether an ingredient is currently being used for meals or drinks, which is the fastest way to spot stock that is decorative rather than useful. [Official]

Exact unlock conditions — which recipe comes from which milestone — are not published anywhere official. Treat any list that claims otherwise as **[Unconfirmed]**.

## What each station actually does

| Station | What it produces | Notes |
|---|---|---|
| **Food Processor** | Meals from recipes | The primary cooking station; staff queue "Make meal at Food Processor" |
| **Drink Machine** | Drinks | Same job queue as meals; check the recipe lists a drink, not a dish |
| **Venue storage** | Ingredient and meal stock | Split into normal and refrigerated space |
| **Greenhouse storage** | Your own produce | Added in Update #5; managers can draw from it first |

The staff priority list published in Update #2 explains a lot of behaviour that looks like a bug: **serving a meal outranks processing an ingredient, which outranks making a meal**, and cleaning up meals and storage sits at the bottom of the list behind every manager task. A venue with one cook and a full dining room will therefore let stock sit rather than prep it. Hire for coverage, not for a single hero chef. [Official]

## Why your food rots

Every ingredient carries a shelf life. Rotten Food is what happens when stock outlives it, and there are four separate reasons it shows up:

1. **You bought more than the menu can consume.** This is the classic case, and it is a menu problem before it is a storage problem.
2. **Old stock was not used first.** Until Update #2 the kitchen reached for the freshest items, so older produce aged in place while new deliveries cycled through. The fix makes staff **use older ingredients first**, which cuts rotten food — at a cost the patch notes state plainly: it can **lower the food freshness part of your customer reviews**. [Official]
3. **The fridge was not behaving like a fridge.** Update #6 fixed a bug where chilled food **spoiled twice as fast after loading a save**. If your losses dropped sharply after 22 October, that is why. [Official]
4. **You are running a menu with ingredients no vendor nearby stocks**, so the ones you do find sit unused while the recipe stays red.

One ingredient is exempt: **Squid Ink no longer spoils, no longer needs a fridge, and is no longer converted into Rotten Food** after Update #6. [Official]

## Storage: normal vs refrigerated

Storage is not one pool. Furniture and fixtures contribute capacity in two flavours — **normal storage** and **refrigerated storage** — and since Update #2 decorative furniture with either value configured counts toward the venue's total. [Official]

| Storage piece | Normal space | Refrigerated space |
|---|---|---|
| Base venue storage | Yes | Yes |
| Decorative furniture (configured) | Yes | Yes |
| **Kitchen Buffet** | **100** | **50** |
| Greenhouse storage (Update #5) | Yes | — |

Two practical rules follow from that split:

- **Chilled goods belong in the fridge side.** Refrigeration slows decay rather than stopping it, so the point is to move the fast-spoiling items there, not to park everything.
- **Capacity is shared with everything else.** Update #5 made the composter, the vending machine and venue storage properly respect remaining space, so a full fridge now fails loudly instead of silently swallowing deliveries. [Official]

If you are producing your own ingredients, greenhouse storage is now a third pool, with overflow spilling to the other store and then your main inventory — and managers will use greenhouse stock before buying at market. [Official] The [Greenhouse Guide](/guides/greenhouse-guide) covers the growing side; the [Greenhouse Automation Guide](/guides/greenhouse-automation-guide) covers feeding venues automatically.

## What to do with Rotten Food

Rotten Food is not just an eyesore, it occupies space that your menu needs. There are two ways to get rid of it:

- **Sell it.** Any vendor will take it off your hands. You are disposing of it, not profiting from it.
- **Compost it.** A **Composter** placed at your greenhouse converts Rotten Food into fertilizer for your crops. Community guides price it at roughly 850–1,070 lims depending on which hardware vendor you visit and describe a crop-growth bonus, neither of which is stated in the patch notes — treat the exact figures as **[Community]**.

Two fixes worth knowing about: Update #3 fixed a case where **rotten food could not be cleaned out when large amounts sat in both normal and refrigerated storage at once**, and added the **trash bins Calypso Island was missing**. It also closed an item duplication glitch involving the vending machine and the composter. [Official]

The Cleaner role is what actually clears it — "Cleanup storage" is a staff task, and it is last in the priority list. A venue with no cleaner and a full dining room will sit on spoiled stock indefinitely.

## The daily food routine

A short loop that keeps spoilage down without micromanagement:

1. **Trim the menu before you expand it.** Two to five dishes is the range players report turning venues around; every extra recipe is another ingredient you must keep in stock at the right freshness.
2. **Match the restock target to volume.** Lean on slow venues, Extra on rush-heavy ones — the [Manager & Restock Guide](/guides/manager-restock-guide) breaks down the four targets.
3. **Check the menu for red recipes** once per in-game morning. Missing ingredient or missing processor, both are flagged.
4. **Move fast-spoiling stock to refrigerated space**, and leave the normal shelves for dry goods.
5. **Clear Rotten Food the same day** — sell it, or bank it in the Composter if you farm.
6. **Confirm a Cleaner is scheduled.** No cleaner means no cleanup storage task.

## Symptom-to-cause table

| What you see | Most likely cause | What to do |
|---|---|---|
| Rotten Food piling up | Kitchen uses older stock first, so a big buffer ages at the edges | Cut the menu, drop to a Lean target |
| Recipes greyed out on the menu | Missing ingredient or missing processor | Check the red icon; add the equipment or drop the dish |
| Fresh food, no meals served | Staff queue is stuck on serving | Add kitchen staff or seating throughput |
| Low food freshness in reviews | Older-first cooking after Update #2 | Buy smaller, more often; keep the fridge stocked |
| Fridge seems to do nothing | Pre-Update #6 save behaviour | Update the game; chilled food now survives a save load |
| Ingredients vanish on delivery | Fixed in Update #4 and #5 | Update; overflow now respects remaining space |

## What the patch notes do not tell you

Three things are genuinely undocumented, and no guide should pretend otherwise:

- **Exact spoil timers per ingredient.** No official list exists; community figures vary by patch.
- **Which recipe unlocks at which point.** The developer post confirms recipes unlock and can be customised, not the conditions.
- **The Composter's exact bonus.** The fertiliser conversion is confirmed by the patch notes as a feature; the growth percentage is community-sourced only. **[Unconfirmed]**

Everything else here comes from the official update notes for Updates #2 through #6 and the developers' own food post, linked in the sources below.

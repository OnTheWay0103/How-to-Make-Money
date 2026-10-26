---
title: "Nivalis Nights Manager Guide: Restock Targets & Spoilage"
description: "Nivalis Nights manager guide: why managers overbuy, how the Lean, Normal, Extra and Recent Sales restock targets work, and how to set a daily budget."
category: "Business"
version: "1.0"
updated: "2026-10-26"
date: "2026-10-26"
keywords:
  - "nivalis nights manager"
  - "nivalis nights manager not restocking"
  - "nivalis nights overbuying ingredients"
  - "nivalis nights restock budget"
  - "nivalis nights food spoiling"
  - "nivalis nights supply target"
  - "nivalis nights business losing money"
related:
  - "best-business-guide"
  - "greenhouse-automation-guide"
  - "beginner-guide"
  - "faq"
sources:
  - tier: "Official"
    title: "Nivalis Nights - Update #4"
    url: "https://store.steampowered.com/news/app/1488490/view/1846018067933485"
    date: "2026-10-09"
    text: "Steam announcement 'Nivalis Nights - Update #4' (2026-10-09): per-venue Venue Management Settings for restock targets and a daily restock budget; supply targets Lean (2 of each required ingredient), Normal (5, default), Extra (10) and Recent Sales (meals sold in the last 4 in-game hours, minimum 2); auto-restock objectives only appear when an ingredient reaches zero; persistent objectives may mean the menu uses ingredients no vendor sells or the daily budget is too low."
  - tier: "Official"
    title: "Nivalis Nights - Update 6"
    url: "https://store.steampowered.com/news/app/1488490/view/1847286114032742"
    date: "2026-10-22"
    text: "Steam announcement 'Nivalis Nights - Update 6' (2026-10-22): restock messages now say whether the manager used greenhouse stock, bought from vendors, or both; greenhouse produce is counted at its growing cost instead of market price; fridges keep food fresh after loading a save (previously chilled food spoiled twice as fast); Squid Ink no longer spoils; venues keep running while you sleep."
  - tier: "Official"
    title: "Small Patch - Additional Venue Balancing & Fixes"
    url: "https://store.steampowered.com/news/app/1488490/view/1846651706681865"
    date: "2026-10-16"
    text: "Steam announcement 'Small Patch - Additional Venue Balancing & Fixes' (2026-10-16): late-game venue balancing, including the hunger restore cadence that produces the morning rush."
  - tier: "Community"
    title: "Nivalis Nights update tracker (Update #1 to #6)"
    url: "https://nivalis-nights.com/updates/"
    date: "2026-10-26 (accessed)"
    text: "Third-party update tracker summarising official notes: Update #1 (2026-10-01) improved manager ingredient buying; Update #3 (2026-10-05) made the restock amount match the red Restock Ingredients objective below 10 units, counts queued deliveries, and scales order-to-delivery time from 10 seconds down to 4 seconds at the highest manager level."
  - tier: "Community"
    title: "Nivalis Nights Manager Guide: How Managers Work (Tpose Gaming)"
    url: "https://tposegaming.com/nivalis-nights-manager/"
    date: "2026-10-05"
    text: "Manager guide published 2026-10-01 and updated 2026-10-05: managers unlock at venue level 3; ION LANDS acknowledged managers 'don't work that well right now'; player reports include a level 5 manager buying 30 kahlua but no chicken, and a Reddit player whose noodle bar lost roughly 1,000 lims per day until the menu was cut to four or five dishes."
  - tier: "Community"
    title: "Manager Order Fix (Nexus Mods)"
    url: "https://www.nexusmods.com/nivalisnights/mods/4"
    date: "2026-10-26 (accessed)"
    text: "Mod author analysis of the overbuying cause: the purchase count is reset at each vendor instead of subtracting what was already bought, so a manager buys the full order from every shop. Same-save test reported 37 items bought before the fix versus 19 after."
  - tier: "Community"
    title: "Nivalis Nights: Automate Ramen Noir With a Two-Dish Menu (GamesCreed)"
    url: "https://www.gamescreed.com/blogs/nivalis-nights-automate-ramen-noir-two-dish-menu"
    date: "2026-10-24"
    text: "Player-tested automation setup current to Update 6: keep the menu to two dishes, use the Extra supply target, leave at least 1,000 lims in the venue account for the manager to spend, and switch Use Greenhouse Stock off so the greenhouse feeds other venues."
  - tier: "Editorial"
    title: "Diagnosis workflow and recommendations"
    url: "https://nivalisnightswiki.vercel.app/guides/manager-restock-guide"
    date: "2026-10-26"
    text: "The symptom-to-cause table, the per-venue target recommendations, and the post-Update 6 checklist are our editorial advice built on the official patch notes and the community reports above."
---

# Nivalis Nights Manager Guide: Restock Targets & Spoilage

Your venue is busy, your manager is hired, and the account balance keeps falling. Since launch the most common business complaint in Nivalis Nights has been the same one: **managers buy the wrong things, buy too much of them, and let the surplus rot** while the venue runs short of what the menu actually needs.

Updates #1 through #6 fixed most of it — but they also buried the controls that decide whether your manager is an asset or a drain. This guide covers what managers do, how the four supply targets work, how to set a daily budget, and what still spoils after Update 6. If you are still choosing which venue to open, read the [Best Business Guide](/guides/best-business-guide) first.

## What a manager actually does

A manager handles **restocking**, supports **staff efficiency and morale**, and can draw on **greenhouse logistics** for your venues. That is the whole job. A manager does not set prices, does not cook, and does not fix a bad menu — those stay with you.

Two practical notes before anything else:

- The manager role opens at **venue level 3** (community-reported, consistent across the guides we checked).
- A manager who is not scheduled does nothing. Assign the role to a worker who is actually on shift.

If you hired a manager and see no change at all, check the schedule before you assume the system is broken.

## Why managers overbuy

At launch the purchase logic did not subtract what had already been bought. A mod author who reverse-engineered the loop described it as the count resetting at every vendor, so a manager needing five potatoes bought five from each shop it visited. The same save test recorded **37 items bought with the original behaviour versus 19 after the fix** — roughly double the intended spend.

ION LANDS acknowledged the problem openly, saying managers "don't work that well right now" and that fixing them was a focus. The fixes arrived across four patches:

| Update | Date | What changed for managers |
|--------|------|---------------------------|
| Update #1 | 2026-10-01 | Improved manager ingredient buying |
| Update #3 | 2026-10-05 | Restock amount matches the below-10-units objective and counts queued deliveries; delivery time 10s → 4s at max manager level |
| Update #4 | 2026-10-09 | Per-venue restock targets, daily restock budget, HUD alert toggle |
| Update #6 | 2026-10-22 | Restock messages name the source; greenhouse stock used first; real ingredient costs in venue finances |

One thing the patches did not do is make a higher-level manager smarter. Community reports saw the same waste at levels 1, 3 and 5, so do not treat levelling as the fix.

## The four supply targets — and which to pick

Update #4 put a **Venue Management Settings** panel in every venue's overview. The supply target decides how much of each menu ingredient the manager keeps in stock, and the shopping list uses the same number, so what you pick is exactly what gets bought.

| Target | Holds per required ingredient | Best for |
|--------|-------------------------------|----------|
| **Lean** | 2 | Venues with a short menu, low footfall, or ingredients that spoil fast |
| **Normal** | 5 (default) | Most venues; a safe starting point |
| **Extra** | 10 | High-volume venues with a fast lunch and dinner rush |
| **Recent Sales** | Meals sold in the last 4 in-game hours, minimum 2 | Venues whose demand swings hard by time of day |

The default of 5 is not wrong, but it is one number for every venue. A nightclub that only moves drinks does not need the same buffer as a ramen bar pushing a full menu through two rushes.

Recent Sales is the most interesting option because it self-adjusts. It is also the one that can under-supply you on the first busy day after a quiet one, so pair it with a budget you can actually afford rather than treating it as set-and-forget.

## Set the daily restock budget

The same panel holds a **daily restock budget** — a hard ceiling on what the manager may spend per day. This is the single most useful control in the game for a venue that keeps bleeding money, because it caps the damage while you fix the menu.

Three rules that hold up in practice:

1. **Leave real headroom in the account.** Players running automated venues recommend keeping at least **1,000 lims** in the venue account so the manager can actually buy a day of ingredients.
2. **Budget a day, not a week.** Set the budget to cover one full day of ingredients at your chosen target, then watch the first two days before raising it.
3. **A budget that is too low looks like a bug.** Update #4's own notes say a restock objective that never clears usually means either your menu uses an ingredient no vendor sells, or your daily budget is too small.

## Reading the red Restock Ingredients objective

The objective used to fire constantly and mean nothing. After Updates #3 and #4 it behaves more sensibly:

- It appears when an ingredient's stock drops **below 10 units**, or at zero for the auto-restock objective.
- It **counts deliveries already queued**, so you are not asked to re-order something that is already on its way.
- The notification now fires **after the delivery arrives**, not when the order is placed.
- After Update #6, the message tells you **whether the manager used greenhouse stock, bought from vendors, or both**.

If the objective clears and then immediately returns, the usual answer is that the menu lists an ingredient no nearby vendor stocks. Open the shopping list, look for the red missing-ingredient icon Update #4 added, and either source that item yourself or take it off the menu.

## What still spoils after Update 6

Update #6 fixed the bug that made spoilage feel random: **fridges now keep food fresh after loading a save**. Before that patch, fridges behaved like cupboards once the save reloaded, and chilled food spoiled **twice as fast**. If your ingredient losses dropped sharply after 22 October, that is why.

What has not changed:

- **Older stock can still rot.** Update #2 made staff use older ingredients first, which helps, but a manager holding ten of everything will always be sitting on a tail of ageing stock.
- **Chefs prefer fresh ingredients.** A large buffer therefore spoils at the edges even when the target is being met. This is the argument for Lean on slow venues.
- **Squid Ink is now the exception** — Update #6 made it non-perishable, and older saved Squid Ink is no longer converted into Rotten Food.

The practical counter is menu discipline. Every ingredient you add to a menu is an ingredient the manager must keep at the target level, and every one of those has a shelf life. Players who cut a failing venue down to **two to five dishes** consistently report it turning around; the two-dish ramen setup is the most widely shared version of that.

## Use Greenhouse Stock: on or off?

Update #5 let managers draw from your greenhouse before spending at market, and Update #6 made it smarter: managers now buy only what the greenhouse cannot cover, and greenhouse produce is counted in venue finances at its **growing cost** rather than market price.

Leave it **on** for a venue you want to run as cheaply as possible — it is the cheapest ingredient source you have.

Turn it **off** when one greenhouse is feeding several venues. A greedy venue will drain the greenhouse first and leave your other kitchens buying at market anyway, which makes the numbers harder to read. Splitting the roles — greenhouse for one flagship venue, vendor buying for the rest — keeps each venue's cost line honest.

## Symptom-to-cause table

| What you see | Most likely cause | What to do |
|---|---|---|
| Account drains overnight | Supply target too high for the venue's volume | Drop Lean, set a daily budget |
| Objective never clears | Ingredient no vendor sells, or budget too low | Check the shopping list red icon; raise budget |
| Huge stockpile, empty plates | Target met on the wrong items | Trim the menu; verify the ingredient is on the recipe |
| Food rots in storage | Large buffer plus slow sales | Lower target; add fridge space; shorten menu |
| Manager does nothing | Not scheduled | Assign the role to a working staff member |
| Deliveries pile up at the door | Fixed in Update #4 | Update the game; existing piles now clean themselves up |

## Post-Update 6 checklist

Run this once per venue after any patch and you will catch almost everything:

1. Open the venue overview and confirm the **supply target** matches the venue's volume.
2. Set a **daily restock budget** you can afford for a week of bad trading.
3. Check the shopping list for **red missing-ingredient icons**.
4. Confirm the manager is **scheduled**.
5. Decide **Use Greenhouse Stock** on or off deliberately, not by default.
6. Give the venue two full days before judging the result.

Update #6 also made venues run while you sleep, so a badly configured venue now loses money around the clock instead of pausing when you log off. Set the budget first, then walk away.

Specific mod behaviour, exact manager XP curves, and the internal purchase weights are not published by ION LANDS — anything you see quoted as a precise figure beyond the patch notes should be treated as **[Unconfirmed]** for your build.

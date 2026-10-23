---
title: "How Do Shelves, Multi-Stand Vendors & Staff Days Off Work in Waterpark Simulator?"
description: "Waterpark Simulator 1.0.91+ logistics guide. Unlock shelves in the Park research tab, buy supplies at Caymart, set up multi-stand vendors at 2 stars, and give staff a day off without losing their level."
category: "Management"
version: "1.0.99"
updated: "2026-10-23"
date: "2026-10-23"
keywords:
  - "waterpark simulator shelves"
  - "waterpark simulator multi stand"
  - "waterpark simulator staff day off"
  - "waterpark simulator restock"
  - "waterpark simulator vendor multiple stands"
  - "waterpark simulator caymart supplies"
  - "waterpark simulator staff management"
related:
  - "staff-management-guide"
  - "research-tree-guide"
  - "money-making-guide"
  - "visitor-problems-guide"
sources:
  - tier: "Official"
    title: "Your own logo and labels"
    url: "https://store.steampowered.com/news/app/3293260/view/1842212951303274"
    date: "2026-08-28"
    text: "Steam announcement (2026-08-28): shop supplies and chlorine no longer despawn on game quitting and reload; items dropped on the floor persist after quitting. Link: https://store.steampowered.com/news/app/3293260/view/1842212951303274"
  - tier: "Official"
    title: "Multitasking by the shelves deserves a break"
    url: "https://store.steampowered.com/news/app/3293260/view/1843481262696049"
    date: "2026-09-11"
    text: "Steam announcement (2026-09-11): added shelves, added multi-stand vendor multitasking through Park-tab research, and added staff days off; supplies bought at Caymart jump onto shelves and can be used by the player or staff to restock stands and vending machines."
  - tier: "Official"
    title: "UPDATE 1.0.93 - Patch Notes"
    url: "https://store.steampowered.com/news/app/3293260/view/1844115010488697"
    date: "2026-09-16"
    text: "Steam announcement 'UPDATE 1.0.93 - Patch Notes' (2026-09-16): moved vendor multitasking to unlock at 2 stars, added building-camera speed settings, and changed security breaks between removing bad visitors."
  - tier: "Official"
    title: "UPDATE 1.0.99 - Patch Notes"
    url: "https://store.steampowered.com/news/app/3293260/view/1844751498235216"
    date: "2026-09-29"
    text: "Steam announcement 'UPDATE 1.0.99 - Patch Notes' (2026-09-29): reduced security break time after dealing with bad guests and made security active from park opening."
  - tier: "Community"
    title: "Waterpark Simulator Staff Guide: Hire, Assign, and Upgrade"
    url: "https://waterparksimulatorgame.wiki/guides/staff/"
    date: "2026-10-23 (accessed)"
    text: "Community staff guide (accessed 2026-10-23): documents the 1.0.91 multi-stand research, the 1.0.93 move to 2 stars, the day-off button beside Fire, the early-day restriction, and the need to assign a vendor to each stand manually."
  - tier: "Community"
    title: "Staff issues - Waterpark Simulator Steam Discussions"
    url: "https://steamcommunity.com/app/3293260/discussions/0/603040822196384048/"
    date: "2026-10-23 (accessed)"
    text: "Steam Community discussion thread on staff behaviour (accessed 2026-10-23), used as a cross-check for the common confusion between hiring staff and assigning them to a specific stand."
  - tier: "Editorial"
    title: "Shelf layout and daily staff workflow"
    url: "https://waterparksimulatorwiki.vercel.app/guides/shelves-multistand-staff-guide"
    date: "2026-10-23"
    text: "The shelf-per-cluster layout, restock routine and day-off use cases are our editorial recommendations; exact vendor stat thresholds for multitasking are not published and are marked [Unconfirmed]."
---

# How Do Shelves, Multi-Stand Vendors & Staff Days Off Work in Waterpark Simulator?

Waterpark Simulator's 1.0 launch made you do everything by hand: buy supplies, carry boxes, restock every stand, and hire a separate vendor for each counter. The September updates added three quality-of-life systems that change that loop — **shelves**, **multi-stand vendors**, and **staff days off** — and they interact in ways the patch notes do not spell out.

This guide covers how each system works, how to unlock it, and how to set up a park that restocks itself. It assumes you already know the staff roles and hiring basics; if not, read the [Staff Management Guide](/guides/staff-management-guide) first.

## Shelves: the end of hotdog boxes in the sand

Shelves were added in the **1.0.91 update (September 11, 2026)**. Before shelves, supplies you bought at Caymart sat on the ground until a staff member picked them up — or until they despawned. The August 28 patch had already stopped dropped supplies from despawning on quit [Official], but that only turned the floor into a permanent warehouse.

The shelf loop is simple:

1. **Buy supplies at Caymart.** Hotdog boxes, drinks and other stand stock all use the same supply flow.
2. **Carry the supplies close to a shelf and drop them.**
3. **The boxes jump onto the shelf automatically.** You do not need to open a menu or place each box by hand.
4. **You or a staff member restock a stand or vending machine from the shelf.**

The important detail is that shelves are a **buffer**, not a vendor. A full shelf does not sell anything. It shortens the distance between storage and the counter, which is exactly what a vendor needs when three stands run out at the same time.

### How to unlock shelves

Shelves are unlocked **early in the Research Table under the Park tab**. If you have been dumping research points into attractions, check the Park tab before your next build. The exact research-point cost is **[Unconfirmed]** and may change between patches, so read the node's tooltip in your build.

### Where to put them

Our recommendation is one shelf per stand cluster, placed behind or beside the counters rather than in a central warehouse. A vendor's restock trip is walking time; if the shelf is on the far side of the park, multi-stand vendors spend the whole day walking instead of selling.

For a food court with three stands, place one shelf that all three can reach. For a scattered layout, place two smaller shelves rather than one large one. The goal is not maximum storage — it is minimum travel distance.

## Multi-stand vendors: one employee, several counters

At launch, every staffed stand needed its own vendor. The 1.0.91 update added **vendor multitasking** through a research node in the **Park tab**, letting one vendor cover multiple stands. The 1.0.93 update then **moved the unlock to 2 stars**, making it available much earlier than the original late-tree placement.

How it works in practice:

- **Unlock the multitasking research** in the Park tab once your park reaches **2 stars**.
- **Assign the vendor to each stand individually.** Each stand has a nameplate or plaque; assign the vendor there. A stand with no vendor sells nothing, no matter how many other stands that vendor covers.
- **Each assigned stand shows that vendor's nameplate**, which is the quickest way to confirm coverage.
- **Only the best vendors can handle the workload**, according to the developers. The exact stat threshold is **[Unconfirmed]**; treat a vendor with strong selling stats as the safe choice rather than testing a low-stat hire on four counters.

The common mistake is assuming that hiring a vendor automatically assigns them. Building, hiring and assigning are three separate actions. If a stand shows "Unattended," the fix is the nameplate, not another hire.

### How many stands should one vendor cover?

Start with **two adjacent stands**, confirm the vendor keeps both stocked and selling through a busy afternoon, then add a third. The patch notes do not publish a hard limit or a throughput penalty, so the practical limit is observed behaviour: queues forming, empty counters, or a vendor who never reaches the second stand.

Do not build stands before demand exists. Every staffed stand is a headcount commitment, and a vendor covering five empty counters is not efficiency — it is a park with too many counters. Add a stand when the queue at the existing one is consistently long, not because the blueprint looks symmetrical.

## Staff days off: remove someone without firing them

The day-off feature also arrived in **1.0.91**. It is the answer to a problem the game did not previously solve: you want a staff member gone for a day, but you do not want to lose their level by firing them.

How to use it:

1. Open **Staff Management**.
2. Select the employee.
3. Press **Day off**, the button next to **Fire** under their stat block.

Rules confirmed by the developers and community documentation:

- **The employee is unpaid for the day.** You save the wage.
- **It is only available in the early part of the day.** You cannot work someone all day and then give them a free evening.
- **The employee keeps their level.** Firing does not; this is the reason to use day off instead.
- **It is useful for quests.** If a staff member keeps completing a task before you can do it yourself, a day off clears them out of the way without a permanent loss.

Days off are also a cash-flow tool. On a quiet weekday, sending one redundant vendor home cuts wages without cutting your ability to serve the guests who are actually there. On a event day, bring them back.

## A daily workflow that uses all three systems

A simple routine that keeps the park running:

1. **Morning:** check each shelf. If a cluster is low, buy supplies at Caymart and drop them near the shelf.
2. **Before opening:** confirm every stand has a vendor nameplate. Reassign any stand that lost its vendor.
3. **Midday:** check the multi-stand vendor's route. If one stand is consistently empty, split the assignment or add a second vendor.
4. **Quiet period:** give a redundant vendor a day off early in the day, not at the last hour.
5. **Closing:** note which shelves emptied fastest. That cluster needs more storage or a closer Caymart run tomorrow.

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Supplies stay on the ground | Shelf not unlocked, or boxes dropped too far from it | Unlock shelves in the Park research tab and drop supplies beside the shelf |
| Staff will not restock | Stand has no vendor, or the shelf is empty | Assign a vendor at the stand nameplate; refill the shelf from Caymart |
| One vendor ignores the second stand | Multitasking not unlocked, or vendor stats too low | Reach 2 stars and unlock the Park-tab node; use a stronger vendor |
| Day off button is greyed out | It is too late in the day | Give the day off earlier, before the staff member has worked a full shift |
| Stand sells nothing | No vendor assigned | Click the stand plaque and assign a vendor |
| Shelf stock disappears | Supplies were dropped away from a shelf | Drop boxes directly beside the shelf so they snap on |

## Related guides

- [Staff Management Guide](/guides/staff-management-guide) — roles, wages, hiring order
- [Research Tree Guide](/guides/research-tree-guide) — where the Park-tab nodes sit
- [Money-Making Guide](/guides/money-making-guide) — turning a well-run park into profit
- [Visitor Problems Guide](/guides/visitor-problems-guide) — why guests leave unhappy even when the stands are staffed

*Verified against official 1.0.91 (2026-09-11), 1.0.93 (2026-09-16) and 1.0.99 (2026-09-29) patch notes. Research costs, vendor stat thresholds and maximum multi-stand coverage are not published and are marked [Unconfirmed] where relevant.*

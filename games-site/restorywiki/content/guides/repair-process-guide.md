---
title: 'Repair Process & Mechanics — Disassemble, Clean, Solder, Reassemble'
description: 'Complete repair process guide for ReStory: Chill Electronics Repairs — part conditions (clean/dirty/broken), the notepad system, cleaning techniques, the soldering mini-game, reprogramming, assembly order, and the hardest repairs (Nony Goman, tiny phone boards, stuck cleaning, stripped screws).'
keywords: ['restory repair process', 'restory how to repair', 'restory how to clean', 'restory soldering', 'restory soldering guide', 'restory reprogram', 'restory notepad', 'restory assembly order', 'restory part conditions', 'restory hardest repairs', 'restory nony goman', 'restory stripped screws']
category: Mechanics
version: '1.0.0'
updated: '2026-08-08'
related:
  - beginner-guide
  - tool-equipment-guide
  - device-database
  - cleaning-guide
  - reprogramming-guide
  - achievement-guide
sources:
  - tier: "Official"
    text: "The repair loop — disassemble, inspect, clean, repair or replace, reassemble, return — matches the official Steam store description of the repair gameplay"
  - tier: "Community"
    text: "Part-condition tracking, the notepad system, soldering mini-game and known trouble spots are community-documented from the launch build"
  - tier: "Editorial"
    text: "The workflow order and trouble-spot advice are our recommendations"
---

## Overview

Every device in ReStory follows the same repair loop:

**Disassemble → Inspect → Clean → Repair/Replace → Reassemble → Return**

Understanding the *mechanics* of each stage — part conditions, the notepad, and the mini-games — is what separates a profitable shop from a broke one. This guide covers the full loop, the soldering mini-game in depth, and the known trouble spots that make certain repairs genuinely hard.

---

## Stage 1: Disassembly

- Use the **correct screwdriver** for every screw. Wrong sizes strip screws, which complicates the repair.
- Remove screws in a **consistent order** and store components neatly.
- Use **tweezers** for delicate cables — especially in phones, which are packed with tiny circuit boards and keypad work.
- The game rewards patience, not speed.

---

## Stage 2: Inspection — the Notepad

The **To-Do List / notepad** on the right side of the screen is your most important tool:

- Tracks every part's **condition**: clean, dirty, or broken
- Lists the **assembly order** for reassembly
- Can **highlight parts you can't find**
- The **spacebar gives a hint**

**Golden rule:** before ordering any replacement part, check the notepad — the "missing" part may be dirty, sitting elsewhere on the table, or still inside the Sonic Bath.

---

## Stage 3: Cleaning

Most "broken" symptoms in ReStory are actually dirt.

| Cleaning Method | Use For | Cost |
|----------------|---------|------|
| **Brush** | Routine cleaning of individual parts | Free (reusable) |
| **Canned air** | Large shells, panels, awkward pieces | Consumable — use sparingly |
| **Sonic Bath (ultrasonic)** | Up to 3 parts at once, ~30 seconds | Electricity/time |

**Technique notes:**
- Cleaning progress only increases when the brush actually **touches grime** — rotate parts to find hidden dirt on edges, backs and connectors.
- Keep dirty and clean parts in **separate zones** of the workbench.
- If cleaning is stuck at 0%, the pointer isn't touching the component — move it directly over the dirt and watch the percentage.
- **Clean before you replace anything.** Dirt, corrosion and sticky buttons cause symptoms that look far worse than they are.

For the full cleaning toolkit — hidden dirt, workbench zones, the stuck-cleaning bug and night grinding — see the [Cleaning Guide](/guides/cleaning-guide).

---

## Stage 4: Repair & Replacement

After cleaning, some parts are genuinely broken:

- **Soldering iron** — repairs broken circuit boards and connections. The soldering station is unlocked in the full game (visible but locked in the demo). Jobs requiring soldering only appear after unlock — see [Soldering in Depth](#soldering-in-depth) below.
- **Replacement parts** — from stock (salvaged devices), the marketplace, or licensed manufacturer orders (exact part, guaranteed).
- **Reprogramming** — a rhythm-style mini-game (press keys to fill a bar) that fixes software issues. Unlocks "Hacking 101" on first use. **Not profitable to add unprompted** — only do it when the order requires it. Full details in the [Reprogramming Guide](/guides/reprogramming-guide).

---

## Soldering in Depth

Soldering is one of the two skill-based repair steps in ReStory (alongside reprogramming). When a device's problem is a **broken circuit board** — a snapped wire, a cracked connection, a lifted pad — no amount of cleaning will fix it. You heat up the soldering iron and reconnect the joint.

The good news: soldering is deliberately slow and meditative, matching the game's chill philosophy. "Slowly moving a soldering iron over parts of a circuit board" is how reviewers describe the loop. It's not a twitch test — it's a patience test.

### Unlocking the Soldering Iron

**The soldering station is not available from the start.** In the demo it is visible but locked; in the full game you unlock it as part of normal progression. Buy it through the shop computer (the screwdriver menu in the "Gozilla Fairfox" browser) and upgrade it when affordable — see [upgrade priority](#upgrade-priority) below.

**Key consequence (community-confirmed):** the game only starts generating soldering jobs **after** you own the tool. You will not receive a board-repair order you cannot complete — so unlocking the soldering iron early does not create pressure, it creates income.

### When Soldering Is Needed

| Device Type | Soldering Likelihood | Notes |
|-------------|:---:|-------|
| Consoles (Atari 2600, Nony PlayMachine) | High | Board-heavy internals; classic first soldering jobs |
| Handheld consoles (Atari Lynx, Patento BS, Pokia Njoy) | Medium-High | Tiny boards, cramped access — tweezers mandatory |
| Phones (Pokia 3310, Autorolla Razor) | Medium | Keypad membranes are usually just dirty; boards fail less often |
| Simple devices (Walkie-talkie, Unicorp 99L, Eggotchi) | Low | Few boards, few broken joints |

The notepad is the authority: it flags parts as **broken** vs. **dirty**. Only genuinely broken parts need the iron.

### Technique: Clean Board Repairs

1. **Confirm with the notepad** before touching the iron — a part that only needs cleaning will not benefit from solder.
2. **Disassemble carefully** to reach the board. Remove screws in a consistent order and lay components out in layers so reassembly follows the same path in reverse.
3. **Take the repair slowly.** The game rewards steady, deliberate iron movement over speed.
4. **Reconnect the broken joint(s)** — snapped wires and cracked connections are the two patterns reported in the launch build.
5. **Reassemble in notepad order.** If a component won't install, a part listed before it is still missing.

**Common mistakes:**
- Soldering a part that was merely dirty (wasted time, unchanged result).
- Rushing the disassembly and stripping screws, which turns a board job into a 20-minute headache.
- Skipping the notepad's assembly order during rebuild.

### Upgrade Priority

Upgraded soldering tools are among the most valuable early-mid game purchases. Each upgrade only saves seconds per repair — but board repairs recur across dozens of jobs, and those seconds compound exactly when your workshop gets busy.

Recommended order (community consensus from launch-week testing):

1. **Brush upgrades** — used in literally every job
2. **Licenses** — the real progression system; see the [License System Guide](/guides/license-guide)
3. **Screwdriver upgrades** — speed on every disassembly
4. **Soldering iron upgrades** — speed on board repairs
5. **Sonic Bath** — frees your hands during long repairs

### The Achievement

| Achievement | Condition |
|-------------|-----------|
| **How Did I Do This?** | Repair any part using the soldering iron |

This unlocks on your **first** successful solder — no grinding needed. It is one of the earliest story-adjacent achievements and will arrive naturally during your first console repair.

---

## Soldering vs. Reprogramming: Know Which Tool to Reach For

Players frequently confuse the two skill steps because both are "the thing that fixes the part cleaning can't."

| | Soldering | Reprogramming |
|---|-----------|---------------|
| **Fixes** | Broken circuit boards, snapped wires, cracked connections | Software faults — corrupted firmware, bad updates, locked devices |
| **Tool** | Soldering iron (unlockable) | Reprogramming kit / Unlock-ToolKit CD |
| **Feel** | Slow, deliberate iron movement | Rhythm-style mini-game — press keys to fill a bar |
| **Achievements** | **How Did I Do This?** | **Hacking 101**, **11001** (25 devices) |
| **Profit value** | Required for board repairs — normal income | Cosmetic/creative — does not noticeably raise resale value |

The notepad distinguishes the two before you touch a tool: hardware problems appear as **broken** parts, software problems surface as a **software-fault flag** on the device. If you are unsure, check the notepad before spending time on the bench.

---

## Stage 5: Reassembly

- Follow the **notepad's assembly order** exactly.
- If a component won't install, a piece listed before it is still missing.
- After assembly the device is **auto-packed** — but you must place the package **back on the counter** so the courier picks it up. No counter placement = no payment.

---

## Stage 6: Delivery & Payment

- Walk-in customers: hand over the device at the counter.
- Online orders: courier picks up packed devices from the counter; payment + reviews arrive after pickup.
- Reviews build your reputation (**First Reviews**, **Getting Popular** achievements).

---

## The Repair Process in One Table

| Stage | Action | Key Tools | Common Mistake |
|-------|--------|-----------|----------------|
| 1. Disassemble | Unscrew case, remove parts | Screwdrivers, tweezers | Rushing → stripped screws |
| 2. Inspect | Check notepad for conditions/order | Notepad, spacebar hint | Skipping the notepad |
| 3. Clean | Brush / air / sonic bath every part | Brush, canned air, Sonic Bath | Buying parts for dirty ones |
| 4. Repair | Solder boards, replace broken parts | Soldering iron, parts stock | Replacing cleanable parts |
| 5. Reassemble | Install in notepad order | Notepad | Ignoring assembly order |
| 6. Return | Package on counter for pickup | Counter | Forgetting to place package |

---

## Hardest Repairs & Troubleshooting

ReStory is chill — but some jobs will test your patience. These are the launch build's known trouble spots and how to beat them, based on community testing and reviews.

### The Nony Goman (Cassette Player) — Hardest Launch Device

The Nony Goman is **the most involved job in the launch catalog**: the cassette mechanism packs a lot of small moving parts.

1. **Set aside bench space** — don't take other complex jobs while it's open.
2. **Organize parts by zone** — keep the mechanism parts separate from case screws.
3. **Use the notepad's assembly order religiously** — moving parts must go back in sequence.
4. **Clean every gear and roller** — cassette players fail on sticky mechanisms more than dead electronics.
5. **Check the notepad before ordering** — a "missing" part may be on the table or in the Sonic Bath.

### Phones — Tiny Boards & Keypad Work

Pokia 3310, Pokia Njoy, Autorolla Razor and Eggotchi lean on **tiny circuit boards and keypad work**:

- **Tweezers are mandatory** for flex cables.
- A good **magnifier upgrade** makes board work dramatically easier.
- Rotate parts when cleaning — hidden dirt on edges and connectors causes intermittent "dead" keypads.
- Buttons that don't work are usually **sticky dirt**, not broken membranes — clean first.

### Cleaning Stuck at 0%? Here's the Fix

The classic frustration: you brush a part, hear the sound, and the percentage never moves.

**The cause:** the pointer isn't actually touching the grime — the game may play the sound anyway.

**The fix:** move the brush pointer directly over the visible dirt and watch the percentage. Rotate the part to find dirt on edges, backs and connector pins. If a part is stuck at 74–95% clean, that is a different, rarer issue — see the [Cleaning Guide](/guides/cleaning-guide) for the full workaround list.

### Stripped Screws — Prevention & Handling

Rushing disassembly causes stripped screws, which complicate repairs.

- Use the **correct screwdriver** for every screw.
- Remove screws in a **consistent order**.
- If a screw won't turn, don't force it — switch tools and approach from a different angle.
- The notepad's hint (spacebar) can point you at what you're missing.

### The Missing-Part Trap

A part "won't install" or "can't be found"? Before ordering a replacement:

1. **Check the notepad** — it lists assembly order and can highlight parts you can't find.
2. **Scan the workbench** — it may be sitting in a separate zone.
3. **Check the Sonic Bath** — parts in a cleaning cycle temporarily appear missing.

### Order Queue Management (The Real Hard Mode)

The hardest thing in ReStory isn't any single device — it's a **cluttered bench**:

- Similar-looking devices get mixed up; separate projects physically.
- Open orders occupy workspace — accept only what you can finish in the 3-day window.
- Mix quick cleaning jobs with repairs that use stock parts.
- Buy **extra storage trays and shelves** to keep multiple projects organized.

### Quick Reference: Trouble Spots

| Problem | Solution |
|---------|----------|
| Nony Goman mechanism | Slow, organized, clean every moving part |
| First soldering job | Unlock station, use upgraded iron, check notepad |
| Phone keypads dead | Clean sticky dirt, don't buy membranes first |
| Cleaning stuck at 0% | Pointer must touch grime; rotate the part |
| Stripped screws | Correct driver, consistent order, don't force |
| Part "missing" | Notepad → workbench → Sonic Bath |
| Bench chaos | Fewer open orders + storage trays |

---

## Mechanics You Should Know

- **Online orders:** up to 11 per day from the shop computer, each with a **3-day deadline**.
- **The bicycle** ends your day, saves progress, and starts a new day. Closing the **shutter** stops walk-ins (and courier deliveries).
- **Part conditions** are deterministic once inspected — the notepad never lies about broken vs. dirty.
- **No strict time pressure** — work at your own pace.
- **Soldering open questions (unverified):** the exact soldering interaction (iron temperature, joint quality feedback) is reported differently by different players; as of the launch build the community has not mapped a failure state — soldering appears to be a **no-fail, time-only** step. Whether certain device types require multiple soldering passes on a single board is also unconfirmed — most reports describe a single broken joint per board.

---

## Related Guides

- [Tools & Equipment Catalog](/guides/tool-equipment-guide) — every tool in detail
- [Beginner Guide](/guides/beginner-guide) — first-day workflow
- [Device Database](/guides/device-database) — which devices stress which mechanics
- [Cleaning Guide](/guides/cleaning-guide) — the full cleaning toolkit
- [Reprogramming Guide](/guides/reprogramming-guide) — the software-fix counterpart to soldering
- [Achievement Guide](/guides/achievement-guide) — soldering and repair achievements in context

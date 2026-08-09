---
title: 'Soldering Guide — Master the Board Repair Mini-Game'
description: 'How soldering works in ReStory: Chill Electronics Repairs — unlocking the soldering iron, which repairs need it, technique tips for clean board fixes, upgrade priority, and the How Did I Do This? achievement.'
keywords: ['restory soldering', 'restory soldering guide', 'restory soldering iron', 'restory how to solder', 'restory board repair', 'restory soldering upgrade', 'restory how did i do this achievement', 'restory circuit board repair']
category: Mechanics
version: '1.0.0'
updated: '2026-08-09'
related:
  - repair-process-guide
  - tool-equipment-guide
  - tricky-repairs-guide
  - achievement-guide
---

## Overview

Soldering is one of the two skill-based repair steps in ReStory (alongside reprogramming). When a device's problem is a **broken circuit board** — a snapped wire, a cracked connection, a lifted pad — no amount of cleaning will fix it. You heat up the soldering iron and reconnect the joint.

The good news: soldering is deliberately slow and meditative, matching the game's chill philosophy. "Slowly moving a soldering iron over parts of a circuit board" is how reviewers describe the loop. It's not a twitch test — it's a patience test.

---

## Unlocking the Soldering Iron

**The soldering station is not available from the start.** In the demo it is visible but locked; in the full game you unlock it as part of normal progression.

**Key consequence (community-confirmed):** the game only starts generating soldering jobs **after** you own the tool. You will not receive a board-repair order you cannot complete — so unlocking the soldering iron early does not create pressure, it creates income.

Buy it through the shop computer (screwdriver menu in the "Gozilla Fairfox" browser) and upgrade it when affordable — see [upgrade priority](#upgrade-priority) below.

---

## When Soldering Is Needed

| Device Type | Soldering Likelihood | Notes |
|-------------|:---:|-------|
| Consoles (Atari 2600, Nony PlayMachine) | High | Board-heavy internals; classic first soldering jobs |
| Handheld consoles (Atari Lynx, Patento BS, Pokia Njoy) | Medium-High | Tiny boards, cramped access — tweezers mandatory |
| Phones (Pokia 3310, Autorolla Razor) | Medium | Keypad membranes are usually just dirty; boards fail less often |
| Simple devices (Walkie-talkie, Unicorp 99L, Eggotchi) | Low | Few boards, few broken joints |

The notepad is the authority: it flags parts as **broken** vs. **dirty**. Only genuinely broken parts need the iron.

---

## Technique: Clean Board Repairs

1. **Confirm with the notepad** before touching the iron — a part that only needs cleaning will not benefit from solder.
2. **Disassemble carefully** to reach the board. Remove screws in a consistent order and lay components out in layers so reassembly follows the same path in reverse.
3. **Take the repair slowly.** The game rewards steady, deliberate iron movement over speed.
4. **Reconnect the broken joint(s)** — snapped wires and cracked connections are the two patterns reported in the launch build.
5. **Reassemble in notepad order.** If a component won't install, a part listed before it is still missing.

**Common mistakes:**
- Soldering a part that was merely dirty (wasted time, unchanged result).
- Rushing the disassembly and stripping screws, which turns a board job into a 20-minute headache.
- Skipping the notepad's assembly order during rebuild.

---

## Upgrade Priority

Upgraded soldering tools are among the most valuable early-mid game purchases. Each upgrade only saves seconds per repair — but board repairs recur across dozens of jobs, and those seconds compound exactly when your workshop gets busy.

Recommended order (community consensus from launch-week testing):

1. **Brush upgrades** — used in literally every job
2. **Licenses** — the real progression system; see the [License System Guide](/guides/license-guide)
3. **Screwdriver upgrades** — speed on every disassembly
4. **Soldering iron upgrades** — speed on board repairs
5. **Sonic Bath** — frees your hands during long repairs

---

## The Achievement

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

See the [Reprogramming Guide](/guides/reprogramming-guide) for the full software-fix walkthrough.

---

## Known Details & Open Questions

- The exact soldering interaction (iron temperature, joint quality feedback) is reported differently by different players; as of the launch build the community has not mapped a failure state — soldering appears to be a **no-fail, time-only** step. (待验证)
- Whether certain device types require multiple soldering passes on a single board is unconfirmed (待验证) — most reports describe a single broken joint per board.

---

## Related Guides

- [Repair Process & Mechanics Guide](/guides/repair-process-guide) — soldering inside the full repair loop
- [Tools & Equipment Catalog](/guides/tool-equipment-guide) — soldering iron pricing and purchase order
- [Hardest Repairs Guide](/guides/tricky-repairs-guide) — the devices where board work gets fiddly
- [Achievement Guide](/guides/achievement-guide) — the full achievement list

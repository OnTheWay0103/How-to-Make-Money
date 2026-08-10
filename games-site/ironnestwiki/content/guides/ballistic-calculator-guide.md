---
title: "Ballistic Calculator Guide — Iron Nest Wiki"
description: "Every input on the IRON NEST ballistic calculator explained: distance, bearing, shell type, powder charges, target classification, how to read the firing card — plus wind, weather and short/over corrections."
category: "Ballistics"
version: "1.0"
updated: "2026-08-11"
keywords:
  - "iron nest ballistic calculator"
  - "iron nest firing solution"
  - "iron nest powder charges"
  - "iron nest elevation guide"
  - "iron nest how to aim"
  - "iron nest wind correction"
  - "iron nest long range"
related:
  - "target-spotting-guide"
  - "loading-aiming-guide"
  - "shell-types-ammo-guide"
  - "reconnaissance-guide"
  - "systems-failure-guide"
---

# Ballistic Calculator Guide

> Launch Version / Updated: August 11, 2026

The ballistic calculator is the machine that turns map measurements into gun settings. You give it five inputs; it gives you a firing card with the rotation and elevation for the shot. You never compute a trajectory yourself — the machine does it. Your job is to feed it correct data, in the correct order.

This guide covers the basic five-input firing solution first, then what the calculator does NOT account for: wind and weather, the correction workflow for "short" and "over" reports, and how to shoot reliably at the very edge of the gun's range. **Correction figures are community-reported** — the game does not publish its full ballistics table, so treat them as starting points verified by operators, not official numbers.

---

## The Five Inputs

### 1. Distance to Target

Rotate the wheel until the counter matches the range from your clipboard exactly. This is the range measured from the **Iron Nest's own position** — not from the spotter. If your clipboard holds the spotter-to-target range, draw the Iron Nest-to-target line on the map first (red pencil) and use that value.

### 2. Bearing to Target

Enter the bearing with the large (coarse) and small (fine) wheels. Match the value on your clipboard digit for digit. A one-degree error at 5 km is roughly a 90-meter miss — double-check.

### 3. Shell Type

Select the ammunition you intend to fire. High Command sometimes dictates the ordnance for a mission; otherwise pick from your requisition stock. Heavier shells arc higher and drop more — the calculator accounts for this, so never "help" it by adjusting elevation manually.

### 4. Powder Charges

Select the number of charges required for the target's distance using the chart on the machine. Fewer charges = shorter, lower-arcing shot; more charges = longer range. **The charge count must match exactly what you load into the gun** — the calculator assumes the charge count you enter.

### 5. Target Classification

Choose the target type: **Infantry, Recon, Artillery, Mechanized, Fire Director, or Supply Cache**. The classification can affect the recommended shell and helps the calculator refine the solution for the target's size and hardness.

---

## Generating the Firing Card

Pull the lever to calculate. The machine prints a **firing card** with two values:

- **Gun elevation** — shown lower-left (the angle to set on the elevation console)
- **Gun rotation** — shown upper-right (the bearing to set on the rotation controls)

The card attaches to your clipboard automatically. Take both values to the gun stations — do not eyeball them from across the room.

---

## The Shot Cycle

1. **Rotation first.** Rotating 360° takes time — start the rotation before you fine-tune elevation.
2. **Elevation after loading.** The elevation console stays locked until the gun is loaded, and resets to zero after every shot.
3. **Fire, observe, correct.** Watch the radio report: a red skull means the kill; a report of "short" or "over" tells you how to correct the next shot. Shells can take a long time in flight at extreme range — never fire a correction before the previous round has landed.

---

## Corrections — MOA and the Short/Over Workflow

Mid-game corrections arrive in **Minute of Angle (MOA)** terms, and the game's dials use click-steps. MOA is an angular unit that scales with range: a correction that moves the impact a little at close range moves it much more at long range. That is why you should always correct in **clicks/MOA, never in meters** — the same click count does the same angular job at every distance.

From Phase 2 onward, spotters radio impact corrections: *"Impact 100 meters short, 50 meters left."* The fastest path back on target is **not** a new firing card:

1. **Convert the report to dial terms.** The short/over distance at your current range converts to a dial correction — do not recalculate from scratch.
2. **Apply it to the live dials** — elevation for short/over, rotation for left/right. The arrow keys at the elevation console are the precision correction tool; use them instead of the coarse lever.
3. **Wait for the round to land before correcting again.** A "correction" fired before the previous round lands is a shot at a ghost.
4. **Confirm with a second source** — a second spotter or a star shell — before treating the corrected shot as the kill.

Community practice notes on dial corrections (approximate, not official):

| Situation | Community Practice |
|---|---|
| Heavy shells at long range | Drop more than light shells — dial up extra elevation beyond the card |
| Dense fog | Add elevation — fog pushes impacts short |
| Strong crosswinds | Hold rotation into the wind, and expect elevation loss on light rounds |

---

## Wind & Weather — The Weather Station Module

From Chapter 3, the **Weather Station Module** forces environmental ballistics on every long shot. Two effects matter:

### Crosswind

Pushes the shell sideways. The strength of the effect depends on the shell:

- **Heavy projectiles** (HE, AP) cut through wind but drop more aggressively — expect to add elevation.
- **Light rounds** (S.T.A.R. illumination) get blown significantly off target if you ignore wind — a star shell at extreme range in a gale may illuminate nothing at all.

Community practice: in steady crosswind, hold rotation **into the wind** before fine-tuning with the wheel. Treat the weather readout as part of the firing solution, not decoration.

### Barometric Pressure

Low barometric pressure means thinner air — **less drag**, so shells fly farther and flatter than the calculator predicts. Community-reported: with a low-pressure system over the map, reduce elevation slightly below the card's value or the shell overflies. High pressure does the opposite — add a touch of elevation. The effect grows with range.

---

## Night, Fog & Limited Visibility

- **Fog** is an elevation problem: dense fog pushes impacts short, so add elevation (community-reported).
- **Night** is a visibility problem: fire a **S.T.A.R. illumination** shell first — it reveals positions across a huge area and does not start counter-battery fire (see the [reconnaissance guide](/guides/reconnaissance-guide)). Time it so the reveal and the kill shell overlap.
- In both conditions, treat spotter reports as looser — the error budget below applies.

---

## Spotter Reliability at Range

Spotter reports carry error that **grows with distance** (community-measured):

- **Short range** — spotters are effectively authoritative; trust the report.
- **Mid range** — declining; treat reports as good estimates.
- **Beyond extreme range** — treat reports as advisory only.

Past the mid-range band, prefer triangulation from **multiple** observers, or a star-shell reveal, over any single report — and expect to do the short/over correction dance on the first round.

---

## Extreme-Range Shooting (10–20 km)

At the far edge of the envelope everything gets worse at once: longer flight time, larger drop, more wind exposure, and less reliable spotter data. The extreme-range playbook:

1. **Verify with illumination or recon imagery first** — never burn a long flight on a guess.
2. **Dial the heavy-shell drop corrections** rather than trusting the basic card alone.
3. **Fire one ranging shot, wait for its full flight time, correct from the impact** — the ranging-shot correction works at any range.
4. **Mind the barrel** — extreme-range firing is usually slow fire anyway, which suits the heat ceiling (see [systems & failures](/guides/systems-failure-guide)).

---

## The Long-Shot Checklist

- [ ] Weather station read — crosswind? pressure? fog?
- [ ] Shell flight time estimated — corrections fired only after the previous round lands
- [ ] Multi-observer confirmation for anything beyond extreme range
- [ ] Heavy-shell drop correction dialed in addition to the card
- [ ] Windage held into the wind for light rounds
- [ ] One ranging shot, one correction, one kill

---

## Common Calculator Mistakes

| Mistake | Result |
|---|---|
| Entering spotter-to-target range instead of Iron Nest-to-target range | Systematic overshoot or undershoot |
| Wrong powder charge count vs. what is loaded | Shell falls short or overflies — and you cannot unload it |
| Misreading the bearing (180° off) | A clean miss into friendly territory |
| Setting elevation while the calculator card is stale | Firing an old solution at a new target |

---

## The 30-Second Rule

Before you pull the lever, run the check: clipboard range matches the map, bearing matches the target token, shell type matches the load, charges match the chart, classification matches the orders. **Thirty seconds of verification saves five minutes of reloading.** For the mechanical side of the shot, see the [loading & aiming guide](/guides/loading-aiming-guide).

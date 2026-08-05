---
title: "Ballistic Calculator Guide — Iron Nest Wiki"
description: "Every input on the IRON NEST ballistic calculator explained: distance, bearing, shell type, powder charges, target classification, and how to read the firing card."
category: "Ballistics"
version: "1.0"
updated: "2026-08-06"
keywords:
  - "iron nest ballistic calculator"
  - "iron nest firing solution"
  - "iron nest powder charges"
  - "iron nest elevation guide"
  - "iron nest how to aim"
related:
  - "target-spotting-guide"
  - "loading-aiming-guide"
  - "shell-types-ammo-guide"
---

# Ballistic Calculator Guide

> Launch Version / Updated: August 6, 2026

The ballistic calculator is the machine that turns map measurements into gun settings. You give it five inputs; it gives you a firing card with the exact rotation and elevation for the shot. You never compute a trajectory yourself — the machine does it. Your job is to feed it correct data, in the correct order.

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
3. **Fire, observe, correct.** Watch the radio report: a red skull means the kill; a report of "short" or "over" tells you how to correct the next shot. Community-reported data suggests shells can take up to ~20 seconds of flight time at extreme range — do not fire corrections before the previous round lands.

---

## Advanced Corrections (Community-Reported)

The community has been refining the demo's ballistics. These figures come from advanced calibration guides and are not officially documented — treat them as starting points:

- **Shell drop (MOA corrections):** at 5 km, standard HE drops roughly 42 meters (about +12 clicks up); heavy bunker-buster rounds drop roughly 78 meters (about +24 clicks up). Shell weight affects drop — heavier shells need more elevation at the same range.
- **Weather:** dense fog adds ~5 clicks of elevation correction; high-altitude gales push shots off-windward by ~8 clicks with ~4 clicks of elevation loss. If the mission briefing mentions weather, add corrections.
- **Spotter reliability:** report error grows with distance — under 2 km spotters are effectively reliable (~99% of reports on target); beyond 10 km treat reports as advisory (~50% reliability).

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

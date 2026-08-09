---
title: "Advanced Ballistics — Wind, Weather & Extreme-Range Shooting — Iron Nest Wiki"
description: "Advanced IRON NEST ballistics: wind and weather corrections, MOA click math, shell flight times, extreme-range shots beyond 10 km, spotter error at range, and the correction workflow for short/over impacts."
category: "Ballistics"
version: "1.0"
updated: "2026-08-09"
keywords:
  - "iron nest advanced ballistics"
  - "iron nest wind correction"
  - "iron nest MOA"
  - "iron nest long range"
  - "iron nest weather ballistics"
  - "iron nest extreme range"
related:
  - "ballistic-calculator-guide"
  - "reconnaissance-guide"
  - "target-spotting-guide"
  - "systems-failure-guide"
---

# Advanced Ballistics — Wind, Weather & Extreme-Range Shooting

> Launch Version / Updated: August 9, 2026

The [ballistic calculator guide](/guides/ballistic-calculator-guide) covers the basic five-input firing solution. This guide goes further: what the calculator does NOT account for, how the weather station module changes your dials from Chapter 3 onward, the correction workflow for miss reports, and how to shoot reliably at the very edge of the gun's range. **The correction figures below are community-reported** — the game does not publish its full ballistics table, so treat them as starting points verified by operators, not official numbers.

## MOA — The Language of Corrections

All mid-game corrections arrive in **Minute of Angle (MOA)** terms, and the game's dials use click-steps. The principle: a MOA is an angular unit — at 1 km of range it covers roughly **0.29 meters**, at 5 km roughly **1.5 meters**, and it scales linearly with range. That is why the same correction that moves a shot 12 meters at 2 km moves it 60 meters at 10 km — always correct in **clicks/MOA, never in meters**.

Community-derived reference points from the launch build:

| Situation | Correction (community-reported) |
|---|---|
| Standard HE drop at 5 km | ~42 m low — dial up roughly **+12 clicks** |
| Heavy / bunker-buster rounds at 5 km | ~78 m low — dial up roughly **+24 clicks** (heavier shells drop more) |
| Dense fog | Add ~**5 clicks** of elevation |
| High-altitude gales | Push **~8 clicks** off-windward with **~4 clicks** of elevation loss |

The arrow keys are the precision correction tool at the elevation console — use them instead of the coarse lever for dial adjustments.

## The Correction Workflow — When a Report Says "Short" or "Over"

From Phase 2 onward, spotters radio impact corrections: *"Impact 100 meters short, 50 meters left."* The fastest path back on target is **not** a new firing card:

1. **Convert the report to dial terms.** 100 m short at your current range converts to the MOA/clicks you know for that range — do not recalculate from scratch.
2. **Apply it to the live dials** — elevation for short/over, rotation for left/right. The arrow keys make this a two-second fix.
3. **Wait for the round to land before correcting again.** Community-measured flight times run **8–29 seconds** depending on range (roughly 5–20 km). A "correction" fired before the previous round lands is a shot at a ghost.
4. **Confirm with a second source** — a second spotter or a star shell — before treating the corrected shot as the kill.

## Wind — The Weather Station Module

From Chapter 3, the **Weather Station Module** forces environmental ballistics on every long shot. Two effects matter:

### Crosswind

Pushes the shell sideways. The strength of the effect depends on the shell:

- **Heavy projectiles** (HE, AP) cut through wind but drop more aggressively — expect to add elevation.
- **Light rounds** (S.T.A.R. illumination) get blown significantly off target if you ignore wind — a star shell at 10+ km in a gale may illuminate nothing at all.

Community practice: in steady crosswind, hold rotation **into the wind** by the windage amount before fine-tuning with the wheel. Treat the weather readout as part of the firing solution, not decoration.

### Barometric Pressure

Low barometric pressure means thinner air — **less drag**, so shells fly farther and flatter than the calculator predicts. Community-reported: with a low-pressure system over the map, reduce elevation slightly below the card's value or the shell overflies. High pressure does the opposite — add a touch of elevation. The effect grows with range.

## Night, Fog & Limited Visibility

- **Fog** is an elevation problem: dense fog adds roughly **+5 clicks** of correction (community-reported).
- **Night** is a visibility problem: fire a **S.T.A.R. illumination** shell first — it reveals positions in a 12.74 km area and does not start counter-battery fire (see the [reconnaissance guide](/guides/reconnaissance-guide)). Time it so the reveal and the kill shell overlap.
- In both conditions, treat spotter reports as looser — the error budget below applies.

## Spotter Reliability at Range

Spotter reports carry error that **grows with distance** (community-measured):

| Target Distance | Spotter Reliability |
|---|---|
| Under 2 km | ~99% — effectively authoritative |
| 2–10 km | Declining — treat as good estimates |
| Beyond 10 km | ~50% — treat reports as advisory only |

Past 10 km, prefer triangulation from **multiple** observers, or a star-shell reveal, over any single report — and expect to do the short/over correction dance on the first round.

## Extreme-Range Shooting (10–20 km)

At the far edge of the envelope everything gets worse at once: longer flight time (up to ~29 s at 20 km), larger drop, more wind exposure, and less reliable spotter data. The extreme-range playbook:

1. **Verify with illumination or recon imagery first** — never burn a 20-second flight on a guess.
2. **Dial the heavy-shell drop corrections** (the +24-click-class figures above) rather than trusting the basic card alone.
3. **Fire one ranging shot, wait for its full flight time, correct from the impact** — the "The Gorge" trick of ranging-shot corrections works at any range (see the [missions guide](/guides/missions-objectives-guide)).
4. **Mind the barrel** — extreme-range firing is usually slow fire anyway, which suits the 450 °C heat ceiling (see [systems & failures](/guides/systems-failure-guide)).

## The Long-Shot Checklist

- [ ] Weather station read — crosswind? pressure? fog?
- [ ] Shell flight time estimated — corrections fired only after the previous round lands
- [ ] Multi-observer confirmation for anything beyond 10 km
- [ ] Heavy-shell drop correction dialed in addition to the card
- [ ] Windage held into the wind for light rounds
- [ ] One ranging shot, one correction, one kill

**Next steps:** [Ballistic Calculator Guide](/guides/ballistic-calculator-guide) — [Reconnaissance & Intelligence](/guides/reconnaissance-guide) — [How to Find Targets](/guides/target-spotting-guide)

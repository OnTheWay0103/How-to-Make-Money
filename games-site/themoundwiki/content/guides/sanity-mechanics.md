---
title: "Sanity Mechanics – The Mound Wiki Guide"
description: "Master The Mound's sanity system — learn how fear, darkness, and encounters erode your mind, and discover every method to restore it before madness takes hold."
category: "Mechanics"
version: 1.0
updated: "2026-07-30"
keywords: ["sanity", "fear", "madness", "mental health", "horror mechanics", "sanctuary", "courage"]
related: ["team-roles", "speedrun-tips", "survival-guide"]
---

## Overview

Sanity is the second health bar in **The Mound**. While your physical HP determines whether you survive an attack, your Sanity determines whether you *stay whole* while exploring the darkness. Let it bottom out and the nightmares become real — hallucinations, uncontrollable actions, and eventually permadeath triggers. This guide breaks down every facet of the sanity system.

---

## Sanity Pool

| Tier | Sanity Range | Effects |
|------|-------------|---------|
| Stable | 80–100 | Normal perception, full damage |
| Uneasy | 50–79 | Flickering lights, ambient whispers |
| Disturbed | 20–49 | Screen distortion, false sounds, reduced accuracy (−15%) |
| Unhinged | 1–19 | Audible hallucinations, friendly fire chance, damage vulnerability (+30%) |
| Broken | 0 | Immediate game-over sequence; character is lost |

Base maximum sanity is **100**. Certain talismans and character backgrounds increase the cap to 120.

---

## What Drains Sanity

Sanity erodes through multiple vectors. The table below lists the most common sources.

| Source | Drain per Event | Notes |
|--------|----------------|-------|
| Entering deep darkness (no light source) | −2/sec | Doubled below Floor 5 |
| Taking physical damage | −5 per hit | — |
| Witnessing a companion die | −15 | Stacks per companion |
| Reading cursed tomes | −25 | One-time per tome |
| Failed fear check (scripted event) | −20–40 | Varies by encounter |
| Standing near a Null Shard | −3/sec | Line-of-sight required |
| Using forbidden incantations | −10 per cast | — |

> **Tip:** Sanity drain from darkness is *completely negated* when any light source is active — even a basic candle. Never explore unlit zones.

---

## Fear Checks

Certain rooms and scripted events trigger a **Fear Check**. The check formula is:

```
Difficulty = Event_Base_DC − (Current_Sanity / 10) − Courage_Bonus
```

If your effective Sanity is low, the DC spikes sharply. Passing a check grants a temporary **Courage** buff (+5 Sanity regen for 60 seconds). Failing applies **Terror** — doubled drain for 30 seconds.

| Fear Check Event | Base DC | Recommended Sanity |
|------------------|---------|-------------------|
| Abandoned nursery | 15 | 70+ |
| The Hanging Grove | 20 | 80+ |
| Mirror Hallway | 25 | 90+ |
| Final descent (Floor 10) | 35 | 100+ (with talisman) |

---

## Restoring Sanity

### Consumables

| Item | Sanity Restored | Rarity | Found In |
|------|----------------|--------|----------|
| Calming Herbs | +15 | Common | Floor 1–3 chests |
| Lullaby Elixir | +35 | Uncommon | Floor 4–6, merchant |
| Sanctuary Candle | +10/sec (channel) | Rare | Recipe — requires Herbs + Wax |
| Memory Lotus | Full restore | Very Rare | Secret rooms only |

### Passive Methods

- **Resting at a Campfire** — restores 2 sanity per second while seated. Max 50 per rest.
- **Companion Morale** — each living companion gives +0.3/sec passive regen while in lit areas.
- **Talisman of Resolve** — accessory that grants +0.5/sec regen at all times. Drops from the Warden (Floor 7 boss).

---

## Advanced Strategies

### Team Composition for Sanity Management

- Always assign one player a **Sanity Officer** role — their job is to monitor team sanity bars and call out when to retreat.
- The **Cleric** class can cast *Calm Aura*, an AoE that restores 5 sanity/sec to all nearby allies. Keep the Cleric alive at all costs.
- **Hunters** with the *Unyielding* passive suffer only half sanity damage from fear checks — ideal for scouting dark corridors.

### Equipment Synergies

| Item | Effect | Synergy |
|------|--------|---------|
| Lantern of Dawning | +50% light radius; prevents darkness drain | Best-in-slot for explorers |
| Cloak of Serenity | Halves sanity damage from hits | Combine with high-Dodge build |
| Warding Circlet | +20 Max Sanity; +1 Fear Check save | Essential for hardcore runs |

---

## Sanity and Permadeath

In **Hardcore Mode**, hitting Broken (0 sanity) triggers *permanent* character deletion regardless of remaining HP. Even in Standard mode, a Broken sanity causes a game-over that costs all unsaved progress since the last Rest Site.

> **Rule of thumb:** Retreat at 30 sanity. Never push deeper below 20 unless you have a Memory Lotus ready.

---

## Internal Links

- [Team Roles Guide →]({{< ref "team-roles.md" >}})
- [Speedrun Tips →]({{< ref "speedrun-tips.md" >}})
- [Survival Guide →]({{< ref "survival-guide.md" >}})
- [Talisman Tier List →]({{< ref "talisman-tier-list.md" >}})
- [Floor 7 Boss: The Warden →]({{< ref "warden-boss-guide.md" >}})

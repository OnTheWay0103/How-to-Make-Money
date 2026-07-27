---
title: "Dinoblade Combat Advanced Guide — Frame Data, Stamina Management, and Mechanics"
description: "Advanced combat mechanics for Dinoblade players. Master frame data analysis, stamina economy, animation canceling, status effect stacking, and perfect parry timing against every enemy type."
category: "Advanced"
version: "1.0"
updated: "2026-07-27"
keywords:
  - Dinoblade advanced combat
  - Dinoblade frame data
  - Dinoblade stamina management
  - Dinoblade parry timing
  - Dinoblade combat mechanics
related:
  - parry-guide
  - weapons-guide
  - builds-guide
  - boss-guide
  - controls-guide
---

# Dinoblade Combat Advanced Guide — Frame Data, Stamina Management, and Mechanics

This guide is for players who have beaten Dinoblade at least once and want to master the combat system at a deeper level. It covers frame data, stamina economy, animation canceling, status effect interactions, and advanced parry timing against every enemy type.

---

## 1. Stamina Management

Stamina is the single most important resource in Dinoblade combat. Running out of stamina even once in a boss fight is often fatal.

### 1.1 Stamina Costs by Action

| Action | Stamina Cost | Base Recovery Delay |
|--------|-------------|---------------------|
| Light Attack | 8 | 0.3s |
| Heavy Attack | 25 | 0.8s |
| Dodge Roll | 15 | 0.2s |
| Sprint | 10/sec | 1.0s after stopping |
| Parry (success) | 10 | 0.0s (instant recover) |
| Parry (fail) | 30 | 1.5s (stagger state) |
| Jump Attack | 20 | 0.5s |
| Block | 5/sec hit | — |

### 1.2 Stamina Breakpoint Strategy

- **Always keep 20 stamina in reserve.** This is the minimum needed for an emergency dodge roll + one light attack.
- **Recover stamina during boss attack wind-ups.** Bosses telegraph heavily. Use the 1–2 second window to lower your weapon and recover.
- **Equip the Featherlight Boots** for +15% stamina recovery speed. This is the highest-impact accessory for advanced play.
- **Never heavy attack at low stamina.** A heavy attack leaves you with 0 stamina for 0.8 seconds after recovery — long enough for most bosses to punish.

---

## 2. Frame Data Reference

Frame data refers to the number of animation frames (at 60 FPS) each combat action takes. Understanding frame data allows precise trade optimization.

### 2.1 Weapon Frame Data

| Weapon Type | Startup Frames | Active Frames | Recovery Frames | Total Duration |
|-------------|---------------|---------------|-----------------|----------------|
| Dagger (Light) | 4 | 3 | 6 | 13f |
| Dagger (Heavy) | 8 | 5 | 12 | 25f |
| Sword (Light) | 6 | 4 | 8 | 18f |
| Sword (Heavy) | 12 | 6 | 14 | 32f |
| Greatsword (Light) | 10 | 6 | 12 | 28f |
| Greatsword (Heavy) | 18 | 8 | 20 | 46f |
| Spear (Light) | 7 | 5 | 10 | 22f |
| Spear (Heavy) | 14 | 7 | 16 | 37f |

### 2.2 Key Frame Thresholds

- **Parry window:** 6 active frames at the start of the parry animation. This window does not change with weapon type.
- **Dodge i-frames:** 10 frames of invincibility on a successful dodge roll. The last 3 frames have no i-frames — this is the "roll catch" window.
- **Poise breakpoint:** 50+ poise allows you to attack through small enemy attacks without staggering.
- **Recovery cancel window:** You can cancel recovery frames into a dodge roll starting at frame 60% of total recovery.

---

## 3. Animation Canceling

Advanced combat relies on canceling recovery frames into more advantageous actions.

### 3.1 Cancel Techniques

| Technique | Input | Use Case |
|-----------|-------|----------|
| Roll Cancel | Attack → Dodge Roll (during recovery) | Cancel slow weapon recovery into quick reposition |
| Parry Cancel | Attack → Parry (during active frames) | Abort a whiffed attack into defensive stance |
| Sprint Cancel | Attack → Sprint (after hit connects) | Hit-and-run tactics, avoid trading |
| Jump Cancel | Attack → Jump (during recovery) | Situational, useful for aerial follow-ups |

### 3.2 When to Cancel

- **Against slow enemies:** Use Sprint Cancel after Greatsword heavy attacks. Hit, sprint out, repeat.
- **Against fast enemies (Raptor packs):** Roll Cancel after 2 light attacks. Never attempt a third hit.
- **Against bosses:** Parry Cancel is the safest option. Attack once, be ready to parry the counter-attack.

---

## 4. Status Effect System

Dinoblade has 5 status effects that can be stacked on enemies for bonus damage.

### 4.1 Status Effects

| Status | Build Method | Max Stacks | Effect at Max | Best Weapon |
|--------|-------------|------------|---------------|-------------|
| Bleed | Fast attacks (daggers, swords) | 5 | 15% max HP damage over 3 seconds | Dagger |
| Fire | Fire-infused weapons | 3 | 5% max HP damage per second + reduced enemy attack | Torch Spear |
| Frost | Frost-infused weapons | 4 | Enemy slow (-30% move speed) | Ice Sword |
| Poison | Poison arrows, venom blade | 4 | 3% max HP per second for 10 seconds | Venom Dagger |
| Stagger | Heavy attacks (Greatsword, Hammer) | 3 | Enemy falls down for 2 seconds | Greatsword |

### 4.2 Optimal Effect Combinations

- **Bleed + Poison (Dagger build):** Stack both DoTs for maximum sustained damage on bosses.
- **Fire + Stagger (Greatsword build):** Fire reduces enemy attack while stagger gives you damage windows.
- **Frost + Bleed (Sword build):** Slow enemies down while bleed deals damage. Excellent for kiting.
- **Pure Stagger (Co-op):** One player stacks stagger while others deal raw damage.

---

## 5. Advanced Parry Timing by Enemy Type

Base Parry timings differ by enemy type. These reference values will help you land perfect parries consistently.

### 5.1 Parry Windows by Enemy

| Enemy Type | Attack Anticipation | Parry Timing | Window Tightness |
|-----------|--------------------|-------------|------------------|
| Raptor (bite) | 0.5s | Press parry 0.3s after telegraph | Forgiving |
| Raptor (flank) | 0.8s | Press parry when raptor turns sideways | Moderate |
| Armored Dino (charge) | 1.2s | Press parry 0.2s before impact | Tight |
| Flying Enemy (dive) | 0.4s | Press parry immediately on screech audio cue | Very Tight |
| Boss (basic) | 0.7–1.5s | Varies per boss — learn individual timing | Variable |
| Boss (NG+ new move) | 0.3–0.6s | Visual cue only — audio cue is delayed | Extreme |

### 5.2 Audio Cue Priority

Some attacks can only be parried reliably using audio cues:

1. **Screech attacks** (flying enemies): The screech sound plays exactly 0.4s before impact — parry on the sound.
2. **Charge attacks** (armored enemies): The footstep rhythm quickens 0.3s before the final lunge — parry on the quickened step.
3. **Boss roar AoE:** The roar audio peaks at the moment the hitbox becomes active. Parry during the peak.

---

## 6. Build-Specific Combat Loops

### 6.1 Precision Dagger Loop

**Weapon:** Venom Dagger. **Style:** Hit-and-run DoT stacking.

1. Open with Poison Blade (skill) to apply poison.
2. Light attack twice to build bleed stacks.
3. Roll Cancel to disengage.
4. Wait 2 seconds for stamina recovery.
5. Repeat until poison/bleed fall off.

**Result:** 5 Bleed + 4 Poison stacks = 18% max HP per 10 seconds passively. Safe against all enemy types.

### 6.2 Heavy Stagger Loop

**Weapon:** Greatsword (Fire infusion). **Style:** Burst and punish.

1. Heavy attack (Fire infusion builds stagger).
2. If stagger procs, follow with charged heavy for massive damage.
3. If no stagger, Sprint Cancel out. Wait for next opening.
4. On second stagger proc, enemy falls. Use jumping heavy attack.

---

## Related Guides

- [Parry Guide](/guides/parry-guide) — Complete parry mechanics and practice routines
- [Weapons Guide](/guides/weapons-guide) — Full weapon stats, upgrade paths, and infusion effects
- [Builds Guide](/guides/builds-guide) — Optimized builds for every playstyle
- [Boss Guide](/guides/boss-guide) — Boss attack patterns and parry windows
- [Controls Guide](/guides/controls-guide) — Controller and keyboard bindings for advanced techniques

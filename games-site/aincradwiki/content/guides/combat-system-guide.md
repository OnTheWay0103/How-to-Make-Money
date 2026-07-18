---
title: 'Combat System Guide — Parry, Dual Wield, Weapon Switch & Controls'
description: 'Learn how to parry, dual wield, and switch weapons in Echoes of Aincrad. Includes combat UI breakdown, dodge and block mechanics, and character appearance customization.'
keywords: ['combat guide', 'how to parry', 'how to dual wield', 'how to switch weapons', 'how to change appearance', 'combat controls']
category: Guides
version: '1.0'
updated: '2026-07-18'
related:
  - beginner-guide
  - weapons-guide
  - builds-guide
  - dual-wield-build
  - ex-mod-guide
---

## Combat System Overview

Echoes of Aincrad uses real-time action combat built around stamina management, timing-based counters, and weapon-specific Sword Skills. There is no auto-attack — every swing requires player input.

## Core Mechanics

### Stamina (SP) System

SP is your action currency. Most actions consume SP:

| Action | SP Cost |
|--------|---------|
| Light Attack | 5 SP |
| Heavy Attack | 15 SP |
| Block | 10 SP (initial), 2 SP/sec hold |
| Dodge Roll | 20 SP |
| Parry Attempt | 15 SP (success or fail) |
| Sword Skill | 25–50 SP |
| Sprint | 3 SP/sec |

SP regenerates at 10 SP/sec out of combat and 5 SP/sec in combat. Higher END improves regeneration.

### HP & Death

Your HP has two sections:
- **White HP** (70%): Recovers over time out of combat
- **Red HP** (30%): Requires healing items or Inn rest

At zero HP, you enter a **downed state** for 30 seconds. A teammate or AI partner can revive you within that window. If the timer expires, your character is permanently deleted.

## Parry & Counter Mechanics

### How to Parry
1. Hold block stance
2. Tap parry just before an enemy attack lands
3. A successful parry creates a **blue flash** and a 2-second counter window

### Parry Windows by Enemy Type

| Enemy Type | Window | Difficulty |
|-----------|--------|------------|
| Normal mobs | 0.5s | Easy |
| Elite mobs | 0.3s | Medium |
| Floor Bosses | 0.2s | Hard |
| Humanoid NPCs | 0.15s | Expert |

### Counter Attack

After a successful parry:
- Enemy is **staggered** for 2 seconds
- Your next attack deals **3x damage**
- Follow up with a Sword Skill for maximum burst
- Counter attacks cannot be blocked or dodged

**Pro tip**: DEX 20 extends your parry window by 0.1s — a massive improvement against bosses.

## Dodge & Block Mechanics

### Dodge Roll
- Universal (any weapon)
- 20 SP cost
- **0.5s invincibility frames**
- 0.8s recovery animation (reduced by AGI)
- Best for: wide sweeps, AoE, boss charges

### Block (Shield Required)
- Reduces damage by 60–80% based on shield quality
- 10 SP initial + 2 SP/sec hold
- Cannot block unblockable attacks (red glow indicator)
- Best for: enemy combos, projectiles, low-SP situations

## Dual Wielding Requirements

### Unlock Conditions

| Requirement | Detail |
|-------------|--------|
| Level | 25+ |
| DEX | 20+ |
| Weapon Skill | One-handed Sword rank 10+ |
| Quest | "The Black Swordsman" (Floor 25) |

### How It Works
- Main-hand uses Sword Skills, off-hand auto-attacks during combos
- Unique Dual Wield Sword Skills (high damage)
- SP costs increased by 30%
- Block disabled — rely entirely on dodge and parry

### Best Weapon Combinations

| Main Hand | Off Hand | Strategy |
|-----------|----------|----------|
| Longsword | Shortsword | Balanced damage and speed |
| Rapier | Dagger | High crit, fastest attack speed |
| Shortsword | Shortsword | Max combo speed, lowest SP efficiency |

## Weapon Switching During Combat

Carry up to three weapon sets and switch mid-combat.

### How to Switch
1. Open weapon wheel (Tab / R1)
2. Highlight desired set
3. Release to confirm
4. 3-second swap animation (vulnerable)

### Restrictions
- Cannot switch while staggered or knocked down
- Cannot switch while an enemy is locked onto you
- Costs 30 SP + 15-second cooldown

### When to Switch

| Situation | Switch To |
|-----------|----------|
| Enemy shield raised | Greatsword / Two-Handed Axe |
| Enemy staggered | Rapier / Dagger |
| Low HP | Sword & Shield |
| Boss enrage phase | Ranged option |

## Character Appearance Customization

### Permanent (Character Creation)
Face shape, body type, hair style/color, eye color, voice type — cannot be changed after creation.

### Changeable (Appearance Menu)
- **Armor visual**: Equip different armor or use Transmogrify
- **Weapon visual**: Any weapon of same type can override appearance
- **Hair style/color**: Visit Salon NPC (500 Col)
- **Accessories**: Equip or remove freely

### Transmogrify System (Smithy Level 3+)
Apply one armor piece's appearance to another:
1. Have both pieces in inventory
2. Visit Smithy > Transmogrify
3. Select source (appearance) and target (stats)
4. Pay 100–500 Col based on rarity

## Combat UI Explained

| Element | Location | Purpose |
|---------|----------|---------|
| HP Bar | Top-left | Health (white + red segments) |
| SP Bar | Below HP | Stamina pool |
| Sword Skills | Bottom-center | Assigned skills (1–4) |
| Enemy HP | Top-center | Target health + stagger meter |
| Combo Counter | Right side | Hit count toward Sword Skill unlock |
| Partner Status | Top-right | AI partner HP, SP, buffs |
| Minimap | Top-right | Enemies (red), allies (blue), POIs (gold) |
| Cardinal Rank | Top-center | Current rank and progress |

## Combat Tips by Playstyle

**Aggressive (Daggers, Rapier)**: Parry → counter → Sword Skill loops. Keep SP above 30% for emergency dodges. Stack DEX and AGI.

**Defensive (Sword & Shield)**: Hold block during combos, counter-attack during recovery. Shield Bash creates stun windows. Prioritize END.

**Power (Greatsword, Axe)**: Charge attacks during safe windows. Break enemy guard with heavy swings. Cannot cancel long animations.

**Technical (Dual Wield)**: Perfect dodge timing mandatory. Manage the 30% SP penalty aggressively. Highest damage potential but most vulnerable.

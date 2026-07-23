---
title: 'Mistfall Hunter Combat Guide — Parry, Sprint, Lock-On, and Advanced Mechanics'
description: 'Learn how to parry, sprint, lock on, and dodge in Mistfall Hunter. Complete combat mechanics guide with timing tips, class-specific strategies, and advanced movement techniques for every playstyle.'
keywords: ['mistfall hunter how to parry', 'mistfall hunter how to sprint', 'mistfall hunter how to run', 'mistfall hunter how to lock on', 'mistfall hunter combat guide', 'mistfall hunter damage types', 'mistfall hunter status effects']
category: Guides
version: 'Playtest'
updated: '2026-07-23'
related:
  - beginner-guide
  - classes-guide
  - pvp-guide
  - extraction-guide
  - weapons-guide
---

## Combat Overview

Mistfall Hunter's combat system blends methodical stamina management with precise timing mechanics. Every encounter — whether against Corroded mobs or rival players — rewards players who master the core actions: parrying, dodging, sprinting, and lock-on targeting. This guide breaks down each mechanic with exact button inputs, timing windows, and class-specific considerations.

## Parry Timing and Mechanics

### How to Parry

To parry an incoming attack, press the **Parry / Block** button (default: **Right Mouse Button** or **L2 on controller**) just before the enemy's attack connects. A successful parry:

- Negates all incoming damage
- Staggers the attacker, leaving them vulnerable for 1.5-2 seconds
- Refunds a portion of stamina used
- Opens the enemy to a guaranteed critical hit

| Aspect | Details |
|--------|---------|
| **Default Key** | Right Mouse Button (hold for block, tap for parry) |
| **Parry Window** | ~200ms before impact (start of block animation) |
| **Block Window** | Hold RMB for continuous block (chip damage still applies) |
| **Stamina Cost (Parry)** | 15 stamina |
| **Stamina Cost (Block)** | 5 stamina per hit blocked |
| **Cooldown** | No cooldown, but failed parry costs full stamina |

### Parry vs. Block

Understanding when to parry versus when to block is critical:

| Situation | Best Choice | Why |
|-----------|-------------|-----|
| Fast light attack combo | Block | Parry window is too tight for rapid follow-ups |
| Telegraphed heavy attack | Parry | Long wind-up gives an easy timing window |
| Boss / Mini-boss charge | Parry | Staggers the boss, creating a DPS window |
| Multiple enemies attacking | Block / Dodge | A parry only counters one attacker |
| Ranged projectile | Dodge | Parry does not block projectiles |

### Class-Specific Parry Differences

- **Mercenary (Sword & Shield)**: Largest parry window (~250ms). The shield block also has 70% damage reduction on failed parries — most forgiving for learning.
- **Vanguard (Greatsword)**: Parry window is shorter (~150ms) but successful parries deal bonus stagger damage. High risk, high reward.
- **Blackarrow (Bow)**: No parry. Uses dodge as the primary defensive tool. Sprinting side-step replaces the block mechanic.
- **Shadowstrix (Daggers)**: Parry window matches standard (200ms) but backstabs after a successful parry deal 2x critical damage.
- **Sorcerer (Staff)**: No parry. Uses a mana shield (hold RMB) that absorbs damage at the cost of mana. Timing the shield activation reduces mana cost.

### Parry Practice Tips

1. Visit a low-threat area (first zone near spawn) and practice parrying the basic Corroded Warrior's 3-hit combo
2. Count the rhythm: swing-swing-pause-swing. Parry during the pause
3. Once comfortable, practice against the Returner Woodling's charge attack — it has the clearest telegraph in the game
4. Move to PvP practice in a friendly duel to work against player timing (players tend to delay attacks to bait parries)

## Sprint and Run Controls

### How to Sprint and Run

Sprinting in Mistfall Hunter uses a stamina system — you can only sprint while you have stamina remaining.

| Action | Default Key | Stamina Cost | Notes |
|--------|-------------|--------------|-------|
| **Walk** | WASD | 0 | Default movement speed |
| **Sprint** | Shift (Hold) | 10/sec | Faster than walk, costs stamina |
| **Sprint Toggle** | Shift (Press) | 10/sec | Alternative: set to toggle in settings |
| **Sprint + Dodge** | Shift + Space | 25 | Extended dodge with evasion frames |

### When to Sprint vs. When to Walk

| Scenario | Should You Sprint? | Why |
|----------|-------------------|-----|
| Rotating between POIs | Yes | Cover ground faster, reduce time in the open |
| Near an extraction point | Only with 80%+ stamina | You need stamina to fight if ambushed |
| Pushing through mist | Yes | Outrun the closing mist damage ticks |
| Approaching a loot chest | No | Sprinting is loud — enemies hear your footsteps |
| In combat / enemy sight | Situational | Sprinting drains stamina needed for parries |
| Strafing in a duel | No | Walk-strafing is faster for circle rotations |

### Advanced Sprint Techniques

**Sprint Cancel**: Tap Sprint while blocking to cancel your block animation instantly — useful for baiting enemy attacks and resetting to neutral.

**Sprint Attack**: Press the attack button while sprinting for a lunging strike. Each class has a unique sprint attack:
- Mercenary: Shield bash (stuns, low damage)
- Vanguard: Overhead slam (high damage, slow recovery)
- Shadowstrix: Sliding stab (fast, medium damage)
- Blackarrow: Quick shot (low damage, applies slow)
- Sorcerer: Mana burst (knocks back, costs mana)

**Sprint Jump**: Sprint + jump gives you extra distance on gaps and ledges. Time it to clear mist pools on the ground.

## Lock-On System

### How to Lock On

Press the **Lock-On key** (default: **Middle Mouse Button** or **R3 on controller**) while looking at an enemy. A reticle locks onto the target, keeping your character facing them during combat.

| Aspect | Details |
|--------|---------|
| **Default Key** | Middle Mouse Button / R3 |
| **Range** | 30 meters (lock-on engages) |
| **Break Range** | 45 meters (lock-on disengages) |
| **Max Targets** | 1 (manual switch required) |
| **Switch Target** | Scroll Wheel / D-Pad Left-Right |

### When to Use Lock-On

| Situation | Lock On? | Reasoning |
|-----------|----------|-----------|
| 1v1 PvP duel | Yes | Keeps target centered, enables tracking |
| 1v2 or 1v3 | Only briefly | Lock-on limits your camera — you can't see flankers |
| PvE mob clearing | Yes | Makes kiting and parry timing easier |
| Boss fight | Yes | Essential for reading boss telegraphs |
| Ranged combat (Blackarrow) | Occasionally | Lock-on helps with kiting; turn off for AoE shots |
| Running away | No | Lock-on restricts camera behind you |
| Ambush / third party | No | You need full camera control to assess threats |

### Lock-On Advanced Tips

- **Unlock to aim AoE**: Sorcerers and Blackarrows should unlock before casting area abilities — lock-on restricts your aim to the locked target only
- **Quick-switch targeting**: Use scroll wheel to cycle between nearby enemies without breaking your flow
- **Break lock manually**: Press Middle Mouse Button again or press Escape to unlock without waiting for the range break
- **Controller deadzone**: If lock-on feels sticky, increase the right stick deadzone in controller settings

## Dodge and Movement Tips

### How to Dodge

Press **Space** (default) to dodge-roll in your current movement direction. A well-timed dodge grants invincibility frames (i-frames).

| Dodge Type | Input | Stamina | I-Frames | Distance |
|------------|-------|---------|----------|----------|
| **Standard Dodge** | Space | 15 | 12 frames (~200ms) | 4 meters |
| **Backstep** | Space (no direction) | 10 | 10 frames (~167ms) | 2 meters |
| **Sprint Dodge** | Shift + Space | 25 | 15 frames (~250ms) | 7 meters |
| **Side Dodge** | Space + A/D | 15 | 12 frames (~200ms) | 4 meters |

### Dodge Timing Tips

1. **Dodge into attacks, not away** — many attacks have forward tracking. Dodging sideways or forward-through often avoids the hit box entirely
2. **Chain dodges carefully** — the second consecutive dodge costs 50% more stamina (23 stamina). Three consecutive dodges leaves you exhausted with zero stamina for 3 seconds
3. **Backstep is for spacing** — use the backstep (no direction input) to create distance for healing or reloading without committing to a roll
4. **Sprint dodge as an engage** — the sprint dodge covers more ground and is excellent for closing distance on a Blackarrow or Sorcerer

### Movement Fundamentals for Each Class

| Class | Movement Style | Key Technique |
|-------|---------------|---------------|
| **Mercenary** | Patient, positional | Walk forward with shield up; dodge sideways to avoid grabs; sprint-slam to engage |
| **Vanguard** | Aggressive, committal | Sprint attacks are your gap-closer; use standard dodge to recover after whiffing |
| **Shadowstrix** | Flanking, evasive | Chain dodge to reposition behind enemies; sprint dodge to escape bad fights |
| **Blackarrow** | Kiting, distance control | Never stop moving; backstep + shoot to maintain range; sprint dodge when rushed |
| **Sorcerer** | Positional, zone control | Mana shield + backstep for defense; sprint dodge is your only escape from melee |

## Advanced Combat Techniques

### Stamina Management

Stamina is your most important resource in combat. Let it drop to zero and you cannot parry, dodge, or sprint for 3 seconds.

| Stamina % | What You Can Do | Risk Level |
|-----------|-----------------|------------|
| 100-70% | Full combat capability | Low |
| 70-40% | Can do one parry + one dodge | Medium |
| 40-20% | Can dodge OR parry, not both | High |
| 20-0% | Reduced sprint speed only | Critical |
| 0% (Exhausted) | Cannot dodge, parry, or sprint (3 sec) | Dead |

### Target Prioritization in Combat

When fighting multiple enemies:

1. **Shadowstrix / Blackarrow first** — they die fastest and deal the most burst damage
2. **Mercenary last** — high survivability, low burst; outlast them
3. **Sorcerer if low on stamina** — a single parry on a Sorcerer is often a kill because their health pool is smallest
4. **Interrupt channeling** — if you see a Sorcerer charging a spell or a healer resurrecting, interrupt with any attack

### Reading Enemy Telegraphed Attacks

Every enemy in Mistfall Hunter has visual and audio cues before attacking:

| Enemy Type | Telegraph | Counter |
|------------|-----------|---------|
| Corroded Warrior | Raises weapon overhead + growl | Parry when weapon reaches apex |
| Corroded Archer | Pulls bowstring back + hiss | Dodge sideways (arrow tracks initial position) |
| Returner Woodling | Stomps ground + screen shake | Dodge sideways, then punish |
| Player (Greatsword) | Weapon glows + character crouches | Backstep — the hitbox is massive |
| Player (Daggers) | Vanishes in smoke | Sprint dodge forward — they will appear behind you |

## Damage Types and Armor Penetration

Mistfall Hunter uses a multi-layered damage system. Understanding damage types and how armor interacts with them is essential for optimizing your build.

### Damage Type Table

| Damage Type | Used By | Effective Against | Weak Against |
|-------------|---------|-------------------|--------------|
| **Physical** | Mercenary, Vanguard, Shadowstrix (basic) | Light armor, unarmored enemies | Heavy armor, shield users |
| **Magic** | Sorcerer, Shadowstrix (abilities) | Heavy armor, shielded enemies | Magic-resistant enemies (rare) |
| **Piercing** | Blackarrow, some daggers | Medium armor, cloth | Heavy plate |
| **Elemental (Fire)** | Sorcerer (fire spells), consumables | Organic enemies, poison vines | Fire-resistant enemies |
| **Elemental (Frost)** | Sorcerer (frost spells), environment | Fast enemies (slow applied) | Frost-resistant bosses |
| **True Damage** | Certain abilities, backstabs | All armor types equally | None |

### Armor Penetration Values

| Weapon Type | Base Armor Penetration | Notes |
|-------------|------------------------|-------|
| Sword & Shield (Mercenary) | 10% | Low pen, high sustained damage |
| Greatsword (Vanguard) | 25% | High pen per swing, slow speed |
| Daggers (Shadowstrix) | 15% | Backstabs ignore 100% armor |
| Bow (Blackarrow) | 30% | Headshots add 20% bonus pen |
| Staff (Sorcerer) | 40% (magic) | Magic pen is separate from physical |

### Armor Rating and Damage Reduction

| Armor Rating | Physical DR | Magic DR | Piercing DR |
|--------------|-------------|----------|-------------|
| 0-50 (Cloth/Light) | 10% | 5% | 5% |
| 51-100 (Medium) | 20% | 10% | 15% |
| 101-150 (Heavy) | 35% | 15% | 25% |
| 151+ (Endgame) | 45% | 25% | 35% |

**Tip:** Mixing armor types to cover vulnerabilities is often more effective than stacking a single type. A heavy chestpiece with medium gloves and boots provides balanced protection without sacrificing mobility.

## Status Effects and Ailments

Combat inflicts various status effects. Knowing how to apply and cleanse them can swing a fight.

### Offensive Status Effects

| Effect | Source | Duration | Effect | Stacking |
|--------|--------|----------|--------|----------|
| **Bleed** | Shadowstrix daggers, Vanguard bleed perk | 6s | 5% HP/sec as physical damage | Stacks up to 3x |
| **Poison** | Blackarrow poison arrows, some mobs | 10s | 3% HP/sec as magic damage | Refreshes duration |
| **Burn** | Sorcerer fire spells, explosive barrels | 8s | 4% HP/sec as fire damage | Stacks up to 2x |
| **Slow** | Blackarrow quick shot, frost spells, swamp terrain | 4s | -30% movement speed | Single stack |
| **Stun** | Mercenary shield bash, parry | 1.5-2s | Cannot act | Resets on damage |
| **Blind** | Shadowstrix smoke bomb, certain consumables | 3s | Screen obscured, lock-on disabled | Single stack |

### Defensive and Utility Effects

| Effect | Source | Duration | Effect |
|--------|--------|----------|--------|
| **Fortify** | Mercenary block stance, some potions | 5s | +20% armor rating |
| **Regeneration** | Healing consumables, camp bonuses | 10s | 2% HP/sec |
| **Haste** | Shadowstrix sprint perk | 6s | +15% attack speed |
| **Invisibility** | Shadowstrix vanish, rare consumable | 3s | Cannot be targeted by lock-on |
| **Mana Shield** | Sorcerer RMB hold | Channeled | Damage taken from mana before HP |

### Cleansing and Healing Items

| Item | Clears | Where to Find |
|------|--------|---------------|
| Bandage | Bleed | Crafted (cloth + herb), loot |
| Antidote | Poison | Crafted (herb + water), camp vendor |
| Frost Salve | Slow (frost-based) | Camp vendor, loot |
| Universal Cleansing Tonic | All status effects | Rare loot, endgame camp upgrade |

### Enemy Status Weaknesses

| Enemy Type | Weak To | Resists | Strategy |
|------------|---------|---------|----------|
| Corroded Warrior | Fire, Physical | Bleed | Burn is most effective; bleed deals reduced damage |
| Corroded Archer | Poison, Piercing | Stun | Archers resist stuns; poison works best |
| Returner Woodling | Fire, Frost | Poison | Burns quickly; frost slows its charge |
| Mist Wraith | Magic, True Damage | Physical, Piercing | Melee classes should use their ability damage, not basic attacks |
| Player (Heavy Armor) | Magic, Bleed | Physical | Stack magic damage or bleed to bypass armor |

## Ranged Combat Mechanics

Ranged combat has distinct mechanics that differ from melee. Blackarrow and Sorcerer players should understand these specifics.

### Projectile System

| Property | Detail |
|----------|--------|
| **Arrow Speed** | ~50 m/s (decreases by 10% over 30m) |
| **Spell Projectile Speed** | ~35 m/s (no falloff) |
| **Max Range** | 60m (Blackarrow), 45m (Sorcerer) |
| **Damage Falloff** | Starts at 25m, -50% at max range |
| **Headshot Multiplier** | 1.5x damage (Blackarrow only) |

### Leading Targets

All projectiles have travel time. Against moving targets:

- **Same direction (they run away)**: Aim 1-2 character widths ahead at close range, 3-4 at long range
- **Perpendicular (they strafe)**: Aim at leading edge of hitbox — early misses teach better leading
- **Sprinting target**: Lead distance doubles
- **Dodging target**: Aim at the landing spot, not the current position

### Ammo and Resource Management

| Class | Resource | Cost Per Shot | Recovery |
|-------|----------|---------------|----------|
| Blackarrow | Arrows | 1 per shot | Pick up from corpses, find in quivers |
| Sorcerer | Mana | 15-60 per spell | Natural regen (5/sec), Mana Potions |

**Blackarrow tip:** Always recover arrows from killed enemies before looting other containers. A full quiver (40 arrows) can be depleted in a single engagement. Carry a backup stack of 20 in your inventory.

**Sorcerer tip:** Managing mana in extended fights is about mixing low-cost basic attacks with high-cost burst spells. Spamming only high-cost spells leaves you empty in 3-4 casts.

## Team Combat Synergies

Coordinated team play dramatically increases combat effectiveness. These synergies apply to organized groups of 2-3 players.

### Duo Synergies

| Duo Combo | How It Works | Win Condition |
|-----------|--------------|---------------|
| Mercenary + Shadowstrix | Mercenary holds aggro and parries; Shadowstrix flanks for backstabs | Parry + backstab burst deletes one target instantly |
| Vanguard + Sorcerer | Vanguard initiates with sprint slam; Sorcerer follows with AoE zone | The slow from Sorcerer's frost keeps enemies in Vanguard's range |
| Blackarrow + Mercenary | Blackarrow kites and applies poison; Mercenary intercepts anyone who chases | Sustained damage + peel creates unwinnable attrition |

### Trio Composition

The strongest all-round trio:

- **Mercenary** (frontline + peel)
- **Shadowstrix** (flank + burst)
- **Blackarrow** (ranged pressure + finisher)

**Execution:** Mercenary engages and parries. Shadowstrix circles for the backstab during the stun window. Blackarrow finishes the stunned target with a headshot. The remaining enemy faces a 3v1 with no escape.

### Communication Callouts

Essential callouts for coordinated combat:

| Callout | Meaning | When to Use |
|---------|---------|-------------|
| "Parry stun" | I just parried someone | Within 1.5s — teammates need to focus the stunned target |
| "Low stam" | My stamina is below 30% | Tell your team you cannot parry or dodge effectively |
| "Flanking" | Rotating to an off-angle | Before committing to the flank — so frontline holds |
| "Third party" | Another group is approaching | Immediately — adjust positioning and disengage if needed |
| "Mist closing" | Mist is about to compress | Urgent — extract or reposition to safe zone |

## Environmental and Terrain Combat

The Mistfall Hunter maps are designed with tactical terrain. Using the environment is as important as using your weapon.

### Terrain Types and Combat Effects

| Terrain | Effect | Tactical Use |
|---------|--------|--------------|
| **Mist Pools** | Take damage over time (2% HP/sec) | Force enemies into mist with knockbacks |
| **Elevated Ground** | +10% damage to targets below | Control high ground in firefights |
| **Choke Points** | Single-file passage | Mercenary holds the line; Sorcerer AoEs behind |
| **Bushes / Grass** | Hidden from lock-on (until you attack) | Ambush setup, escape, breaking line of sight |
| **Water** | -20% move speed, muffled footsteps | Slow down pursuers; advance for silent flank |
| **Explosive Barrels** | AoE fire damage when destroyed | Shoot near grouped enemies; bait enemies near them |
| **Destructible Walls** | Breakable by Vanguard heavy attacks | Create unexpected sightlines or escape routes |

### Mist Closing Strategy

When the mist begins closing:

1. **Position between the mist and the extraction point** — you want your back to clear space, not the mist
2. **Use the mist as a third player** — pushing an enemy toward the mist forces them to take damage or reposition poorly
3. **Never fight in the mist** — the health drain is deceptive and stacks with combat damage
4. **Sprint dodge out of mist** — if you get caught in the closing edge, a single sprint dodge usually clears the damage zone

### Destructible Environment

Certain environmental objects can be destroyed for tactical advantage:

| Object | Destroyed By | Effect |
|--------|-------------|--------|
| Wooden barricade | Any attack (3-5 hits) | Opens new sightline, removes cover |
| Stone wall | Vanguard heavy attack (2 hits) | Creates a shortcut, exposes ambush position |
| Suspended logs | Any ranged attack | Drops on enemies below, dealing damage and stunning |
| Bridge supports | Vanguard or explosive | Collapses bridge, cutting off pursuit |

## Key Takeaway

Mastering Mistfall Hunter's combat comes down to three skills: stamina awareness, parry timing, and knowing when to lock on. Spend your first sessions practicing the parry rhythm on Corroded enemies, use sprint only when you have stamina to spare, and unlock your camera in group fights. Each class has unique quirks (Mercenary's generous parry window, Shadowstrix's backstab bonus, Blackarrow's reliance on dodge), so adjust your approach accordingly. Once these mechanics are second nature, you will win fights you used to run from.

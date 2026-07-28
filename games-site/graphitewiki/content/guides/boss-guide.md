---
title: 'Boss Strategy Guide — All 4 Acts, Patterns, and Recommended Compositions'
description: 'Complete Graphite boss strategy guide covering all 4 act climactic encounters. Learn boss patterns, Break windows, phase mechanics, and recommended hero compositions to conquer each challenge.'
keywords: ['Graphite boss guide', 'Graphite Act 1 boss', 'Graphite Act 2 boss', 'Graphite Act 3 boss', 'Graphite Act 4 boss', 'Graphite boss patterns', 'Graphite boss fight tips', 'Graphite final boss']
category: Boss
version: '1.0'
updated: '2026-07-29'
related:
  - combat-guide
  - heroes-guide
  - builds-artifacts-guide
  - beginner-guide
---

## Boss Overview

Each of Graphite's 4 acts ends in a climactic boss encounter. These fights test your understanding of the Break system, artifact stacking, positioning, and hero synergy. Unlike regular encounters, bosses have multiple phases, unique Break thresholds, and escalating attack patterns that demand adaptation.

All bosses share these rules:

- **Phase transitions at HP thresholds**: Each boss has 2-3 phases triggered by HP milestones
- **Break windows**: Bosses have periods of vulnerability (after certain attacks or phase transitions) where Break damage is doubled
- **No rest between phases**: You face the entire fight in one continuous encounter
- **Scaling**: Bosses gain bonus artifacts based on how many days you spent in the act
- **Tarot modifiers**: Some tarot cards affect boss encounters — check your active tarot before engaging

## General Boss Tips

- **Arrive by day 5-6**: Each extra day past day 6 grants the boss a random artifact
- **Save priority actions**: Emergency abilities like Bard's Encore or Mage's Arcane Shield are often the difference between victory and a Broken party wipe
- **Learn the wind-up animations**: Every boss attack has a distinctive visual cue on its timeline icon — learn to read these before the Act 1 boss
- **Position flexibly**: Many bosses have AoE attacks that punish clumped formations in later phases
- **Bring Break resistance**: At least one group artifact granting Break defense is essential from Act 2 onward

---

## Act 1 Boss — The Hollow Knight

### Lore and Setting

The Hollow Knight guards the bridge into Act 2's territories — a corrupted former champion now animated by the same darkness spreading across the land. This is your first major test and a tutorial on boss Break mechanics.

### Phases

| Phase | HP Threshold | Behavior |
|-------|-------------|----------|
| Phase 1 | 100% - 60% | Slow sweeping strikes, occasional shield bash, summons 1 skeletal add at 80% HP |
| Phase 2 | 60% - 30% | Gains charge attack, attacks gain a 1-tick speed increase, adds spawn at 50% and 40% |
| Phase 3 | Below 30% | Enrages — all attacks are 1 tick faster, charge has no cooldown |

### Key Attacks

- **Sweeping Strike**: Hits front and middle rows. 4-tick wind-up. Easy to Break.
- **Shield Bash**: Single-target, pushes target back 2 timeline slots. 3-tick wind-up.
- **Charge** (Phase 2+): Targets back row, deals heavy damage. 5-tick wind-up. Critical Break window.
- **Enrage** (Phase 3): No wind-up — attacks resolve instantly after previous action. Race condition.

### Recommended Compositions

**Beginner**: Warrior + Mage + Bard
- Warrior tanks the Knight and Breaks its charge
- Mage AoE clears skeletal adds
- Bard speeds up Warrior's actions and slows the Knight during Phase 3

**Aggressive**: Monk + Rogue + Hunter
- Pure damage race. Break the Knight's charge, then unload all cooldowns
- Hunter marks the Knight for bonus damage from Monk and Rogue
- Risky — any missed Break results in heavy damage

### Strategy

1. Phase 1 is straightforward. Tank the Knight in the front row, clear adds when they spawn, and learn his wind-up timings
2. At Phase 2, save one hero's action for the Charge — it always targets the back row. Pre-position your tank there if possible
3. Phase 3 is a DPS check. Use Bard's speed buff and all offensive artifacts. Do not try to Break every attack — focus on interrupting only the Charge, and tank the rest
4. **Break window**: Immediately after the Knight's Shield Bash, its Poise is halved for 2 ticks. This is the best time to land a heavy Break

---

## Act 2 Boss — The Weeping Matriarch

### Lore and Setting

A massive, sorrowful entity that floods the arena with spectral tears. The Matriarch fights alongside her "children" — small, fast minions that build Break damage over time if left alive.

### Phases

| Phase | HP Threshold | Behavior |
|-------|-------------|----------|
| Phase 1 | 100% - 65% | Ranged sorrow bolts, weep pools (ground DoT), spawns 2 children every 4 turns |
| Phase 2 | 65% - 35% | Children spawn every 2 turns, weep pools cover more area, gains wail attack |
| Phase 3 | Below 35% | Arena half-covered in weep pools, children spawn every turn, enraged wail frequency |

### Key Attacks

- **Sorrow Bolt**: Ranged attack targeting a random hero. 3-tick wind-up. Moderate Break damage to target.
- **Weep Pool**: Ground AoE that lasts 5 turns. 4-tick wind-up. Avoid by repositioning.
- **Wail** (Phase 2+): AoE attack that deals Break damage to all heroes. 6-tick wind-up. Must be interrupted.
- **Children Spawn**: Not an attack — small minions that build Break stacks on your party. Kill them immediately.

### Recommended Compositions

**Control**: Hunter + Tamer + Mage
- Hunter traps slow the children's approach
- Tamer's beast body-blocks weep pool placement
- Mage clears grouped children with AoE

**Defensive**: Warrior + Bard + Monk
- Warrior tanks sorrow bolts with Break resistance gear
- Bard slows the Matriarch's action speed, creating more time between attacks
- Monk builds combos on the Matriarch while using finishers to one-shot children

### Strategy

1. Children are the real threat. If they stack Break damage on your party, the Matriarch's Wail will stunlock you. Assign one hero to child-clearing duty
2. Weep pools force repositioning. Moving your party costs ticks — plan your movement during low-threat windows
3. The Wail attack in Phase 2 has a 6-tick wind-up. This is an extremely generous Break window. Do not miss it
4. Phase 3 becomes a battlefield management puzzle. If weep pools cover both your front and middle rows, take the damage and reposition rather than wasting ticks on movement
5. **Break window**: The Matriarch's Poise drops to zero for 3 ticks after spawning children. Hit her with your strongest Break immediately after each spawn

---

## Act 3 Boss — The Clockwork Tyrant

### Lore and Setting

A mechanical monstrosity of gears and chains that manipulates the timeline itself. The Clockwork Tyrant can speed up its own actions and delay yours — the ultimate test of your understanding of timeline combat.

### Phases

| Phase | HP Threshold | Behavior |
|-------|-------------|----------|
| Phase 1 | 100% - 70% | Gear grind attacks, chain pull, random action speed buffs |
| Phase 2 | 70% - 40% | Gains time slow debuff (delays your next action by 2 ticks), chain pull targets 2 heroes |
| Phase 3 | Below 40% | Arena-wide time distortion — all action durations are randomized by +/- 2 ticks, chain pull every other turn |

### Key Attacks

- **Gear Grind**: Front-row AoE. 4-tick wind-up. High physical damage.
- **Chain Pull**: Pulls target hero to front row and stuns for 1 tick. 3-tick wind-up. Unblockable.
- **Time Slow** (Phase 2+): Delays your entire party's next action by 2 ticks. Instant — cannot be Broken.
- **Time Distortion** (Phase 3): Randomizes all action durations. Creates chaos but also creates Break opportunities.

### Recommended Compositions

**Timeline Control**: Bard + Mage + Rogue
- Bard and Mage stack timeline manipulation — speed buffs counter the Tyrant's slow debuffs
- Rogue uses stealth to avoid Chain Pull entirely (stealth removes you from timeline targeting)
- Mage's timeline reset is invaluable in Phase 3 when durations become unpredictable

**Burst through it**: Warrior + Monk + Tamer
- Warrior absorbs Chain Pulls and Gear Grinds
- Monk builds combos during Phase 1-2 and unleashes full stacks in Phase 3
- Tamer's beast provides a second target for Chain Pulls, reducing pressure on your heroes

### Strategy

1. Phase 1 is a rhythm fight. The Tyrant alternates between Gear Grind and Chain Pull. Count his actions — the pattern is consistent
2. In Phase 2, the Time Slow debuff is devastating if you just queued a long action. Save short actions (2-3 ticks) for immediately after a Time Slow
3. Phase 3 looks chaotic but has a hidden advantage: randomized durations apply to the Tyrant too. His attacks can take 6 ticks instead of 4, giving you wider Break windows
4. Save Mage's timeline reset for Phase 3 when the duration chaos becomes unmanageable
5. **Break window**: The Tyrant is vulnerable for 4 ticks after using Time Slow. He cannot act during this period — unload all damage and heavy Breaks

---

## Act 4 Boss — The Collector (Final Boss)

### Lore and Setting

The Collector is Graphite's final boss — a being that absorbs artifacts for power, mirroring your own journey. Its artifact stacks scale with the days you spent across all 4 acts, not just Act 4. The Collector's moveset changes depending on which artifact types it has absorbed during your run.

### Phases

| Phase | HP Threshold | Behavior |
|-------|-------------|----------|
| Phase 1 | 100% - 75% | Tests your party with basic attacks corresponding to absorbed artifacts |
| Phase 2 | 75% - 45% | Reveals absorbed artifact themes — gains 2 unique abilities based on your run's dominant artifact type |
| Phase 3 | 45% - 20% | Duplicates your most-used artifact effect against you |
| Phase 4 | Below 20% | Desperation — all abilities fire randomly on a shortened timeline |

### Key Attacks (Vary by Run)

The Collector's abilities depend on which artifacts you stacked most heavily:

| Your Dominant Artifact | Collector Gains |
|-----------------------|-----------------|
| Damage artifacts | Counter-strike — reflects 30% of your damage back |
| Break artifacts | Unbreakable stance — doubles its own Break resistance |
| Speed artifacts | Temporal mirror — copies your action speed buffs |
| Defense artifacts | Armor shred — ignores 50% of your Break resistance |

### Recommended Compositions

**General Purpose**: Warrior + Mage + Bard + Tamer
- Warrior handles frontline pressure
- Mage and Bard provide timeline control against the Collector's randomly firing abilities
- Tamer's beast serves as a buffer against the Collector's copied effects

**Break Focus**: Monk + Bard + Rogue + Hunter
- Pure Break strategy. Keep the Collector interrupted at all costs
- Bard's sonic Break pushes on every cycle
- Monk and Rogue alternate heavy single-target Breaks
- Hunter marks the Collector for increased Break damage

### Strategy

1. Phase 1 is a measurement phase. Let the Collector show you which abilities it has gained from your artifact history before committing to a strategy
2. Phase 2 reveals the Collector's gimmick. If it gains Counter-strike (from your damage artifacts), tone down your burst damage and focus on Breaks instead. If it gains Unbreakable stance, switch to raw damage and ignore Break attempts
3. Phase 3 is psychological — the Collector uses your own artifact strategy against you. Do not panic. You know the weakness of your own build because you have been using it all run
4. Phase 4 is chaos. The Collector fires abilities on a shortened timeline with no predictable pattern. This is where emergency priority actions and Mage's timeline reset shine
5. **Break window**: The Collector has a 6-tick vulnerability window immediately after each phase transition. These are your best damage and Break opportunities. Do not waste them on weak attacks

---

## Boss Progression Summary

| Act | Boss | Recommended Day | Key Mechanic | Critical Artifact |
|-----|------|-----------------|-------------|-------------------|
| 1 | Hollow Knight | Day 5 | Basic Break timing | Iron Will |
| 2 | Weeping Matriarch | Day 5-6 | Add management | Arcane Focus |
| 3 | Clockwork Tyrant | Day 6 | Timeline manipulation | Lute of Acceleration |
| 4 | The Collector | Day 5-6 | Adaptive mechanics | Timekeeper's Sand |

## Related Guides

- [Combat & Break System Guide](/guides/combat-guide)
- [Heroes Guide — All 7 Heroes Breakdown](/guides/heroes-guide)
- [Best Builds & Artifacts Guide](/guides/builds-artifacts-guide)
- [Beginner Guide — First Run Tips](/guides/beginner-guide)

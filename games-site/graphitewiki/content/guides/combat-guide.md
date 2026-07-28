---
title: 'Combat & Break System Guide — Timeline Tactics and Turn Manipulation'
description: 'Master Graphite timeline-based combat. Learn action durations, Break/poise mechanics, how to interrupt enemy turns, positioning strategies, turn order manipulation, and how symmetrical Break rules apply to your party.'
keywords: ['Graphite combat guide', 'Graphite Break system', 'Graphite timeline combat', 'Graphite turn order', 'Graphite how to interrupt', 'Graphite positioning guide', 'Graphite poise mechanics']
category: Combat
version: '1.0'
updated: '2026-07-29'
related:
  - heroes-guide
  - builds-artifacts-guide
  - beginner-guide
  - boss-guide
---

## Timeline Combat Overview

Every encounter in Graphite plays out on a shared timeline. Each combatant — hero or enemy — has an action queued with a visible duration measured in ticks. The timeline shows exactly when every action will resolve, who is acting next, and how much Break damage each action will deal.

The tactical depth comes from the fact that you see the enemy's plan before it happens. A skeleton winding up a heavy strike in 5 ticks gives you 5 ticks to respond — if you can land a Break before then, you cancel the attack entirely.

### Core Concepts

- **Tick**: The base unit of time in combat. One tick per combatant is processed each round
- **Action Duration**: Every action takes a fixed number of ticks to complete. Quick actions (2-3 ticks) trade power for speed. Heavy actions (5-8 ticks) hit hard but leave you vulnerable
- **Timeline Queue**: All queued actions display left to right on the timeline bar. The leftmost action resolves first
- **Initiative**: Determines which side acts first at the start of combat. Higher initiative = earlier position on the initial timeline

## The Break System

Break is Graphite's core combat mechanic — a timing-based interrupt system that applies to both your party and the enemy.

### How Break Works

Every action has a Break value. When a Breaker action lands on an enemy whose current action is in progress, it checks against the enemy's Poise:

- **Break Value > Enemy Poise**: The enemy's action is cancelled, they are pushed to the end of the timeline, and they take bonus damage
- **Break Value <= Enemy Poise**: The action lands but the enemy continues their current action unaffected
- **Poise Break Thresholds**: Enemies have a visible poise bar that shows how much Break damage they can absorb before being interrupted

### Types of Break Damage

| Break Type | Source | Effect When Successful |
|-----------|--------|----------------------|
| Physical Break | Warrior, Monk, Rogue | Pushes enemy 3 slots back on timeline |
| Arcane Break | Mage | Pushes enemy 5 slots back + slows next action |
| Precision Break | Hunter, Rogue | Deals bonus damage equal to 50% of attack power |
| Sonic Break | Bard | Pushes ALL enemies 1 slot back |
| Dual Break | Tamer (beast + hero) | Two separate Break checks on the same target |

### Break Defense

Your heroes can be Broken too. Each hero has a Poise stat that determines how much Break damage they can resist:

- **Poise regen**: Poise recovers fully between combat encounters
- **Poise damage**: Being hit while performing an action deals Poise damage even if you do not get Broken
- **Broken state**: A Broken hero is stunned for 2 ticks, loses their queued action, and takes 30% more damage until their next turn
- **Break resistance gear**: Group artifacts like Iron Will and Crystal Shield increase your party's Break defense

### The Symmetrical Design

One of Graphite's most important design features is symmetry: the same Break rules apply to you and the enemy. This means:

- If you queue a 6-tick spell, the enemy can interrupt you with a well-timed Break
- If the enemy queues a powerful charge attack, you can interrupt it with your own Break
- Faster actions (2-3 ticks) are harder for enemies to interrupt because the window is smaller
- Heavy actions are gambling — massive payoff if they land, catastrophic if interrupted

This symmetry rewards players who read the timeline and punish those who autopilot through combat.

## Positioning

Positioning determines who can target whom and how much damage is dealt. Graphite uses a lane-based positioning system with front, middle, and back rows.

### Row Effects

- **Front Row**: Melee range. Heroes here deal full damage with melee attacks but take 20% more damage from all sources
- **Middle Row**: Versatile range. Can target both front and back rows. No damage bonus or penalty
- **Back Row**: Safe range. Ranged attacks only. Heroes here take 15% less damage but deal 10% less damage with melee attacks

### Positioning Tips

- Keep your Warrior in the front row at all times — their taunt is most effective there
- Place Mage and Bard in the back row where they are harder to reach
- Rogue and Monk benefit from starting in the middle row so they can move forward when needed
- Tamer can position the beast in the front row while the Tamer stays at range
- Enemies with gap closers can reach your back row — watch for these on the enemy timeline

## Turn Order Manipulation

Beyond the Break system, several abilities and artifacts let you directly manipulate the timeline.

### Speed Manipulation

- **Action Speed**: Reduces the tick duration of your actions. A speed-buffed hero acts more frequently
- **Slow**: Increases enemy action duration. Slowed enemies take longer to reach their turn
- **Delay**: Pushes a specific enemy back on the timeline without dealing damage

### Priority Actions

Some actions have "Priority" status — they bypass the queue and resolve immediately. These are rare and powerful:

- Bard's Emergency Encore (saves a Broken ally from stun)
- Mage's Arcane Shield (instant party-wide Break protection)
- Rogue's Shadowstep (instant reposition to any row)

### Timeline Reading Tips

- Count ticks to the enemy's next action — if it is a heavy attack (6+ ticks), you have time to interrupt it
- If two enemies are acting at the same tick, prioritize Breaking the one with the AoE icon
- Save high-Break abilities for obvious enemy wind-up animations
- Do not queue a long action if an enemy with high Break damage is acting before you

## Advanced Combat Techniques

### The Double Break

Coordinate two heroes to Break the same target in succession. The first Break pushes the enemy back and deals bonus damage. If the second Break lands within 2 ticks, it deals additional bonus damage. This is the strongest single-target burst in the game.

Best performed by: Monk (setup) + Rogue (execution), or Warrior (setup) + Mage (execution)

### The Timeline Reset

Mage's ultimate ability resets the battlefield timeline to its starting order. Use this when the enemy has multiple fast actions queued back-to-back. The reset clears all queued actions and both sides start fresh.

Save this for Act 3-4 bosses who stack multiple fast minions alongside themselves.

### Kiting the Timeline

If you cannot Break an enemy because their Poise is too high, focus on action speed manipulation instead. Bard's slow songs reduce enemy action speed, effectively giving your party more turns before the enemy acts again.

## Combat Flow Checklist

1. Open: Assess the timeline — who acts first, what actions are queued
2. Priority: Break any enemy heavy attacks (5+ ticks) if possible
3. Position: Adjust rows based on enemy targeting
4. Execute: Commit to your damage rotation during safe windows
5. Reassess: After each round, check the new timeline for threats
6. Emergency: Use priority actions if a hero is about to be Broken

## Related Guides

- [Heroes Guide — All 7 Heroes Breakdown](/guides/heroes-guide)
- [Best Builds & Artifacts Guide](/guides/builds-artifacts-guide)
- [Beginner Guide — First Run Tips](/guides/beginner-guide)
- [Boss Strategy Guide](/guides/boss-guide)

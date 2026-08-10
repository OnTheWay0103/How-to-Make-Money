---
title: "Skills & Raids Combat Mechanics Guide — Real-Time, Cooldowns & Statuses"
description: "Combat mechanics guide for Skills & Raids. Real-time ability combat, cooldown and resource management, the pause mechanic, status effects, positioning, and the party resource budget."
category: "Guides"
version: "Current"
updated: "2026-08-11"
keywords: ["Skills & Raids combat mechanics", "Skills & Raids combat guide", "Skills & Raids cooldowns", "Skills & Raids status effects", "Skills & Raids pause mechanic", "Skills & Raids resource management", "Skills & Raids inventory management"]
related: ["character-guide", "extraction-guide", "skills-guide", "beginner-guide", "loot-guide", "raid-boss-guide"]
---

## Combat Mechanics Guide — Skills & Raids

**Updated: August 11, 2026**

Combat in Skills & Raids is the game's core system, and it's very different from what some guides describe. It is **not** turn-based: the Steam page describes **real-time, ability-driven combat** where you manage skill rotations, cooldowns, and resources while reacting to enemy mechanics. This guide covers every confirmed combat mechanic, the resource management that sits underneath it, and how to use both.

### The Confirmed Combat Model

| Mechanic | What It Means in Practice |
|----------|--------------------------|
| Real-time | Actions resolve continuously — no turn grid |
| Ability-driven | Two equipped abilities per character do the work |
| Cooldown management | Every skill has a cooldown you must track and rotate around |
| Resource management | Abilities cost resources; running dry mid-fight is fatal |
| Skill rotations | Order matters — setup abilities before payoff abilities |
| Status effects | Buffs and debuffs "heavily influence the outcome of each encounter" |
| Pause mechanic | Pause mid-fight to read skill and status descriptions |
| Positioning | Character positioning management is a listed feature |
| Auto-battler elements | Heroes act on their assigned abilities (coverage has compared it to auto-battlers) |

(One warning up front: systems like stamina and sanity are **not confirmed** for this game — guides that describe sprinting, dodge rolls, and sanity meters are describing a different game.)

### The Pause Mechanic: Your Best Tool

The pause mechanic is confirmed and exists specifically so you can read descriptions mid-fight. **Use it constantly:**

1. Pause at fight start — read enemy statuses, your cooldowns, your resource pools.
2. Pause before each ability use — is the setup ability off cooldown? Is the payoff ready?
3. Pause when statuses appear — what is that debuff doing? Who needs the cleanse?

In real-time combat, pause is your decision space. Players who don't pause are playing blind.

### Cooldown and Rotation Management

With two abilities per character, rotation management is simple but decisive:

- **Shelldon:** keep mitigation active; reapply on cooldown when pressure is high.
- **Clawrk:** debuff → burst, debuff → burst. Never waste the payoff on an undebuffed target.
- **Owlivia:** heal at half HP; save the big heal for real emergencies; keep HoT rolling.

**The rotation rule:** if a fight takes longer than your cooldowns can sustain, your loadout lacks damage or sustain — fix the build between runs, not mid-fight.

### Resource Management: Cooldowns and Pools

Every ability costs resources and has a cooldown (confirmed by the game's own combat description). The management problem:

| Resource | What You Manage | Penalty for Failure |
|----------|-----------------|---------------------|
| **Ability cooldowns** | When each of your two abilities is available | Bad rotations, missed windows |
| **Resource pools** (mana/energy — exact name unconfirmed) | How much each ability costs | Empty pool = no abilities mid-fight |

**Rules for combat resource management:**

1. **Never spend your last resource on a non-essential ability.** Keep enough in reserve for the healer's emergency heal.
2. **Rotate around cooldowns.** With two abilities per hero, the rotation is: use the payoff when the setup is off cooldown; use the sustain when pressure is up.
3. **Fight length is a resource.** Long fights drain everything — the loadout should end fights before resources run dry. If you're running dry mid-fight, the build needs damage or sustain changes.
4. **Pause to count.** Pause mid-fight (confirmed mechanic) and check cooldowns and pools before every decision.

### The Party as a Resource Budget

Think of party HP as a shared budget:

- **Shelldon's HP** is the budget — he spends it so the others don't.
- **Owlivia's heals** are the income — she converts her resources into party HP.
- **Clawrk's damage** is the revenue — he ends fights that would outspend the budget.

**Rule:** if two heroes are consistently low, the budget is unbalanced — either Shelldon isn't mitigating enough, or fights last too long.

### Status Effects: The Fight Decider

Confirmed: status effects heavily influence the outcome of each encounter. Expect:

- **Enemy-applied debuffs** (damage-over-time, weakened attacks, slowed actions).
- **Your own buffs** (heal-over-time, shields, damage boosts).
- **Statuses that need removal** — this is why a cleanse-style ability on Owlivia is a priority slot.

**Status rules:**
1. Read every status (pause) before reacting.
2. Remove dangerous debuffs on the tank and DPS first.
3. Damage-over-time on your side is the answer to enemy healers.
4. Never let a debuff stack unchecked — "heavily influence" means they can decide fights.

### Positioning

Character positioning management is a listed feature, and the party has natural positions — Shelldon the turtle in front, Owlivia the owl healer in the back, Clawrk in between. Principles:

- **Keep the healer out of harm's way.** A dead Owlivia is the most common run-ender.
- **Let the tank take the hits** — that's the entire job.
- **Watch for area effects** — with real-time combat, repositioning matters; pause to see incoming threats.

### Enemy Mechanics

Confirmed: you must "react to enemy mechanics," and combat areas have "unique skill mechanics." Practically:

- Each area likely twists the skill system somehow (unconfirmed specifics) — treat the first visit as a study run.
- Enemy teams include healers and tanks — plan kill orders: healers first.
- Enemies drop their own skills — beating new enemy types is also how you collect new abilities.

### The Three Combat Rules

1. **Pause before you act.** Information beats reflexes.
2. **Setup before payoff.** Debuff, then burst; shield, then push.
3. **Survival first.** If the healer is in danger, fix that before anything else.

### Resource Cycling (The Pro Technique)

Run-level resource management — inventory space is limited (exact capacity unconfirmed), and anything not in the **safe pocket** is lost on a failed run (confirmed). See the [Extraction Guide](/guides/extraction-guide) for the safe pocket and field healing, and the [Loot Guide](/guides/loot-guide) for inventory priority. The rhythm that extracts the most value:

1. Enter a run with a plan (which quests, which resources).
2. Bank early and often.
3. Send items back when bags fill (confirmed mechanic).
4. Extract the moment the plan is complete.
5. Between runs: craft, complete quests, rebuild.

The player who treats every run as a completed plan extracts more value than the player who pushes for "one more room."

### Common Combat and Resource Mistakes

| Mistake | Why It Hurts | Fix |
|---------|-------------|-----|
| Never pausing | Real-time combat overwhelms | Pause and read |
| Spamming abilities | Cooldown chaos, empty resources | Rotate deliberately |
| Emptying resource pools early | Nothing left for the emergency heal | Keep a reserve |
| Ignoring statuses | Debuffs stack and kill | Read + cleanse |
| Owlivia exposed | Healer dies, run ends | Position and protect |
| Wrong kill order | Healers stall fights forever | Healers die first |
| Ignoring field healing | Half-HP parties die in new areas | Heal before pushing (see the Extraction Guide) |
| Following stamina/sanity guides | Those systems aren't in the game | Manage cooldowns, pools, and inventory |

### Related Guides

- [Character Guide](/guides/character-guide) — the three heroes and their combat roles
- [Extraction Guide](/guides/extraction-guide) — surviving encounters to extract
- [Skills Guide](/guides/skills-guide) — the ability system
- [Loot Guide](/guides/loot-guide) — inventory priority and the safe pocket
- [Boss & Hard Encounter Guide](/guides/raid-boss-guide) — preparing for hard fights
- [Beginner Guide](/guides/beginner-guide) — getting started

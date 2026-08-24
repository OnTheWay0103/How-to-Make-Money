---
title: "Combat Guide — Mechanics, Parry & Stamina Deep Dive"
description: "Complete combat mechanics guide for The Relic: First Guardian. The confirmed stamina-for-defense economy, cooldown skills, parry chains, unblockable tells, parry timing practice, and honest notes on unconfirmed frame data."
category: "Guides"
version: "1.0"
updated: "2026-08-11"
keywords: ["relic first guardian combat guide", "relic first guardian parry", "relic first guardian parry timing", "relic first guardian how to parry", "relic first guardian stamina", "relic first guardian combat mechanics", "relic first guardian dodge"]
related: ["boss-strategies", "weapons-guide", "beginner-guide"]
sources:
  - tier: "Official"
    text: "The combat economy — attacks cost zero stamina, stamina is defense-only (dodge/block/parry), skills run on cooldown timers with no mana — Steam store page and official materials"
  - tier: "Community"
    text: "Generous parry window, parry chains up to 15 hits, unblockable-attack tells, and lack of visible stagger are from launch reviews and player reports"
  - tier: "Editorial"
    text: "The parry-timing practice method, tell-reading table, and stamina-discipline rules are our strategy"
---

# Combat Guide — Mechanics, Parry & Stamina Deep Dive

The Relic: First Guardian's combat sets itself apart from traditional soulslikes with one confirmed innovation: **attacks cost zero stamina**. Offense is free; stamina is a defense-only resource for dodging, blocking, and parrying. Skills run on **cooldown timers** instead of mana. This guide covers the confirmed mechanics in depth — the parry timing system, stamina discipline, and the frame-data claims you should not trust yet.

---

## The Confirmed Core Rules

| Rule | Detail |
|------|--------|
| **Attacks cost zero stamina** | Swing freely; there is no attack stamina budget |
| **Stamina = defense only** | Dodge, block, and parry spend it (exact costs unconfirmed) |
| **Skills use cooldowns** | No mana/resource; strong abilities simply need their timer to refill |
| **Parry window is generous** | Confirmed by multiple launch reviews |
| **Parries stagger enemies** | Chained parries break guards; some bosses need long parry chains |
| **Enemies rarely stagger** | No visible stagger bar; do not fish for stuns |
| **Some attacks are unblockable** | Must be dodged — blocking/parrying fails |

---

## The Stamina Economy

Since attacks are free, the entire stamina system is about defense:

1. **Never stop attacking when safe** — pressure is free; hesitation only gives the enemy stamina-free aggression of their own.
2. **Guard stamina for defensive needs** — every dodge and parry drains it; an empty bar means a guaranteed combo hit.
3. **Do not panic-dodge** — wasted dodges are the #1 new-player stamina leak.
4. **Regen discipline** — when the bar is low, reset distance and wait; most deaths come from engaging with an empty bar.

**Exact numbers**: per-action stamina costs, recovery rates, and any "keep stamina above X" advice are **unconfirmed** at launch. Guides quoting exact values (e.g., "25 stamina per roll") are speculative.

---

## The Parry System

Parrying is a core, confirmed mechanic — and reviews agree the timing window is **generous** compared to most soulslikes.

### What We Know (Confirmed)

- Press the block/parry input as an enemy attack lands.
- **Successful parries stagger enemies** and build toward breaking a boss's guard.
- Some bosses are **parry-gate** fights: you must land **repeated parries — up to 15 in a row per one launch review** — before an attack window opens.
- A failed parry leaves you vulnerable (you cannot parry mid-swing).
- **The system context**: because attacks cost zero stamina, you are never choosing between attacking and parrying — only between defenses.

### Reading Tells (The Real Skill)

The #1 confirmed tip from strategy guides: **watch the weapon, not the body.**

| Tell Category | What to Read | Response |
|---------------|--------------|----------|
| Wind-up length | The attack limb's full swing arc | Parry as the weapon reaches its extension, before impact |
| Chain position | Which hit of a combo is coming | Parry the last hit of a chain — mid-chain parries build the meter, end-of-chain parries create the window |
| Heavier tells | Tells that look heavier than the rest of the chain | **Dodge** — that's the unblockable woven into the combo |
| Rhythm breaks | A boss that pauses mid-combo | The pause is bait — don't parry a dead window |

**The two-second rule:** if a tell looks ambiguous, dodge. A missed parry leaves you vulnerable; a dodge always moves you. When in doubt, the game's generous window favors parrying — but only when the attack is *definitely* parryable.

### Parry-Chain Discipline (Parry-Gate Fights)

Parry-gate bosses work on a two-phase loop:

| Phase | What You Do | Mistakes |
|-------|-------------|----------|
| Chain phase | Land deliberate parries to fill the guard meter | Parrying a rhythm you assume instead of the attack coming |
| Window phase | Guard breaks — the boss is staggered and open | Wasting the window on weak attacks; burst with your highest-damage skills (skills run on cooldowns, not resources — spend them here) |

**Chain rules:**

1. **Parry the attack that is coming, not the beat you expect.** Parry-gate bosses vary their rhythm deliberately.
2. **Count the chain.** Keeping track of how far through it you are keeps you from breaking early.
3. **Never parry an unblockable.** In mixed fights, bosses weave unblockable hits into combos — a "heavier" tell is the dodge signal.
4. **Preserve stamina for the chain.** Every failed parry costs stamina; treat the bar as chain ammo.

### The Practice Routine

1. **Start on regular enemies, not bosses.** Normal enemies telegraph generously — perfect parry practice.
2. **Learn one attack at a time.** Fight the same enemy repeatedly, parrying only its wind-up attack, until it's automatic.
3. **Then learn chain-parrying.** Parry every hit of a three-hit combo, ending on the last.
4. **Then take it to a parry-gate Brutal.** The chain phase is where the discipline pays — count to the window, then burst.
5. **Check the controls.** Confirm your parry input binding in the [Controls & Settings Guide](/guides/controls-settings-guide) — a bad binding costs frames.

### Common Parry Mistakes

1. **Parrying the body, not the weapon.** Tells are read off the attacking limb — that's the confirmed method.
2. **Breaking the chain early.** At parry 12 of 15, quitting resets the meter — the boss wins by attrition.
3. **Parrying unblockables.** Wasting stamina on a dodge-gate attack is how dodge-gate bosses kill parry-happy players.
4. **Mid-swing parries.** You cannot parry mid-swing — a failed parry locks you into vulnerability.
5. **Skipping the practice.** The window is generous, but generosity only helps if you're reading the tells; practice is the difference.

### Unconfirmed Parry Claims

Frame counts, "riposte multipliers," parry-refund values, and per-weapon parry windows are **unconfirmed**. Any guide with precise frame numbers is speculating.

---

## The Dodge System

Dodging is the other half of defense — and the *only* defense against **unblockable attacks**.

### Confirmed Dodge Facts

- Dodge consumes stamina (exact cost unconfirmed).
- Dodge is mandatory for dodge-gate bosses (unblockable attacks).
- i-frames (invulnerability frames) exist — this is a soulslike; the exact i-frame counts are unconfirmed.

### Dodge Discipline

1. **Dodge through, not away** — dodging through an attack keeps you in position to punish the recovery.
2. **One dodge per attack** — chain-dodging drains stamina into the next combo.
3. **Sprint for area effects** — when an attack covers a large area, positioning beats rolling (inference from soulslike design; verify in-game).
4. **Never dodge on empty stamina** — the bar must be managed like a health bar.

**If a fight isn't responding to parries** (probe: one early parry), it's a dodge-gate fight — switch immediately and stop spending stamina on parries. The [Boss Strategies Guide](/guides/boss-strategies) explains the full archetype split.

---

## Skill Cooldown Optimization

Skills are your offense multiplier — cooldown timers mean they are always available if you use them.

### Confirmed Facts

- Skills run on cooldowns (no mana, no resource).
- Skill tree nodes can **reduce cooldowns** via relics and tree purchases.
- The staff family leans on skills ("skill-spamming" per reviews).

### Best Practices

1. **Use skills on cooldown in boss fights** — cooldowns mean no reason to hoard; an unused skill is a dead DPS slot.
2. **Open with long-cooldown skills** — start the timer early so they come back during the fight. (Strategy advice; exact cooldown lengths unconfirmed.)
3. **Buy cooldown/HP nodes early** — Relic Energy spent on the right nodes changes fights more than gear.

---

## Enemy Telegraphing

The game tells its story through the world, and it tells you attacks the same way — through tells. Confirmed mechanics:

- **Unblockable attacks exist** and must be dodged — learning the tell is mandatory.
- Reviews note enemies are **aggressive** and **rarely stagger**, with **no visible stagger bar** — you cannot stun-lock your way through.

Specific visual cues per enemy are **unconfirmed**. General soulslike rules apply: watch the weapon, note the windup, respect the audio cue.

---

## Advanced Techniques — Confirmed vs Unconfirmed

| Technique | Status |
|-----------|--------|
| Parry chains to break boss guard (up to ~15 parries, per launch reviews) | **Reported** (exact counts unverified) |
| Dodging through attacks using i-frames | **Confirmed** (exact frames unconfirmed) |
| Build swapping between fights (relics/gear) | **Confirmed** — the game's intended loop |
| Stagger-locking bosses with heavy attacks | **Unconfirmed** — enemies rarely stagger |
| Elemental combos (fire+oil, lightning+wet) | **Unconfirmed** — no elemental system verified |
| Backstab/critical multipliers | **Unconfirmed** |
| Animation-canceling via dodge | **Unconfirmed** |

---

## Combat Checklist for New Players

1. Attack constantly — it costs zero stamina
2. Save stamina ONLY for dodging, blocking, and parrying
3. Identify parry-gate vs dodge-gate fights early
4. Learn the unblockable tells — dodge those, never block them
5. Commit to parry chains when the boss is parry-gate
6. Use skills on cooldown — they recharge
7. Swap relics before every major boss fight
8. Ignore frame data claims — the verified facts are above
9. Practice parrying on regular enemies before bosses — the window is generous, but tells still need reading

---

## Common Questions

**Q: Do attacks cost stamina?**
A: **No** — attacks cost zero stamina. Stamina is for defense only.

**Q: Is the parry window small?**
A: **No** — multiple launch reviews describe it as generous.

**Q: How do I get better at parrying?**
A: Watch the weapon, not the body; parry the attack that is coming rather than a rhythm you assume; practice on regular enemies first. When a tell looks ambiguous, dodge.

**Q: Can I block everything?**
A: **No** — unblockable attacks must be dodged.

**Q: How do skills work without mana?**
A: Skills run on **cooldown timers** — use them, wait, repeat.

**Q: Why do enemies never stagger?**
A: Confirmed design: enemies **rarely stagger** and have no visible stagger bar. Create openings with parries and dodges, not stun-locks.

---

### Related Guides

- [Boss Strategies](/guides/boss-strategies) — Parry-gate vs dodge-gate tactics for the 70-80 Brutals
- [Weapons Guide](/guides/weapons-guide) — How each family uses the combat economy
- [Beginner Guide](/guides/beginner-guide) — Learning the basics step by step

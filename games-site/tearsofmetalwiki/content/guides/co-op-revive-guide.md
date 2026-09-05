---
title: "Tears of Metal Co-op Revive Guide — Health-Cost Rules & the v0.12 Change"
description: "Why reviving a downed teammate in Tears of Metal no longer costs coins — the v0.12.58540 (August 13) change to a health-based revive. How the new rules work (give up 50% of your current health, the revived player's health scales with what you give, you need over 10% max HP to revive, and every revive shortens the window by 5 seconds) and how to revive smartly in co-op."
category: "Guides"
version: "Early Access"
updated: "2026-09-06"
keywords: ["Tears of Metal co-op revive", "Tears of Metal revive health cost", "Tears of Metal how to revive teammate", "Tears of Metal revive changed 0.12", "Tears of Metal can't revive", "Tears of Metal downed teammate", "Tears of Metal revive no longer coins"]
related: ["co-op-guide", "healing-guide", "survival-tips", "boss-guide", "patch-notes", "multiplayer-connection-fix-guide"]
sources:
  - tier: "Official"
    text: "Paper Cult's v0.12.58540 patch (August 13, 2026) changed co-op revives from a coin cost to a health cost; the developer explained the old coin system 'untangled' poorly with the Charm economy because players hoarded coins for increasingly expensive revives — Steam Community announcements (steamcommunity.com/app/1913120/allnews). The follow-up v0.14.58630 patch (August 14, 2026) continued multiplayer bug fixes."
  - tier: "Community"
    text: "The exact v0.12.58540 revive numbers (reviver gives 50% of current health, revived player returns with health proportional to the share of max health surrendered, reviver needs more than 10% of max HP, and the revive window shortens by five seconds per revive) are documented by the Tears of Metal update-history wiki (thegameswiki.com/tears-of-metal/wiki/update-history) and repeated in independent coverage of the patch (ingamenews.com, gamereactor.se, primagames.com, 163.com), checked September 2026."
  - tier: "Editorial"
    text: "The revive-decision framework (when to revive vs. let a teammate sit, who should be the designated reviver, boss-arena timing) is this guide's editorial assembly of the official rules; the base length of the revive window is not published anywhere we could verify and is marked [Unconfirmed]"
---

# Tears of Metal Co-op Revive Guide — Health-Cost Rules & the v0.12 Change

> **Early Access / Updated: September 6, 2026**

If you played Tears of Metal in the first weeks after the July 22 launch, you remember co-op revives costing **coins** — and a party scraping together 250/350 coins to pick a teammate back up before the next banner. That system is gone. Patch **v0.12.58540 (August 13, 2026)** replaced coin revives with a **health-based revive**, and the new rules change how you should think about every downed teammate.

**The short answer:** reviving now costs **50% of your current health**, you must have **more than 10% of your max HP** to revive anyone, and the revived player comes back with health that scales with what you gave up. Every revive in a run also **shrinks the revive window by five seconds**.

> **Honesty note:** the exact numbers below come from the official v0.12.58540 patch notes (via Steam and the update-history wiki). The base length of the revive window is **[Unconfirmed]** — Paper Cult has not published a value we could verify.

---

## 1. What Changed in v0.12.58540 (and Why)

Paper Cult shipped the health-based revive in the same patch that overhauled networking and added the game's first named companion. The developer's stated reason for the change is that the old coin system and the Charm economy "had been working against each other":

- **Players hoarded coins for revives.** Because the coin price rose with each revive, a party that expected to pick people up stopped spending on Charms and shops.
- **Late runs could price revives out of reach.** A team deep into an Act could reach a point where a revive was simply unaffordable — so a wipe came from running out of coins, not out of skill.

The health-cost system removes the coin conflict entirely: there is **no longer any coin cost to revive**, and nothing to hoard. Healing-font prices still climb, but now only **from one Act to the next**, not per revive within a run. [Official]

> **If you are confused by the Healing Guide:** the coin-revive prices you may have seen listed there (roughly 250/350 coins) describe the **pre-v0.12** system and **no longer apply** on the current build. The guide predates the August 13 change and is awaiting calibration — trust the rules below for current play.

---

## 2. How Reviving Works Now (v0.12+)

When a teammate goes down in co-op, the rules are:

| Rule | Detail |
|------|--------|
| **Cost to revive** | The reviving player gives up **50% of their current health** — not 50% of max HP, but half of what they have at the moment they start the revive. |
| **Minimum to revive** | You must have **more than 10% of your maximum health** to revive anyone. Below that, the option is unavailable. |
| **Revived player's HP** | The revived teammate returns with health **proportional to the share of your max health you actually surrendered**. |
| **Revive window** | You revive within a window after the teammate drops; **every revive in a run shortens that window by five seconds**. |

Two consequences follow directly from the "proportional to what you give" rule:

- **Revive early, revive healthy.** If you start the revive at full health, you give up a large share of max HP and your teammate comes back strong. If you start it at 30% health, you give up very little — and they return with very little, often to be downed again immediately.
- **A barely-alive reviver is a trap.** The >10% gate stops a player on a sliver from reviving, but someone at 15% can technically do it and will produce a teammate who is almost useless. Decide whether that trade is worth it.

### What did NOT change

- Downed teammates still need someone to reach them inside the window.
- Revives are still not available in every mode/situation — the [Co-op Guide](/guides/co-op-guide) covers the team-play fundamentals this builds on.

---

## 3. Revive Strategy in Practice

The health-cost system rewards a different discipline than the old coin reserve:

1. **Do not be the low-HP designated reviver.** Under coins, the poorest player could still pay if the party pooled funds. Under health, a reviver at 20% HP produces a teammate at a sliver — pick whoever is healthiest to do the pickup, not whoever is closest.
2. **Keep the anchor above 50%.** If your group's reviver (usually the tanky Wallace) drops below half, they are now a poor reviver. Heal them up (or let the [Survival Tips](/guides/survival-tips) discipline of blocking over taking hits kick in) before a fight where someone is likely to go down.
3. **Treat revives as a shared-HP pool.** Your 50% is the teammate's incoming HP. Before reviving in a horde, ask: can you afford to lose half your health *here*? Reviving mid-swarm often means you both go down. Clear space first.
4. **Do not chain-revive greedily.** Because every revive shortens the next window by five seconds, a run where the party is trading downs back and forth makes the window tighter each time — late-run recoveries get much harder. It is better to let a teammate sit through a safe moment than to burn a revive that makes the next rescue nearly impossible.
5. **In boss arenas, time the revive to a safe phase.** Boss fights ([Boss Guide](/guides/boss-guide)) are where revives matter most and windows are cruellest. Wait for the boss's recoverable pause, have the healthiest player commit, and accept that the revived teammate will need immediate healing.

---

## 4. FAQ

**Do revives still cost coins?** No. The coin cost was removed in v0.12.58540. [Official]

**Why can't I revive when my health is low?** You need more than 10% of your maximum health to start a revive. Below that the option is unavailable. [Official]

**Why does my teammate come back with almost no HP?** The revived player's health scales with the share of *your max health* you gave up. If you revived at low health, you surrendered little — so they return with little. Revive while healthy to give them a real chunk back. [Official]

**Why is the revive window getting shorter?** Every revive in a run shortens the window by five seconds. It is a run-wide cost, so late runs have tighter windows. [Official]

**Is this different from what the Healing Guide says?** Yes — the Healing Guide's "co-op revive costs" section still reflects the pre-v0.12 coin system. The current, health-based rules in this guide supersede it.

**Does this apply to solo play?** No — there is no one to revive in solo. See the [Solo Guide](/guides/solo-guide) for the single-player loop.

---

## Related Guides

- [Co-op Guide](/guides/co-op-guide) — team comps, roles, and coordination
- [Healing Guide](/guides/healing-guide) — fonts, chicken, salves & HP economy
- [Survival Tips](/guides/survival-tips) — not taking the hit in the first place
- [Boss Guide](/guides/boss-guide) — boss fights where revive timing matters most
- [Patch Notes](/guides/patch-notes) — the patch history around the v0.12 change
- [Multiplayer & Connection Fixes](/guides/multiplayer-connection-fix-guide) — desync and connection problems that can cause "impossible" downs

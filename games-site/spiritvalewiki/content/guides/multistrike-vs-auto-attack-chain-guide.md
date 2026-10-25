---
title: "Multistrike vs Auto Attack Chain in SpiritVale — Why Extra Hits Don't Multiply Your Damage"
description: "Multistrike and Auto Attack Chain are two different hit-count stats in SpiritVale. One adds hits to the same attack, the other sends basic attacks at nearby enemies. Here is what each one rolls on, which skills actually scale with Multistrike, and which builds should skip it."
category: "Guides"
version: "EA"
updated: "2026-10-25"
keywords:
  - "spiritvale multistrike"
  - "spiritvale auto attack chain"
  - "multistrike vs auto attack chain"
  - "spiritvale multistrike explained"
  - "spiritvale auto attack chain stat"
  - "spiritvale multistrike skills"
related:
  - combat-controls-guide
  - weapons-guide
  - gunslinger-guide
  - shinobi-guide
  - builds-guide
  - gear-progression
sources:
  - tier: "Official"
    title: "[0.16.0] Rebalance Patch"
    url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1830163047263378"
    date: "2026-04-19"
    text: "SpiritVale Steam announcement, April 19, 2026: lists skills that 'scales with Multistrike' — Strafing Volley, Fan Fire, Panic Burst, Venom Strike and Axe Throw — states that the Gatling Gun had 'reduced Multistrike and Chain', and changes Blood Frenzy to '+100% Multistrike instead of AA damage'."
  - tier: "Official"
    title: "[0.31.0] Dark Fortress"
    url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1841579228677039"
    date: "2026-08-25"
    text: "SpiritVale Steam announcement, August 25, 2026: the Duskbringer gatling gun is listed with 'Multistrike 150' and 'Auto Attack Chain +1', face gear can roll '+1% multistrike', and a Lockdown fix notes that 'the stat sheet is not updated past 1 stack'."
  - tier: "Official"
    title: "[0.30.14] Balance Changes + New Spire Weapons"
    url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840944183785583"
    date: "2026-08-17"
    text: "SpiritVale Steam announcement, August 17, 2026: Razors Edge gains '+5% Multistrike per refine'. A later note, [0.33.0] on October 1, 2026, gives Judgement Blade 'Triggers Hit and scales with Multistrike'."
  - tier: "Community"
    title: "Auto Attack Chain vs Multistrike - Difference (r/SpiritVale)"
    url: "https://www.reddit.com/r/SpiritVale/comments/1vziod8/auto_attack_chain_vs_multistrike_difference/"
    date: "2026-08-27"
    text: "Thread opened because the two stats looked interchangeable. Six different players answer with testing reports: Multistrike adds hits to the same target while Auto Attack Chain makes basic attacks link to nearby enemies; 100% Multistrike is described as one extra hit with the remainder acting as a chance; extra Multistrike hits are reported not to trigger auto-cast effects. Individual answers are player testing, not documentation."
  - tier: "Community"
    title: "Spineshard — SpiritValers equipment database"
    url: "https://spiritvalers.com/equipment/spineshard"
    date: "accessed 2026-10-25"
    text: "Level 50 sword listing 'Multistrike +100%' and 'Auto-Attack Chain +6' as two separate secondary stats, which confirms the game treats them as different values with different units."
  - tier: "Community"
    title: "Stormfeather Kunai — SpiritValers equipment database"
    url: "https://spiritvalers.com/equipment/stormfeather-kunai"
    date: "accessed 2026-10-25"
    text: "Level 50 dagger listing 'Multistrike +50%' and 'Auto-Attack Chain +1' on the same item, alongside a potential-substat pool where the two also roll independently."
  - tier: "Editorial"
    text: "Build recommendations and the troubleshooting order in this guide are our analysis of the official notes and the community reports above. Exact hit math is labelled where it is community testing rather than official documentation."
---

# Multistrike vs Auto Attack Chain in SpiritVale — Why Extra Hits Don't Multiply Your Damage

> **Applies to Early Access / Updated: October 25, 2026**

The most common gear question in the SpiritVale community is not "which weapon is best" but "what is the difference between Multistrike and Auto Attack Chain". Both stats promise more hits. Both appear on the same weapons. Players slot one, see a damage change that does not match the number on the tooltip, and assume the stat is bugged.

It is not bugged. The two stats do different jobs, they roll in different units, and only some skills can use one of them at all. This guide separates them, shows which skills the developers have confirmed scale with Multistrike, and explains which builds should ignore each stat.

---

## The short answer

| | **Multistrike** | **Auto Attack Chain** |
|---|---|---|
| Unit | Percentage | Flat count |
| What it does | Adds extra hits to an attack against the **same** target | Makes basic attacks link to **additional nearby** enemies |
| Where it rolls | Weapons, face gear, refine lines, substats | Weapons and substats |
| Example values | Spineshard `+100%`, Stormfeather Kunai `+50%`, Duskbringer `150` | Spineshard `+6`, Stormfeather Kunai `+1`, Duskbringer `+1` |
| Best for | Single-target attack skills and auto-attack builds | Clearing packs while you auto-attack |

The clean way to remember it: **Multistrike repeats a hit, Auto Attack Chain spreads a hit.** If you are fighting one boss and wondering why your chain stat does nothing visible, that is the answer. If you are farming a dense map and wondering why Multistrike feels weaker than the number suggests, that is also the answer.

---

## What Multistrike actually does

Multistrike is a percentage stat that gives an attack more hits on the target you are already hitting. Community testing in the r/SpiritVale thread is consistent on the shape of the rule: **100% Multistrike is reported as one extra hit, and the remainder is treated as a chance at another** *[Unconfirmed]*. One tester describes 150% as "1 extra hit, and 50% chance for another hit", and 200% as two extra hits.

The exact rounding is not documented by the developers, so treat those thresholds as community observation rather than a formula. What is documented is that Multistrike is a real, separately tracked stat: the Duskbringer gatling gun is listed with `Multistrike 150` in the 0.31.0 notes, Razors Edge gained `+5% Multistrike per refine` in 0.30.14, and face gear can roll `+1% multistrike`.

The more important limit is **which abilities can use it**. The developers mark Multistrike scaling skill by skill, and the list is shorter than most players assume.

### Skills the patch notes name as scaling with Multistrike

| Skill | Class | Patch note |
|---|---|---|
| Strafing Volley | Gunslinger | 0.16.0 |
| Fan Fire | Gunslinger | 0.16.0 |
| Panic Burst | Gunslinger | 0.16.0 |
| Venom Strike | Rogue / Shinobi | 0.16.0 |
| Axe Throw | Berserker | 0.16.0 |
| Judgement Blade | Paladin | 0.33.0 |

Blood Frenzy is a separate case: the same 0.16.0 patch changed it to grant `+100% Multistrike instead of AA damage`, which makes it a buff rather than a scaling skill.

If a skill is not on that list or marked in its own tooltip, community testers report that Multistrike does not apply to it *[Unconfirmed]*. One answer in the thread puts it bluntly: "Most skills dont work with multi strike, if they do the skill usually says so."

---

## What Auto Attack Chain actually does

Auto Attack Chain is a flat number, not a percentage, and it works on a different axis. It makes your **basic attacks** link to nearby enemies, so one swing can damage a small group instead of a single target.

The stat appears on gear in whole numbers — Spineshard carries `Auto-Attack Chain +6`, Stormfeather Kunai carries `+1`, and the Duskbringer carries `+1` alongside its Multistrike line. That flat-value pattern is why the two stats are easy to confuse: they sit next to each other on the same item, but `+1` chain and `+1%` Multistrike are not comparable.

Chain also shows up as something developers can add or remove. The 0.16.0 notes say the Gatling Gun had "reduced Multistrike and Chain", which confirms Chain was an existing weapon value being tuned, not a player nickname.

The practical consequence: Auto Attack Chain is a **trash-clearing stat**. Against a single boss with no adds nearby, chain has nothing to link to. It is close to dead weight in a pure single-target fight, which is why endgame boss builds often skip it entirely.

---

## The interaction that decides your build

The two stats stop being cosmetic when your build depends on auto-cast effects.

Community testing reports that **extra hits from Multistrike do not re-trigger auto-cast spells**, while a chained hit on a second monster can. The example used in the thread is a Shinobi chain-lightning setup: stacking Multistrike gives you more physical hits on the same target, but it does not fire Chain Lightning more often, because the extra hits are part of the same attack. A chained auto-attack that reaches a new enemy does trigger effects tied to hitting that enemy.

That single interaction reverses the usual advice. On an auto-attack Berserker, Multistrike is the natural pick — more hits on the target you are already committing to. On a Shinobi auto-attack chain-lightning build, the same stat is reported to be the wrong purchase, because the build's damage comes from procs rather than raw hit count.

Whether the extra Multistrike hits carry other on-hit effects (leech, status application) is less settled. One tester says the hits "might also trigger on hit effects" but explicitly notes he has not tested it *[Unconfirmed]*. Do not build around that assumption until you have checked it on your own character.

---

## Which stat for which build

| Build | Better stat | Why |
|---|---|---|
| Auto-attack Berserker | **Multistrike** | More hits on the same target, and Blood Frenzy already grants Multistrike |
| Shinobi auto-attack / Chain Lightning | **Auto Attack Chain** | Chain reaches new enemies and can fire the proc; Multistrike does not |
| Gunslinger (Fan Fire / Panic Burst) | **Multistrike** | Both skills are explicitly listed as scaling with it |
| Paladin (Judgement Blade) | **Multistrike** | Added as a scaling skill in 0.33.0 |
| Open-map farming on any class | **Auto Attack Chain** | Clears packs faster while you hold auto-attack |
| Single-target bossing | **Multistrike** | Chain has nothing to link to |

A weapon can carry both, and the good ones do. The mistake is paying a premium for one line when your build only uses the other.

---

## How to check your own numbers

1. Open your stat sheet and note the Multistrike percentage and the Auto Attack Chain count separately. They are different lines even when they sit next to each other.
2. Test on the training dummies rather than in a map. Damage numbers on a single dummy isolate Multistrike; a pack of monsters is needed to see chain.
3. Re-check after buffs. The 0.31.0 notes record a case where Lockdown's Multistrike stacking was fixed but "the stat sheet is not updated past 1 stack" — the panel is not always a perfect readout of what is applied.
4. Change one item at a time. Swapping a weapon changes both stats at once on many items, which is how players conclude the wrong stat is broken.

---

## Common mistakes

- **Treating `+1` as `+1%`.** A chain value of 1 and a Multistrike value of 1% are not the same magnitude.
- **Buying Multistrike for a skill that does not scale with it.** Check the tooltip or the table above first.
- **Expecting chain to help on a lone boss.** It has no second target to reach.
- **Expecting Multistrike to double damage at 100%.** Community testing describes one extra hit, not a doubled attack.
- **Assuming the stat sheet is live.** Stacking buffs can outrun the panel.

---

## FAQ

**Is Multistrike the same as attack speed?**
No. Attack speed changes how often you swing; Multistrike adds hits to a swing you already made. The 0.31.0 face gear even lists them as separate lines: `+1% multistrike, +1% aspd`.

**Does Multistrike work on skills or only auto attacks?**
Only on skills the game says it works on. The patch notes name several, and players report that unmarked skills do not benefit *[Unconfirmed]*.

**Why does my Auto Attack Chain stat do nothing?**
Because you are fighting one target. Chain needs nearby enemies to link to.

**Can I have both stats on one weapon?**
Yes. Spineshard and Stormfeather Kunai both carry a Multistrike percentage and a chain count on the same item.

---

## Related Guides

- [Combat & Controls Guide](/guides/combat-controls-guide) — auto-attack input, stances and the basics this article assumes
- [Weapons Guide](/guides/weapons-guide) — weapon types and where the Duskbringer and Spire weapons come from
- [Gunslinger Guide](/guides/gunslinger-guide) — the class with the most Multistrike-scaling skills
- [Shinobi Guide](/guides/shinobi-guide) — chain-lightning and auto-attack setups where Multistrike is a trap
- [Builds Guide](/guides/builds-guide) — full stat and skill allocations
- [Gear Progression](/guides/gear-progression) — when a stat line is worth replacing

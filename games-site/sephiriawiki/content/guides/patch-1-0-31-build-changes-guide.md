---
title: "Sephiria 1.0.31 Patch Guide — How to Rework Your Build After the September 10 Update (New Weapon Upgrades, 8 New Artifacts and Rebalances)"
description: "Sephiria 1.0.31 (September 10, 2026) added six new weapon upgrades, eight new artifacts and a Comprehensive Training Grounds, and rewrote eleven artifacts and seventeen weapons. Here is what actually changed, which builds it hits, and how to re-test before you spend materials."
category: "Guides"
version: "1.0"
updated: "2026-09-12"
keywords: ["sephiria 1.0.31", "sephiria patch notes", "sephiria 1.0.33", "sephiria 1.0.31 new artifacts", "sephiria update september 2026", "sephiria build changes", "sephiria blinding silence", "sephiria garden of needle ice", "sephiria bloodletting gearblade", "sephiria cerulean cloud sword arges", "sephiria m-9200 crossbow", "sephiria training grounds"]
related: ["weapons-guide", "artifacts-guide", "builds-guide", "sword-shield-build-guide", "greatsword-build-guide", "katana-build-guide", "crossbow-build-guide"]
sources:
  - tier: "Official"
    text: "Patch 1.0.31 was posted as the Steam Community announcement '1.0.31 Update' on September 10, 2026 (Steam app 2436940). Every upgrade name, artifact name, stat line and effect rewrite in this guide is taken from that announcement: the two new Sword and Shield upgrades (Blinding Silence, Garden of Needle Ice), the Magic Wand removal and its replacement Prismatic Magic Wand, the Great Sword upgrade Bloodletting Gearblade, the Crossbow upgrade M-9200, the Blade upgrade Cerulean Cloud Sword Arges, the eight new artifacts, the eleven reworked artifacts, the seventeen reworked weapons, and the Comprehensive Training Grounds addition. The previous build, 1.0.30, was posted on August 20, 2026, making 1.0.31 the first update in three weeks. The Training Grounds freeze history referenced here comes from the same announcement series (known issue in 1.0.24, fixed in 1.0.25)"
  - tier: "Community"
    text: "The 1.0.31 notes carry the developers' own community-feedback marker: the announcement states that a carrot icon indicates improvements made based on community feedback. Ten entries in this patch are carrot-marked, including restoration of weapon-slot skills to quick slots when weapon input customisation is disabled, quest-progression fixes when several quests run at once, a Chapter 1 costume that could not be unlocked, the Chapter 6 earthquake cutscene replaying after visiting another area, potions dropping on the ground when potion slots decrease, and three multiplayer changes (spectating ending when the spectated player changes area, dropped bound items becoming visible to all players, and a chat character limit with tag formatting blocked). TEAM HORAY collects reports on their Discord and on the Steam Discussions hub for the game, which is also the channel the announcement points players to"
  - tier: "Editorial"
    text: "Aggregated player-sentiment analysis for Sephiria has consistently flagged weapon-balance diversity and boss health as the two most-cited design complaints, which is the context these weapon rewrites land in (VaporLens churn and retention analysis, app 2436940; data snapshot through August 2026, so it predates 1.0.31). September 2026 coverage of the game is otherwise positive: a September 5, 2026 blog review published during the same window as this patch treats the game favourably and focuses on its Steam Deck performance rather than on build mechanics. No third-party outlet had published a breakdown of the 1.0.31 contents at the time this guide was written, so nothing here is restated from secondary coverage"
  - tier: "Official"
    text: "The '1.0.33 Update' Steam announcement (Steam app 2436940) was posted September 11, 2026, and its full text was read for the appendix at the end of this guide: the Demonic Grimoire miniboss-pattern improvement, the Qliphoth pause/abandon fix, the two Meteorite Pauldrons Solar Blade fixes, the Master's Tsuba effect change (Sheath and Unsheath invincibility from a flat 0.05/0.15/0.25 seconds to 40/70/120%), the Heidi effect-text update, the Scholar Lizard costume fix, the UI text pass, the Comprehensive Training Grounds tutorial-popup fix, and the opening Known Issues note about enemies moving outside walls. No 1.0.32 announcement sits between 1.0.31 and 1.0.33"
---

# Sephiria 1.0.31 Patch Guide — How to Rework Your Build After the September 10 Update

**The short answer:** patch **1.0.31** landed on **September 10, 2026** and is the most build-relevant update Sephiria has had. It adds **six new or replacement weapon upgrades** and **eight new artifacts**, and rewrites the effects of **eleven existing artifacts and seventeen weapons**. One upgrade you may be saving toward no longer exists — the Sword and Shield's **Magic Wand** node was removed. Read the change list before you spend materials. [Official]

## The Six New Weapon Upgrades

**Blinding Silence** (Sword & Shield) — Lightning Damage **+5**; the **Thunder's Earring** artifact fires **1** extra attack and gains **+100** damage; using **Special Attack: Cleave** now **immediately activates** Thunder's Earring. It turns a passive artifact into an on-demand trigger. [Official]

**Garden of Needle Ice** (Sword & Shield) — Cold Damage **+5**; the **Ice Vine** artifact now **orbits the player** on activation and **has no cooldown**. Losing the cooldown is the bigger half — Ice Vine moves from a burst tool to a persistent orbit, which matters in rooms where you cannot stand still. [Official]

**Prismatic Magic Wand** (Sword & Shield) — **replaces the removed Magic Wand node**. It changes Weapon Attack to use **Magic Missile**, with the element set by your **Highest Elemental Damage**. If two or more elements are **tied** for highest, it deals **Chaos Damage** instead. The tie-break rule is the part to plan around: on a dual-element build you can deliberately keep two elements level to force Chaos. [Official]

**Bloodletting Gearblade** (Great Sword) — **replaces Special Attack: Reassemble** with **Bloodletting**, which **sets Max HP to a fixed value** and converts the excess **at the moment of activation** into increased damage; when the effect ends the converted HP is restored. You are spending survivability for a window of damage, so activate it *before* the dangerous window, not during it. [Official]

**M-9200** (Crossbow) — added for **Special Attack: Ammo Compression**. Compressing **10 or more rounds** creates an **enhanced compressed round**: larger projectile, **+20%** damage. [Official]

**Cerulean Cloud Sword 'Arges'** (Blade) — a build-defining lightning node: **Weapon Attack damage −20%**, but Weapon Attack now **scales with Lightning Damage**, and **Sheath is replaced** by **Special Attack: Cloud Slash**. Whenever **Storm Cloud** strikes with lightning on its own you gain **1 stack of Residual Lightning** (max **20**). Cloud Slash consumes all stacks for a wide forward slash at **5 MP**; base power rises every 5 stacks (**200 / 220 / 250 / 300%** of Lightning Damage) and each stack adds **5%** damage. The 20% cut is real — this only pays off if Lightning Damage already carries your output. [Official]

## The Eight New Artifacts

Four of the eight **evolve** after a counted trigger, which is the theme of this patch.

| Artifact | Base | Evolves into |
|---|---|---|
| **Faded Shield Crest** | Weapon Damage +5/10/15 | After **50 Perfect guards** → **Crest of the Iron Wall**: Weapon Damage +15/20/25, Block cost −20/30/40% |
| **Rusty Tsuba** | Weapon Damage +2/4/6 | After **30 blocks with Unsheath/Sheath** → **Master's Tsuba**: Weapon Damage +5/10/15, Sheath/Unsheath invincibility +0.05/0.15/0.25 s **[superseded by 1.0.33 — see the appendix]** |
| **Trainee Duelist's Epaulette** | Fires a sword spirit at the nearest enemy on a successful **Special Attack: Parry** | → **Duelist's Epaulette**: also fires on a **Fury** hit or the **final strike of the Normal Attack combo** (350%) |
| **Dull Resonance Stone** | Highest Elemental Damage +2/4/6/8 | At **140%+ Move Speed** → **Resonance Stone**: Highest Elemental Damage +8/10/12/14 |
| **Stiff Crank** | Crossbow Reload Speed +5/10 | After **50 Reloads** → **Marksman's Crank**: Reload Speed +10/20, **+30/40%** Normal and Special Attack damage for **10 s** after a Reload |
| **Midday Whetstone** | Weapon damage activates Solar Blade **0/1/1/1/2** extra times; Attack Speed +3/6/9/12/15; True Damage +1/1/2/2/2 | — |
| **Meteorite Mirror** | Retrieves **1 extra Solar Blade**; Solar Blade Damage +3/6/9/12 | — |
| **Blacksmith's Tongs** | Weapon Attack damage against **Burn**-affected targets +5/10/15 | — |

All stat lines and trigger counts are as written in the official notes. [Official] Note that **Midday Whetstone** and **Meteorite Mirror** both feed the Solar Blade package while **Meteorite Earrings** was cut in the same patch — that archetype was reshaped, not just extended.

## Rewrites That Invalidate Old Advice

**Blood Stone Ring** is a different item now. It used to restore **5 HP every 15/13/10 kills**; it grants **Damage Taken Recovery +20/40/60** — a share of lost HP regenerates over **10 seconds**, and taking damage mid-regeneration reduces the remaining healing. Kill-based healing rewarded clearing; this rewards disengaging. [Official]

**Vital Touch** expanded from **3 to 5 levels** and changed shape: still **1 HP on Weapon Attack** (1 s cooldown), but it now restores **an extra 0/1/1/2/2/3 HP if your Defense is 50 or lower**, adds **Physical Damage +1 to +6**, and its Final HP penalty softened from **−55/−48/−40/−33%** to **−30/−26/−22/−18/−14/−10%**. The Defense clause means it now actively wants a low-Defense character. [Official]

**Fretted Clay Tablet** buffed: **Storm Cloud** now has a **20/30/40/55/70%** chance not to be consumed, up from **10/20/30/40/50%**. **Meteorite Earrings** dropped **Legendary → Rare** and **lost its Solar Blade Damage 5/10/15** bonus. [Official]

Smaller artifact changes: **Thorn Charm** Physical Damage **+1/1/2/3 → +1/2/3/5**; **Broken Sapphire** no longer gets consumed when other evasion effects activate; **Droplet of Plitvice** no longer consumes MP with all 5 ice swords present; **Mini Ballista** fixed a multiplayer-client rotation bug and an opacity bug; **White Paper** shows both combo icons when two combos apply; **Elastic Band** no longer lets Dash recovery exceed the UI limit; **Slim Cushion** lost unused visuals. [Official]

On the weapon side, seventeen were touched. The effect-level rewrites: **Starlight** no longer reflects **300% of the attacker's damage on Block (400% on Perfect guard)** — instead the **Riposte Blade Fragment** counterattack becomes a **Star Trail** that homes on the nearest enemy and **pierces**. **Heidi** reworked: consuming a Dash Count grants **1 Overheat stack** (max **12**), attack speed is fixed at **300%** regardless of your Attack Speed stat, and Normal Attack becomes a **2-hit combo** at **135% of Fire Damage**. **Successor** lost **Grimoire Damage +30%** and gained **Magic Wound** (**+6%** Grimoire damage taken for 10 s, max 5 stacks). **Sacred Jar** gained a **20% chance on Normal Attack to summon a Carrot Soldier** (companion, 20 s, up to **5** active). **The Barnacle**'s Explosion now deals **Physical** damage of **10 + 120% of Physical Damage**, **+1% per 2 Defense**, instead of Chaos damage of 10 + 120% of Defense. **Carrot Sword** attacks now scale with your **highest elemental damage** and deal **Chaos**. **Colossal Crossbow: Rapid Freeze Crystal** replaces **Frost Veil** with **Frost Relic: Frost Veil**. Plus: **Perfect Balance** guard angle while attacking **90° → 110°**; **Beast Marks Sword 'Hou'** damage **1% per 2 Evasion → 1% per 1 Evasion**; **Formless Dance** double-fire chance **1% → 0.85%** per Evasion; **Creeping Despair** Fury damage **+10% → +15%**; **Frozen Smelt** applies Frostbite **2 extra times** on a Fury hit; **Solis Imber** adds **+50%** Meteorite Pauldrons damage; **Solis Missio**'s **Reignite** now only counts down **while blocking**; **Ballista Sword**'s Mini Ballista **no longer takes damage**; **Drifting Ash**'s Tier 2 upgrade applies its Attack Speed correctly; **Solis Braca** fixed gamepad targeting on Special Attack. [Official]

## Test Before You Spend

1.0.31 added a **Comprehensive Training Grounds**, entered **from the entrance to the Training Grounds**. Inside you can **open your inventory and take out items you have already unlocked** to try them. [Official] This is the single most useful thing in the patch for build planning, because weapon upgrades are permanent meta-progression — there is no respec, only the next node you pick. Verify a rewritten weapon or artifact still does what you need **before** committing materials at the blacksmith in the tower-top village.

## FAQ

**Q: Is the Sword and Shield Magic Wand upgrade gone?**
A: Yes. 1.0.31 removed **Magic Wand** and replaced it with **Prismatic Magic Wand** (Magic Missile scaled off Highest Elemental Damage, Chaos damage when two or more elements tie). Plans built on the old node need rewriting. [Official]

**Q: Which artifact changed the most?**
A: **Blood Stone Ring** and **Vital Touch** are full rewrites, not tuning. If either sat in your grid for its old behaviour, the old advice no longer applies. [Official]

**Q: Is 1.0.31 the latest build?**
A: No. The current build is **1.0.33**, posted **September 11, 2026** — the day after 1.0.31 (**September 10, 2026**, which was itself three weeks after **1.0.30** on August 20, 2026). 1.0.33 is a small follow-up that fixes a boss pattern and a handful of artifact, costume and UI issues rather than adding content, so everything in this 1.0.31 guide still stands — with the single exception flagged in the appendix below. [Official]

## Appendix: What 1.0.33 Changed (September 11, 2026)

**1.0.33 is a correction pass, not a second feature patch.** It landed the day after 1.0.31, adds **no** weapon upgrades, **no** new artifacts and **no** new areas, and mostly cleans up things 1.0.31 introduced or disturbed. If you already reworked your build for 1.0.31, nothing here sends you back to the blacksmith. [Official]

**Bosses**

- **Demonic Grimoire** — improved a miniboss pattern that could hit the player repeatedly in quick succession. [Official]
- **Qliphoth** — fixed an issue where the game could not be paused or abandoned when the player and the boss died at the same time. (Carrot-marked: community-reported.) [Official]

**Artifacts**

- **Meteorite Pauldrons** — fixed an issue where certain Solar Blade-related bonuses were not applied to the damage dealt on retrieving the Solar Blade, and a separate issue where that retrieval damage was **doubled** in certain situations. If you run the Solar Blade package from the 1.0.31 table above, this is a straight correction in your favour. [Official]
- **Master's Tsuba** — effect changed. Weapon Damage stays **+5/10/15**, but the Sheath and Unsheath invincibility bonus moves from a flat **+0.05/0.15/0.25 seconds** to **+40/70/120%**. Master's Tsuba is the evolved form of **Rusty Tsuba**, so this is the one line in the 1.0.31 table above that 1.0.33 supersedes; the percentage version scales with your build instead of being a fixed window. [Official]

**Weapons**

- **Heidi** — effect text updated to match the actual effect. No numeric change was announced, so the 1.0.31 Heidi description in this guide still describes her behaviour; only the in-game wording moved. [Official]

**Costumes**

- **Scholar Lizard** — fixed an issue where the costume effect could be removed by a certain weapon. (Carrot-marked.) [Official]

**UI and bug fixes**

- Adjusted some text to read more naturally. (Carrot-marked.) [Official]
- Fixed an issue where the **Comprehensive Training Grounds** tutorial popup could appear while the ending popup was open — a follow-up to the Training Grounds added in 1.0.31. (Carrot-marked.) [Official]

**Known issues the announcement opens with:** enemies moving outside of walls. TEAM HORAY suspects the new collision system introduced in **1.0.31** to fix the final-stage corner-stuck problem, states they have not been able to reproduce it, and is asking players for video footage. That is an open issue, not a regression that invalidates the 1.0.31 build advice above. [Official]

## Related Guides

- [Weapons Guide](/guides/weapons-guide) — every branch, including the effects 1.0.31 rewrote
- [Artifacts Guide](/guides/artifacts-guide) — the pool the eight new items joined
- [Builds Guide](/guides/builds-guide) — how upgrades, artifacts and tablets fit together
- [Sword & Shield Build Guide](/guides/sword-shield-build-guide) — the branch hit hardest
- [Great Sword Build Guide](/guides/greatsword-build-guide) — where Bloodletting Gearblade fits
- [Katana Build Guide](/guides/katana-build-guide) — the Blade branch and the Arges node
- [Crossbow Build Guide](/guides/crossbow-build-guide) — M-9200 and the Stiff Crank line
- [Artifacts Guide](/guides/artifacts-guide) and [Costumes Guide](/guides/costumes-guide) — where the 1.0.33 Meteorite Pauldrons and Scholar Lizard fixes land

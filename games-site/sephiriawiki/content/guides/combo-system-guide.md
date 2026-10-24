---
title: "Sephiria Combo System — How to Activate Combos, Bond Artifacts and the Fruit Skewer"
description: "Sephiria's combo system is officially 'one of Sephiria's core systems' — a second stat layer that only pays out when enough artifacts share a tag. How combo levels work, the named-combo list, how Bond Artifacts drop, and how the Fruit Skewer steers artifact drops before a run."
category: "Mechanics"
version: "1.0"
updated: "2026-09-16"
keywords: ["sephiria combo system", "sephiria combos", "sephiria bond artifact", "sephiria fruit skewer", "sephiria combo not activating", "sephiria combo levels", "sephiria magitech combo", "sephiria ember combo", "sephiria glacier combo", "sephiria elemental combo", "sephiria combo effects journal"]
related:
  - artifacts-guide
  - tablets-guide
  - builds-guide
  - beginner-guide
  - mystic-pot-guide
  - patch-1-0-31-build-changes-guide
  - endgame-guide
sources:
  - tier: "Official"
    text: "The Steam announcement 'Combo System' Public Beta Announcement (TEAM HORAY, app 2436940, October 1, 2025) is the primary source and defines the system in the developers' own words: 'The combo system, which provides additional stats based on the number of artifacts, was first introduced through an update in the 2024 demo version and has since become one of Sephiria's core systems.' It also supplies the named-combo descriptions, the Bond Artifact definition ('unique artifacts that connect two combos'), the Fruit Skewer introduction ('tools that can increase or decrease the drop rates of related combo items, which you can set before entering an expedition'), the Magitech Electrocute debuff (180% lightning damage after 2 seconds, stacks up to 2), the Chaos damage redefinition, and 'You can now view the Combo Effects list in the journal'. Combo tier thresholds, the Bond Artifact drop rule, Fruit Skewer capacity and per-fruit percentages, and every combo bug fix below come from the official Steam announcement series read in full through the Steam partner-events API on September 16, 2026: 0.900.6 Beta, 0.9.1 (named in 0.9.3 as the official release of the beta), 0.9.8, 0.10.0, 0.10.6, 0.10.8, 0.10.10, 0.10.13, the 0.10.15 announcement (whose body also carries the 0.10.14 and 0.10.16 sections — the Chalcedony Key / White Paper display fix is under 0.10.16), 0.11.0, 0.11.7, 1.0, 1.0.23, 1.0.26, 1.0.31 and 1.0.33"
  - tier: "Community"
    text: "The combo-tag list and the general 2/4/6/8/10 tier ladder are also described on the community wiki page for Sephiria artifacts (namu.wiki, 'Sephyria/Artifact'), which lists tags including Element, Guardian, Bargaining, Curse, Spellbook, Alchemy, Glacier, Ember and Magitech, gives the Element combo's tier lines, and notes that all five elemental artifacts were unique items as of 0.10.17 so the 6-piece Element tier was reachable mainly through the Wisdom 10 effect or White Paper. Two Chinese-language build write-ups published by doyo.cn describe the same bond mechanic in practice: they recommend stopping at roughly the two-piece effect rather than stacking artifacts, and give Fruit Skewer selections ('Precision 2, ban Planet, ban Companion'). A Japanese attribute-build write-up on note.com covers the same ground. Where a detail rests on community description rather than official text it is marked [Community] inline"
  - tier: "Editorial"
    text: "The plain-language explanation of how the tag-count layer interacts with per-run artifact drops, the reading of the 0.10.6 to 0.10.8 drop-rate walk-back as a design lesson, and the 'set it before the run, not during' framing are this guide's own synthesis of the official and community material above. Claims that could not be traced to at least three independent sources are marked [Unconfirmed] rather than stated as fact. No player quote in this guide is invented, and none was adapted from a third-party summary"
---

# Sephiria Combo System — How to Activate Combos, Bond Artifacts and the Fruit Skewer

**The short answer:** combos are a **second stat layer running on top of your artifacts**. Each artifact carries one or more combo tags, and when enough artifacts in your inventory share a tag, the combo fires and grants bonus stats — on top of what those artifacts already do. TEAM HORAY calls it "one of Sephiria's core systems," rebuilt through a public beta that shipped as **0.9.1**. Pick artifacts by their individual numbers and ignore the tags, and you leave a whole progression layer unused. [Official]

## What the combo system actually is

The official definition is short: the combo system **"provides additional stats based on the number of artifacts."** Artifacts are tagged (`#Magitech`, `#Ember`, `#Glacier`, `#Mystic`, `#Solarblade` and more), and the **tags** — not the artifacts — are what gets counted. A strong artifact with an off-combo tag contributes nothing; a weak artifact with the right tag can push you over a threshold and beat it. The revamp made one sweeping change: **"Most artifacts are now assigned #combos."** Tagless artifacts used to be common; they are not anymore. [Official]

## Combo levels: the 2 / 4 / 6 / 8 / 10 ladder

Combos are not binary. Each steps up through thresholds, and the top tiers are where the payouts sit. The cleanest official example is **Companion Combo**, whose 0.9.8 patch notes list its tiers explicitly: [Official]

| Combo count | Companion Combo effect |
|---|---|
| 2 | Companion Damage **+6%** |
| 4 | Companion Damage **+8%** |
| 6 | Companion Damage **+10%**, Companion Defense **15** |
| 8 | Companion Damage **+12%**, Companion Defense **20** |
| 10 | Companion Damage **+20%**, Companion Revive Time Haste (**100%** at 0.9.8, revised to **40%** in 0.10.6) |

Two things follow. The ladder tops out at **10**, and the 8→10 jump is larger than any step below it — the last two artifacts are worth more than the first eight. Community references describe the same **2/4/6/8/10** pattern across the other combos. [Official / Community]

## The named combos

The list as of the 1.0 build, with the official description where one exists:

| Combo | What it does |
|---|---|
| **#Magitech** | Weapon or spellbook damage applies **Electrocute** — 180% lightning damage after 2 seconds, stacking to 2. Replaced "Erosion". [Official] |
| **#Solarblade** | Throws meteoric-iron swords for fire damage; base count **+1**, acquisition range **+50%**, fall speed **+33%** (0.900.6 notes). [Official] |
| **#Stormcloud** | Basic attack speed up; clouds can no longer exceed max capacity but now **recover periodically**. [Official] |
| **#Mystery / #Mystic** | Support combo that **doubles the level of a random artifact**. [Official] |
| **#Planet** | Increases stats related to Planet performance. [Official] |
| **#Lake** | Enhances **maximum MP** and MP-using abilities. [Official] |
| **#Academy** | Support artifacts for **spellbooks**. [Official] |
| **#Elemental** | Support combo enhancing your **highest elemental attribute**. Added 0.10.10. [Official] |
| **#Curse** | Support combo related to **debuffs**. Added 0.10.6. [Official] |
| **#Negotiation** | Support combo related to **leaf acquisition**. Added 0.10.6. [Official] |
| **#Ember / #Glacier** | Elemental combos, both reworked in the 0.10.x cycle; both have multi-stage effects. [Official] |
| **#Alchemy** | Referenced by the 1.0.23 fix for Tablet pickups into the Side Bag. [Official] |

The developers split these into **main** combos (Solar Blade, Glacier, Ember, Magitech — the damage carriers) and **support** combos (Mystic, Curse, Negotiation, Elemental, Academy, Lake); the 0.10.6 notes say so outright: **"While adding main combos like 'Solar Blade' or 'Glacier' is certainly great, we thought it might be interesting to add support combos like the existing 'Mystic'."** A run wants one or two main combos plus a support combo feeding them. [Official]

## Bond Artifacts: the payoff for running two combos

**Bond Artifacts** are why multi-combo builds exist: officially, **"unique artifacts that connect two combos"** that **"appear as artifact rewards when you activate at least level 1 of the two corresponding combos."** About **12** shipped at the beta; **0.901.0** added five more. The drop rule has been tuned twice: [Official]

- **0.10.6** — drops "adjusted to appear more frequently as the number of acquired combos increases."
- **0.10.10** — fixed drops being "excessively high when only one combo was active," and changed the appearance rules — the notes now list both "when both related combos are activated" and "when one of the related combos is activated." [Official]

Read together, that means a Bond Artifact can appear while you are only halfway to your second combo. [Editorial]

## The Fruit Skewer: steering drops before the run

The **Fruit Skewer** is the combo system's control panel, and it is the part almost nobody explains. Officially, Fruit Skewers are **"tools that can increase or decrease the drop rates of related combo items, which you can set before entering an expedition"** — a **pre-expedition** decision, not a mid-run one. These are the most recent official figures: **0.10.8** is the last announcement that changes them, and nothing through **1.0.33 (September 11, 2026)** revises them. [Official]

- **Capacity: 6 slots** (raised from 5 in 0.10.8).
- A **regular fruit (+)** adds **+50%** to the related drop rate; you can consume **up to 3 of the same fruit**.
- A **frozen fruit (−)** *reduces* that rate, and since 0.10.6 a minus applies **double** the reduction (**−50%** each).
- The random **"adaptive rate"** bonus — called **carrot** in the notes — sits at **25%** and does **not** apply to frozen fruits.
- **Bond Artifacts get the adaptive rate by default**, and it **doubles** when a carrot applies.

A minus fruit is not a throwaway: Chinese-language build write-ups recommend banning combos you do not want ("ban Planet, ban Companion") so the ones you do appear more often. [Community]

**Why the numbers moved:** **0.10.6** cut the bonus from **+50% per fruit** to **+25%** and doubled the minus penalty; two patches later TEAM HORAY partially rolled it back, reporting **"roughly a 3–4% decrease in win rates in Hard Mode stages 20–30 and above"** — the system, they say, "is still a work in progress." [Official]

## Why your combo might not be activating

Check these in order:

1. **You are one artifact short of the tier.** Combos count at thresholds, not continuously: 5 artifacts on a tag gives you the 4-tier, not a partial 6. [Official]
2. **The tier is unreachable because the items are unique.** Community documentation notes that as of **0.10.17** all five elemental artifacts were **unique**, so the **6-piece Elemental tier was out of reach without the Wisdom 10 effect or White Paper**. If a tier looks impossible, this is usually why. [Community]
3. **White Paper can miscount your combo.** 0.10.6 fixed White Paper combos "not being counted in some UI elements"; **0.10.16** fixed it and Chalcedony Key showing "the combo increase … as if it was applied even though it was not"; **1.0.31** made White Paper **display both combo icons when two combos apply**. [Official]
4. **You hit a combo-specific bug** — all fixed, so update if you are on an old build: **0.11.0** (damage cut 50% when the Magitech combo was at 10), **0.11.7** (activation notifications not showing), **1.0.23** (Alchemy Combo not triggering on a Tablet picked into the Side Bag), **1.0.26** (Stage 6 effects of the Glacier, Ember and Magitech combos not working). [Official]

**Where to see the truth in-game:** the journal's **'Combo Effects' list** (added with the revamp), HUD combo icons, and the **Combo Activation UI** popup — which since 0.9.8 no longer blocks your inventory. [Official]

## FAQ

**Do combos reset between runs?**
Yes — they follow your current inventory, and artifacts are per-run. Permanent layers sit outside them: the **Wisdom** talent line feeds combos directly (its Level 20 effect raises the damage bonus per active combo type **from 4% to 7%**), and **1.0** added a **Destiny Inscription quest for the Fruit Skewer**. [Official]

**Is the combo system the same as the tablet grid?**
No — and it is the most common mix-up. Combos count **artifact tags**; tablets empower artifacts near them on the grid. Placement decides how strong an artifact is, tags decide whether the combo fires, so an artifact can be well-placed and still off-combo. See the [Artifacts Guide](/guides/artifacts-guide) and [Tablets Guide](/guides/tablets-guide). [Editorial]

---

*Scope note: this guide covers the **combo (tag) system** only — tags, tiers, Bond Artifacts and the Fruit Skewer. For the artifact catalog and unlocking see the [Artifacts Guide](/guides/artifacts-guide), for grid placement the [Tablets Guide](/guides/tablets-guide), for item conversion the [Mystic Pot Guide](/guides/mystic-pot-guide).*

## Related Guides

- [Artifacts Guide](/guides/artifacts-guide) — the per-run item catalog and unlock conditions
- [Tablets Guide](/guides/tablets-guide) — grid placement and what tablets do to nearby artifacts
- [Builds Guide](/guides/builds-guide) — weapon archetypes and what each wants from its artifact pool
- [Mystic Pot Guide](/guides/mystic-pot-guide) — converting and evolving artifacts between runs
- [Sephiria 1.0.31 Patch Guide](/guides/patch-1-0-31-build-changes-guide) — the September rebalances, including White Paper's combo-icon fix

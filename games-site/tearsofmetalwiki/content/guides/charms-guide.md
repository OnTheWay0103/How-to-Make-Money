---
title: "Tears of Metal Charms Guide — Do Charms Stack? Rarity Tiers and Where to Get Them"
description: "How Charms work in Tears of Metal: whether duplicate Charms stack, the rarity reclassification Paper Cult shipped in v0.11.57863, every documented way to get a Charm — Charm chests, Dragonstone chests, the Cursed Spealbone, shops and the item buyer in a barrel — and how to split coins between Charms and healing."
category: "Mechanics"
version: "Early Access"
updated: "2026-09-13"
keywords: ["tears of metal charms", "tears of metal do charms stack", "tears of metal charm guide", "tears of metal charm tiers", "tears of metal charm chest", "tears of metal should i buy charms", "tears of metal cursed spealbone", "tears of metal charm merchant"]
related: ["healing-guide", "emblem-artifact-guide", "equipment-guide", "village-upgrade-guide", "patch-notes"]
sources:
  - tier: "Official"
    text: "Charm rarity reclassification and its stated goal — Paper Cult, v0.11.57863, August 1, 2026: \"We changed which Charms belong to each rarity category and rebalanced some of them. The long-term goal is to create more meaningful differences between tiers.\" Its Charms changelog section lists \"Reclassified several Charm rarity tiers to reflect their utility\", \"Rebalanced Charms in relation to their rarity\" and \"Updated the functionality of several Charms.\"; its Campaign economy section lists \"Dragonstone Treasure Chests now cost one Dragonstone and guarantee a high-tier Charm\", \"Reduced the Health cost of receiving a Charm from the Cursed Spealbone\" and \"Rebalanced Charm Treasure Chest and Healing Fountain prices between Acts.\" (store.steampowered.com/news/app/1913120)"
  - tier: "Official"
    text: "The coin-versus-Charm design intent, and the HP-threshold fix — Paper Cult, v0.12.58540, August 13, 2026: \"Buying Charms is now a much more viable path... Coins are meant to create a meaningful choice between healing and becoming stronger through Charms. Tying revival directly to coins made choosing Charms difficult, even for stronger players.\"; \"All Charms and Emblems that trigger when under or over a certain amount of HP should now correctly check whether the condition is fulfilled at the beginning of a level, instead of only after taking damage.\"; \"Updated some Charm descriptions\""
  - tier: "Official"
    text: "\"The Heart of Wood Charm now visually disappears after being consumed to revive the player\"; \"Fixed Castle Records sometimes showing already unlocked Charms as locked\"; \"Added the proper Russian translation for the Sacred Heart Charm\"; \"The item requested by H.W. in a barrel (item buyer interactible) is now completely random\"; \"The amount offered by H.W. in a barrel (item buyer interactible) now varies based on the item's rarity and the current Act\" — Paper Cult, \"New Patch - Big Bug Fixing Pass\", September 8, 2026 (no version number published)"
  - tier: "Official"
    text: "Charm stack counts, rarity and Castle Records — Paper Cult changelogs: v0.9.57408 (July 28, 2026) \"Fixed Charm stack counts not updating when picking up certain Charms\"; v0.10.57598 (July 31, 2026) \"Fixed the Castle Records not displaying unlocked Charms correctly after the previous patch\"; v0.8.57278 (July 24, 2026) \"Added a new Common Charm: Cutthroat's Blade, which grants +10% critical hit chance on Finishers\" and \"Fixed certain Charms displaying incorrect descriptions in the Castle Records\""
  - tier: "Community"
    text: "Duplicate Charms stacking, and the Ferryman's Fee Charm with its listed effect (\"When you kill Captains, 10% chance to gain 5 Coins\") — Steam Community discussion \"Do Charms Stack?\" (steamcommunity.com/app/1913120/discussions/0/592937761422573291/), checked September 2026"
  - tier: "Community"
    text: "The barrel trade, what it is for, and the failed-objective report — Steam Community discussion \"A bug?\" (steamcommunity.com/app/1913120/discussions/0/596289460456481832/), checked September 2026. Players report the trade is how you \"control your charms build\" — swapping a Charm for coins or healing, or a common Charm for a rarer one — and that the objective marks as failed when you have nothing tradable"
  - tier: "Editorial"
    text: "The coin-split framework and the Charm-versus-Emblem-versus-artifact scoping are this guide's analysis of the official rules. The claims that Act 3 has no shop and that the village Market adds Tier 1/2/3 Merchant Charm slots come from a third-party guide (cheatbook.de) and are marked [Unconfirmed] on the page"
---

# Tears of Metal Charms Guide — Do Charms Stack? Rarity Tiers and Where to Get Them

Two Charm questions come up more than any other: do duplicates stack, and are they worth the coins? Paper Cult answered the first in its own patch notes, and has been blunt about the second — Charms are what your run coins compete against.

> **Scope:** Charms only — the run-scoped items you collect and buy during a campaign. Emblems and artifacts live in the [Emblem & Artifact Guide](/guides/emblem-artifact-guide); heal prices in the [Healing Guide](/guides/healing-guide). Paper Cult publishes no Charm effects, drop rates or tier lists, so every named Charm below is quoted from a source; unconfirmed items are marked **[Unconfirmed]**.

---

## The Short Answers

| Question | Answer |
|----------|--------|
| **Do duplicate Charms stack?** | Yes. The game tracks a **stack count** per Charm — Paper Cult patched that counter in v0.9.57408 — and players confirm duplicates stack in play. The cap, and whether stacking is additive, is not published. |
| **What are the rarity tiers?** | Charms are sorted into rarity categories, and Paper Cult **reclassified** them in v0.11.57863 (August 1, 2026). A full official ladder has never been published. |
| **Where do Charms come from?** | Charm Treasure Chests, Dragonstone Treasure Chests, the Cursed Spealbone, shops, and the item buyer in a barrel. |
| **Charms or healing first?** | Healing wins when a boss is next; a Charm wins when it changes your build or keeps you alive. |

---

## 1. What a Charm Is

Charms sit on the **run side** of the economy. Coins are the campaign currency — they buy Charms and treasures and do not survive the run — while the village layer uses its own persistent currency. Paper Cult made the split explicit when it reworked co-op revives in v0.12.58540:

> "Coins are meant to create a meaningful choice between healing and becoming stronger through Charms."

That same announcement says the old coin-priced revive was actively damaging the Charm system: "Tying revival directly to coins made choosing Charms difficult, even for stronger players." Removing the revive cost removed the coercion, not the trade-off — a Charm still costs what a Healing Font costs.

## 2. Do Charms Stack? Yes

**Official.** Paper Cult's v0.9.57408 changelog (July 28, 2026) reads:

> "Fixed Charm stack counts not updating when picking up certain Charms."

A game does not track a stack count for something that does not stack, and "when picking up certain Charms" implies a duplicate pickup is a normal event.

**Community.** The Steam thread [Do Charms Stack?](https://steamcommunity.com/app/1913120/discussions/0/592937761422573291/) was opened by a player who had drawn **Ferryman's Fee** three times in one campaign. Its listed effect, quoted in the thread, is *"When you kill Captains, 10% chance to gain 5 Coins."* The reply: "Yep, charms do stack."

In play a duplicate is a multiplier, and **on-kill and on-crit Charms are the ones worth chasing duplicates of** — their trigger rate does not depend on you playing differently.

## 3. Rarity Tiers: What Was Actually Said

Charms have rarities. The ladder was never published, but the work on it was. From the v0.11.57863 announcement (August 1, 2026):

> "We changed which Charms belong to each rarity category and rebalanced some of them. The long-term goal is to create more meaningful differences between tiers. This also lays the groundwork for future content updates featuring new powerful Charms."

Its changelog section, titled simply **Charms**, lists: "Reclassified several Charm rarity tiers to reflect their utility"; "Rebalanced Charms in relation to their rarity"; "Updated the functionality of several Charms."

So **any tier list older than August 1, 2026 describes a system that no longer exists** — Charms were moved between tiers by hand on that date. The work was about *utility*, not raw power: a Charm moved up a tier is one the developer judged more useful, which is not the same as stronger. The one Charm with an official rarity is **Cutthroat's Blade**, added in v0.8.57278 as a **Common** Charm granting *"+10% critical hit chance on Finishers."*

> **[Unconfirmed]** A third-party guide says the village **Market** adds "Tier 1, Tier 2, and Tier 3 Merchant Charm slots" through Wooden Crates, Ornate Shelves and Gilded Display. No Paper Cult changelog mentions Charm slots.

## 4. Every Documented Way to Get a Charm

The v0.11.57863 economy changelog repriced most Charms at once and is the best source on where they enter a run:

| Source | What the changelog says |
|--------|------------------------|
| **Charm Treasure Chest** | "Rebalanced Charm Treasure Chest and Healing Fountain prices between Acts" |
| **Dragonstone Treasure Chest** | "now cost one Dragonstone and **guarantee a high-tier Charm**" |
| **The Cursed Spealbone** | "Reduced the **Health cost** of receiving a Charm from the Cursed Spealbone" |
| **Shops / Campaign Shop** | "Adjusted Shop and Campaign Shop prices" |
| **Item buyer in a barrel** | See section 5 |

Two rows differ. The Dragonstone chest is the only **guaranteed** high-tier Charm — a rarity floor, not a coin gamble. The Cursed Spealbone takes Health instead, the resource the [Healing Guide](/guides/healing-guide) shows is expensive to buy back.

> **[Unconfirmed]** A third-party guide reports that Act 3 (The Scar) has no shop, so coins earmarked for Charms should be spent before entering it.

## 5. The Item Buyer in a Barrel

A barrel with a buyer in it is the oddest Charm interaction in the game, and the September 8, 2026 patch describes it best:

> "The item requested by H.W. in a barrel (item buyer interactible) is now **completely random**."
>
> "The amount offered by H.W. in a barrel (item buyer interactible) now varies based on the **item's rarity and the current Act**."

The request used to be fixed; now it is a roll, so you cannot stock a specific item in advance, and holding a high-rarity spare into a later Act is worth more.

**Why players get stuck here.** A Steam thread titled [A bug?](https://steamcommunity.com/app/1913120/discussions/0/596289460456481832/) reports the barrel showing no prompt and then **marking as failed** at end of level. The community answer: it is not a bug — the trade needs an item, and with nothing tradable there is nothing to prompt. Players describe the point as controlling your Charm build: a Charm swapped for coins or healing, or a common Charm traded up into a rarer one.

> **[Unconfirmed]** The thread calls this character the **merchant's son**; the official changelog calls the same interactible **"H.W. in a barrel."** We could not confirm they are the same character.

## 6. Charms or Healing? The Coin Split

| Situation | Spend on |
|-----------|----------|
| Boss arena is next | **Healing** — a Charm will not save a 40% health bar |
| You keep drawing the same Charm in Act 1 | **The Charm** — stacks compound |
| Cursed Spealbone offers one, you are above 70% health | **The Charm** — you spend Health, not coins |
| Dragonstone chest up, no build identity yet | **The chest** — the only guaranteed rarity floor |

One rule overrides the table: **do not buy a Charm that duplicates a role you already filled.** Stacking rewards the *same* Charm twice, not two different Charms doing one job.

## 7. Behaviour Changes Worth Knowing

Three Charm fixes have shipped since launch, from two different patches:

- **HP-threshold Charms now evaluate at the start of a level** — v0.12.58540, August 13, 2026: "All Charms and Emblems that trigger when under or over a certain amount of HP should now correctly check whether the condition is fulfilled at the beginning of a level, instead of only after taking damage." A "below 50% health" Charm now switches on at level start if you are already low.
- **The Heart of Wood Charm is consumed on revive** — September 8, 2026: it "now visually disappears after being consumed to revive the player." It is a one-shot revival resource, not a permanent stat Charm.
- **Castle Records log Charms honestly** — September 8, 2026: "Fixed Castle Records sometimes showing already unlocked Charms as locked."

## FAQ

**Do duplicate Charms stack?** Yes — v0.9.57408 fixes Charm **stack counts**, and the Steam thread confirms duplicates stack in play. The cap is not published.

**What is the rarest Charm tier?** Not published. Tiers were reclassified on August 1, 2026 (v0.11.57863), so any tier list dated before that is stale.

**Do Charms carry between campaigns?** Paper Cult's notes do not say. Charms are bought with run coins, and Castle Records log which ones you have equipped — a record, not proof of a persistent inventory. Treat persistence claims as **[Unconfirmed]**.

---

## Sources

- **Official:** Paper Cult Steam announcements for app 1913120 — v0.8.57278, v0.9.57408, v0.10.57598, v0.11.57863 (**Charms** changelog; rarity; Dragonstone chest; Cursed Spealbone), v0.12.58540, and "New Patch - Big Bug Fixing Pass" (September 8, 2026) — via the Steam news API, September 13, 2026.
- **Community:** [Do Charms Stack?](https://steamcommunity.com/app/1913120/discussions/0/592937761422573291/) and [A bug?](https://steamcommunity.com/app/1913120/discussions/0/596289460456481832/), checked September 2026.
- **[Unconfirmed] third-party:** [cheatbook.de](https://www.cheatbook.de/files/tearsofmetal.htm) — Act 3 no shop; Market Charm slots.
- **Editorial:** the coin-split table and the Charm-versus-Emblem scoping are this guide's own analysis of the official rules.

## Related Guides

- [Healing Guide](/guides/healing-guide) — Healing Font costs and coin budgeting
- [Emblem & Artifact Guide](/guides/emblem-artifact-guide) — the other build layers, and how Emblems differ from Charms
- [Equipment Guide](/guides/equipment-guide) — armor, gear slots and stat priority
- [Patch Notes & Roadmap](/guides/patch-notes) — every build, dated, including the September 8, 2026 pass

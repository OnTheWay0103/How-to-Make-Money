---
title: "SpiritVale Party EXP Sharing: Each Take vs Even Share"
description: "SpiritVale party EXP after 0.34.0: Each Take vs Even Share, the official per-member bonuses, whole-map sharing, and which mode to run for farming or carries."
category: "Guides"
version: "EA"
updated: "2026-10-27"
keywords: ["SpiritVale party exp", "SpiritVale even share", "SpiritVale each take", "SpiritVale party bonus", "SpiritVale exp share range", "SpiritVale party loot", "SpiritVale party size", "SpiritVale leveling party"]
related:
  - party-composition
  - leveling-guide
  - class-leveling-guide
  - empty-maps-missing-monsters-guide
  - farming-resource-guide
  - solo-guide
sources:
  - tier: "Official"
    title: "[0.34.0] PvP Conquest patch notes — Party Bonuses"
    url: "https://store.steampowered.com/news/app/3767850/view/674008262454020596"
    date: "2026-10-09"
    text: "Steam announcement, October 9, 2026. The party section opens with 'Fixed a lot of issues with it, how it works / was meant to work', then defines two settings. 'Each Take' gives 'No bonus' and states 'Each person gets exp and gold based on damage dealt to the monster'. 'Even Share' states '+20% exp per party member, +10% gold and drops per party member' and 'Exp and gold shared evenly among party members, across the whole map'. The note does not state a party size cap, whether the percentages stack additively, or how drops are allocated under Each Take."
  - tier: "Official"
    title: "[0.32.0] Advanced Artifacts & Grimoires — Map Difficulty"
    url: "https://store.steampowered.com/news/app/3767850/view/708909256508703563"
    date: "2026-09-21"
    text: "Steam announcement, September 21, 2026. 'Monsters above your level give +2% EXP per level (max +30%)'; 'Increased gold from ranked maps matching HP increase, map rank now shown on the world map'. The same post lists the ranks: S Dark Fortress / Dark Manor, A Forge / Night Garden / Warcamp / Turtle Nexus, B Abyss Castle, C Goblin Cave / Swamp / Forgotten Depths / Starfall / Demon's Maw, D baseline, with EXP multipliers of 3.00x (S), 2.40x (A), 1.90x (B), 1.40x (C) and 1.00x (D)."
  - tier: "Community"
    title: "Steam discussion: 'Team experience point distribution'"
    url: "https://steamcommunity.com/app/3767850/discussions/0/586182635679801175/"
    date: "2026-10-27"
    text: "Player thread asking for party EXP to apply map-wide because a large party cannot find enough monsters in one screen. Replies state 'We used to get XP in the whole map. For some reason they removed it and now you need to stick to each other' and 'what's the point of having 12 man party now if when we can't see each other we won't get the party benefit'. The thread describes the state before the October 9, 2026 party rework; its posting date was not visible in the accessible view, so the date shown is when the content was captured."
  - tier: "Community"
    title: "Steam discussion: '經驗問題' (EXP question)"
    url: "https://steamcommunity.com/app/3767850/discussions/0/594062684485405017/"
    date: "2026-10-27"
    text: "Player report that a same-level friend who was not attacking still finished roughly 58% ahead in EXP while both were in a full 12-person party. Like the thread above it predates the 0.34.0 party rework and describes proximity-based sharing; date shown is the capture date because the thread date was not visible in the accessible view."
  - tier: "Community"
    title: "SpiritVale Wiki (third-party): Party and Guild System"
    url: "https://www.spiritvale-wiki.wiki/guides/party-and-guild-guide/"
    date: "2026-07-19"
    text: "Third-party guide marked 'Updated: 7/19/2026', i.e. before the 0.34.0 rework. It claims a 5-member party cap, EXP bonuses of +10% (2 members), +25% (3), +40% (4), +50% (5) with drop bonuses of +5/10/15/20%, and a level-gap penalty band (0-10 levels 100%, 11-20 ~75%, 21-30 ~50%, 30+ ~10%). Its size cap and bracket table conflict with the official flat '+20% exp per party member' and with player reports of 12-person parties, so its numbers are treated as [Unconfirmed] here."
---

# SpiritVale Party EXP Sharing: Each Take vs Even Share

SpiritVale parties run on one of two settings, and the choice changes your income more than most gear upgrades do. Even Share pays **+20% EXP and +10% gold and drops per member** and shares EXP across the whole map. Each Take pays no bonus and splits by damage dealt. Pick the wrong mode and grouping is slower than soloing.

## What the 0.34.0 patch actually changed

The October 9, 2026 announcement redefines the party bonuses. Its own framing is unusually blunt: the developer begins the section with "Fixed a lot of issues with it, how it works / was meant to work." That sentence is the key to every conflicting party guide you will find, including our own older pages.

It then defines two settings:

| Setting | EXP | Gold | Drops | Where it counts |
|---|---|---|---|---|
| **Each Take** | No party bonus — "exp and gold based on damage dealt to the monster" | Damage-based | Not specified in the note | Wherever the damage happens |
| **Even Share** | **+20% per party member** | **+10% per party member** | **+10% per party member** | "across the whole map" |

Two details matter more than the percentages. Even Share explicitly shares "across the whole map", so distance stops mattering. And it gives no party size cap and never says whether the percentages add per member — read the party window in game.

## Worked example

The percentages are per member, so they scale with the group. Using Even Share and assuming the percentages add:

| Party size | EXP per member | Gold and drops per member |
|---|---|---|
| 2 | +40% | +20% |
| 3 | +60% | +30% |
| 4 | +80% | +40% |
| 5 | +100% | +50% |

A 1,000 EXP kill becomes roughly 1,800 EXP per member in a four-person Even Share party. That is arithmetic on the official wording, not a measured test. Above five members the formula extrapolates to +20% per head; whether the game caps it there is **[Unconfirmed]**.

## Why "stay close together" advice is out of date

Search party EXP for SpiritVale and you will find Steam threads insisting everyone must stand near the kill. They describe a real system — just not the current one. One asks the developer to make sharing map-wide because a large party cannot find enough monsters in one screen; a reply says "We used to get XP in the whole map. For some reason they removed it and now you need to stick to each other." A second reports a same-level player who was not attacking still finishing about 58% ahead in EXP inside a full 12-person party.

Read that as history, not instructions. Before 0.34.0 sharing depended on proximity; the rework made Even Share explicitly whole-map. Herding your group into one pixel now applies a rule the patch removed.

Under Each Take proximity still matters: EXP and gold follow damage, so a member who never touches the monster gets little.

## The party-size table you will find elsewhere

The best-known third-party party guide is stamped "Updated: 7/19/2026", three months before the rework. It states a five-member cap, EXP brackets of +10% at two members rising to +50% at five, drop bonuses of +5% to +20%, and a 30-level gap penalty band from 100% down to ~10%.

Those numbers cannot all be true at once. The official note uses a flat +20% per member, players describe 12-person parties, and the third-party page predates the change it is now read as documentation for. Use the official percentages, verify the live party window, and treat the 5-member cap and brackets as **[Unconfirmed]**. For composition rather than income, see the [Party Composition Guide](/guides/party-composition).

## What the level gap really does

Two different gaps get confused, and only one has an official number.

**Monster level above yours** — official, from the September 21, 2026 patch: monsters above your level give **+2% EXP per level, capped at +30%**. A 15-level gap reaches the cap. It stacks with map rank rather than replacing it.

**Party member level versus the party average** — the 100/75/50/10% band comes only from the third-party guide above. The developer has never published a party level-gap table, so any carry-penalty figure is **[Unconfirmed]**. The observable outcome is that low-level members parked in high-rank maps level fast while contributing little.

## Map rank multiplies everything above

Official multipliers, same September 21 post: EXP on ranked maps runs **3.00x at S, 2.40x at A, 1.90x at B, 1.40x at C, 1.00x at D**, with S reserved for Dark Fortress and Dark Manor. Rank, the level-gap bonus and the party percentage all land on the same kill, and the published notes never state the order of multiplication — but a rank upgrade is usually worth more than a fifth member.

So a full Even Share group on an S-rank map stacks a large multiplier on a large multiplier, while the same group on a C-rank map at S-rank level is grinding for company. The [Leveling Guide](/guides/leveling-guide) ranks camps by band, and [Why Is SpiritVale Empty?](/guides/empty-maps-missing-monsters-guide) explains why the crowd concentrates on the few maps that pay.

## Gold and drops under Even Share

Even Share adds **+10% gold and drops per member** on top of whatever the map already pays, and the September 21 patch raised gold on ranked maps to match their HP scaling. That is the strongest argument for grouping on material and card farms, and whole-map sharing means nobody has to sit on the kill.

Two limits. The note says "drops" without listing what qualifies, so whether cards, boxes and boss drops all take the bonus is **[Unconfirmed]**. And the bonus multiplies the drop rate, not the table — a 0.1% item stays rare. The [Farming & Resource Guide](/guides/farming-resource-guide) covers what is worth farming this way.

## Why your friend levelled faster

If two players of the same level finish far apart, work down this list:

1. **Mode.** Under Each Take, EXP follows damage; a support player earns a fraction of a DPS share.
2. **Map rank.** One rank is a 1.25x to 1.5x difference before anything else.
3. **Monster level gap.** Up to +30% for fighting above your level.
4. **Buffs.** The free Waystone buff, the daily first-kill bonus and any EXP potion stack with the party bonus — see the [Class Leveling Guide](/guides/class-leveling-guide).
5. **Attendance.** Under Even Share, being on the map is enough; under Each Take, it is not.

## Practical setup checklist

1. **Set Even Share for farm groups and carries.** Whole-map sharing plus per-member gold and drops is the default for anything that is not a damage race.
2. **Use Each Take only when one player does nearly all the damage** and the group agreed to it.
3. **Fight above your level until the +30% cap** — roughly 15 levels — then stop buying risk you do not need.
4. **Move up a rank instead of adding members** when both are options; the rank multiplier is larger.
5. **Confirm the live numbers in the party window** before quoting them to your guild.
6. **Check the date on any party EXP advice.** Pre-October threads describe a system the patch replaced.

## FAQ

**Does SpiritVale share party EXP across the whole map?**
Yes, under Even Share. The 0.34.0 note says EXP and gold are shared evenly among members across the whole map. Proximity sharing is the pre-0.34 behaviour older threads describe.

**How much EXP does a party give in SpiritVale?**
Officially +20% per party member, plus +10% gold and drops per member, under Even Share. Each Take gives no bonus and pays by damage dealt.

**What is the maximum party size?**
The official patch notes do not state one. A third-party guide claims five, while players describe 12-person parties. Treat any specific cap as **[Unconfirmed]** and check the party window.

**Is it better to solo or group for EXP?**
Grouping on Even Share wins on paper at any size, because the bonus is per member and does not divide the pool. Soloing wins in practice when the group cannot reach a map of your rank — see the [Solo Guide](/guides/solo-guide).

---

## Related Guides

- [Party Composition Guide](/guides/party-composition) — roles, synergies and the group rules that shape them
- [Leveling Guide](/guides/leveling-guide) — best camps by level band
- [Class Leveling Guide](/guides/class-leveling-guide) — how the EXP buffs stack
- [Why Is SpiritVale Empty?](/guides/empty-maps-missing-monsters-guide) — map ranks, channels and contested camps
- [Farming & Resource Guide](/guides/farming-resource-guide) — what the drop bonus is worth farming
- [Solo Guide](/guides/solo-guide) — the no-party baseline to compare against

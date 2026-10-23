---
title: "How to Join the Tears of Metal Experimental Branch — What Changes and Whether Your Save Is Safe"
description: "Paper Cult opened a public experimental branch on October 21, 2026. Here is how to switch, what the first build contains (solo mid-campaign saves, the Emblem Power rework, F3 bug reporting), what breaks in co-op, and how to decide whether to opt in."
category: "Guides"
version: "Early Access"
updated: "2026-10-23"
keywords: ["tears of metal experimental branch", "tears of metal experimental", "tears of metal mid campaign save", "tears of metal beta branch", "tears of metal emblem power", "tears of metal save backup", "tears of metal f3 bug report", "tears of metal october 2026 update"]
related:
  - "patch-notes"
  - "save-system-guide"
  - "emblem-artifact-guide"
  - "village-upgrade-guide"
  - "multiplayer-connection-fix-guide"
sources:
  - tier: "Official"
    title: "The Experimental Branch Update"
    url: "https://store.steampowered.com/news/app/1913120/view/1847286114029005"
    date: "2026-10-21"
    text: "Paper Cult's October 21, 2026 announcement is the primary source for this guide: what the experimental branch is for, the exact Steam opt-in steps (Properties → Game Versions & Betas → experimental), the save-backup statement, the crossplay limitation, and the full first-build changelog covering solo mid-campaign saves, charm descriptions before pickup, the F3 bug-report tool, new Challenge rewards, three new village shop items, the Emblem Power scaling rework, core Emblem level cap of 3, single-level synergies, Large Reliquary 25%→10%, Lightweaver and Soulbinder changes, the Combust rework, enemy cooldown animations, and the bug-fix list."
  - tier: "Official"
    title: "New Patch — Meta-progression Improvement"
    url: "https://store.steampowered.com/news/app/1913120/view/1844751498221644"
    date: "2026-09-24"
    text: "The September 24 main-branch patch rebalanced village prices and currency costs, refunded players who had already bought now-cheaper items, locked Army Composition bonuses and Ally Monikers behind village acquisition for new players, allowed some shops to be upgraded, and temporarily disabled crossplay compatibility on that version, pointing players to the separate Crossplay beta branch."
  - tier: "Official"
    title: "Patch Notes — 2026-09-30 — v0.17.60380"
    url: "https://store.steampowered.com/news/app/1913120/view/1845383656377911"
    date: "2026-09-30"
    text: "The current main-branch build reference in this guide: reduced memory allocation for several Act 2 and Act 3 levels to address late-campaign crashes, fixed The Banshee getting out of bounds and soft-locking the campaign, and fixed a tutorial overlay during Army Selection that could cause a long wait after clicking Start Campaign."
  - tier: "Community"
    title: "Tears of Metal Hits Early Access: Patch 0.8.57278 Details (ingamenews)"
    url: "https://ingamenews.com/pc-gaming/tears-of-metal-hits-early-access-patch-0-8-57278-details/"
    date: "2026-07-24"
    text: "Independent coverage reporting that Paper Cult confirmed mid-campaign saves were actively in development in response to player demand, that the first version would be solo-focused, and that multiplayer stability and desync were the other priority. It predates the October experimental build, so it is used only to establish that the feature was a confirmed, long-running developer priority rather than a surprise addition."
  - tier: "Editorial"
    title: "Opt-in decision framework"
    url: "https://tearsofmetalwiki.vercel.app/guides/tears-of-metal-experimental-branch-guide"
    date: "2026-10-23"
    text: "The solo-versus-co-op decision rule, the advice to treat the branch as a separate testing profile, the reading of which Emblem changes most affect existing builds, and the warning that branch balance is intentionally unstable are this guide's editorial assessment."
---

# How to Join the Tears of Metal Experimental Branch — What Changes and Whether Your Save Is Safe

On **October 21, 2026**, Paper Cult opened a public **experimental branch** for Tears of Metal. It is not a demo and not a separate game: it is the same Early Access build with features the studio wants tested in real runs before they reach everyone. The first branch update is substantial — it finally adds **solo mid-campaign saves** and reworks how Emblems scale — but it also turns off crossplay and is explicitly more bug-prone than the main branch. [Official]

This guide covers the exact switch procedure, what is in the first build, what it costs you in co-op, and how to decide whether to opt in.

## What the experimental branch is

Paper Cult describes the branch as "a playground to test new features and gameplay tweaks that need more data before we're ready to ship them to everyone." Most future main-branch updates will contain changes that were first tested there, though the studio says it will occasionally ship internally tested content straight to the main branch. [Official]

The trade is straightforward: earlier access to changes, in exchange for a build the developers themselves describe as "more prone to bugs, balance issues and other technical shenanigans." That is not marketing hedging; it is the operating condition of the branch. [Official]

## How to switch to the experimental branch

The official steps are short:

1. Open your Steam Library and **right-click Tears of Metal**.
2. Select **Properties**.
3. Open **Game Versions & Betas**.
4. In the branch list, choose **experimental** and close the window.
5. Steam should start updating the game. If it does not, **restart Steam**. [Official]

There is no code, password or separate download. The branch is a normal Steam beta selection.

To return to the default build, reopen the same **Game Versions & Betas** menu and select the default/none option. That last step is standard Steam behaviour rather than something Paper Cult documents in the announcement, so treat the exact label you see as **[Unconfirmed]** — the menu is the same one you used to opt in. [Editorial]

## Is your save safe?

Paper Cult states that when you switch to the experimental branch, **your save file is backed up**, and that if the branch breaks your save you can reach out and the team "might be able to restore it to a state before you switched." That is a meaningful safety net, but note the wording: it is a backup the studio can use to help, not a guarantee that every branch build is save-compatible. [Official]

The practical rules follow from that:

- **Back up your own save as well** before switching, especially if you are deep into a campaign.
- **Do not treat the branch as your main progression profile** if losing a campaign would bother you.
- **Expect balance churn.** The first build changes Emblem scaling, and further branch updates can change it again. [Editorial]

The existing [Save System Guide](/guides/save-system-guide) describes the main branch, where campaigns are still all-or-nothing. The experimental branch is the exception: it is the only place where a solo campaign can currently be saved mid-run. [Official]

## What is in the first experimental build

### Solo mid-campaign saves

The headline feature: you can now **save an ongoing solo Campaign and pick up where you left off later**. Multiplayer mid-campaign saves are still in development. This is the feature players have requested since launch, and it is currently branch-only. [Official]

The September 18 developer update had already framed the plan as solo-first, with co-op saves to follow. Independent launch coverage from July reported the same priority. [Official] [Community]

### Quality-of-life and new rewards

- **Charm descriptions are shown before you pick them up** and before you interact with related objects, so you no longer have to commit blind.
- **F3 opens an in-game bug-report tool**, which is the fastest way to send the branch feedback.
- **Challenges can now reward healing, currency and passive Emblems.**
- **New Market item:** after defeating a boss, choose between healing and a Charm.
- **New Emporium item:** select a preferred Emblem Clan for your next Campaign.
- **New Cartographer item:** unlock new Challenge Rewards. [Official]

The Emporium and Cartographer additions are meta-progression steering tools. They let you bias the next run toward the Emblem family or reward type you actually want, rather than hoping the campaign rolls it. [Editorial]

### The Emblem Power rework

This is the part that changes existing builds most. The branch adds **four new stats** — Strike, Heavy, Dodge and Block Emblem Power — which increase as you level up and as you acquire Charms. Core Emblems now scale with their corresponding power stat in addition to their own behaviour. [Official]

The structural changes are:

- **Core Emblems now have a maximum level of 3.**
- **Synergies have a single level and cannot be replaced**, and their effects were rebalanced to preserve the strength of the Emblems used to create them.
- **Gambler Synergies retain their base Critical Chance** while still improving their secondary family effect.
- The Emblem Reward screen now displays your Emblem Power stats instead of the old combo display, and Emblem levels appear directly on their icons.
- **T3 and Synergy acquisition conditions were rebalanced and are easier to attain.**
- Charms now grant Emblem Power bonuses. [Official]

Several individual pieces moved too. **Large Reliquary's** double-reward chance dropped from **25% to 10%**. **Lightweaver** Core Emblems now improve their own Chain damage instead of increasing all Chain damage. **Soulbinder Orbs** activate and seek a random enemy when their lifetime expires, and orbs picked up by a player deal **50% additional damage**. **Combust** now displays total damage instead of every individual instance, has new VFX, and was significantly optimized. [Official]

If you are mid-campaign on the main branch, none of this applies until you switch. If you do switch, expect your current Emblem values to read differently and re-check your synergy plan rather than assuming the old breakpoints still hold. [Editorial]

### Combat and bug fixes

Enemy cooldowns for **Pikeman Captain II, Greatshield Knight II, Giant II, Giant III and Bulwark Knight** are now visible through their animations, and Giant III received proper Breaker animations. The build also fixes Triskeles flying away, enemies dying without moving, Gilles the Hog continuing to attack after death or starting in a floating position for clients, boss height offsets for clients, map-event desync, Cartographer shop desync, and feature unlocks checking the wrong player's progression data. [Official]

## What you give up in co-op

Crossplay **does not work on the experimental branch**, and you can only join lobbies of other players who are also on the experimental branch. If your group mixes Steam and Microsoft Store/Game Pass players, the branch is not viable until everyone moves. [Official]

This is separate from the main branch's own crossplay disruption. The September 24 meta-progression patch temporarily disabled crossplay compatibility on that version and pointed players to the **Crossplay beta branch** to stay on the older build with crossplay enabled. In other words, there are now two different beta branches with two different purposes: **experimental** for new features, **crossplay** for platform parity. [Official]

## Should you switch?

**Switch if** you play solo, you want mid-campaign saves now, and you are comfortable re-testing your Emblem builds after a balance pass. The branch is the only way to get the save feature today, and the F3 tool makes feedback cheap. [Editorial]

**Stay on the main branch if** you play co-op with friends on another storefront, you are mid-campaign and do not want balance changes, or you want the most stable build available. The main branch's current reference build is **v0.17.60380 (September 30, 2026)**, which includes the late-campaign memory fix and the Banshee soft-lock fix. [Official]

Whichever you choose, do not mix profiles. Switch deliberately, keep a manual backup, and check the [Patch Notes](/guides/patch-notes) page for the next main-branch build before you decide the branch is unnecessary. [Editorial]

## FAQ

**Is the experimental branch free?**
Yes. It is a Steam beta branch of the game you already own, not a separate purchase. [Official]

**Can I play co-op on the experimental branch?**
Only with other players who are also on the experimental branch. Crossplay does not work there. [Official]

**Will switching break my save?**
Paper Cult backs up your save when you switch and says it may be able to restore a pre-switch state, but the branch is explicitly more bug-prone. Keep your own backup. [Official]

**Does the main branch have mid-campaign saves yet?**
Not as of the October 21 announcement. The feature is branch-only for solo campaigns; multiplayer saves are still in development. [Official]

## Related Guides

- [Patch Notes & Roadmap](/guides/patch-notes) — main-branch build history
- [Save System Guide](/guides/save-system-guide) — how saving works on the default build
- [Emblem & Artifact Guide](/guides/emblem-artifact-guide) — the pre-branch Emblem system
- [Village Upgrade Guide](/guides/village-upgrade-guide) — shops and meta-progression
- [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) — crossplay and desync

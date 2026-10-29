---
title: "Demon Bluff Demo: What's In It and How Ascension Works"
description: "The Demon Bluff demo is free on Steam and has been since 27 May 2026. Here is what the demo build contains, how Ascension scales, and what unlocks at 4 and 5."
category: "Progression"
version: "Demo build (2026-10-29)"
updated: "2026-10-29"
date: "2026-10-29"
keywords:
  - "demon bluff demo"
  - "demon bluff demo steam"
  - "demon bluff demo online"
  - "demon bluff demo how many ascensions"
  - "demon bluff ascension"
  - "demon bluff how many ascensions"
  - "demon bluff playtest"
related:
  - "beginner-guide"
  - "characters-list"
  - "ability-order"
  - "release-date-and-platforms"
  - "unlocks-and-skins"
sources:
  - tier: "Official"
    title: "Steam store API — Demon Bluff Demo (app 3803820)"
    url: "https://store.steampowered.com/api/appdetails?appids=3803820&cc=us&l=english"
    date: "2026-10-29 (accessed)"
    text: "Returns type: demo, is_free: true, release_date {coming_soon: false, date: 'May 27, 2026'}, developer UmiArt and publisher offbrand games. This is the demo referenced throughout this page; the main game is app 3522600."
  - tier: "Official"
    title: "Demon Bluff — Steam news, 27 May 2026 (demo feature post)"
    url: "https://store.steampowered.com/news/app/3522600"
    date: "2026-05-27"
    text: "Official description of the demo build: '40+ unique villager cards' and 'nine different Relics', with more relics planned for the full release. The same post describes Relics as modifiers to a village's starting conditions."
  - tier: "Official"
    title: "Demon Bluff — publisher press release, 8 October 2026"
    url: "https://www.gamespress.com/nl/Single-player-Social-Deduction-Game-Demon-Bluff-Launches-NOVEMBER-2026"
    date: "2026-10-08"
    text: "Publisher figures: 'nearly 300k players have joined the Demon Bluff playtest', 'average playtime of nearly 6 hours', 'Top 250 Steam game (~230k wishlists)', and a Discord of 8,800+ members. These are the developer's own numbers, not independently measured."
  - tier: "Community"
    title: "Demon Bluff Wiki — Game Modes"
    url: "https://demonbluff.wiki.gg/wiki/Game_Modes"
    date: "2026-07-15 (last edit), accessed 2026-10-29"
    text: "Source for the ascension ladder and mode rules: 7–12 villages per Ascension level, 4 hearts per level, card unlocks only in Standard, score = 50 + unrevealed cards per Evil kill and 50 × Ascension level per round, Deckbuilding starting at 20 HP that persists between villages. Its body says Endless unlocks after Ascension 4, while its own patch table (v0.762a) says Ascension 5 — we quote both."
---

# Demon Bluff Demo: What's In It and How Ascension Works

Demon Bluff has a **free demo** on Steam — separate app, released **27 May 2026**, no purchase required. It is not the full game: the demo carries 40+ villager cards and nine Relics, while the release build promises 100+ cards. Here is what the demo contains, what it does not, and how the Ascension ladder scales.

The demo is also where most existing footage comes from, which is why its content and the release build's content get confused.

## The demo, verified

| Field | Value | Source |
|---|---|---|
| Name | Demon Bluff Demo (app 3803820) | Steam appdetails |
| Price | Free | Steam appdetails (`is_free: true`) |
| Released | 27 May 2026 | Steam appdetails |
| Card pool | "40+ unique villager cards" | Steam news, 2026-05-27 |
| Relics | "nine different Relics" in the demo, more planned | Steam news, 2026-05-27 |
| Developer / Publisher | UmiArt / offbrand games | Steam appdetails |

To install it, open the main game's store page and use the demo button in the right-hand column; the demo is a separate Steam app, so it installs independently of the full game and does not require a purchase.

**Is the demo still current?** The demo has been live since May 2026 and the main game is still listed as coming in November 2026, so as of 29 October 2026 it is the only way to play. Whether the demo gets updated alongside release builds is not announced — assume it reflects an older build.

## What the demo does and does not have

The demo is not a tutorial slice. It is the real loop with a smaller card pool.

- **40+ villager cards** against the release build's "100+ unique character cards to collect". The wiki documents 44 total roles across all four groups, so 40+ villager cards is a large share of the actual cast — this is a substantial demo, not a teaser.
- **Nine Relics.** Relics are passive items that "modify the conditions of your Village when you start a round". The developer's own examples: Grave Flame makes you lose health if you reveal the last four cards, and Severed Horn makes the character in slot #1 always tell the truth. More are planned for release.
- **No announced achievements.** Steam's Achievements category belongs to the main game, and an unreleased app exposes no unlock percentages.
- **Deckbuilding is gated.** Per patch v0.752a, Deckbuilding unlocks after 10 saved villages in Endless mode — so a fresh save does not start with the draft mode available.
- **No online anything.** Demon Bluff is single-player. `demon bluff demo online` has no different answer than the full game: there is no co-op, no server and no matchmaking.

## How many ascensions are in the demo?

Not documented, and we will not invent a number. The demo has been patched repeatedly since May, so its ladder may not match the release build anyway. What is documented is the structure the ladder follows, which is the same design in both.

## Ascension levels: the real difficulty ladder

Ascension is the progression track that controls how hard a Standard run is. It advances as you save villages; nothing about it is a menu difficulty setting.

- Each Ascension level asks you to save **between 7 and 12 villages**, with the exact number set by your level.
- You get **4 hearts** per Ascension level. Lose all 4 and the village progress for that level restarts.
- The wiki's main text says **Endless unlocks after Ascension 4**; its own patch table for v0.762a (14 July 2026) says **Ascension 5 for new players**. The patch note is newer, so treat 5 as current and 4 as the older rule you may see in older guides.
- **Deckbuilding** unlocks after **10 saved villages in Endless mode** (patch v0.752a).

There is no published table of per-level changes beyond the village count and hearts. Patch v0.761c did redesign Standard for Ascensions 4 and above — "early villages in ascension should be easier, while later ones will be more difficult" — which is a real change to pacing, not just a number.

## What actually gets harder as Ascension rises

**The card pool grows, and that cuts both ways.** Early runs have a thin deck where one Evil read is close to decisive. Later runs have enough Minions that two or three claims can be false at once.

**The night cycle becomes live more often.** The night falls after four reveals in rounds containing Lilis or Lycanthrope. As the pool widens, so does the chance a round contains a night trigger, which tightens the reveal budget before the board reacts.

**Village count rises.** The requirement moves toward the top of the 7–12 range. Each village is a fresh 10 HP budget, so a long level is a long sequence of small execution decisions rather than one big one.

## Scoring, and why it shapes progression

Standard scores two ways:

- **Evil kills:** 50 points plus the number of unrevealed cards at the moment of the kill.
- **Finishing a round:** 50 × your Ascension level.

The first formula is the interesting one: it pays you for committing to a read while cards are still hidden, which is exactly the behaviour that costs HP when you are wrong. Score optimisation and safe play pull in opposite directions.

## The three modes

**Standard** is the base mode and the only place cards unlock. Villages per level scale 7–12.

**Endless** is Standard with every character available and no ascension progression. It tracks villages saved consecutively and total villages saved. An "Endless Advanced" variant adds a random Relic each round but was disabled in v0.730 — so do not expect it to be live.

**Deckbuilding** is the draft mode: you build a starting deck of Villagers, then solve a series of villages with a Demon shown at the start of the run. Health starts at **20** and persists between villages, gold buys card additions, removals or healing, and a relic with a negative effect arrives every few villages.

Note the mode count: the wiki documents three playable modes. Steam's copy mentions "endless mode, challenges, and more", and no description of a distinct "challenges" mode exists anywhere we could load. We are not calling it a fourth mode.

## Publisher-reported numbers

The October 2026 press release states: nearly **300,000 players** in the playtest, average playtime of nearly **6 hours**, **~230,000 wishlists** and a Discord of **8,800+**. These are the studio's own figures, reported through one press document — accurate as claims, not independently measured.

The wishlist and playtest numbers matter for one reason: they describe a demo that has already been played heavily. Whatever you read about Demon Bluff today was likely written against the demo build, including this page.

## Frequently asked

**Is the Demon Bluff demo free?**
Yes. It is a separate free Steam app (3803820), released 27 May 2026.

**Is the demo different from the full game?**
Yes — fewer cards (40+ villager cards against 100+ collectibles) and nine Relics, with more planned for release.

**How many ascensions does the demo have?**
Not published. The ladder structure is documented; the demo's level count is not.

**When does Endless unlock?**
Ascension 5 per the July 2026 patch note; the wiki's main text still says Ascension 4.

**Will demo progress carry over?**
No official statement has been published. Assume it will not.

---
title: "Neon Abyss 2 Local Co-op: Couch Co-op & Split Screen"
description: "Neon Abyss 2 has online co-op for four players and no local co-op or split screen. What the Steam listing confirms, how to set up online play, and fixes."
category: "Mechanics"
version: "1.0"
updated: "2026-10-26"
keywords: ["neon abyss 2 local co op", "neon abyss 2 couch co op", "neon abyss 2 local multiplayer", "neon abyss 2 coop local", "neon abyss 2 local coop mod", "does neon abyss 2 have local co op", "neon abyss 2 multiplayer not working"]
related:
  - neon-abyss-2-beginner-guide
  - neon-abyss-2-1-0-update
  - neon-abyss-2-boss-list
  - neon-abyss-2-weapon-tier-list
  - neon-abyss-2-codes
  - neon-abyss-2-storm-breach
sources:
  - tier: "Official"
    text: "Steam store listing for Neon Abyss 2 (appid 2235200), categories and about_the_game, fetched 2026-10-26 — 'Online Co-op' is the only multiplayer category; no Shared/Split Screen or Remote Play Together entry"
  - tier: "Official"
    text: "Steam announcement 'Neon Abyss 2 - Available Now in 1.0' (2026-10-08) — online 4-player co-op, Storm Breach described as built for 1-4 player co-op, co-op save and host fixes"
  - tier: "Official"
    text: "Steam announcement 'Weekly Update Roundup | October 10–16' (2026-10-19) — reconnect floor mismatch, minigame difficulty, simultaneous pickup and gambling machine fixes"
  - tier: "Official"
    text: "Steam announcement 'A quick update about the in-game Chat function' (2026-07-30) — free chat removed, preset emotes used instead"
  - tier: "Official"
    text: "Steam announcement 'Beta Branch Online Co-op Test Event Is Live!' (2026-06-05) — different branches cannot play online together"
  - tier: "Editorial"
    text: "Setup order, troubleshooting table and the workaround assessment are our own synthesis of the official notes"
---

No — Neon Abyss 2 has no local co-op, couch co-op, or split screen. The Steam listing supports online co-op for up to four players and nothing else. This page shows exactly what the store page confirms, how to get online co-op running, and what to check when it will not connect.


## 1. The Short Answer

Veewo Games describes Neon Abyss 2's multiplayer as "online 4-player co-op, allowing you and up to three friends to dive into the roguelike chaos together." The Steam store page backs that up in its feature categories: the only co-op entry is **Online Co-op**.

| What players search for | Supported in Neon Abyss 2? | Evidence |
|---|---|---|
| Online co-op, 2–4 players | **Yes** | Steam category `Online Co-op`; store description "up to three friends" |
| Local co-op / couch co-op | **No** | No `Shared/Split Screen Co-op` category on the store page |
| Split screen | **No** | No split-screen category or mention in any 2026 patch note |
| Steam Remote Play Together | `[Unconfirmed]` | Not listed among the game's Steam categories as of 2026-10-26 |
| Controller support | **Yes** | Steam category `Full controller support` |
| Cross-platform play | `[Unconfirmed]` | 1.0 shipped on PC and consoles, but Veewo has not published a crossplay statement |

The distinction matters because Steam uses a generic `Co-op` tag alongside `Online Co-op`. For Neon Abyss 2, the other players have to be on another machine.


## 2. What Online Co-op Actually Gives You

The official store description and the 1.0 announcement together define the mode. It is not a shared-screen mode with a shared run — it is four separate Agents inside the same Abyss.

- **Up to four players.** One host plus up to three joiners.
- **Separate rooms are allowed.** Veewo's wording: players can coordinate builds "even exploring different rooms within the same map to maximize efficiency and uncover hidden secrets and treasures." That is impossible in split screen, and it is the clearest sign the mode was designed for online play.
- **Synergies multiply.** Each player brings their own items and combos, and the description frames the appeal as stacking those together rather than sharing one build.
- **Progress is tracked separately.** The 1.0 notes include a fix for "co-op progress leaking into personal saves" and for "incorrect ownership of clients' evolution purchases and Fate settings" — which confirms each player keeps their own save data and their own purchases.
- **Minigames use the host's difficulty.** The October 10–16 roundup states: "All players now use the host's difficulty settings for each minigame round."
- **Chat is emote-only.** Veewo removed free chat on 2026-07-30, citing age-rating requirements and UK social-media law covering chat in games, and replaced it with preset emotes and an emote wheel.

If you were hoping for a couch session, the practical answer is: two machines, two copies, online lobby. The Steam category list does not include `Family Sharing` co-op exceptions either — Family Sharing appears as a library feature, not as a way to run two copies at once.


## 3. How to Set Up Online Co-op

The game does not publish a step-by-step lobby guide, so the order below is assembled from the official save/progress notes and the Beta-branch instructions. Where a step depends on something Veewo has not documented, it is marked.

1. **Update both copies to the same build.** Veewo's Beta-branch post is explicit: "different branches cannot play online together due to version differences." If one player opted into the Beta branch from the main menu or through Steam properties, that player is on a different build.
2. **Pick the host deliberately.** The host owns the run's difficulty for minigames, the run seed, and the floor number that reconnecting clients sync to.
3. **Create or join the lobby from the bar.** The Black Dog Bar is the pre-run hub in every 2026 build; the 1.0 notes add a random-Agent option and per-Agent profiles there.
4. **Confirm each player's Agent.** Each Agent now has its own profile showing "boss kill record and highest Fate record," so choosing a main is a visible, persistent decision rather than a per-run pick.
5. **Expect separate progression.** A client's evolution purchases and Fate settings belong to the client, not the host. Do not assume a teammate's unlocks follow them into your save.
6. **Finish the run before patching.** Both the 1.0 notes and the October roundup open with the same warning: finish your current run first, because updating can break an in-progress run.

### If you are playing the same room anyway

There is no supported same-screen mode, so any "couch" setup has to fake it. Two PCs or a PC plus a Steam Deck-class device on the same network is the only route the game itself supports. `[Unconfirmed]`: Steam's Remote Play Together normally appears as an explicit category on compatible store pages. It does not appear on the Neon Abyss 2 listing as of 2026-10-26, so treat "stream it to a second screen" as untested rather than recommended.


## 4. Why People Think It Has Local Co-op

Three things create the confusion, and none of them is a hidden local mode.

| Source of confusion | What it actually says |
|---|---|
| Steam `Co-op` tag | Generic tag; the specific one is `Online Co-op` |
| Marketing line "1-4 player co-op" | Player count, not screen count — Storm Breach is described as "perfect for our 1-4 player co-op" |
| "Local coop mod" search volume | Players looking for a mod that does not exist; no official post mentions mod support |
| Console versions | 1.0 launched "on Steam and Consoles"; platform-specific co-op features are not documented per platform |

The console point deserves care. Veewo announced 1.0 "for PC and consoles" and later wrote that achievements are "now available on every platform," but the official announcement does not list which console storefronts carry the game, and it does not describe local multiplayer on any of them. Anything claiming "local co-op on Switch/Xbox/PS5" needs a platform store listing to back it, and we could not confirm one from official sources on 2026-10-26.


## 5. Multiplayer Not Working: What the Notes Cover

Veewo's patches from June through October are effectively a list of co-op failure modes. If your session is failing, check these before blaming your router.

| Symptom | Known cause / official fix |
|---|---|
| Cannot join at all | Branch mismatch — Beta vs default cannot play together (2026-06-05 post) |
| Floor number differs from host after reconnect | Fixed in the October 10–16 roundup: "Fixed the floor number not matching the host's after reconnecting in Classic Mode" |
| Items, skills, or stats missing after reconnecting | Same roundup: "incomplete restoration of some items, skills, and player stats when reconnecting" |
| Two players grab the same item and one gets nothing | Fixed: "Improved simultaneous item pickup handling… inconsistent reward ownership when two players grabbed the same item simultaneously in a claw machine room" |
| Gambling or faith machines freeze with several players | Fixed: "gambling machines getting stuck when multiple players interacted with them… simultaneous" |
| Door will not open for one player | Fixed: "mismatched door states between the host and other players that could prevent passage" |
| Run cannot be continued after the host quit | From the March update: if the host leaves and you fail to reconnect, the game bumps you back to the beginning of the current floor so you can continue alone |
| Results screen missing teammates | 1.0 notes: fixed "missing or incomplete teammates' results cards" |
| You cannot talk to your team | Free chat is gone; use emotes |

Run those checks in order: build version, host status, then patch level. All of the fixes above shipped in the default branch by 2026-10-19, so a client that has not updated will behave like the bug still exists.


## 6. Same-Team Tactics That Only Work Online

Because players can split across rooms, co-op changes routing rather than just damage numbers. Two habits come straight from the official feature description:

- **Split for coverage, regroup for bosses.** The store description explicitly frames separate-room exploration as the efficiency play. Send one player to clear side rooms for resources while another pushes toward the boss portal.
- **Stack synergies on purpose.** With unlimited item stacking, the strongest co-op setup is not four generalists but two players leaning into complementary tags and pooling their damage windows on the same boss phase.

Everything else — Faith spending, Hatchmon recruitment, Wonder Block rerolls — follows the single-player rules, which the [beginner guide](/guides/neon-abyss-2-beginner-guide) covers in order.


## 7. FAQ

**Is Neon Abyss 2 split screen?**
No. Split screen is not listed as a Steam category and no patch note refers to it.

**How many players can play together?**
Four: one host and up to three friends, online only.

**Can two players on one Steam account use Family Sharing?**
Family Sharing is listed as a library feature, not as a co-op mode. Nothing in the official notes describes sharing a single copy for multiplayer.

**Does the host need to stay online?**
Yes. If the host disconnects and you cannot reconnect, the game returns you to the start of the current floor rather than letting the run continue as a client.

**Is there crossplay between PC and console?**
`[Unconfirmed]`. Veewo launched 1.0 on "PC and consoles" but has not published a crossplay statement, and no store page we checked lists it.

**Why is my friend's game on a different version?**
One of you switched to the Beta branch. The switch is in the main menu or Steam → right-click the game → Properties → Betas → Beta.


## 8. Bottom Line

Neon Abyss 2 is an online-only co-op game: four players, separate rooms, separate saves, emote-only chat. There is no local co-op, no split screen, and no confirmed mod that adds one. If you need same-room play, plan for two machines and verify both are on the default branch before you start a run.

For everything that happens after the lobby, start with the [boss list](/guides/neon-abyss-2-boss-list) and the [1.0 update notes](/guides/neon-abyss-2-1-0-update).

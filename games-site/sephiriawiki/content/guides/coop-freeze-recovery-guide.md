---
title: "Sephiria Co-op Freeze Fix — 'Can't Interact' Bug, Missing Reconnect & How to Recover a Dropped Run"
description: "In Sephiria co-op a client can freeze mid-run: you keep moving but can't attack, interact, or see your teammates, and because there is no reconnect option a drop usually ends the run. Covers what the freeze bug is, why Steam friend invites beat room codes, and the host-save recovery flow for dropped runs."
category: "Guides"
version: "1.0"
updated: "2026-09-04"
keywords: ["sephiria co-op freeze", "sephiria co-op stuck bug", "sephiria can't interact multiplayer", "sephiria disconnect lost run", "sephiria reconnect", "sephiria co-op bug fix", "sephiria friend invite room code", "sephiria multiplayer frozen", "sephiria desync vs freeze"]
related: ["multiplayer-connection-fix-guide", "coop-guide", "save-file-guide", "controls-settings-guide", "full-release-guide", "beginner-guide"]
sources:
  - tier: "Official"
    text: "Patch 1.0.23 (Aug 4), 1.0.24 (Aug 7), 1.0.28 (Aug 14) and 1.0.30 (Aug 20, 2026) each fixed multiplayer freeze/stuck variants (NPC-dialogue forced-move freeze, Training Grounds freeze, Chapter 6 co-op game-over progress freeze, Chapter 5 kick issues) — 17173 mirrors of the patch notes and Steam announcements; a late-June 2026 pre-1.0 announcement said a reconnect feature was in development"
  - tier: "Community"
    text: "Symptoms (client can move but can't attack/interact/see teammates), the anvil/roots-station trigger reports, the room-code vs Steam-friend-invite finding, and the developer's log request come from the Steam Community thread 'Fun game, but a reeeally bad coop bug' — steamcommunity.com/app/2436940/discussions/0/596283752196609510 (English/French/Chinese versions, still indexed September 2026)"
  - tier: "Editorial"
    text: "The reconnect button being grayed out and the host-save recovery flow come from the xboxplay.games multiplayer fix guide (Aug 11, 2026); 'missing reconnection' ranking among top negative themes and the ~4-in-10 disconnect estimate come from VaporLens review aggregation (model output, not raw quotes); Steam post bodies could not be captured directly at time of writing (age-gate) — only indexed content was used, no player quotes invented, single-sourced details marked [Unconfirmed]"
---

# Sephiria Co-op Freeze Fix — "Can't Interact" Bug, Missing Reconnect & How to Recover a Dropped Run

The worst Sephiria co-op failure isn't lag — it's the **freeze**. One player suddenly gets stuck: they can still move and dash, but can't attack, open anything, or see teammates, and the run can't continue. Because the game has **no reconnect option**, a full disconnect usually ends that player's run. This guide covers the mid-run freeze and dropped-run problem — not general lag or join failures (see the [Multiplayer & Connection Fixes Guide](/guides/multiplayer-connection-fix-guide)).

**The short answer:** the freeze is a known family of co-op bugs the developers patched one trigger at a time through the 1.0.2x cycle. The community's most reliable workaround: **host and join via Steam friend invites rather than room codes**, keep **manual-save discipline** at rest zones, and if someone drops, have the **host rebuild the lobby from a fresh save** — because there is no way to rejoin a live session.

## What the Co-op Freeze Looks Like

Community reports describe it consistently: a client stops syncing with the host but stays in the world.

- The frozen player **can move and dash**, but **cannot attack, interact, open doors, or trigger the next area**. [Community]
- Everyone else sees them stop contributing; the frozen player reports **not seeing teammates' actions** at all. [Community]
- It **never resolves in-session** — unlike a lag spike it does not catch up; the state persists until someone leaves or force-closes. [Community]

The developers acknowledged the reports and asked affected players to send video or log files — confirmation this is a real bug class, not a network misunderstanding. [Community]

## Freeze vs. Lag vs. Desync

| Symptom | Likely problem | What usually helps |
|---------|----------------|--------------------|
| You can attack, but your friend teleports / hits land late | High ping | Host swap, wired connection (see the [connection guide](/guides/multiplayer-connection-fix-guide)) |
| Enemies and players jitter or reset during boss fights | Desync | Host with the steadiest machine/connection |
| **You can move but not attack/interact; teammates freeze on your screen** | **Co-op freeze bug** | This guide — friend invites, save discipline, host-save recovery |

Ping and desync are performance/network problems; the freeze behaves like a dropped sync the game never recovers, so the fix is prevention and recovery rather than router settings.

## Reported Triggers and the Patch Trail

Players and patch notes point to several triggers:

- **Upgrade-station interactions** (anvil, roots tree) — the trigger named most often in the main Steam thread. [Community — single-thread report, **[Unconfirmed]**]
- **Room-code joins on the first level** — see the friend-invite workaround below. [Community]
- **Being force-moved while talking to an NPC in multiplayer** — fixed in **1.0.24 (Aug 7, 2026)**. [Official]
- **Entering the Training Grounds** — confirmed in 1.0.24, fixed in **1.0.25**. [Official]
- **A Chapter 6 co-op game over freezing progress** — fixed in **1.0.28 / 1.0.29 (Aug 14)**. [Official]
- **Chapter 5 kick issues** — patched in **1.0.30 (Aug 20, 2026)**. [Official]

The honest read: "the freeze" is a family of bugs fixed one variant at a time through August (1.0.23 → 1.0.30), so new triggers can still surface and prevention matters even on the current build.

## The Missing Reconnect Feature

A drop is so punishing because Sephiria has **no way to rejoin a live session**. If a client disconnects or crashes, the character is gone for that run — in a boss fight that often means death and a lost run.

- "Missing reconnection" repeatedly ranks among the **top negative themes** in review aggregation; model estimates put the disconnect rate near **4 in 10 sessions for some hosts** — treat as a heuristic, not a measurement. [Editorial — VaporLens model output, **[Unconfirmed]**]
- The developers said in a **late-June 2026 announcement** that a reconnect feature was **in development and being QA-tested**. It has not appeared in any patch note through **1.0.30**, so it is planned, not available. [Official — announcement summary, **[Unconfirmed]** status]
- Third-party players have built **BepInEx-based mods** adding IP co-op and reconnection for the Chinese community — at your own risk and outside official support, their existence mainly shows demand for the feature. [Community]

Until reconnect ships, the recovery flow below is the only supported way to resume a broken session.

## Prevention: What Lowers the Odds

1. **Join through Steam friend invites, not room codes.** The most-reported workaround in the main Steam thread: room-code joins froze often (especially on the first level), while friend-invite joins were far more stable — several players said switching stopped their freezes. [Community]
2. **Host quality and versions still matter.** Keep everyone on the same version and the host on a stable connection — same advice as the [connection guide](/guides/multiplayer-connection-fix-guide).
3. **Avoid known trigger states.** Be cautious lingering on upgrade-station interactions and around the Chapter 6 post-game-over moment if your group has seen freezes. [Official / Community]
4. **Manual-save at rest zones before risky moments** (chapter transitions, hard bosses). Sephiria autosaves, but a manual save gives the host a clean recovery point. [Editorial]
5. **Keep valuables on the host.** Trade build-critical artifacts and currency to the host — a client drop can fail to sync client-held inventory. [Editorial — xboxplay fix guide]

## Recovery: After a Freeze or Disconnect

There is no in-session fix for a frozen client. Work through this in order:

1. **Confirm it's a freeze, then hard-close** the game (an in-game reconnect attempt isn't possible).
2. **The host must not keep playing** — continuing strands the dropped player and risks the run. [Editorial]
3. **The host saves at a rest zone if one is reachable**, exits to the main menu, and **closes the lobby**.
4. **The host recreates the lobby from the just-saved file** and sends a **fresh Steam invite** — not the old session link, which is dead. [Editorial — xboxplay fix guide]
5. **The dropped player rejoins the new lobby**; the party resumes from the host's save, the source of truth.
6. **If no rest zone was reachable** (mid-boss), the run is likely lost — the real cost of the missing reconnect feature.

For file-level backup and restore — the save folder, Steam Cloud pitfalls, SLOT/SLOTTMP pairing — see the [Save File Guide](/guides/save-file-guide).

## Reporting to the Developers

- Attach the game log, which lives with your saves: `%USERPROFILE%\AppData\LocalLow\TEAM HORAY\Sephiria\` — files **Player.log** and **Player-prev.log** (no-space spelling **TEAMHORAY** also appears in official notes). [Official / Community — path also in the [Save File Guide](/guides/save-file-guide)]
- Add a short clip plus **party size, who hosted, and what you were doing** when it froze. [Community]
- Send to **team.horay.game@gmail.com** or post in the Steam discussions, where the developers are active. [Official / Community]

## FAQ

**Q: I can move but can't attack or interact in co-op — is it my internet?**
A: Almost certainly not normal lag — that matches the co-op freeze bug. Ask your teammates if you appear frozen, then hard-close and rejoin via a fresh host invite. [Community]

**Q: Can a dropped friend rejoin the same session?**
A: Not live — no reconnect option as of 1.0.30. The host saves at a rest zone, closes and recreates the lobby, and sends a fresh invite. [Editorial / Official]

**Q: Room codes or friend invites?**
A: Use Steam friend invites — the community's main co-op bug thread found room codes froze far more often. [Community]

**Q: Has the co-op freeze been fixed?**
A: Specific variants were fixed across 1.0.23 → 1.0.30 [Official], but the bug class persisted into late August. On the 1.0.30 baseline, use the prevention and recovery steps above.

**Q: Is there a reconnect feature?**
A: Not yet — announced in development in late June 2026, but no patch note through 1.0.30 lists it. Until it ships, a drop means the run is on the host's save. [Official / **[Unconfirmed]** status]

**Source note:** The Steam Community thread "Fun game, but a reeeally bad coop bug" ([steamcommunity.com/app/2436940/discussions/0/596283752196609510](https://steamcommunity.com/app/2436940/discussions/0/596283752196609510/)) is the anchor Community source — it exists in English, French and Chinese, includes multiple players and a developer reply, and was still indexed on 2026-09-04. Steam post bodies could not be captured directly (age-gate), so only indexed content was used and no player quotes were invented. Official patch references are to the [17173 mirrors](https://news.17173.com/tag/%E8%B5%9B%E8%8F%B2%E8%8E%89%E5%A8%85) of 1.0.23/1.0.24/1.0.28/1.0.30 and Steam announcements; editorial synthesis draws on the xboxplay.games fix guide (Aug 11, 2026) and VaporLens aggregation. Single-source or model-derived details are marked **[Unconfirmed]**.

## Related Guides

- [Multiplayer & Connection Fixes](/guides/multiplayer-connection-fix-guide) — joining, ping, desync, NAT and firewall (the "can't connect" half)
- [Co-op Guide](/guides/coop-guide) — team composition and roles
- [Save File Guide](/guides/save-file-guide) — file-level backups and restoring a lost run
- [Controls & Settings Guide](/guides/controls-settings-guide) — host-side settings for a stable session
- [Full Release Guide](/guides/full-release-guide) — what changed at 1.0
- [Beginner Guide](/guides/beginner-guide) — first-time players

---
title: "Sephiria Multiplayer Guide & Connection Fixes — Co-op Not Working, Ping Spikes & Desync"
description: "How multiplayer works in Sephiria 1.0 and how to fix it when it doesn't: hosting and joining (room code), the known ping-spike and desync problems, step-by-step connection fixes (firewall, folder path, network discovery), and how to submit player.log to the developers."
category: "Guides"
version: "1.0"
updated: "2026-08-01"
keywords: ["sephiria multiplayer", "sephiria co-op", "how to play sephiria co-op", "sephiria invite friends", "sephiria co-op disconnect fix", "sephiria ping", "sephiria desync"]
related: ["coop-guide", "beginner-guide", "updates-roadmap", "full-release-guide"]
---

# Sephiria Multiplayer Guide & Connection Fixes — Co-op Not Working, Ping Spikes & Desync

**Sephiria 1.0 / Updated: August 1, 2026**

Sephiria supports **1–4 player co-op**, and the recent Chinese-community feedback is encouraging: fast matchmaking, ~90ms latency, no major disconnects in normal sessions. But the developer's own patch history admits the hard cases are **not fully solved**: ping spikes to 200–1000+ms, desync in 3–4 player boss fights, and black-screen on leaving a party. This guide covers how co-op works, what's still broken, and every fix that exists — including how to send the developers the exact log they ask for.

---

## How Co-op Works (1.0)

- **Host and join** via the game's lobby system — host creates a room, friends join through the in-game friend/room code flow. (Co-op basics and roles: [Co-op Guide](/guides/coop-guide).)
- Up to **4 players**; progress and loot work per-run like the rest of the roguelite loop.
- **Hard Mode co-op note:** modifiers like Blood Feast scale with party size since 1.0.21 — 4-player Hard runs are fair again.

## Known Connection Problems (Official Status)

| Problem | Status in 1.0 | Notes |
|---------|---------------|-------|
| Ping spikes to 200–1000+ms | **Acknowledged, not fully fixed** | Mostly in long sessions or with many network objects; the devs have patched it repeatedly since EA 0.7.6 |
| Desync in 3–4 player boss fights | Partially fixed | 1.0 shipped a batch of fixes; occasional desync remains in recent reviews |
| Black screen when leaving a party | Fixed in 1.0 | Was a common EA complaint |
| Kicked players re-joining | Fixed in 1.0 | Rejoin works cleanly now |
| Occasional disconnects in long multiplayer sessions | **Known, not fully fixed** | The devs request logs (below) |

## Step-by-Step Connection Fixes

If co-op is unplayable, work through these in order:

1. **Check the game folder path** — Sephiria (like most Korean indie games) misbehaves if installed under a path containing non-Latin characters or spaces-heavy paths. Move the install to a plain path (e.g., `C:\Games\Sephiria`).
2. **Firewall / antivirus** — add Sephiria to your firewall allow-list for both Private and Public networks; some AV suites block the game's P2P traffic silently.
3. **Network discovery** — ensure network discovery/file sharing are enabled on Windows for the LAN parts of the connection.
4. **Host quality matters** — the host's upload speed and stability affect everyone; the player with the most stable connection should host.
5. **Wired over Wi-Fi** — Wi-Fi jitter amplifies the game's known ping-spike bug.
6. **Restart the session for long runs** — the ping-spike bug compounds over long sessions; a fresh room every hour or two resets it.
7. **Verify game files** (Steam) — corrupted files can cause join failures that look like network problems.

## Submitting Logs to the Developers (The Official Process)

The developers explicitly request logs when multiplayer issues persist — this is how the 1.0 fixes got made, and it's the fastest path to a fix for you:

1. Reproduce the problem (ping spike / desync / disconnect).
2. Exit the game.
3. Open: `Users\AppData\LocalLow\TeamHoray\Sephiria\`
4. Grab **`player.log`** (and **`player-prev.log`** if it exists).
5. Attach both to your report on the **official Discord** or Steam forums with: party size, how long the session ran, and what happened (timestamps help).

> The logs contain your system and session data — no need to strip anything; this is exactly what the devs ask for.

## FAQ

**Q: Can I play cross-platform (Steam + console)?**
Sephiria is PC-first at 1.0 — co-op is between Steam players.

**Q: My friend's invite isn't showing.**
Check version match (everyone on 1.0.21+), firewall rules, and that both of you have network discovery on. Restart both games, then retry.

**Q: Is the ping spike my internet?**
Usually not — it's the known game bug (acknowledged since EA 0.7.6). Use the session-restart workaround and submit logs.

**Q: Does Hard Mode co-op scale properly now?**
Yes — 1.0.21 fixed Blood Feast (lifesteal) and similar modifiers to scale with party size.

---

## Related Guides

- [Co-op Guide](/guides/coop-guide) — team composition and roles
- [Beginner Guide](/guides/beginner-guide) — starting out in 1.0
- [Full Release Guide](/guides/full-release-guide) — 1.0.21 hotfix details
- [Update Roadmap](/guides/updates-roadmap) — when the remaining fixes land

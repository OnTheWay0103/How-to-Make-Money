---
title: "Witchspire Co-op Troubleshooting Guide — Can't Join Friends, Chests Empty & Desync Fixes"
description: "Fix co-op problems in Witchspire: how joining actually works (Steam friend invite, not a session code), why chests look empty to your friends, why your character can't go to a friend's world, host requirements, version matching, and desync workarounds."
category: "Guides"
version: "0.1.4"
updated: "2026-08-01"
keywords: ["witchspire co-op not working", "witchspire can't join friend", "witchspire chest empty", "witchspire what carries over in co-op", "witchspire character tied to world", "witchspire desync", "witchspire multiplayer fix"]
related: ["coop-multiplayer-guide", "beginner-guide", "patch-notes-updates", "faq-content"]
---

# Witchspire Co-op Troubleshooting Guide — Can't Join Friends, Chests Empty & Desync Fixes

> Applies to EA v0.1.4 / Updated: August 1, 2026

Witchspire is at its best with a coven of four — but its co-op has sharp edges that surprise everyone eventually: **"my friend's chest was empty when I opened it," "my character doesn't exist in my friend's world," and "we can't even connect."** None of these are crashes; they are how the game's co-op is designed (plus one version-matching rule). This guide explains the real rules and every workaround that matters.

---

## How Joining Actually Works (No Session Codes)

Witchspire co-op is **Steam-friends-list based**. There is no in-game lobby browser and no session code system:

1. Both players must be **Steam friends**.
2. Host starts their world and plays (worlds are **hosted on the host's machine** — it's peer-to-peer).
3. Host right-clicks the friend in the **Steam friends list** → **Invite to Game**.
4. Friend accepts → loads into the host's world.

**Version rule (since 0.1.1b):** everyone must be on the **same game version and branch** (including beta branches). If the invite fails or the friend never loads, check versions first — mismatched versions are the most common "can't join" cause.

---

## Host Requirements — the Actual Fix for Most Failures

Because worlds are hosted on the host's PC, the host's machine and network ARE the server:

| Requirement | Why |
|-------------|-----|
| **Strongest PC hosts** | The official advice: the player with the best hardware should host. A weak host = connection failures and desync for everyone |
| **Wired internet** | Wi-Fi hosting causes rubber-banding and disconnects. The host should be on ethernet |
| **Same version/branch** | 0.1.1b+ rule — mismatched versions block joining entirely |
| **Open NAT** | Strict NAT on the host blocks incoming connections; check router/Steam NAT type |

If a friend "can't connect," the fix order is: version match → swap host to the best-connected player → wired host → check NAT.

---

## Why the Chest Is Empty (Server-Side Chests)

**Chests are server-side: when one player opens a chest, its contents are consumed for the entire team — and the game does not reserve it for each player.** If your teammate opens a chest first, you will see it as already-looted or empty.

This is one of the game's most complained-about co-op behaviors ("unintended competitive friction"). Workarounds:

- **Call your chests**: agree that the finder opens the chest, or open chests together and split loot after.
- **Divide zones**: each player farms a different area, so chest spawns are uncontested.
- **Don't grief, coordinate**: the design can't be fixed from your side, but the developer's QoL list includes co-op improvements.

---

## Your Character Is Tied to the World You Created In

This is the biggest co-op expectation gap:

- **Characters are bound to the world (save) they were created in.** They do NOT follow your account.
- Joining a friend's world with your character is not possible — you play as a **guest**, with a character that lives in the host's world.
- **What carries over as a guest:** your backpack contents, bonded familiars, and Luminary points — these persist.
- **What does NOT carry over:** your Hearth, buildings, and world progress — those belong to the host's world.

**Practical advice:** treat your own world as your "home base" (Hearth, buildings, quests) and friend worlds as expeditions. If you want to be a permanent resident, do your building in the world you plan to keep. See also the [Co-op Multiplayer Guide](/guides/coop-multiplayer-guide) for the full team-play breakdown.

---

## Late-Joiners Land on the Host's Progress

When you join a friend mid-story, you spawn at **the host's current quest/progress state**, not your own. Consequences:

- You may skip story steps you haven't done (or replay ones you have).
- Enemy scaling and zone unlocks follow the host.
- For a relaxed time, that's fine — for your own progression, play your own world first and treat co-op sessions as shared play.

---

## Desync & Disconnects — Status and Workarounds

Desync (enemies/jobs desyncing between players, rubber-banding in co-op) is a **known, acknowledged issue** — the developer listed desync fixes in the 0.1.4 QoL preview. Until it ships:

- **Keep the host stable**: host on ethernet, close heavy downloads, cap the host's frame rate if the CPU is maxed.
- **Rejoin, don't restart**: a disconnected guest can usually rejoin via the same Steam invite without the host restarting the world.
- **Shorter sessions**: long sessions drift; a fresh host load every hour or two resets accumulating desync.
- **Same region**: playing across continents guarantees bad hosting latency — host from the region most players are in.

---

## Co-op FAQ

**Q: Can I play with players on different platforms (Steam vs console)?**
Witchspire is currently PC-first; co-op is via the Steam friends list. Console support is part of the EA roadmap but not live at 0.1.4.

**Q: My friend's invite doesn't appear. What now?**
Check (1) same version/branch, (2) Steam friend status (not just "recent player"), (3) host NAT/connection, (4) restart both games — in that order.

**Q: Do we share quest progress?**
Quests follow the host. Guests complete objectives in the host's world but their own quest state is unchanged.

**Q: Will my bonded familiar survive a co-op death?**
Familiars are inventory items once bonded — they don't die permanently. Re-buying/recatching is not needed.

**Q: Is the desync fixed yet?**
Not fully — tracked in the 0.1.4 "coming soon" QoL list. We'll update this guide within 48 hours of the fix shipping (watch the [Patch Notes & Roadmap](/guides/patch-notes-updates) page).

---

## Related Guides

- [Co-op Multiplayer Guide](/guides/coop-multiplayer-guide) — team composition and multiplayer basics
- [Beginner Guide](/guides/beginner-guide) — getting started solo or in a coven
- [Patch Notes & Roadmap](/guides/patch-notes-updates) — when the desync/QoL fixes ship
- [FAQ](/faq) — quick answers

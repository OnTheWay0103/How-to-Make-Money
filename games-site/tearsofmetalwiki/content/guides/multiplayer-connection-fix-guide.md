---
title: "Tears of Metal Multiplayer & Connection Fix Guide — Desync, Lag & Crossplay"
description: "Fix Tears of Metal co-op problems: the known desync issues (developer-confirmed, being fixed), who should host, the crossplay situation (the Xbox/Game Pass version is announced for later in 2026), and every connection workaround that helps until the fix lands."
category: "Guides"
version: "Early Access"
updated: "2026-08-11"
keywords: ["tears of metal desync fix", "tears of metal multiplayer lag", "tears of metal co-op not working", "tears of metal crossplay", "tears of metal multiplayer fix", "tears of metal game pass co-op"]
related: ["co-op-guide", "beginner-guide", "patch-notes", "save-system-guide"]
---

# Tears of Metal Multiplayer & Connection Fix Guide — Desync, Lag & Crossplay

> **Early Access / Updated: August 11, 2026**

Tears of Metal is built for 4-player co-op — and "**Multiplayer has technical issues**" is a recurring theme in its reviews. The good news: the developers have **publicly confirmed desync fixes are their #2 priority** (behind mid-campaign saves), and a recent update already improved things. This guide covers the current state, who should host, the crossplay situation, and every workaround that helps today.

---

## The Current State (Early Access)

| Issue | Status | Notes |
|-------|--------|-------|
| Desync between players | **Acknowledged, being fixed** | Developer-confirmed #2 priority; multiplayer desync issues explicitly named |
| Crossplay (PC / Xbox / Game Pass) | Not applicable yet | The Xbox Series X\|S + Game Pass version is announced for later in 2026 and not yet released — all co-op is currently Steam PC |
| Launch bugs affecting co-op | Fixed in a recent update | The Iseult the Banshee softlock is fixed; health-bar display fixes also shipped |

---

## Who Should Host (The Single Biggest Fix)

Like most small-studio co-op games, Tears of Metal is **host-based**: the host's connection and hardware define everyone's experience.

| Host rule | Why |
|-----------|-----|
| **Best-connected player hosts** | The host's upload bandwidth and stability set the ceiling for the whole party |
| **Wired > Wi-Fi** | Wi-Fi jitter on the host directly becomes desync for everyone |
| **Least-loaded machine hosts** | A host struggling to render the musou crowds drags the netcode down |
| **Same region** | Cross-continent parties desync worst — pick a host in the region most players are in |

**If desync persists:** swap the host to a different player and compare — this alone fixes a large share of "co-op is broken" reports.

---

## Crossplay: What's Real Today

- **There is no crossplay yet:** the game is currently **Steam PC-only**. The **Xbox Series X|S + Game Pass version has been announced for later in 2026** but is not released — no crossplay details have been announced for it.
- **Invites:** use the in-game party/friends flow. If an invite fails, version-match first (see below).

## Connection Workarounds That Work Today

1. **Version-match the party** — everyone on the same game version. Mismatched versions cause invisible join failures.
2. **Restart the lobby for long sessions** — desync compounds over time; a fresh lobby every hour resets it.
3. **Reduce host load** — close streams/downloads on the host machine; musou crowds are CPU-heavy.
4. **Lower host graphics** — if the host is GPU-bound, frame drops translate into rubber-banding for everyone.
5. **Verify game files** — corrupted installs mimic network problems.
6. **Report with logs** — the devs read Steam forums/Discord; include host info, party size, and session length. This is how the stability patch's fixes got prioritized.

---

## What a Recent Update Already Fixed

A recent post-launch update shipped: the **save recovery system**, the **Iseult the Banshee softlock fix**, texture-size reductions (Steam Deck help), and health-bar display fixes. Multiplayer desync remains on the confirmed list — the [Patch Notes & Roadmap](/guides/patch-notes) page tracks when the next netcode fix lands (we update within 48 hours).

---

## FAQ

**Q: Is the desync fixed?**
Not yet — confirmed as the developer's #2 priority, in progress with no date. Host choice and the workarounds above are the best mitigations today.

**Q: Can PC and Xbox players play together?**
Not yet — the game is currently Steam PC-only. The Xbox Series X|S + Game Pass version is announced for later in 2026; no crossplay details have been announced.

**Q: Why does the game lag only in co-op?**
Host-based networking: the host's connection is everyone's connection. Swap hosts and go wired.

**Q: Does difficulty scale with 4 players?**
Yes — but a full party's clear power usually outweighs the scaling, and shared Threat Level pressure is one reason 4-stacks feel easier (see the [Co-op Guide](/guides/co-op-guide)).

**Q: Can I report a desync bug?**
Yes — Steam forums/Discord with host info, party size and session length. The devs actively triage these.

---

## Related Guides

- [Co-op Guide](/guides/co-op-guide) — team composition and roles
- [Patch Notes & Roadmap](/guides/patch-notes) — netcode fix tracker
- [Beginner Guide](/guides/beginner-guide) — first co-op sessions

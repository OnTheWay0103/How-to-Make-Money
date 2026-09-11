---
title: "Can't Join a Tears of Metal Co-op Game? Lobby Join Failures, Version Mismatch and Fixes"
description: "Why Tears of Metal co-op lobbies never load or a friend's game never appears: the version-mismatch rule that breaks joining after every patch, the 'crossplay' beta branch, the missing EOS DLL, clock and install fixes, and what the September 8, 2026 patch changed."
category: "Guides"
version: "Early Access"
updated: "2026-09-12"
keywords: ["tears of metal can't join multiplayer", "tears of metal can't join friends", "tears of metal lobby not working", "tears of metal multiplayer not working", "tears of metal version mismatch", "tears of metal crossplay branch", "tears of metal stuck loading lobby", "tears of metal multiplayer error"]
related: ["multiplayer-connection-fix-guide", "patch-notes", "co-op-guide", "save-system-guide", "crash-launch-fix-guide"]
sources:
  - tier: "Official"
    text: "\"Crossplay compatibility is temporarily disabled on this version. Use the 'Crossplay' Beta branch to stay on the old version and to enable crossplay\"; \"Improved Epic Online Services (EOS) connection handling, including fixes for stale connections\"; \"Added detection and clearer player-facing error messages for several common multiplayer issues\" — Paper Cult, Steam Community announcement \"New Patch - Big Bug Fixing Pass\", September 8, 2026 (store.steampowered.com/news/app/1913120)"
  - tier: "Official"
    text: "Co-op is specified as Online Co-op for up to four players and crossplay runs between the Steam build and the Microsoft Store / PC Game Pass build — Steam store page, app 1913120"
  - tier: "Community"
    text: "Join-failure reports and the fixes players are told to try — Steam Community discussions \"can't join multiplayer anymore\" (steamcommunity.com/app/1913120/discussions/0/589561020200233324/), \"Crossplay Steam Branch Instructions\" (steamcommunity.com/app/1913120/discussions/0/586181727714551399/) and \"13k+ ping during multiplayer games\" (steamcommunity.com/app/1913120/discussions/0/592938033420104794/)"
  - tier: "Editorial"
    text: "The diagnostic order of the fixes below, and the decision to keep desync and in-game lag out of this page, are this guide's own editorial choices"
---

# Can't Join a Tears of Metal Co-op Game? Lobby Join Failures, Version Mismatch and Fixes

You hit join, the lobby screen sits there, and eventually you are dropped back on the lobby list. Or your friend's game never appears in it at all. Tears of Metal's co-op works, but it fails *quietly* — most join problems are not crashes and throw no obvious error, which is why they get reported as "multiplayer is broken."

> **Scope:** this page covers **failing to get into a game** — lobbies that never load, friends' games that never appear, joins that silently bounce. For lag, desync and host selection *once you are inside a run*, see the [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide). Two different problems, two different pages.

---

## The Short Answer

Work down this list in order. It is sorted by how often each cause is the real one.

| Symptom | Most likely cause | Go to |
|---------|-------------------|-------|
| It worked yesterday, now nobody can join anyone | **Version mismatch** after a patch | Fix 1 |
| Your friend's game never appears in the lobby list | Version mismatch, or a different store build | Fix 1 |
| Everyone is on the same version but joins still time out | **Install integrity** — a quarantined game file | Fix 2 |
| Joins *instantly* time out, every single time | **System clock** is wrong | Fix 3 |
| One specific person cannot join, everyone else can | Their version, their clock, or their install | Fixes 1–3 |
| You get in, then everyone lags and desyncs | Not a join problem | [Connection Fix Guide](/guides/multiplayer-connection-fix-guide) |

---

## Fix 1: Version-Match the Party (This Is Most of Them)

Tears of Metal is **host-based online co-op for up to four players**, and it shipped on **Steam, the Microsoft Store and PC Game Pass on day one**, with crossplay between the two PC builds. Version-matching is not optional: the game will not join players who are on different builds, and it does not always tell you that is the reason.

The trap is that **Steam approves builds faster than the Microsoft Store pipeline.** After every patch, the Steam build briefly runs ahead, and crossplay stops working on the default branch until the Microsoft Store / Game Pass build catches up. Paper Cult states this on each patch announcement. The September 8, 2026 patch says it verbatim:

> "Crossplay compatibility is temporarily disabled on this version."

> "Use the "Crossplay" Beta branch to stay on the old version and to enable crossplay."

**The fix, if you are the Steam player in a mixed party:**

1. Steam → Library → right-click **Tears of Metal** → **Properties**.
2. Open the **Betas** tab.
3. Select the beta branch named **`crossplay`**.

That branch is kept matched to the Game Pass / Microsoft Store build, so a Steam player on it and a Game Pass player on the default build can party together. Once the Microsoft Store build catches up, the branch updates too.

**Also check:** if everyone is on Steam, make sure nobody has an update sitting in the download queue. An unapplied patch produces exactly the same "can't join anyone" symptom as a crossplay split — see [Patch Notes & Roadmap](/guides/patch-notes) for the current build.

---

## Fix 2: Verify the Game Files (The Missing EOS File)

A quiet failure mode the community has documented repeatedly: **anti-virus software can quarantine or delete a file the game needs for online play.** The file is `EOSSDK-Win64-Shipping.dll` — Epic Online Services, the multiplayer backend Tears of Metal uses — and it lives in the game's `ToM_Data\Plugins\x86_64` folder. If it is gone, the install looks perfectly healthy and multiplayer simply never works.

The [Steam Community thread "can't join multiplayer anymore"](https://steamcommunity.com/app/1913120/discussions/0/589561020200233324/) is the reference for this — the original poster had co-op working days earlier, then could not join anything at all, even after disabling crossplay and switching branches.

**What to do:**

1. Allow Tears of Metal in your anti-virus / firewall, and check the quarantine list for anything named `EOSSDK-Win64-Shipping.dll`.
2. In Steam: Library → right-click **Tears of Metal** → **Properties** → **Installed Files** → **Verify integrity of game files**. Steam will re-download anything missing — including a quarantined DLL.
3. Relaunch the game and try again. If the file keeps disappearing, the anti-virus exclusion is the actual fix.

The same thread recommends checking that game ports are not blocked and that you are not fighting a strict NAT: a host behind a restrictive router can be reachable to nobody.

---

## Fix 3: Check Your System Clock

This one sounds like a joke and is not. **A system clock that is off by more than a small amount makes session timeouts instant** — the session layer rejects the handshake before any real connection attempt happens. The symptom is joins that fail in under a second, every time, for everyone.

On Windows: right-click the clock → **Adjust date and time** → **Sync now**. Confirm the time zone too, and turn on automatic time sync if your PC drifts.

---

## Fix 4: The Host-Side Basics

If version, install and clock are all fine, the remaining failures usually sit with the host's machine:

- **Install on an SSD, and go wired.** A host loading from a slow drive or a jittery Wi-Fi link produces join timeouts for clients.
- **Restart the lobby.** Long-lived lobbies accumulate connection state; a fresh lobby fixes a surprising number of "nobody can join now" reports.
- **Same region.** Cross-continent parties fail to join and desync worst. The [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) covers host selection in detail.

---

## What the September 8, 2026 Patch Changed

Paper Cult shipped a **"Big Bug Fixing Pass"** on **September 8, 2026** whose multiplayer section targets exactly these problems — it is the first build with dedicated work on join plumbing rather than desync math:

- **"Improved Epic Online Services (EOS) connection handling, including fixes for stale connections."** Stale EOS sessions are a known cause of a lobby that exists on your screen but cannot be entered.
- **"Added detection and clearer player-facing error messages for several common multiplayer issues."** This is the important one for anyone troubleshooting: the game now *tells you* when a join fails and roughly why, instead of dumping you back to the lobby list with no explanation.

The same patch made co-op less fragile: **"Players can no longer accidentally Revive or Give Up while typing in chat"**, a **"1-second delay after death before the dead player can Give Up"**, fixed **3D spectator audio**, and — for anyone whose campaign did something strange — a fix for **"an issue where Host and Client save data could become mixed together on Clients."**

That last one is a reason to update rather than sit on the crossplay branch indefinitely: the older branch does not have these fixes. If you switch branches, back your save up first (see the [Save System Guide](/guides/save-system-guide)).

---

## If It Still Fails: Get the Logs

The game writes `player.log` and `Player-prev.log` to:

`C:\Users\<your username>\AppData\LocalLow\Paper Cult\Tears of Metal`

Paper Cult reads the Steam forums and the official Discord. Reports that include the log files, your build number, your host, your party size and how long the session lasted get triaged fastest — that is how the stability work got prioritised in the first place.

---

## FAQ

**Q: Why can my friend join other people's games but not mine?**
Joining is version- and host-dependent, not account-dependent. Either they are on a different build (Fix 1), their install is damaged (Fix 2), or your lobby/host setup is the blocker (Fix 4).

**Q: Does the "crossplay" beta branch cost me anything?**
Yes, a little: you stay on the older build until the Microsoft Store build catches up, so you miss the newest fixes. Use it only while you are actively playing with someone on the Game Pass / Microsoft Store build.

**Q: Is crossplay broken forever?**
No. The split is temporary and repeats after each patch because Steam approves builds faster than the Microsoft Store. It resolves when the Microsoft Store build lands.

**Q: Can I play co-op with someone on an Xbox console?**
Not yet. The PC versions crossplay with each other; the **Xbox Series X|S console version** is announced for later in 2026 and is not out.

**Q: I get in but the game desyncs immediately. Is that a join problem?**
No — that is the netcode, not the join path, and it is the developer's #2 stated priority. Head to the [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide).

---

## Related Guides

- [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) — desync, lag, crossplay overview and host selection
- [Patch Notes & Roadmap](/guides/patch-notes) — the current build number and what shipped when
- [Co-op Guide](/guides/co-op-guide) — team composition and roles once you are in
- [Save System Guide](/guides/save-system-guide) — mid-campaign saves and save recovery
- [Crash & Launch Fix Guide](/guides/crash-launch-fix-guide) — when the game will not start at all

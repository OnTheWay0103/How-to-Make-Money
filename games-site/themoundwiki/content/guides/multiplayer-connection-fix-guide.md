---
title: "The Mound Multiplayer Connection Fix — 'Connection Failed' & Lobby Errors, Plus Crossplay Join Workarounds"
description: "Can't join friends in The Mound: Omen of Cthulhu? This guide fixes 'Multiplayer Connection Failed' and 'Lobby Connection Error' on PC, PS5 and Xbox — disable VPN/WARP, firewall & file-verification steps, the Public lobby + server list workaround for crossplay invites, and how to use password rooms (Server Finder)."
category: "Guides"
version: "1.0"
updated: "2026-09-02"
keywords: ["the mound multiplayer connection failed", "the mound lobby error fix", "the mound can't join friends", "the mound crossplay invite not working", "the mound how to play with friends", "the mound server finder password room", "the mound connection lost matchmaking"]
related: ["coop-strategy-guide", "faq-content", "performance-fps-fix-guide", "extraction-guide"]
---

# The Mound Multiplayer Connection Fix — "Connection Failed" & Lobby Errors, Plus Crossplay Join Workarounds

**Multiplayer is the point of The Mound: Omen of Cthulhu.** It is a 1–4 player co-op extraction horror from ACE Team (published by NACON), and if you cannot get into the same lobby as your squad, the whole game falls apart. Since launch, players on all three platforms have reported two recurring problems: **"Multiplayer Connection Failed" / lobby errors** when joining, and **crossplay invites that never arrive** when you try to invite a friend on another platform.

This guide walks through the fixes in the order that solves them most often — from the one-step fix that works for most PC players, to the official workaround for crossplay invites, to the password-room features added in the major patches.

> **Current state (as of 2026-09-02):** The developers have confirmed the crossplay invite bug in official patch notes and are "working on a fix" (Official, Patch 1.03). In the meantime, the officially recommended way to group across platforms is to **host a Public lobby and join through the online server list**, or use **password rooms** added in the late-July major patch. Some players report matchmaking regressions after the August 18 update (Community) — if the server list suddenly stops loading for you, jump to [Fix Step 3](#fix-step-3-public-lobby--server-list-refresh-the-crossplay-workaround) and the [FAQ](#quick-faq).

---

## Common Error Quick Reference

| Error message | Most likely cause | Fix |
|---------------|------------------|-----|
| "Multiplayer Connection Failed" | VPN / proxy interference, or a failed handshake | [Step 1](#fix-step-1-disable-vpnwarp-or-proxy-software) — fully quit VPN/WARP |
| "Lobby Connection Error" | Host firewall / NAT, or a full lobby | [Step 2](#fix-step-2-firewall--verify-game-files--reset-network-stack) — allow through firewall, refresh |
| "Failed to join lobby" | Version mismatch (different patch), or privacy set to Friends Only | Make sure all players are on the same version; set lobby to Public |
| "Unable to join session" | Lobby full, or privacy blocks code/Public joins | Ask host to raise slot count / set Public |
| "Fatal Error" on entering a lobby | Mixed-GPU laptop / hybrid graphics | Force the dedicated GPU (advanced fixes) |

Source: [2UpSkill — How to Fix Multiplayer Connection Failed / Lobby Error](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-multiplayer-connection-failed-lobby-error/) (Editorial) and [lagofast — Play With Friends & Fix Invite Issues](https://www.lagofast.com/en/blog/the-mound-omen-of-cthulhu-play-with-friends-matchmaking/) (Editorial). Error *messages* are real reports; the exact text may vary by platform.

---

## Fix Step 1: Disable VPN / WARP / Proxy Software

The single most-reported cause of "Multiplayer Connection Failed" on PC is a **VPN, Cloudflare WARP, Hamachi, or LAN emulator** interfering with the game's peer-to-peer matchmaking.

1. Fully **quit** the VPN/WARP app — closing the window often leaves background processes running. Check the system tray and quit from there.
2. Open **Task Manager** and end any leftover process (e.g. `warp-svc`, `Hamachi`, proxy clients).
3. **Restart Steam** (or the launcher) before launching the game again.

If you use a gaming accelerator or LAN tool to reach the game, you can leave it on *only* for the version of the game it supports — but for a normal join attempt, disable everything first. This fix has the highest success rate in community reports (Community consensus, via [2UpSkill](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-multiplayer-connection-failed-lobby-error/) and [18183 — 联机失败解决方法](https://m.18183.com/gonglue/202607/55n024ep.html)).

---

## Fix Step 2: Firewall + Verify Game Files + Reset Network Stack

If disabling VPN software does not help, the next causes are firewall rules and corrupted game files.

**Windows Firewall:**
1. Windows Security → **Firewall & network protection** → **Allow an app through firewall**.
2. Allow **both Private and Public** for the game executable **and** Steam (`steam.exe`).

**Verify game files:**
- Steam: right-click **The Mound: Omen of Cthulhu** → **Properties** → **Installed Files** → **Verify integrity of game files**.
- Console players: try **restarting the console** (full power-off) — a stale network session is a common console-side cause.

**Reset the network stack (PC, admin PowerShell):**
```
ipconfig /flushdns
netsh winsock reset
```
Reboot after running `netsh winsock reset` — some matchmaking failures are caused by a corrupted Winsock catalog rather than the game itself.

Source: [2UpSkill](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-multiplayer-connection-failed-lobby-error/) (Editorial).

---

## Fix Step 3: Public Lobby + Server List Refresh (the Crossplay Workaround)

The developers **confirmed** in Patch 1.03 that "you cannot invite your friends to play via Crossplay" and that they are "working on a fix" (Official). Until it is fully fixed, the officially recommended workaround is the **online server list**:

1. The **host** creates a lobby and sets its privacy to **Public** (not Friends Only). A 6-character lobby code is generated — share it with your group.
2. Other players open **Expedition → Join Game** and use the **server list** (or enter the code).
3. **Refresh the list repeatedly.** Reports describe needing **10+ refreshes** — and crossplay groups have spent **up to 35 minutes** waiting for a PC/Xbox room to appear on a PS5 (Community reports via [tposegaming](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/) and [gamerblurb](https://gamerblurb.com/articles/the-mound-omen-of-cthulhu-how-to-crossplay-join-friends)).
4. There is **no search-by-name** for lobbies (Community), so a slow list is normal — keep refreshing rather than restarting.
5. If a room still never appears, **switch hosts** — a different player hosting often fixes invisible lobbies.

> **Why this matters:** the in-game invite menu only shows **same-platform** friends in many cases (a PS5 player sees only PS5 friends), so crossplay groups cannot use invites at all right now. The server list is the reliable path.

Sources: [Steam announcement — Patch 1.03](https://steamcommunity.com/app/2569760/allnews/) (Official), [tposegaming](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/) and [gamerblurb](https://gamerblurb.com/articles/the-mound-omen-of-cthulhu-how-to-crossplay-join-friends) (Editorial), outage reports at [outagescope](https://outagescope.com/status/the-mound-omen-of-cthulhu) (Community).

---

## Fix Step 4: Use Password Rooms / Server Finder

A major patch in late July added **password rooms**: a host can set a password on their lobby, and friends join by entering that password in the server list. This is more reliable than relying on invites for crossplay groups.

- Host: create a lobby → enable a **server password** under the session settings → share it with your group.
- Friends: **Join Game → Server list → enter password**.

⚠️ **Beta branch caveat:** the password-based Server Finder was first tested on a **Steam beta branch** (mid-July). Switching to the beta branch makes the game **Steam-only and disables crossplay**, so do **not** use the beta branch for a mixed-platform squad — use the password rooms in the current stable build instead.

Sources: [gamersocialclub — Receives First Major Patch](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/) and [ingamenews — Receives First Steam Hotfix](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-receives-first-steam-hotfix/) (Editorial); beta-branch caveat via [tposegaming](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/) and the [Steam announcements](https://steamcommunity.com/app/2569760/allnews/) (Official).

---

## Same-Platform Joins (Steam ↔ Steam)

If you are all on PC, the same-platform path is usually the fastest and does not depend on the in-game invite menu:

1. Open the **Steam Overlay** (Shift+Tab) while in-game.
2. Open a chat with your friend and use **Join Lobby** (or right-click the friend → **Join Game**).
3. Make sure **Steam Overlay** is enabled in Steam settings; if the overlay is off, the in-game join prompts may silently fail.

Source: [lagofast](https://www.lagofast.com/en/blog/the-mound-omen-of-cthulhu-play-with-friends-matchmaking/) and [gamerblurb](https://gamerblurb.com/articles/the-mound-omen-of-cthulhu-how-to-crossplay-join-friends) (Editorial).

---

## Advanced Troubleshooting

- **Host has a strict NAT / slow uplink.** The Mound's lobbies are peer-to-peer — the host's connection quality limits everyone. If joining a specific host always fails, have a different player host.
- **Hybrid-graphics laptops ("Fatal Error" on join).** Force the game to run on the **dedicated GPU**: Windows Settings → System → Display → Graphics → add the game → High performance. This matches the launch-crash fix pattern from the [Performance & FPS Fix Guide](/guides/performance-fps-fix-guide).
- **Update-related regressions.** Players reported matchmaking/list failures returning after the **August 18 update** (Community reports at [outagescope](https://outagescope.com/status/the-mound-omen-of-cthulhu)). If the server list stops loading after an update, it may be server-side — check the status page before blaming your connection.
- **LAN-platform alternative (CN region).** Some Chinese players use a LAN multiplayer platform (e.g. 游侠对战平台) to bypass the official online layer entirely ([duotegame](https://m.duotegame.com/mgl/223696.html), Editorial). This is an unofficial workaround and not supported by the developers.

---

## Quick FAQ

**Q: The server list loads forever / won't load after the latest update — is it me?**
A: Often not. Outage reports of "match list can't load" and "connection errors on PS5 and PC" continued into August, including after the 8-18 update ([outagescope](https://outagescope.com/status/the-mound-omen-of-cthulhu), Community). Check the status page, then try [Step 1](#fix-step-1-disable-vpnwarp-or-proxy-software) and a router reboot.

**Q: I can't see my friend's room even though we're both online.**
A: Make sure the host set the lobby to **Public**, then refresh the list 10+ times ([Step 3](#fix-step-3-public-lobby--server-list-refresh-the-crossplay-workaround)). There is no search-by-name, so this is expected behavior, not a broken client.

**Q: Is crossplay actually supported?**
A: Yes — full crossplay between PC, PS5 and Xbox is supported and confirmed (Official). The *invite* feature across platforms is the broken part; grouping works via Public rooms and the server list.

**Q: Do I need a password room for same-platform friends?**
A: No — same-platform groups can use Steam invites/overlay joins, or simply set the lobby to Friends Only. Password rooms mainly help crossplay groups that cannot rely on invites.

---

## Official Fix Timeline

| Date | Update | Multiplayer relevance |
|------|--------|----------------------|
| Launch (Jul 15, 2026) | 1.0 | Crossplay live; invite bugs reported immediately |
| Mid-July | Patch 1.02 | Block + progress recovery; not network-focused |
| Jul 17 | Beta branch | Password-type **Server Finder** tested (Steam-only; disables crossplay) |
| ~Jul 22 | Major patch | **Password rooms** added; crossplay lobby/lookup improvements |
| Late Jul | Patch 1.03 | Official: invite bug still "being worked on"; server-list workaround stated |
| Aug 18 | Update | Community reports of matchmaking/list regressions (unofficial) |

Sources: [Steam announcements](https://steamcommunity.com/app/2569760/allnews/) (Official), [gamersocialclub](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/), [ingamenews](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-receives-first-steam-hotfix/) (Editorial), [outagescope](https://outagescope.com/status/the-mound-omen-of-cthulhu) (Community).

---

## Sources

**Official**
- [Steam announcements — The Mound: Omen of Cthulhu (Patch 1.02 / 1.03 / beta branch)](https://steamcommunity.com/app/2569760/allnews/)

**Community**
- [outagescope — The Mound server status & user reports](https://outagescope.com/status/the-mound-omen-of-cthulhu)

**Editorial**
- [2UpSkill — How to Fix Multiplayer Connection Failed / Lobby Error](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-multiplayer-connection-failed-lobby-error/)
- [tposegaming — Is The Mound Crossplay? How Does It Work?](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/)
- [gamerblurb — How to Crossplay & Join Friends](https://gamerblurb.com/articles/the-mound-omen-of-cthulhu-how-to-crossplay-join-friends)
- [lagofast — Play With Friends & Fix Invite Issues](https://www.lagofast.com/en/blog/the-mound-omen-of-cthulhu-play-with-friends-matchmaking/)
- [gamersocialclub — The Mound Receives First Major Patch](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/)
- [ingamenews — The Mound Receives First Steam Hotfix](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-receives-first-steam-hotfix/)
- [18183 — 联机失败解决方法](https://m.18183.com/gonglue/202607/55n024ep.html)
- [duotegame — 游侠对战平台联机教程](https://m.duotegame.com/mgl/223696.html)

> **Honesty note:** Steam community post bodies and individual review quotes could not be captured directly at the time of writing (Steam age-gates the store page and blocks the review API to automated tools). All Community-labeled claims above are sourced from the outagescope user reports and the editorial articles linked, which cite community reports — no player quotes have been invented.

---

## Related Guides

- [Co-op Strategy Guide — Squad Roles & How to Play With Friends](/guides/coop-strategy-guide)
- [FAQ — Crossplay, Pricing & System Requirements](/guides/faq-content)
- [Performance & FPS Fix Guide — Fix Lag, Stutter & Startup Issues](/guides/performance-fps-fix-guide)
- [Extraction Guide — Surviving Expeditions](/guides/extraction-guide)

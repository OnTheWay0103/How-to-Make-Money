---
title: 'Dedicated Server Guide — Host & Run an Ardent Wilds Server'
description: 'How to host an Ardent Wilds dedicated server — the experimental ArdentWilds_Server.exe, peer-host vs dedicated comparison, setup steps, networking, and why a persistent server changes co-op.'
category: 'Guides'
version: '1.0'
updated: '2026-08-08'
keywords: ['ardent wilds dedicated server', 'ardent wilds server hosting', 'ardent wilds server setup', 'ardent wilds host game', 'ardent wilds multiplayer server', 'ardent wilds 24 7 server']
related:
  - 'coop-guide'
  - 'base-building-guide'
  - 'modding-guide'
  - 'farming-cooking-guide'
---

# Dedicated Server Guide — Host & Run an Ardent Wilds Server

If you are playing Ardent Wilds with friends, you will eventually hit the classic co-op question: **who hosts, and what happens when the host logs off?** This guide covers the dedicated-server side of that question — what is confirmed about running a server, how it compares to peer-hosted play, and how to set one up when you do.

**Honesty first:** dedicated server hosting in Ardent Wilds is **experimental** — it was added to the game's codebase in the April 2026 alpha playtest as `ArdentWilds_Server.exe`, and the developers have said server hosting "outside a host's game session" is still being worked on. As of August 2026 there is **no official server documentation, no port-forwarding guide, and no config reference**. Everything concrete in this guide is labeled; everything else is (待验证) and may change build to build.

## Why Run a Dedicated Server at All

Standard Ardent Wilds co-op is **peer-hosted**: one player's game session is the world, and everyone else connects to them. That works, but has known limits — see the [Co-op & Multiplayer Guide](coop-guide.md) for the full picture. A dedicated server exists to fix those limits:

| Concern | Peer-Hosted (Standard) | Dedicated Server (Experimental) |
|---------|------------------------|---------------------------------|
| **Who owns the world?** | The host's game session | An independent process — no player is the world |
| **Host logs off?** | Session ends for everyone | World keeps running |
| **Host's connection lags?** | Everyone feels it | Server machine handles the load independently |
| **24/7 persistent world?** | No | Yes — the machine can run it around the clock |
| **Player slots?** | Up to 6 confirmed (more possible, unbalanced) | Same player cap applies (待验证) |
| **Maturity** | Confirmed and stable | Experimental — expect rough edges |

If your group plays in scheduled sessions with the same person always hosting, peer-hosted is fine. If you want a **persistent shared world** — a long-term base, a farm your group tends between sessions — a dedicated server becomes attractive.

## What Is Confirmed

- **The executable exists.** `ArdentWilds_Server.exe` is shipped with the game (added in the April 2026 playtest build) and lets you host a server outside a player's game session
- **It is experimental.** The developers frame it as being "worked on" — expect rough edges, missing features, and changes between builds
- **Dedicated server hosting does not replace normal co-op.** Online co-op via Steam and LAN play remain the confirmed, supported ways to play (up to 6 players, see [Co-op & Multiplayer Guide](coop-guide.md))

## Setting Up a Server — What We Know and Don't

No official setup documentation exists, so the steps below are the standard shape for this kind of executable (待验证 on every specific):

1. **Install the game** on the machine that will run the server — `ArdentWilds_Server.exe` ships with the game files
2. **Locate the executable** in the game's install folder (typically the main game directory, 待验证)
3. **Run it** — expect a console/command-line window rather than the full game (待验证)
4. **Watch the output for the server address** — servers typically print their local/Steam address when ready (待验证)
5. **Connect** — from the game's join menu, using the address or via Steam friends (待验证 on exact UI)

What is **not** documented anywhere official:

- Command-line arguments and flags (port, world name, max players — all 待验证)
- Configuration files and their format
- World persistence and backup behavior — how the server stores its world and whether it survives restarts
- Admin controls, kick/ban commands, and permission systems
- Whether the server has a console interface or is headless-only

## Networking Notes

For friends to join from outside your local network, inbound connections need to reach the server machine:

- **LAN play**: no port forwarding needed if everyone is on the same network — this is the confirmed path for LAN co-op
- **Internet play**: friends join through Steam (the confirmed online path). Whether the dedicated server registers with Steam so friends can find it directly is (待验证) — if not, expect to need manual address entry and possibly **port forwarding** on the server's router (port numbers are undocumented, 待验证)
- **A static IP or dynamic DNS** on the server machine makes reconnecting far easier (待验证)

## Hardware Expectations for a Server

The server runs the same voxel world simulation as a client, so:

- **16 GB RAM minimum applies** — a dedicated server plus other players' needs is not lighter; the 16 GB floor from the [System Requirements & Performance Guide](system-requirements-guide.md) is the sensible starting point (待验证)
- **CPU matters more than GPU** — a server does not render frames, so a strong CPU and adequate RAM matter more than graphics hardware; a GPU may not even be needed (待验证)
- **Disk for world saves** — persistent worlds grow as terrain is modified; give the server machine spare storage

## Running a Server for Your Group

Practical patterns once the server is up:

- **One world, owned by the group** — a dedicated server ends "whoever hosts controls the world"; the group's base and farm survive individual players' sessions
- **Designate an admin** — with no documented permission system, one person managing the server process is the practical admin model (待验证)
- **Back up the world folder** — without official backup tooling, copying the server's save folder is your insurance (待验证)
- **Restart before sessions** — a fresh server process for scheduled sessions avoids overnight drift
- **Coordinate with the mod scene** — Ardent Wilds ships full Lua scripting (see [Modding Guide](modding-guide.md)); whether server mods must match client mods is (待验证), but assume consistency matters until proven otherwise

## When to Skip the Dedicated Server

Be honest about your group's needs:

- **Casual drop-in sessions** → peer-hosted co-op is simpler and confirmed-stable
- **A group that plays at different times in the same world** → dedicated server earns its keep
- **Two or three friends on a reliable LAN** → LAN co-op needs no server setup at all

The [Co-op & Multiplayer Guide](coop-guide.md) covers the team-role and shared-base side of multiplayer; this guide covers the hosting side.

## What Is Still Unknown (待验证)

- Server configuration format and command-line options
- Port numbers and whether port forwarding is required for Steam connections
- World save locations and backup behavior
- Admin/kick/ban tools and console commands
- Player cap behavior on dedicated servers
- Server mod support and client-server mod consistency
- Whether the executable exists in the current demo build or only in playtest builds

Dedicated servers are a confirmed *direction* for Ardent Wilds, not yet a polished feature. Check the official [Steam page](https://store.steampowered.com/app/2275010/Ardent_Wilds/) and the game's news feed for updates as the server tooling matures.

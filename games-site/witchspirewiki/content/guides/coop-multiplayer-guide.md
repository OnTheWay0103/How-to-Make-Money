---
title: "Witchspire Co-op Multiplayer Guide — Invite Friends and Progress Together"
description: "Complete multiplayer guide for Witchspire. How to invite friends (Steam friends list — there is no session code system), co-op progression sharing, hosting, player limits, and solo vs co-op comparison for the current Early Access build."
category: "Guides"
version: "0.1.4"
updated: "2026-08-10"
keywords: ["Witchspire multiplayer", "Witchspire co-op", "Witchspire invite friends", "Witchspire session hosting", "Witchspire progression sharing", "Witchspire 4 player"]
related: ["beginner-guide", "main-quest-walkthrough", "best-coven-guide", "hearth-upgrade-guide", "coop-troubleshooting-guide"]
---

# Co-op Multiplayer Guide — Playing With Friends

> Last verified: August 10, 2026

Witchspire is built for co-op. While you can absolutely play solo, the game shines when you and your friends explore Vyrs, build a shared Hearth, and take down bosses together. This guide covers everything you need to know about multiplayer — from inviting friends to progression sharing and session limits.

---

## How Multiplayer Works

Witchspire uses a **host-based session model**. One player hosts the world, and others join. The host's save file determines the world state — quest progress, Hearth tier, unlocked regions, and boss kills.

| Feature | Details |
|---------|---------|
| Model | Host-based (peer-to-peer) — the host's machine is the server |
| Max Players | 4 (reported) |
| Cross-region | Possible, but hosted in the host's region — cross-continent play desyncs |
| Invite Flow | **Steam friends list only** — no in-game lobby, no session codes (see below) |
| Version Rule | All players must be on the **same game version/branch** |
| Save System | Host saves; guests keep inventories, familiars and Luminary points on disconnect |
| Anti-Cheat | None (non-competitive PvE) |

---

## How to Invite Friends

> **Important correction:** Witchspire does **not** have an in-game "Social menu," session codes, or a lobby browser. Joining is done through **Steam** — this is how it actually works:

### Step 1: Become Steam Friends
Both players must be **Steam friends** with each other (Steam overlay → Add Friend, or right-click the player in Recent Players).

### Step 2: Host Opens Their World
The host launches Witchspire and loads their world. The world is **hosted on the host's machine** — no separate "host session" step exists.

### Step 3: Host Invites From the Steam Friends List
The host opens the **Steam friends list** (Shift+Tab overlay or Steam desktop), right-clicks the friend, and selects **"Invite to Game."**

### Step 4: Friend Accepts
The friend accepts the invite (they should have Witchspire running or it will launch), and loads into the host's world.

**If the invite fails or never arrives:** check game versions match (mismatched versions are the #1 cause), check the host's NAT/connection, and restart both games. See the [Co-op Troubleshooting Guide](/guides/coop-troubleshooting-guide) for the full fix list.

**Pro tip**: Use Discord or Steam Voice for clearer communication. Guests spawn at the host's **Hearth flag** location — move it to a safe spot before inviting if it sits in a dangerous area.

---

## Progression Sharing — What Carries Over

### What Guests Keep When Leaving

| Item | Carries Over? | Notes |
|-----|--------------|-------|
| Inventory (non-quest items) | Yes | Resources, gear, consumables |
| Luminary Points & Nodes | Yes | Permanent account-wide progression |
| Captured Familiars | Yes | All tamed familiars stay in your collection |
| Crafting Recipes Learned | Yes | Unlocked through station use |
| Gold / Coins | Yes | Personal currency |
| Quest Items (key items) | No | Stay in the host's world |
| Region unlock items | No | Must be re-obtained in your own world (community reports differ on the unlock method) |
| Hearth Upgrades | No | Per-world (host's save only) |
| Building Structures | No | Per-world only |

### What Guests Keep When Re-joining the Same Host
- Everything — the host's world state persists
- If the host has progressed further, guests see that progress on rejoin
- Guest inventories are saved per-host-world

### How Progression Works for Guests
- Guests **complete quests for the host** — the host's story advances
- Guests **keep all loot, XP, and Luminary points** earned during the session
- Guests can use the host's crafting stations and Hearth features
- **Boss kills count for both** — guests get full rewards and achievement credit

---

## Session Limits and Performance

### Player Count

| Player Count | Recommended For | Notes |
|-------------|----------------|-------|
| 1 (Solo) | Story, learning, building | Full control, no desync |
| 2 | Duo runs, couples | Balanced scaling, easy coordination |
| 3 | Small group | Boss HP reportedly scales up per extra player (exact scaling unverified) |
| 4 | Full squad (reported max) | Best social experience |
| 5-6 | Not supported | Community reports of modded sessions exist, but this is untested and may cause desync |

### Performance Tips

- **Host should have a stable upload speed** (5 Mbps minimum for 4 players)
- Reduce render distance in options if hosting for 4 players
- Avoid hosting from a laptop on Wi-Fi — wired Ethernet is far more stable
- If lag occurs, reduce particle effects in video settings
- **Desync fix**: If a player's position freezes, have them re-join the session

---

## Solo vs Co-op Comparison

| Aspect | Solo | Co-op (2-4 Players) |
|--------|------|---------------------|
| Difficulty | Enemies scale to 1 player | Bosses get bonus HP per player |
| Resource Gathering | You gather everything | Split labor (1 gathers wood, 1 mines, etc.) |
| Boss Fights | Requires precise dodging | Tank + DPS + Healer roles |
| Progression Speed | Slower (you do everything) | Faster (parallel tasks) |
| Hearth Building | Your resources only | Shared resource pool |
| Exploration | Full map control | Must coordinate movement |
| Familiar Usage | Up to 3 active slots per player (C to cycle) | Each player has their own familiars |
| Fun Factor | Peaceful, immersive | Chaotic, social, memorable |
| Best For | Story-focused players, builders | Groups, boss farming, speed runners |

### When to Play Solo

- You want to experience the story at your own pace
- You are testing builds or learning boss patterns
- You prefer base building without resource contention
- Your friends are offline (Witchspire has no public matchmaking in EA)

### When to Play Co-op

- You are stuck on a boss and need backup
- You want to farm materials faster (parallel gathering)
- You enjoy role-based combat (Tank/Healer/DPS)
- You want to share the exploration experience

---

## Co-op Tips and Strategies

### Team Composition Recommendations

| Party Size | Recommended Coven Setup |
|-----------|------------------------|
| 2 | 1 Tank (Cloudpiercer/Wildroot) + 1 DPS (Nightscribe/Foreteller) |
| 3 | 1 Tank + 1 DPS + 1 Support (Wildroot/Tomekeeper) |
| 4 | 1 Tank + 2 DPS + 1 Support |

### Communication

- Use **ping system** (default: middle mouse button) to mark resources, enemies, and points of interest
- Assign resource roles: "Player A gathers wood, Player B mines ore, Player C scouts"
- Designate a **loot master** to distribute boss drops fairly
- Use text chat (default: `Enter`) for quick coordination

### Hearth Sharing

- All players can deposit/withdraw from the host's Hearth storage
- **Designate a builder** — only one person should manage Hearth upgrades to avoid wasting materials
- Guests can place their own Hearth flags as personal respawn points

---

## Known Multiplayer Issues (Current Build)

| Issue | Workaround |
|-------|------------|
| Guest disconnects during loading screen | Host re-invites, guest re-joins |
| Can't join at all | Version mismatch (most common), strict NAT, weak host — see the troubleshooting guide |
| Chests look empty to teammates | Server-side chests — one player's open empties it for everyone; coordinate |
| Character "missing" in friend's world | Characters are bound to the world they were created in — you join as a guest |
| Desync on broom flight | Guest remounts broom; community reports describe desync fixes on the developer's QoL list |
| Hearth flag not visible to guests | Guest re-joins session |
| Quest markers misaligned | Guest reloads area (leave and return) |

For anything beyond these quick workarounds — host requirements, version rules, chest/character rules, and desync status — see the **[Co-op Troubleshooting Guide](/guides/coop-troubleshooting-guide)**.

---

## Related Guides

- [Beginner Guide: First 5 Hours](/guides/beginner-guide)
- [Best Coven Guide: Which Class Should You Pick?](/guides/best-coven-guide)
- [Main Quest Walkthrough: Acts I-III](/guides/main-quest-walkthrough)
- [Hearth Upgrade Guide: All Tiers and Materials](/guides/hearth-upgrade-guide)
- [Co-op Troubleshooting Guide](/guides/coop-troubleshooting-guide)

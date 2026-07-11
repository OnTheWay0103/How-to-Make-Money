---
title: "Witchspire Co-op Multiplayer Guide — Invite Friends and Progress Together"
description: "Complete multiplayer guide for Witchspire. How to invite friends, co-op progression sharing, session hosting, player limits, and solo vs co-op comparison for EA v0.1.1d."
category: "Guides"
version: "0.1.1d"
updated: "2026-07-11"
keywords: ["Witchspire multiplayer", "Witchspire co-op", "Witchspire invite friends", "Witchspire session hosting", "Witchspire progression sharing", "Witchspire 4 player"]
related: ["beginner-guide", "main-quest-walkthrough", "best-coven-guide", "hearth-upgrade-guide"]
---

# Co-op Multiplayer Guide — Playing With Friends

> **Applies to EA v0.1.1d / Updated: July 11, 2026**

Witchspire is built for co-op. While you can absolutely play solo, the game shines when you and your friends explore Vyrs, build a shared Hearth, and take down bosses together. This guide covers everything you need to know about multiplayer — from inviting friends to progression sharing and session limits.

---

## How Multiplayer Works

Witchspire uses a **host-based session model**. One player hosts the world, and others join. The host's save file determines the world state — quest progress, Hearth tier, unlocked regions, and boss kills.

| Feature | Details |
|---------|---------|
| Model | Host-based (peer-to-peer) |
| Max Players | 4 (confirmed), up to 6 via mods |
| Cross-region | Same-region only (no region locking) |
| Voice Chat | In-game push-to-talk (default: V) |
| Save System | Host saves; guests keep inventories and Luminary points on disconnect |
| Anti-Cheat | None (non-competitive PvE) |

---

## How to Invite Friends

### Step 1: Host a Session
1. Launch Witchspire and load your save
2. Open the **Social Menu** (default: `O`)
3. Click **"Host Session"** — this turns your world into a joinable lobby
4. Optionally set a **session password** in the lobby settings
5. Your **Session Code** (6-character alphanumeric) appears at the top of the Social Menu

### Step 2: Join a Session
1. Open the **Social Menu** (`O`) from the main menu or in-game
2. Click **"Join Session"**
3. Enter the host's **Session Code**
4. Wait for the host to accept your join request

### Step 3: Accepting Players
- The host sees incoming join requests in the Social Menu
- Accept or decline each request
- Players spawn at the host's **Hearth flag** location
- If the Hearth flag is in a dangerous area, the host should move it to a safe spot before inviting guests

**Pro tip**: Use Discord or Steam Voice for clearer communication. The in-game voice works but has no noise suppression.

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
| Region Unlock Tokens | No | Must be re-obtained in your own world |
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
| 3 | Small group | Boss HP scales ~50% per extra player |
| 4 | Full squad (recommended max) | Best social experience |
| 5-6 | Modded only | May cause desync, untested in EA |

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
| Familiar Usage | 1-2 familiars at a time | Each player has their own familiars |
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

## Known Multiplayer Issues (EA v0.1.1d)

| Issue | Workaround |
|-------|------------|
| Guest disconnects during loading screen | Host re-invites, guest re-joins |
| Desync on broom flight | Guest remounts broom |
| Hearth flag not visible to guests | Guest re-joins session |
| Quest markers misaligned | Guest reloads area (leave and return) |

---

## Related Guides

- [Beginner Guide: First 5 Hours](/guides/beginner-guide)
- [Best Coven Guide: Which Class Should You Pick?](/guides/best-coven-guide)
- [Main Quest Walkthrough: Acts I-III](/guides/main-quest-walkthrough)
- [Hearth Upgrade Guide: All Tiers and Materials](/guides/hearth-upgrade-guide)

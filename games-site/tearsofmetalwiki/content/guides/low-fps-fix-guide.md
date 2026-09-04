---
title: "Tears of Metal Low FPS & Stutter Fix — PC Performance Settings for Large Battles"
description: "Why Tears of Metal drops to slideshow framerates when a horde merges into one fight, and how to fix it — the settings that matter most (shadows, ambient occlusion, post-processing), capping your frame rate, Windows tweaks, memory-leak mitigation, and what hardware actually delivers 60 FPS."
category: "Guides"
version: "Early Access"
updated: "2026-09-05"
keywords: ["Tears of Metal low fps fix", "Tears of Metal stutter fix", "Tears of Metal performance", "Tears of Metal best settings", "Tears of Metal fps drop large battles", "Tears of Metal lag fix PC", "Tears of Metal pc optimization"]
related: ["crash-launch-fix-guide", "multiplayer-connection-fix-guide", "steam-deck-guide", "save-system-guide", "patch-notes"]
sources:
  - tier: "Official"
    text: "Paper Cult has shipped performance-focused patches that acknowledge the problem: both the July 31 hotfix (v.0.10.57598) and the August 1 patch (v.0.11.57863) carried Act 1–2 performance and stability optimizations, the July 24 hotfix (v.0.8.57278) made the maximum-framerate setting actually apply and cut the default cap from 120 to 60, and the August 9 hotfix (v.0.11.57874.1) disabled the Epic Online Services overlay to fix sudden mouse stutter — Steam Community announcements (steamcommunity.com/app/1913120/allnews)"
  - tier: "Community"
    text: "Frame-rate drops and hitches during large enemy swarms are documented across independent troubleshooting guides — 2UpSkill ('Low FPS Fix: How to Stop Lag and Stutters During Enemy Swarms'), XModHub (two 'Best FPS Settings' articles and a 'High GPU Temp Fix'), and The CPU Guide — plus player/reviewer performance reports (GamerScout on large-battle GPU load, a Backloggd player on late-game slowdown), checked September 2026"
  - tier: "Editorial"
    text: "The fix ladder (settings priority order, cap-first advice) and the 'one change at a time' testing rule are this guide's editorial assembly of the community-documented fixes; exact in-game option labels are marked [Unconfirmed] because Paper Cult has not published a settings reference"
---

# Tears of Metal Low FPS & Stutter Fix — PC Performance Settings for Large Battles

> **Early Access / Updated: September 5, 2026**

Tears of Metal runs fine in the village — then three enemy groups merge into one brawl and your frame rate collapses. This is the most common *gameplay* performance complaint on PC — not launch failures or co-op lag (see the [Crash on Startup / Black Screen Fix](/guides/crash-launch-fix-guide) and [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide)).

**The short answer:** cap your frame rate first, then lower the settings that multiply cost with enemy count — Shadows, Ambient Occlusion, Post-Processing, and Blood/Ragdoll effects.

> **Honesty note:** Paper Cult has not published an official settings reference; exact option labels below come from community guides and are **[Unconfirmed]** where they may differ.

---

## 1. Why Tears of Metal Stutters in Large Battles

Tears of Metal is a horde-slasher: one "large fight" can merge several enemy groups, a companion, and a boss bodyguard into a single scene. Independent guides converge on the same diagnosis ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/), [XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/)):

- **Mostly a CPU bottleneck, not a GPU one.** Hundreds of units each need pathing, animation, and AI ticks; when "multiple enemy groups merge into a single fight" ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)), the CPU must update them all at once.
- **Blood and ragdoll effects accumulate over a run** — persistent decals and physics bodies stack up, so late-run frame spikes are usually this, not your graphics card.
- **Uncapped frame rates make it feel worse.** The game can swing from 140 FPS to 25 FPS the moment a horde spawns; a stable 60 FPS feels better than fluctuating highs ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).

---

## 2. The Fix Ladder — Try These in Order

Work top to bottom, changing **one thing at a time**, and test in a big fight (Act 2's multi-banner battles are a good stress test).

### Step 1: Cap your frame rate (in-game *and* at the driver)

Stopping the 140-to-25 rollercoaster is the biggest stability win:

- **Entry-level PC:** 60 FPS. **Mid-range:** 60–90 FPS. **High-end:** 90–120 FPS or your monitor's refresh rate ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).

The in-game limiter historically failed to apply after a restart — the **July 24 hotfix (v.0.8.57278)** fixed that and cut the default cap from 120 to 60. Community guides therefore recommend a **driver-level hard cap**: NVIDIA Control Panel → *Manage 3D Settings → Max Frame Rate*, or AMD Software → *Radeon Chill*, matched to your monitor. This also stops GPU overheating in menus ([XModHub — High GPU Temp Fix](https://www.xmodhub.com/info/blog/tears-of-metal-gpu-overheating-fix/)).

### Step 2: Lower the settings that scale with enemy count

Targets are community-tested ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/), [XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/), [XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)):

| Setting | Recommended | Why it matters |
|---------|-------------|----------------|
| **Shadow Quality** | Medium | Biggest win — ~14% FPS recovery Epic/High → Medium (XModHub); shadow cost multiplies with unit count |
| **Ambient Occlusion** | Low / Off | Called a "hidden performance killer" in horde scenes |
| **Post-Processing** | Low | ~+8% High → Low (XModHub) |
| **Volumetric Fog / Clouds** | Low | Known FPS killer in Early Access games (label [Unconfirmed]) |
| **Motion Blur + Depth of Field** | Off | +3% FPS (XModHub), plus a clearer view in melee |
| **Blood Effects** | Reduced | Persistent blood causes late-run frame spikes ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)) |
| **Ragdoll Physics** | Medium or lower | Lower if major fights consistently produce frame spikes |
| **Textures** | High | Keep High unless under 6 GB VRAM, then Medium — texture cost barely scales with horde size |
| **Anti-Aliasing** | High (not Epic) | ~+5% over Epic, little visual difference (XModHub) |
| **Effects Quality** | Medium | High effects spike when bombs and skills overlap |

Option labels are **[Unconfirmed]**; the priority order holds regardless.

### Step 3: Windows and GPU-driver tweaks

- **Disable Fullscreen Optimizations** — right-click the game's .exe → Properties → Compatibility → tick it; players report fewer microstutters and better frame pacing ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).
- **NVIDIA:** Power Management = *Prefer Maximum Performance*, Low Latency = On/Ultra, Shader Cache = On. **AMD:** Anti-Lag on, Performance power profile, Instant Replay / Background Recording off ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).
- **Mouse polling rate:** drop to 1000 Hz if set to 2000/4000/8000 Hz — high polling rates add overhead that can cause hitches ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).
- **Update GPU drivers** — Nvidia 551.xx / AMD Adrenalin 24.x or newer ([XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/)). Still crashing? A clean DDU install in Safe Mode is the community fallback ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/); [Unconfirmed] as a universal fix).

### Step 4: Long-run stutter and memory-leak mitigation

If the game is fine for ~30 minutes then degrades, treat it as a memory issue:

- **Restart between campaigns** to clear RAM accumulation ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)).
- **Expand the pagefile** to 16 GB (16384 MB) on the game's SSD (System Properties → Advanced → Performance → Advanced → Virtual Memory) if long runs hit memory pressure ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)).
- Watch RAM in Task Manager; restart if the game nears ~90% of system RAM.

### Step 5: After every patch

Verify game files (Steam → right-click Tears of Metal → Properties → Installed Files → *Verify integrity of game files*) after each update — interrupted downloads leave stale files that masquerade as performance problems ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)). Turn off overlay software (Discord, capture tools) if stutters began after you installed one.

### A 60-Second Benchmark Before You Change Anything

1. **Pick one stress fight** — an Act 2 battle where three banners merge, or a boss bodyguard plus a horde — and use the same one every time.
2. **Turn on a frame counter** (Steam → Settings → In Game → In-game FPS counter) and note your average and worst dip.
3. **Apply exactly one change** from the ladder, replay the same fight, note the numbers again.
4. **Keep only changes that move the needle**, testing early in a fresh run — blood and ragdoll accumulation makes late-run tests less repeatable ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)). What doesn't help your fight may still matter in The Scar (Act 3).

---

## 3. Official Context: What Paper Cult Has Already Fixed

| Update | Performance content |
|--------|---------------------|
| **July 24 hotfix (v.0.8.57278)** | Fixed the maximum-framerate setting not applying after restart and **cut the default cap from 120 to 60** |
| **July 31 hotfix (v.0.10.57598)** | Texture and performance optimizations; notes cite "changes for Act 1 and Act 2 that should help with general performance and stability" |
| **Aug 1 patch (v.0.11.57863)** | Further Act 1–2 optimization in the largest post-launch update (Act 3 still listed as ongoing) |
| **Aug 9 hotfix (v.0.11.57874.1)** | Tentative fix for sudden **mouse stutter** by preventing the Epic Online Services overlay from initializing |
| **v.0.14.58630 (Aug 14)** | Multiplayer bug fixes (HP/threat desync, map inconsistencies between clients) |

Source: [Steam Community announcements](https://steamcommunity.com/app/1913120/allnews/). Act 3 optimization was still ongoing then, so slowdown in The Scar is the most likely to persist on lower-end hardware.

---

## 4. Hardware Expectations (Honest)

Community testing puts the practical floor around the Steam minimum spec (roughly a GTX 1060-class card with 8 GB RAM) at only ~30 FPS at 1080p in heavy waves ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)). For a stable 60 FPS in big fights you generally want a mid-range card (RTX 2060 / RX 5700 XT class or better) with a modern quad-core CPU — Tears of Metal leans on the CPU in horde scenes, so an old processor bottlenecks even at Low settings ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)).

> **Don't expect frame generation to save you:** frame generation does not remove a CPU bottleneck ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)).

---

## 5. Quick FAQ

**Q: Is the in-game frame limiter reliable?**
Not always — the cap failed to stick after restarts until v.0.8.57278 (July 24). Community guides still prefer a driver-level cap.

**Q: I only stutter in co-op, not solo.**
That is usually networking/desync rather than local FPS — see the [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide). Some guides also advise all co-op players cap to 60 FPS to keep simulation in sync with the host ([XModHub — Fix Crashing & Best FPS Settings](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/)).

**Q: Should I lower resolution?**
Only after the settings above — resolution helps GPU-bound machines but almost nothing on CPU-bound horde fights.

**Q: Does this apply to Steam Deck?**
No — Steam Deck has its own tuning, covered in the [Steam Deck Guide](/guides/steam-deck-guide).

**Q: How do I tell whether my CPU or my GPU is the bottleneck?**
Watch GPU usage in a big fight. Below ~90% utilization with low FPS means the CPU is the limit — prioritize the frame cap, shadows, and blood/ragdoll reduction ([2UpSkill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/)). A pegged 100% GPU means lower resolution, textures, or anti-aliasing first. This is a diagnostic rule of thumb, not an official statement ([Unconfirmed]).

**Q: A recent patch made my frame rate worse. What should I do?**
Re-verify game files, confirm the frame cap reapplied, and clear the DirectX shader cache if you see new hitching ([Crash on Startup](/guides/crash-launch-fix-guide) has those steps). The first post-launch work targeted Acts 1–2; Act 3 (The Scar) is still the in-progress optimization.

---

## Related Guides

- [Crash on Startup / Black Screen Fix](/guides/crash-launch-fix-guide) — if the game won't launch at all
- [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) — network desync and co-op lag
- [Save System Guide](/guides/save-system-guide) — crashing mid-run and save recovery
- [Steam Deck Guide](/guides/steam-deck-guide) — Deck-specific performance
- [Updates & Roadmap](/guides/patch-notes) — tracking performance patches

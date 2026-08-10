---
title: "Tears of Metal on Steam Deck — Rating, Performance & Best Settings"
description: "Everything about playing Tears of Metal on Steam Deck: the Playable rating explained, the texture-reduction patch that improved Deck performance, performance expectations in big battles, co-op tips for Deck players, and honest caveats about the all-or-nothing run saves."
category: "Guides"
version: "Early Access"
updated: "2026-08-11"
keywords: ["tears of metal steam deck", "tears of metal steam deck settings", "is tears of metal on steam deck", "tears of metal deck performance", "tears of metal playable rating", "tears of metal controller", "tears of metal handheld"]
related: ["multiplayer-connection-fix-guide", "save-system-guide", "patch-notes", "beginner-guide"]
---

# Tears of Metal on Steam Deck — Rating, Performance & Best Settings

> **Early Access / Updated: August 11, 2026**

Tears of Metal is a great handheld game in theory — a hack-and-slash roguelike with large-scale battles, 30-40 minute acts, and suspend-friendly structure. In practice, it's rated **Playable** (not Verified) on Steam Deck, and a recent update shipped texture-size reductions that the developer framed as helping lower-end hardware — Deck players included. This guide covers the current Deck reality: what the rating means, how the game actually runs, how to set it up, and the Deck-specific traps (run saves and co-op) that can cost you a campaign.

---

## The Steam Deck Rating: Playable (Not Verified)

Valve's rating for Tears of Metal is **Playable**. Here's what that means under Valve's public classification system:

| Rating | Meaning |
|--------|---------|
| **Verified** | Runs great with no extra effort; all Deck features (gamepad, suspend/resume, UI legibility) work out of the box |
| **Playable** | Functions on Steam Deck, but may need extra effort to interact with or configure — commonly small UI text, a launcher prompt, or some community-suggested settings |
| **Unsupported** | Does not run or runs poorly on Deck |

**What Playable means for Tears of Metal in practice:**
- The game runs on Deck and is playable with the Deck's built-in controls
- Expect to do a little configuration work yourself (below)
- Expect some performance dips in the biggest battles — more on that in a moment
- It is not the "zero effort" experience a Verified title would be

> **Honesty note:** Paper Cult has not published official Steam Deck performance targets or controller-support documentation. Everything below is based on the Deck rating, the recent update's texture changes, and general performance characteristics of the game — not vendor benchmarks. We will update this guide if official guidance appears.

---

## The Update That Helped Deck Players

A recent post-launch update included **texture-size reductions** — the developer's framing was that this helps lower-end hardware (Steam Deck included) handle the game's dense environments. What that means for you:

- **Before the update:** larger textures strained Deck GPU memory, especially in the big multi-unit battles
- **After the update:** lower memory pressure and smoother behavior in busy scenes
- **Net effect:** the current build is the one to play on Deck. If you started on an older build, update before judging performance

See the [Patch Notes & Roadmap](/guides/patch-notes) for the full patch list.

---

## Performance Expectations (Honest)

Tears of Metal renders **large-scale crowds** — dozens of soldiers on screen at once, plus effects. That workload is CPU- and GPU-heavy, which is the hardest combination for a handheld.

**What to expect:**

| Scene | Expectation |
|-------|-------------|
| Village / hub screens | Smooth, no issues |
| Small encounters (Act 1 start) | Smooth |
| Mid-size battles (Act 2, mid-campaign) | Playable with occasional dips |
| Full-scale musou fights, elite packs, boss arenas | Frame dips are likely; playable, not pristine |
| The Scar (Act 3, corruption zones) | The heaviest scenes — expect the most drops |

**General Deck tuning that helps (standard handheld guidance, not official settings):**
- **Cap framerate at 40 FPS** in the Deck's performance menu — the most reliable smoothness/stamina balance for action games like this
- **Cap TDP** if battery matters — the game doesn't need max power at the hub, and your Deck runs cooler longer
- **Keep the texture changes** — the patch already did the heavy lifting; don't crank external scaling settings
- **Lower internal resolution only if you must** — the game's hand-drawn art style is sharp at native res, so prefer framerate caps over resolution cuts

These are starting points, not guarantees — every Deck and every scene differs. The good news: the game's comic-book aesthetic hides minor frame hitches far better than photorealistic titles.

---

## Controls on Deck

The game is a gamepad-native action game — its combat (block, parry, dodge, attacks, battalion commands) maps naturally to the Deck's layout. The **Playable** rating indicates the built-in Deck controls work, which for an action game means the core loop is intact.

**Deck-specific control tips:**
- **Battalion commands are your friend on Deck** — full battle-energy supers and segment commands (pikemen, grunts, shield bearers, trebuchet spotters) are a core part of the kit; bind them somewhere you can reach mid-combo (see the [Solo Guide](/guides/solo-guide) for why commands matter)
- **Use the back paddles** if you want dodge/parry off the face buttons — standard Deck practice for action games
- **Check the community layouts** on the Steam Deck layout screen — other players have already posted tuned bindings for this game

> **Unverified:** we could not confirm official controller-support documentation (partial vs. full controller support labels) on the Steam page at the time of writing. If Valve or Paper Cult publish official input details, this section gets updated.

---

## The Deck Trap: All-or-Nothing Runs

This is the most important section of this guide. Tears of Metal has **no mid-campaign saves** — a campaign run is 1–2 hours, and quitting or crashing ends it. The Deck's best feature (instant suspend) interacts dangerously with that design:

| Situation | What happens |
|-----------|--------------|
| **Suspend mid-run (sleep)** | The Deck sleeps with the game in memory; wake and resume works like pausing — the run continues |
| **Close the app mid-run** | The run ends. You keep permanent meta progression, but the run's artifacts/battalion state are gone |
| **Crash / forced restart / SteamOS update mid-run** | Treated like a death — run lost |
| **Battery dies mid-run** | Run lost — the single biggest handheld risk |

**The Deck rule:** treat every campaign as a commitment (the [Save System Guide](/guides/save-system-guide) calls this "block the time"). Sleep is fine — the game resumes like a pause. But the moment you quit to menu, switch games, or let the battery hit zero, the run is gone.

**Practical Deck workflow:**
1. Start a campaign only when you can finish (or suspend) the full run
2. Suspend (sleep) rather than quit — never "close game" mid-run
3. Keep the Deck charged before starting Act 3 — the longest stretch has no pause-friendly moments
4. If SteamOS prompts an update mid-run, finish the campaign first if you can; the update waits for a restart, and restarting kills the run

---

## Co-Op on Deck: Be the Guest

Tears of Metal multiplayer is **host-based** — the host's connection and hardware define everyone's experience (see the [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide)). For Deck players, that's actually good news:

- **Play as the guest, not the host.** A Deck on Wi-Fi is exactly the kind of host that causes the developer-confirmed desync ("hosts who are far away or running less stable connections"). Let your desktop friend host
- **Same-version rule applies** — everyone on the same build; and remember the Xbox/Game Pass version is not out yet, so all parties are currently on Steam (see [Patch Notes & Roadmap](/guides/patch-notes))
- **Wi-Fi over cellular** — if you're on the go, hotspot play is possible but jitter adds desync risk; keep sessions short

If your whole party is on Deck, the best-connected player hosts and everyone else accepts the dips — it works, it's just not ideal.

---

## Steam vs. the Announced Game Pass Version

One version exists today, and it's the Deck-friendly one:

| Version | Deck status |
|---------|-------------|
| **Steam version** | The one to use on Deck. Installs natively, patches via Steam, supports suspend/resume cleanly |
| **Xbox Series X\|S + Game Pass version** | **Announced for later in 2026 — not yet released.** When it ships it will be a console build, not a SteamOS path; we'll update this guide with any cloud-streaming details at that point |

**Practical advice:** if you want Tears of Metal on Deck today, the Steam version is the only option — and it gets updates through normal Steam updates.

---

## Deck Setup Checklist

1. **Update the game** — make sure the latest update (texture reductions) is installed
2. **Set a 40 FPS cap** in the Deck performance menu
3. **Check the community controller layout** — or bind battalion commands to the back paddles
4. **Charge before campaigns** — no mid-run saves, no battery-death do-overs
5. **Sleep, don't quit** — suspend to pause; closing the app ends the run
6. **Be the guest in co-op** — host from a wired desktop when possible
7. **Verify game files if anything feels broken** — corrupted installs mimic performance problems (Steam → Properties → Installed Files → Verify integrity)

---

## Deck Setup Walkthrough (Step by Step)

Getting from "installed" to "runs well" takes about five minutes:

1. **Install the Steam version** (the announced Game Pass version isn't out yet — see below)
2. **Let it update** — confirm the latest update (texture reductions) is installed before first launch
3. **First boot** — the game will configure graphics on first launch; let it finish before touching settings
4. **Open the Deck's performance menu** (… button → Performance):
   - Set **framerate cap to 40 FPS** — the single best change for this game
   - Set TDP to a medium value; tune down if you want more battery, up if battles dip too much
5. **Open the controller layout screen** and check community layouts — several exist with battalion commands mapped to the back paddles
6. **Launch and test in Act 1's first big crowd fight** — that's your real performance baseline, not the village
7. **Adjust once, not ten times** — pick one change (framerate cap, then TDP), test a battle, move on. Obsessive tuning eats more time than it saves

**The one setting you should NOT touch first:** internal resolution. The game's hand-drawn art is sharp at native res, and the patch already reduced texture memory. Frame-caps give you more smoothness per battery than resolution cuts here.

---

## What Affects Performance in This Game (Deck Context)

Tears of Metal is a musou-scale brawler — its performance load is different from a normal action game:

| Load source | Why it's heavy | Deck impact |
|-------------|----------------|-------------|
| **Crowd counts** | Dozens of soldiers on screen, each animated | The main CPU/GPU pressure; dips cluster here |
| **Effect spam** | Elemental statuses, supers, explosions in dense fights | Adds GPU load exactly when crowds peak |
| **Act 3 / The Scar** | Corruption zones add persistent visual effects to dense fights | The heaviest scenes in the game — expect the biggest dips |
| **Co-op** | Host renders everyone's crowds; guests render less | Playing as a guest is lighter than hosting |

**Deck implication:** the game isn't heavy in a "can't run it" way — it's heavy in a "peaks badly" way. A 40 FPS cap converts those peaks into stable dips instead of stutter, which is why it's the recommended first setting. The village and hub areas will feel genuinely smooth; the largest battles will feel "playable but busy."

---

## Battery & Storage Practicalities

**Battery:**
- Expect the same general Deck battery profile as other musou-style games — heavy battles drain faster than hub time (TDP capping helps more here than in most games)
- A 40 FPS cap usually buys noticeably more battery than uncapped play
- **The battery rule from the save section bears repeating:** battery death mid-run ends the campaign. Charge before Act 3, not during it

**Storage:**
- **Unverified:** we don't have a confirmed install size to publish. Check the Steam page's "Storage" field before downloading if space is tight
- After the texture-reduction patch, updates are smaller; keep automatic updates on so you never run a pre-patch build by accident

**Sleep and resume:**
- Sleep (suspend) is safe mid-run — the game resumes like a pause
- Resume failures happen occasionally on Deck with any game; if a resume hangs, a restart is the fix — and a restart costs you the run. Prefer finishing battles before sleeping, not mid-fight

---

## Troubleshooting on Deck

| Problem | Likely fix |
|---------|------------|
| **Framerate tanking in battles** | Set the 40 FPS cap; lower TDP off; close background apps |
| **Game won't launch / crashes at boot** | Verify game files (Steam → Properties → Installed Files → Verify integrity); reboot the Deck |
| **Controls not responding** | Re-apply the community layout; check the layout editor for the "Xbox" template |
| **Resume after sleep hangs** | Restart the game (accepts the run loss — see [Save System Guide](/guides/save-system-guide)) |
| **Stutter after a patch** | The pre-patch shader cache can lag new builds; play through the first battles while it rebuilds |
| **Co-op rubber-banding** | You're likely hosting — swap so the desktop player hosts (see [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide)) |
| **Cloud save conflicts** | Steam Cloud syncs between devices; if prompted about a conflict after a Deck session, pick the most recent save |

**The golden Deck troubleshooting order:** restart the game → verify files → reboot the Deck → reinstall. 90% of Deck problems die at step one or two.

---

## Alternatives: Where Else to Play

| Platform | Verdict |
|----------|---------|
| **Steam on desktop PC** | Best performance; ideal co-op host |
| **Steam Deck** | This guide — Playable, portable, beware the run-save trap |
| **Xbox Series X\|S + Game Pass** | Announced for later in 2026 — not yet available; not a SteamOS path when it ships |

**The practical combo:** Steam Deck for solo sessions and light co-op as guest, desktop Steam for hosting and boss fights. That covers every scenario this game offers.

---

## Deck Session Checklist

A campaign session on Deck, front to back — the ritual that keeps runs alive:

1. **Charge to full** — battery death mid-run ends the campaign (no mid-campaign saves)
2. **Update check** — run the game once in the days after any patch so shader caches rebuild before a real session
3. **Set expectations** — 40 FPS cap on, TDP where you like it, notifications off
4. **Start the campaign only when you can finish it** — 1-2 hours committed, or plan for sleep-suspend breaks
5. **During battles: suspend between fights, never mid-swing** — sleep between encounters is safe; resume failures are rare but a restart costs the run
6. **Co-op sessions: join as guest** — let the desktop player host; version-match the party first (see [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide))
7. **After the run: quit to menu properly** — let the game write its save state, then sleep or close; the meta progression is what matters

---

## What We Still Don't Know (Honest Gaps)

This guide is updated as information lands, but several Deck questions are still open as of August 11, 2026:

| Question | Status |
|----------|--------|
| Official Steam Deck performance targets from Paper Cult | Not published — no vendor benchmarks exist yet |
| Full vs. partial controller support documentation | Not confirmed on the Steam page at time of writing |
| Confirmed install size | Not published by us — check Steam's storage field |
| Game Pass cloud streaming on Deck for this title | Moot until the Game Pass version releases (later 2026) |
| Whether a Verified rating is in progress | Unknown — Paper Cult hasn't commented |

**How we'll update:** the [Patch Notes & Roadmap](/guides/patch-notes) page tracks announcements; the moment official Deck guidance (or a rating change) lands, this guide gets revised the same day.

---

## FAQ

**Q: Is Tears of Metal Steam Deck Verified?**
No — it's rated **Playable**. It runs and plays fine with configuration, but it's not the zero-effort Verified tier.

**Q: How does Tears of Metal run on Steam Deck?**
Generally well after the texture-reduction stability patch, with expected frame dips in the largest battles and boss arenas. A 40 FPS cap is the best starting setting.

**Q: Can I suspend mid-run on Deck?**
Yes — sleep mode pauses the game and you can resume. But closing the app, crashing, or battery death ends the run permanently (no mid-campaign saves).

**Q: Does the Game Pass version work on Deck?**
The Xbox Series X|S + Game Pass version has been announced for later in 2026 but is not released yet. When it ships it will be a console build, not a SteamOS path — the Steam version remains the Deck version.

**Q: Can I play co-op from my Deck?**
Yes — join as a guest. Don't host from a Deck if a better-connected player is available.

**Q: Does the game support cloud saves on Deck?**
Steam Cloud syncs between your Deck and PC — so yes, your meta progression follows you across devices (see the [Save System Guide](/guides/save-system-guide) for what mid-run saving still doesn't do).

**Q: Will it run better with future updates?**
Very likely — the recent update's texture reductions already helped, and the developer's confirmed priorities include performance-adjacent fixes. This guide will be updated as updates land (see [Patch Notes & Roadmap](/guides/patch-notes)).

**Q: Do I need to buy the Steam version if I want Game Pass?**
If you want it on Deck, yes — the Game Pass version is announced for later in 2026, is not out yet, and will be a console build rather than a SteamOS path. The Steam version is the Deck path.

---

## Related Guides

- [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) — desync, hosting, and crossplay status
- [Save System Guide](/guides/save-system-guide) — why mid-run exits cost you the run
- [Patch Notes & Roadmap](/guides/patch-notes) — the stability patch and what's next
- [Beginner Guide](/guides/beginner-guide) — first campaign expectations

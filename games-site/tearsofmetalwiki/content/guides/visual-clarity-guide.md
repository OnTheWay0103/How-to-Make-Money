---
title: "Tears of Metal Visual Clarity Guide — How to See What's Actually Hitting You"
description: "Why Tears of Metal's big fights turn into an unreadable blur, what each warning indicator actually means, which settings clear the screen, the camera and off-screen problems players keep reporting, and what the September 8, 2026 patch already fixed."
category: "Guides"
version: "Early Access"
updated: "2026-09-17"
keywords: ["tears of metal visual clarity", "tears of metal can't see attacks", "tears of metal visual clutter", "tears of metal attack indicators", "tears of metal camera too close", "tears of metal offscreen archers", "tears of metal guard break", "tears of metal what killed me"]
related:
  - combat-tips
  - low-fps-fix-guide
  - elite-enemy-guide
  - survival-tips
  - boss-guide
sources:
  - tier: "Official"
    text: "Visual, audio and feedback fixes in the September 8, 2026 patch — \"Fixed Invincible status visuals not disappearing immediately after the status expired\"; \"Fixed 3D sounds sometimes not being audible while Spectating\"; \"Fixed an incorrect audio event call for Dragon Geyser attacks\"; \"Fixed Hunt Captain objectives sometimes spawning Captains without their Minimap indicators\"; \"Elite enemies now reconsider their targets more frequently and are more likely to attack players dealing high amounts of damage to them\"; \"Giant II's jump-back counter landing no longer deals damage\"; \"Updated Act 3 fodder textures\"; \"Further optimized grass\" — Paper Cult, Steam Community announcement \"New Patch - Big Bug Fixing Pass\", September 8, 2026 (store.steampowered.com/news/app/1913120)"
  - tier: "Official"
    text: "Tears of Metal's defense model is timing-based and read from enemy behaviour — block, parry and dodge are core mechanics, and co-op is online for up to four players — Steam store page, app 1913120. The game launched in Early Access on July 22, 2026 on Steam, the Microsoft Store and PC Game Pass"
  - tier: "Community"
    text: "Full English Steam review corpus, retrieved September 17, 2026: 1,726 reviews (100% of the English review pool the appreviews endpoint returned). 38 reviews describe problems with on-screen readability, 21 of them negative. The most-upvoted negative review on the store (366 helpful votes, 25.0 h) states \"The visual clarity in this game is non existent\" and \"The visual clutter is impossible to see through\"; the next (211 votes, 20.0 h) states \"The indicator for when an enemy is about to attack can get easily lost behind visual effects once you get boons on every attack, and it can be very hard to tell what attack will stagger the enemy vs what they will hyper armor\"; a third (88 votes, 63.0 h) states \"the visual clarity of the combat is essentially non-existent, leading to every death being a 'What killed me?' moment\". Guard-break reports: \"Maybe too many enemies have guard break (completely break your guard even if you have 100 block) and there are too many AoE attacks that ignore your block\" (27 votes); \"Every single enemy has some guard break attack that instantly breaks your guard\"; \"the first boss just has back to back block breakers\"; \"most captains do not have clear indication of the range where you'd be taking damage (save for the big hammer guys)\" (5 h). Off-screen reports: \"It is very frustrating to land 2 or 3 perfect parries and then get hit in the back out of nowhere by some unseen captain off-screen\" (43 votes); \"most the enemy tells are done pretty well except for offscreen cannon people and effing archers\" (8 h); \"The frickin cannon/rifle people that offscreen shoot you need a better tell so they can be dodged or at least anticipated when they're behind you\" (8 h). Camera reports: \"I find the camera in general lacking, too zoomed in on the character to have any awareness past the cone in front of you, which would be less of a problem if I could center it on demand\"; \"the camera is atrocious, especially for tight environments (castle, close to wall)\"; \"if we can get the level of the lock-on camera a little higher, I can see the ground better and avoid hazards/arrow volleys\". Hud crowding: \"5 enemy miniboss health bars taking up half the screen, random messages from your army\" (15 h). Colour-blind: a single report notes \"a lack of colorblind support makes my ability to react to off-screen threats significantly worse\". Playtime and helpful votes are given inline where known — Steam appreviews API, app 1913120"
  - tier: "Community"
    text: "Chinese-language player reviews on Douban for Tears of Metal (douban.com/game/36918952): \"还有一堆弓箭手标记的红圈，也让视觉混乱，这也是这种美术风格的弊端，太过于杂乱\" (\"there are also a bunch of red circles marking archers, which makes the visuals chaotic — a downside of this art style, too cluttered\"), and the cooldown-based dodge and block are \"在大战场上就很难去关注\" (\"hard to keep track of on a large battlefield\")"
  - tier: "Community"
    text: "Community settings documentation for the in-game graphics menu — 2UpSkill, \"Tears of Metal Steam Deck Best Graphics Settings for Max FPS\", which lists the option names Display Mode, Resolution, V-Sync, Resolution Scale, Texture Quality, Texture Filtering, Shadow Quality, Volumetric Fog, Lighting, Post Processing, Effects, Anti-Aliasing and Upscaling"
  - tier: "Editorial"
    text: "Independent reviews reaching the same conclusion. 20 Minutes (20min.ch, French, Early Access review, 2.5/5) — \"Dès que les batailles prennent de l'ampleur, l'action devient rapidement confuse\" (\"as soon as battles grow in scale, the action quickly becomes confusing\"), \"Il n'est pas toujours évident de distinguer les ennemis des alliés au milieu de la mêlée\" (\"it is not always easy to distinguish enemies from allies in the middle of the melee\"), \"certaines attaques arrivent sans véritable lisibilité\" (\"some attacks arrive without real readability\"), \"une caméra parfois capricieuse, qui peine à suivre correctement l'action dans les moments les plus chargés\" (\"a sometimes capricious camera that struggles to follow the action in the busiest moments\"). Noticias Caracol (noticiascaracol.com, Spanish, Early Access review) — \"resulta difícil identificar con claridad cuáles son los objetivos importantes\" (\"it becomes hard to clearly identify which are the important targets\"), \"Los enemigos de mayor rango pueden quedar escondidos dentro del caos\" (\"higher-ranking enemies can end up hidden inside the chaos\"), \"algunos indicadores de ataque no siempre son fáciles de distinguir\" (\"some attack indicators are not always easy to distinguish\")"
  - tier: "Editorial"
    text: "The fix ordering on this page, the decision to treat the graphics menu as a visibility tool rather than only a performance tool, and the separation of this topic from raw performance troubleshooting (see the Low FPS & Stutter Fix) are this guide's own editorial choices, dated September 17, 2026"
---

# Tears of Metal Visual Clarity Guide — How to See What's Actually Hitting You

Tears of Metal makes you defend yourself by *reading* enemies — block, parry and dodge are timed off what an enemy is doing — then drops two hundred units, your battalion, allies' effects and a dozen ground indicators onto the same screen. The result is the game's most consistent non-performance complaint: you cannot tell what is happening, and you die without knowing why. This page covers **readability**; for frame rate, see the [Low FPS & Stutter Fix](/guides/low-fps-fix-guide).

---

## The Short Answer

| Symptom | Cause | Go to |
|---|---|---|
| Big fights blur into noise | Unit + effect density, not a bug | [Why](#why-it-happens) |
| Blockable and unblockable hits look identical | Guard-break / hyper-armour look like normal swings | [Warnings](#what-the-warnings-actually-mean) |
| Hit from behind, off-screen | Ranged attackers with no directional tell | [Fix 2](#fix-2-the-off-screen-problem) |
| You only see what is in front of you | Close camera, no centring key | [Fix 1](#fix-1-the-camera-problem) |
| Boss wind-ups invisible | Your own VFX on top of the telegraph | [Fix 3](#fix-3-settings-that-clear-the-screen) |

---

## Why It Happens

This is not a rendering bug, and Paper Cult has never described it as one. It is a density problem the design creates: a musou-sized battle rendered alongside roguelite proc effects. Allies share visual space with enemies, emblems stack elemental VFX on enemy animations, and objective markers, health bars and unit indicators sit above it all. Reviewers describe it worsening with progress, not improving.

Not a fringe view: **38 of 1,726 English reviews cover readability directly, 21 negative.** Independent reviewers agree.

| Evidence | Source |
|---|---|
| "The visual clarity in this game is non existent" | Steam review, 366 votes |
| Attack indicator "lost behind visual effects" | Steam review, 211 votes |
| Every death a "What killed me?" moment | Steam review, 88 votes |
| "Too cluttered to clearly see enemies attack prompts" by Act 3 | Steam review, 11 h |
| Action "devient rapidement confuse" | 20 Minutes (FR) |
| Elites "escondidos dentro del caos" | Noticias Caracol (ES) |
| Archer red circles cause "视觉混乱" (visual chaos) | Douban (CN) |

**You are not doing it wrong, and no single toggle fixes it.** The levers that reduce the noise:

---

## What the Warnings Actually Mean

| Signal | Means | Response |
|---|---|---|
| **Red circles on the ground** | Incoming archer volley | Keep moving; never stop inside them |
| **Enemy flashes before swinging** | Wind-up, delayed to bait a parry | Wait for the swing, not the flash |
| **Guard-break** | Breaks guard even at max block | Dodge, not block |
| **Hyper-armour charge-up** | Will not be interrupted | Reposition or parry |
| **Your own status procs** | Not a threat cue — it hides one | Cut effect VFX ([Fix 3](#fix-3-settings-that-clear-the-screen)) |

Two cause reported unfair deaths.

| Problem | Why it is under-signalled | Report |
|---|---|---|
| **Guard-break** — the most-complained-about mechanic we found | Looks like an ordinary swing, but blocking does nothing | "Break your guard even if you have 100 block" (27 votes); "first boss just has back to back block breakers" |
| **Hyper-armour vs staggerable** | Whether hits interrupt is invisible until tried | "Very hard to tell what will stagger vs what they will hyper armor" (211 votes) |

**Working rule: treat any charged captain swing as unblockable and dodge it.** Hyper-armour's only test is whether the enemy flinches.

---

## Fix 1: The Camera Problem

The camera is the other half of this problem: **too close to give awareness beyond a narrow cone, with no centre-on-demand key**, worst against geometry.

| Source | Report |
|---|---|
| Steam review | "Too zoomed in... no awareness past the cone in front of you"; no centring key |
| Steam review | "Atrocious, especially for tight environments (castle, close to wall)" |
| 20 Minutes (FR) | "Une caméra parfois capricieuse" in the busiest moments |

| Do this | Why |
|---|---|
| **Fight in the open** | Worst against walls and castle interiors |
| **Lock-on for single targets, not crowds** | A higher lock-on camera is a player request |
| **Treat camera control as a combat input** | Where you point it *is* your awareness |

---

## Fix 2: The Off-Screen Problem

The most frustrating deaths come from things you were never shown — "hit in the back out of nowhere by some unseen captain off-screen" (43 votes). Ranged attackers are the offender: tells are "done pretty well except for offscreen cannon people and effing archers", and players want "a better tell so they can be dodged" from behind.

| Do this | Why |
|---|---|
| **Minimap as a threat display, not a quest log** | Hunt Captain markers were missing until the September 8 patch; now your best off-screen warning |
| **Clear ranged units first** | No directional tell, and the noisiest ground circles |
| **Do not park in the open to finish a captain** | Off-screen damage lands mid-animation, facing away from the ranged line |

One reviewer notes missing colour-blind options make off-screen threats harder to react to. We found a single report, so treat it as an individual gap — there is no colour-blind mode.

---

## Fix 3: Settings That Clear the Screen

Community-documented — Paper Cult has never published a settings reference, and labels may differ between builds. The menu is usually discussed as a performance tool, but several options are also **visibility** tools: what costs frame time in a horde fight covers your screen.

| Setting | Set to | Why it helps you see |
|---|---|---|
| **Effects** | Medium or lower | Bomb/skill/proc VFX sitting on enemy wind-ups |
| **Post Processing** | Low / Medium | Bloom that smears heavy action |
| **Volumetric Fog** | Medium or lower | Haze that flattens telegraph contrast |
| **Lighting** | Medium | Affects silhouette readability |
| **Shadow Quality** | Medium | Heavy shadows muddy crowds |
| **Motion Blur / Depth of Field** | Off | Blur what you are trying to read ([Unconfirmed]) |
| **Blood Effects** | Reduced | A cleaner floor keeps ground indicators legible ([Unconfirmed]) |

Labels are **[Unconfirmed]** where community sources disagree. For performance reasoning, see the [Low FPS & Stutter Fix](/guides/low-fps-fix-guide).

**Caveat:** in a mixed party with Microsoft Store or PC Game Pass players your build may be on the `crossplay` beta branch, which lacks the September 8 fixes. See the [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide).

---

## Fix 4: Finding the Target That Matters

Noticias Caracol puts it precisely: "so many characters and enemies on screen that it becomes difficult to clearly identify which are the important objectives".

| Do this | Why |
|---|---|
| **Minimap first, melee second** | You often move mid-objective; locating the *next* one beats finishing the blob |
| **Ignore ordinary enemies** | Killing them rarely advances anything. HUD crowding compounds it: "5 enemy miniboss health bars taking up half the screen" |
| **Expect elites to find you** | September 8 made elites "more likely to attack players dealing high amounts of damage" |

---

## What Paper Cult Has Already Fixed

The **September 8, 2026 patch** is the largest batch of feedback-layer fixes so far. The pattern: Paper Cult fixes the *inputs* — wrong audio, missing markers, stale status visuals — not the density itself.

| Official fix (verbatim) | Why it matters for readability |
|---|---|
| "Fixed Invincible status visuals not disappearing immediately after the status expired" | A status display you could not trust |
| "Fixed 3D sounds sometimes not being audible while Spectating" | Audio is a real warning channel, and it was broken |
| "Fixed an incorrect audio event call for Dragon Geyser attacks" | An attack whose sound cue was wrong |
| "Fixed Hunt Captain objectives sometimes spawning Captains without their Minimap indicators" | Off-screen threats invisible on the tracking tool |
| "Giant II's jump-back counter landing no longer deals damage" | Unfair-reading counters were tuned |
| "Enemy Status damage multipliers no longer scale aggressively between Acts and now use the same multiplier throughout all three Acts" | Fewer status effects on screen in later Acts |
| "Updated Act 3 fodder textures" + "Further optimized grass" | The two busiest visual environments |

**Still missing — player requests, not features:** customisable indicator colours, a colour-blind mode, and a camera centring key. Your own white attack lines overlap enemy lines and can render a guard-break unreadable. Lowering **Effects** is the closest workaround. The roadmap does not mention readability; Phase 2 is build crafting agency, Emblems and the meta-progression rework. See the [Patch Notes & Roadmap](/guides/patch-notes).

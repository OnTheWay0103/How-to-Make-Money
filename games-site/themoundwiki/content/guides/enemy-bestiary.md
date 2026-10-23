---
title: "The Mound Enemy Bestiary — What Is Actually Hunting You"
description: "Evidence-based enemy bestiary for The Mound: Omen of Cthulhu. The creatures the developer actually names — Y'm-bhi, Tue Tue, Mi-Go, Huemul, Crawling Canopy, Centipede and the undead — with their documented behaviour, plus a clearly-labelled third-party creature roster and a full list of the names that were removed from this page and why."
category: "Guides"
version: "1.0"
updated: "2026-09-17"
keywords: ["themound bestiary", "themound enemy list", "themound creature guide", "themound ymbhi", "themound tue tue", "themound mi-go", "themound all enemies", "themound enemy behaviour"]
related: ["combat-survival-guide", "weapons-guide", "sanity-guide", "coop-strategy-guide", "stealth-guide"]
---

# The Mound Enemy Bestiary — What Is Actually Hunting You

> **Rewritten September 17, 2026.** Earlier versions of this page invented a tier system — "Y'm-bhi Sentry", "Y'm-bhi Scout", "Y'm-bhi Priest", "Ghost Bat", "Wraith", "Vine Creature", "Leech Swarm", "Bandurria", "Giant Centipede", "Drowned Captain", "High Priest of Cthulhu" — complete with HP values, spawn counts and region tables. None of those names appear anywhere in the developer's announcements or in the Steam review corpus. They were fabricated. This page now lists only what can be sourced, labels what cannot, and shows its working.

The jungle in **The Mound: Omen of Cthulhu** does not present you with a tidy roster of ranked monsters. It presents you with a handful of creatures the developer has actually described, a documented corruption mechanic that turns your own dead squadmates against you, and a great deal of noise you should not have made.

This page is built from two corpora and nothing else. Where a creature is real, you get the developer's own words. Where a creature is only reported by third-party guide sites, it is labelled as such and kept separate. Where a name was fabricated, it is listed in the removal table so you can see exactly what changed.

---

## Why this page was rewritten

Every name below was claimed as a fact by an earlier version of this page. Each was searched across the complete official announcement corpus for appid `2569760` (39 posts) and the full 576-review Steam corpus. All returned zero hits in both.

| Removed claim | Query | News hits | Review hits | Why it was removed |
|---------------|-------|-----------|-------------|--------------------|
| Y'm-bhi Sentry / Scout / Stalker / Shaman | `Y'm-bhi Sentry`, `Y'm-bhi Scout`, `Y'm-bhi Stalker` | 0 | 0 | Named sub-classes that appear in no source. The developer describes behavioural states, not unit tiers. |
| Y'm-bhi Priest | `Y'm-bhi Priest` | 0 | 0 | Fabricated. "Priest" is a **performer role** in the developer's mocap post ("Cédric Lalanne as *The Priest*") and a cart-driving **character** in reviews — never a Y'm-bhi unit. |
| Y'm-bhi Berserker | `Berserker` | 0 | 0 | Never named by the developer or by any reviewer. The real mechanic is *self-immolation*, described below. |
| Ghost Bat | `Ghost Bat` | 0 | 0 | Fabricated. |
| Wraith / Shadow Wraith | `Wraith` | 0 | 0 | Fabricated. |
| Vine Creature | `Vine Creature` | 0 | 0 | Fabricated. |
| Leech Swarm | `Leech Swarm` | 0 | 0 | Fabricated. |
| Bandurria | `Bandurria` | 0 | 0 | Fabricated. |
| Cursed birds | `Cursed birds` | 0 | 0 | Fabricated — this was a mis-description of the **Tue Tue**, which is real but is a specific, documented creature with its own official profile post. |
| Giant Centipede | `Giant Centipede` | 0 | 0 | Fabricated **as a distinct tier**. Centipedes are real (see below) — but "giant" and the associated HP/tier framing are invented. |
| The Lurker Below | `Lurker` | 0 | 0 | Fabricated named boss. |
| High Priest of Cthulhu | `High Priest` | 0 | 0 | Fabricated named final boss. |
| Drowned Captain (mini-boss) | `Drowned Captain` | 0 | 0 | Fabricated named boss. |
| Isle of Voices, Sunken Grotto, Catacombs | `Isle of Voices`, `Sunken Grotto` | 0 | 0 | Fabricated **place names** used as spawn regions. |
| Creature Codex | `Codex` | 1 | 0 | The one official hit is *"Guidebook codex pages can now be discovered across the mainland"* — the real term is **guidebook codex pages**, not a "Creature Codex" that drops lore from apparitions. |
| "Tulu-metal medallion" as a noise source that "wakes the jungle" | `Tulu`, `medallion` | 3 | 3 | **Partly real, wrongly described.** The Medallion is official and it does attract attention — but it is struck to reveal buried treasure, not rung as a noise weapon. Fixed below. |

### Method

Reproduce every count on this page yourself:

1. **Announcement corpus** — `/tmp/mound_news.txt`, the complete Steam news feed for appid `2569760`. Split on the block marker `^===== ` → **39 blocks**. Verified separately that the four add-on appids (`4630450`, `4630440`, `4630460`, `4925780`) each have **0 news items** and that no separate demo or playtest appid exists, so this is the whole official surface.
2. **Review corpus** — `/tmp/mrev/reviews.txt`, **576 unique reviews**, split on `^=== `.
3. **The query form** — a case-insensitive regex over both corpora, printing the hit count plus ±120 characters of context. **Every hit was read in context before being accepted as support.** This matters: raw substring counts lie badly in this game's corpus. Three traps found and corrected during this rewrite:
   - `Migo` returns **14 review hits** — all of them are the Spanish/Portuguese word **`amigo`**. With a word boundary (`\bMigo\b`) the count is **0**. The creature is spelled **Mi-Go** (1 news hit) or **Migo** (1 news hit, the patch note itself).
   - `Priest` returns 5 review hits and 1 news hit, none of which name an enemy — one is a mocap credit, the rest are the player character who drives the ox cart.
   - `craft` is a trap for this wiki generally: 80 of 87 hits sit inside "Lovecraftian". It is not evidence of a crafting system and no crafting system is claimed anywhere on this page.

**Evidence strength rule applied here:** patch notes only mention things that changed, so a missing *item* proves little. A missing **named creature, named boss or named place** proves a great deal, because those are exactly what a developer promotes. Every name in the removal table above is a named creature, boss or place.

---

## Class 1: The Y'm-bhi (the real, documented enemy)

The Y'm-bhi are the one enemy the developer has written a dedicated profile post about — *"The Y'm-bhi: Killing isn't enough"*. They are the backbone of the game's threat, and almost everything the fabricated version of this page claimed about "undead conquistadors with tiers" was wrong in an interesting way: the truth is stranger.

The developer's description: the Y'm-bhi *"are reanimated bodies bound to the jungle, and they behave less like mindless undead and more like sentries."*

### Documented behaviour — and the correct counter

| Behaviour (developer's words) | What it actually means in play | Counter |
|-------------------------------|-------------------------------|---------|
| *"When a Y'm-bhi spots players, it often probes instead of attacking."* It *"watches, tests distance, and builds stress."* | Being seen is **not** the same as being attacked. The pause is the creature deciding. Use it to leave. | Break line of sight during the probe window. Do not trade hits to "finish it". |
| *"You may hear fragments of the human still trapped inside (broken warnings urging you to flee)."* | The voice lines are a tell, not a taunt. | Treat the audio cue as your detection warning. |
| *"Using a crucifix reveals their stress level through the glow of their eyes."* | The Crucifix is an **information tool**. This is its documented function. | Carry the Crucifix when you intend to read a patrol rather than fight it. |
| *"When stress peaks, they don't always charge. Sometimes, they retreat into the forest, repositioning for an ambush when players move on."* | A Y'm-bhi that walks away is not a Y'm-bhi that has given up. | Assume the retreat is a flank. Move as a group or change route entirely. |
| *"They can parry melee attacks, sometimes disarming players."* | **The Y'm-bhi parry; you cannot.** (See the note below — this is the single most misread line in the game's PR.) | Do not spam melee into a Y'm-bhi. Mix in ranged damage. |
| *"Headshots aren't always fatal - even devastating ones."* | There is no guaranteed one-shot headshot kill. | Budget more than one shot per target. |
| *"Some can deploy tentacles to pin a player, forcing allies to intervene."* | The pin is a **team** problem. Solo, it is a death sentence. | Stay at range. If pinned, call it out immediately — only an ally can free you. |
| *"If you flee, they may enter a pursuit state, becoming slightly faster than you through the jungle."* | Running away does not work; they are faster. | Do not sprint from a pursuing Y'm-bhi. Break sight and hide. |
| *"Light can briefly blind Y'm-bhi in darkness - unless they carry light of their own."* | Light is crowd control with an explicit exception. | Expect the trick to fail on any Y'm-bhi holding a lamp. |
| *"Some wield oil lamps, which they may use to set themselves ablaze and charge players in flames."* | This is the real "berserker" — an ordinary Y'm-bhi with a lamp. | Run perpendicular. Do not group up around a burning one. |
| *"In certain cases, the forest will attempt to bring the body back, reanimating what players thought was dealt with."* | Kills are not always permanent. | Watch the body. Do not turn your back on a corpse in a fight. |

> **The parry line, read carefully.** The official Y'm-bhi post says the *creature* can parry. It does not say the player can. The developer's own forward-looking note in the demo update is explicit that a player defensive option was still *in development*: *"We're also working on a block and counterattack system for certain weapons."* There is no player parry in the game. Two high-vote reviews say so directly — *"There is no traditional block, dodge, or parry system"* and *"There is no dodge, no parry, no mercy."*

### The Mask of Nyarlathotep — the anti-Y'm-bhi tool

This is real, official, and specific. From *"Pack for the Unknown #2"*: the Mask *"allows its wearer to move among the Y'm-bhi unnoticed - provided it's donned before attention is drawn. For a time, the undead will accept you as one of their own."*

The cost is documented too: *"Wearing the mask gnaws at the mind, inflicting a creeping dread that leaves the wearer vulnerable if violence erupts. Worse still, the illusion isn't selective: to your allies, you may look no different from the creatures you're trying to fool."*

Practical consequence: **the Mask's real danger is friendly fire, not the Y'm-bhi.** Announce it out loud on voice before you put it on, and never wear it into a fight you did not start.

---

## Class 2: The Tue Tue (the real "cursed bird")

The fabricated page described a nameless "cursed bird" that blinds you. The real creature is far more specific, has its own official profile post — *"The Tue Tue: don't wake it"* — and behaves nothing like a generic dive-bomber.

| Attribute | Documented detail |
|-----------|-------------------|
| **Origin** | Chilean and Mapuche folklore, where it is the *Chonchón* — *"a creature tied to dark sorcery... capable of bringing omens of death."* |
| **Appearance** | *"a large black-feathered bird with a skull for a head and two burning red eyes"* |
| **Temperament** | *"The Tue Tue is territorial. It does not hunt - it punishes proximity."* |
| **Trigger** | *"Approach too close, throw an object near it, and it will scream. Loudly. Very loudly."* |
| **The scream's effect** | *"The kind of noise that tells every creature in the area exactly where you are."* |
| **The cloud** | It *"ascends - hovering above its branch - and releases a thick green-black cloud that swallows everything around it. Visibility drops to near zero."* |
| **Escape option 1** | *"Run. Put enough distance between yourself and the Tue Tue and the cloud will fade behind you."* |
| **Escape option 2** | *"Kill it. A ranged weapon can bring it down before the cloud fully closes in."* But — *"the Tue Tue screams again when it dies."* |

Two consequences that the fabricated page got backwards:

1. **The cloud does not follow you.** *"The cloud does not follow you - but your teammates caught inside it will be on their own."* Running is a genuine, working answer.
2. **Killing it is not a clean solution.** The death scream is a second alarm. If the area is already hot, running beats shooting.

The developer's own Captain's Notes summary: *"Silence is survival. If you hear the cry, it is already reacting to you."*

---

## Class 3: Other creatures the developer names

These are the only other creature names that appear in the 39 official announcements. Note how thin the evidence is for each — that thinness is the honest picture of what has been published.

| Creature | Official evidence | What it means in play |
|----------|-------------------|----------------------|
| **Mi-Go** (also spelled **Migo**) | Patch 1.01: *"Fixed Mi-Go enemy behavior which did not cause them to search for players, so they rarely showed up in game sessions."* Patch 1.02: *"Migo enemy captures players for less time in Single-Player."* | A rare enemy that was **bugged at launch into near-non-existence** and then fixed. It **captures** players. The capture duration was cut in single-player. Beyond that the developer has said nothing — treat every other detail you read about the Mi-Go anywhere as unsourced. |
| **Crawling Canopy** | Patch 1.01: *"Crawling canopy enemy (spider) does 50% less damage."* | An officially named spider-type enemy that was **nerfed by half** shortly after launch. That single line is the entire official record. |
| **Centipede** | 3 hits. *"those pesky centipedes"*; *"Crash when attacking the centipedes around the Logbook Camp"*; *"Don't attack the small centipedes spawning during the hallucination sequence for the first Logbook onboarding contract."* | Real, and **small** — the official text says "small centipedes". Critically, one official hit ties centipedes to a **hallucination sequence**, so a centipede you see is not automatically a real one. Reviewers confirm they exist as ground enemies: *"smaller enemies like the centipedes on the ground"*. |
| **Huemul** | Demo Update: *"Improved Huemul behaviour."* | A real, officially-named creature. That is the **entire** official corpus for it. Anything specific — diet, danger, loot — is unsourced, so this page makes no claim beyond its existence and the fact that its behaviour was patched. |
| **Undead** | 5 hits, including the single most important mechanic on this page (below), plus *"undead enemies have a slightly higher chance of dropping"* firearm ammo. | The generic class the Y'm-bhi belong to. |
| **Doppelgänger** | Demo update: *"Improvements to doppelganger behaviour."* | An official, named, sanity-driven impostor. A reviewer describes the experience exactly: *"Stray too far from the pack? Game might spawn a doppelganger of your buddy... it ends up throwing you in a river."* |

### The mechanic that matters more than any monster list

From the official "Playable demo is LIVE" post:

> *"If a teammate dies and isn't promptly revived, they will become corrupted, returning as an undead hostile to hunt down the rest of the squad."*

This is the best-documented threat in the game and the fabricated bestiary omitted it entirely. **Your own dead squadmates become the enemy.** A reviewer's account matches it precisely: *"an undead came out of the ground directly beneath me and grabbed me, killing me as well and ending the round."*

Two practical rules follow, and they are worth more than any stat table:

1. **A downed teammate is a timer, not a corpse.** Revive fast or expect to fight them.
2. **Holding an area after a death is a trap.** The thing hunting you already knows where you are.

---

## Class 4: Creature names reported by third-party guides only

Everything in this table returns **0 hits in both corpora** — 39 announcements and 576 reviews. These names come from independent editorial guide sites (gamerguides, nerdschalk, allthings.how, noobfeed, gamewatcher, intoindiegames). **They are reported by third-party guides, not by the developer.** Some are plausible; two of them (*Prowler*, *Haunter*) appear in a single Steam review by a player describing difficulty, which is weak and lone corroboration. Do not treat any row here as confirmed.

| Reported name | Reported name | Reported name |
|---------------|---------------|---------------|
| Beserk Undead | Brute Undead | Crawling Canopy *(also official)* |
| Dark Young of Shub-Niggurath | Deep One | Dopplegänger *(also official)* |
| El Buey | Flesh Shambler | Formless Spawn |
| Hanged Undead | Haunter of the Dark | Hound of Tindalos |
| Huemul *(also official)* | Lamp Undead | Lightning Undead |
| Mi-Go *(also official)* | Prowler | Shoggoth Worm |
| The Boulder | Transmuter | Tue Tue Undead |
| Tyrano Horse | Undead *(also official)* | Wormy |
| Y'm-bhi *(also official)* | | |

Third-party-reported **region names**, equally unverified against official sources: The Jungle, White Beach, Rio Verde, Cliffs of Ibara, Shambler's Hunting Grounds, Abandoned Mapuche Settlement, The Watching Trees, South Landing, Scarlet Flower Woods, Flooded Forest, Wreck of La Favorita, Near the Mound, Saint Jerome's Fall, The Hallowed Hills.

> **How to use this table:** if you are stuck on a specific creature and a guide names it, you now know the name is community-sourced and not developer-confirmed. That does not make it wrong — it makes it unverified. Treat region names the same way: use them for orientation, not for planning.

---

## What the developer actually documents about the environment

The forest is the enemy that is definitely real, and it is documented in more detail than any single creature.

| System | Developer's words | Practical reading |
|--------|-------------------|-------------------|
| **Noise wakes the forest** | *"Enemies take longer to spawn when the forest wakes up."* (patch 1.01) | "The forest wakes up" is a real, official escalation state — and patches tune it. Noise discipline is not flavour text. |
| **Movement is slowed by growth** | *"Dense vegetation and branches slow your movement. You can cut through with a machete, but too much noise risks drawing out hidden creatures."* | The machete is a movement tool as much as a weapon. Cutting costs you noise. |
| **Fog and rain** | *"Dense fog limits your vision, and rain threatens your survival in more ways than one. A soaked fuse means your gunpowder weapons won't fire when you need them most."* | Rain is a hard counter to firearms. This is not a minor accuracy penalty. |
| **Caves keep powder dry** | *"Caves and structures might feel like the last place you want to enter, but they are where you are most likely to find treasure, and also offer a small advantage: at least inside, you can keep your gunpowder dry."* | Interiors are loot-dense **and** the one place your gun still works in a storm. |
| **Damage drains sanity** | *"Taking damage drains your sanity, causing reality to warp around you. You will experience hallucinations designed to break your team's communication, hide deadly traps, and even make your allies look like terrifying monsters."* | Sanity is a combat resource. Getting hit makes the next fight harder. |
| **Spawn fairness was fixed** | *"Fix for multiple enemies of the same class spawning in some missions."* (patch 1.02) | Launch had duplicate-spawn bugs. Behaviour you remember from week one may be a bug, not a design. |
| **Removed end-of-mission cap** | *"The mandatory hard cap at the end of missions has been removed: players can now remain on the mainland as long as they can survive."* (patch 1.01) | Your run ends when you decide it ends — or when you die. There is no forced extraction timer. |

---

## Practical encounter rules

These replace the fabricated per-creature counter tables. They are all traceable to the sources above.

1. **Being seen is not being attacked.** Y'm-bhi probe before they commit. Leave during the probe.
2. **Do not melee-spam a Y'm-bhi.** They parry and they disarm. You cannot parry back.
3. **Assume a headshot is not lethal.** Budget a second action after every shot.
4. **Do not run from a pursuing Y'm-bhi.** They are faster than you. Break line of sight and hold still.
5. **Light blinds them — except the ones holding lamps.** Those ones set themselves on fire instead.
6. **A Y'm-bhi that walks away is flanking.** Change position.
7. **Do not linger over a corpse.** The forest reanimates Y'm-bhi bodies.
8. **Revive immediately.** A dead teammate becomes a hostile undead. This is the single most dangerous thing that can happen on an expedition.
9. **Read a Tue Tue before you pass it.** Do not throw anything near it. If it screams, run — the cloud does not follow.
10. **Watch what is real.** Doppelgängers, centipedes in hallucination sequences, and allies rendered as monsters are all documented. Confirm with voice before you shoot anything that looks like a person.
11. **Check the sky.** Rain disables gunpowder weapons; the Arquebus becomes a club. Nothing in the bestiary matters if your gun will not fire.

---

## Related Guides

- [Combat & Survival Guide](/guides/combat-survival-guide) — Blocking, positioning and staying alive
- [Weapons Guide](/guides/weapons-guide) — What actually kills each threat
- [Sanity Guide](/guides/sanity-guide) — Hallucinations, doppelgängers and the warping world
- [Co-op Strategy Guide](/guides/coop-strategy-guide) — Revives, the corruption spiral and team positioning
- [Stealth Guide](/guides/stealth-guide) — Noise discipline and why the forest wakes up

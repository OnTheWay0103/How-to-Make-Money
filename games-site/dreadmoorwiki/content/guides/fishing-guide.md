---
title: "DREADMOOR Fishing Guide — Bait, Stamina & Line Tension Explained"
description: "How DREADMOOR fishing actually works: choosing bait, reading a bite, pulling against the fish, managing Stamina and Line Tension, and landing predators without snapping the line."
category: "Fishing"
version: "Demo build (Oct 2026)"
updated: "2026-10-24"
date: "2026-10-24"
keywords:
  - "dreadmoor fishing guide"
  - "dreadmoor how to fish"
  - "dreadmoor line tension"
  - "dreadmoor bait"
  - "dreadmoor stamina"
  - "dreadmoor harpooner"
related:
  - fish-species-guide
  - beginner-guide
  - survival-guide
sources:
  - tier: "Official"
    text: "The tactile fishing system, lure selection, line management, timing-based reeling, hold compartments, and the warning that carnivorous fish can eat other catches are from the DREADMOOR Steam store page and the official October 2026 Early Access press release."
  - tier: "Community"
    text: "The demo-specific rules — Earthworm for Snappers, Wind-Up Tin for Softgrazers, Rainbow Fin for Harpooners, the Stamina/Line Tension behavior, the splash-zone cast, and the Land Fish prompt — are from the October 2026 demo build as documented in community playthrough coverage."
  - tier: "Editorial"
    text: "The tension decision table, practice drills, and troubleshooting advice are our recommendations; no numeric tension threshold or stamina value has been published."
---

# DREADMOOR Fishing Guide — Bait, Stamina & Line Tension Explained

Fishing is the engine of DREADMOOR. It pays for fuel, bait, repairs, and the boat upgrades that let you reach harder water. It is also the system most likely to make a new player quit: the game explains the buttons, not the judgment.

This guide covers the mechanics that are confirmed in the demo and separates them from what is still unknown. It is not a list of every fishing spot. It is a framework you can apply to any spot the game adds.

## The Four Phases of Every Catch

Every fishing attempt in DREADMOOR runs through the same sequence:

1. **Choose rod and bait** at a marked fishing spot.
2. **Cast and wait** for a bite, or retrieve a lure for a predator.
3. **Fight** the fish using Stamina and Line Tension.
4. **Land** the fish and decide whether to keep or release it.

Most guides skip phase 2 and phase 4. Both matter.

### Phase 1: Rod and Bait

The demo gives you a **Simple Rod**, and it is enough for every required catch. That is an important design signal: bait choice matters more than rod power in the opening hours.

Bait selection is species-specific. The demo confirms three pairings:

| Fish | Bait | Fishing style |
|------|------|---------------|
| Snapper | Earthworm | Static bait; wait for a bite |
| Softgrazer | Wind-Up Tin | Static bait; longer fight, recovers Stamina |
| Harpooner | Rainbow Fin | Moving lure retrieved through a splash zone |

Two of those baits are crafted at a Workbench:

- **Wind-Up Tin** = 1 Metal Plate + 1 Fish Meat
- **Rainbow Fin** = 1 Fish Meat + 1 Metal Plate + 1 Chromatic Scales

The material cost is the real gate. If you are short on Fish Meat, you cannot mass-produce bait, and if you are short on Chromatic Scales, you have to decide between predator bait and hull reinforcement. That decision is covered in the [Fish Species Guide](/guides/fish-species-guide).

### Phase 2: Casting and Reading a Bite

For static bait, cast and then **keep the rod still**. Moving it too early can scare fish away. The bite is the cue to act, not a cue to start reeling immediately.

For predatory fish, the logic is reversed. A Harpooner is not attracted to a motionless bait. You cast the Rainbow Fin into the disturbed-water splash zone and retrieve it so the lure looks like prey. The retrieval speed is the skill check:

- **Too fast:** the predator cannot catch the lure.
- **Too slow or motionless:** the predator loses interest.
- **Controlled and steady:** the predator follows, closes, and bites.

If a Harpooner follows but turns away before biting, do not assume the spot is empty. Recast and change your retrieval pace.

### Phase 3: The Fight

This is where most fish are lost. Two meters matter:

- **Stamina** is the fish’s resistance. It falls when you pull in the opposite direction to the fish’s movement.
- **Line Tension** is the strain on your line. It rises when you reel against a resisting fish or let the fish swim too far away. At maximum, the line snaps.

The correct loop is:

1. Watch which way the fish moves.
2. Pull the opposite way to drain Stamina.
3. When Stamina is low, begin retrieving.
4. If the fish starts fighting again, stop retrieving and drain Stamina again.
5. If Line Tension climbs too high, stop reeling entirely until it falls.

A zero Stamina bar is **not** a catch. It means the fish is tired enough to be brought closer. Retrieval is a separate step, and the fish can recover Stamina during it. Expect one or two last resistance bursts on the final approach.

### Phase 4: Landing and Keeping

When the fish is close enough, a **Land Fish** interaction appears. Landing and keeping are separate decisions. Releasing by mistake means the fish cannot be used for a contract or processed.

This is most costly with Softgrazers and Harpooners, because their bait is crafted and their contracts have specific counts. If you are fishing for a contract, check the objective text before you release anything.

## The Line Tension Decision Table

There is no published numeric threshold for Line Tension, so do not look for an exact bar value. Use the situation instead.

| Situation | What to do | Why |
|-----------|------------|-----|
| Fish is moving steadily and tension is low | Pull opposite its movement | This is the only way to drain Stamina efficiently |
| Fish reverses direction | Reverse your pull immediately | Pulling the wrong way raises tension without draining Stamina |
| Tension is high but Stamina is low | Stop reeling; let the fish run | A tired fish can still break a line on the final approach |
| Fish is far away and tension is rising | Ease off and let it close the distance | Distance itself adds strain |
| Fish is close and the Land prompt appears | Take the prompt; do not keep reeling | Extra reeling can still snap the line |
| Line snaps | Recast and change your retrieval rhythm | The failure is timing, not necessarily bait or rod |

The most common bad habit is treating the fight as a race. It is not. It is a stamina war with a hard failure state attached.

## Softgrazers: The First Real Test

Snappers teach the controls. Softgrazers teach patience.

A Softgrazer has more Stamina than a Snapper and can recover while you are retrieving it. A long fight does not mean you brought the wrong bait. It means you are being asked to re-drain Stamina instead of forcing the retrieve.

The safe pattern is:

1. Drain Stamina with opposite pulls.
2. Retrieve only while the fish is visibly tired.
3. The moment it fights again, stop and re-drain.
4. Accept that the catch will take longer than a Snapper.

Trying to save time by reeling through the resistance is how you lose a crafted bait and a contract fish in one action.

## Harpooners: Predator Fishing

Harpooners are not harder versions of Snappers. They are a different phase-2 puzzle.

The sequence is:

1. Equip Rainbow Fin.
2. Find the marked predatory-fish location and the splash zone.
3. Cast into the splash zone.
4. Retrieve at a controlled, steady pace.
5. Wait for the follow and the bite.
6. Fight normally once hooked.

If nothing reacts, check three things in order: bait equipped, cast inside the splash zone, retrieval pace. Do not burn a second Rainbow Fin until you have checked all three.

## Mouse or Keyboard?

The demo supports both control schemes, and the preference can be changed in settings. The mechanics do not change.

Mouse is comfortable for the slow, forgiving Snapper fight. Keyboard can be easier when a stronger fish changes direction rapidly and you need large, fast pull reversals. If you keep overcorrecting with the mouse, try keyboard for Softgrazers and Harpooners. This is a control preference, not a difficulty setting.

## Night Fishing and Strange Species

A day/night cycle is part of the game, and hands-on coverage of the playtest notes that night adds stranger species while the fishing minigame itself does not change. The official Early Access material also warns that night water is more dangerous and that tentacles can attack the boat.

That creates a simple risk equation: night fishing may offer different catches, but it also exposes you to threats that daytime fishing does not. Do not combine a night trip with a damaged hull or an empty fuel tank. See the [Survival Guide](/guides/survival-guide) for the pre-departure checklist.

## Practice Drills That Actually Transfer

If you want to improve quickly, do these in order:

1. **Ten Snappers with no line breaks.** Focus only on reversing your pull when the fish reverses. Do not try to be fast.
2. **Five Softgrazers without releasing one by mistake.** Focus on the Land prompt and the keep decision.
3. **Three Harpooners with no wasted Rainbow Fins.** Focus on retrieval pace and splash-zone casting.
4. **One full fishing trip with a fuel and hull check before departure.** This turns fishing from a minigame into a routine.

## What Is Still Unknown

As of October 24, 2026, the following are not confirmed:

- Numeric Stamina pools or Line Tension thresholds for any species
- A complete fish list, rarity tiers, or legendary fish
- Exact sell values for most species
- Whether rod upgrades change the fight meter or only retrieval speed
- Whether night-only species are required for any story progression

We will update this guide after Early Access launches on November 9, 2026. If you find a mechanic we have mislabeled, [send a correction](/contact).

---

*Last checked October 24, 2026 against the official Steam feature list and the October 2026 demo.*

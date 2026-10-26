---
title: "Waterpark Simulator Stuck Guests — Causes and Fixes"
description: "Waterpark Simulator stuck guests: how to unstick frozen visitors and staff, where they pile up, what patches 1.0.63 to 1.0.119 fixed, and how to prevent it."
category: "Reference"
version: "1.0"
updated: "2026-10-26"
date: "2026-10-26"
keywords:
  - "waterpark simulator stuck guests"
  - "waterpark simulator guests not moving"
  - "waterpark simulator frozen visitors"
  - "waterpark simulator stuck staff"
  - "waterpark simulator guest pathing"
  - "waterpark simulator bug fix"
  - "waterpark simulator guests stuck in slide"
related:
  - "visitor-problems-guide"
  - "staff-management-guide"
  - "park-design-layout-guide"
  - "visitor-happiness-guide"
sources:
  - tier: "Official"
    title: "UPDATE 1.0.119 - Patch Notes"
    url: "https://store.steampowered.com/news/app/3293260/view/703282928078034533"
    date: "2026-10-23"
    text: "CayPlay patch notes (2026-10-23): 'Staff no longer gets stuck in some situations where it shouldn't and no longer teleports', plus lifering visibility in multiplayer, jukebox track selection, and staff activity readouts in the UI."
  - tier: "Official"
    title: "Waterpark Simulator Patch 1.0.63 (Steam patch notes, mirrored)"
    url: "https://www.vgspoilers.com/game/waterpark-simulator/patches/1.0.63"
    date: "2026-08-18"
    text: "Patch 1.0.63 notes mirrored from the Steam announcement (2026-08-18): 'Staff no longer gets stuck in the break room in some edge cases'; a fix 'preventing guests from getting stuck or injured outside park limits'; 'some attractions have been reviewed to fix painting and guest-stuck issues'; restock item despawn limit raised to 20."
  - tier: "Community"
    title: "Waterpark Simulator update history (waterparksimulatorgame.wiki)"
    url: "https://waterparksimulatorgame.wiki/guides/updates/"
    date: "2026-10-26 (accessed)"
    text: "Update tracker summarising CayPlay's Steam patch notes: 1.0.91 (2026-09-11) 'Cleaners no longer get stuck inside the 3-star trash bin' and 'guests no longer get stuck in the 5-star wellness slide or the pirate diving board'; 1.0.63 (2026-08-18) staff break-room unstick."
  - tier: "Community"
    title: "Steam Discussion — 'to the developers of this game'"
    url: "https://steamcommunity.com/app/3293260/discussions/0/603039786130900737"
    date: "2026-10-26 (accessed)"
    text: "Player reports guests standing frozen and needing to be pushed manually to keep the park moving, with money piles appearing above frozen visitors. A CayPlay developer replied that they were working on the stuck-visitor fix and asked players to send save files to support@cayplay.com. Thread content verified from search results only — the Steam hub was not directly reachable from our network."
  - tier: "Community"
    title: "Steam Discussion — 'Found a bug? Let us know. (v 0.2.29 + )'"
    url: "https://steamcommunity.com/app/3293260/discussions/0/603040419439421942/"
    date: "2026-10-26 (accessed)"
    text: "Bug-report thread with repeated stuck-guest reports: guests stacking in toilet blocks, guests stopped on the outer lanes and loop sections of the 5-star triple slide, and guests standing and blocking others at the jumping tower and grand dive platform. Verified from search results only."
  - tier: "Community"
    title: "Cleaning Loop Guide (waterparksimulator.wiki)"
    url: "https://waterparksimulator.wiki/guides/cleaning-loop/"
    date: "2026-10-26 (accessed)"
    text: "Trash-bin behaviour: the facing arrow sets the side guests approach from and should point at the path, not a wall or prop; the yellow circle defines whether guests will walk to the bin at all, and 'guests outside this radius will not bother walking to the can'. No numeric radius is published."
  - tier: "Editorial"
    title: "Diagnosis workflow and layout recommendations"
    url: "https://waterparksimulatorwiki.vercel.app/guides/stuck-guests-fix-guide"
    date: "2026-10-26"
    text: "The triage order, the six-location table, the prevention checklist and the build-now/rebuild-later advice are our editorial recommendations based on the patch notes and community reports above."
---

# Waterpark Simulator Stuck Guests — Causes and Fixes

A guest is standing at the top of a slide, not moving. Three more are queued behind them. Twenty minutes later they are still there, and your rating is dropping. **Stuck guests in Waterpark Simulator are almost always a pathing problem** — something blocks the route the guest wants to take, or the guest is locked in a state with no exit. In most cases you can fix it in under a minute.

This guide covers how to clear a stuck guest right now, the six locations where they pile up, what the patches already fixed, and how to build so it stops happening. For non-pathfinding problems — angry visitors, dropping star ratings, injuries — use the [Visitor Problems guide](/guides/visitor-problems-guide) instead.

## First, work out which kind of stuck you have

Not every idle guest is a bug. There are three different things happening, and they need different fixes:

| What you see | What is actually happening | Fix |
|---|---|---|
| Guest stands still, animation loops, will not react to anything | Frozen in a state — a real bug | Push them, then reload if it repeats |
| Guest is walking nowhere against a wall or fence | Path blocked or no valid exit | Remove the obstruction |
| Guest is waiting in a queue that is not moving | Queue or ride throughput problem | Check staffing, ride status, queue length |

Only the first two are pathing bugs. The third is a design problem, and pushing guests will not solve it — see [Visitor Happiness](/guides/visitor-happiness-guide) for throughput fixes.

## How to unstick a guest right now

**Push them.** Right-clicking a guest pushes them out of the way. This is the fastest fix and it works on most frozen guests. Pushing is also the game's intended tool for ejecting troublemakers, so it is not a cheat — but note that shoving guests around can knock them over and generate injuries, which cost you money and reviews.

**Clear the obstruction.** If several guests are stuck in the same place, they are not individually frozen — they are blocked. Look for the object at the front: a fence, a bin, a bench, a decorative prop placed on the path, or a stall counter jutting into the walkway. Move or sell it, and the queue usually drains on its own within a few seconds.

**Push panicking guests off boards.** A panicking guest at a diving board blocks it and can drown. Push them off the board or into a life ring, or station a lifeguard so the board is supervised. Throwing a few rings into each pool at the start of the day means panicking guests bump into them automatically.

**Reload as a last resort.** If a whole zone freezes — common around large slides and level 4 parks — save and reload. Players report this clearing frozen clusters that pushing alone cannot shift.

## The six places guests freeze

These are the locations that come up again and again in CayPlay's patch notes and in the Steam bug threads:

**1. Outside the park limits.** Patch 1.0.63 fixed guests getting stuck or injured outside park boundaries. If you are on an older build, this is your first suspect.

**2. Slide exits and loop sections.** Guests stopped on the outer lanes and in the loop sections of the 5-star triple slide, and in the 5-star wellness slide. CayPlay reviewed several attractions specifically for guest-stuck issues in 1.0.63 and fixed the wellness slide and pirate diving board in 1.0.91.

**3. Diving boards and the jumping tower.** Panicking guests block boards; unsupervised boards compound it. The grand dive platform and 5-star jumping tower both appear in player reports.

**4. Toilet blocks.** Guests stack up in toilet queues, sometimes several deep, when a block is under-built for the crowd or a unit is unreachable. Add capacity rather than pushing guests out one at a time.

**5. Fences, dead ends and tight corners.** A fence line that creates a pocket with no exit will collect guests permanently. So will a path that narrows to a single tile at a choke point.

**6. Staff, not guests.** Patch 1.0.119 fixed staff getting stuck and teleporting; 1.0.63 fixed staff stuck in break rooms; 1.0.91 fixed cleaners trapped inside a 3-star trash bin. If your problem is that nothing is being cleaned or restocked, the stuck entity is your staff, not your visitors — start with [Staff Management](/guides/staff-management-guide).

## What the patches already fixed

Before you rebuild anything, check your build number. CayPlay has shipped several rounds of stuck-entity fixes:

| Patch | Date | Stuck-related fix |
|---|---|---|
| 1.0.63 | 2026-08-18 | Guests stuck or injured outside park limits; staff stuck in break rooms; attractions reviewed for guest-stuck issues |
| 1.0.91 | 2026-09-11 | Cleaners stuck inside the 3-star trash bin; guests stuck in the 5-star wellness slide and pirate diving board |
| 1.0.119 | 2026-10-23 | Staff getting stuck and teleporting in some situations |

If you are still seeing the exact symptom a patch claims to fix, that is worth reporting. The developers have asked players to send save files to **support@cayplay.com** so they can reproduce the specific park, and a developer has publicly confirmed they were working on stuck-visitor fixes. A save file is far more useful to them than a description.

## Build so it stops happening

Most stuck guests are created by layout, not by code. Six rules cover the majority of cases:

1. **Keep walkways two tiles wide minimum**, and never let a main route pinch to one tile. Choke points are where crowds deadlock.
2. **No dead ends.** Every path should lead somewhere and loop back. A pocket beside a slide exit will fill with guests who cannot find the way out.
3. **Leave the slide exit clear.** Do not place bins, benches, plants or signage directly at the bottom of a slide. Guests arrive fast and pile up.
4. **Space queues out.** Two queues that merge into one walkway create a permanent jam at peak.
5. **Point bins at the path.** This is the single most-missed setting in the game — see the next section.
6. **Supervise water.** Lifeguards and life rings prevent the panicking-guest cascade that blocks boards.

If you are mid-park and cannot rebuild, expand outward rather than inward: adding a parallel route around a choke point costs less than demolishing the zone and usually clears the jam the same day.

## Trash bins: the setting that quietly blocks guests

Bins cause two different problems, and only one of them is about litter.

The bin has a **facing arrow** and a **yellow range circle**. The arrow sets the side guests approach from — it should point at the path, not at a wall, a slide skirt, or a decorative prop. The circle decides whether a guest will walk to the bin at all; guests outside it simply will not bother. A bin tucked behind a statue technically exists and still fails.

Practical placement:

- Overlap the yellow circle with **queues, pool exits, food lines and lounge clusters** — the places where litter is actually generated.
- Put bins along the walking route, not in a corner of the zone.
- Fill trash bags completely before disposing of them. Partial bags burn supply budget and add trips.
- Put supply closets near wet zones so cleaners are not walking the length of the park between jobs.

No numeric radius for the yellow circle is published anywhere official, so treat any exact figure you see quoted as **[Unconfirmed]**. Judge it visually in build mode.

## Quick triage checklist

Work down this list in order — it resolves most cases at step 2 or 3:

1. Is it one guest or a cluster? One guest: push. A cluster: find the obstruction.
2. Is the stuck entity a **guest** or a **staff member**? Staff stuck means cleaning and restocking stop, which looks like a guest problem from a distance.
3. Is the game on the latest patch? 1.0.63, 1.0.91 and 1.0.119 all shipped stuck-entity fixes.
4. Is the location a known hotspot — slide exit, diving board, toilet block, dead end?
5. Does the bin at that spot face the path, and does its circle cover the queue?
6. Still reproducible on a current build? Send the save to support@cayplay.com.

One last distinction worth keeping straight: a stuck guest is a physics and pathing symptom. A park full of unhappy guests who move around normally is a happiness problem with a different set of causes — ticket pricing, empty pools, injuries, staffing. Fixing the wrong one wastes a day, and at four and five stars a day is expensive.

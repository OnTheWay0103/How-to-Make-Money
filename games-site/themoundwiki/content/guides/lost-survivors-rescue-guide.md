---
title: "The Mound Lost Survivors Not Showing? How Spawns, Rescue and Host Progress Work"
description: "Carried a survivor to the boat and nothing happened? In The Mound: Omen of Cthulhu the rescue only counts when the destination carried a survivor marker and the host extracts them. Here is how spawns work, where to look, and why a saved survivor can still vanish."
category: "Guides"
version: "1.0"
updated: "2026-10-25"
keywords:
  - "the mound lost survivors"
  - "the mound survivor not showing"
  - "the mound how to find survivors"
  - "the mound rescue survivor"
  - "the mound survivor marker"
  - "the mound playable characters unlock"
  - "the mound woodcarver"
related:
  - characters-classes
  - patron-saints-guide
  - maps-locations-guide
  - contracts-guide
  - extraction-guide
  - progress-save-recovery-guide
sources:
  - tier: "Official"
    title: "Patch 1.02 - Block Ability & Hotfixes"
    url: "https://store.steampowered.com/news/app/2569760/view/1839676055881833"
    date: "2026-07-29"
    text: "The only official line on the rescue mechanic: 'Rescuing a character in the mainland means a contract is successful regardless of whether or not the treasure was returned.' It establishes that a rescue is a mission outcome in its own right, but does not describe spawns, markers or unlock rules."
  - tier: "Official"
    title: "Patch 1.01 - Post Launch Hotfixes"
    url: "https://store.steampowered.com/news/app/2569760/view/1838407329269270"
    date: "2026-07-21"
    text: "Notes that the Saints shop was moved: 'Modified the Saints shop so these are no longer bought at the woodshop. Saints are now equipped for a smaller cost at the ox wagon before an expedition.' The woodshop NPC is the survivor players call the woodcarver/woodworker, which is why some survivors change ship services rather than the roster."
  - tier: "Community"
    title: "Reddit — 'How many lost survivors?' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w19ecv/how_many_lost_survivors/"
    date: "2026-08-29"
    text: "Player reports seeing no survivor icons 'for some time' despite hosting and choosing the maps, and asks how many exist. Replies say some survivors are not playable and only provide ship buffs, and that the seven-character achievement comes from the playable ones. Another reply states flatly: 'There are no survivor icons on anything, and haven't been for some time.'"
  - tier: "Community"
    title: "Reddit — 'Finding lost survivors' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vagweh/finding_lost_survivors/"
    date: "2026-07-30"
    text: "Player cannot find the second survivor in the 'Near the Mound' zone even with the Slave Finder. The key reply: 'The blimps on the map before selecting where to land for your contract will tell you if there's a lost survivor present, if you don't have that modifier showing then the lost survivor will never appear.' Another reply says survivors eventually walk up to you, and suggests making noise and taking your time."
  - tier: "Community"
    title: "Reddit — 'How many survivors are there?' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1ve0kxt/how_many_survivors_are_there/"
    date: "2026-08-03"
    text: "Player has met seven different survivors, two of whom became playable, and asks whether more exist. The thread treats survivor encounters as random and no authoritative total is produced."
  - tier: "Community"
    title: "Reddit — 'Rescued survivors join roster/crew' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1uyb18t/rescued_survivors_join_rostercrew/"
    date: "2026-07-16"
    text: "The first rescued survivor became a playable character; the player has since unlocked 'a woodworker for the ship and another playable character'. Establishes the two outcomes: roster unlocks and ship NPCs."
  - tier: "Community"
    title: "Reddit — 'What happened to this npc?' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vlct3a/what_happened_to_this_npc/"
    date: "2026-08-11"
    text: "Player carried an NPC across the map to the boat, extracted normally, and the NPC never appeared on the ship. Replies point at host ownership: 'Were you on someone else's host? Rescued survivors don't carry over. And yes, they will eventually appear again.' Another reply: 'If you find new survivor, only host keeps him.'"
  - tier: "Community"
    title: "Reddit — 'why can't i find survivor' — r/TheMoundOmenofCthulhu"
    url: "https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w5wxqi/why_cant_i_find_survivor/"
    date: "2026-09-03"
    text: "Answers describe the icon rule: 'Survivors can only be found when you select the location that the survivor icon is currently on. If you select a location without a survivor icon then no survivor can be found.' A second reply asks 'Is there a survivor marker there? They move around.'"
  - tier: "Community"
    title: "Steam Community — Patch 1.04 Content Update comments"
    url: "https://steamcommunity.com/app/2569760/eventcomments/586184554739645190"
    date: "2026-09-01 (indexed; direct fetch blocked 2026-10-25)"
    text: "A player reports 'Twice we carried the Priest to the exit and it never let us save him. Presumably because he wasn't on the wagon, which had totally disappeared from the level.' A reply argues that host-side state causes many of these failures. Read through search-index snippets only: steamcommunity.com was unreachable from this machine, so this is quoted, not re-verified on-page."
---

# The Mound Lost Survivors Not Showing? How Spawns, Rescue and Host Progress Work

> **Last verified: October 25, 2026.** Current build: **Patch 1.06** (October 5, 2026).

You found a survivor, carried them across the map, extracted — and the ship has no new face on it. Or you have run a dozen expeditions and never seen a survivor at all.

Both complaints are common, and neither is a random bug. *The Mound: Omen of Cthulhu* decides whether a survivor exists **before you land**, and it credits the rescue to **one player's save**. Miss either rule and the rescue silently does nothing.

---

## The short answer

| Symptom | Cause | What to do |
|---|---|---|
| Never see a survivor | Destination had no survivor marker | Pick a destination that shows the survivor marker; respawning the same contract does nothing |
| Found one, could not carry it | Downed survivors must be picked up and hauled | Carry them to the ox cart / boat; do not leave them at the exit |
| Carried one out, no unlock | You were not the host | The host must be the one holding the save |
| Survivor vanished after a session | Progress is per-save, not per-squad | Only the hosting player's progress is expected to persist |
| Icon disappeared for several runs | Survivors rotate between destinations | Check the destination screen each contract |

---

## 1. The spawn is decided at destination selection

The single most useful community answer, repeated in different words across three threads: **a survivor can only appear on a destination that was flagged as containing one.**

> "The blimps on the map before selecting where to land for your contract will tell you if there's a lost survivor present. If you don't have that modifier showing then the lost survivor will never appear." — [Reddit, July 30, 2026](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vagweh/finding_lost_survivors/)

A later thread describes the same thing as an icon:

> "Survivors can only be found when you select the location that the survivor icon is currently on. If you select a location without a survivor icon then no survivor can be found." — [Reddit, September 3, 2026](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w5wxqi/why_cant_i_find_survivor/)

The exact visual is described inconsistently — one player calls it a blimp, another an icon, a third a black silhouette above the map selection with the line *"A survivor has been spotted in this area"*. Check the destination screen for any survivor indicator before you commit. The marker **moves between destinations**, so a zone that had one yesterday may not have one today.

If the indicator is missing, the correct move is to take a different contract, not to search harder. No marker means no survivor, regardless of how long you comb the jungle.

---

## 2. Finding the survivor once you are on the ground

Players report two reliable patterns:

- **They come to you.** Several replies say survivors eventually walk up to the squad, especially if you make noise and spend time on the map instead of rushing the objective.
- **They spawn corrupted.** Some survivors are hostile on first contact — described as human-looking enemies that flee when low on health, or as a figure that stalks the squad at the edge of sight. Subduing them is part of the rescue, not a sign that you found the wrong NPC.

If you have unlocked the **Slave Finder** occult tool, use it. A player describes it as revealing *"all slaves of Tulu/Yig including lost survivors and corrupted friends"*, at the cost of a small amount of noise ([Reddit, August 10, 2026](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vk2fwi/are_we_playing_the_game_wrong/p2reair/)).

---

## 3. Carrying them out

A rescue is not complete when the survivor stops moving. You have to **pick them up and carry them to extraction**, the same way you haul treasure and logbooks.

Patch 1.02 made the payoff official: *"Rescuing a character in the mainland means a contract is successful regardless of whether or not the treasure was returned."* In other words, a rescue counts as the mission's success condition even if you leave the loot behind — but only once the survivor is actually extracted.

The failure mode to avoid: leaving the survivor at the boat ramp or the exit trigger and assuming the game will register them. A Steam Community report describes carrying a Priest to the exit twice and never being allowed to save him *"presumably because he wasn't on the wagon, which had totally disappeared from the level."* If the cart has wandered off, bring the survivor to the cart rather than waiting for the cart to come back.

---

## 4. Host progress: the part that eats rescues

This is the most repeated explanation for "I saved them and nothing happened."

> "Were you on someone else's host? Rescued survivors don't carry over. And yes, they will eventually appear again." — [Reddit, August 11, 2026](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vlct3a/what_happened_to_this_npc/)

> "If you find new survivor, only host keeps him." — same thread

The working rule is that **the host's save records the rescue; clients do not**. If you play in a friend's lobby, expect the unlock on their account, not yours. The survivor is not gone forever — they can reappear on a later destination.

This is community-reported behaviour, not an official statement, and there is at least one dissenting report: a player said they collected all their survivors while playing in lobbies they did not host **[Unconfirmed]**. Treat the host rule as the default expectation and verify on your own save rather than assuming a client rescue counted.

---

## 5. What each survivor actually unlocks

Not every rescue adds a character to the roster. Players describe three outcomes:

| Outcome | Example | Evidence |
|---|---|---|
| **Playable character** | First rescue became selectable immediately | [July 16 thread](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1uyb18t/rescued_survivors_join_rostercrew/) |
| **Ship NPC / service** | A woodworker added to the ship | Same thread |
| **Ship buff only** | Survivors described as providing buffs rather than a roster slot | [August 29 thread](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w19ecv/how_many_lost_survivors/) |

The woodworker is the one that changes how another system works: the Saints service was moved off the woodshop in Patch 1.01, and players link the woodcarver survivor to unlocking Saint carving fully. If a survivor seems to "do nothing", check the ship for a new NPC or service before concluding the rescue failed.

---

## 6. How many survivors are there?

There is no official total, and the community numbers do not agree. One player had met **seven** survivors with **two** playable; another described ending up with **six characters overall**; another said *"two are rescuable, two are from DLC"* while replying to someone holding an achievement for unlocking seven. The achievement itself is reported as *"Unlock 7 playable characters"*.

Every count in this section is **[Unconfirmed]**. What is consistent: some survivors are playable, some are ship crew, and at least two are tied to the Deluxe Edition's Fortune Hunters pack rather than to mainland rescues. Do not treat any specific total as a checklist.

---

## FAQ

**I carried the survivor to the boat and got nothing. What went wrong?**
Check two things in order: whether your destination actually showed a survivor marker, and whether you were the host. A client-side rescue is the most common explanation for a clean extraction that produces no unlock.

**Will the survivor I missed appear again?**
Yes, per multiple replies — survivors rotate between destinations. Keep checking the destination screen rather than replaying the same contract.

**Does rescuing a survivor complete the contract?**
Yes. Patch 1.02 states that rescuing a character counts as a successful contract even if you did not bring the treasure back.

---

## Related Guides

- [Characters & Classes](/guides/characters-classes) — the roster and what a survivor adds
- [Patron Saints Guide](/guides/patron-saints-guide) — the service the woodcarver unlocks
- [Maps & Navigation](/guides/maps-locations-guide) — reading the destination screen
- [Contracts Guide](/guides/contracts-guide) — how mission success is scored
- [Extraction Guide](/guides/extraction-guide) — getting cargo and bodies back to the cart
- [Progress & Save Recovery](/guides/progress-save-recovery-guide) — when an unlock does not stick

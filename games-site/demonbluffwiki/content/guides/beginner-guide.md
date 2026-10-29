---
title: "Demon Bluff Beginner Guide: How a Run Actually Works"
description: "New to Demon Bluff? Learn the reveal-and-execute loop, why 10 HP is a budget, how many cards buy you a night, and the mistakes that end runs early."
category: "Beginner"
version: "Demo build (2026-10-29)"
updated: "2026-10-29"
date: "2026-10-29"
keywords:
  - "demon bluff guide"
  - "demon bluff gameplay"
  - "demon bluff how to play"
  - "demon bluff beginner guide"
  - "demon bluff tips"
  - "demon bluff game"
related:
  - "characters-list"
  - "ability-order"
  - "release-date-and-platforms"
  - "demo-and-ascension"
  - "unlocks-and-skins"
sources:
  - tier: "Official"
    title: "Demon Bluff — Steam store page"
    url: "https://store.steampowered.com/app/3522600/"
    date: "2026-10-29 (accessed)"
    text: "Defines the loop in the studio's own words: 'investigate a corrupted village, gather information from each character, and piece together the truth to uncover and slay every demon in hiding'. Also confirms that multiple villages are saved in a single run with an expanding randomised deck."
  - tier: "Community"
    title: "Demon Bluff Wiki — Game Modes"
    url: "https://demonbluff.wiki.gg/wiki/Game_Modes"
    date: "2026-10-29 (accessed)"
    text: "Source for the economy described here: 7–12 villages per Ascension level, 4 hearts per level, 10 HP per village, a typical innocent execution costing 5 HP, and 0 HP ending the round at the cost of one heart. Also documents the Standard-mode score formula and the Endless unlock at Ascension 4."
  - tier: "Community"
    title: "Demon Bluff Wiki — Night"
    url: "https://demonbluff.wiki.gg/wiki/Night"
    date: "2026-10-29 (accessed)"
    text: "'When you reveal a card, the clock ticks. After 4 ticks - the night falls.' The page also notes the Night cycle currently only appears in rounds containing Lilis or Lycanthrope, and that it continues even if the character who caused it dies."
  - tier: "Community"
    title: "Demon Bluff Wiki — Keywords"
    url: "https://demonbluff.wiki.gg/wiki/Keywords"
    date: "2026-10-29 (accessed)"
    text: "Definitions of Learn, Lie, Disguise, Corruption, Execute, Silenced and Register, plus the Suspicion order Demon > Minion > Outcast > Villager used throughout this guide."
---

# Demon Bluff Beginner Guide: How a Run Actually Works

Demon Bluff is a deduction game disguised as a card game. You reveal characters one at a time, each one gives you a statement, and some of those statements are lies. Your only weapon is an execution that costs 5 HP when you are wrong. Here is the loop, the HP budget, and the mistakes that end runs early.

Everything below is written against the public demo build of 27 May 2026, so exact numbers may move before launch.

## The loop in one paragraph

A village is a circle of facedown character cards. You reveal them one by one. Every reveal triggers that character's ability, which is almost always a piece of information: a distance, a direction, a role name, a count. Some cards are Evil and lie to you. You can execute a card you believe is Evil, and you win the village when every Demon in it is dead. If your HP hits 0, you lose the round and one of your four hearts. Lose all four and the village progress for that Ascension level restarts.

That is the entire game. Everything else — the 44 roles, the night cycle, the ascension ladder — is texture on top of that loop.

## Your HP is a budget, not a health bar

You start each village with **10 HP**. Executing an innocent character typically costs **5 HP**. That is the single most important number in the game: you can afford exactly one mistake per village, and the second one ends it.

The costs are not all identical, and knowing the exceptions is worth real wins:

| Action | HP cost |
|---|---|
| Execute an innocent (normal) | −5 |
| Execute a Drunk | −2 (three less than normal) |
| Execute a Drunk disguised as a Knight | −6 |
| Execute a corrupted Knight | −9 |
| Execute a Wretch with a Slayer | −5 |
| End the night with Lilis alive | −2 |
| End the night with a Werewolf alive | −1 |

Two of those rows are traps worth memorising. A **Knight** says "I cannot die", which reads like a safe execution — but if it is corrupted, killing it costs 9 HP and ends your village outright. A **Drunk** is the opposite: it is Evil-adjacent noise, always lies, and killing it costs only 2, which makes it the cheapest test in the game.

Hearts are the second layer. Four hearts per Ascension level. Running out of HP costs a heart, not the run — but losing all four resets your village progress for that level, which is a much bigger setback than a single bad village.

## Revealing is not free either

Reveals cost no HP, but they cost **time in the form of the night clock**. Every reveal advances the clock by one tick, and after four ticks the night falls if the round contains Lilis or Lycanthrope.

At night, several cards act: Lilis kills a random unrevealed character and deals 2 damage to you, a Werewolf deals 1 damage, and other characters with activated abilities may act again. The night cycle continues even if the character that caused it is dead, so killing Lilis does not stop the clock you already started.

Practical consequence: **the order you reveal in is a strategic decision**, not a formality. If you suspect a Lilis is in the deck, four reveals is your budget per night, and a reveal that gains you nothing still costs a quarter of that budget.

## What a claim can and cannot tell you

Every information card returns one of a small set of shapes:

- **Identity** — "learn a Good character and its role" (Medium), "learn 3 characters, only 1 is Evil" (Empress).
- **Distance** — "learn how far the nearest Evil is from me" (Hunter), "how far I am from the closest Corrupted character" (Bard).
- **Direction** — "clockwise or counter-clockwise" (Enlightened), "which side of the circle is more Evil" (Architect).
- **Count** — "how many of them are Evil" (Jester), "how many Evils are adjacent to each other" (Knitter).
- **Verdict** — "learn if they are lying" (Judge), "if Evil picked, execute it" (Slayer).
- **Half-truth** — "learn a role that's among them, and one that's not" (Dreamer).

Verdicts are worth the most because they point at a single card. Distance and direction are worth almost nothing alone and decisive in pairs: two distance claims from two different cards intersect into a small set of candidates, and that intersection is usually the answer.

Half-truths are the trap. A Dreamer tells you one real role and one fake role and does not say which is which. Written down, it looks like two leads. It is actually one lead and one piece of noise, and the noise half is designed to look attractive.

## Truth, lies, and the two exceptions

The base rule is clean: Villagers and Outcasts tell the truth, Minions and Demons lie. Then the game breaks it in exactly the way that matters.

- **Corruption** makes a Good character lie while keeping its alignment. Poisoner, Pooka and Plague Doctor all cause it. A corrupted Villager is on your side and feeding you false information.
- **Puppet** is Evil and does *not* lie. The wiki is explicit: Confessor and Puppet cannot lie even when disguised. So "this claim sounds honest" is not evidence of a Good card.
- **Wretch** registers as a Minion to every other card. Any read that says "Minion" may be describing a Good card.
- **Drunk** is Good, permanently corrupted and cannot be cured, so it lies forever.
- **Lycanthrope** is honest until night, then becomes an Evil Werewolf that lies.

If you take one habit from this guide, take this one: when a claim surprises you, first ask whether Corruption, Register or Disguise explains it before you conclude the card is Evil. Most beginner executions come from skipping that question.

## Standard mode, Endless and the ascension ladder

**Standard** is the base mode. A level asks you to save between 7 and 12 villages depending on your Ascension level, and cards can only be unlocked in Standard. Score comes from two sources: 50 points plus the number of unrevealed cards for each Evil kill, and 50 × Ascension level for finishing a round.

**Endless** unlocks after Ascension 5 for new players — the wiki body still says 4, but the July 2026 patch note (v0.762a) is newer. It is Standard with every character available and no ascension progression.

**Deckbuilding** is the mode where you draft your own deck, then take it into a multi-part run.

The ascension ladder is the real difficulty curve, and it raises village count as well as the card pool. Do not read an early clean run as mastery — the mode is designed so that the pool of available cards grows at the same time as the requirement does.

## Relics change the village before you act

A Relic is a passive item that "modifies the conditions of your Village when you start a round" — the studio's own definition from the May 2026 demo post. Nine are in the demo, more are planned for release, and they are not cosmetic: they rewrite the rules you just learned.

Two official examples are worth knowing because they invert normal play:

- **Grave Flame** — you lose health if you reveal the last four cards. Suddenly leaving cards face-down is not laziness, it is survival, and every information card you skip costs you a read.
- **Severed Horn** — the character in slot #1 always tells the truth. That is a free anchor, and the correct first move becomes working out what slot #1 is rather than revealing it blind.

That is the pattern: a Relic removes a rule you had started to rely on. When a run feels broken, check the Relic before you blame your read. In Endless a different random Relic activates each round; a variant called **Endless Advanced** did this deliberately but was disabled in patch v0.730, so do not expect it to be live.

## The action log

The game keeps a recap of what has happened — reveals, ability activations and kills — which the developers call the **Oracle Action** log. For a deduction game this is not a convenience feature, it is the evidence table. If you are tracking claims in your head you will drop one around the third village; the log will not.

Use it the way a detective uses a case file: after every execution decision, re-read the claims that pointed at the card you just killed. That is how you learn which ability shapes actually predict Evil rather than which ones sound confident.

## Four mistakes that end first runs

1. **Executing on a hunch instead of a verdict.** With 10 HP and a 5 HP mistake cost, one hunch is your entire budget. Wait for a Judge, a Slayer, or two intersecting distance reads.
2. **Ignoring the innocent-execution cost of a Knight.** A Knight is the most tempting kill on the board and the most expensive when corrupted.
3. **Forgetting the night clock.** Revealing four cards without a plan hands the board to Lilis and the Werewolf for free.
4. **Treating a truthful-sounding claim as Good.** Puppets are Evil and honest. This is the mistake the game is built to punish.

## Frequently asked

**How long is a Demon Bluff run?**
A village is a handful of reveals and usually one execution decision; a Standard level is 7–12 villages. Exact run length depends on Ascension level.

**Can I save mid-run?**
The Steam page lists Steam Cloud, so progress follows your account between machines. There is no separate mid-village save described anywhere in the official material.

**Is there a timer?**
No real-time timer. The only clock is the reveal counter that triggers night.

**Do I lose progress if I lose all four hearts?**
You lose the village progress for the current Ascension level, not your card collection. Card unlocks only happen in Standard mode, per the wiki.

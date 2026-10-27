---
site: mistfallhunterwiki
title: Explaining a game system without quoting numbers that will change
description: Systems explanations outlive patches; stat values do not. How to write mechanics pages that stay correct for months.
tags: [writing, content, games]
targetUrl: https://mistfallhunterwiki.vercel.app/guides/combat-mechanics-guide
anchorBrand: Mistfall Hunter Wiki
anchorLongtail: how combat works in Mistfall Hunter
angle: systems-writing
status: draft
devtoId:
devtoUrl:
publishedAt:
---

There are two kinds of game knowledge: how a system works, and how much it currently gives you.

The first survives patches. The second is wrong within weeks. Most mechanics pages mix them into the same sentences, which means the whole page has the lifetime of the shortest-lived number in it.

## Separate the durable from the volatile

A sentence like this is dead on arrival:

> The parry window is 180ms and reduces damage by 40%.

Three things changed the moment the developers touched the combat table: the window, the reduction, and the sentence's usefulness.

The durable version of the same knowledge:

> Parrying is timing-based and forgiving relative to a dodge: you can start it slightly late. It costs stamina, so a missed parry is worse than a missed dodge.

That version tells a player how to *think* about the choice. It will still be right after three balance passes. If you want to add the current numbers, put them in a separate, clearly marked block that you can re-verify without rewriting the argument.

## Use behaviours as evidence

Without numbers, you need something else to anchor claims. The best anchor is in-game behaviour that the reader can confirm in ten seconds:

- "the bar flashes before it empties" — a tell;
- "the second hit always lands slightly after the animation ends" — a timing quirk;
- "switching weapons resets the counter" — a state rule.

These are testable, and because they are qualitative they rarely change. They are also exactly what players cannot find in a wiki that only lists tables.

## Structure: system, then interaction, then values

1. **What the system is for.** The decision it makes the player take.
2. **How the parts interact.** What resets what, what stacks, what is exclusive.
3. **The current numbers**, in one dated block.

Readers who want the numbers find them in second. Readers who want to understand the system get an answer that will not expire.

## The honesty part

Where you are inferring rather than reading, say so. "This appears to be multiplicative — testing suggests the bonus applies after the base" is more useful than a confident claim you cannot support, because the reader can evaluate the reasoning instead of trusting the conclusion.

The [how combat works in Mistfall Hunter](https://mistfallhunterwiki.vercel.app/guides/combat-mechanics-guide) page on [Mistfall Hunter Wiki](https://mistfallhunterwiki.vercel.app) is written to that split — behaviour first, values in a dated block — because a mechanics page that expires every patch is a mechanics page nobody bookmarks.

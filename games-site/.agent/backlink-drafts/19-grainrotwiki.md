---
site: grainrotwiki
title: Upgrade math: when to show the table and when to show the rule
description: Players ask "is this upgrade worth it". A table of costs answers the question once. A rule answers it every time the player's situation changes.
tags: [content, writing, data]
targetUrl: https://grainrotwiki.vercel.app/guides/outpost-upgrade-guide
anchorBrand: Grain Rot Wiki
anchorLongtail: how the outpost upgrades work in Grain Rot
angle: upgrade-math
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Every progression game has the same page: a list of upgrades and what they cost.

It is easy to write and nearly useless, because the reader's question is never "what does upgrade 4 cost". It is "should I buy upgrade 4 now". Those are different questions, and only the second one involves the reader's actual situation — their current income, their next goal, and what they are giving up.

## The table answers the wrong question

A cost table is a fact sheet. It is worth having — it is the thing people search for verbatim — but it stops at the point where a decision starts.

The decision usually has one governing rule. In most progression systems it is something like:

> Upgrades that increase income compound; upgrades that increase storage do not. Buy income first, storage only when you are actually hitting the cap.

One sentence, and it answers dozens of specific situations, including ones the table cannot cover because the game does not expose them.

## How to find the rule

The rule is usually already visible in the numbers, if you look at the ratio rather than the value:

- compute what each upgrade returns per unit of cost;
- sort by that ratio;
- look for a breakpoint where the ordering changes.

If the ordering is stable, the rule is "buy in ratio order" and that is the whole guide. If it changes at some threshold — because storage starts mattering once your income exceeds your capacity — that threshold is the interesting part, and it is what readers cannot figure out themselves.

## Write both, in that order

The structure I use on these pages:

1. **The rule**, in a couple of sentences, at the top.
2. **The breakpoint**, if there is one — what changes, and how you know you have hit it.
3. **The table**, for lookup.
4. **The exceptions**, named honestly.

The table earns its place as reference; the rule earns its place as advice. A page with only the table gets read once. A page with the rule gets bookmarked.

## A caution about numbers

Costs change with patches. Ratios usually survive them. That is another argument for leading with the rule: when the numbers move, the prose still holds and only the table needs updating.

The [outpost upgrades in Grain Rot](https://grainrotwiki.vercel.app/guides/outpost-upgrade-guide) page on [Grain Rot Wiki](https://grainrotwiki.vercel.app) is written that way — rule first, breakpoint second, table third — because the reader arriving from search wants the answer, and the reader who stays wants to check it.

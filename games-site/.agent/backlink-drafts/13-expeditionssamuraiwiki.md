---
site: expeditionssamuraiwiki
title: Writing build guides without a build planner
description: Most games don't expose the formulas. That doesn't mean you can't write a useful build guide — it means you have to be explicit about what you know and how.
tags: [writing, content, seo]
targetUrl: https://expeditionssamuraiwiki.vercel.app/guides/best-builds-guide
anchorBrand: Expeditions: Samurai Wiki
anchorLongtail: the best builds in Expeditions: Samurai
angle: build-guides
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Some games ship a build planner: you plug in stats, it gives you a number. Writing a build guide there is arithmetic.

Most games do not. You have a game, some items, an intuition, and no way to compute what is optimal. This is the uncomfortable middle ground where most build guides quietly fall apart — they present conclusions with the confidence of a calculator while having none.

## Three kinds of claim, kept separate

The discipline that fixes this is to label what each sentence is:

1. **Measured.** "The tooltip says +18% attack speed." Verifiable, quote it.
2. **Inferred.** "Testing suggests the bonus is multiplicative, not additive." Say that it is a test result, and how you tested.
3. **Judgement.** "I would take survivability over damage here." Opinion, in the author's voice.

Most guides blur all three into a single confident register. Readers cannot tell which parts to trust, so they trust none of it — or, worse, trust the wrong parts.

## The practical workaround

Without formulas, you get evidence by holding the situation fixed and changing one thing:

- record the damage numbers before and after one item swap;
- note whether the difference is roughly the stat's value (additive) or much larger (multiplicative);
- repeat enough times that a rounding difference does not fool you.

That is slow, and it is the only honest path. It also produces something a build planner cannot: notes on *how the game actually behaves*, which is what readers search for when the planner's numbers do not match their experience.

## Structure the page around decisions

A build guide ordered by "build 1, build 2, build 3" is a list of answers. A guide ordered by decisions is a tool:

- **What are you optimising for?** Sustained damage, burst, survivability, resource economy.
- **What are the real breakpoints?** The thresholds where a stat stops being worth stacking.
- **What does each choice cost you?** Every point in one stat is a point not in another.

Readers who arrive with a specific character in mind can then walk the decisions themselves, which is more useful than copying a list that assumes a different playstyle.

## Say what you tested

The [best builds in Expeditions: Samurai](https://expeditionssamuraiwiki.vercel.app/guides/best-builds-guide) page on [Expeditions: Samurai Wiki](https://expeditionssamuraiwiki.vercel.app) is written that way, with the measured/inferred/judgement split kept visible. The payoff is not prestige — it is that when a patch changes a number, you know exactly which sections to revisit. Judgements usually survive; measurements do not.

A build guide that pretends to compute is wrong within one patch. A build guide that shows its reasoning stays useful, because the reader can re-run the reasoning on the new numbers.

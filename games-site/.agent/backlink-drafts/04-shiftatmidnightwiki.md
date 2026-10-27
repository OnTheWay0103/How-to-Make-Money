---
site: shiftatmidnightwiki
title: A 4,000-word walkthrough people can actually navigate
description: Long-form game guides fail for structural reasons, not writing reasons. Heading levels, anchor ids, and a "you are here" block fix most of it.
tags: [writing, seo, markdown]
targetUrl: https://shiftatmidnightwiki.vercel.app/guides/story-walkthrough
anchorBrand: Shift At Midnight Wiki
anchorLongtail: a full Shift At Midnight walkthrough
angle: long-form-structure
status: draft
devtoId:
devtoUrl:
publishedAt:
---

A walkthrough is read in one of two ways: linearly, by someone who just started, or by jumping, by someone stuck at hour six at 11pm.

Most walkthroughs are written for the first reader and then fail the second. That is not a writing failure. It is a structure failure, and it is fixable with headings.

## The jump reader is the majority

Linear readers read once. Jump readers arrive from search, from a Reddit answer, or from a bookmark — repeatedly. They do not want your intro, your spoiler warning, or the previous six chapters. They want the part they are stuck on.

Everything about the page structure should assume that. In practice, three things:

**One H1, and it is the page title.** Not "Chapter 1". Screen readers, search engines and your own table of contents all use the heading outline; a second H1 resets it.

**H2 per major beat, H3 per sub-beat, and never skip a level.** A jump reader scans the H2s, finds the beat they are in, then scans the H3s. If your H3s hang off an H2 three levels up, that scan fails and they bounce.

**Stable anchor ids.** Heading slugs change when you rename a heading. If a link to `#the-basement` is out there, renaming that section silently breaks it. On a static site you can pin the id explicitly instead of trusting the slugger.

## The "you are here" block

The single highest-value element in a long walkthrough is a short block at the top listing every section, each with a one-line description of the situation it covers:

```markdown
- [Before the first night](#before-the-first-night) — controls, what to do with your first hour
- [The basement](#the-basement) — what to bring, what you can skip
- [The ending branch](#the-ending-branch) — the point of no return
```

Not a table of contents generated from headings. A list of *situations*. The reader is not looking for "Section 7", they are looking for "the bit with the basement".

Two rules for this block: keep the descriptions concrete, and order it the way the player experiences it, not the way you wrote it.

## Splitting the page

There is a temptation to paginate: one page per chapter, connected with next/prev links. I have gone both ways. Pagination is better for very long content (10k+ words) and for pages that target distinct search intents. It is worse when each part is too thin to stand alone, because you end up with six pages that each answer a fragment.

The test I use: **would someone search for this section on its own?** If yes, it deserves a page. If no, it belongs in the long page — where the "you are here" block does the navigation for free.

The [Shift At Midnight walkthrough](https://shiftatmidnightwiki.vercel.app/guides/story-walkthrough) on [Shift At Midnight Wiki](https://shiftatmidnightwiki.vercel.app) is deliberately one long page for exactly this reason: the sections are steps in sequence, not separate questions. A reader who searched for one of them still lands in the right place, because the anchors are stable and the block at the top names the situation.

## Length is not the metric

A 4,000-word walkthrough is not better than a 1,500-word one. It is better only if every section earns its place by being the answer to a moment where the reader is stuck.

The discipline that follows: write the section, then ask what the reader does in the next sixty seconds. If the answer is "nothing different", cut it. That pruning is what keeps a long page from becoming a long page nobody finishes.

---
site: relicfirstguardianwiki
title: Reference pages rot differently from guides
description: A weapons list is not a guide. It has no argument and no ending, which means the usual "is this still good?" instinct does not apply — and the maintenance rules are different.
tags: [content, seo, markdown]
targetUrl: https://relicfirstguardianwiki.vercel.app/guides/weapons-guide
anchorBrand: The Relic: First Guardian Wiki
anchorLongtail: the full weapon list in The Relic: First Guardian
angle: reference-pages
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Most content advice assumes the article: an intro, an argument, a conclusion. Reference pages break all of it. A weapons list has no argument. It has no ending. Nobody reads it front to back.

That changes both how you write it and how it fails.

## How reference pages fail

Guides fail by becoming wrong. Reference pages fail in two subtler ways:

1. **Incompleteness.** Someone adds a weapon to the game; the page does not get a row. There is no "wrong" sentence to notice — just an absence.
2. **Inconsistency.** Half the rows were written in one pass, half in another, and the columns do not mean the same thing anymore.

Neither shows up as an error. Both are visible to readers within seconds, and both destroy trust faster than a typo.

## The two rules that follow

**One schema, filled completely.** Every entry has the same fields, and an empty field is visible. If a weapon's source is unknown, write "unknown" — do not leave the cell out and do not quietly skip the row. A page with a visible gap is honest; a page with a missing row is wrong.

**Completeness is a checklist, not a memory.** Keep a count. If the game has N weapons and your page has N-3, that is a task. This is the one place where a script genuinely helps: count the entries, compare against the number the game shows, report the difference.

```js
const rows = page.enemies ?? [];
console.log(`${rows.length} entries`); // track this number in a status line
```

Cheap, and it turns "did I miss anything?" into a comparison.

## Design for scanning, not reading

The reader arrives with a specific question: *is this weapon good, and where do I get it?* Two columns carry that. Everything else is context.

So the order matters more than the prose:

- name and the one defining stat first;
- acquisition second — this is the most-searched field on the page;
- everything else after, grouped so the eye can skip it.

And keep the per-entry note to one line. A paragraph per weapon feels thorough and is actually unreadable; nobody reads forty paragraphs to compare four items.

## Keep the version

Reference pages go stale silently, so they need the same discipline as a guide: a version stamp and a "last verified" date. When the game patches, the number of entries is the first thing to check, and then the specific stats that changed.

The [full weapon list in The Relic: First Guardian](https://relicfirstguardianwiki.vercel.app/guides/weapons-guide) on [The Relic: First Guardian Wiki](https://relicfirstguardianwiki.vercel.app) is maintained on exactly that principle: complete before detailed, acquisition before analysis, and a count that has to add up.

The mental shift is the whole thing. A guide is judged by whether it is right. A reference page is judged by whether it is *all there* — and "all there" is a number you can check.

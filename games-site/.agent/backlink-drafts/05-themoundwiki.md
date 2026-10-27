---
site: themoundwiki
title: Tables in Markdown don't scale: a small data layer for content sites
description: When a guide becomes 60 rows of stats, Markdown tables stop being the right tool. Here is the smallest data layer that keeps editing pleasant and pages consistent.
tags: [markdown, nextjs, webdev]
targetUrl: https://themoundwiki.vercel.app/guides/enemy-bestiary
anchorBrand: The Mound Wiki
anchorLongtail: a full enemy list for The Mound
angle: tabular-content
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Markdown tables are wonderful for six rows and a nightmare for sixty.

Alignment breaks the moment one cell is long. There is no sorting, no filtering, no way to reuse a row on two pages. And every edit is a chance to drop a pipe and silently mangle a column — nothing validates a table.

I hit this writing an enemy list. Every enemy has the same eight-ish attributes, and there are enough of them that the table stopped fitting on a screen and started being maintained by hand with regex.

## Three options, honestly compared

**1. Keep it in Markdown.** Zero tooling, works everywhere, breaks at scale. Fine up to roughly 15 rows.

**2. Put the data in the frontmatter.** Surprisingly good:

```yaml
enemies:
  - name: Crypt Crawler
    hp: 240
    weakTo: fire
    drops: [bone shard, old coin]
  - name: Bell Warden
    hp: 880
    weakTo: lightning
    drops: [bell fragment]
```

The page stays a single file, the table is generated from structured data, and a typo in a field name fails loudly instead of producing a misaligned column. Editing is still plain text in the same file you are already editing.

**3. Put the data in its own JSON/YAML file.** Best when the same rows need to appear on several pages, or when a script (not a person) is the main producer.

For a content site, I default to option 2 and move to option 3 only when a second page needs the same rows. That keeps the cost proportional.

## The renderer is twenty lines

Whichever option you pick, the point is the same: the table is *rendered from data*, and the page does not contain pipes:

```js
function StatsTable({ rows }) {
  return (
    <table>
      <thead>
        <tr><th>Enemy</th><th>HP</th><th>Weak to</th><th>Drops</th></tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td>{r.name}</td>
            <td>{r.hp}</td>
            <td>{r.weakTo}</td>
            <td>{r.drops.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

Now a missing field is a visible gap, not a shifted column. And the sort order is a `.sort()` call instead of manual reordering after every addition.

## What this buys you beyond sanity

- **Consistency across pages.** Every stats table on the site renders the same way, which matters more than it sounds: readers compare pages, and inconsistent columns are the fastest way to look untrustworthy.
- **The ability to answer questions about your own content.** How many enemies are weak to fire? That is a filter over an array, not an afternoon with a table.
- **A cheap path to better markup.** Once rows are data, emitting structured data or adding a filter box is a small change rather than a rewrite.

The [enemy list for The Mound](https://themoundwiki.vercel.app/guides/enemy-bestiary) on [The Mound Wiki](https://themoundwiki.vercel.app) is the page that convinced me: the content was fine, the medium was the problem. Moving the rows out of the table and into the frontmatter took about an hour and made every later addition trivial.

Markdown is still the right format for the prose. It was never the right format for the data hiding inside the prose.

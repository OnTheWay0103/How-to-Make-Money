---
site: waterparksimulatorwiki
title: The page nobody links to: finding orphan pages in a small content site
description: A 20-page site can still have orphans. Here is the script I run to find pages that exist, rank for nothing, and are linked from nowhere.
tags: [seo, webdev, javascript]
targetUrl: https://waterparksimulatorwiki.vercel.app/guides/hidden-content-easter-eggs-guide
anchorBrand: Waterpark Simulator Wiki
anchorLongtail: where the hidden content in Waterpark Simulator is
angle: orphan-pages
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Every "SEO checklist" article tells you to build internal links. Almost none tell you how to find out that you failed.

I run a set of small game wiki sites. Most have 15–25 guide pages. Small enough that I assumed internal linking took care of itself: there is a `/guides` index, every page is on it, done.

Then I looked at the analytics, and one page had traffic while another page on the same site — similar length, published the same week — had almost none. Not because it was worse. Because nothing pointed at it except the index.

## Orphans are a graph problem, not a content problem

An orphan page is a page with no inbound internal links. It is not broken, it is not thin, it just sits there. Crawlers find it through the sitemap eventually; users basically never do.

The fix is mechanical if you can see the graph. So I wrote the dumbest possible version of that graph:

```js
// walk content/guides/*.md, collect [text](/guides/slug) links
const pages = fs.readdirSync('content/guides').filter(f => f.endsWith('.md'));
const inbound = new Map(pages.map(p => [p, 0]));

for (const p of pages) {
  const md = fs.readFileSync(`content/guides/${p}`, 'utf8');
  for (const m of md.matchAll(/\]\((\/guides\/[a-z0-9-]+)\)/g)) {
    const target = `${m[1].split('/').pop()}.md`;
    if (inbound.has(target)) inbound.set(target, inbound.get(target) + 1);
  }
}
```

Thirty lines, no dependencies, runs in under a second. It told me what I wanted to know: on a 20-page site, the bottom three pages had zero inbound links from other guides. Only the index pointed at them.

## The index is not a link

That is the part I got wrong for months. Being listed on `/guides` counts as a link in the technical sense, but it is a link from a page that exists only to list links. Every page gets exactly one of those. It carries about as much weight as a sitemap entry.

What actually moves a page is a contextual link from a page that is already getting traffic, with anchor text that describes the destination.

So the rule I now apply, per page:

- Every guide must have **at least two inbound links from other guides**, not just the index.
- The linking paragraph must make sense if you deleted the link — a reference, not a "see also".
- Anchor text is the page's actual subject, not "click here" and not the brand name over and over.

## What the fix looks like

Take a page like the one on [Waterpark Simulator Wiki](https://waterparksimulatorwiki.vercel.app) that covers [where the hidden content in Waterpark Simulator is](https://waterparksimulatorwiki.vercel.app/guides/hidden-content-easter-eggs-guide). A long, specific page — exactly the kind that never gets linked, because no other guide *needs* to mention it to make its own point.

The fix is not to edit that page. It is to find two existing pages where the link is genuinely useful, and add it inside a sentence that would still make sense without it:

- a page about early-game progression, mentioning it as "the list of things you can find without advancing the plot";
- a page about map or area content, mentioning it where the reader would otherwise have to go looking.

Two links, two different anchors, both inside a real sentence. The destination page does not change at all — only who points at it.

## What this does and does not do

To be clear about expectations: this does not make a page rank by itself. Internal links redistribute whatever authority the site already has; on a young domain there is not much to redistribute. What it does do is make sure the pages you spent the most time on are not the ones nobody can reach.

Two practical notes from doing this across a fleet:

1. **Run it after every batch of new pages.** Orphans are created by growth, not by neglect. New pages link outward to old ones far more often than the reverse.
2. **Do not automate the anchor text.** The script can tell you a page needs a link. Only you can write the sentence it belongs in — and a sentence that exists only to hold a link reads exactly like what it is.

The whole diagnostic is one file and a `Map`. The expensive part is writing the two paragraphs afterwards.

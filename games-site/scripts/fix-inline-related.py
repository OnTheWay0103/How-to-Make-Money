#!/usr/bin/env python3
"""Convert inline frontmatter `related: ["a","b"]` to block arrays.

The guide parser in lib/guides.ts only builds arrays from block-style
(`- item`) lines. An inline array is stored as a raw string, so
`Array.isArray(frontmatter.related)` is false and Related Guides renders
empty. This rewrites inline `related` into:

    related:
      - a
      - b

Usage:
    python3 scripts/fix-inline-related.py          # dry run
    python3 scripts/fix-inline-related.py --write  # apply
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INLINE = re.compile(r"^related:\s*\[(.*)\]\s*$")
SLUG = re.compile(r"^[a-z0-9][a-z0-9-]*$")


def parse_inline(body):
    """Split a comma list, honouring single/double quotes."""
    items, cur, quote, esc = [], "", None, False
    for ch in body:
        if esc:
            cur += ch
            esc = False
        elif ch == "\\":
            esc = True
        elif quote:
            if ch == quote:
                quote = None
            else:
                cur += ch
        elif ch in "'\"":
            quote = ch
        elif ch == ",":
            items.append(cur.strip())
            cur = ""
        else:
            cur += ch
    if cur.strip():
        items.append(cur.strip())
    return [i for i in items if i]


def frontmatter_bounds(text):
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    return 3, end


def main():
    write = "--write" in sys.argv
    changed, skipped, files = 0, 0, 0
    bad_values = []
    for site in sorted(os.listdir(ROOT)):
        guides = os.path.join(ROOT, site, "content", "guides")
        if not os.path.isdir(guides):
            continue
        for name in sorted(os.listdir(guides)):
            if not name.endswith(".md"):
                continue
            path = os.path.join(guides, name)
            text = open(path, encoding="utf-8").read()
            bounds = frontmatter_bounds(text)
            if bounds is None:
                continue
            start, end = bounds
            lines = text[start:end].split("\n")
            out, hit = [], False
            for line in lines:
                m = INLINE.match(line)
                if not m:
                    out.append(line)
                    continue
                values = parse_inline(m.group(1))
                if not values:
                    skipped += 1
                    out.append(line)
                    continue
                invalid = [v for v in values if not SLUG.match(v)]
                if invalid:
                    bad_values.append((os.path.relpath(path, ROOT), invalid))
                    out.append(line)
                    continue
                out.append("related:")
                out.extend("  - " + v for v in values)
                hit = True
                changed += len(values)
            if not hit:
                continue
            files += 1
            new_text = text[:start] + "\n".join(out) + text[end:]
            if write:
                open(path, "w", encoding="utf-8").write(new_text)

    print(f"{'WROTE' if write else 'DRY RUN'}: files={files} entries={changed} skipped_empty={skipped}")
    if bad_values:
        print(f"WARNING: {len(bad_values)} arrays left untouched (non-slug values):")
        for rel, vals in bad_values[:20]:
            print(" ", rel, vals)


if __name__ == "__main__":
    main()

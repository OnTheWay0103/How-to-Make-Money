/**
 * Dynamic sitemap generation (Next.js App Router).
 *
 * Produces a `/sitemap.xml` that includes:
 * - All static pages (/guides, /faq, /tier-list, …)
 * - Every dynamic guide page discovered from `content/guides/*.md`
 *
 * Priority tiers:
 *   - 1.0 — Homepage
 *   - 0.8 — Hub / listing pages (/guides, /faq, /tier-list)
 *   - 0.6 — Individual guide pages
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo-config';
import fs from 'fs';
import path from 'path';

/* ─── Static routes (known at build time) ────────────────────── */

interface StaticRoute {
  path: string;
  priority: number;
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: '', priority: 1.0 }, // Homepage
  { path: '/guides', priority: 0.8 },
  { path: '/faq', priority: 0.8 },
  { path: '/tier-list', priority: 0.8 },
];

/* ─── Dynamic guide routes ───────────────────────────────────── */

/**
 * Scan the `content/guides/` directory for Markdown files and
 * derive their URL slugs from the filenames (strip extension).
 */
function getGuideSlugs(): string[] {
  const guidesDir = path.join(process.cwd(), 'content', 'guides');

  try {
    const entries = fs.readdirSync(guidesDir);
    return entries
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''));
  } catch {
    // Directory may not exist yet — that's fine.
    return [];
  }
}

/* ─── Sitemap entry factory ──────────────────────────────────── */

function entry(pathname: string, priority: number): MetadataRoute.Sitemap[0] {
  return {
    url: `${SITE_CONFIG.url}${pathname}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  };
}

/* ─── Default export (required by Next.js) ───────────────────── */

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((r) => entry(r.path, r.priority));
  const guideEntries = getGuideSlugs().map((slug) =>
    entry(`/guides/${slug}`, 0.6),
  );

  return [...staticEntries, ...guideEntries];
}

/**
 * Dynamic robots.txt generation (Next.js App Router).
 *
 * Allows all well‑behaved crawlers to index the site while
 * excluding admin / internal routes.  Points to the sitemap.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/internal/'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}

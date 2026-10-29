'use client';

/**
 * Site-wide in-page banner (Adsterra zone `guide`, the Native Banner).
 *
 * It lives in the root layout rather than in the individual pages so that a
 * route added tomorrow renders the slot without anyone remembering to copy
 * markup into it. The guide route is the one exception: `GuideLayout` already
 * renders this same zone inline, so returning null there keeps a single
 * banner per page instead of two stacked ones.
 */

import { usePathname } from 'next/navigation';
import AdsterraSlot from '@/components/AdsterraSlot';
import { ADSTERRA_ZONES } from '@/lib/adsterra-zones';

export default function PageAdBanner() {
  const pathname = usePathname();
  if (pathname?.startsWith('/guides/')) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 pb-12">
      {ADSTERRA_ZONES.guide.map((zone) => (
        <AdsterraSlot key={`page-${zone.name}`} variant="inline" html={zone.html} />
      ))}
    </div>
  );
}

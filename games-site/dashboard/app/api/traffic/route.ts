export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { fetchDashboardData } from '@/lib/analytics';

/**
 * JSON view of the dashboard data.
 *
 * Scripts (scripts/sync-site-ledger.mjs, scripts/lifecycle-report.mjs) read this
 * instead of holding GA4 service-account credentials locally. Each site includes
 * `gaId`, which maps deterministically to a site directory in lib/seo-config.ts.
 */
export async function GET() {
  try {
    const data = await fetchDashboardData();
    return NextResponse.json(data, {
      headers: { 'cache-control': 'no-store' },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'unknown error' },
      { status: 500 },
    );
  }
}

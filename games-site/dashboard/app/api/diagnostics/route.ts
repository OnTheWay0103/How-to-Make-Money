import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: Record<string, unknown> = {};

  // 1. Check env vars
  results.env = {
    GA_CLIENT_EMAIL: process.env.GA_CLIENT_EMAIL
      ? `${process.env.GA_CLIENT_EMAIL.slice(0, 30)}…`
      : 'MISSING',
    GA_PRIVATE_KEY: process.env.GA_PRIVATE_KEY
      ? `present (${process.env.GA_PRIVATE_KEY.length} chars)`
      : 'MISSING',
  };

  // 2. Try to call GA Data API
  try {
    const { BetaAnalyticsDataClient } = await import(
      '@google-analytics/data'
    );

    const email = process.env.GA_CLIENT_EMAIL;
    const key = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!email || !key) {
      results.apiError = 'Missing credentials';
    } else {
      const client = new BetaAnalyticsDataClient({
        credentials: { client_email: email, private_key: key },
      });

      // Quick smoke test: run a minimal report
      const [resp] = await client.runReport({
        property: 'properties/568849855',
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        metrics: [{ name: 'screenPageViews' }],
        limit: 1,
      });

      results.apiResult = 'OK';
      results.apiSample = {
        rowCount: resp.rowCount,
        firstRow: resp.rows?.[0]?.metricValues?.[0]?.value ?? 'empty',
      };
    }
  } catch (err: unknown) {
    const e = err as Error;
    results.apiError = {
      message: e.message,
      code: (e as { code?: string }).code,
      details: (e as { details?: string }).details,
    };
  }

  // 3. Check GCP project info
  results.gcp = {
    projectId: process.env.GA_CLIENT_EMAIL?.split('@')[1]?.replace(
      '.iam.gserviceaccount.com',
      '',
    ),
  };

  return NextResponse.json(results, { status: 200 });
}

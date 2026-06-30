import { BetaAnalyticsDataClient } from '@google-analytics/data';

// ---------------------------------------------------------------------------
// Properties to monitor — add new GA4 measurement IDs here as sites go live.
// ---------------------------------------------------------------------------
const PROPERTIES: { name: string; propertyId: string }[] = [
  { name: 'WitchSpire Wiki', propertyId: 'properties/568849855' },
];

// GA4 Property: G-VJWN6CZ5PM (WitchSpire Wiki)
// Numeric ID: 568849855 (find in GA Admin → Property Settings → Property ID)
// Service Account: dashboard-ga-reader@midyear-psyche-501006-c0.iam.gserviceaccount.com

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface DashboardData {
  totals: {
    pageViews: number;
    pageViewsChange: number;
    users: number;
    usersChange: number;
    sessions: number;
    sessionsChange: number;
    avgEngagement: number;
    avgEngagementChange: number;
  };
  dailyTrend: { date: string; pageViews: number; sessions: number }[];
  topPages: { path: string; views: number; change: number }[];
}

// ---------------------------------------------------------------------------
// GA Data API client (lazy init)
// ---------------------------------------------------------------------------
let _client: BetaAnalyticsDataClient | null = null;

function getClient(): BetaAnalyticsDataClient {
  if (_client) return _client;

  const email = process.env.GA_CLIENT_EMAIL;
  const key = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !key) {
    throw new Error(
      'Missing GA_CLIENT_EMAIL or GA_PRIVATE_KEY environment variables.',
    );
  }

  _client = new BetaAnalyticsDataClient({
    credentials: { client_email: email, private_key: key },
  });

  return _client;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

// ---------------------------------------------------------------------------
// Fetchers
// ---------------------------------------------------------------------------

async function fetchTotals(propertyId: string): Promise<{
  pageViews: number;
  users: number;
  sessions: number;
  avgEngagement: number;
}> {
  const client = getClient();
  const [resp] = await client.runReport({
    property: propertyId,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'totalUsers' },
      { name: 'sessions' },
      { name: 'averageSessionDuration' },
    ],
  });

  const row = resp.rows?.[0];
  return {
    pageViews: parseInt(row?.metricValues?.[0]?.value ?? '0', 10),
    users: parseInt(row?.metricValues?.[1]?.value ?? '0', 10),
    sessions: parseInt(row?.metricValues?.[2]?.value ?? '0', 10),
    avgEngagement: parseFloat(row?.metricValues?.[3]?.value ?? '0'),
  };
}

async function fetchPreviousTotals(propertyId: string): Promise<{
  pageViews: number;
  users: number;
  sessions: number;
  avgEngagement: number;
}> {
  const client = getClient();
  const [resp] = await client.runReport({
    property: propertyId,
    dateRanges: [
      { startDate: '60daysAgo', endDate: '31daysAgo' },
    ],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'totalUsers' },
      { name: 'sessions' },
      { name: 'averageSessionDuration' },
    ],
  });

  const row = resp.rows?.[0];
  return {
    pageViews: parseInt(row?.metricValues?.[0]?.value ?? '0', 10),
    users: parseInt(row?.metricValues?.[1]?.value ?? '0', 10),
    sessions: parseInt(row?.metricValues?.[2]?.value ?? '0', 10),
    avgEngagement: parseFloat(row?.metricValues?.[3]?.value ?? '0'),
  };
}

async function fetchDailyTrend(
  propertyId: string,
): Promise<{ date: string; pageViews: number; sessions: number }[]> {
  const client = getClient();
  const [resp] = await client.runReport({
    property: propertyId,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'date' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }],
    orderBys: [{ dimension: { dimensionName: 'date' } }],
  });

  return (resp.rows ?? []).map((row) => ({
    date: (row.dimensionValues?.[0]?.value ?? '').replace(
      /^(\d{4})(\d{2})(\d{2})$/,
      '$2/$3',
    ),
    pageViews: parseInt(row.metricValues?.[0]?.value ?? '0', 10),
    sessions: parseInt(row.metricValues?.[1]?.value ?? '0', 10),
  }));
}

async function fetchTopPages(
  propertyId: string,
): Promise<{ path: string; views: number; change: number }[]> {
  const client = getClient();

  const [current, previous] = await Promise.all([
    client.runReport({
      property: propertyId,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    }),
    client.runReport({
      property: propertyId,
      dateRanges: [{ startDate: '60daysAgo', endDate: '31daysAgo' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    }),
  ]);

  const prevMap = new Map<string, number>();
  previous[0].rows?.forEach((row) => {
    const path = row.dimensionValues?.[0]?.value ?? '';
    prevMap.set(path, parseInt(row.metricValues?.[0]?.value ?? '0', 10));
  });

  return (current[0].rows ?? []).map((row) => {
    const path = row.dimensionValues?.[0]?.value ?? '';
    const views = parseInt(row.metricValues?.[0]?.value ?? '0', 10);
    const prev = prevMap.get(path) ?? 0;
    const change = prev > 0 ? Math.round(((views - prev) / prev) * 100) : 0;
    return { path, views, change };
  });
}

// ---------------------------------------------------------------------------
// Public API — aggregate across all properties
// ---------------------------------------------------------------------------
export async function fetchDashboardData(): Promise<DashboardData> {
  const primary = PROPERTIES[0]?.propertyId;
  if (!primary) throw new Error('No GA4 properties configured.');

  const [totals, previous, dailyTrend, topPages] = await Promise.all([
    fetchTotals(primary),
    fetchPreviousTotals(primary),
    fetchDailyTrend(primary),
    fetchTopPages(primary),
  ]);

  const pctChange = (curr: number, prev: number): number =>
    prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0;

  return {
    totals: {
      pageViews: totals.pageViews,
      pageViewsChange: pctChange(totals.pageViews, previous.pageViews),
      users: totals.users,
      usersChange: pctChange(totals.users, previous.users),
      sessions: totals.sessions,
      sessionsChange: pctChange(totals.sessions, previous.sessions),
      avgEngagement: totals.avgEngagement,
      avgEngagementChange: pctChange(
        totals.avgEngagement,
        previous.avgEngagement,
      ),
    },
    dailyTrend,
    topPages,
  };
}

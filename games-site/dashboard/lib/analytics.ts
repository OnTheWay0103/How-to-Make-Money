import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { SITES, type SiteConfig } from './sites';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SiteData {
  site: SiteConfig;
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

export interface DashboardData {
  sites: SiteData[];
  totals: {
    pageViews: number;
    users: number;
    sessions: number;
    avgEngagement: number;
  };
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

function pctChange(curr: number, prev: number): number {
  return prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0;
}

function propertyPath(id: string): string {
  return `properties/${id}`;
}

// ---------------------------------------------------------------------------
// Fetchers — unchanged, operate on a single property
// ---------------------------------------------------------------------------

async function fetchTotals(
  propertyId: string,
): Promise<SiteData['totals']> {
  const client = getClient();
  const property = propertyPath(propertyId);

  const [[current], [previous]] = await Promise.all([
    client.runReport({
      property,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' },
      ],
    }),
    client.runReport({
      property,
      dateRanges: [{ startDate: '60daysAgo', endDate: '31daysAgo' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' },
      ],
    }),
  ]);

  const row = current.rows?.[0];
  const prevRow = previous.rows?.[0];

  const pageViews = parseInt(row?.metricValues?.[0]?.value ?? '0', 10);
  const users = parseInt(row?.metricValues?.[1]?.value ?? '0', 10);
  const sessions = parseInt(row?.metricValues?.[2]?.value ?? '0', 10);
  const avgEngagement = parseFloat(row?.metricValues?.[3]?.value ?? '0');

  const prevPV = parseInt(prevRow?.metricValues?.[0]?.value ?? '0', 10);
  const prevUsers = parseInt(prevRow?.metricValues?.[1]?.value ?? '0', 10);
  const prevSessions = parseInt(prevRow?.metricValues?.[2]?.value ?? '0', 10);
  const prevEng = parseFloat(prevRow?.metricValues?.[3]?.value ?? '0');

  return {
    pageViews,
    pageViewsChange: pctChange(pageViews, prevPV),
    users,
    usersChange: pctChange(users, prevUsers),
    sessions,
    sessionsChange: pctChange(sessions, prevSessions),
    avgEngagement,
    avgEngagementChange: pctChange(avgEngagement, prevEng),
  };
}

async function fetchDailyTrend(
  propertyId: string,
): Promise<SiteData['dailyTrend']> {
  const client = getClient();
  const [resp] = await client.runReport({
    property: propertyPath(propertyId),
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
): Promise<SiteData['topPages']> {
  const client = getClient();
  const property = propertyPath(propertyId);

  const [current, previous] = await Promise.all([
    client.runReport({
      property,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    }),
    client.runReport({
      property,
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
// Per-site fetcher
// ---------------------------------------------------------------------------

async function fetchSiteData(site: SiteConfig): Promise<SiteData | null> {
  try {
    const [totals, dailyTrend, topPages] = await Promise.all([
      fetchTotals(site.propertyId),
      fetchDailyTrend(site.propertyId),
      fetchTopPages(site.propertyId),
    ]);
    return { site, totals, dailyTrend, topPages };
  } catch {
    // Silently skip sites that fail (e.g., SA not yet authorized)
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API — aggregate across all sites
// ---------------------------------------------------------------------------

export async function fetchDashboardData(): Promise<DashboardData> {
  const activeSites = SITES.filter(
    (s) => s.propertyId && s.propertyId !== 'REPLACE_WITH_PROPERTY_ID',
  );

  const results = await Promise.all(activeSites.map(fetchSiteData));
  const sites = results.filter((s): s is SiteData => s !== null);

  // Aggregate totals
  const totals = {
    pageViews: sites.reduce((sum, s) => sum + s.totals.pageViews, 0),
    users: sites.reduce((sum, s) => sum + s.totals.users, 0),
    sessions: sites.reduce((sum, s) => sum + s.totals.sessions, 0),
    avgEngagement: 0,
  };

  if (sites.length > 0) {
    totals.avgEngagement = Math.round(
      sites.reduce((sum, s) => sum + s.totals.avgEngagement, 0) / sites.length,
    );
  }

  return { sites, totals };
}

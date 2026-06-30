export const dynamic = 'force-dynamic';

import StatCard from '@/components/StatCard';
import TrafficChart from '@/components/TrafficChart';
import TopPagesTable from '@/components/TopPagesTable';
import { fetchDashboardData } from '@/lib/analytics';

export default async function DashboardPage() {
  const data = await fetchDashboardData().catch(() => null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Traffic Dashboard</h1>
        <p className="text-text-secondary mt-1">
          Real-time analytics across all your websites
        </p>
      </header>

      {data ? (
        <>
          {/* Stat Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              label="Page Views"
              value={data.totals.pageViews}
              change={data.totals.pageViewsChange}
              icon="👁"
            />
            <StatCard
              label="Users"
              value={data.totals.users}
              change={data.totals.usersChange}
              icon="👤"
            />
            <StatCard
              label="Sessions"
              value={data.totals.sessions}
              change={data.totals.sessionsChange}
              icon="📊"
            />
            <StatCard
              label="Avg. Engagement"
              value={data.totals.avgEngagement}
              change={data.totals.avgEngagementChange}
              icon="⏱"
              formatter="time"
            />
          </section>

          {/* Chart */}
          <section className="bg-bg-card rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">30-Day Page Views Trend</h2>
            <TrafficChart data={data.dailyTrend} />
          </section>

          {/* Top Pages */}
          <section className="bg-bg-card rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
            <TopPagesTable pages={data.topPages} />
          </section>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-bg-card rounded-xl p-12 text-center">
      <div className="text-5xl mb-4">📊</div>
      <h2 className="text-xl font-semibold mb-2">Connect Google Analytics</h2>
      <p className="text-text-secondary max-w-md mx-auto mb-6">
        Set up a Google Analytics Data API service account and add credentials
        to start monitoring your website traffic.
      </p>
      <div className="bg-bg-primary rounded-lg p-4 text-left text-sm font-mono text-text-secondary max-w-lg mx-auto">
        <p className="text-text-primary font-semibold mb-2">Quick setup:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create a service account at console.cloud.google.com</li>
          <li>Enable Google Analytics Data API</li>
          <li>Add service account email to your GA4 property</li>
          <li>Set GA_CLIENT_EMAIL and GA_PRIVATE_KEY env vars</li>
        </ol>
      </div>
    </div>
  );
}

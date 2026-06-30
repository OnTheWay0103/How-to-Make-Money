'use client';

import { useState } from 'react';
import type { DashboardData, SiteData } from '@/lib/analytics';
import StatCard from './StatCard';
import TrafficChart from './TrafficChart';
import TopPagesTable from './TopPagesTable';

export default function DashboardContent({ data }: { data: DashboardData }) {
  const { sites, totals } = data;
  const [selected, setSelected] = useState<string>('__all__');

  const active: SiteData | undefined =
    selected === '__all__' ? undefined : sites.find((s) => s.site.propertyId === selected);

  // Resolve what to display
  const displayTotals = active
    ? active.totals
    : {
        pageViews: totals.pageViews,
        pageViewsChange: 0,
        users: totals.users,
        usersChange: 0,
        sessions: totals.sessions,
        sessionsChange: 0,
        avgEngagement: totals.avgEngagement,
        avgEngagementChange: 0,
      };

  const displayTrend = active
    ? active.dailyTrend
    : aggregateTrends(sites);

  const displayTopPages = active
    ? active.topPages
    : aggregateTopPages(sites);

  return (
    <>
      {/* Site selector */}
      <nav className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setSelected('__all__')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selected === '__all__'
              ? 'bg-accent text-white'
              : 'bg-bg-card text-text-secondary hover:bg-bg-card-hover'
          }`}
        >
          All Sites
        </button>
        {sites.map((s) => (
          <button
            key={s.site.propertyId}
            onClick={() => setSelected(s.site.propertyId)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selected === s.site.propertyId
                ? 'bg-accent text-white'
                : 'bg-bg-card text-text-secondary hover:bg-bg-card-hover'
            }`}
          >
            {s.site.name}
          </button>
        ))}
      </nav>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Page Views"
          value={displayTotals.pageViews}
          change={displayTotals.pageViewsChange}
          icon="👁"
        />
        <StatCard
          label="Users"
          value={displayTotals.users}
          change={displayTotals.usersChange}
          icon="👤"
        />
        <StatCard
          label="Sessions"
          value={displayTotals.sessions}
          change={displayTotals.sessionsChange}
          icon="📊"
        />
        <StatCard
          label="Avg. Engagement"
          value={displayTotals.avgEngagement}
          change={displayTotals.avgEngagementChange}
          icon="⏱"
          formatter="time"
        />
      </section>

      {/* Per-site cards when "All Sites" is selected */}
      {selected === '__all__' && sites.length > 1 && (
        <section className="mb-8 space-y-4">
          <h2 className="text-lg font-semibold">By Site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sites.map((s) => (
              <div
                key={s.site.propertyId}
                className="bg-bg-card rounded-xl p-4 hover:bg-bg-card-hover transition-colors"
              >
                <div className="font-medium mb-2">{s.site.name}</div>
                <div className="grid grid-cols-2 gap-y-1 text-sm">
                  <span className="text-text-secondary">PV</span>
                  <span className="text-right tabular-nums font-mono">
                    {s.totals.pageViews.toLocaleString()}
                  </span>
                  <span className="text-text-secondary">Users</span>
                  <span className="text-right tabular-nums font-mono">
                    {s.totals.users.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chart */}
      <section className="bg-bg-card rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {active ? `${active.site.name} — 30-Day Trend` : '30-Day Page Views Trend'}
        </h2>
        <TrafficChart data={displayTrend} />
      </section>

      {/* Top Pages */}
      <section className="bg-bg-card rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
        <TopPagesTable pages={displayTopPages} />
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Aggregation helpers for "All Sites" view
// ---------------------------------------------------------------------------

function aggregateTrends(
  sites: SiteData[],
): { date: string; pageViews: number; sessions: number }[] {
  const map = new Map<string, { pageViews: number; sessions: number }>();
  for (const site of sites) {
    for (const d of site.dailyTrend) {
      const entry = map.get(d.date) || { pageViews: 0, sessions: 0 };
      entry.pageViews += d.pageViews;
      entry.sessions += d.sessions;
      map.set(d.date, entry);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, v]) => ({ date, ...v }));
}

function aggregateTopPages(
  sites: SiteData[],
): { path: string; views: number; change: number }[] {
  const map = new Map<string, number>();
  for (const site of sites) {
    for (const p of site.topPages) {
      map.set(p.path, (map.get(p.path) ?? 0) + p.views);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, views]) => ({ path, views, change: 0 }));
}

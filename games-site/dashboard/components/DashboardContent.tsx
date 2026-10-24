'use client';

import { useState } from 'react';
import type { DashboardData, SiteData } from '@/lib/analytics';
import SiteTable from './SiteTable';
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

      {/* Site table — 一行一站，同时作为站点选择器 */}
      <section className="bg-bg-card rounded-xl p-4 mb-8">
        <div className="flex items-baseline justify-between mb-1 px-2">
          <h2 className="text-lg font-semibold">
            {active ? active.site.name : 'All Sites'}
          </h2>
          <span className="text-xs text-text-secondary whitespace-nowrap">
            {sites.length} sites · 30 days
            <span className="hidden sm:inline"> · click a row to switch</span>
          </span>
        </div>
        <SiteTable
          sites={sites}
          totals={totals}
          selected={selected}
          onSelect={setSelected}
        />
      </section>

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

export const dynamic = 'force-dynamic';

import { fetchDashboardData } from '@/lib/analytics';
import DashboardContent from '@/components/DashboardContent';
import EmptyState from '@/components/EmptyState';

export default async function DashboardPage() {
  const data = await fetchDashboardData().catch(() => null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Traffic Dashboard</h1>
        <p className="text-text-secondary mt-1">
          Real-time analytics across all your websites
        </p>
      </header>

      {data && data.sites.length > 0 ? (
        <DashboardContent data={data} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

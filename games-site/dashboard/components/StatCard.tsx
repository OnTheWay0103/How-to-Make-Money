interface StatCardProps {
  label: string;
  value: number | string;
  change: number;
  icon: string;
  formatter?: 'number' | 'time';
}

function formatValue(value: number | string, formatter?: string): string {
  if (formatter === 'time' && typeof value === 'number') {
    const mins = Math.floor(value / 60);
    const secs = Math.round(value % 60);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  }
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  return value;
}

export default function StatCard({
  label,
  value,
  change,
  icon,
  formatter = 'number',
}: StatCardProps) {
  const isPositive = change > 0;
  const isNeutral = change === 0;

  return (
    <div className="bg-bg-card rounded-xl p-5 hover:bg-bg-card-hover transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        {!isNeutral && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              isPositive
                ? 'bg-success/10 text-success'
                : 'bg-danger/10 text-danger'
            }`}
          >
            {isPositive ? '+' : ''}
            {change}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold tracking-tight">
        {formatValue(value, formatter)}
      </div>
      <div className="text-text-secondary text-sm mt-1">{label}</div>
    </div>
  );
}

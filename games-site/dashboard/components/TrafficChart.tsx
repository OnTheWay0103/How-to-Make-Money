'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface DayData {
  date: string;
  pageViews: number;
  sessions: number;
}

export default function TrafficChart({ data }: { data: DayData[] }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="pvGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d2d5e" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12, fill: '#94a3b8' }}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fontSize: 12, fill: '#94a3b8' }}
          tickLine={false}
          axisLine={false}
          width={50}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1a1a2e',
            border: '1px solid #2d2d5e',
            borderRadius: '8px',
            color: '#e2e8f0',
          }}
        />
        <Area
          type="monotone"
          dataKey="pageViews"
          stroke="#6366f1"
          strokeWidth={2}
          fill="url(#pvGradient)"
          name="Page Views"
        />
        <Area
          type="monotone"
          dataKey="sessions"
          stroke="#22c55e"
          strokeWidth={1.5}
          fill="none"
          name="Sessions"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

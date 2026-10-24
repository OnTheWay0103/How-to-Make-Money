'use client';

import type { SiteData } from '@/lib/analytics';

interface Props {
  sites: SiteData[];
  totals: { pageViews: number; users: number; sessions: number };
  selected: string;
  onSelect: (propertyId: string) => void;
}

function ageDays(iso?: string): number | null {
  if (!iso) return null;
  const then = Date.parse(`${iso}T00:00:00Z`);
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}

export default function SiteTable({ sites, totals, selected, onSelect }: Props) {
  // 按 PV 排序，头部站排在最前；同 PV 时保持注册表顺序
  const rows = [...sites].sort((a, b) => b.totals.pageViews - a.totals.pageViews);

  return (
    <div className="max-h-[30rem] overflow-auto -mx-2">
      <table className="w-full table-fixed text-sm">
        <thead className="sticky top-0 z-10 bg-bg-card">
          <tr className="text-text-secondary text-left">
            <th className="py-2 pl-2 pr-1 font-medium w-8">#</th>
            <th className="py-2 px-2 font-medium">Site</th>
            <th className="py-2 px-2 font-medium w-32 hidden md:table-cell">建站</th>
            <th className="py-2 px-2 font-medium text-right w-20">PV</th>
            <th className="py-2 px-2 font-medium text-right w-20 hidden sm:table-cell">
              Users
            </th>
            <th className="py-2 pl-2 pr-2 font-medium text-right w-16 hidden md:table-cell">
              30d
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => onSelect('__all__')}
            className={`cursor-pointer border-t border-bg-card-hover transition-colors ${
              selected === '__all__'
                ? 'bg-accent/15'
                : 'hover:bg-bg-card-hover/40'
            }`}
          >
            <td className="py-1.5 pl-2 pr-1 text-text-secondary">—</td>
            <td className="py-1.5 px-2 font-medium">
              All Sites
              <span className="ml-2 text-xs text-text-secondary">
                {rows.length}
              </span>
            </td>
            <td className="py-1.5 px-2 hidden md:table-cell" />
            <td className="py-1.5 px-2 text-right tabular-nums font-mono">
              {totals.pageViews.toLocaleString()}
            </td>
            <td className="py-1.5 px-2 text-right tabular-nums font-mono hidden sm:table-cell">
              {totals.users.toLocaleString()}
            </td>
            <td className="py-1.5 pl-2 pr-2 hidden md:table-cell" />
          </tr>

          {rows.map((s, i) => {
            const active = selected === s.site.propertyId;
            return (
              <tr
                key={s.site.propertyId}
                onClick={() => onSelect(s.site.propertyId)}
                className={`cursor-pointer border-t border-bg-card-hover/50 transition-colors ${
                  active ? 'bg-accent/15' : 'hover:bg-bg-card-hover/40'
                }`}
              >
                <td className="py-1.5 pl-2 pr-1 text-text-secondary">{i + 1}</td>
                <td
                  className={`py-1.5 px-2 truncate ${
                    active ? 'text-accent-hover font-medium' : ''
                  }`}
                  title={s.site.name}
                >
                  {s.site.name}
                </td>
                <td className="py-1.5 px-2 hidden md:table-cell whitespace-nowrap">
                  {s.site.createdAt ? (
                    <span
                      className="text-xs text-text-secondary tabular-nums"
                      title={`建站 ${s.site.createdAt}，已运行 ${ageDays(s.site.createdAt)} 天`}
                    >
                      {s.site.createdAt}
                      <span className="ml-1.5 text-text-secondary/60">
                        {ageDays(s.site.createdAt)}d
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs text-text-secondary">—</span>
                  )}
                </td>
                <td className="py-1.5 px-2 text-right tabular-nums font-mono">
                  {s.totals.pageViews.toLocaleString()}
                </td>
                <td className="py-1.5 px-2 text-right tabular-nums font-mono text-text-secondary hidden sm:table-cell">
                  {s.totals.users.toLocaleString()}
                </td>
                <td className="py-1.5 pl-2 pr-2 text-right hidden md:table-cell">
                  <span
                    className={
                      s.totals.pageViewsChange > 0
                        ? 'text-success'
                        : s.totals.pageViewsChange < 0
                          ? 'text-danger'
                          : 'text-text-secondary'
                    }
                  >
                    {s.totals.pageViewsChange > 0 ? '+' : ''}
                    {s.totals.pageViewsChange}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

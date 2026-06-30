interface PageRow {
  path: string;
  views: number;
  change: number;
}

export default function TopPagesTable({ pages }: { pages: PageRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-bg-card-hover text-text-secondary text-left">
            <th className="pb-3 font-medium w-10">#</th>
            <th className="pb-3 font-medium">Page</th>
            <th className="pb-3 font-medium text-right">Views</th>
            <th className="pb-3 font-medium text-right w-24">Change</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page, i) => (
            <tr
              key={page.path}
              className="border-b border-bg-card-hover/50 hover:bg-bg-card-hover/30 transition-colors"
            >
              <td className="py-3 text-text-secondary">{i + 1}</td>
              <td className="py-3 font-mono text-sm max-w-[400px] truncate">
                {page.path}
              </td>
              <td className="py-3 text-right tabular-nums">
                {page.views.toLocaleString()}
              </td>
              <td className="py-3 text-right">
                <span
                  className={
                    page.change > 0
                      ? 'text-success'
                      : page.change < 0
                        ? 'text-danger'
                        : 'text-text-secondary'
                  }
                >
                  {page.change > 0 ? '+' : ''}
                  {page.change}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

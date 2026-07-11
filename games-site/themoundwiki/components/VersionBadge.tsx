export default function VersionBadge({
  version,
  updated,
}: {
  version: string;
  updated: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-400 border border-emerald-800">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        v{version}
      </span>
      <span className="text-xs text-gray-500">
        Updated: {updated}
      </span>
    </div>
  );
}

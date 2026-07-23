import Link from 'next/link';

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
  updated: string;
}

export default function GuideCard({ title, description, slug, category, updated }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="group block bg-[#1a1a3e] rounded-lg border border-gray-800/60 p-5 transition-all duration-200 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
    >
      {/* Category Tag */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded px-2 py-0.5">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-200 mb-2">
        {title}
      </h3>

      {/* Description (truncated to 2 lines) */}
      <p className="text-sm text-gray-400 line-clamp-2 mb-4">
        {description}
      </p>

      {/* Updated date */}
      <p className="text-xs text-gray-600">
        Updated: {updated}
      </p>
    </Link>
  );
}

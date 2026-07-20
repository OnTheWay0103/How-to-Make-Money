import Link from 'next/link';

interface RelatedGuide {
  title: string;
  slug: string;
}

export default function RelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  if (!guides || guides.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#2a2a5e]">
      <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block p-4 rounded-lg bg-[#1a1a3e] border border-[#2a2a5e] hover:border-amber-500/50 text-sm text-gray-300 hover:text-amber-400 transition-all"
          >
            {guide.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

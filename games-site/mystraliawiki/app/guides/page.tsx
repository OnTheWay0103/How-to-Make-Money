import { getAllGuides, getAllCategories } from '@/lib/guides';
import GuideCard from '@/components/GuideCard';
import { itemListSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Guides',
  description:
    'Complete Echoes of Mystralia guide collection — beginner tips, spell crafting builds, Memory catalog, boss strategies, Relic guide, and more.',
};

export default function GuidesPage() {
  const guides = getAllGuides();
  const categories = getAllCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <JsonLd
        data={itemListSchema(
          guides.map((g) => ({
            name: g.frontmatter.title,
            url: `/guides/${g.slug}`,
          }))
        )}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Guides</h1>
      <p className="text-gray-400 mb-8">
        {guides.length} guides covering every aspect of Echoes of Mystralia.
      </p>

      {/* Category filter tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-xs font-medium px-3 py-1 rounded bg-[#1a1a3e] text-gray-300 border border-[#2a2a5e]"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Guide grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <GuideCard
            key={guide.slug}
            title={guide.frontmatter.title}
            description={guide.frontmatter.description}
            slug={guide.slug}
            category={guide.frontmatter.category}
            updated={guide.frontmatter.updated}
          />
        ))}
      </div>

      {guides.length === 0 && (
        <p className="text-gray-500 text-center py-16">
          No guides yet. Check back soon.
        </p>
      )}
    </div>
  );
}

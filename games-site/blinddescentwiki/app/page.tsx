import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';
import { getAllGuides } from '@/lib/guides';

// Featured cards come straight from content/guides, so a new site needs no
// edit here: add a .md file and it shows up. The six most recently updated
// guides are shown.
const FEATURED_LIMIT = 6;

// TODO(per site): add 4–8 verified Q&As. Every answer needs a source; keep the
// homepage list short and link to /faq for the full set. Empty = section hidden.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'Is Blind Descent co-op?',
    answer:
      'Yes. It supports online co-op for up to four players, with crossplay between Steam, GOG and the Epic Games Store. The world and quests are shared, but inventory and mutations are separate per player.',
  },
  {
    question: 'When does Blind Descent release?',
    answer:
      'Early Access begins on December 2, 2026 for PC on Steam, GOG and the Epic Games Store. PlayStation 5 and Xbox Series X|S are planned for the full 1.0 release, with no date announced.',
  },
  {
    question: 'How much does Blind Descent cost?',
    answer:
      'Not announced. [Unconfirmed] — the Steam page shows no price yet, and the publisher has not stated the Early Access price. Treat any figure you see elsewhere as a guess.',
  },
  {
    question: 'What is the mutation system?',
    answer:
      'You choose between science and symbiosis. Symbiosis unlocks mutations such as telekinesis or wall running; staying pure gives access to new technology. The choice is per player in co-op.',
  },
  {
    question: 'Can my base be destroyed?',
    answer:
      'Yes, by neglect. Vines, fungal growths and creeping alien organisms react to unattended structures, and bases can be overgrown, devoured or corrupted. The decay timer has not been published.',
  },
  {
    question: 'Does it work on Steam Deck?',
    answer:
      '[Unconfirmed]. The Steam listing confirms full controller support, but no Steam Deck compatibility rating has been published. The listed minimum is 16 GB of RAM.',
  },
];

const QUICK_LINKS = [
  {
    heading: 'New to the game?',
    body: 'Start with the beginner guide: what the first hours expect from you and which early mistakes cost the most time.',
    href: '/guides',
    label: 'Browse guides',
  },
  {
    heading: 'Stuck on a boss or a system?',
    body: 'Mechanic and boss pages explain the fight or the system step by step, with the patch version noted on every page.',
    href: '/guides',
    label: 'Open the guides',
  },
  {
    heading: 'Just want the facts?',
    body: 'Release date, price, platforms, and the questions that come up before buying are collected on the FAQ page.',
    href: '/faq',
    label: 'Read the FAQ',
  },
];

export default function Home() {
  const featured = getAllGuides()
    .slice(0, FEATURED_LIMIT)
    .map((guide) => ({
      slug: guide.slug,
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      category: guide.frontmatter.category || 'Guide',
      updated: guide.frontmatter.updated || '',
    }));

  return (
    <>
      <JsonLd data={videoGameSchema()} />
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#041014] to-[#071013]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Blind Descent <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          Unofficial Blind Descent wiki and guide hub — co-op setup, survival mechanics, scanning and crafting, base decay, and platform answers, written from official sources.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Updated as patches land · Every page lists its sources
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/guides" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Browse all guides
          </Link>
          <Link href="/faq" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Read the FAQ →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Start Here</h2>
        <p className="text-sm text-gray-500 mb-8">
          The most recently updated pages. Anything we cannot verify is labelled as unconfirmed instead of presented as fact.
        </p>
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No guides published yet.</p>
        )}
        <div className="text-center mt-8">
          <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUICK_LINKS.map((card) => (
            <div key={card.heading} className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{card.heading}</h3>
              <p className="text-sm text-gray-400 mb-3">{card.body}</p>
              <Link href={card.href} className="text-sm text-amber-400 hover:underline">{card.label} →</Link>
            </div>
          ))}
        </div>
      </section>

      {FAQ_ITEMS.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1d3038]">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group bg-[#0e1b20] rounded-lg border border-[#1d3038]">
                <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-cyan-400 transition-colors select-none">{item.question}</summary>
                <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Read the full FAQ →</Link>
          </div>
        </section>
      )}
    </>
  );
}

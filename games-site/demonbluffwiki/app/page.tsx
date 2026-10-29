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
    question: 'When does Demon Bluff release?',
    answer:
      'November 2026 on Steam. Valve\'s store data confirms the month but publishes no day, and no price has been announced.',
  },
  {
    question: 'Is Demon Bluff single-player?',
    answer:
      'Yes. It is a single-player social deduction game — the "social" part is the puzzle of catching lying cards, not other players.',
  },
  {
    question: 'How many characters are there?',
    answer:
      '44 documented roles across Villagers, Outcasts, Minions and Demons, with 100+ collectible cards once skins and variants are counted.',
  },
  {
    question: 'Is there a demo?',
    answer:
      'Yes — a free demo has been on Steam since 27 May 2026, carrying 40+ villager cards and nine Relics.',
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
          Demon Bluff <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          Unofficial Demon Bluff wiki and guide hub — card role guides, ability resolution order, mode walkthroughs, deckbuilding tips, and FAQ — built from the Steam store page and the community wiki, with every unconfirmed number labelled
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

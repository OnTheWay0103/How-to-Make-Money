import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';
import { getAllGuides } from '@/lib/guides';

// Featured cards come straight from content/guides, so a new site needs no
// edit here: add a .md file and it shows up. The six most recently updated
// guides are shown.
const FEATURED_LIMIT = 6;

// Short set for the homepage; the full list (with sources) lives on /faq.
// Every answer traces to the Steam store page (app 4348910) or a Questing Goose
// Studio release announcement checked 2026-10-28.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When does Probably Stolen come out?',
    answer:
      'October 28, 2026 at 2:00 PM CET — 9:00 AM EDT, 6:00 AM PDT, 21:00 Beijing. The hour comes from the studio’s own release announcement.',
  },
  {
    question: 'How much is Probably Stolen?',
    answer: 'US$19.99 at launch with a 10% discount. Regional pricing is listed for 17 markets, including the EU, UK, China and Japan.',
  },
  {
    question: 'Is Probably Stolen multiplayer?',
    answer: 'No. The store page lists single-player as the only mode, and the 1.0 announcement describes no co-op or online play.',
  },
  {
    question: 'Can I still play the demo?',
    answer: 'Only until launch. The studio says the demo stops being available once 1.0 releases, though demo saves do carry into the full game.',
  },
  {
    question: 'How many starting scenarios are there?',
    answer:
      'Nine at launch — Apprentice, Water Merchant, Fence, Rock Bottom, Hydroponic Farmer, Gunsmith, Chemist, Rat Wrangler and Aquafarmer — plus four difficulty options.',
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
    heading: 'Stuck on a system?',
    body: 'Mechanic pages explain the water chain, black market reputation and the buy-out ending step by step, with the sources listed on every page.',
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
          Probably Stolen <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          Unofficial Probably Stolen wiki and guide hub — release details, beginner guides, all nine starting scenarios, water and aquarium production, black market reputation, and the buy-out ending, written from official sources and labelled where a figure is only community-reported
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hero Tier List',
  description: 'An honest Graphite hero assessment — no confirmed tier data exists yet. Only The Knight and The Mage are confirmed heroes. Learn their strengths and who to pick first.',
};

const KNOWN_HEROES = [
  { name: 'The Knight', status: 'Confirmed (demo)', strengths: 'Shield-based abilities that exploit the Break system; deals significant damage; durable and forgiving for new players', pick: 'Recommended first pick — teaches the game\'s core mechanic safely' },
  { name: 'The Mage', status: 'Confirmed (demo)', strengths: 'Offensive spells plus defensive support (boosts allies\' defenses); flexible damage dealer that can pivot to protection', pick: 'Best confirmed alternative for players who prefer offense' },
];

const UNKNOWN_HEROES = [
  'The other five heroes have no officially confirmed names, abilities, or roles.',
  'Each has a unique personality, backstory, and playstyle — and starting hero choice changes story events.',
  'Until official reveals or post-release testing, no ranking of these heroes is possible — any ranking you find is unsourced.',
];

const PICK_ADVICE = [
  { situation: 'New to tactical roguelikes', pick: 'The Knight', why: 'Shield forgives mistakes and teaches the Break system directly' },
  { situation: 'Prefer offense', pick: 'The Mage', why: 'Confirmed spell damage with defensive support' },
  { situation: 'Want the story from a different angle', pick: 'Any hero you haven\'t tried', why: 'Starting heroes change story events — confirmed design' },
  { situation: 'Trying to learn fast', pick: 'The Knight, then the Mage', why: 'The two confirmed heroes demonstrate the combat system\'s two poles: Break control and offensive pressure' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hero Tier List</h1>
      <p className="text-gray-400 mb-4">Graphite launched July 27, 2026 — and there is <strong>no confirmed tier data</strong> for this game yet.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Honest early assessment — no confirmed rankings</div>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5 mb-10">
        <h2 className="text-white font-semibold mb-2">An Honest Preface About Tier Lists</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Only two of the seven heroes have been officially named: <strong>The Knight</strong> and <strong>The Mage</strong>.
          Any ranking that scores heroes named "Warrior," "Rogue," "Monk," "Bard," "Hunter," or "Tamer" with numbers
          is fabricating its roster and its data — neither the hero names nor the scores are sourced.
          This page gives you the honest version: what is confirmed about each known hero, and a reasonable early-pick
          recommendation based on confirmed mechanics rather than invented stats.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What We Know About the Confirmed Heroes</h2>
        <div className="space-y-4">
          {KNOWN_HEROES.map((hero) => (
            <div key={hero.name} className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-white font-semibold text-lg">{hero.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-400 border border-emerald-800">{hero.status}</span>
              </div>
              <p className="text-sm text-gray-400 mb-1"><strong className="text-gray-300">Strengths:</strong> {hero.strengths}</p>
              <p className="text-sm text-gray-400"><strong className="text-gray-300">Pick advice:</strong> {hero.pick}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Unconfirmed Roster — TBD</h2>
        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
          {UNKNOWN_HEROES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What We Can Rank: Pick Advice, Not Scores</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a5e]">
                <th className="text-left text-gray-300 font-semibold py-2 pr-4">Your Preference</th>
                <th className="text-left text-gray-300 font-semibold py-2 pr-4">Recommended Pick</th>
                <th className="text-left text-gray-300 font-semibold py-2">Why</th>
              </tr>
            </thead>
            <tbody>
              {PICK_ADVICE.map((row) => (
                <tr key={row.situation} className="border-b border-[#2a2a5e]">
                  <td className="py-3 pr-4 text-gray-300">{row.situation}</td>
                  <td className="py-3 pr-4 text-white">{row.pick}</td>
                  <td className="py-3 text-gray-400">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">When a Real Tier List Will Be Possible</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          A genuine tier list needs post-release data: actual playtest results, confirmed hero rosters, and the full
          artifact pool. Until such data is documented, treat any elaborate ranking as entertainment at best.
          For the full breakdown, see the <Link href="/guides/tier-list" className="text-amber-400 hover:underline">honest tier assessment guide</Link>{' '}
          and the <Link href="/guides/heroes-guide" className="text-amber-400 hover:underline">heroes guide</Link>.
        </p>
      </section>
    </div>
  );
}

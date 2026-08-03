import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: Your First Walk', description: 'New to Big Walk? Learn the core loop — pick up a walkie-talkie, find your friends, solve your first co-op puzzles and unlock your first gourds.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-04' },
  { title: 'Multiplayer & Co-op Guide — 2-12 Players', description: 'How Big Walk multiplayer works: invites, party sizes, PS Plus crossplay, voice chat, and what you need to know before calling your friends.', slug: 'multiplayer-coop-guide', category: 'Multiplayer', updated: '2026-08-04' },
  { title: 'All Tools Guide — Walkie-Talkie, Binoculars & More', description: 'Every tool and toy in Big Walk: walkie-talkies, binoculars, laser pointers, megaphones, flares and more — how each one helps you solve puzzles.', slug: 'tools-guide', category: 'Tools', updated: '2026-08-04' },
  { title: 'Puzzles Guide — All Puzzle Mechanics', description: 'How Big Walk puzzles work: symbol relay, player towers, ball hauling, matching tiles and communication-restricted challenges explained.', slug: 'puzzles-guide', category: 'Puzzles', updated: '2026-08-04' },
  { title: 'Hidden Secrets & Quests Guide', description: 'The secrets players are uncovering at launch — gourd rewards, hidden questlines, secret areas and everything else beyond the main path.', slug: 'hidden-secrets-guide', category: 'Secrets', updated: '2026-08-04' },
  { title: 'Island Exploration Guide', description: 'Navigate Big Walk\'s island without a map — landmarks, regions, the tunnel network, ski lifts and how gourd unlocks fast travel.', slug: 'island-exploration-guide', category: 'Exploration', updated: '2026-08-04' },
];

const FAQ_ITEMS = [
  { question: 'What is Big Walk?', answer: 'Big Walk is a co-op open world puzzle adventure by House House, the Melbourne studio behind Untitled Goose Game, published by Panic. Two to twelve players explore a large island, solve cooperative puzzles, and coordinate with proximity voice chat. There is no combat — it is a game about walking and talking together. It launched August 4, 2026 on Steam (PC and Mac), PS5, and Nintendo Switch 2.' },
  { question: 'Can I play Big Walk solo?', answer: 'No. Big Walk is exclusively co-op — it requires at least 2 players and there is no single-player mode or matchmaking. You need to bring your own friends (2-12 players, with puzzles designed for groups of 2-4+).' },
  { question: 'How much does Big Walk cost?', answer: 'Big Walk is $19.99 USD on Steam and Nintendo Switch 2, with a 25% launch discount. On PS5 it is free as a day-one PlayStation Plus Essential game (available August 4 - September 1, 2026).' },
  { question: 'Is there crossplay?', answer: 'Yes — full cross-platform play across PC (Steam), Mac, PS5, and Nintendo Switch 2.' },
  { question: 'How many players can play Big Walk together?', answer: '2 to 12 players. Puzzle setups scale for groups of 2, 3, or 4+, and bigger groups can split up and help each other across the island.' },
  { question: 'Does Big Walk have combat?', answer: 'No. There is no combat, no enemies, no timers and no health bars. Big Walk is a relaxed, pressure-free cooperative adventure — the challenge is communication, not fighting.' },
  { question: 'How do I talk to my friends in Big Walk?', answer: 'Big Walk uses proximity voice chat: voices fade with distance, echo down corridors, muffle through walls and crackle through walkie-talkies. You can also point, wave and gesture when talking is not an option.' },
  { question: 'How long is Big Walk?', answer: 'Official playtime estimates are not confirmed yet. Big Walk is a hand-crafted adventure with a beginning and an ending — previewers played through a substantial campaign. We will update this page once the community has average playtimes.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Big Walk <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the co-op open world puzzle adventure by House House, creators of Untitled Goose Game.
        </p>
        <p className="text-sm text-gray-600 mb-8">Out now — August 4, 2026 — Steam (PC & Mac), PS5, Nintendo Switch 2</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/1478500/Big_Walk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Big Walk on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

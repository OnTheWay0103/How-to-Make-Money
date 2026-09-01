import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'How to Play BOMBANANA! — First Bomb Basics', description: 'New to BOMBANANA!? Learn the core loop — three monkeys, one bomb, split information. Cover the roles, the information triangle, and how to defuse your first bomb ahead of the September 2 launch.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-09-01' },
  { title: 'Blind / Deaf / Mute Roles Guide', description: 'Every role in BOMBANANA! — what the Blind, Deaf, and Mute monkeys can and cannot do, who is the communication bottleneck, and which role to start with. Includes callout phrases and gesture dictionary.', slug: 'roles-guide', category: 'Roles', updated: '2026-09-01' },
  { title: 'Bomb Modules Compendium — Wires, Numpad & Switch Panels', description: 'Every confirmed bomb module: Wires, D-pad, Numpad/Math, Switch Panels, and Braille. How each is solved, the callout template for each, and the common mistakes that end runs.', slug: 'modules-guide', category: 'Modules', updated: '2026-09-01' },
  { title: 'Manual Quick Reference — How to Read the Defusal Manual', description: 'The Mute monkey holds the only manual. Learn how the manual maps to modules, how Mute signals page numbers and answers, and the gesture shorthand for fast rounds.', slug: 'manual-guide', category: 'Manual', updated: '2026-09-01' },
  { title: 'Price, Platforms & Release FAQ', description: 'Release date, price, system requirements, Mac support, and why there is no mobile version. Everything about where and how to play BOMBANANA! at launch — honestly labeled.', slug: 'price-platforms-faq', category: 'Info', updated: '2026-09-01' },
  { title: 'Free Mode — Build Your Own Bomb', description: 'The Custom / Free Mode bomb editor. Adjust difficulty, timer, module types, environmental hazards, and mistake limits to craft your own chaos for three players.', slug: 'free-mode-guide', category: 'Modes', updated: '2026-09-01' },
];

const FAQ_ITEMS = [
  { question: 'What is BOMBANANA!?', answer: 'BOMBANANA! is a chaotic, asymmetrical 3-player co-op bomb-defusal party game developed by Lefto Studio and published by TARK. Each player is a monkey with a missing sense — one is blind, one is deaf, one is mute — and the team must combine their partial information to defuse a bomb before the timer runs out.' },
  { question: 'When does BOMBANANA! release?', answer: 'BOMBANANA! releases on September 2, 2026 on Steam for PC. A free demo is already available on Steam, and it has been played by more than 6 million players.' },
  { question: 'How much does BOMBANANA! cost?', answer: 'The price has not been officially announced as of September 1, 2026, and the game is not available for pre-order [Unconfirmed]. Check the Steam store page on release day for the confirmed price.' },
  { question: 'How many players does BOMBANANA! need?', answer: 'Exactly three. The official store description says "3-Player Co-op — No more, no less. Exactly three monkeys required." There is no solo mode and no two-player mode.' },
  { question: 'What are the three roles?', answer: 'The Blind Monkey can touch and operate the bomb but cannot see colors or read screens. The Deaf Monkey can see the bomb and speak to the Blind Monkey but cannot hear. The Mute Monkey is the only one who can read the defusal manual but cannot speak — they communicate with gestures.' },
  { question: 'What platforms is BOMBANANA! on?', answer: 'PC via Steam for Windows 10/11 and macOS 11.0 or later. There is no console or mobile version planned or confirmed [Unconfirmed].' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam (App 4747510). The demo was one of the most-played demos during the June 2026 Steam Next Fest and has been played by over 6 million players.' },
  { question: 'Can I play BOMBANANA! solo?', answer: 'No. The game is strictly 3-player co-op. Every player has only part of the information needed to defuse the bomb, so solo play is not supported.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1033] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          BOMBANANA! <span className="text-violet-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          The chaotic 3-player co-op bomb-defusal game by Lefto Studio / TARK — roles, modules, manual and callouts.
        </p>
        <p className="text-sm text-gray-600 mb-8">Releases September 2, 2026 — PC via Steam (free demo now)</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/4656000/BOMBANANA/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#241a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-violet-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

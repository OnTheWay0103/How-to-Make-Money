import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First 3 Hours', description: 'New to Waterpark Simulator? Learn the core gameplay loop, the daily rhythm of running your park, and essential tips for surviving your first days with a happy crowd and a healthy bank balance.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-08' },
  { title: 'Slide & Ride Tier List', description: 'Every attraction type in Waterpark Simulator ranked by profit and popularity — from custom mega-slides to hot dog stands. Build the rides that earn their keep.', slug: 'slide-ride-tier-list', category: 'Reference', updated: '2026-08-08' },
  { title: 'Staff Management Guide', description: 'Every staff type explained — cashier, janitor, vendor, lifeguard, handyman, security, mascot. Hiring levels, wages, efficiency, and the optimal hiring order.', slug: 'staff-management-guide', category: 'Reference', updated: '2026-08-08' },
  { title: 'Research Tree Overview', description: 'All research table categories and unlocks — Attractions, Park, and Maintenance trees — plus the priority order for spending your hard-earned research points.', slug: 'research-tree-guide', category: 'Reference', updated: '2026-08-08' },
  { title: 'Museum Questline Walkthrough', description: 'How to unlock the Museum, complete the questlines of Poseidon\'t, Clara Loft, and Goldie, and claim the three massive theme slides. Includes the Yogi endgame quests.', slug: 'museum-questline-guide', category: 'Reference', updated: '2026-08-08' },
  { title: 'FAQ — Release, Multiplayer & More', description: 'Is Waterpark Simulator multiplayer? How much does it cost? What are the system requirements? All your questions answered.', slug: 'faq', category: 'Info', updated: '2026-08-08' },
];

const FAQ_ITEMS = [
  { question: 'When did Waterpark Simulator release?', answer: 'Waterpark Simulator entered Steam Early Access on August 22, 2025 and launched its 1.0 version on July 31, 2026 — the same day it debuted on PlayStation 5 and Xbox Series X|S. The game remains priced at $12.99.' },
  { question: 'Is Waterpark Simulator multiplayer?', answer: 'Yes — since the 1.0 update you can run a park with up to 4 players in co-op. You can start a park from scratch together or load existing parks, and there is optional proximity voice chat plus walkie-talkies.' },
  { question: 'How do I make money fast in Waterpark Simulator?', answer: 'The core loop is: build attractions that draw guests, keep happiness high, and sell tickets at a price your star rating supports. Hot dog and lemonade stands are early profit machines, pushing out ticket-cheaters earns a bonus, and raising your star rating lets you charge higher entry fees. Check our Money-Making Guide for the full breakdown.' },
  { question: 'What platforms is Waterpark Simulator on?', answer: 'Waterpark Simulator is available on PC (Steam), PlayStation 5, and Xbox Series X|S. Steam Deck is not officially supported, but many players report it works with Proton Experimental.' },
  { question: 'Is there a Waterpark Simulator wiki?', answer: 'Yes — you\'re on it! Waterpark Simulator Wiki is an unofficial fan resource covering slides, staff, research, the Museum questline, visitor management, and money-making. We\'re the first and most comprehensive guide hub for the game.' },
  { question: 'How much does Waterpark Simulator cost?', answer: 'Waterpark Simulator costs $12.99 on Steam. CayPlay confirmed the price will not rise to the originally planned $19.99. Early Access players received the official soundtrack and an exclusive duck slide for free.' },
  { question: 'Does the park close at night?', answer: 'During Early Access the park closed daily at 6 PM. The 1.0 update adds night mode — you can keep the park running after dark, but employees are paid more and cheaters are easier to spot thanks to glow-in-the-dark bracelets.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i5-3550, 8 GB RAM, NVIDIA GTX 1050 or AMD Radeon RX 570, DirectX 11, 20 GB storage. Recommended: Intel Core i5-6400, 8 GB RAM, NVIDIA GTX 1070 or AMD Radeon RX Vega 56.' },
  { question: 'Is there character customization?', answer: 'Yes. Use the mirror in your park to randomize your appearance, and the 1.0 update adds full character customization — skin tones, hair, body sliders, and outfits, with up to 5 saved slots.' },
  { question: 'What are the difficulty modes?', answer: 'Waterpark Simulator offers four modes: Sandbox (build freely with no pressure), Easy, Normal, and Hard. Difficulty affects how much money you start with and how forgiving the park management systems are.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#052e2b] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Waterpark Simulator <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Unofficial guide hub — slides, staff, research, the Museum questline & money-making for the CayPlay waterpark management sim.
        </p>
        <p className="text-sm text-gray-600 mb-8">1.0 out now — PC, PS5, Xbox Series X|S · $12.99</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3293260/Waterpark_Simulator/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-cyan-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

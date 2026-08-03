import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started', description: 'New to Low-Budget Repairs? Learn the core gameplay loop, your first renovation jobs, and essential tips for surviving as a shady 1990s Polish handyman.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-03' },
  { title: 'How to Make Money Fast', description: 'Maximize your profit with the best cost-cutting strategies. Dilute paint, buy cheap tools, skip non-visible areas, and throw furniture out windows — every zloty counts.', slug: 'money-making-guide', category: 'Money', updated: '2026-08-03' },
  { title: 'Best Cost-Cutting Tips & Shortcuts', description: 'Every trick in the book: watering down paint, mismatched tiles, duct tape plumbing, bargain-bin supplies, and creative ways to hide your mistakes from clients.', slug: 'cost-cutting-tips', category: 'Tips', updated: '2026-08-03' },
  { title: 'Tool Guide — Best & Cheapest Tools', description: 'Compare every tool in the game. When to buy the cheapest hammer vs investing in quality. Bulk-buying strategies and must-have tools for beginners.', slug: 'tool-guide', category: 'Reference', updated: '2026-08-03' },
  { title: 'All Renovation Jobs — Complete List', description: 'Quick-reference table of every renovation job type, from flooded bathrooms to full flat makeovers. Tasks, best shortcuts, and profit estimates for each.', slug: 'renovation-jobs-guide', category: 'Reference', updated: '2026-08-03' },
  { title: 'FAQ — Release Date, Platforms & More', description: 'When does Low-Budget Repairs release? Is it multiplayer? How much does it cost? System requirements? All your pre-launch questions answered.', slug: 'faq', category: 'Info', updated: '2026-08-03' },
];

const FAQ_ITEMS = [
  { question: 'When does Low-Budget Repairs release?', answer: 'Low-Budget Repairs launches on August 13, 2026 at 14:00 UTC on Steam (PC). PlayStation 5 and Xbox Series X|S versions are also planned. A free demo was released on July 24, 2026.' },
  { question: 'Is Low-Budget Repairs multiplayer?', answer: 'No — Low-Budget Repairs is a single-player experience. You run your renovation business solo, making shady deals and cutting corners on your own.' },
  { question: 'How do I make money fast in Low-Budget Repairs?', answer: 'The core strategy is minimizing expenses while charging full price. Water down paint, buy the cheapest tools, skip non-visible areas (behind radiators), use duct tape for plumbing fixes, and throw old furniture out windows to save time. Check our Money-Making Guide for the full breakdown.' },
  { question: 'What platforms is Low-Budget Repairs on?', answer: 'Low-Budget Repairs is coming to PC (Steam), PlayStation 5, and Xbox Series X|S. No Nintendo Switch or mobile versions have been announced.' },
  { question: 'Is there a Low-Budget Repairs wiki?', answer: 'Yes — you\'re on it! Low-Budget Repairs Wiki is an unofficial fan resource covering every renovation job, tool, money-making strategy, and cost-cutting tip. We\'re the first and most comprehensive guide hub for the game.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Low-Budget Repairs <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Unofficial guide hub — renovation tips, money-making strategies & cost-cutting tricks for the satirical 1990s handyman sim.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launching August 13, 2026 — PC, PS5, Xbox Series X|S</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3167920/Low_Budget_Repairs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-red-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First Hour', description: 'New to Go-Go Town!? Learn the core loop — stock Baldo\'s shop, build the train station, attract tourists, and hire your first Townies.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-01' },
  { title: 'How to Make Money Fast', description: 'Best ways to earn coins and EGO — shop stocking, stalls, vending machines, export jobs, and the endgame 50,000-coin grind.', slug: 'money-making-guide', category: 'Economy', updated: '2026-08-01' },
  { title: 'Best Town Layout Guide', description: 'Optimize roads, zones, and building placement — double-lane roads, courier paths, trash bin coverage, and 3-4 tile spacing.', slug: 'best-layout-guide', category: 'Layout', updated: '2026-08-01' },
  { title: 'How to Attract Tourists', description: 'Every mechanic behind tourist satisfaction — decor, cleanliness, Tourist Desires, landmarks, and turning visitors into Townies.', slug: 'tourist-attraction-guide', category: 'Tourism', updated: '2026-08-01' },
  { title: 'Automation Guide — Workers & Couriers', description: 'Hire workers at zone clocks, assign couriers, and build a town that runs itself. Fix idle workers and common automation bugs.', slug: 'automation-guide', category: 'Automation', updated: '2026-08-01' },
  { title: 'Co-op Multiplayer Guide', description: 'Chaotic Co-Op explained — 4-player online and local co-op on Steam, split-screen, Remote Play Together, and Switch 2-player mode.', slug: 'coop-multiplayer-guide', category: 'Co-op', updated: '2026-08-01' },
];

const FAQ_ITEMS = [
  { question: 'What is Go-Go Town!?', answer: 'Go-Go Town! is a co-op city builder and life sim by Australian indie studio Prideful Sloth. You are the mayor of a rundown tourist town — build shops, produce goods, attract tourists, and hire residents to automate your economy. The 1.0 full release launched July 16, 2026 on PC (Steam) and Nintendo Switch / Switch 2 for $27.99.' },
  { question: 'Is Go-Go Town! single-player or multiplayer?', answer: 'Both. You can play solo as a single mayor, or in "Chaotic Co-Op" with up to 4 players on Steam (online or local split-screen, plus Remote Play Together). Nintendo Switch supports 1-2 players locally and online.' },
  { question: 'Is there crossplay between platforms?', answer: 'PC co-op includes local split-screen, online multiplayer, and Steam Remote Play Together. Console support varies by platform — check platform-specific store pages for the Switch 2 Edition\'s 2-player co-op details.' },
  { question: 'How do I make money at the start?', answer: 'Stock the shop where Baldo works with gathered materials — this is your first income. Then add decor to raise your EGO, open a second shop, build the train station for daily tourist arrivals, and invite tourists to become working Townies.' },
  { question: 'How does automation work?', answer: 'After unlocking the right tech, hire residents at zone clocks (farm, fishery, forest, mine) to automate production. Build the Logistics building to assign couriers who deliver materials to shops and food trucks automatically.' },
  { question: 'What is EGO?', answer: 'EGO is the town\'s "blue coin" currency earned from tourist satisfaction. You spend it in the Ego Tech app on the phone to unlock buildings, tools, upgrades, and automation features.' },
  { question: 'Is there a Creative Mode?', answer: 'Yes. The 1.0 update added Creative Mode for relaxed, no-pressure building, alongside the new Treasure Hunting activity.' },
  { question: 'Can I play on Steam Deck?', answer: 'Yes. Go-Go Town! is Steam Deck Verified, so it runs well on the Deck in both handheld and docked modes.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Go-Go Town! <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the co-op city builder by Prideful Sloth.
        </p>
        <p className="text-sm text-gray-600 mb-8">1.0 launched July 16, 2026 — PC, Nintendo Switch &amp; Switch 2</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2195120/GoGo_Town/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Buy on Steam
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

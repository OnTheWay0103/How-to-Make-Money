import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First Days', description: 'New to the repair shop? Master the core loop — take orders, disassemble, clean, fix and return devices before the courier deadline.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-08' },
  { title: 'All Devices & Repair Database', description: 'Every repairable device in the launch catalog — consoles, phones, cameras, music players and more — with repair complexity notes.', slug: 'device-database', category: 'Reference', updated: '2026-08-08' },
  { title: 'License System — Complete Guide', description: 'How licenses unlock new device types, how many exist, which one must be won in the assembly competition, and what each costs to prioritize.', slug: 'license-guide', category: 'Reference', updated: '2026-08-08' },
  { title: 'All 50 Achievements', description: 'Every Steam achievement with unlock conditions — including the 5 hidden ones and the license, sticker, and competition milestones.', slug: 'achievement-guide', category: 'Reference', updated: '2026-08-08' },
  { title: 'Repair Process & Mechanics Guide', description: 'The full disassemble → clean → repair → reassemble loop: part conditions, notepad, soldering, reprogramming and assembly order.', slug: 'repair-process-guide', category: 'Mechanics', updated: '2026-08-08' },
  { title: 'Money, Online Orders & Marketplace', description: 'How to maximize profit margins — clean before replacing, build a parts library, batch orders, flip marketplace devices and run online orders.', slug: 'money-making-guide', category: 'Economy', updated: '2026-08-08' },
  { title: 'Cleaning Guide — Every Technique & Tool', description: 'Brush, canned air and Sonic Bath mastery — hidden dirt, the stuck-cleaning bug, and night grinding for clean-only profit.', slug: 'cleaning-guide', category: 'Mechanics', updated: '2026-08-09' },
  { title: 'Story Walkthrough — Day One to Credits', description: 'The campaign from first repair to the assembly-competition finale — every confirmed choice moment, the branching system and the milestone path.', slug: 'walkthrough-guide', category: 'Advanced', updated: '2026-08-09' },
];

const FAQ_ITEMS = [
  { question: 'What is ReStory: Chill Electronics Repairs?', answer: 'ReStory is a chill, narrative-driven electronics repair shop management simulator developed by Mandragora (I Am Future) and published by tinyBuild. Set in mid-2000s Tokyo (Akihabara), you run a small repair shop, restore nostalgic Y2K devices — including officially licensed Atari consoles — and shape a branching story through the choices you make. It launched August 6, 2026 on Steam for $19.99.' },
  { question: 'How much does ReStory cost?', answer: 'The base game is $19.99 USD on Steam, with a 10% launch discount ($17.99) that runs until August 20, 2026. A Supporter Edition bundle (game + digital artbook) is also available. Regional pricing varies (e.g., ¥55 CNY, 499₽ RUB at launch).' },
  { question: 'What platforms is ReStory on?', answer: 'PC (Windows 10 x64) and macOS (14 or newer, Apple M1+). It is single-player only — no co-op or multiplayer.' },
  { question: 'How long is ReStory?', answer: 'The developers estimate 15+ hours for the main story, depending on playstyle. A full review (Gamekult) reached the credits in roughly 10 hours. The branching story and randomized device orders support replays.' },
  { question: 'Is there a free demo?', answer: 'Yes. A free demo has been available on Steam since June 15, 2026 (Steam Next Fest). It includes extra gadgets like the Patento BS handheld and an airbrush drawing tool. Demo progress does not carry over.' },
  { question: 'How many devices can you repair?', answer: 'The launch catalog contains roughly 16 named device types across 7 categories — consoles, phones, cameras, music players and more — plus officially licensed Atari hardware (2600, Lynx, CX40). More categories unlock through licenses. (Some marketing materials cite 2,000+ devices; that figure is not yet confirmed — see the device database.)' },
  { question: 'How does the license system work?', answer: 'Licenses are certifications you buy with earned yen that unlock new device types and push the story forward. Without the right license you can accept a device but cannot finish its repair. One license must be won in the device assembly competition.' },
  { question: 'Does ReStory have multiple endings?', answer: 'Yes. The story is branching and non-linear, with choices that affect both customers\' lives and the ending. The exact number of endings has not been publicly confirmed.' },
  { question: 'How many achievements are there?', answer: '50 Steam achievements, including 5 hidden ones. One achievement is currently reported as not unlocking even when its condition is met — a full 100% run may need a patch.' },
  { question: 'Which devices are officially licensed?', answer: 'The Atari 2600, Atari Lynx and Atari CX40 joystick use real Atari branding through an official collaboration. Everything else is a legally distinct parody — Pokia 3310, Autorolla Razor, Eggotchi, Nony Goman, Palaloid and more.' },
  { question: 'Does it work on Steam Deck?', answer: 'Yes, ReStory is playable on Steam Deck. Community-tested settings: 1280×800, Medium textures/shadows, Low shadow distance, film grain off, V-Sync on, 60 Hz with a 60 FPS cap and an 11-12W TDP limit. The default controller layout is unfinished, so a custom Steam Input layout is recommended.' },
  { question: 'What are the system requirements?', answer: 'Windows minimum: Win10 x64, 2-core/4-thread CPU, 4 GB RAM, GTX 750 Ti, DirectX 11, 1 GB storage. macOS minimum: macOS 14+, Apple M1, 8 GB RAM, integrated M1 GPU, 1 GB storage. No recommended specs have been published yet.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1406] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          ReStory <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the cozy Y2K electronics repair shop sim by Mandragora / tinyBuild.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launched August 6, 2026 — PC (Steam) & macOS</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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

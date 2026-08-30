import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First Hours as Hira', description: 'New to Fallen Tear: The Ascension? Learn the core loop — explore Raoah, fight with the Korr Blade, recruit Fated Bonds, and upgrade Hira ahead of the September 16 1.0 launch.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-31' },
  { title: 'Combat Guide — Parry, Dodge & Movement', description: 'How combat works in Fallen Tear — slashing, parrying, dodging, the Overgrowth bestial form, and how Fated Bonds allies join fights. A pre-release overview of the confirmed systems.', slug: 'combat-guide', category: 'Combat', updated: '2026-08-31' },
  { title: 'Fated Bonds Guide — Every Ally & Ability', description: 'Who are the Fated Bonds? Every confirmed ally — Trystan, Lenela, Magnus, Annie, Zozrin and more — plus how recruitment changes combat and exploration.', slug: 'fated-bonds-guide', category: 'Allies', updated: '2026-08-31' },
  { title: 'Boss Guide — How to Beat Every Boss', description: 'Fallen Tear 1.0 ships with 33 bosses — 11 main and 22 optional. Confirmed roster structure plus pre-release boss-fighting strategy: parry timing, dodging, and when to unleash Overgrowth.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-31' },
  { title: 'Temple of Oras Guide — Your Personal Hub', description: 'Build and customize the Temple of Oras, the castle-shaped hub above Raoah. Strengthen bonds, unlock minigames, and improve Hira\'s stats between expeditions.', slug: 'temple-of-oras-guide', category: 'Hub', updated: '2026-08-31' },
  { title: 'EA vs 1.0 — Everything the 1.0 Update Adds', description: '1.0 roughly doubles Early Access: 10 new regions, 5 new main bosses, 19 new optional bosses, 11 new Fated Bonds, 3 Ascensions and more. The full version comparison.', slug: 'ea-to-10-version-guide', category: 'Updates', updated: '2026-08-31' },
];

const FAQ_ITEMS = [
  { question: 'What is Fallen Tear: The Ascension?', answer: 'Fallen Tear: The Ascension is a hand-drawn, story-driven 2D Metroidvania set in the corrupted high-fantasy world of Raoah. You play as Hira, a mysterious child fated to stand against ancient gods. It blends the party-building of classic JRPGs with the freeform exploration of Metroidvanias, with full voice acting and multiple endings shaped by your choices.' },
  { question: 'When does Fallen Tear: The Ascension release?', answer: 'The game entered Steam Early Access on March 17, 2026, and leaves Early Access with its 1.0 launch on September 16, 2026. The release date was announced in an official trailer on August 5, 2026. Console versions for PS5, Xbox Series X|S, and Switch are planned for a later date.' },
  { question: 'How much does Fallen Tear cost?', answer: 'At 1.0 launch on September 16, 2026, the game costs $24.99 / €24.99 / £21.99, with a 10% launch discount for the first 14 days. During Early Access it was priced at $19.99.' },
  { question: 'What platforms is Fallen Tear on?', answer: 'PC via Steam at launch, and it is Steam Deck playable. PlayStation 5, Xbox Series X|S, and Nintendo Switch versions are planned for a later date.' },
  { question: 'What are the Fated Bonds?', answer: 'Fated Bonds are recruitable allies — mages, swordsmen, tricksters, and healers — whose distinct combat and traversal abilities change how you fight and explore. Each has sidequests and story content. Early Access had 10; the 1.0 update adds 11 more for roughly 21 total (the Steam description says "up to 22" — see the Fated Bonds guide for the discrepancy note).' },
  { question: 'How many bosses are in Fallen Tear?', answer: 'Early Access shipped with 6 main bosses and 3 optional side bosses. The 1.0 update adds 5 new main bosses and 19 new optional side bosses — approximately 33 bosses total across 20 regions.' },
  { question: 'How long is Fallen Tear: The Ascension?', answer: 'The 1.0 launch offers roughly 35–40 hours of story content, and 80+ hours for completion-focused players. Early Access covered about 35% of the full game at 15–20 hours.' },
  { question: 'Is Fallen Tear multiplayer?', answer: 'No. Fallen Tear: The Ascension is a single-player game.' },
  { question: 'Does progress carry over from Early Access to 1.0?', answer: 'The developer has not published an official statement on save/upgrade carry-over between the Early Access build and the 1.0 release as of August 31, 2026 [Unconfirmed]. Check the official announcement near launch for confirmation.' },
  { question: 'Does Fallen Tear have multiple endings?', answer: 'Yes. The official press release confirms multiple possible endings shaped by player choices, including bonds formed with Fated Bonds allies. The specifics of how each ending unlocks are not yet published [Unconfirmed].' },
  { question: 'Who develops and publishes Fallen Tear?', answer: 'Fallen Tear: The Ascension is developed by Winter Crew Studios, an indie team based in Manila, Philippines, and published by CMD Studios. Creative Director Stephen Manalastas has described how Early Access community feedback shaped combat balance and the Fated Bonds system.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i5-4460 / AMD Ryzen 3 1200, 8 GB RAM, NVIDIA GTX 950 / AMD Radeon R7 370, DirectX 11, 15 GB storage. Recommended: Windows 10/11 64-bit, Intel Core i5-6600K / AMD Ryzen 5 1400, 16 GB RAM, NVIDIA GTX 1060 3 GB / AMD RX 580 4 GB.' },
  { question: 'What languages does the game support?', answer: 'The 1.0 launch includes English, German, Brazilian Portuguese, and Simplified Chinese. French, Italian, Spanish, Turkish, Korean, and Japanese text support are planned to arrive after launch.' },
  { question: 'Is there an official wiki?', answer: 'No dedicated wiki exists yet. As of August 31, 2026 there is no Fandom, Fextralife, or wiki.gg wiki for Fallen Tear: The Ascension — only news coverage. This site is an unofficial fan resource and is not affiliated with the developer or publisher.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1033] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Fallen Tear: The Ascension <span className="text-violet-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          The hand-drawn Metroidvania by Winter Crew Studios / CMD Studios — combat, Fated Bonds, bosses and Raoah.
        </p>
        <p className="text-sm text-gray-600 mb-8">1.0 launches September 16, 2026 — PC via Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/1446900/Fallen_Tear_The_Ascension/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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

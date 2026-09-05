import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Anomaly President Beginner Guide — Day & Night Loop', description: 'New to Anomaly President? Learn the two interlocking loops — campaign for votes by day, fight the president\'s gangs by night — plus the campaign bus, Fluffies, and what carries over between runs.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-09-03' },
  { title: 'Campaign Management — Win the Day', description: 'The daytime half of the loop: canvassing, speeches, image management, card-based dialogue and minigames. How votes and campaign revenue feed your meta-progression.', slug: 'campaign-management', category: 'Campaign', updated: '2026-09-03' },
  { title: 'Fluffies Guide — Recruit, Assign, Care', description: 'Every candidate needs a team. Recruit Fluffies, assign them to campaign, gear-upgrade or combat departments — and keep them cared for, or they will leave (or worse).', slug: 'fluffy-guide', category: 'Fluffies', updated: '2026-09-03' },
  { title: 'Night Combat Guide — Run Structure & Fighting', description: 'The night half of the loop: a side-scrolling beat-\'em-up roguelike run. Movement, positioning, weapons, elements, and how combat victories unlock new campaign options.', slug: 'night-combat', category: 'Combat', updated: '2026-09-03' },
  { title: 'Weapons Guide — Arsenal & Dual Wielding', description: 'Katana, nunchucks, claws, kusarigama, staff and more. The developer-stated launch arsenal, two-weapon loadouts, and how weapon choice shapes swordmaster or cyber-mage builds.', slug: 'weapons-guide', category: 'Combat', updated: '2026-09-03' },
  { title: 'Builds & Strategy — Archetypes, Elements & Synergies', description: 'Parry-focused swordmaster or area-damage cyber mage — the confirmed build archetypes, the Ice/Fire/Electric elements, and the synergies reviewers found strongest in Early Access.', slug: 'builds-strategy-guide', category: 'Builds', updated: '2026-09-03' },
];

const FAQ_ITEMS = [
  { question: 'What is Anomaly President?', answer: 'Anomaly President is a presidential-campaign roguelike action game by Phew Phew Games (the Anomaly Agent studio). By day you run a campaign — canvassing for votes and winning hearts and minds. By night you become a warrior and fight the criminal gangs controlled by the current president. You recruit Fluffies, build a campaign bus, and steal Anomaly Powers from bosses.' },
  { question: 'When did Anomaly President release?', answer: 'It entered Early Access on Steam on August 3, 2026. The Early Access build is playable from start to finish, but the developer states the story ending is not yet complete and not all areas of the map are accessible.' },
  { question: 'How much does Anomaly President cost?', answer: 'The base price is around $14.99 USD / €15.49 / £13.49 with regional pricing. A 20% launch discount brought it to roughly $11.99 for the first two weeks, and the developer plans to raise the price as content is added.' },
  { question: 'What platforms is Anomaly President on?', answer: 'PC (Windows) via Steam. It is single-player only. Reviewers reported Steam Deck Verified status, and no console or mobile versions have been announced [Unconfirmed].' },
  { question: 'What is the day / night dual loop?', answer: 'The game alternates two loops. By day you manage the campaign — speeches, canvassing, image, Fluffies and the campaign bus. By night you run side-scrolling roguelike combat missions. Each loop feeds the other: combat wins unlock campaign options, and campaign progress expands your tools for future runs.' },
  { question: 'What are Fluffies?', answer: 'Fluffies are oppressed creatures you recruit to your team. You assign them to departments — campaigning for votes, upgrading your equipment, or assisting you in battle. They must be cared for; if you neglect them, they can abandon your campaign or lose their lives.' },
  { question: 'What is the campaign bus?', answer: 'The campaign bus is your mobile base. You design it from scratch, add unique sections, and turn it into a personalized mobile hub. Rooms affect your abilities and playstyle each run — reviewers confirmed bedrooms, a TV studio, an upgrade room and a canvassing room in Early Access.' },
  { question: 'What are Anomaly Powers?', answer: 'Anomaly Powers are unique abilities carried by the president\'s vice-president bosses — for example the president\'s PR chief has the power of HEART. Defeating a boss lets you acquire its Anomaly Power, and boss kills grant permanent powers you can use.' },
  { question: 'Is there a demo?', answer: 'Yes. The developer released a free demo featuring the opening region, a first boss (the Minister of Public Relations), four distinct weapons and a slice of the meta-progression tree. It had passed 27,000 demo downloads by July 2026.' },
  { question: 'Is the game finished?', answer: 'No — it is Early Access. The developer plans at least a year of Early Access (possibly more), the roadmap was extending through September 2026 with new weapons and enemies, and the price will rise as content ships.' },
  { question: 'Is there an official wiki?', answer: 'No dedicated wiki existed as of September 3, 2026 — no Fandom, Fextralife or wiki.gg for Anomaly President, only article-level guides and reviews. This site is an unofficial fan resource and is not affiliated with Phew Phew Games.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#16233a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Anomaly President <span className="text-violet-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          The presidential-campaign roguelike action game by Phew Phew Games — campaign by day, fight by night.
        </p>
        <p className="text-sm text-gray-600 mb-8">Early Access on Steam — PC (Windows) · Steam Deck Verified</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3156330/Anomaly_President/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
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

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1c2a42]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#141c33] rounded-lg border border-[#26324f]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-violet-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

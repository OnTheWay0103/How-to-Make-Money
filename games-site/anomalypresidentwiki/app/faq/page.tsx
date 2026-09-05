import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Anomaly President by Phew Phew Games — Early Access status, price, platforms, the day/night loop, Fluffies, campaign bus, Anomaly Powers, demo, Steam Deck, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Anomaly President?', answer: 'Anomaly President is a presidential-campaign roguelike action game by Phew Phew Games, the studio behind Anomaly Agent. By day you run a presidential campaign in a cyberpunk dystopia; by night you fight the criminal gangs controlled by the current president as a side-scrolling warrior. It launched into Early Access on Steam on August 3, 2026.' },
  { question: 'Is Anomaly President finished?', answer: 'No — it is an Early Access title. The store page states it is "currently fully playable from start to finish," but the story\'s ending is not yet complete and not all areas of the map are accessible. The developer plans at least one year of Early Access, possibly more.' },
  { question: 'How much does Anomaly President cost?', answer: 'The base price is around $14.99 USD / €15.49 / £13.49 with regional pricing (¥48 on the Chinese store). A 20% launch discount brought it to about $11.99 for the first two weeks. The developer says they will gradually raise the price as new content and features ship.' },
  { question: 'What platforms is Anomaly President on?', answer: 'PC (Windows) via Steam. The store page lists Windows 10 as the minimum OS. No console or mobile versions have been announced [Unconfirmed]. The game carries a Steam Deck Verified badge and several reviewers report it runs well on Deck; Steam Deck HQ\'s August 18 Early Access test, however, reported unstable frame rates and roughly 17W power draw, so treat Deck performance as patch-dependent during Early Access.' },
  { question: 'Is Anomaly President multiplayer?', answer: 'No. The game is single-player only — the store page lists Single-player as its only mode. Your "team" is made of AI Fluffy companions, not other players.' },
  { question: 'What is the day / night dual loop?', answer: 'The core loop alternates two halves. By day you campaign: give speeches, canvass for votes, manage your image, recruit Fluffies, and expand your campaign bus. By night you run side-scrolling combat missions against the president\'s gangs. Combat wins feed your campaign, and campaign progress unlocks better tools for future runs.' },
  { question: 'What are Fluffies?', answer: 'Fluffies are oppressed creatures you recruit to your team. You assign them to departments — campaigning for votes, upgrading your equipment, or assisting you in battle. They must be cared for; if you neglect them, they may abandon your campaign or even lose their lives.' },
  { question: 'What is the campaign bus?', answer: 'The campaign bus is your mobile base and hub. You design it from scratch, add unique sections, and personalize it. Developer posts describe the bus as the backbone of your journey — unlocked rooms affect your abilities and playstyle each run. Reviewers confirmed bedrooms, a TV studio, an upgrade room and a canvassing room in Early Access.' },
  { question: 'What are Anomaly Powers?', answer: 'Anomaly Powers are unique abilities held by the president\'s vice-president bosses — the store page example is the president\'s PR chief, who has the power of HEART. Defeating a boss lets you acquire its Anomaly Power, and boss kills grant permanent powers usable across runs.' },
  { question: 'What weapons are in Anomaly President?', answer: 'Developer posts list the intended launch arsenal as Sword, Nunchucks, Claws, Kusarigama, Staff, Hammer (work-in-progress), Octo-Arms (work-in-progress), plus kicks and punches, and you can carry two weapons at once. Reviewers consistently confirmed katana/sword-focused play. The exact roster in the current build is [Unconfirmed] and may differ.' },
  { question: 'Is there a demo?', answer: 'Yes. The developer released a free demo featuring the opening region, a first boss (the Minister of Public Relations), four distinct weapons, and a slice of the meta-progression tree. By July 2026 the demo had passed 27,000 downloads.' },
  { question: 'Is Anomaly President like Anomaly Agent?', answer: 'Both are made by Phew Phew Games and share the "Anomaly" universe, but they play differently. Anomaly Agent is a 2D action platformer; Anomaly President is a roguelike with a campaign-management layer, a campaign bus and Fluffy companions. See the [similar games guide](/guides/similar-games-guide) for a full comparison.' },
  { question: 'What elements / damage types exist?', answer: 'Critic coverage confirms Ice, Fire and Electric damage types in the Early Access build. Some reviewers reported Ice feeling vastly overpowered compared to Fire and Electric — a balance point the developer may address in updates.' },
  { question: 'What are the system requirements?', answer: 'Windows minimum (from the store page): Windows 10, Intel Core i5-3470 / AMD FX-6300, 4 GB RAM, GeForce GTX 660 / Radeon HD 7870, and 1 GB available storage.' },
  { question: 'Does the game have difficulty options or voice acting?', answer: 'Reviewers reported that as of the Early Access launch there were no difficulty options — a frequently requested feature that could change in updates [Unconfirmed]. Voice acting is present: the store page lists full audio for all 12 supported languages (see the languages question).' },
  { question: 'What languages does Anomaly President support?', answer: 'The store page lists 12 languages with full audio and subtitles: English, French, German, Spanish (Spain and Latin America), Portuguese-Brazil, Russian, Simplified Chinese, Traditional Chinese, Turkish, Japanese and Korean. Full audio is checked for every one of these languages, meaning the game ships with full voice acting across the board.' },
  { question: 'Is there an official wiki?', answer: 'No dedicated wiki existed as of September 3, 2026 — no Fandom, Fextralife or wiki.gg wiki for Anomaly President, only article-level guides and reviews. This site is an unofficial fan resource and is not affiliated with Phew Phew Games, Gamedev.ist or Gamersky Games.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Anomaly President by Phew Phew Games — Early Access status, price, platforms, the dual loop, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

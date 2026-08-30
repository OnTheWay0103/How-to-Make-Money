import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Welcome to Elderfield by Chris Cote / Kwalee — release date, price, demo, platforms, difficulty modes, romance, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Welcome to Elderfield?', answer: 'Welcome to Elderfield is a cosy horror RPG developed by solo developer Chris Cote and published by Kwalee. It combines farming and life-sim gameplay with Lovecraftian turn-based combat, hand-drawn horror-manga inspired art, a dark lofi soundtrack by Dated, and daily mystery investigation in the isolated town of Elderfield. It launches September 10, 2026 on Steam for PC.' },
  { question: 'When is the release date?', answer: 'September 10, 2026 on Steam for PC. The date was confirmed in an official release-date reveal trailer on August 5, 2026.' },
  { question: 'How much does Welcome to Elderfield cost?', answer: 'The official price had not been announced as of August 30, 2026 [Unconfirmed]. The free demo is available now on Steam; the full game will be purchasable at launch on September 10.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam (App ID 3195680), first released October 7, 2024. It is a vertical slice covering roughly 1/6 of the planned game, with one town area, the farm and ranch, the first dungeon (a local mall), and several smaller locations. It holds a ~96% positive ("Overwhelmingly Positive") rating with over 550 reviews.' },
  { question: 'What platforms is Welcome to Elderfield on?', answer: 'PC via Steam, Windows only. The game is single-player. The minimum system requirements list Windows 10 64-bit.' },
  { question: 'Is Welcome to Elderfield multiplayer?', answer: 'No. The game is single-player only — there is no co-op or multiplayer mode.' },
  { question: 'What are the difficulty modes?', answer: 'The Steam store description confirms two modes. Cozy Mode offers a laid-back farming and discovery experience. Challenge Mode is for players who want to test their skills against the Old Gods, with deeper turn-based combat and resource management.' },
  { question: 'Is there romance and marriage?', answer: 'Romance is planned but not yet implemented. In a Steam Community discussion, developer Chris Cote said it "still needs to be implemented" and that they plan to let players reach the end of a relationship with any character, choosing a romantic (spouse) or platonic (roommate) outcome [Unconfirmed].' },
  { question: 'What kind of combat does the game have?', answer: 'Turn-based combat with AP (action point) costs. Fights use gathered resources, strategic buffs, and diverse equipment, and fleeing is a legitimate option against Lovecraftian horrors.' },
  { question: 'What can you do besides farming?', answer: 'Fish, mine, forage, cook, craft, customize your home and character, befriend the townsfolk, investigate daily mysteries, and explore a "dead mall" dungeon. The demo also includes a sewer area and a lake reached via the playground manhole.' },
  { question: 'What is the "cozy horror" genre?', answer: 'Cozy horror pairs relaxing life-sim activities (farming, fishing, decorating) with unsettling horror atmosphere and stakes. Elderfield draws on horror-manga art in the tradition of Junji Ito — contaminating the familiar rather than jump-scares.' },
  { question: 'Who made Welcome to Elderfield?', answer: 'Developed by Chris Cote, a solo Canadian developer, and published by Kwalee. The soundtrack is by composer Dated.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10 64-bit, 11th Gen Intel Core i5-11600K or AMD Ryzen 5 5600X, 8 GB RAM, NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570, DirectX 11, 2 GB available storage, 1280x768 minimum resolution.' },
  { question: 'How long is the game?', answer: 'No official playtime estimate has been published [Unconfirmed]. The demo covers about 1/6 of the planned game; the full release is expected to be roughly 3x the demo town size with at least two more dungeon areas.' },
  { question: 'Is there an official wiki?', answer: 'Yes — a community wiki exists at welcometoelderfield.wiki.gg, but it is still in its early stages with many pages to fill. This site is an unofficial fan resource and is not affiliated with the developer or publisher.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Welcome to Elderfield by Chris Cote / Kwalee — release, demo, platforms, gameplay, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

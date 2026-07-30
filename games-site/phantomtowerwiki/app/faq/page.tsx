import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Phantom Tower — release date, price, classes, elements, gameplay, roguelike mechanics, demo, system requirements, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Phantom Tower?', answer: 'Phantom Tower is a fast-paced roguelike action RPG developed and published by Horien Studio. Released on July 13, 2026 on Steam Early Access, it features 8 unique classes, 4 elements (IGNIS, AQUA, TERRA, VENTI), 128 weapons, 200+ gear pieces, and 47 Tower Blessings across a mysterious 100-floor tower.' },
  { question: 'Is Phantom Tower single-player or co-op?', answer: 'Phantom Tower is currently single-player only. The developers are exploring the possibility of implementing multiplayer co-op during Early Access. Both Climb Mode and Survival Mode are solo experiences.' },
  { question: 'How many classes are there?', answer: 'There are 8 unique classes, each with distinct abilities, combat styles, and elemental affinities. On Steam Early Access, all 8 classes are available from the start. Each class has unique skill trees and synergizes differently with elements and weapons.' },
  { question: 'What are the four elements?', answer: 'The four elements are IGNIS (Fire), AQUA (Water), TERRA (Earth), and VENTI (Wind). You can swap elements mid-battle to trigger 16 different elemental reactions. Examples include freezing enemies with Aqua+Aqua, spreading corrosive Erode with Terra+Aqua, and chaining shockwaves with Venti+Ignis.' },
  { question: 'What are Tower Blessings?', answer: 'Tower Blessings are 47 unique, game-changing abilities hidden across the tower floors. Examples include Artemis Descent (arrows hunt highest-HP enemy on dodge) and Chain Quake (damage ripples between enemies). Stacking multiple blessings creates powerful run-defining synergies.' },
  { question: 'What is the Soulbinder system?', answer: 'The Soulbinder system lets you permanently lock desired stats onto equipment and push individual stats all the way to gear level 99. This enables deep, long-term build specialization across many runs without losing your progress.' },
  { question: 'What happens when you die?', answer: 'In Climb Mode, you keep forged equipment and character progression but lose items collected during that specific run. In Survival Mode, death is permanent — it is a true permadeath mode where you face infinite waves of enemies.' },
  { question: 'How long is a typical run?', answer: 'A Climb Mode run varies by floor depth and player skill. Early floors take 15-30 minutes. Pushing deeper floors (50+) with better gear can take 45-90 minutes. Survival Mode runs depend entirely on your build and how long you can last against infinite hordes.' },
  { question: 'How long is Phantom Tower?', answer: 'The tower has 100 floors in Climb Mode. Completing all 100 floors with one class takes roughly 5-10 hours. Unlocking all classes, mastering all builds, collecting all 128 weapons and 47 blessings, and earning all achievements adds 40-60+ hours of content.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo is available on Steam. It lets you climb up to floor 40 in Climb Mode and try Survival Mode up to the Desert biome. Progress saves locally and carries over to the full game.' },
  { question: 'What is the price?', answer: 'Phantom Tower is $12.99 (€12.99/£11.75) on Steam, with a 24% launch discount for the first two weeks. On mobile (Google Play), the game is free with the Warrior class, and additional classes unlock for $10. The price will increase when the game leaves Early Access.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i3-6100 or Ryzen 3 1200, 4GB RAM, GT 1030 or RX 550 (2GB VRAM), DirectX 11, 1GB storage. Recommended: Windows 10/11 64-bit, Intel Core i5-10400 or Ryzen 5 3600, 8GB RAM, GTX 1060 or RX 580 (4GB VRAM), DirectX 11, 4GB storage.' },
  { question: 'Does Phantom Tower have controller support?', answer: 'Phantom Tower supports controllers and is tagged for controller use on Steam. It also runs well on handheld devices like Steam Deck.' },
  { question: 'Are there microtransactions?', answer: 'On Steam, there are no microtransactions — all 8 classes and content are included with the purchase. The mobile version has a one-time $10 unlock for additional classes beyond the free Warrior.' },
  { question: 'What game modes are there?', answer: 'Two modes: Climb Mode (the main campaign with 100 floors, where progress carries over between runs) and Survival Mode (permadeath mode where you face infinite hordes of increasingly difficult enemies).' },
  { question: 'What is the endgame like?', answer: 'After reaching floor 100, endgame focuses on higher difficulty tiers, legendary gear hunting, mastering all 8 classes, perfecting elemental combo builds, collecting all 47 Tower Blessings, and pushing Survival Mode leaderboards.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Phantom Tower — gameplay, classes, elements, roguelike mechanics, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

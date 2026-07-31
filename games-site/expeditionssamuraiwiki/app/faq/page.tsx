import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Expeditions: Samurai — release date, Early Access content, co-op, romance, stealth, village management, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Expeditions: Samurai?', answer: 'Expeditions: Samurai is a party-based tactical CRPG set in Sengoku-era Japan (1600 AD), developed by Campfire Cabal — the ex-Logic Artists team behind Expeditions: Rome, Viking, and Conquistador — and published by THQ Nordic. You play Captain Flynn, an English privateer who arrives in Japan and is swept into the final days of the civil war that ends at the Battle of Sekigahara.' },
  { question: 'When does Expeditions: Samurai release?', answer: 'Expeditions: Samurai launches into Steam Early Access on August 7, 2026. Full release is planned for early 2027 (Q1).' },
  { question: 'What is included in Early Access?', answer: 'Early Access launches with Act One (~8 hours), including the full scope of combat, exploration, stealth, and world map travel, plus several hours of quests with full high-quality voice-over. 45+ levels and 100+ events/encounters are planned across the full game.' },
  { question: 'What platforms is it on?', answer: 'PC via Steam at Early Access. Full controller support is built in from the ground up (DualSense, Xbox controllers, handhelds), and the game is Steam Deck tested. A console release may follow the 1.0 launch.' },
  { question: 'Is there co-op?', answer: 'Yes — the first in the series. An optional full-campaign 2-player online co-op with drop-in/drop-out. Both players play as twin captains and share dialogue scenes, with both characters\' skills counting in dialogue checks. You can compete for control of important decisions — or even a companion\'s affections.' },
  { question: 'How many companions are there?', answer: '8 companions, each with a personal story and dedicated quest chain. All 8 can become friends, rivals, or romance options depending on how you treat them. Named so far: Antje the burglar, Johan the swordsman, Tora-Hime the onna-musha, Étienne Durand the priest-diplomat, and Piet Ruisch the brawler.' },
  { question: 'Does the game have stealth?', answer: 'Yes — stealth is a major new pillar for the series. You can sneak in real time, split the party, set up ambush positions, use firecrackers and smoke bombs to distract guards, slip past sentries, and perform silent takedowns before opening turn-based combat with a devastating surprise attack.' },
  { question: 'What is the combat like?', answer: 'Combat is turn-based but fast and free — movement, attacks, and interruptions can all play out simultaneously, making tactical skirmishes feel visceral. The enemy AI for stealth was built by veterans of the Hitman series.' },
  { question: 'What classes can I play?', answer: 'You create Captain Flynn — the surname is fixed, but you choose your first name, appearance, and one of four classes that determine your approach to combat. The four classes are chosen during character creation.' },
  { question: 'Is there village management?', answer: 'Yes — you can become the lord (Hatamoto) of a village in Japan, but the feature arrives during Early Access development rather than at launch. The full 1.0 release includes your own village to rule over.' },
  { question: 'How long is the game?', answer: 'Act One in Early Access is roughly 8 hours. The full game is planned at four acts totaling ~60 hours.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Intel Core i5-8600K / AMD Ryzen 5 2600X, 12 GB RAM, GeForce GTX 1070 (8 GB) / Radeon RX Vega 56, 15 GB storage, Windows 10. Recommended: Intel Core i5-12400 / AMD Ryzen 5 5600, 16 GB RAM, GeForce RTX 2060 Super / Radeon RX 6700.' },
  { question: 'What makes this different from Expeditions: Rome?', answer: 'Three big additions: a full stealth system (new third pillar alongside violence and diplomacy), a Sengoku-era Japanese setting with an East-meets-West weapon arsenal (flintlocks and cutlasses alongside katanas, naginatas, and longbows), and the series-first 2-player co-op campaign.' },
  { question: 'Who develops Expeditions: Samurai?', answer: 'Campfire Cabal, a ~30-person studio founded by veterans of Logic Artists (Expeditions: Conquistador, Viking, and Rome — 1.3M+ combined sales). The game is published by THQ Nordic and built in Unreal Engine 5.' },
  { question: 'Is there difficulty customization?', answer: 'Yes — difficulty is customizable across separate systems such as combat and resource management, so you can tailor the challenge to your preferred playstyle.' },
  { question: 'Is there romance in co-op?', answer: 'Yes — in co-op, both players can compete for a companion\'s affections. Relationships with all 8 companions can develop into friendship, rivalry, or romance.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Expeditions: Samurai — release, co-op, romance, stealth, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

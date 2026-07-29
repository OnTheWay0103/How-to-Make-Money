import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Bonehold — release date, price, classes, gameplay, roguelike mechanics, demo, system requirements, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Bonehold?', answer: 'Bonehold is a 3D roguelike dungeon crawler ARPG developed and published by Pixel Jackal. Released on July 28, 2026 on Steam, it features 7 unique character classes, procedurally generated dungeons, hack-and-slash combat with charge mechanics, and a dark fantasy setting inside an ancient necromantic fortress.' },
  { question: 'Is Bonehold single-player or co-op?', answer: 'Bonehold is a single-player game only. There is no multiplayer, co-op, or online component. The game is designed entirely around solo dungeon crawling and build experimentation.' },
  { question: 'How many classes are there?', answer: 'There are 7 unique classes: Knight (melee tank), Barbarian (high-damage bruiser), Scorcher (fire mage), Spellblade (magic/melee hybrid), and three additional unlockable classes that become available through meta-progression.' },
  { question: 'Can you mix classes?', answer: 'Yes! While each class provides a clear archetype, the real depth comes from hybridization. You can equip weapons and spell scrolls from any class, creating cross-class builds like a "Death Knight" (heavy armor + dark magic) or a "Spellblade tank" (magic + shield).' },
  { question: 'What is the charge attack system?', answer: 'Most weapons in Bonehold use a charge mechanic — holding the attack button charges up for a more powerful strike. Timing and positioning are critical. A quick tap does minimal damage late-game, while a fully charged attack can devastate enemies. Learning charge windows is key to survival.' },
  { question: 'Are dungeons random?', answer: 'Yes. Dungeon layouts, room arrangements, enemy placements, loot drops, and trap locations are all procedurally generated. No two runs are the same. However, you will recognize recurring room templates and enemy types as you play more.' },
  { question: 'What happens when you die?', answer: 'Death in Bonehold is permanent for that run — you lose all weapons, armor, spell scrolls, and items collected during that descent. However, meta-progression elements (unlocked classes, Steam achievements, and certain permanent upgrades) persist across runs.' },
  { question: 'How long is a typical run?', answer: 'A full dungeon descent varies by player skill and class, but most runs last 20-45 minutes. Early runs tend to be shorter as you learn enemy patterns and charge timing. Deep runs on harder floors can exceed an hour.' },
  { question: 'How long is Bonehold?', answer: 'As a roguelike, Bonehold has theoretically infinite replayability. Completing a full descent through all floors with one class takes roughly 2-4 hours. Unlocking all classes, mastering all builds, and earning all 98 Steam achievements adds 30-50+ hours of content.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo is available on Steam. It lets you play through the early dungeon floors and try several classes before purchasing the full game.' },
  { question: 'What is the price?', answer: 'Bonehold is affordably priced. Check the Steam store page for current regional pricing. An introductory launch discount is available until August 4, 2026.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 7, AMD Phenom 8450 or Intel Core 2 Duo E8400, 4GB RAM, GTX 470 or Radeon HD 6870, 1GB storage. Recommended: Windows 10, Intel Core i5-8400, 8GB RAM, GTX 970, 2GB storage. The game runs on very modest hardware.' },
  { question: 'Does Bonehold have controller support?', answer: 'Yes. Bonehold features full controller support with both PlayStation and Xbox controller layouts. It also runs well on handheld devices like Steam Deck.' },
  { question: 'Are there microtransactions?', answer: 'No. Bonehold has no microtransactions, battle passes, or in-game purchases. The only DLC is the official soundtrack.' },
  { question: 'How long is the demo?', answer: 'The free Steam demo lets you explore the early dungeon floors and experiment with several starting classes. Progress does not carry over to the full game, but it gives you a solid feel for the combat and build systems.' },
  { question: 'What is the endgame like?', answer: 'After completing the main dungeon descent, you can tackle higher difficulty tiers with stronger enemies and better loot. Endgame focuses on legendary item hunting, mastering all 7 classes, perfecting hybrid builds, and completing all 98 Steam achievements.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Bonehold — gameplay, classes, roguelike mechanics, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

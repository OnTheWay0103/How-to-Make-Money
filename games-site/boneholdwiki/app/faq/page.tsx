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
  { question: 'How many classes are there?', answer: 'There are 7 unique classes in total, but only 4 are officially named: Knight (defensive tank), Barbarian (high-damage bruiser), Scorcher (fire mage), and Spellblade (magic/melee hybrid). The other three classes are not officially named as of launch — any claims about them are unverified.' },
  { question: 'Can you mix classes?', answer: 'Yes! While each class provides a clear archetype, the real depth comes from hybridization — a confirmed core design pillar. Reviews highlight builds like a "Death Knight-esque" hybrid (heavy durability + dark magic built around a slow-charging staff) as some of the most fun the game offers.' },
  { question: 'What is the charge attack system?', answer: 'Most weapons in Bonehold use a charge mechanic — holding the attack button charges up for a more powerful strike. Timing and positioning are critical. A quick tap does minimal damage late-game, while a fully charged attack can devastate enemies. Learning charge windows is key to survival.' },
  { question: 'Are dungeons random?', answer: 'Yes. Dungeon layouts, room arrangements, enemy placements, loot drops, and trap locations are all procedurally generated. No two runs are the same. However, you will recognize recurring room templates and enemy types as you play more.' },
  { question: 'What happens when you die?', answer: 'Death in Bonehold is permanent for that run — you lose all weapons, armor, spell scrolls, and items collected during that descent. There is no checkpoint or save system. Steam achievements track progress globally across runs; claims of permanent meta-progression upgrades are not confirmed by any official source.' },
  { question: 'How long is a typical run?', answer: 'A full descent varies by player skill and class, and there is no official estimate. Reviews describe the pacing as deliberately slow — charged attacks and trap timers make runs long and methodical, and with no save system you should plan for extended sessions.' },
  { question: 'How long is Bonehold?', answer: 'As a roguelike with procedurally generated runs, Bonehold has effectively infinite replayability. What is confirmed: 98 Steam achievements and a deep buildcrafting system that reviews praise. Completion times are not officially documented.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo is available on Steam. It lets you play through the early dungeon floors and try several classes before purchasing the full game.' },
  { question: 'What is the price?', answer: 'Bonehold is affordably priced. Check the Steam store page for current regional pricing. An introductory launch discount is available until August 4, 2026.' },
  { question: 'What are the system requirements?', answer: 'The official Steam page lists Windows 7 as the minimum OS, but its RAM and storage figures contain reporting errors and no verified requirements exist as of launch. The game is a modest 3D indie title, but treat specific CPU/GPU lists you see elsewhere as unverified.' },
  { question: 'Does Bonehold have controller support?', answer: 'No, not as of launch. Bonehold is keyboard-and-mouse only, and Steam Deck is not officially supported. Controller support and Steam Deck compatibility are among the most common community requests.' },
  { question: 'Are there microtransactions?', answer: 'No. Bonehold has no microtransactions, battle passes, or in-game purchases. The only DLC is the official soundtrack.' },
  { question: 'How long is the demo?', answer: 'A free demo is available on Steam. Demo content is limited compared to the full game — check the Steam page for what the current demo build includes.' },
  { question: 'What is the endgame like?', answer: 'Endgame focuses on legendary item hunting (confirmed as build-defining power spikes), mastering all classes, and the 98 Steam achievements. No official higher-difficulty-tier or New Game+ system has been confirmed.' },
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

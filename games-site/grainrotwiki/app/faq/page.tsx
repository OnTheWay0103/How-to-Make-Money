import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Grain Rot — release date, platforms, price, demo, co-op, gameplay, progression, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Grain Rot?',
    answer:
      'Grain Rot is a horror co-op extraction builder developed by Beck & Branch Games and published by Neem Interactive. You play as a "Living Spark" inhabiting fragile wooden vessels, descending into procedurally shifting underground ruins with up to 3 friends to scavenge loot, fight Corrupted enemies, and extract before the Rot consumes you. It launches on Steam on August 7, 2026.',
  },
  {
    question: 'When does Grain Rot come out?',
    answer:
      'August 7, 2026 on Steam (PC). The game has nearly 200,000 wishlists and over 350,000 demo downloads. No console release date has been announced.',
  },
  {
    question: 'Is Grain Rot free to play?',
    answer:
      'No. Grain Rot is a paid game. The exact price has not been announced but is expected to be $14.99-$19.99 USD. A free demo is available now on Steam with 3 biomes, 9 enemies, and 20+ unlockable constructs.',
  },
  {
    question: 'Can I play Grain Rot solo?',
    answer:
      'Yes. Grain Rot is fully playable solo. The game scales for 1-4 players, though the experience is designed around co-op chaos. Solo play emphasizes stealth and careful resource management.',
  },
  {
    question: 'How many players can play co-op?',
    answer:
      'Grain Rot supports up to 4 players in online co-op. You and your friends each control a Living Spark that can possess different wooden vessels with unique abilities.',
  },
  {
    question: 'Is there crossplay?',
    answer:
      'Not at launch. Grain Rot launches on PC (Steam) only. Console versions (PS5, Xbox Series X|S) are under discussion based on player demand and wishlist data.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Minimum: Windows 10, Intel i5-4590 / AMD Ryzen 5 2600, 8 GB RAM, NVIDIA GTX 970 / AMD R9 390. Recommended: Windows 10/11, Intel i5-10600 / AMD Ryzen 5 3600, 16 GB RAM, NVIDIA RTX 2060 / AMD RX 5700. Approximately 10 GB storage space required.',
  },
  {
    question: 'Does demo progress carry over to the full game?',
    answer:
      'No. The demo is a standalone experience. All progress resets when the full game launches on August 7. Your skills and game knowledge carry over, but your Outpost, unlocks, and cosmetics start fresh.',
  },
  {
    question: 'What is in the demo?',
    answer:
      'The free demo includes 3 biomes (The Shallows, The Warrens, The Depths), 9 enemy types, 20+ unlockable constructs and weapons, upgradeable Outpost rooms, dungeon modifiers, and cosmetics. Co-op is fully supported.',
  },
  {
    question: 'How long is a typical run?',
    answer:
      '15-30 minutes for a standard extraction run. Deep runs into later biomes can take 45+ minutes. The roguelike extraction structure means every run is different.',
  },
  {
    question: 'Are there dedicated servers?',
    answer:
      'Grain Rot uses peer-to-peer networking. The host\'s machine runs the world, and other players connect to it. Dedicated servers have not been announced.',
  },
  {
    question: 'Is there PvP?',
    answer:
      'Not in the traditional sense. The game encourages "friendly chaos" — you can dropkick teammates, launch their Spark out of their vessel, or block them in monster corridors. These physics-driven interactions are by design, but there are no formal PvP modes.',
  },
  {
    question: 'Will there be post-launch content?',
    answer:
      'Yes. Beck & Branch Games has confirmed free content updates after launch, including new biomes, enemies, bosses, and constructs. All updates will be free — no microtransactions.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best ways are: the Steam Community forums for Grain Rot, the official Grain Rot Discord server, or the in-game feedback tool. The developers are very active in the community and responsive to player feedback.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Grain Rot — gameplay, platforms, progression, and more.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

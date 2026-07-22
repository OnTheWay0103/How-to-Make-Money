import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Echoes of Mystralia — release date, platforms, spell crafting, gameplay, progression, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Echoes of Mystralia?',
    answer:
      'Echoes of Mystralia is an action-heavy spellcrafting ARPG roguelite developed by Borealys Games. You play as Mazarim, a Watcher protecting the Cycle of Memories from a mysterious Rift. The game features a unique spell crafting system with millions of possible spell combinations using fire, ice, and lightning elements. It enters Steam Early Access on August 11, 2026.',
  },
  {
    question: 'Is Echoes of Mystralia free to play?',
    answer:
      'No. Echoes of Mystralia is a paid Early Access title on Steam. Pricing will be announced closer to the August 11, 2026 release date. A free demo is currently available on Steam featuring 4 core spells, 50 Memories, 15 Relics, and the first region (Ash Forest).',
  },
  {
    question: 'Can I play solo?',
    answer:
      'Yes. Echoes of Mystralia is designed as a single-player experience. You control Mazarim throughout each run, customizing your spell loadout and progressing through regions solo.',
  },
  {
    question: 'Is there multiplayer or co-op?',
    answer:
      'No. Echoes of Mystralia is a single-player game. There is no co-op or multiplayer mode.',
  },
  {
    question: 'What platforms is it on?',
    answer:
      'Echoes of Mystralia is currently announced for PC (Steam) only. Console versions (PS5, Xbox Series X|S, Switch 2) have not been confirmed but may be considered after the full PC release.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Minimum: Windows 10 64-bit, Quad Core 2.4 GHz CPU, 8 GB RAM, GTX 1060 / RX 580 GPU, 10 GB storage. Recommended: Windows 10 64-bit, Quad Core 2.4 GHz CPU, 16 GB RAM, RTX 2060 / RX 5600XT GPU, 10 GB SSD.',
  },
  {
    question: 'How does spell crafting work?',
    answer:
      'You start with 12 spell forms (base templates) and collect Memories from defeated enemies. Memories act as modifiers that you slot into a spell form\'s grid. The positioning of Memories determines the spell\'s output. Combining different elements (fire, ice, lightning) creates hybrid effects. There are 110 Memories at Early Access launch, enabling millions of possible spell combinations.',
  },
  {
    question: 'What are Memories and how do I get them?',
    answer:
      'Memories are spell modifiers dropped by defeated enemies. They can change a spell\'s element, add chain effects, increase AoE, summon projectiles, and more. Common enemies drop Common/Uncommon Memories, elites drop Uncommon/Rare, and Guardian bosses drop Rare/Legendary. You keep collected Memories permanently across runs.',
  },
  {
    question: 'How long is the game?',
    answer:
      'The demo covers 2–4 hours of content (Ash Forest region). Early Access (3 regions, 3 Guardians) takes 15–25 hours for a first clear. Collecting all 110 Memories takes 40–60 hours. Clearing all difficulties can take 80–100+ hours.',
  },
  {
    question: 'When is the full release?',
    answer:
      'Echoes of Mystralia enters Steam Early Access on August 11, 2026 with 110 Memories, 3 regions, 3 Guardians, and 12 spell forms. Borealys Games has confirmed additional content will be added throughout Early Access, with the full release expected later in 2026.',
  },
  {
    question: 'Will Early Access progress carry over to the full release?',
    answer:
      'Borealys Games has not yet confirmed whether Early Access progress will carry over to the full release. Given the roguelite structure with permanent progression (Memories, Lotus upgrades), carrying progress forward would be logical, but check official announcements closer to the full release date.',
  },
  {
    question: 'Does it have controller support?',
    answer:
      'Yes. Echoes of Mystralia has full controller support on Steam. The game is designed for both keyboard/mouse and controller play.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best channels are: the Steam Community forums for Echoes of Mystralia, the official Borealys Games Discord server, or the in-game feedback tool. The developers are actively engaged with the community during Early Access.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Echoes of Mystralia — gameplay, platforms, progression, and more.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

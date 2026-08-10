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
      'Echoes of Mystralia is an action-heavy spellcrafting ARPG roguelite developed by Borealys Games. You play as Mazarim, a Watcher protecting the Cycle of Memories from a mysterious Rift. The game features a unique spell crafting system with millions of possible spell combinations using the game\'s 7 elements (fire, ice, and lightning among them). It launched into Steam Early Access on August 11, 2026.',
  },
  {
    question: 'Is Echoes of Mystralia free to play?',
    answer:
      'No. Echoes of Mystralia is a paid Early Access title on Steam, and its price is expected to rise at the 1.0 release (per the Steam page). A free demo is available on Steam featuring 4 core spells, 50 Memories, and the first region (Ash Forest). 40+ Relics are confirmed (per the official Steam page) — see the Relics Guide for what\'s verified and what stays TBD.',
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
      'Echoes of Mystralia is currently announced for PC (Steam) only. Console versions have not been announced.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Per the official Steam store page — Minimum: Windows 10 64-bit, Quad Core 2.4 GHz CPU, 8 GB RAM, GTX 1060 / RX 580 GPU, 10 GB storage. Recommended: Windows 10 64-bit, Quad Core 2.4 GHz CPU, 16 GB RAM, RTX 2060 / RX 5600 XT GPU, 10 GB SSD.',
  },
  {
    question: 'How does spell crafting work?',
    answer:
      'You start with 16 starting spells (base templates; 4 in the demo) and collect Memories from defeated enemies. Memories are reordered and combined to shape each spell — the positioning of components determines the spell\'s output, with fire next to ice becoming steam as the official example. With 7 elements and 100+ Memories at Early Access launch, there are millions of possible spell combinations.',
  },
  {
    question: 'What are Memories and how do I get them?',
    answer:
      'Memories are the components dropped by defeated enemies. Reordering and combining them changes what a spell does — official examples include fire next to ice becoming steam, and lightning behind a homing component chasing enemies. At Early Access launch there are 100+ Memories to collect across 3 regions (50 in the demo). Rarity tiers have not been officially documented (TBD). You keep collected Memories between runs.',
  },
  {
    question: 'How long is the game?',
    answer:
      'Borealys has not published playtime estimates (TBD). The demo offers the Ash Forest region, 4 spells, 4 fight challenges, and 50 Memories; Early Access adds two more regions and the full 100+ Memory pool. See the EA Roadmap Guide for the confirmed launch scope.',
  },
  {
    question: 'When is the full release?',
    answer:
      'Echoes of Mystralia launched into Steam Early Access on August 11, 2026 with 100+ Memories, 3 regions, and 16 starting spells. Borealys Games has described an Early Access phase of about a year on the way to 1.0, with additional content added throughout, and the price expected to rise at 1.0 (per the Steam page).',
  },
  {
    question: 'Will Early Access progress carry over to the full release?',
    answer:
      'Borealys Games has not yet confirmed whether Early Access progress will carry over to the full release. Given the roguelite structure with permanent progression (Memories, Lotus upgrades), carrying progress forward would be logical, but check official announcements closer to the 1.0 release.',
  },
  {
    question: 'Does it have controller support?',
    answer:
      'Yes. Echoes of Mystralia has full controller support on Steam. The game is designed for both keyboard/mouse and controller play.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best channels are the Steam Community forums for Echoes of Mystralia and the official Discord (linked from the Steam store page). The developers are actively engaged with the community during Early Access.',
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

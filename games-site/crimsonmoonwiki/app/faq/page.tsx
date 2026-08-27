import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Crimson Moon by ProbablyMonsters — release date, price, co-op, solo, crossplay, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Crimson Moon?', answer: 'Crimson Moon is a soulslike action RPG developed and published by ProbablyMonsters, the studio founded by Harold Ryan (former CEO of Bungie). It is set in the fallen gothic city of Gildenarch, where you play a Nephilim clearing three Wards and eventually facing the Dead Gods. It launches September 1, 2026 on PC (Steam + Epic Games Store), PS5, and Xbox Series X|S.' },
  { question: 'How much does Crimson Moon cost?', answer: 'The Standard Edition is $19.99. The Deluxe Edition is $29.99 and adds future content expansions plus two cosmetic/weapon DLC packs. There are no announced microtransactions as of August 28, 2026.' },
  { question: 'Is Crimson Moon a soulslike?', answer: 'Yes. Hands-on previews (IGN, GamesBeat, OpenCritic) describe it as soulslike melee combat with a Diablo-style loot and progression layer, plus roguelike run structure.' },
  { question: 'Can I play Crimson Moon solo?', answer: 'Yes. Co-op is optional — the game is fully playable solo, and difficulty scales dynamically with player count.' },
  { question: 'Is Crimson Moon co-op? How many players?', answer: 'Crimson Moon supports 2-player online co-op. Partners share a life pool and can revive each other. Local/couch co-op and split-screen had not been confirmed as of August 28, 2026 [Unconfirmed].' },
  { question: 'Is there crossplay in Crimson Moon?', answer: 'Crossplay support across PC, PS5, and Xbox had not been officially detailed as of August 28, 2026 [Unconfirmed]. The co-op guide will be updated as soon as official details are published.' },
  { question: 'Does Crimson Moon have classes?', answer: 'No. There are no classes. Builds are formed by combining equipment, Boons, and Weapon Arts — the official Builds overview trailer emphasized free combination and Weapon Arts coordination in co-op.' },
  { question: 'What are Incursions?', answer: 'Incursions are repeatable missions lasting 15–45 minutes with dynamic maps and enemy configurations. They are the core loop: run, find gear, purify what you want to keep permanently, and return stronger.' },
  { question: 'How does the purification system work?', answer: 'Gear found inside runs can be purified so it becomes a permanent part of your arsenal in the hub\'s storage. Anything not purified is lost when the run ends — exactly how purification triggers is to be detailed at launch [Unconfirmed].' },
  { question: 'What is the Dead Gods boss?', answer: 'The Dead Gods is the final boss encounter, unlocked after defeating the world boss in each of the three Wards. The main antagonist is the vampire lord Solomon Moore, and the corrupting Hellgrowth spreads through Gildenarch.' },
  { question: 'Where is the hub?', answer: 'Sanctus Clypeus is the cathedral hub — the confirmed home for upgrades, forging, translating manuscripts, the War Table quest board, and NPCs including a vampire blacksmith.' },
  { question: 'How long is Crimson Moon?', answer: 'Official playtime estimates had not been published as of August 28, 2026 [Unconfirmed]. The main Ward progression plus repeatable Incursions gives the game significant replay value.' },
  { question: 'What are the PC system requirements?', answer: 'Official PC system requirements had not been published on the Steam page as of August 28, 2026 [Unconfirmed]. The game targets PC, PS5 (including PS5 Pro PSSR support), and Xbox Series X|S. Check the system requirements guide for updates.' },
  { question: 'Who made Crimson Moon?', answer: 'Crimson Moon is developed and published by ProbablyMonsters, founded by Harold Ryan (former Bungie CEO). It was first revealed at PlayStation\'s State of Play on February 12, 2026, playable at Summer Game Fest in June, and the release date was announced August 4, 2026.' },
  { question: 'What platforms is Crimson Moon on?', answer: 'PC (Steam + Epic Games Store), PlayStation 5, and Xbox Series X|S. A physical PS5 release and pre-order status are covered in the release guide.' },
  { question: 'Is there a demo or playtest?', answer: 'Crimson Moon was playable at Summer Game Fest Play Days in June 2026 and has run playtests. Whether a public demo will be released is not confirmed [Unconfirmed].' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Crimson Moon by ProbablyMonsters — gameplay, co-op, builds, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

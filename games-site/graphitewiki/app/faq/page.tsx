import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Graphite — heroes, Break system, timeline combat, artifacts, Tarot deck, campaign, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Graphite?', answer: 'Graphite is a pen-and-ink tactical roguelike RPG developed by RipRed (Colombia) and published by indie.io. It features 7 unique heroes, timeline-based combat with a Break system, unlimited artifact stacking, and a 4-act campaign shaped by a Tarot adventure deck. It launched on Steam on July 27, 2026.' },
  { question: 'Who developed Graphite?', answer: 'Graphite was developed by RipRed, a studio based in Colombia, and published by indie.io.' },
  { question: 'How many heroes are playable?', answer: 'There are 7 heroes: Warrior (tank), Rogue (burst DPS), Hunter (ranged), Monk (healer/support), Mage (AoE magic), Bard (buffer/controller), and Tamer (pet-based). Each has unique abilities, passives, and playstyles.' },
  { question: 'How do I unlock all heroes?', answer: 'The Warrior is unlocked from the start. Other heroes are unlocked through the Bond system — completing quests, reaching Bond milestones, or progressing through campaign acts. See our How to Unlock All Heroes guide for details.' },
  { question: 'How does the Break system work?', answer: 'The Break system is a stagger mechanic tied to the combat timeline. Each enemy has a Break gauge that fills as you land specific attacks or exploit weaknesses. When the gauge maxes out during the enemy\'s turn window, they become vulnerable — taking bonus damage and skipping their action. Coordinating Break timing across your party is key to defeating tough foes.' },
  { question: 'What is Timeline combat?', answer: 'Graphite uses a visible turn-order timeline where all units (heroes and enemies) are displayed in sequence. Each action has a speed value that determines when you act next — quick abilities move you up the timeline, heavy ones push you back. You can see enemy upcoming actions and plan Breaks accordingly.' },
  { question: 'Can I stack multiple Artifacts?', answer: 'Yes. Graphite allows unlimited artifact stacking — you can equip multiple copies of the same artifact type. Effects stack multiplicatively in many cases, enabling powerful synergy builds. Artifact builds are a core part of the endgame strategy.' },
  { question: 'What is the Bond system?', answer: 'The Bond system tracks relationships between paired heroes during a campaign run. As bonds level up through combat proximity and shared encounters, they unlock bonus effects — stat sharing, team combos, and reaction abilities. Bond progress resets each run.' },
  { question: 'How does the Tarot adventure deck work?', answer: 'Between combat encounters, the Tarot deck determines what events, shops, rest sites, or encounters appear on the adventure map. Each card flip presents a choice with unique outcomes — some offer power-ups with curses, others give free blessings. Your route is shaped by your Tarot decisions.' },
  { question: 'How many acts are in the campaign?', answer: 'The campaign has 4 acts. Each act features a unique biome, enemy roster, boss encounter, and Tarot event pool. Acts escalate in difficulty and introduce new mechanics. A successful full run takes approximately 2-3 hours.' },
  { question: 'Is Graphite a roguelike?', answer: 'Yes. Each run has procedurally generated elements — Tarot events, artifact shops, encounter order. Death means starting over, though permanent meta-progression carries over between runs (unlockable hero passives, starting artifacts, Tarot options).' },
  { question: 'What makes the pen-and-ink art style special?', answer: 'Graphite\'s art is entirely hand-drawn in a monochromatic ink style reminiscent of sketchbook illustrations. Characters, enemies, and environments use bold linework and cross-hatching with occasional red accents for dramatic effect. The style is inspired by classic fantasy art and ink comics.' },
  { question: 'Is there meta-progression?', answer: 'Yes. Even failed runs award meta-currency that unlocks permanent upgrades across runs — additional starting artifacts, hero passive enhancements, new Tarot card options, and expanded shop inventories.' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10, Intel i5 / AMD Ryzen 3, 8GB RAM, GTX 960 / RX 470, 4GB VRAM, 5GB storage. Recommended: Windows 10/11, Intel i7 / Ryzen 5, 16GB RAM, GTX 1060 / RX 580, 6GB VRAM, SSD.' },
  { question: 'Does Graphite have controller support?', answer: 'Yes. Graphite supports full controller input and is verified on Steam Deck. The turn-based timeline interface works naturally with both controller and mouse/keyboard.' },
  { question: 'Is there a demo available?', answer: 'Check the Steam page for demo availability. The full game launched on July 27, 2026.' },
  { question: 'What languages are supported?', answer: 'Graphite supports English, Spanish, French, German, Japanese, Korean, Portuguese-Brazil, Russian, and Simplified Chinese at launch.' },
  { question: 'How long is a typical play session?', answer: 'A full campaign run (all 4 acts) takes 2-3 hours. Individual acts take 30-45 minutes. Shorter runs are common when experimenting with new hero builds.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Graphite — heroes, combat, artifacts, campaign, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

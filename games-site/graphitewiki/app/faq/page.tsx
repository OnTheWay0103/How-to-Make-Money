import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Graphite — heroes, Break system, timeline combat, artifacts, Tarot deck, campaign, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Graphite?', answer: 'Graphite is a pen-and-ink tactical roguelike RPG developed by RipRed (Colombia) and published by indie.io. It features 7 playable heroes, timeline-based combat with a Break system, unlimited artifact stacking, and a four-act campaign shaped by a Tarot adventure deck. It launched on Steam, GOG, and the indie.io Store on July 27, 2026.' },
  { question: 'Who developed Graphite?', answer: 'Graphite was developed by RipRed, a studio based in Colombia, and published by indie.io. It is RipRed\'s debut commercial release.' },
  { question: 'How many heroes are playable?', answer: 'There are 7 playable heroes. Only two are confirmed by name so far: The Knight (shield-based, built around the Break system) and The Mage (offensive spells plus defensive support). The other five have not been officially revealed.' },
  { question: 'How do I unlock all heroes?', answer: 'The exact unlock system is partially unconfirmed. The full game contains 7 heroes, the demo contains 4, and the game includes a friendship system between characters. See our How to Unlock Heroes guide for what is confirmed so far.' },
  { question: 'How does the Break system work?', answer: 'Every combatant has Poise (an action gauge). Depleting an enemy\'s Poise to zero cancels their scheduled action and pushes their turn down the timeline — interrupting powerful attacks, summons, and buffs. The system is fully symmetric: enemies can Break your heroes the same way.' },
  { question: 'What is Timeline combat?', answer: 'Combat plays out on a shared timeline. Every action has a duration, multiple units act simultaneously, and you can see enemy wind-ups before they resolve. Reading the timeline — and timing your Breaks — is the core skill.' },
  { question: 'Can I stack multiple Artifacts?', answer: 'Yes. Graphite allows unlimited artifact stacking — there is no cap, and stacking duplicates of the same artifact amplifies its effect. Enemies acquire artifacts too, so fights become an arms race.' },
  { question: 'What is the Bond/friendship system?', answer: 'Graphite includes a friendship system between characters — the demo supports friendship levels up to 1. How friendship is gained and how it connects to unlocking heroes is unconfirmed.' },
  { question: 'How does the Tarot adventure deck work?', answer: 'Between fights, a tarot-inspired deck presents illustrated, narrated event cards with branching, choose-your-own-adventure style choices. Outcomes are shaped by your party, your items, and your prior decisions.' },
  { question: 'How many acts are in the campaign?', answer: 'Four acts, each spanning 15 days, per the developer\'s launch materials. No full-game playtime figure has been published; a single Act 1 demo run takes about 30 minutes.' },
  { question: 'Is Graphite a roguelike?', answer: 'Yes. Each run has procedurally generated encounters and deck-driven events, and runs reset on failure. It is a roguelite: artifacts, events, and unlockables persist across runs in some form, though the exact scope is unconfirmed.' },
  { question: 'What makes the pen-and-ink art style special?', answer: 'Graphite is hand-drawn in a pencil-and-ink notebook aesthetic — the game takes place inside a child\'s school notebook, where heroes and monsters are drawn in pen and ink and the world is made of paper and repurposed household junk.' },
  { question: 'Is there meta-progression?', answer: 'Graphite is a roguelite: artifacts, events, and unlockables persist across runs in some form. The exact scope of what carries over between runs is unconfirmed.' },
  { question: 'What are the system requirements?', answer: 'Per the official Steam store page: Windows 10, a 2.0 GHz processor, 2 GB RAM, 2 GB graphics, and 1 GB storage. No recommended tier has been published.' },
  { question: 'Can I play Graphite on Steam Deck?', answer: 'Unconfirmed. No official statement about Steam Deck support has been published.' },
  { question: 'Is there a demo available?', answer: 'Yes. Graphite: Act 1 is a free demo on Steam (released December 19, 2024) — 4 playable heroes, 50 stackable artifacts, 15 adventure events, and runs of about 30 minutes. The full game launched on July 27, 2026.' },
  { question: 'What languages are supported?', answer: 'The demo lists English and Spanish (Spain and Latin America) with full audio, per the Steam listing. Check the Steam page for the full game\'s language list.' },
  { question: 'How much does Graphite cost?', answer: '$8.99 USD, with a 20% launch discount ($7.19) that ran through August 10, 2026. Check the Steam page for the current listing.' },
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

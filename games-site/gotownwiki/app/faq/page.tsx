import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Go-Go Town! — release date, price, co-op, automation, tourists, EGO, Creative Mode, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Go-Go Town!?', answer: 'Go-Go Town! is a co-op city builder and life sim developed and published by Prideful Sloth. You play as the mayor of a rundown former tourist destination — build shops, grow production chains, attract tourists, and automate your town with hired Townies. The 1.0 full release launched July 16, 2026 on PC (Steam) and Nintendo Switch / Switch 2 for $27.99.' },
  { question: 'How many players can play co-op?', answer: 'Up to 4 players on Steam, in both online co-op and local split-screen, plus Steam Remote Play Together. Nintendo Switch and Switch 2 support 1-2 players locally and online.' },
  { question: 'Is there crossplay?', answer: 'Steam co-op covers online, local split-screen (vertical orientation), and Remote Play Together. Cross-platform co-op between PC and consoles is not currently featured — check each platform store page for its co-op details.' },
  { question: 'Is Go-Go Town! single-player friendly?', answer: 'Yes. The game plays exactly the same solo — you are the only mayor and do all the work yourself until you hire Townies to automate it. There is no time pressure, rent, or wage drain, so you can go at your own pace.' },
  { question: 'How do I make money?', answer: 'Coins come from tourists buying goods at your shops and stalls. Early game: stock Baldo\'s shop and sell farm produce from your truck. Mid game: open more shops, use vending machines for overproduced items, and complete Export App jobs for Import Tickets.' },
  { question: 'What is EGO and how do I earn it?', answer: 'EGO is the blue-coin currency earned from tourist satisfaction — decor, cleanliness, and happy visitors all contribute. Spend EGO in the Ego Tech app to unlock new buildings, tools (jackhammer, chainsaw), and automation features.' },
  { question: 'How does automation work?', answer: 'Unlock tech in the Ego Tech app, then hire residents at zone clocks (farm, fishery, forest, mine) to automate resource production. Build the Logistics building to assign couriers who deliver materials to shops, food trucks, and construction sites.' },
  { question: 'How do I get more residents (Townies)?', answer: 'Tourists arrive by train each day. Talk to those with a "+" above their head, fulfill their requests, and invite them to stay. Build a house or apartment first — then assign them to work in mines, forest, farm, or shops.' },
  { question: 'What was added in the 1.0 update?', answer: 'The July 16, 2026 1.0 release added Creative Mode and Treasure Hunting (bugs, fossils, artifacts, gems, and relics to collect and display), alongside the full campaign, production chains, and co-op features built during two years of Early Access.' },
  { question: 'Is there a Creative Mode?', answer: 'Yes. Creative Mode is a relaxed, no-pressure sandbox for building your dream town without economy management, included in the free 1.0 update.' },
  { question: 'What platforms is Go-Go Town! on?', answer: 'PC (Steam), Nintendo Switch, and Nintendo Switch 2 Edition. The Switch 2 Edition runs at 1080p/60fps with improved visuals. PS5 and Xbox Series versions were announced and are planned.' },
  { question: 'Is the game Steam Deck verified?', answer: 'Yes — Go-Go Town! is Steam Deck Verified and plays well in handheld mode with full controller support.' },
  { question: 'Are there microtransactions?', answer: 'No. The game is a one-time purchase ($27.99, with a 25% launch discount to $20.99 during the first two weeks). All content updates, including 1.0, are free.' },
  { question: 'Who develops Go-Go Town!?', answer: 'Prideful Sloth, an Australian indie studio known for Yonder: The Cloud Catcher Chronicles and Grow: Song of the Evertree. The game was in Early Access from June 2024 before the July 16, 2026 1.0 launch.' },
  { question: 'What is Treasure Hunting?', answer: 'A 1.0 collection activity — find fossils, artifacts, rare gems, relics, and unique bugs across the map. Display discoveries in the Town Hall or sell duplicates to Arizona Smythe III for coins.' },
  { question: 'Why do my workers stop working?', answer: 'Common causes: tools placed outside the zone boundary, empty seed inventories (collect from purple flowers or buy seed packs), full storage, or task conflicts with the player. Check storage locks and rebuild stuck equipment.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Go-Go Town! — gameplay, co-op, automation, tourists, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

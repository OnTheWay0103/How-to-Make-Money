import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'SpiritVale FAQ: Quick Answers on the Release Date',
  description: 'Frequently asked questions about SpiritVale — pricing, classes, level caps, respecs, PvP, cards, trading, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is SpiritVale?', answer: 'SpiritVale is a buy-to-play class-based MMORPG inspired by Ragnarok Online. It features 7 base classes, 8 advanced specializations, 227 cards, 35+ maps, and 20+ bosses. Available now on Steam Early Access.' },
  { question: 'Is SpiritVale free to play?', answer: 'No. SpiritVale is buy-to-play at $14.99 USD on Steam — a "one-time payment (no subscription)" in the developer\'s words. The game does have a premium shop currency (the developer\'s March 2026 cosmetics notes call it premium currency, denoted "p"): the Early Access launch notes state the cosmetics store "is now purchased from inside the game", and a launch hotfix references "premium currency purchases". The store page adds that "All Microtransactions in SpiritVale are purely cosmetic and do not affect gameplay" under the heading "Fair-To-Play. Never Pay-To-Win.", and official notes also list non-power convenience purchases such as storage expansion and character slots.' },
  { question: 'How many classes are there?', answer: '7 base classes (Acolyte, Knight, Mage, Rogue, Scout, Summoner, Warrior) and 8 advanced classes (Paladin, Priest, Wizard, Gunslinger, Shinobi, Berserker, Necromancer, Weaver). The Gunslinger is the Scout\'s advanced class, and the Weaver is a special advanced class that any Job Level 50 class can unlock.' },
  { question: 'What is the level cap?', answer: 'Base Level caps at 99 and Job Level at 50. At Job Level 50 you complete a class advancement quest to unlock your advanced class.' },
  { question: 'Is there a main quest?', answer: 'No. SpiritVale has no main quest line — you get your Waystone from the Waybinder NPC, activate Waypoints, and grind. See the Beginner Guide for the real first five hours.' },
  { question: 'Can I reset my skills?', answer: 'Yes. Respeccing is completely free at the Waybinder NPC in town — stats and skills, no cost or cooldown. You can also switch between unlocked advanced classes for free.' },
  { question: 'Is there PvP?', answer: 'Yes. SpiritVale has the Colosseum PvP arena (1v1, 3v3, and 6v6 modes) with 6-week seasons, plus Guild Wars — scheduled 15v15 Warfront battles on Saturdays at 20:00.' },
  { question: 'What is the best class for beginners?', answer: 'Knight → Paladin is the most forgiving (high defense, self-healing). Warrior → Berserker for simple damage. Summoner → Necromancer if you prefer pets to tank for you.' },
  { question: 'How does the card system work?', answer: 'There are 227 cards in the game. Cards slot into your gear (weapon, armor, accessories) to provide stat bonuses, and drop from monsters across all zones. See the Cards Guide for the full breakdown.' },
  { question: 'Is there an auction house?', answer: 'Yes — the Auction Hall is back online (it returned August 4, 2026, with a 5% seller tax and a 30-listing cap). Player-to-player trading also runs through vending stalls and direct trade. See the Trading & Market Guide for the current rules.' },
  { question: 'Can I play solo?', answer: "You can solo most of the early and mid game. Paladin is the community's #1 solo class. World bosses and late content require groups — see the Solo Guide for the full breakdown." },
  { question: 'Will my progress be wiped?', answer: 'No. The developers have publicly committed to preserving player data into full release — no further wipes or rollbacks are planned.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about SpiritVale — gameplay, classes, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

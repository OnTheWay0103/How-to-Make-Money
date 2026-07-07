import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Echoes of Aincrad — release date, weapons, gameplay, Cardinal Rank, demo save transfer, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Echoes of Aincrad?', answer: 'Echoes of Aincrad is a single-player action JRPG set in the Sword Art Online universe. Developed by Game Studio Inc. and published by Bandai Namco Entertainment, it launches July 10, 2026 on PS5, Xbox Series X|S, and PC (Steam). You create your own custom avatar and experience the SAO death game from Floor 1.' },
  { question: 'How many weapon types are there?', answer: 'Six: Sword & Shield (balanced), Two-Handed Axe (AoE), Dagger (fast/crit), Rapier (reach/counter), Greatsword (heavy/charge), and Mace (stagger/break). There are no spellcasters or magic — your weapon is your class.' },
  { question: 'Can I change my weapon?', answer: 'Yes, you can swap weapons between quests at the Town of Beginnings. Each weapon gains its own Weapon Exp and Sword Skills. You can master all six on one character.' },
  { question: 'Is it multiplayer?', answer: 'No. Echoes of Aincrad is single-player. You fight alongside AI partners with their own fighting styles, Combination Skills, and Support Skills.' },
  { question: 'Does save data carry from the demo?', answer: 'Yes. Demo save data carries to the full game on the same platform. The demo is available now on all platforms.' },
  { question: 'What is Cardinal Rank?', answer: 'A global proficiency indicator that increases by completing main quests and discovering towns. Higher ranks improve shops, partner abilities, and monster drops — but enemies also scale up. Always spend Growth Points and upgrade gear after ranking up.' },
  { question: 'How do Growth Points work?', answer: 'Earned by leveling up (defeating monsters). Spent at the Inn on stats: Strength, Dexterity, Agility, Intelligence (damage), and Vitality, Endurance, Mind (survival).' },
  { question: 'What are EX-Mods?', answer: 'Weapon modifiers crafted at the Smithy. Combine same-type weapons to pool up to 4 EX-Mods on one weapon. Best early EX-Mods: Reduced Stamina cost and Improved normal Attack damage. You can transfer EX-Mods between weapons.' },
  { question: 'What platforms is it on?', answer: 'PlayStation 5, Xbox Series X|S, and PC (Steam). No Switch or last-gen versions announced.' },
  { question: 'How long is the game?', answer: 'The launch version covers the first two floors of Aincrad. Main story estimated at 15-25 hours. Full completion with all weapons mastered, EX-Mods optimized, and side content can extend well beyond 40 hours.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on all platforms. It drops you into a beta version of the VRMMORPG with access to early weapons and the Town of Beginnings.' },
  { question: 'Are there microtransactions?', answer: 'No. Echoes of Aincrad is a complete single-player experience with no microtransactions, battle passes, or DLC announced at launch.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Echoes of Aincrad — gameplay, weapons, progression, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

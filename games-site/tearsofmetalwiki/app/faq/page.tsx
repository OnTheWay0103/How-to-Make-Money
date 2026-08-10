import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Tears of Metal — Early Access, price, co-op, solo play, progression, heroes, emblems, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Tears of Metal?', answer: 'Tears of Metal is a Scottish action roguelike hack-and-slash developed and published by Paper Cult. You build a village, forge legendary weapons, collect emblems, and fight through procedurally generated expeditions in solo or 4-player co-op. Early Access launched July 22, 2026 on Steam for $24.99.' },
  { question: 'Is Tears of Metal free?', answer: 'No, Tears of Metal is a paid game — $24.99 on Steam. There are no microtransactions or free-to-play elements.' },
  { question: 'Is it on console?', answer: 'Tears of Metal is currently PC-only via Steam. An Xbox Series X|S and Game Pass version has been announced for later in 2026 but is not out yet.' },
  { question: 'Can I play solo?', answer: 'Yes. All 3 heroes are fully viable in solo play. Wallace (longsword) is recommended for beginners due to his forgiving block/parry timing and survivability. Ruadh Stonecrusher offers high-risk, high-reward burst. Brienne is the fastest but has the highest skill floor.' },
  { question: 'How does co-op work?', answer: 'Up to 4 players can team up in online co-op on Steam. The campaign is shared, while village upgrades are individual to each player. There is no local split-screen or couch co-op.' },
  { question: 'How long is the game?', answer: 'A single campaign run through all 3 acts takes 1-2 hours, depending on how much you clear. Village upgrades carry over between runs, so total playtime stretches across many campaigns.' },
  { question: 'Does progress save between runs?', answer: 'Village upgrades are permanent. Expedition progress (hero levels, items, artifacts) resets each run — this is a core roguelike mechanic. The permanent village progression gives you a sense of growth over time.' },
  { question: 'How many heroes are there?', answer: '3 heroes at launch: Wallace (longsword all-rounder, best for beginners), Brienne (unarmed, fastest attacks, high skill floor), and Ruadh Stonecrusher (giant hammer, best stagger and single-hit damage). More may be added during Early Access — two new heroes have been teased.' },
  { question: 'What are emblems?', answer: 'Emblems are passive modifiers that you equip to customize your build. There are 18 emblems covering physical builds, elemental damage, support, and defensive strategies. Combining the right emblems with artifacts creates powerful synergies.' },
  { question: 'What are artifacts?', answer: 'Artifacts are items found during expeditions that grant passive bonuses. They reset each run, making each expedition feel different.' },
  { question: 'Can I respec village upgrades?', answer: 'Currently there is no respec system. Plan your upgrade path carefully — our village upgrade guide can help you prioritize.' },
  { question: 'When is full release?', answer: 'Tears of Metal launched in Early Access on July 22, 2026. Paper Cult has not announced a full release date. Early Access allows the developers to gather feedback and add content.' },
  { question: 'What are the PC system requirements?', answer: 'See the official Steam store page for the current system requirements — specs are listed there and may change during Early Access.' },
  { question: 'Does the game have controller support?', answer: 'Yes, Tears of Metal supports Xbox and PlayStation controllers. Full keyboard and mouse support is also available.' },
  { question: 'Is there difficulty scaling?', answer: 'Yes. Threat Level rises as you clear an act and collect rewards, making regions harder, and co-op spreads the burden across up to 4 players.' },
  { question: 'What happens when you die?', answer: 'Death ends the campaign run and you return to the village with your permanent upgrades. Campaigns are all-or-nothing — see our Save System Guide for the exact rules.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Tears of Metal — gameplay, co-op, progression, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

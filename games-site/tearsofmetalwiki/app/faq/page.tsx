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
  { question: 'Is it on console?', answer: 'Currently Tears of Metal is PC-only via Steam. Console releases have not been announced by Paper Cult.' },
  { question: 'Can I play solo?', answer: 'Yes. All 3 heroes are fully viable in solo play. The Vanguard is recommended for beginners due to its shield and survivability. The Berserker offers high-risk, high-reward gameplay. The Marksman is best in co-op but still usable solo.' },
  { question: 'How does co-op work?', answer: 'Up to 4 players can team up online. Village upgrades and progression are shared across the party. There is no local split-screen or couch co-op.' },
  { question: 'How long is the game?', answer: 'A full campaign run through all 3 acts takes approximately 8-15 hours, depending on how thoroughly you explore and your chosen difficulty. Village upgrades carry over between runs, and the roguelike structure encourages repeated playthroughs.' },
  { question: 'Does progress save between runs?', answer: 'Village upgrades are permanent. Expedition progress (hero levels, items, artifacts) resets each run — this is a core roguelike mechanic. The permanent village progression gives you a sense of growth over time.' },
  { question: 'How many heroes are there?', answer: '3 heroes at launch: Vanguard (tank/defense, shield-based), Berserker (melee DPS, highest damage output), and Marksman (ranged damage, co-op essential). More may be added during Early Access.' },
  { question: 'What are emblems?', answer: 'Emblems are passive modifiers that you equip to customize your build. There are 18 emblems covering physical builds, elemental damage, support, and defensive strategies. Combining the right emblems with artifacts creates powerful synergies.' },
  { question: 'What are artifacts?', answer: 'Artifacts are unique items found during expeditions that grant powerful bonuses. Some have set bonuses when combined. They reset each run, making each expedition feel different.' },
  { question: 'Can I respec village upgrades?', answer: 'Currently there is no respec system. Plan your upgrade path carefully — our village upgrade guide can help you prioritize.' },
  { question: 'When is full release?', answer: 'Tears of Metal launched in Early Access on July 22, 2026. Paper Cult has not announced a full release date. Early Access allows the developers to gather feedback and add content.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10, Intel i5-8400 / AMD Ryzen 5 2600, 8GB RAM, GTX 1060 6GB / RX 580 8GB. Recommended: Windows 10/11, Intel i7-10700 / AMD Ryzen 7 3700X, 16GB RAM, RTX 2060 / RX 5700 XT.' },
  { question: 'Does the game have controller support?', answer: 'Yes, Tears of Metal supports Xbox and PlayStation controllers. Full keyboard and mouse support is also available.' },
  { question: 'Is there difficulty scaling?', answer: 'Yes. Enemies scale based on party size. Solo play is balanced for one hero, while co-op scales enemy HP and damage for 2-4 players. There are also difficulty modifiers you can enable.' },
  { question: 'What happens when you die?', answer: 'In solo play, death ends the run and you return to the village with whatever permanent upgrades you\'ve earned. In co-op, teammates can revive you within a time window — if they fail, you\'re out for that expedition.' },
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

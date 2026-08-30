import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Fallen Tear: The Ascension by Winter Crew Studios / CMD Studios — release date, price, Fated Bonds, bosses, endings, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Fallen Tear: The Ascension?', answer: 'Fallen Tear: The Ascension is a hand-drawn, story-driven 2D Metroidvania developed by Winter Crew Studios and published by CMD Studios. Set in the corrupted high-fantasy world of Raoah, you play as Hira, a mysterious child fated to stand against ancient gods. It blends the party-building and emotional weight of classic JRPGs with the freeform exploration of Metroidvanias, and features full voice acting and multiple endings shaped by your choices.' },
  { question: 'When does Fallen Tear: The Ascension release?', answer: 'The game entered Steam Early Access on March 17, 2026 at $19.99, and leaves Early Access with its 1.0 launch on September 16, 2026. The release date was announced in an official trailer on August 5, 2026.' },
  { question: 'How much does Fallen Tear cost at 1.0?', answer: '$24.99 / €24.99 / £21.99, with a 10% launch discount for the first 14 days after the September 16, 2026 release.' },
  { question: 'What platforms is Fallen Tear on?', answer: 'PC via Steam at launch (Windows). It is Steam Deck playable. PlayStation 5, Xbox Series X|S, and Nintendo Switch versions are planned for a later date.' },
  { question: 'Is Fallen Tear multiplayer or co-op?', answer: 'No. Fallen Tear: The Ascension is strictly single-player. Fated Bonds allies fight alongside you, but they are AI companions, not other players.' },
  { question: 'What is the Fated Bonds system?', answer: 'Fated Bonds are recruitable allies — mages, swordsmen, tricksters, and healers — whose unique combat and traversal abilities change how you fight and explore. Each ally has sidequests and story content. Early Access had 10 Fated Bonds; the 1.0 update adds 11 more. The Steam store description mentions "up to 22" allies, a figure that has not been reconciled with the press release total of 21 [Unconfirmed].' },
  { question: 'How many regions are in the game?', answer: 'Early Access had 10 interconnected major regions. The 1.0 update adds 10 additional major regions — roughly 20 regions total at launch.' },
  { question: 'How many bosses are in Fallen Tear?', answer: 'Early Access shipped with 6 main bosses and 3 optional side bosses. 1.0 adds 5 new main bosses and 19 new optional side bosses — approximately 33 bosses total at launch.' },
  { question: 'Does Fallen Tear have multiple endings?', answer: 'Yes. The official press release confirms multiple possible endings shaped by player choices, including the bonds you form with Fated Bonds allies. How each ending is reached is not yet published [Unconfirmed].' },
  { question: 'How long is Fallen Tear: The Ascension?', answer: 'Roughly 35–40 hours for the main story at 1.0, and 80+ hours for completion-focused players. Early Access covered about 35% of the full game and took 15–20 hours.' },
  { question: 'Does Early Access progress carry over to 1.0?', answer: 'No official statement about save/upgrade carry-over between the Early Access build and the 1.0 release had been published as of August 31, 2026 [Unconfirmed]. Watch the official announcements near the September 16 launch.' },
  { question: 'What is the Temple of Oras?', answer: 'The Temple of Oras is a customizable personal hub above Raoah. There you strengthen bonds with allies, unlock minigames, and improve Hira\'s stats via skills. The 1.0 announcement frames it as building a castle that becomes "a living reflection of Hira\'s journey."' },
  { question: 'What is the Overgrowth ability?', answer: 'Overgrowth is Hira\'s ultimate ability — a transformation into a faster, stronger bestial form that can be unleashed in combat. Specific mechanics and how it unlocks are not fully documented [Unconfirmed].' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i5-4460 / AMD Ryzen 3 1200, 8 GB RAM, NVIDIA GTX 950 / AMD Radeon R7 370, DirectX 11, 15 GB storage. Recommended: Windows 10/11 64-bit, Intel Core i5-6600K / AMD Ryzen 5 1400, 16 GB RAM, NVIDIA GTX 1060 3 GB / AMD RX 580 4 GB.' },
  { question: 'Who developed Fallen Tear?', answer: 'Winter Crew Studios, an indie team based in Manila, Philippines, founded in 2020. The publisher is CMD Studios. Creative Director Stephen Manalastas has noted that Early Access community feedback shaped combat balance and the Fated Bonds system.' },
  { question: 'What languages does the 1.0 launch support?', answer: 'English, German, Brazilian Portuguese, and Simplified Chinese at launch. French, Italian, Spanish, Turkish, Korean, and Japanese text support are planned to arrive after launch.' },
  { question: 'Is there a demo?', answer: 'A demo was shown during development around the Fated Bonds reveal. The Early Access build itself is the playable version on Steam. Whether the separate demo is still available is not confirmed [Unconfirmed].' },
  { question: 'Is there an official wiki?', answer: 'No dedicated wiki existed as of August 31, 2026 — no Fandom, Fextralife, or wiki.gg pages, only news coverage. This site is an unofficial fan resource and is not affiliated with Winter Crew Studios or CMD Studios.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Fallen Tear: The Ascension by Winter Crew Studios / CMD Studios — release, Fated Bonds, bosses, endings, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

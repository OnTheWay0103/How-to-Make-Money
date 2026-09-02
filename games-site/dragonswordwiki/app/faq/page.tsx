import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about DragonSword: Awakening — price, heroes, combat, co-op, familiars, platforms, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is DragonSword: Awakening?', answer: 'DragonSword: Awakening is a buy-to-play anime open-world action RPG developed by South Korean studio HOUND13 (creators of Hundred Soul). Set on the continent of Orbis, you lead a party of heroes to defeat a dragon reawakened after 60 years. It launched July 22, 2026 on Steam for $29.99.' },
  { question: 'Is DragonSword: Awakening free-to-play or buy-to-play?', answer: 'Buy-to-play — $29.99 once ($49.99 Deluxe Edition). No gacha, no microtransactions for power, no season pass. All 19 heroes are unlocked through gameplay. Four more free heroes are coming in post-launch updates.' },
  { question: 'How many playable characters are there?', answer: '19 heroes at launch, each with unique weapons, abilities, and playstyles. You control a party of 3 and swap between them mid-combat. The starting trio (Lute, Castella, Aria) are obtained in the first hour.' },
  { question: 'How does the combat system work?', answer: 'Real-time tag-team combat built around Status Ailments and Signal Skills. Stack confirmed ailments (Stun, Break, Bleed, Burn, Airborne, Electrocution, Knockdown) on enemies, then switch heroes while the target is under an ailment to trigger a Signal Skill — the game\'s biggest single-hit damage source. There are no ultimate bars; the switch trigger replaces them.' },
  { question: 'What are Familiars?', answer: 'Collectible companion creatures. The Abyssal Direwolf is confirmed as a free DLC familiar. Most system details (total count, combat role, mounting) are still unconfirmed and will be documented here as they are verified.' },
  { question: 'Is there co-op multiplayer?', answer: 'Yes — optional co-op for Battle (up to 2 players) and Raid (up to 3 players), host-based with no regional restrictions. The main story is single-player. There is no PvP at launch.' },
  { question: 'Are there microtransactions or gacha?', answer: 'No gacha and no microtransactions for power. The only paid content is the Deluxe Edition and cosmetic DLC (a beach costume pack has already shipped). All 19 heroes are earned through gameplay.' },
  { question: 'How long is the game?', answer: 'Community estimates put the main story around 15-20 hours, but this is not officially confirmed. Endgame content (Tower of Trials, World Bosses, Hunts, raids) adds significant replayability.' },
  { question: 'What platforms is it on?', answer: 'PC via Steam at launch. Console versions have been reported to be in development (a PS5 port specifically); official release dates are TBD. Xbox has not been announced.' },
  { question: 'What languages are supported?', answer: 'Full language list has not been officially published — this is unconfirmed. The original Korean release and Steam material confirm Korean and English support at minimum.' },
  { question: 'Is there a demo?', answer: 'Yes — a free demo is available on Steam. Note that demo save data does not carry over to the full game, and the demo may have technical issues on Steam Deck.' },
  { question: 'Can I play offline?', answer: 'Unconfirmed. Co-op features require an online connection; official documentation on offline solo play has not been published.' },
  { question: 'What are the PC system requirements?', answer: 'Per the Steam store page, the minimum specs are Windows 10, Intel Core i5-9400F, 8 GB RAM, NVIDIA GTX 1660, DirectX 12, and 25 GB of storage (an SSD is strictly required). Recommended specs: Windows 10/11, Intel i7-9700F, 16 GB RAM, NVIDIA RTX 3060.' },
  { question: 'Who developed DragonSword: Awakening?', answer: 'Developed by HOUND13, a South Korean studio best known for the action RPG Hundred Soul. The western Awakening version was redesigned from the original Korean release to remove gacha and microtransactions.' },
  { question: 'Are there post-launch plans?', answer: 'Yes. Four free new heroes (Ryza, Jerome, Veronica, Logan), the Rift System, paid DLC plans, and ongoing patches are confirmed for the second half of 2026. Rift System mechanics have not been detailed yet.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about DragonSword: Awakening — heroes, combat, co-op, familiars, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

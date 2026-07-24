import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about DragonSword: Awakening — price, heroes, combat, co-op, familiars, platforms, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is DragonSword: Awakening?', answer: 'DragonSword: Awakening is a buy-to-play anime open-world action RPG developed by Hound13 (led by the former Dragon Nest producer). Set on the continent of Orbis, you lead a party of heroes to defeat a reawakened dragon. It launched July 22, 2026 on Steam for $29.99.' },
  { question: 'Is DragonSword: Awakening free-to-play or buy-to-play?', answer: 'Buy-to-play — $29.99 once. No gacha, no microtransactions beyond cosmetic DLC. All 19 heroes are unlocked through gameplay. Four more free heroes are coming in post-launch updates.' },
  { question: 'How many playable characters are there?', answer: '19 heroes at launch, each with unique weapons, abilities, and playstyles. You control a party of 3 and swap between them mid-combat. The starting trio (Lute, Castella, Aria) are obtained in the first hour.' },
  { question: 'How does the combat system work?', answer: 'Real-time tag-team combat built around Status Ailments and Signal Skills. Stack status effects like Bleed, Stun, Airborne, Burn, Frost, Shock, and Poison on enemies. At 3 stacks, a Signal Skill prompt appears for a cinematic attack from a benched hero. No ultimate abilities — the Signal Skill loop replaces them.' },
  { question: 'What are Familiars?', answer: 'Magical creatures that serve as mounts and provide passive bonuses for exploration and combat. About 30 Familiars are available — two-thirds earnable in-game. They do not occupy party slots. The Abyssal Direwolf is a free launch reward.' },
  { question: 'Is there co-op multiplayer?', answer: 'Yes — optional co-op for exploration and raids with up to 3 players via invitation codes. The main story is single-player, but endgame raids (Tower of Trials, World Bosses) support multiplayer.' },
  { question: 'Are there microtransactions or gacha?', answer: 'No gacha. No microtransactions beyond optional cosmetic DLC (costumes and some Familiars). All 19 heroes are earned through gameplay — main story, side quests, hidden exploration, and secret dungeons.' },
  { question: 'How long is the game?', answer: 'Main story: ~10-15 hours. Completionist (all heroes, side content, exploration): ~30-40 hours. Endgame content (Tower of Trials, Raids, World Bosses, Hunts) adds significant replayability.' },
  { question: 'What platforms is it on?', answer: 'PC via Steam. Steam Deck compatible (30-40 FPS at 720p medium settings). Console versions have not been announced.' },
  { question: 'What languages are supported?', answer: 'Interface and subtitles: English, Japanese, Korean, Simplified Chinese, Traditional Chinese. Full Korean voice acting.' },
  { question: 'Is there a demo?', answer: 'No demo is currently available. The game is fully released on Steam.' },
  { question: 'Can I play offline?', answer: 'The main story is fully playable offline single-player. Co-op features require an online connection.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i5, 8GB RAM, NVIDIA GTX 1060 / AMD RX 6600 XT, 4GB storage. Recommended hardware scales for UE5 open-world performance.' },
  { question: 'Who developed DragonSword: Awakening?', answer: 'Developed and published by Hound13 Inc., a Korean studio led by Park Jung-sik, the former producer of the acclaimed action MMORPG Dragon Nest.' },
  { question: 'Are there post-launch plans?', answer: 'Yes. Four free new heroes (Ryza, Jerome, Veronica, Logan), the Rift System (dimensional combat portals), Hero Request backstory quests, and ongoing QoL improvements are confirmed for the second half of 2026.' },
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

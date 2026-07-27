import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Taival — release date, price, co-op, Henki companion, Early Access, system requirements, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Taival?', answer: 'Taival ("journey" in Finnish) is a 1-4 player co-op adventure RPG developed by Bonobo Software (Finland) and published by Level Up Gaming. Set in a hand-crafted voxel-style open world, you explore seamless biomes with a shapeshifting Henki companion. It launched in Steam Early Access on July 15, 2026 for $19.99 (with a 20% launch discount).' },
  { question: 'Is it single-player or co-op?', answer: 'Both! You can play solo or in co-op with up to 4 players. Co-op supports online play, local split-screen, or mixed mode (local + online players in the same session). The game is designed for cooperative exploration.' },
  { question: 'What is a Henki?', answer: 'The Henki is your shapeshifting companion — the last of its kind with no fixed form. It can absorb creature essences to transform into different forms: combat beasts (tank), swift mounts (traversal), stealth predators (damage), gliders, pack mules, and support healers. Every form has unique traits and some have rare variants (Golden, Purple clone).' },
  { question: 'How many players can play together?', answer: 'Up to 4 players in a single session. You can mix local split-screen players with online remote players. Remote Play Together and Family Sharing are also supported.' },
  { question: 'How do group story decisions work?', answer: 'Major quest choices use a group voting system. All players participate in the dialogue and can suggest options with their cursors. The majority vote determines the outcome, so your story can branch differently each playthrough.' },
  { question: 'What are Henki Dungeons?', answer: 'Special solo dungeons where you take direct control of your Henki companion. These challenges feature unique puzzles and combat encounters that test your form mastery. Rewards include new forms, traits, and rare variants.' },
  { question: 'How does progression work?', answer: 'Taival has dual progression: your character unlocks skills, improves combat abilities, and levels up professions (including fishing!). Your Henki unlocks new forms, abilities, and mount capabilities. Both tracks grow in parallel.' },
  { question: 'How long is Early Access?', answer: 'The developers plan for Early Access to last 6-12 months. The current build includes a freely explorable open world with playable questlines, professions, crafting, weapon types, skill trees, and the full Henki companion system. The 1.0 release will add more biomes, quests, enemies, bosses, and lore.' },
  { question: 'What biomes are in the game?', answer: 'The Early Access launch includes 4 major biomes in a seamless open world: rolling highlands, dense forests, towering mountains, and ancient ruins/settlements. Each biome has unique environments, inhabitants, quests, and resources.' },
  { question: 'Is there crafting?', answer: 'Yes. Taival features professions and crafting systems. You can gather materials across biomes, craft gear and items at crafting stations, and upgrade your equipment. Different professions unlock different crafting recipes.' },
  { question: 'Can I build a house?', answer: 'Yes! You can place and upgrade player homes throughout the world. Housing provides storage, crafting stations, and rest bonuses. You can decorate your home and upgrade it across multiple tiers.' },
  { question: 'Are there microtransactions?', answer: 'No. Taival is a premium game with no in-game microtransactions. The base game is $19.99 on Steam.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10/11 64-bit, 64-bit processor, 8GB RAM, GTX 1660 Super or equivalent, DirectX 11, 5GB storage. Recommended: Windows 10/11 64-bit, AMD Ryzen 7 3700X, 16GB RAM, RTX 3060 Ti or equivalent, DirectX 11, 5GB SSD.' },
  { question: 'Is there a demo?', answer: 'A free demo was available during Steam Next Fest in June 2026. Check the Steam store page for current demo availability.' },
  { question: 'Does Taival support controllers?', answer: 'Yes. The game supports controllers for both solo and local split-screen co-op play.' },
  { question: 'What languages are supported?', answer: 'The game supports English interface and subtitles. Simplified Chinese interface and subtitles are also available.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Taival — gameplay, co-op, Henki companion, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

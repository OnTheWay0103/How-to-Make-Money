import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Skills & Raids — release date, price, characters, extraction, combat, rarity tiers, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Skills & Raids?', answer: 'Skills & Raids is a party-based extraction RPG by solo developer Eddie H. Hinestroza, available now on Steam. You command a fixed party of three animal heroes — Shelldon (turtle tank), Clawrk (tiger DPS), and Owlivia (owl healer) — in real-time ability-driven combat. Fight, extract resources, and craft gear and skills between runs.' },
  { question: 'Is it single-player?', answer: 'Yes. The game is strictly single-player — you control the full party yourself. There is no multiplayer, no co-op, and no PvP. Steam Cloud and Family Sharing are supported.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam with 11 quests, 2 biomes, and 15 skills — a solid preview of the full game, which has 21+ quests, 5 biomes, and 30 skills.' },
  { question: 'How does combat work?', answer: 'Combat is real-time and ability-driven: each hero equips two abilities, and you manage skill rotations, cooldowns, and resources while reacting to enemy mechanics. Status effects heavily influence every encounter, and a pause mechanic lets you read skill and status descriptions mid-fight. Positioning also matters.' },
  { question: 'What are the characters?', answer: 'The three heroes are Shelldon (turtle, the team\'s tank), Clawrk (tiger, the team\'s DPS), and Owlivia (owl, the team\'s healer — spelled "Wolivia" in some early press coverage). They are the only playable characters.' },
  { question: 'How does the extraction system work?', answer: 'Enemies drop valuable resources, and some even drop their own skills. What you extract is used to craft equipment and skills or to complete quests. On a failed run, anything not kept in a safe pocket is lost forever.' },
  { question: 'What are the rarity tiers?', answer: 'Gear and skills come in five confirmed rarity tiers: Common, Uncommon, Rare, Epic, and Legendary.' },
  { question: 'How do skill synergies work?', answer: 'The developer\'s pitch: combining multiple skills creates powerful synergies that change your approach to combat. The exact trigger rules are not publicly documented yet — the community is still mapping the 30-skill roster.' },
  { question: 'How long is the game?', answer: 'Approximately 2-5 hours of content (per the Steam page): 21+ quests, 5 biomes, and 30 skills.' },
  { question: 'How do I progress?', answer: 'Through quests — target objectives, resource collection, and using specific abilities — which unlock new equipment and skills, plus crafting from extracted resources. There are no character levels or skill trees.' },
  { question: 'What are the PC system requirements?', answer: 'The published minimum and recommended specs are listed on the official Steam store page — check there for the current requirements. The game is Windows 64-bit only, and 12 languages are supported (interface and subtitles).' },
  { question: 'What does it cost?', answer: 'It is a paid game on Steam — check the official store page for current pricing and bundles (a Supporter Pack and artbook/soundtrack DLC are available). Regional pricing varies.' },
  { question: 'Are reviews good?', answer: 'Reviews were mixed at the time of writing — typical for a new solo-dev release, and they may shift as patches land. Check the store page for the current rating.' },
  { question: 'Can I play offline?', answer: 'Yes — the game is single-player with no online requirement for gameplay. Steam Cloud syncs your saves when online.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Skills & Raids — gameplay, characters, extraction, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

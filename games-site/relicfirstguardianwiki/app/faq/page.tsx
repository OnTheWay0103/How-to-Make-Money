import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about The Relic: First Guardian — release date, price, weapons, runes, bosses, game length, demo, platforms, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is The Relic: First Guardian?', answer: 'The Relic: First Guardian is a Korean dark-fantasy soulslike action RPG developed by Project Cloud Games and published by Perp Games. Set in the ruined world of Arsiltus, you play as the last First Guardian tasked with recovering shattered relic fragments and sealing the encroaching Void. It launches July 31, 2026 on PC (Steam) and PS5 for $39.99.' },
  { question: 'Is it a single-player or multiplayer game?', answer: 'The Relic: First Guardian is a pure single-player experience. There is no co-op or multiplayer mode — it is a traditional solo soulslike focused on mastering combat, exploring the semi-open world, and defeating 70+ unique bosses.' },
  { question: 'What platforms is it on?', answer: 'It launches July 31, 2026 on PC (Steam) and PlayStation 5. Xbox Series X|S and Nintendo Switch 2 versions are planned for later in summer 2026.' },
  { question: 'How many weapons are there?', answer: 'There are 5 weapon families: Sword & Shield (balanced defense), Dual Daggers (fast DPS), Sword (versatile single-hand), Two-Handed Weapon (heavy damage), and Staff (ranged magic). Each has 12 dedicated skill trees for deep customization.' },
  { question: 'How does leveling work?', answer: 'There is no traditional XP or leveling system. Character growth comes entirely from collecting memory fragments (runes) — 70+ unique passive effects that modify skills, combat behavior, and weapon performance. Finding runes throughout the world is how you grow stronger.' },
  { question: 'How does stamina work?', answer: 'Attacks cost zero stamina — stamina is reserved exclusively for dodging and blocking. Skills use cooldown timers rather than mana or resource pools. This system encourages aggressive, fast-paced combat while keeping defensive options available.' },
  { question: 'How many bosses are there?', answer: 'The Relic: First Guardian features 70+ unique bosses, each with a tragic backstory. Bosses are former humans transformed into monsters through starvation, curses, and the Void blight. Each boss encounter has unique attack patterns and requires different strategies.' },
  { question: 'What is the artifact system?', answer: 'Every weapon and armor piece in the game is a one-of-a-kind relic with its own history — there are no random loot drops. Artifacts fall into 3 categories: main boss drops, mini-boss drops, and exploration finds. Each provides unique stat boosts and special effects.' },
  { question: 'How long is the game?', answer: 'The main story takes approximately 30-40 hours to complete. A completionist run — defeating all 70+ bosses, collecting all runes, and finding every artifact — can take 60+ hours. NG+ is planned for additional replayability.' },
  { question: 'Is there a demo?', answer: 'A free demo was available during Steam Next Fest. Check the Steam store page for current demo availability. The demo covers the opening section and introduces core combat mechanics.' },
  { question: 'What are the PC system requirements?', answer: 'System requirements will be confirmed at launch. Based on previews, expect requirements similar to other Unreal Engine soulslike titles. The game targets 60 FPS on PS5 and mid-range PCs.' },
  { question: 'Is there a difficulty setting?', answer: 'The Relic: First Guardian is designed as a challenging soulslike experience. Early previews suggest potential difficulty options may be included, but the core experience is built around mastering combat mechanics and strategic rune collection rather than adjustable difficulty sliders.' },
  { question: 'Does the game have Korean folklore elements?', answer: 'Yes! The game weaves Korean folklore throughout its world and quests. Traditional tales like "The Golden Axe, Silver Axe" and "The Fairy and the Woodcutter" are retold through environmental storytelling, NPC interactions, and boss backstories.' },
  { question: 'Can you respec your character?', answer: 'Since there are no traditional levels, respeccing means swapping your equipped runes and artifacts. The game encourages experimentation — you can change your build at any time by equipping different memory fragments and artifacts to suit different encounters.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about The Relic: First Guardian — gameplay, weapons, bosses, runes, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

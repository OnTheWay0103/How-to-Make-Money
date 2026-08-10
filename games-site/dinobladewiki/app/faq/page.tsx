import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Dinoblade -- release date, price, platforms, multiplayer status, Soulslike combat, Soul Arts, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Dinoblade?', answer: 'Dinoblade is a dinosaur-themed Soulslike action RPG developed by Team Spino LLC. You play as a young Spinosaurus gripping a colossal Great Sword between its teeth, fighting weapon-wielding rival dinosaurs across a prehistoric world to prevent an extinction event -- the finale sets up the fight against the meteor. It launched July 23, 2026 on Steam.' },
  { question: 'Is Dinoblade a Soulslike?', answer: 'Yes. Dinoblade features core Soulslike mechanics: stamina-based combat with light and heavy attacks, dodging with invincibility frames, timed parrying, and a Sekiro-style posture system -- parries build enemy posture until the guard breaks, opening enemies to counterattacks. Each region is ruled by a challenging Alpha predator boss, and Boss Rush Mode unlocks after the final boss.' },
  { question: 'When was it released and how much does it cost?', answer: 'Dinoblade launched July 23, 2026 on Steam (PC) at $19.99, with a 10% launch discount ($17.99) through July 30, 2026. No microtransactions are documented.' },
  { question: 'Is there a demo?', answer: 'Yes -- a free demo has been on Steam since October 2025. It is rated "Overwhelmingly Positive" (~97% positive across 4,200+ reviews) and helped the game pass 500,000 Steam wishlists. Whether demo saves carry over to the full game is unconfirmed.' },
  { question: 'What platforms is it on?', answer: 'Dinoblade is on PC (Steam) for Windows, rated Playable on Steam Deck by Valve, and has full controller support. No console versions have been announced.' },
  { question: 'Is there co-op or multiplayer?', answer: 'No. Dinoblade is a confirmed single-player game. There is no co-op, no PvP, and no invasion system. The summons you use are AI versions of defeated bosses, not other players.' },
  { question: 'How do save points work?', answer: 'The game has save points where you rest. Resting restores healing and respawns enemies -- the standard Soulslike trade. Exact healing mechanics (charge counts, heal amounts) are not officially documented.' },
  { question: 'Is there New Game+?', answer: 'New Game+ is unconfirmed -- no official source documents it. The confirmed endgame feature is Boss Rush Mode, which unlocks after defeating the final boss.' },
  { question: 'How many bosses are there?', answer: 'No official count has been published. What is confirmed: each region of the world is ruled by a ferocious Alpha apex predator that guards the path forward -- for example, a T-Rex that wields a smaller dinosaur as a weapon, and tyrannosaurs armed with battleaxes and halberds.' },
  { question: 'What are Soul Arts?', answer: 'Soul Arts are special attacks -- part of the game\'s confirmed progression alongside attribute and skill upgrades, boss summons, and legendary weapons hidden in the world. No official list of Soul Art names or effects has been published.' },
  { question: 'What biomes are in the game?', answer: 'The world is handcrafted with dry canyons, dense mist-shrouded jungles, frozen mountain basins, and forgotten ruins. Each region is ruled by an Alpha predator.' },
  { question: 'How long is Dinoblade?', answer: 'No official playtime figure has been published. The campaign is structured region-by-region around Alpha predator bosses, with Boss Rush Mode and multi-run skill progression for replay. The free demo is the best way to judge the game for yourself.' },
  { question: 'What are the PC system requirements?', answer: 'Official system requirements are listed on the Steam store page -- that is the authoritative source, since requirements change with patches. We do not reproduce spec values here.' },
  { question: 'How well reviewed is it?', answer: 'At launch, Dinoblade sat at 89% Very Positive on Steam (~400 reviews). Players praised the parry combat; launch reviews also reported bugs, performance problems, imprecise hitboxes, janky UI, and inconsistent hit registration.' },
  { question: 'Is there a Boss Rush mode?', answer: 'Yes. Boss Rush Mode unlocks after defeating the final boss -- a back-to-back gauntlet of boss fights. Its scoring system, ranks, and rewards are not officially documented.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Dinoblade -- gameplay, weapons, bosses, platforms, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

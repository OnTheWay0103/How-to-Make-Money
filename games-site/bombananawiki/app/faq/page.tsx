import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about BOMBANANA! by Lefto Studio / TARK — release date, price, roles, modules, solo play, mobile, Mac, system requirements, demo, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is BOMBANANA!?', answer: 'BOMBANANA! is a chaotic, asymmetrical 3-player co-op bomb-defusal party game developed by Lefto Studio and published by TARK. Three monkeys — one blind, one deaf, one mute — each hold only part of the information needed to defuse a bomb. They must communicate and solve puzzle modules before the timer runs out, or everyone goes BOOM!' },
  { question: 'When does BOMBANANA! release?', answer: 'BOMBANANA! releases on September 2, 2026 on Steam for PC. A free demo has been available on Steam since before launch, and the full game unlocks in the store around the same time.' },
  { question: 'How much does BOMBANANA! cost?', answer: 'The price has not been officially announced as of September 1, 2026, and the game is not available for pre-order. Only a Standard Edition has been mentioned; no deluxe or ultimate editions are confirmed [Unconfirmed]. Check the Steam store page on release day for the confirmed price.' },
  { question: 'What platforms is BOMBANANA! on?', answer: 'PC via Steam. The store page lists Windows 10/11 64-bit and macOS 11.0 (Big Sur) or later. There are no console or mobile versions announced [Unconfirmed].' },
  { question: 'Can I play BOMBANANA! solo or with 2 players?', answer: 'No. The official store description states "3-Player Co-op — No more, no less. Exactly three monkeys required." There is no solo mode and no two-player mode. Some community sources describe filling the third slot with matchmaking, but the game itself is designed for exactly three [Official].' },
  { question: 'What are the three roles?', answer: 'The Blind Monkey (🙈) can touch and operate the bomb but cannot see colors or read screens. The Deaf Monkey (🙉) can see the bomb and speak to the Blind Monkey but cannot hear. The Mute Monkey (🙊) is the only one who can read the defusal manual but cannot speak, so they communicate with gestures and emotes.' },
  { question: 'Which role should beginners pick?', answer: 'Most beginner guides suggest starting as the Blind Monkey — it carries the lightest mental load, since you wait for confirmed instructions and carry them out. The Mute Monkey is often the hardest for new players (miming every answer), and the Deaf Monkey is the attention bottleneck (watching the bomb and the Mute player simultaneously). [Community]' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam (App 4747510). The demo was one of the most-played demos during the June 2026 Steam Next Fest and has been played by more than 6 million players. It teaches the three roles and several module types (wires, D-pad, numpad, switch panels).' },
  { question: 'What bomb modules are in BOMBANANA!?', answer: 'The official store page says "Each bomb has different modules and different rules" but does not list them. Demo players and multiple independent guides have documented five confirmed module types: Wires, D-pad, Numpad/Math, Switch Panels, and Braille panels [Community]. The full release may include more [Unconfirmed].' },
  { question: 'Is there a Free Mode / custom bomb editor?', answer: 'Yes. The store page describes a Custom mode where "players create their own challenge by adjusting bomb difficulty, the timer, module types, environmental hazards, and how many mistakes are allowed." The community refers to this as Free Mode, and it effectively lets you design your own bombs.' },
  { question: 'How does co-op / matchmaking work?', answer: 'The game supports Online Co-op on Steam. You invite Steam friends directly (no room codes or links have been reported) and matchmaking can fill the third slot. All players must own the game (or the demo, for the demo build) and be online with the Steam overlay enabled. [Community]' },
  { question: 'Does BOMBANANA! have voice chat?', answer: 'Yes, the game has built-in voice chat, and it is role-limited — the store page notes "Some of you can talk, some of you can\'t." The Mute Monkey cannot speak in-game, so teams often pair voice with gestures and the emote wheel.' },
  { question: 'What are the system requirements?', answer: 'Windows minimum: Windows 10/11 64-bit, Intel Core i3-6100 / AMD Ryzen 3 1200, 8 GB RAM, Intel HD Graphics 520 / AMD Radeon Vega 3, broadband internet, ~300 MB storage. macOS minimum: macOS 11.0 or later, Apple M1 or Intel Core i3 (6th gen+), 4 GB RAM, ~600 MB storage. Full requirements are in the price & platforms guide.' },
  { question: 'How big is the game / how long does it take?', answer: 'The Windows install is listed at around 300 MB of storage (macOS around 600 MB). The campaign is described as "30 handcrafted levels with increasing difficulty," plus an Endless procedurally generated mode, so total playtime depends heavily on how long your team can survive the escalating bombs [Official].' },
  { question: 'Does BOMBANANA! support color-blind players?', answer: 'Yes. The store page confirms a Color Blind Mode: "Colors used across objects and the UI have been adapted to support two different types of color blindness."' },
  { question: 'What languages does BOMBANANA! support?', answer: 'The store page lists 15 languages with interface, full audio, and subtitles: English, Turkish, French, German, Spanish (Spain), Simplified Chinese, Portuguese (Brazil), Japanese, Korean, Russian, Polish, Italian, Spanish (Latin America), Traditional Chinese, and Ukrainian.' },
  { question: 'Is BOMBANANA! appropriate for younger players?', answer: 'Yes. The developer describes it as non-violent, stylized bomb-defusal gameplay focused on cooperative puzzle-solving, with no adult content. It is family-friendly and comedic (three monkeys, slapstick communication, and a lot of yelling).' },
  { question: 'Is there an official wiki?', answer: 'No dedicated wiki existed as of September 1, 2026 — no Fandom, Fextralife, or wiki.gg wiki for BOMBANANA!, only article-level guides. This site is an unofficial fan resource and is not affiliated with Lefto Studio or TARK.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about BOMBANANA! by Lefto Studio / TARK — release, roles, modules, solo play, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

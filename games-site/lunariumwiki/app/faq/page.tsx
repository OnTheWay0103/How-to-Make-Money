import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Lunarium — release date, price, platforms, gameplay mechanics, endings, multiplayer, and more. Honest, verified answers.',
};

const FAQ_ITEMS = [
  { question: 'What is Lunarium?', answer: 'Lunarium is a hand-drawn isometric action RPG developed by Lunarium Game Studio (a small debut team based in Shanghai) and published by Imperfect Games. You play as Ave, a light-armored swordmaster, alongside Lune, a Starfarer sorceress who acts as an AI companion, on a journey to stop the corrupting darkness called Nihilus.' },
  { question: 'When did Lunarium release?', answer: 'Lunarium released on July 29, 2026 on Steam for PC, priced at $17.99 USD (a 10% launch discount was active in the opening weeks).' },
  { question: 'What platforms is Lunarium on?', answer: 'PC via Steam at launch. Console versions have not been announced.' },
  { question: 'Is Lunarium a soulslike?', answer: 'It is a "Souls-lite": parry-primary combat, bench save points, and demanding bosses, but with a gentler tone and an Easy Mode added at launch based on player feedback. It is a linear four-region game, not an open world.' },
  { question: 'Can I play as Lune?', answer: 'No. You control Ave directly in combat. Lune is an AI-controlled companion you can direct with D-pad commands and upgrade through her own skill tree.' },
  { question: 'How does the Resonance system work?', answer: 'Resonance is a shared gauge built by Ave and Lune fighting together. Reviews confirm Lune uses it to build enemy stagger meters, and Astral Shards (found in Cyanstone) raise the resonance cap. Exact costs and generation rates are not officially published.' },
  { question: 'How long is Lunarium?', answer: 'Press reports put a first playthrough at roughly 12 hours. Full completion (both endings and optional content) is estimated around 20 hours — that figure is a community estimate.' },
  { question: 'How many endings does Lunarium have?', answer: 'Two distinct endings — confirmed by official press materials. The exact requirements for each are not yet documented; see our Endings Guide for everything currently known.' },
  { question: 'Is there multiplayer or co-op?', answer: 'No. Lunarium is a strictly single-player experience focused on the relationship between Ave and Lune. There is no co-op, no PvP, and no multiplayer of any kind.' },
  { question: 'Can I respec my skills?', answer: 'Unconfirmed. No reliable source documents a respec feature in Lunarium as of this writing.' },
  { question: 'Is there a New Game Plus?', answer: 'Unconfirmed. No official announcement of New Game Plus exists. After the ending you can resume from the last bench to finish optional content.' },
  { question: 'Does Lunarium have daily quests or weekly content?', answer: 'No. Lunarium is a single-player game with no daily quests, weekly bosses, resets, or live-service systems. Progression runs at your pace.' },
  { question: 'What are the PC system requirements?', answer: 'Official minimum and recommended requirements are published on the Steam store page. Check there for the current specifications.' },
  { question: 'Does Lunarium support controller?', answer: 'Yes. Full controller support is confirmed, and reviews generally recommend controller over keyboard/mouse.' },
  { question: 'What languages are supported?', answer: 'Simplified Chinese and Traditional Chinese are confirmed on the Steam page alongside English; Japanese was reported by launch coverage. Check the Steam page for the current full list.' },
  { question: 'Is there a demo?', answer: 'A demo/preview build existed during the March 2026 preview period. Current demo availability is unconfirmed — check the Steam page.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Lunarium — gameplay, characters, endings, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

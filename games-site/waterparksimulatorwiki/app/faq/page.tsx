import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Waterpark Simulator — release date, price, platforms, multiplayer, system requirements, research points, and more.',
};

const FAQ_ITEMS = [
  { question: 'When did Waterpark Simulator release?', answer: 'Waterpark Simulator entered Steam Early Access on August 22, 2025 and launched its 1.0 version on July 31, 2026 — the same day it debuted on PlayStation 5 and Xbox Series X|S. The game remains priced at $12.99.' },
  { question: 'Is Waterpark Simulator multiplayer?', answer: 'Yes — since the 1.0 update you can run a park with up to 4 players in co-op. You can start a park from scratch together or load existing parks, and there is optional proximity voice chat plus a walkie-talkie system.' },
  { question: 'How do I make money fast in Waterpark Simulator?', answer: 'The core loop is: build attractions that draw guests, keep happiness high, and sell tickets at a price your star rating supports. Hot dog and lemonade stands are early profit machines, pushing out ticket-cheaters earns a bonus, and raising your star rating lets you charge higher entry fees. Check our Money-Making Guide for the full breakdown.' },
  { question: 'What platforms is Waterpark Simulator on?', answer: 'Waterpark Simulator is available on PC (Steam), PlayStation 5, and Xbox Series X|S. No Nintendo Switch or mobile versions have been announced. On Steam Deck the game is officially rated "Playable" — it runs on SteamOS, though some actions need touchscreen or keyboard input and text can be small in places.' },
  { question: 'Is there a Waterpark Simulator wiki?', answer: 'Yes — you\'re on it! Waterpark Simulator Wiki is an unofficial fan resource covering slides, staff, research, the Museum questline, visitor management, and money-making. We\'re the first and most comprehensive guide hub for the game.' },
  { question: 'How much does Waterpark Simulator cost?', answer: 'Waterpark Simulator costs $12.99 on Steam, with no price increase at the 1.0 launch. Early Access players received the official soundtrack for free plus a special in-game gift.' },
  { question: 'What are the PC system requirements?', answer: 'Per the official Steam store listing: minimum is Windows 10 64-bit, Intel Core i5-3550, 8 GB RAM, NVIDIA GTX 1050 or AMD Radeon RX 570, DirectX 11, 20 GB storage. Recommended: Intel Core i5-6400, 8 GB RAM, NVIDIA GTX 1070 or AMD Radeon RX Vega 56.' },
  { question: 'What is the Museum and when can I enter it?', answer: 'The Museum is a building added in 1.0, right across the street from your park. It unlocks once you reach 2.5 stars. Inside, three NPCs — Poseidon\'t, Clara Loft, and Goldie — offer questlines with their own currencies, which you spend at the Museum research bench on themed decorations and giant slides.' },
  { question: 'How do I get research points?', answer: 'Research points come from collecting floating science icons around your park, from ticket sales, and from daily actions like cleaning and repairs. Spend them at the Research Table in your office to unlock new attractions, staff, and quality-of-life tools.' },
  { question: 'Is there character customization?', answer: 'Yes. Use the mirror in your park to randomize your appearance, and the 1.0 update adds full character customization — skin tones, hair, body sliders, and outfits, with multiple saved slots.' },
  { question: 'What are the difficulty modes?', answer: 'Waterpark Simulator offers four modes: Sandbox (build freely with no pressure), Easy, Normal, and Hard. Difficulty affects starting money and how punishing the management systems are.' },
  { question: 'Does the park close at night?', answer: 'During Early Access the park closed daily at 6 PM. The 1.0 update adds night mode — you can keep the park running after dark, but employees are paid more and cheaters are easier to spot thanks to glow-in-the-dark bracelets.' },
  { question: 'Where are my save files?', answer: 'Save files (.es3) and backups are stored in C:\\Users\\XXXXX\\AppData\\LocalLow\\CayPlay\\WaterparkSimulator\\slots — replace XXXXX with your Windows username. If a save is corrupted, rename a backup (e.g. park.es3.bac1 to park.es3) to restore it.' },
  { question: 'How do I contact support?', answer: 'Use the official CayPlay support channels listed on the Steam store page, or join the game\'s official Discord (invite link on the Steam page). For bug reports, use the pinned Steam thread or the Escape menu → "Copy game log" option.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Everything you need to know about Waterpark Simulator — release date, price, platforms, multiplayer, museum, research, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

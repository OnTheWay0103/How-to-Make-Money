import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Zombie Assault: Resurgence FAQ — release date, price, platforms, multiplayer support, and the questions that come up before buying.',
};

// Verified Q&As only. Sources: Steam store page (app 2747660), Steam news posts
// (Dev Diary #8 / #13), and the community wiki. Anything not on the record is
// answered as "not confirmed" rather than guessed.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When did Zombie Assault: Resurgence come out?',
    answer:
      'It launched on 28 October 2026 for Windows, sold through Steam (app 2747660). The developer and publisher are both Ninja Kiwi.',
  },
  {
    question: 'How much does Zombie Assault: Resurgence cost?',
    answer:
      'It is a paid game, not free-to-play, and the Steam page showed a 20% launch discount at the time we captured it. Regional pricing differs — the Chinese storefront listed ¥198.00 with the discount applied, so check your own region before buying.',
  },
  {
    question: 'How many classes are there, and can you switch?',
    answer:
      'There are three: Assault, Heavy and Medic. Each has 6 Core skills, 6 Class skills, 3 Activated Abilities (the third unlocks at rank 10) and 2 Speciality branches, and you pick one branch and lock its traits in. Skills can be respeced, but the respec costs in-game currency.',
  },
  {
    question: 'Can you play Zombie Assault: Resurgence solo?',
    answer:
      'Yes. The store page lists single-player alongside 4-player co-op, and the developers have described the game as being built to be "equally playable in multiplayer as it is in single player".',
  },
  {
    question: 'How do you play with friends?',
    answer:
      'Up to four players can run missions together. The in-game social layer pulls in your Steam friends list and Discord, supports party invites, and includes full text chat during missions.',
  },
  {
    question: 'Does Zombie Assault: Resurgence have crossplay?',
    answer:
      'Not confirmed. The game is currently sold for Windows on Steam, and the store page does not list cross-platform multiplayer as a feature. We will not guess at console or mobile support until it is announced.',
  },
  {
    question: 'Are there codes or redeem keys for Zombie Assault: Resurgence?',
    answer:
      'No. It is a buy-to-play game with no code redemption system, so there is nothing to enter. The one free reward on record is the Morlok Frostbite Pistol, granted to players who took part in the Steam Next Fest kill challenge and for logging into the game through Steam.',
  },
  {
    question: 'What are "mods" in Zombie Assault: Resurgence?',
    answer:
      'In-game attachments for weapons and armour, not user-made mods. They change how your gear behaves — the movement speed mod, for example, was bug-fixed in the 0.9.1 demo patch — and the game has an expanded rarity system built around them.',
  },
  {
    question: 'How many weapons are in the game?',
    answer:
      'Over 60 primary and secondary weapons, plus grenades and turrets. The launch roster splits into pistols, SMGs, assault rifles, shotguns, sniper rifles, rocket launchers, LMGs and a small set of Power Weapons that only come from a mid-mission Supply Drop.',
  },
  {
    question: 'What do players think of it?',
    answer:
      'At the time we captured the store page, user reviews stood at 170 total with 68% positive, which Steam labels "Mixed". That is an early snapshot of a game released days earlier, not a settled verdict.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, multiplayer support, and the questions that come up before buying — answered from official sources.
      </p>
      {FAQ_ITEMS.length > 0 ? (
        <FAQ items={FAQ_ITEMS} />
      ) : (
        <p className="text-sm text-gray-500">The FAQ is being written. Guide pages are available in the meantime.</p>
      )}
    </div>
  );
}

import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: "Beginner's Guide — Your First 5 Nights", description: "New to Moonlight Peaks? Master the night-time loop — wake at dusk, farm, forage, socialize, and get back to your coffin before sunrise.", slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-31' },
  { title: 'Romance Guide — All 23+ Dateable Characters', description: 'Every dateable resident in Moonlight Peaks, the heart system, how to ask someone out, propose, and get married.', slug: 'romance-guide', category: 'Romance', updated: '2026-07-31' },
  { title: 'Gift Guide — Loved Gifts for Every Character', description: "Loved gifts, liked gifts, and birthdays for every character — plus universal safe gifts and where to buy them.", slug: 'gift-guide', category: 'Romance', updated: '2026-07-31' },
  { title: 'Potion Making Guide — Cauldron & Recipes', description: 'Unlock your cauldron with "Mend it with Magic," brew the Love Potion and Alter Ego Elixir, and farm rare ingredients like Luck Dust.', slug: 'potions-guide', category: 'Crafting', updated: '2026-07-31' },
  { title: 'Story Quest Guide — Bridge, Crest & Cauldron', description: 'Walkthrough of the main questlines — A Bridge Too Far, Tension in the Crest Garden, and how to unlock the south side of town.', slug: 'quests-guide', category: 'Quests', updated: '2026-07-31' },
  { title: 'How to Make Money Fast — 10 Best Methods', description: 'The 10 fastest ways to earn coins in Moonlight Peaks, from brewing and selling Love Potions to fishing and dungeon loot.', slug: 'money-guide', category: 'Economy', updated: '2026-07-31' },
];

const FAQ_ITEMS = [
  { question: 'What is Moonlight Peaks?', answer: 'Moonlight Peaks is a gothic cozy vampire farming and life sim by Little Chicken Game Company, published by XSEED Games. You play as the child of Count Dracula building a new un-life in the supernatural town of Moonlight Peaks. It released July 7, 2026 on PC (Steam), macOS, Nintendo Switch, Switch 2, and Android for $34.99.' },
  { question: 'Is Moonlight Peaks like Stardew Valley?', answer: 'Yes — it is a farming and life sim in the same mold as Stardew Valley, but inverted: all farming, foraging, and socializing happens at night, and you are automatically returned to your coffin at sunrise. It adds potion brewing, shapeshifting, and a 23+ character romance system.' },
  { question: 'Can you play as any gender or romance anyone?', answer: 'Yes. The game is fully LGBTQIA+ friendly — there are no gender restrictions on romance, and all dateable characters can be dated regardless of your character\'s appearance or identity.' },
  { question: 'How many characters can you romance?', answer: '23+ dateable residents across the town\'s seven families (Dracula, Ambrosia, Logan, Webb, Khazan, Horseus, and Henderson). You can date multiple characters at once, and there is no social penalty for breaking up.' },
  { question: 'How does marriage work?', answer: 'Build hearts by talking and gifting: at 2 hearts you can hug, at 4 hearts ask someone out, and at 8 hearts you can propose during a date. Weddings happen at least two days after you set the date. Divorce is handled by the NPC Llemi with no social penalty.' },
  { question: 'How do you unlock potions?', answer: 'Complete the story quest "Mend it with Magic" — Viktor delivers your mother\'s broken cauldron, and Fiona repairs it for 2 Mana Essences. That teaches you the cauldron blueprint and your first recipe, the Alter Ego Elixir. More recipes are sold by Sabrina at the Web of Wonders.' },
  { question: 'Is there multiplayer or co-op?', answer: 'No — Moonlight Peaks is a single-player game. There is no co-op or multiplayer mode.' },
  { question: 'How long is Moonlight Peaks?', answer: 'As a cozy life sim with seasonal festivals, 7 family storylines, and dozens of romanceable residents, expect 40+ hours for a full playthrough. There is no time limit — you can play at your own pace.' },
  { question: 'What platforms is it on?', answer: 'Steam (PC), macOS, Nintendo Switch, Nintendo Switch 2, and Android via Google Play Games. The Switch 2 Edition is $39.99, the standard editions are $34.99, and the Digital Deluxe (art book + soundtrack) is $44.97.' },
  { question: 'Is there a demo?', answer: 'Yes — a free demo is available on Steam and the Nintendo eShop. It lets you experience the core night-time loop before buying.' },
  { question: 'Is there a wiki?', answer: 'This Moonlight Peaks Wiki is the community guide hub — beginner tips, romance and gift guides, potion recipes, quest walkthroughs, farming, mining, and fishing guides all in one place.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a1e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Moonlight Peaks <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the gothic vampire farming &amp; life sim by Little Chicken Game Company.
        </p>
        <p className="text-sm text-gray-600 mb-8">Out now — PC, macOS, Switch, Switch 2, Android</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2209900/Moonlight_Peaks/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

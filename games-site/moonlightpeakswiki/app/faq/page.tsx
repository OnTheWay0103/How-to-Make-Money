import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Moonlight Peaks — release date, price, platforms, romance, marriage, potions, demo, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Moonlight Peaks?', answer: 'Moonlight Peaks is a gothic cozy vampire farming and life sim by Little Chicken Game Company, published by XSEED Games. You play as the child of Count Dracula building a new un-life in the supernatural town of Moonlight Peaks. It released July 7, 2026 on PC (Steam), macOS, Switch, Switch 2, and Android for $34.99.' },
  { question: 'Is Moonlight Peaks like Stardew Valley?', answer: 'Yes — it is a farming and life sim in the same mold as Stardew Valley, but inverted: all farming, foraging, and socializing happens at night, and you are automatically returned to your coffin at sunrise. It adds potion brewing, shapeshifting, and a 23+ character romance system.' },
  { question: 'Is it single-player or co-op?', answer: 'Moonlight Peaks is a single-player game. There is no co-op or multiplayer mode.' },
  { question: 'Can you romance anyone regardless of gender?', answer: 'Yes. The game is fully LGBTQIA+ friendly — there are no gender restrictions, and all dateable characters can be dated regardless of your character\'s appearance or identity.' },
  { question: 'How many characters can you romance?', answer: '23+ dateable residents across the town\'s seven families (Dracula, Ambrosia, Logan, Webb, Khazan, Horseus, and Henderson). You can date multiple characters at once.' },
  { question: 'How does romance and marriage work?', answer: 'Gain relationship points by talking and gifting: at 2 hearts you can hug, at 4 hearts ask someone out (unlocking daily kisses and dates), and at 8 hearts you can propose during a date. Weddings happen at least two days after you set the date. Divorce is handled by the NPC Llemi with no social penalty.' },
  { question: 'How do you unlock potion making?', answer: 'Complete the story quest "Mend it with Magic" — Viktor delivers your mother\'s broken cauldron, and Fiona repairs it for 2 Mana Essences. This teaches you the cauldron blueprint and your first recipe, the Alter Ego Elixir. Additional recipes are purchased from Sabrina at the Web of Wonders.' },
  { question: 'What is the Love Potion?', answer: 'The Love Potion is brewed with 1x Hold-Me-Close, 1x Muse Nut, 1x Amour, 1x Suffrain Powder, and 1x Luck Dust. Gifting it raises a resident\'s affinity faster than ordinary gifts, and it sells for 2,200 Coins — making it one of the best money-makers in the game.' },
  { question: 'How do you get Luck Dust?', answer: 'Feed a Rabbicula (2800 Coins from Luna\'s Farm) and dig the spiral spots it leaves behind. Luck Dust is an ingredient in the Love Potion and a favored gift for Noel and Sabrina.' },
  { question: 'How do you unlock the mine?', answer: 'Complete the quest "A Bridge Too Far" (talk to Fiona Webb at Moonlit Pines to lift the bridge curse). It reopens the estate containing the mine entrance — the Cave of Echoes — and unlocks the entire south side of the map, including Misty Shores and the Ambrosia Graveyard.' },
  { question: 'How long is Moonlight Peaks?', answer: 'As a cozy life sim with seasonal festivals, seven family storylines, and dozens of romanceable residents, expect 40+ hours for a full playthrough. There is no time limit — you can play at your own pace.' },
  { question: 'What platforms is it on?', answer: 'Steam (PC), macOS, Nintendo Switch, Nintendo Switch 2, and Android via Google Play Games. Standard editions are $34.99, the Switch 2 Edition is $39.99, and the Digital Deluxe (art book + soundtrack) is $44.97.' },
  { question: 'Is there a demo?', answer: 'Yes — a free demo is available on Steam and the Nintendo eShop. It lets you experience the core night-time loop before buying.' },
  { question: 'Are there microtransactions?', answer: 'No in-game microtransactions or premium currency. The only paid add-on is the Moonlight Peaks digital art book.' },
  { question: 'Is there child-rearing?', answer: 'No — married couples cannot have children in the game.' },
  { question: 'Is Moonlight Peaks any good?', answer: 'Yes — it passed 200,000 copies sold within three weeks of launch and holds a 89% "Very Positive" rating on Steam from over 1,400 reviews, with critics averaging around 80 on Metacritic and OpenCritic.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Moonlight Peaks — gameplay, romance, potions, platforms, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

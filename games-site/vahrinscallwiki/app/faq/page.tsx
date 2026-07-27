import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    "Frequently asked questions about Vahrin's Call — pricing, platforms, classless system, builds, progression, and more.",
};

const FAQ_ITEMS = [
  {
    question: "What is Vahrin's Call?",
    answer:
      "Vahrin's Call is a narrative-driven, classless action-RPG developed by Titan Roc, a self-funded 7-person indie studio. You play as a mercenary in the war-torn city of Vahrin, fighting the insect-like khraiax and uncovering a greater threat beneath the city. It launched on Steam on July 27, 2026, priced at $34.99 USD.",
  },
  {
    question: "Is Vahrin's Call free to play?",
    answer:
      "No. Vahrin's Call is a paid title priced at $34.99 USD on Steam, with a 10% launch discount available until August 3, 2026. There is no free-to-play tier or demo.",
  },
  {
    question: "Does Vahrin's Call have multiplayer or co-op?",
    answer:
      "No. Vahrin's Call is a single-player experience only. There is no co-op, multiplayer, or online component. The game is designed entirely around a solo mercenary adventure.",
  },
  {
    question: "How does the classless system work?",
    answer:
      "The game has no preset classes. Your character improves through use — swing a greatsword to increase greatsword proficiency, cast fire magic to improve fire magic. Character Points improve base attributes (Strength, Agility, Intelligence, Constitution, Focus), while Perk Points unlock passive bonuses and active abilities. You can respec for free at Mentor NPCs in settlements.",
  },
  {
    question: "Is there crossplay or console release?",
    answer:
      "Not currently. Vahrin's Call is only available on Steam (PC). Console versions (Xbox, PlayStation) are planned for a later date, contingent on PC sales performance.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Minimum: Windows 10/11 64-bit, Intel i5-12400F / AMD Ryzen 5 5600, 8 GB RAM, GTX 1080 / RX 6600 (8 GB), DirectX 12, 20 GB storage. Recommended: Intel i5-13600K / AMD Ryzen 5 7600X, 16 GB RAM, RTX 2070 / RX 5700 XT (8 GB), 20 GB SSD storage.",
  },
  {
    question: "Can I respec my character?",
    answer:
      "Yes! Respeccing is completely free and available at Mentor NPCs in major settlements (marked on the town map). You can reset attributes, perks, or both. Late-game respecs may also require an Amnesia Elixir alongside gold. Don't be afraid to experiment.",
  },
  {
    question: "What are the five attributes?",
    answer:
      "Strength (heavy weapon damage, blocking, equipment load), Agility (attack speed, movement, dodging, ranged damage), Intelligence (spell power, mana pool, elemental damage), Constitution (health, survivability, stagger resistance), and Focus/Utility (trap efficiency, alchemy, critical bonuses).",
  },
  {
    question: "How long is the game?",
    answer:
      "The main story takes approximately 25-35 hours to complete. Full completion including all side quests, hidden bosses, skill book collection, and exploration can extend to 50+ hours. The world is handcrafted rather than enormous, packed with secrets.",
  },
  {
    question: "Does the game use generative AI?",
    answer:
      "No. Titan Roc explicitly states that no generative AI tools were used in development. Every environment, creature, and voice line was handcrafted by humans. Full English voice acting was performed by human actors.",
  },
  {
    question: "Does Vahrin's Call have controller support?",
    answer:
      "Yes, full controller support is included. The game is fully playable with a controller on PC.",
  },
  {
    question: "Is there New Game Plus?",
    answer:
      "There is no New Game Plus mode at launch. Titan Roc has not yet announced whether NG+ will be added in future updates.",
  },
  {
    question: "How do I report bugs or give feedback?",
    answer:
      "The best ways are: the Steam Community forums for Forsaken Realms: Vahrin's Call, the official Titan Roc Discord server, or the in-game feedback tool (if available).",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Vahrin&apos;s Call — gameplay, platforms, progression, and more.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

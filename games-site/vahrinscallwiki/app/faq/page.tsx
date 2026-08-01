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
      "No. Vahrin's Call is a paid title priced at $34.99 USD on Steam, with a 10% launch discount through early August 2026. There is no free-to-play tier or demo.",
  },
  {
    question: "Does Vahrin's Call have multiplayer or co-op?",
    answer:
      "No. Vahrin's Call is a single-player experience only. There is no co-op, multiplayer, or online component. The game is designed entirely around a solo mercenary adventure.",
  },
  {
    question: "How does the classless system work?",
    answer:
      "The game has no preset classes. Your character improves through use — the Elder Scrolls-style model where practicing a skill increases it. Skills are upgraded to full power through Skill Books scattered across the world, and spells upgrade through the 'Spell Mastery' system. Titan Roc has not published an official attribute or perk-point list; any specific stat names online are unverified.",
  },
  {
    question: "Is there crossplay or console release?",
    answer:
      "Not currently. Vahrin's Call is only available on Steam (PC). Console versions (Xbox, PlayStation) are planned for a later date, contingent on PC sales performance.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Minimum: Windows 10/11 64-bit, 8 GB RAM, GTX 1080 / RX 6600 minimum GPU, roughly 12-20 GB of storage. Recommended: 16 GB RAM. Full official requirements were published closer to release on the Steam store page.",
  },
  {
    question: "Can I respec my character?",
    answer:
      "The official FAQ confirms you can 'adapt, alter or completely switch playstyles' at any point — no build is permanent. The exact respec mechanism (NPCs, items, or menus) has not been officially detailed, so specific claims about 'Mentor NPCs' or respec items are unverified.",
  },
  {
    question: "What are the game's attributes?",
    answer:
      "There is no officially published attribute list. Titan Roc has confirmed spells can be customised via damage, range, and casting speed, and that a stamina system limits prolonged magic use — but named stats like 'Strength' or 'Intelligence' have never been officially confirmed. Treat any five-attribute breakdown online as unverified.",
  },
  {
    question: "How long is the game?",
    answer:
      "The official FAQ says an average playthrough is 15-30 hours, varying with difficulty and how completionist you are. Launch aggregate data shows an average playtime of about 22 hours, with around 20% of players exceeding 35 hours through side content.",
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
      "Unconfirmed. Titan Roc has never announced a New Game Plus mode — treat any online claims about NG+ or post-story replay modes as unverified.",
  },
  {
    question: "How do I report bugs or give feedback?",
    answer:
      "The confirmed route is the Steam Community forums for Forsaken Realms: Vahrin's Call. Titan Roc's director has publicly stated the team reads every review and is prioritizing fixes (performance, widescreen support, keybinding customisation, localization) before free DLC.",
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

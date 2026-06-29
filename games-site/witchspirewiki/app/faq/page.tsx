import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Witchspire — pricing, platforms, solo play, co-op, progression, familiars, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Witchspire?',
    answer:
      'Witchspire is an open-world co-op survival RPG developed by Envar Games. Set in a magical fantasy world, you choose a Coven (class), collect and train Familiars (magical creatures), build and upgrade your Hearth (base), craft gear, and explore hand-crafted regions filled with quests, dungeons, and bosses. It launched in Steam Early Access on June 10, 2026.',
  },
  {
    question: 'Is Witchspire free to play?',
    answer:
      'No. Witchspire is a paid game priced at $22.99 USD on Steam. A 15% launch discount was available at Early Access release. There is no free-to-play tier or demo at this time.',
  },
  {
    question: 'Can I play Witchspire solo?',
    answer:
      'Yes. Witchspire is fully playable solo. Enemy scaling adapts to your party size, so solo players face appropriately scaled challenges. Certain Covens like Wildroots and Cloudpiercers are particularly well-suited for solo play thanks to their self-healing and high damage output.',
  },
  {
    question: 'How many players can play co-op?',
    answer:
      'Witchspire supports up to 4 players in online co-op by default. Some hosts with powerful hardware can support up to 6 players. Progress (quests, chests, exploration) is shared within the host\'s world, while individual character progression persists across all worlds.',
  },
  {
    question: 'Is there crossplay?',
    answer:
      'Not currently. Witchspire is only available on Steam (PC). Crossplay may be considered for future platform releases.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Minimum: Windows 10, Intel Core i5-8400 / AMD Ryzen 3 3300X, 8 GB RAM, NVIDIA GTX 1060 6GB / AMD RX 580 8GB. Recommended: Intel Core i7-9700K / AMD Ryzen 5 5600X, 16 GB RAM, NVIDIA RTX 3060 / AMD RX 6700 XT. Approximately 20 GB storage space required.',
  },
  {
    question: 'Can I change my Coven later?',
    answer:
      'Currently, your starting Coven choice is permanent. You cannot change Covens on an existing character. However, your Coven mainly affects your starting weapon type (Spellblade or Wand) and color palette. You can find and equip different weapons and gear regardless of Coven. The developers have mentioned that deeper Coven identity mechanics are planned for future updates.',
  },
  {
    question: 'Can I respec my Luminary skill tree?',
    answer:
      'No. Luminary skill point allocation is permanent and cannot be reset. Spend points carefully and plan your build ahead of time. Luminary Shrines found throughout the world grant additional free skill points beyond level-up points.',
  },
  {
    question: 'How long is the game?',
    answer:
      'In the current Early Access state, the main story content (Act I & II) takes approximately 15-20 hours. Full completion including side quests, familiar collection, and base building can extend to 30-40 hours. Additional acts and regions are planned in future updates through 2027.',
  },
  {
    question: 'When is the full release / 1.0?',
    answer:
      'Envar Games has announced a content roadmap extending into 2027. The game is expected to remain in Early Access for approximately 12-18 months. Phase 1 ("A Touch of Magic") is planned for Q3 2026, Phase 2 ("The Frozen Tundra") for Q4 2026, and Phase 3 ("Throne of Corruption") for 2027.',
  },
  {
    question: 'Are there dedicated servers?',
    answer:
      'Not yet. Dedicated servers are on the development roadmap. Currently, co-op uses a host-dependent model — the host\'s machine runs the world, and other players connect to it. If the host disconnects, the world becomes inaccessible.',
  },
  {
    question: 'Does Witchspire have controller support?',
    answer:
      'Yes, Witchspire has partial controller support. Most actions are mapped, but some menu interactions may still require a mouse and keyboard. Full controller support is being improved throughout Early Access.',
  },
  {
    question: 'Is there PvP?',
    answer:
      'No. Witchspire is a PvE (player vs environment) game focused on cooperative play. There are no player-versus-player mechanics.',
  },
  {
    question: 'Will my Early Access progress carry over to 1.0?',
    answer:
      'Envar Games intends for EA progress to carry over to the full release, but has noted that major system overhauls during Early Access may occasionally require partial wipes. Check official patch notes for the latest information.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best ways are: the Steam Community forums for Witchspire, the official Witchspire Discord server (linked from playwitchspire.com), or the in-game feedback tool (if available in your build).',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Witchspire — gameplay, platforms, progression, and more.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

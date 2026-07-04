import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Mistfall Hunter — release date, classes, platforms, solo play, extraction mechanics, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Mistfall Hunter?',
    answer:
      'Mistfall Hunter is a dark fantasy PvPvE extraction ARPG launching July 29, 2026 on Steam, PS5, and Xbox Series X|S. You play as a Gyldhunter — choose from 6 unique classes, descend into mist-shrouded ruins, scavenge Gyldenblood and gear, fight Corroded (AI enemies) and rival players, and extract before the closing mist consumes you. If you die, you lose everything you are carrying.',
  },
  {
    question: 'When is the release date?',
    answer:
      'Mistfall Hunter launches on July 29, 2026. An open beta with all 6 classes is expected before launch. The game gained significant attention during Steam Next Fest (June 15-22, 2026) where its demo was one of the top 3 most-played.',
  },
  {
    question: 'How many classes are there?',
    answer:
      'Six classes at launch: Mercenary (sword & shield tank — best for beginners), Sorcerer (ranged spellcaster — highest damage), Blackarrow (precision archer — aim-dependent), Shadowstrix (stealth assassin — best solo PvP), Seer (support/healer — team play only), and Withered Knight (greatsword fighter — parry and burst damage).',
  },
  {
    question: 'Is Mistfall Hunter free to play?',
    answer:
      'No. Mistfall Hunter is a paid title. Pricing will be announced closer to launch. It will be available on Steam, the PlayStation Store, and the Xbox Store.',
  },
  {
    question: 'Can I play solo?',
    answer:
      'Yes, Mistfall Hunter supports both solo play and 3-player squads. Solo players are matched in the same extraction zones as squads — Shadowstrix and Mercenary are the strongest solo classes. Solo play is viable but requires more careful positioning and risk management.',
  },
  {
    question: 'What happens when I die?',
    answer:
      'You lose everything you are carrying — all gear, loot, Gyldenblood, and your Soul of Return. Items safely stored in your warehouse (stash) are never lost. This risk-vs-reward mechanic is the core of the extraction genre: push deeper for better loot, or extract early with what you have.',
  },
  {
    question: 'How does extraction work?',
    answer:
      'To extract, you must find and defeat the Returner Woodling (a mini-boss that drops the Soul of Return), then channel at a designated extraction point for approximately 30 seconds while vulnerable. Some maps have alternative fixed exits that may not require a Soul of Return. The closing mist damages players over time and forces encounters.',
  },
  {
    question: 'What platforms is it on?',
    answer:
      'Mistfall Hunter launches on PC (Steam), PlayStation 5, and Xbox Series X|S. Crossplay details have not been fully confirmed yet.',
  },
  {
    question: 'Is there crossplay?',
    answer:
      'Crossplay details are yet to be officially announced. Check the official channels closer to the July 29 launch for confirmation.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Full PC system requirements will be published closer to launch. Based on the Steam Next Fest demo: expect mid-range hardware requirements — roughly GTX 1660 / RX 5600 XT minimum, and RTX 3070 / RX 6750 XT recommended for smooth performance.',
  },
  {
    question: 'Does Mistfall Hunter have a battle pass or microtransactions?',
    answer:
      'The monetization model has not been fully detailed. As a paid title with extraction mechanics, expect cosmetic options. Any battle pass or microtransaction details will be announced before launch.',
  },
  {
    question: 'Can I change my class later?',
    answer:
      'Class selection happens at the start of each expedition. You can switch classes between extractions from your camp, allowing you to adapt your playstyle and try different builds without losing progression.',
  },
  {
    question: 'Is there PvE only mode?',
    answer:
      'No. Mistfall Hunter is inherently PvPvE — you will encounter both AI enemies (Corroded) and rival players in every extraction zone. There is no PvE-only mode. Learning to navigate (or avoid) PvP encounters is a core skill.',
  },
  {
    question: 'How do camp upgrades work?',
    answer:
      'Between expeditions, you return to your camp where you can upgrade facilities: Goddess Statue (core progression + blessings), Gyldenblod Pool (healing bonuses), Shop & Warehouse (inventory + gear), and Tavern (passive buffs + quests). Upgrade priority matters significantly for early progression.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Mistfall Hunter — gameplay, classes, platforms, and extraction mechanics.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

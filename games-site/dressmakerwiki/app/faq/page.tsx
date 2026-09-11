import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Dressmaker FAQ — Release Date, Price, Platforms and Gameplay',
  description:
    'Frequently asked questions about Dressmaker, the cozy dressmaking simulation developed by Cozy Lives and published by Free Lives — release date, price, demo, platforms, Mac support, fabrics, sewing and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Dressmaker?',
    answer:
      'Dressmaker is a cozy dressmaking simulation developed by Cozy Lives and published by Free Lives. You choose fabric, arrange and cut out patterns, sew the panels together, decorate the finished garment, and then dress the townsfolk — or display your own designs in your shop window and sell pre-made dresses off the rack. It launches on Steam on September 21, 2026 for Windows and macOS.',
  },
  {
    question: 'When does Dressmaker come out?',
    answer:
      'September 21, 2026. That is the release date shown on the official Steam store page (App ID 4019220). No early-access period has been announced for Dressmaker.',
  },
  {
    question: 'How much does Dressmaker cost?',
    answer:
      'The price had not been announced as of September 12, 2026 [Unconfirmed]. Steam’s store data lists Dressmaker as a paid product rather than a free one, but no price figure has been published. This answer will be updated as soon as pricing appears on the store page.',
  },
  {
    question: 'Is Dressmaker free?',
    answer:
      'No. Dressmaker is a paid Steam game — Steam’s store data explicitly marks it as not free. What is free is the original prototype on itch.io, which is offered on a name-your-price basis. The itch.io prototype is a separate, earlier build, not the September 21 release.',
  },
  {
    question: 'Is there a Dressmaker demo on Steam?',
    answer:
      'No. Steam’s store data for Dressmaker (App ID 4019220) contains no demo build, and there is no separate demo app on Steam. The only publicly playable version before launch is the itch.io prototype.',
  },
  {
    question: 'What platforms is Dressmaker on?',
    answer:
      'Windows and macOS, via Steam. Steam’s platform data lists Windows and macOS as supported and Linux as unsupported. No PlayStation, Xbox, Nintendo Switch, Switch 2 or mobile version has been announced.',
  },
  {
    question: 'Is Dressmaker on Nintendo Switch or Switch 2?',
    answer:
      'No — and no Switch version has been announced. Steam lists only Windows and macOS. If you see a “Dressmaker Switch” download, it is not official.',
  },
  {
    question: 'Is there a Dressmaker mobile app or APK?',
    answer:
      'No. There is no official Android or iOS version of Dressmaker. Any APK, “mod” or mobile port you find is unofficial and should be treated as unsafe. The only legitimate sources are the Steam store page (App ID 4019220) and the itch.io prototype page.',
  },
  {
    question: 'Is Dressmaker multiplayer?',
    answer:
      'No. Steam lists single-player as the only play mode — there is no co-op, no multiplayer and no PvP.',
  },
  {
    question: 'Who made Dressmaker?',
    answer:
      'Dressmaker is developed by Cozy Lives and published by Free Lives. Cozy Lives is Free Lives’ cozy-games label, and Dressmaker is its first release.',
  },
  {
    question: 'What are the Dressmaker system requirements?',
    answer:
      'Official Windows minimum: Windows 10 or later, an Intel Core i5 or AMD Ryzen processor, 8 GB RAM, Intel UHD 630 graphics or better, DirectX 11, and 1 GB of available storage. Official macOS minimum: Apple M1, 8 GB RAM, and 1 GB of available storage. No recommended specifications have been published.',
  },
  {
    question: 'What do you actually do in Dressmaker?',
    answer:
      'The official loop is: choose fabric, arrange and cut out patterns, sew garments and add decorations. You design and colour a dress in your sketchbook, arrange and cut the pattern, preview it on a mannequin, sew it together, then either turn it in to a customer for reputation and coin or display it in your shop window and sell pre-made dresses off the rack.',
  },
  {
    question: 'What fabrics are in Dressmaker?',
    answer:
      'The official store description names five fabrics: cotton, linen, wool, silk and velvet. You buy from a wide range of fabrics, and you can take full control over which fabric is used for each panel of a garment. Additional patterned fabrics — among them houndstooth, floral, plaid, damask and gingham — appear in pre-release preview coverage [Unconfirmed].',
  },
  {
    question: 'What is fabric grain direction, and does Dressmaker model it?',
    answer:
      'Yes — the official description says “whether your pattern is aligned to the grain or cut on bias” changes what appears on the final dress, so grain direction and bias cutting are modelled systems rather than flavour text. We explain what that means in practice in our beginner guide [mechanics beyond the official wording are Unconfirmed].',
  },
  {
    question: 'Can you play Dressmaker with a mouse only?',
    answer:
      'Yes — that is an official feature. Steam lists both “Mouse Only Option” and “Playable without Timed Input” among the game’s categories, alongside Custom Volume Controls and Family Sharing.',
  },
  {
    question: 'What languages does Dressmaker support?',
    answer:
      'Steam lists English, Simplified Chinese and Japanese, each with full audio. Traditional Chinese is not listed, and no other languages are currently supported.',
  },
  {
    question: 'Does Dressmaker have Steam achievements?',
    answer:
      'Steam lists the game as having achievements, but the achievement list had not been published as of September 12, 2026 [Unconfirmed]. We will publish an achievement guide once the list is live.',
  },
  {
    question: 'Is Dressmaker on Steam Deck?',
    answer:
      'No Steam Deck compatibility rating had been published as of September 12, 2026 [Unconfirmed]. Dressmaker is a mouse-driven game and Steam lists a “Mouse Only Option”, so a controller-first layout is not guaranteed.',
  },
  {
    question: 'Do you have to satisfy customers, or can you sabotage them?',
    answer:
      'Both — that is straight from the official description, which says you can “satisfy (or sabotage!) townsfolk”. Customers come to you with important events and individual tastes in mind, so a deliberately wrong dress is a choice the game supports.',
  },
  {
    question: 'Is there a cat in Dressmaker?',
    answer:
      'Yes. “Pet the kitty” is the last line of the official Steam store description — a small, confirmed, non-mechanical detail.',
  },
  {
    question: 'Is there an official Dressmaker wiki?',
    answer:
      'No organised wiki exists. There is no Fandom, wiki.gg, Game8 or other structured wiki for Dressmaker as of September 12, 2026 — only a small fan site. This site is an independent, unofficial fan resource and is not affiliated with Cozy Lives, Free Lives or any of their subsidiaries.',
  },
  {
    question: 'Is this site official?',
    answer:
      'No. Dressmaker Wiki is an unofficial fan-made resource. All trademarks and game content belong to their respective owners. We mark anything not officially confirmed as [Unconfirmed] rather than guessing.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Dressmaker FAQ
      </h1>
      <p className="text-gray-400 mb-8">
        Common questions about Dressmaker — the cozy dressmaking simulation
        developed by Cozy Lives and published by Free Lives. Release date,
        price, demo, platforms, Mac support, fabrics and gameplay.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

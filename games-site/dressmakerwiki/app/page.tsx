import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const STEAM_URL = 'https://store.steampowered.com/app/4019220/Dressmaker/';

const FEATURED_GUIDES = [
  {
    title: 'Release Date, Price & Platforms — Everything Confirmed',
    description:
      'Dressmaker launches September 21, 2026 on Steam for Windows and macOS. The price had not been announced as of September 12, 2026 — everything that is actually confirmed, and everything that is not.',
    slug: 'dressmaker-release-date-price-platforms',
    category: 'Release Info',
    updated: '2026-09-12',
  },
  {
    title: 'Is Dressmaker Free? Steam vs the itch.io Prototype',
    description:
      'No — the Steam release is a paid game. The playable version available today is the original name-your-price itch.io prototype. How the two differ, and how to get either one safely.',
    slug: 'dressmaker-free-steam-vs-itch-prototype',
    category: 'Release Info',
    updated: '2026-09-12',
  },
  {
    title: 'Beginner Guide — How the Dressmaking Loop Works',
    description:
      'Sketch the design, pick fabric, lay out and cut the pattern, sew the panels, decorate, then deliver for reputation and coin — a step-by-step walkthrough of the loop built on the official store description and pre-release previews.',
    slug: 'dressmaker-beginner-guide',
    category: 'Beginner',
    updated: '2026-09-12',
  },
  {
    title: 'Mac, Console and Mobile — Which Platforms Are Supported',
    description:
      'Windows and macOS are confirmed. Linux, Switch, Switch 2, PS5, Xbox and mobile are not — and there is no official APK. Straight answers to the platform questions Dressmaker players are actually asking.',
    slug: 'dressmaker-platforms-mac-console-mobile',
    category: 'Platforms',
    updated: '2026-09-12',
  },
  {
    title: 'Dressmaker vs DressMaker vs DressMaker Pro',
    description:
      'Three different products share almost the same name on Steam. One is a cozy dressmaking simulation by Cozy Lives and Free Lives; the other two are VRoid/VRM avatar texturing tools. How to tell which store page you are on.',
    slug: 'dressmaker-vs-dressmaker-pro',
    category: 'Release Info',
    updated: '2026-09-12',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Dressmaker?',
    answer:
      'Dressmaker is a cozy dressmaking simulation developed by Cozy Lives and published by Free Lives. You choose fabric, arrange and cut out patterns, sew the panels together, decorate the finished garment, and then dress the townsfolk — or display your own designs in your shop window and sell pre-made dresses off the rack. It launches on Steam on September 21, 2026 for Windows and macOS.',
  },
  {
    question: 'When does Dressmaker come out?',
    answer:
      'September 21, 2026. That is the release date shown on the game’s official Steam store page (App ID 4019220). It is a single-player game with no early access period announced.',
  },
  {
    question: 'How much does Dressmaker cost?',
    answer:
      'The price had not been announced as of September 12, 2026 [Unconfirmed]. Steam’s store data lists Dressmaker as a paid product rather than a free one, but no price figure has been published. We will update this answer the moment pricing appears on the store page.',
  },
  {
    question: 'Is Dressmaker free?',
    answer:
      'No. Dressmaker is a paid Steam game — Steam’s store data explicitly marks it as not free. What is free is the original prototype on itch.io, which is offered on a name-your-price basis. The itch.io prototype is a separate, earlier build, not the September 21 release.',
  },
  {
    question: 'Is there a Dressmaker demo on Steam?',
    answer:
      'No. Steam’s store data for Dressmaker (App ID 4019220) contains no demo build, and there is no separate demo app. The only publicly playable version before launch is the itch.io prototype.',
  },
  {
    question: 'What platforms is Dressmaker on?',
    answer:
      'Windows and macOS, via Steam. Steam’s platform data lists Windows and macOS as supported and Linux as unsupported. No PlayStation, Xbox, Nintendo Switch, Switch 2 or mobile version has been announced.',
  },
  {
    question: 'Is Dressmaker multiplayer?',
    answer:
      'No. Steam lists single-player as the only play mode — there is no co-op, no multiplayer and no PvP.',
  },
  {
    question: 'Who made Dressmaker?',
    answer:
      'Dressmaker is developed by Cozy Lives and published by Free Lives. Cozy Lives is Free Lives’ cozy-games label, and Dressmaker is its first release. (It is not “developed by Free Lives” — Free Lives is the publisher.)',
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
      'The official store description names five fabrics: cotton, linen, wool, silk and velvet. You buy them from a range of suppliers, and you can pick a different fabric for each panel of a garment. Additional patterned fabrics (houndstooth, floral, plaid, damask and gingham among them) appear in pre-release preview coverage [Unconfirmed].',
  },
  {
    question: 'Can you play Dressmaker with a mouse only?',
    answer:
      'Yes — that is an official feature. Steam lists both “Mouse Only Option” and “Playable without Timed Input” among the game’s categories, alongside Custom Volume Controls and Family Sharing.',
  },
  {
    question: 'Is there an official Dressmaker wiki?',
    answer:
      'No organised wiki exists. There is no Fandom, wiki.gg, Game8 or other structured wiki for Dressmaker as of September 12, 2026 — only a small fan site. This site is an independent, unofficial fan resource and is not affiliated with Cozy Lives or Free Lives.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1020] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Dressmaker <span className="text-rose-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          The cozy dressmaking simulation from Cozy Lives and Free Lives —
          choose fabric, cut patterns, sew, decorate, and dress a whole town.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Launching September 21, 2026 — Windows &amp; macOS via Steam
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/dressmaker-beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-rose-500 text-gray-300 hover:text-rose-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with the Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-rose-400 hover:text-rose-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#2a1a2e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1120] rounded-lg border border-[#2c1b33]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-rose-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

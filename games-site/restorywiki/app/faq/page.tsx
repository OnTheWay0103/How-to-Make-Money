import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about ReStory: Chill Electronics Repairs — price, platforms, license system, devices, game length, achievements, endings and more.',
};

const FAQ_ITEMS = [
  { question: 'What is ReStory: Chill Electronics Repairs?', answer: 'ReStory is a chill, narrative-driven electronics repair shop management simulator developed by Mandragora (I Am Future, Skyhill) and published by tinyBuild. Set in mid-2000s Tokyo, you run a small repair shop, restore nostalgic Y2K devices (including officially licensed Atari consoles), manage finances, and shape a branching story through dialogue choices. It launched August 6, 2026 on Steam.' },
  { question: 'How much does ReStory cost?', answer: '$19.99 USD base price on Steam, with a 10% launch discount ($17.99) until August 20, 2026. A Supporter Edition bundle (game + digital artbook) is also available. Regional pricing varies.' },
  { question: 'What platforms is ReStory available on?', answer: 'PC (Windows 10 x64) and macOS (14 or newer, Apple M1 processor). The game is single-player only.' },
  { question: 'How long is ReStory?', answer: 'The developers estimate 15+ hours for the main story depending on playstyle. One full review (Gamekult) reached the credits in about 10 hours. Branching storylines and randomized orders make replays attractive.' },
  { question: 'Is there a free demo?', answer: 'Yes — a free demo has been on Steam since June 15, 2026 (Steam Next Fest). It includes extra gadgets such as the Patento BS handheld and an airbrush drawing tool. Demo progress does not carry over to the full game.' },
  { question: 'Is ReStory multiplayer?', answer: 'No. ReStory is strictly single-player. There is no co-op, multiplayer, or online component beyond the in-game Y2K web browser.' },
  { question: 'How does the license system work?', answer: 'Licenses are certifications you purchase with yen that unlock new device types and push the main story forward. Without a license you can accept a device but cannot complete its repair — the job sits in your workshop until you buy the license. Holding a license also lets you order exact brand-new parts directly from manufacturers.' },
  { question: 'How many licenses are there in ReStory?', answer: 'The exact number has not been officially confirmed. Achievement milestones reference acquiring 1, 5, all, and "the most expensive" license. One license must be won in the device assembly competition rather than bought. See the license guide for details.' },
  { question: 'How many devices can I repair?', answer: 'The launch catalog contains roughly 16 named device types across 7 categories — consoles, phones, cameras, music players, walkie-talkies, flashlights and robot dogs. Officially licensed Atari hardware (2600, Lynx, CX40) uses real branding; the rest are parodies. A marketing claim of "2,000+ devices" is unconfirmed — see the device database.' },
  { question: 'Are Atari devices real?', answer: 'Yes. The Atari 2600, Atari Lynx and Atari CX40 joystick are officially licensed with real names as part of a collaboration with Atari. A licensed Atari Jaguar was also referenced during playtesting.' },
  { question: 'Does ReStory have multiple endings?', answer: 'Yes. The storyline is branching and non-linear; choices (e.g., what to do with a former gangster\'s phone or whether to help a lovestruck student) affect customers\' lives and the ending. The exact number of endings has not been confirmed.' },
  { question: 'How many achievements does ReStory have?', answer: '50 Steam achievements, including 5 hidden ones (Ghost in the Frame, Rock for the Ages!, Ronin, Melancholy, Globalization). One achievement in the current build is reported as not unlocking correctly even when its condition is met.' },
  { question: 'What is the Y2K web browser?', answer: 'The in-game computer lets you browse a period-accurate Y2K-era internet to order spare parts, buy used devices from the marketplace, purchase tools, apply for licenses, and accept online repair orders (up to 11 per day with 3-day deadlines).' },
  { question: 'Can I sell restored devices?', answer: 'Yes. Restoring and reselling devices on the marketplace is a side business. You can buy broken devices, fix them up, and sell them for profit — 5 sales earn the "Making Money!" achievement.' },
  { question: 'Is there a time limit?', answer: 'No strict time pressure in the workshop. Online orders have 3-day deadlines, but you can close the shop shutter and work at your own pace. The bicycle ends your day, saves progress, and starts a new one.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10 x64, 2-core/4-thread CPU, 4 GB RAM, GTX 750 Ti, DirectX 11, 1 GB storage. macOS minimum: macOS 14+, Apple M1, 8 GB RAM, integrated GPU, 1 GB storage. No recommended specs published yet.' },
  { question: 'Does ReStory run on Steam Deck?', answer: 'Yes, it is playable on Steam Deck. Recommended community settings: 1280×800, Medium textures/shadows, Low shadow distance, film grain off, V-Sync on, 60 Hz/60 FPS cap, 11-12W TDP. The default controller layout is unfinished — use a custom Steam Input layout.' },
  { question: 'What languages does ReStory support?', answer: '9 languages with interface, full audio and subtitles: English, French, German, Spanish (Spain), Japanese, Korean, Portuguese (Brazil), Russian and Simplified Chinese.' },
  { question: 'What are the in-game bills?', answer: 'You pay rent to the landlord and repay a bank loan. Paying both unlocks the "All Bills Paid" achievement; refusing to pay triggers the "Bankrupt" achievement and a warning.' },
  { question: 'Is soldering in the demo?', answer: 'No. The soldering iron is visible but locked in the demo; soldering jobs only appear in the full game once the soldering station is unlocked.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about ReStory: Chill Electronics Repairs — gameplay, licenses, devices, endings, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

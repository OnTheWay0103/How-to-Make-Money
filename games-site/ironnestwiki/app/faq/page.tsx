import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about IRON NEST: Heavy Turret Simulator — release date, price, platforms, shell types, the tactical map, counter-battery fire, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is IRON NEST: Heavy Turret Simulator?', answer: 'IRON NEST is a first-person dieselpunk heavy-artillery simulator developed by the two-person team of Nick Nieuwoudt and Dominik Latos. You are the sole operator of a 5,000-ton walking turret fighting in an alternate-history Spanish civil war in the late 1920s. Gameplay is a manual artillery workflow: decode orders from teleprinters, plot targets on a tactical map, calculate ballistics, load shells and fire — all while managing machinery, repairs and counter-battery fire.' },
  { question: 'When did IRON NEST release?', answer: 'IRON NEST: Heavy Turret Simulator launched on Steam on August 6, 2026. A free demo had been available since earlier in the year and was rated Overwhelmingly Positive (99% positive) on Steam.' },
  { question: 'How much does IRON NEST cost?', answer: 'The launch price had not been listed on the Steam storefront at the time of writing — check the Steam page for the current price. The free demo remains available separately.' },
  { question: 'What platforms is IRON NEST on?', answer: 'IRON NEST is a Windows PC game available on Steam. There is no console or Mac version announced.' },
  { question: 'Is IRON NEST multiplayer?', answer: 'No. IRON NEST is strictly single-player — just you, the machine, and High Command. Two challenge modes with leaderboards offer score-based solo replayability.' },
  { question: 'Do I need to do math to play?', answer: 'No — the game does the calculations for you. The ballistic calculator turns range into elevation and powder charges, and the map tools display bearing and distance while you draw lines. Your job is to feed the right numbers in and keep your station organized.' },
  { question: 'How do I find targets on the map?', answer: 'Targets are located using spotter reports: each report gives a bearing or distance from a known position (spotters, reference points, or the Iron Nest itself). Draw bearing lines from two known points and the target is where they intersect, or use the drafting compass for distance circles. A direct line from the Iron Nest to the target gives your final bearing and range.' },
  { question: 'What does the counter-battery timer do?', answer: 'Every shell you fire reveals your position. The first shot against enemy artillery starts a counter-battery timer — when it expires, enemy guns strike back at you. Destroying enemy artillery and Fire Direction Centers pauses or resets the timer, giving you breathing room.' },
  { question: 'Can I unload a loaded shell?', answer: 'No. Once a shell and powder charges are rammed into the gun they cannot be removed. Load wrong ammo and you must either fire it off or adjust your firing solution around the mistake. Verify every load before ramming.' },
  { question: 'How many shell types are in the game?', answer: '30 unlockable ammo types and abilities are advertised. The shells confirmed at launch are HE, high-capacity HE (HCHE), armor-piercing (AP), S.T.A.R. illumination, smoke, phosgene gas and tear gas.' },
  { question: 'How do I know if I hit the target?', answer: 'You never see the impact — you are locked inside the turret. Kills are confirmed by radio feedback, red skull tokens on the tactical map, and updated mission objectives. A blue skull token means you hit a friendly unit.' },
  { question: 'How long is IRON NEST?', answer: 'The campaign spans 15 regions with a handcrafted story, newspaper reports and 100+ unlockable medals, while mission objectives are procedurally generated for endless replayability. Community average playtimes were not available at launch — we will update this answer once players report in.' },
  { question: 'Is there a free demo?', answer: 'Yes. The IRON NEST: Heavy Turret Simulator Demo is free on Steam and covers the core loop — receiving orders, plotting targets, calculating and firing. It received an Overwhelmingly Positive rating and was called one of the best Steam Next Fest demos by Kotaku.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: 64-bit OS, Intel Core i5-4460 or AMD FX-8350, 4 GB RAM, Intel UHD or AMD Vega 8 graphics (targets ~30 FPS at 720p low), DirectX 10, 5 GB storage. Recommended: Intel Core i5-8400 or AMD Ryzen 5 2600, 8 GB RAM, NVIDIA GTX 1060 6GB or AMD RX 580 8GB.' },
  { question: 'What languages are supported?', answer: '16 languages with interface, audio and subtitles: English, French, German, Spanish (Spain), Simplified Chinese, Traditional Chinese, Portuguese (Brazil), Ukrainian, Japanese, Russian, Korean, Czech, Polish, Italian, Spanish (Latin America) and Turkish.' },
  { question: 'What other Steam features does it have?', answer: 'Achievements, cloud saves and Steam Family Sharing. The Steam page also teases unlockable content including 30 ammo types/abilities, 100+ medals, 15 regions, a customizable cat companion and a fully operational warhorn.' },
  { question: 'Is this game anything like PVKK?', answer: 'Yes — the developers credit PVKK: Planetenverteidigungskanonenkommandant as a major inspiration. IRON NEST takes the manual-cannon concept into a ground-based, dieselpunk warfare setting with a much larger focus on map plotting, triangulation and counter-battery tactics.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about IRON NEST: Heavy Turret Simulator — gameplay, shells, the map, counter-battery fire and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

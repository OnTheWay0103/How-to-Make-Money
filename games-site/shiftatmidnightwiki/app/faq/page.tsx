import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Shift At Midnight — release date, price, co-op, solo, doppelganger detection, Game Pass, endings, system requirements, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Shift At Midnight?', answer: 'Shift At Midnight is a 1-3 player co-op horror detective game developed by Fiddlesticks Games. Set in a 1990s gas station, you work the night shift serving customers while identifying doppelgangers — shapeshifting monsters that mimic human appearance. It released July 22, 2026 on Steam and Xbox Game Pass at $12.99 with a 32% launch discount.' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo (with AI assistance) or in online co-op with up to 3 players. The full 13-night campaign is playable either way. Co-op is recommended for higher difficulty shifts where multiple doppelgangers appear.' },
  { question: 'How many players in co-op?', answer: 'Up to 3 players in online co-op. Each player takes on a role at the gas station — manning the register, checking the back room, monitoring the gas pumps, or watching the parking lot. Team coordination is essential for spotting doppelgangers before they strike.' },
  { question: 'How does doppelganger identification work?', answer: 'You use the NET Database — a retro computer terminal — to cross-reference customer identities against known data. Doppelgangers fail ID checks, have distorted reflections, exhibit repetitive behavior patterns, and may flicker under fluorescent lights. Later shifts introduce advanced doppelgangers that mimic more human behaviors.' },
  { question: 'What is the NET Database?', answer: 'The NET Database is your primary investigative tool — a 1990s-style computer terminal in the gas station office. You enter customer details (appearance, name, ID number) and the database flags inconsistencies. Upgrading the NET Database throughout the campaign unlocks more detailed identity checks and doppelganger detection capabilities.' },
  { question: 'What happens if a doppelganger escapes?', answer: 'If a doppelganger escapes undetected, it progresses its hidden agenda — increasing the threat level for future shifts. Escaped doppelgangers may return later in more dangerous forms, abduct survivors, or trigger "lockdown" events where the station is overrun. The game tracks your detection rate across the campaign.' },
  { question: 'How many endings are there?', answer: 'Shift At Midnight has 4 main endings and 2 secret endings. Your choices throughout the 13-night campaign — which survivors you save, how many doppelgangers you expose, key story decisions, and your overall detection rate — determine which ending you unlock. A single playthrough takes 10-12 hours.' },
  { question: 'Is there crossplay?', answer: 'Yes. Shift At Midnight supports full crossplay between Steam (PC) and Xbox (Console and PC). Cross-platform progression is also supported through Xbox Live account linking.' },
  { question: 'Is it on Xbox Game Pass?', answer: 'Yes. Shift At Midnight is available on Xbox Game Pass for Console and PC from launch day, July 22, 2026. Game Pass subscribers get the full game at no additional cost. The Steam version is $12.99 (32% off launch discount, regular $19.99).' },
  { question: 'How long to beat?', answer: 'The 13-night story campaign takes approximately 10-12 hours for a first playthrough. Replayability comes from the multiple endings (6 total), hidden lore collectibles, and higher difficulty shifts that unlock after your first completion. An Endless Mode provides unlimited replayability.' },
  { question: 'Does it use microphone detection?', answer: 'Yes. One of the most unique features — doppelgangers can detect microphone input. If you speak or make noise in real life, nearby doppelgangers may hear you through your mic and become alerted to your position. You can toggle this feature or adjust sensitivity in settings.' },
  { question: 'Are there microtransactions?', answer: 'No. Shift At Midnight has no microtransactions, no loot boxes, and no battle pass. The game is $12.99 (launch price with 32% discount, regular $19.99). All content — all 6 endings, Endless Mode, and post-launch updates — is included in the base price.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Intel i5-8400 / AMD Ryzen 3 3300X, GTX 1060 6GB / RX 580 8GB, 12GB RAM, 25GB SSD. Recommended: Intel i7-10700 / AMD Ryzen 5 3600, RTX 2060 / RX 6600 XT, 16GB RAM, 25GB SSD. The game uses Unreal Engine 5 with stylized retro-horror visuals.' },
  { question: 'Is there a demo?', answer: 'A free demo was available during Steam Next Fest, but it is no longer available as the game has now launched (July 22, 2026). You can purchase the full game on Steam for $12.99 (launch discount) or play via Xbox Game Pass.' },
  { question: 'Is there an Endless Mode?', answer: 'Yes. After completing the 13-night campaign, Endless Mode unlocks. You survive as many nights as possible at the gas station with escalating difficulty — more doppelgangers, faster spawn rates, limited resources, and no story safety net. High scores and survival streaks are tracked.' },
  { question: 'Future update plans?', answer: 'Fiddlesticks Games has announced free post-launch updates including new doppelganger types, additional gas station locations, new Night Shift events, and a harder "Nightmare" difficulty. A paid DLC expansion with a new campaign chapter is planned for late 2026.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Shift At Midnight — doppelganger detection, co-op, endings, Game Pass, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

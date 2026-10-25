import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    '{{GAME_NAME}} FAQ — release date, price, platforms, multiplayer support, and the questions that come up before buying.',
};

// TODO(per site): 4–10 verified Q&As. Same rules as guide pages — no answer
// without a source, and a claim that only the community supports is worded as
// such. Empty = the placeholder below renders instead of fabricated answers.
const FAQ_ITEMS: { question: string; answer: string }[] = [];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, multiplayer support, and the questions that come up before buying — answered from official sources.
      </p>
      {FAQ_ITEMS.length > 0 ? (
        <FAQ items={FAQ_ITEMS} />
      ) : (
        <p className="text-sm text-gray-500">The FAQ is being written. Guide pages are available in the meantime.</p>
      )}
    </div>
  );
}

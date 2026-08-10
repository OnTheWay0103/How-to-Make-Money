import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'The honest state of Echoes of Mystralia tier rankings — why early rankings need play data, and the confirmed systems worth evaluating.',
};

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <meta httpEquiv="refresh" content="0; url=/guides/tier-list" />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tier List</h1>
      <p className="text-gray-400 mb-6">
        This page has moved. The honest state of Echoes of Mystralia rankings — and why legitimate
        tier lists need real play data — now lives in the Tier List guide.
      </p>
      <Link href="/guides/tier-list" className="text-amber-400 hover:text-amber-300 font-medium">
        Go to the Tier List Guide →
      </Link>
    </div>
  );
}

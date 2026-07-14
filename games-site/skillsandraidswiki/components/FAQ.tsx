'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
      {items.map((item, i) => (
        <div key={i} className="bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-5 py-4 text-left flex items-center justify-between gap-3"
          >
            <span className="text-white font-medium text-sm hover:text-amber-400 transition-colors">
              {item.question}
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

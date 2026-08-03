import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Low-Budget Repairs — release date, price, platforms, system requirements, demo, game length, DLC, and more.',
};

const FAQ_ITEMS = [
  { question: 'When does Low-Budget Repairs release?', answer: 'Low-Budget Repairs launches on August 13, 2026 at 14:00 UTC on Steam (PC). PlayStation 5 and Xbox Series X|S versions are also planned. A free demo was released on July 24, 2026.' },
  { question: 'Is Low-Budget Repairs multiplayer?', answer: 'No — Low-Budget Repairs is a single-player experience. You run your renovation business solo, making shady deals and cutting corners on your own.' },
  { question: 'How do I make money fast in Low-Budget Repairs?', answer: 'The core strategy is minimizing expenses while charging full price. Water down paint, buy the cheapest tools, skip non-visible areas (behind radiators), use duct tape for plumbing fixes, and throw old furniture out windows to save time. Check our Money-Making Guide for the full breakdown.' },
  { question: 'What platforms is Low-Budget Repairs on?', answer: 'Low-Budget Repairs is coming to PC (Steam), PlayStation 5, and Xbox Series X|S. No Nintendo Switch or mobile versions have been announced.' },
  { question: 'Is there a Low-Budget Repairs wiki?', answer: 'Yes — you\'re on it! Low-Budget Repairs Wiki is an unofficial fan resource covering every renovation job, tool, money-making strategy, and cost-cutting tip. We\'re the first and most comprehensive guide hub for the game.' },
  { question: 'How much does Low-Budget Repairs cost?', answer: 'The official price has not been confirmed yet, but it is expected to be around $19.99 based on comparable indie simulation titles. Pricing may vary by region and edition. We\'ll update this page as soon as the price is announced.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel Core i5 7th gen / AMD Ryzen 5 1st gen, 8 GB RAM, NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 4GB, 30 GB storage. Recommended: Windows 10 64-bit, Intel Core i5 10th gen / AMD Ryzen 5 3rd gen, 16 GB RAM, NVIDIA RTX 2070 8GB / AMD Radeon RX 5700 XT 8GB, 30 GB storage.' },
  { question: 'How long is Low-Budget Repairs?', answer: 'The full game length hasn\'t been officially confirmed yet. Based on the demo and the variety of renovation jobs shown — from flooded bathrooms to full flat makeovers — expect a campaign that will keep you busy for many hours. We\'ll update this with verified estimates after the August 13, 2026 launch.' },
  { question: 'Will there be DLC?', answer: 'No DLC plans have been announced yet. Given the publisher\'s track record of post-launch support for simulation titles, additional content is possible — but nothing is confirmed. Check back here for updates.' },
  { question: 'Is there character customization?', answer: 'No. You play as a fixed handyman protagonist — Low-Budget Repairs is about customizing your approach to jobs and how much (or how little) quality you deliver, not your character\'s appearance.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo has been available on Steam since July 24, 2026. It lets you take on your first renovation jobs and experience the core gameplay loop — buying cheap supplies, cutting corners, and getting paid before clients notice the defects.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Everything you need to know about Low-Budget Repairs — release date, price, platforms, system requirements, demo, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

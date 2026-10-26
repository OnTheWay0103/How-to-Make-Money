import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Neon Abyss 2 Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we label unconfirmed game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Neon Abyss 2 Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Neon Abyss 2 Wiki is an <strong>unofficial fan-made resource</strong> for <em>Neon Abyss 2</em>, developed by
        <strong>Veewo Games</strong> and published by <strong>Kepler Ghost</strong>.
      </p>
      <p>
        We organize what is actually known about the game — systems, progression, bosses, items, and patch changes — and we separate
        confirmed information from speculation. Our goal is to be useful before you buy and accurate after every patch.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li><strong>Getting started:</strong> what the first hours expect from you and which early mistakes cost the most time</li>
        <li><strong>Progression:</strong> the order things unlock, what gates each step, and what is worth buying first</li>
        <li><strong>Mechanics:</strong> the systems the game does not explain well, with the patch version noted</li>
        <li><strong>Bosses and challenges:</strong> fight structure, readable patterns, and the tools that trivialise them</li>
        <li><strong>Reference:</strong> codes, item lists, and FAQ answers, each with the date it was checked</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide is built from a mix of:</p>
      <ul>
        <li><strong>Official sources:</strong> the store page, official patch notes and announcements, and the developer’s own documentation</li>
        <li><strong>Hands-on coverage:</strong> write-ups and footage from players who actually ran the build in question</li>
        <li><strong>Cross-referencing:</strong> a mechanic is only stated as fact when at least two independent sources agree, or when it can be seen in game</li>
        <li><strong>Explicit uncertainty:</strong> when something is not confirmed, the guide says “unconfirmed” instead of guessing</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section listing its sources and the date checked. If you find something
        outdated or wrong, please <a href="/contact">tell us</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>No invented names or numbers:</strong> we do not publish boss names, item stats, coordinates, or quest names without a source</li>
        <li><strong>Labeled judgment:</strong> recommendations such as our upgrade priority are marked as editorial opinion, not datamined fact</li>
        <li><strong>Version boundaries:</strong> mechanics that only exist in an older build are described as such, not as current systems</li>
        <li><strong>Corrections welcome:</strong> game mechanics change with patches, and we update guides when they do</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Neon Abyss 2 Wiki is not affiliated with, endorsed by, or connected to Veewo Games, Kepler Ghost, or any
        of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content belong to their respective
        owners. This site is an independent fan project.
      </p>
      <p>
        Game mechanics and content may change with updates. Always check the official Steam page and patch notes for the most current
        information.
      </p>
    </div>
  );
}

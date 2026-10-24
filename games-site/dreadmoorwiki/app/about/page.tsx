import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About DREADMOOR Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we label unconfirmed game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About DREADMOOR Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        DREADMOOR Wiki is an <strong>unofficial fan-made resource</strong> for <em>DREADMOOR</em>, the first-person post-apocalyptic
        fishing survival horror game developed by <strong>Dream Dock</strong> and published by <strong>Digital Vortex Entertainment</strong>.
      </p>
      <p>
        We organize what is actually known about the game — fishing mechanics, bait, fish species, boat upgrades, survival systems,
        regions, combat, and Early Access details — and we separate confirmed information from speculation. Our goal is to be useful
        before launch and accurate after it.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li><strong>Fishing:</strong> casting, hooking, Stamina, Line Tension, bait recipes, and predatory-fish retrieval</li>
        <li><strong>Fish and processing:</strong> confirmed species, bait pairings, Fish Meat, Chromatic Scales, and hold management</li>
        <li><strong>Boat progression:</strong> the Dry Dock chain, hull protection, engine upgrades, and module installation</li>
        <li><strong>Survival:</strong> the fish-to-fuel loop, hull repair, salvage, and pre-crossing checks</li>
        <li><strong>Regions:</strong> the Trading Post, Betsy and Sons, the Bunkhouse, the Dry Dock, Angler’s Island, and The Throat</li>
        <li><strong>Early Access:</strong> what ships on November 9, 2026, what the demo contains, and what remains unannounced</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide is built from a mix of:</p>
      <ul>
        <li><strong>Official sources:</strong> the Steam store and demo pages, the official Steam FAQ, developer announcements, and the publisher’s press releases</li>
        <li><strong>Hands-on coverage:</strong> previews and demo playthroughs from outlets and community writers who actually played the build</li>
        <li><strong>Cross-referencing:</strong> a mechanic is only stated as fact when at least two independent sources agree, or when it is visible in the demo</li>
        <li><strong>Explicit uncertainty:</strong> when something is not confirmed, the guide says “unconfirmed” or “not shown in the demo” instead of guessing</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section listing its sources and the date checked. If you find something
        outdated or wrong, please <a href="/contact">tell us</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>No invented names or numbers:</strong> we do not publish boss names, item stats, coordinates, or quest names without a source</li>
        <li><strong>Labeled judgment:</strong> recommendations such as our upgrade priority are marked as editorial opinion, not datamined fact</li>
        <li><strong>Demo boundaries:</strong> mechanics that exist only in the demo are described as demo mechanics, not as final systems</li>
        <li><strong>Corrections welcome:</strong> game mechanics change during Early Access, and we update guides when they do</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>DREADMOOR Wiki is not affiliated with, endorsed by, or connected to Dream Dock, Digital Vortex Entertainment, or any
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

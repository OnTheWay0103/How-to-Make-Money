import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Iron Nest Wiki — an unofficial fan wiki providing IRON NEST: Heavy Turret Simulator guides, map plotting tips, ballistic calculator help and shell strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Iron Nest Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Iron Nest Wiki is an <strong>unofficial fan-made resource</strong> dedicated to IRON NEST: Heavy Turret Simulator, the dieselpunk heavy-artillery simulator developed by Nick Nieuwoudt and Dominik Latos.
      </p>
      <p>
        We are a small team of passionate players who create comprehensive guides, map plotting tutorials, ballistic calculator walkthroughs and shell strategies to help operators get the most out of their 5,000-ton machine. Our mission is to be the most helpful and up-to-date guide resource for the Iron Nest community — from day one.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, station-by-station breakdowns, and the complete core loop</li>
        <li><strong>Map & Targeting:</strong> The 20×10 tactical map grid, tokens, pencils, compass work and triangulation techniques</li>
        <li><strong>Ballistics:</strong> Ballistic calculator inputs, firing cards, shell types and load order — no math required</li>
        <li><strong>Strategy:</strong> Requisition spending, upgrade paths, counter-battery survival and challenge mode tips</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and the community unlocks more of the 30 ammo types and abilities</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides on this site are written based on the launch build (August 6, 2026), the demo, pre-release coverage, and community research. Anything that is not yet publicly confirmed is clearly marked as TBD or unverified. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Iron Nest Wiki is not affiliated with, endorsed by, or connected to Nick Nieuwoudt, Dominik Latos, or any related parties.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}

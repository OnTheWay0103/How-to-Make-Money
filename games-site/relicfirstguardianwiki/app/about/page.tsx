import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About The Relic: First Guardian Wiki — an unofficial fan wiki providing game guides, tips, and strategies for the soulslike action RPG by Project Cloud Games.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About The Relic: First Guardian Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        The Relic: First Guardian Wiki is an <strong>unofficial fan-made resource</strong> dedicated to &quot;The Relic: First Guardian,&quot; the Korean dark-fantasy soulslike action RPG developed by <strong>Project Cloud Games</strong> and published by <strong>Perp Games</strong>. The game released July 31, 2026 on PC (Steam) and PlayStation 5, with Xbox Series X|S and Nintendo Switch 2 versions arriving later in summer 2026.
      </p>
      <p>
        We are a small team of passionate players who research and write guides for the game&apos;s community: the 5 weapon families and their 12 skill trees, the 70+ relic fragments, the unique one-of-a-kind gear system, and the 70-80 &quot;Brutal&quot; boss fights across the ruined world of Arsiltus. Our mission is to be a helpful and honest guide resource — including clearly flagging what is not yet verified.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, weapon family breakdowns, relic strategies, and boss tactics</li>
        <li><strong>Boss Strategies:</strong> The parry-gate vs dodge-gate fight framework and general tactics for the Brutal roster</li>
        <li><strong>Build Guides:</strong> Skill tree, relic, and artifact loadouts for every playstyle</li>
        <li><strong>Honest Coverage:</strong> Unconfirmed mechanics are marked as unconfirmed — we do not present speculation as fact</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>
        Every guide is built from <strong>verified sources</strong>: official developer material from Project Cloud Games, publisher announcements from Perp Games, the official Steam store page, launch reviews from established outlets, and player reports that we clearly attribute. Where a fact cannot be verified — exact numbers, patch-specific changes, or unannounced platform details — we say so and mark the claim as unconfirmed rather than inventing precision.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Accuracy first:</strong> claims are sourced or marked unconfirmed; we do not fabricate specifics</li>
        <li><strong>Transparency:</strong> guides state what is confirmed, what is community-reported, and what is unknown</li>
        <li><strong>Timeliness:</strong> guides are reviewed and updated as the game changes and the community verifies more details</li>
        <li><strong>Corrections:</strong> if you find an error, tell us via our <a href="/contact">Contact page</a> and we will fix it</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>The Relic: First Guardian Wiki is not affiliated with, endorsed by, or connected to Project Cloud Games, Perp Games, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game&apos;s community. Game mechanics may change with updates.
      </p>
    </div>
  );
}

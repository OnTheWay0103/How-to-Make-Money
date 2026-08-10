import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Expeditions: Samurai Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Expeditions: Samurai Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Expeditions: Samurai Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Expeditions: Samurai," the party-based Sengoku-era tactical CRPG developed by <strong>Campfire Cabal</strong> and published by <strong>THQ Nordic</strong>.
      </p>
      <p>
        We research, organize, and verify game information to help players navigate the civil war of 1600 Japan — from the three pillars of stealth, diplomacy, and steel, to companion recruitment and loyalty, to the Hatamoto village rule coming in the full release. Our mission is to be the most helpful and accurate guide resource for the Expeditions: Samurai community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, class breakdowns, progression and build guides</li>
        <li><strong>Companion Coverage:</strong> Recruitment, loyalty, and romance guides for all 8 companions</li>
        <li><strong>Systems Deep Dives:</strong> Stealth, combat mechanics, diplomacy, co-op, and world map guides</li>
        <li><strong>Early Access Coverage:</strong> Act One walkthrough, launch-day facts, and the roadmap to the 1.0 release</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer diaries, press releases, and publisher materials</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as Early Access updates ship</li>
      </ul>
      <p>
        Expeditions: Samurai launched in Steam Early Access on August 7, 2026, which means some details are not yet officially documented. Our guides clearly mark what is confirmed against official sources, what is reported from playable previews, and what is still community-reported and unconfirmed — using <strong>confirmed</strong>, <strong>preview</strong>, and <strong>TBD</strong> markers. Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, specs, stats) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from, and unconfirmed details are marked as such rather than presented as fact</li>
        <li><strong>No invented precision:</strong> We do not publish exact numbers, quest names, or patch claims that lack official confirmation — anything unreported is marked TBD</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Expeditions: Samurai Wiki is not affiliated with, endorsed by, or connected to Campfire Cabal, THQ Nordic, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

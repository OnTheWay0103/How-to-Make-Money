import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Welcome to Elderfield Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Welcome to Elderfield Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Welcome to Elderfield Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Welcome to Elderfield," the cosy horror RPG developed by Chris Cote and published by Kwalee.
      </p>
      <p>
        We research, organize, and verify game information to help players make the most of their time in the isolated town of Elderfield — from the free demo to the September 10, 2026 launch. Our mission is to be the most helpful and accurate guide resource for the Elderfield community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, demo guides, farming and resource guides, combat breakdowns, and mystery walkthroughs</li>
        <li><strong>System Overviews:</strong> Cozy Mode vs Challenge Mode, turn-based combat, rest mechanics, and the daily loop</li>
        <li><strong>Release Info:</strong> Release date, price, platforms, and system requirements, kept current as they are announced</li>
        <li><strong>Regular Updates:</strong> Content updated as the game launches and receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, official trailers, and the official press release</li>
        <li><strong>Developer Statements:</strong> Developer replies in Steam Community discussions are treated as primary sources</li>
        <li><strong>Verified Community Reports:</strong> Demo findings (item locations, mystery spots) that are consistent across multiple player reports</li>
        <li><strong>Honest Marking:</strong> Anything not yet officially confirmed — especially pre-launch — is clearly marked [Unconfirmed] rather than guessed</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, dates, stats) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from — Official, Community, or Editorial</li>
        <li><strong>Pre-release honesty:</strong> Because the full game launches on September 10, 2026, mechanisms outside the demo are presented as pre-release overviews or [Unconfirmed] until verified</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Welcome to Elderfield Wiki is not affiliated with, endorsed by, or connected to Chris Cote, Kwalee, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

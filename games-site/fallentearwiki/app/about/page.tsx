import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Fallen Tear: The Ascension Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Fallen Tear: The Ascension Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Fallen Tear Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Fallen Tear: The Ascension," the hand-drawn 2D Metroidvania developed by Winter Crew Studios and published by CMD Studios.
      </p>
      <p>
        We research, organize, and verify game information to help players make the most of their time in the corrupted world of Raoah — from the Early Access build to the September 16, 2026 1.0 launch. Our mission is to be the most helpful and accurate guide resource for the Fallen Tear community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, combat and movement breakdowns, Fated Bonds ally guides, boss-fighting strategy, and hub systems</li>
        <li><strong>System Overviews:</strong> The Ascension and skill trees, Elemental Imbuements, Temple of Oras, and the Fated Bonds recruitment loop</li>
        <li><strong>Release Info:</strong> Release date, price, platforms, EA-to-1.0 changes, and system requirements, kept current as they are announced</li>
        <li><strong>Regular Updates:</strong> Content updated as the game launches and receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, the official 1.0 press release, developer announcements, and official trailers</li>
        <li><strong>Developer Statements:</strong> Developer replies in Steam Community discussions and interviews are treated as primary sources where available</li>
        <li><strong>Verified Community Reports:</strong> Early Access findings (ally names, region names) that are consistent across multiple player reports</li>
        <li><strong>Honest Marking:</strong> Anything not yet officially confirmed — especially pre-launch — is clearly marked [Unconfirmed] rather than guessed</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, dates, boss counts) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from — Official, Community, or Editorial</li>
        <li><strong>Pre-release honesty:</strong> Because the full 1.0 game launches on September 16, 2026, systems outside the Early Access build are presented as pre-release overviews or [Unconfirmed] until verified. No boss names, damage values, or stats are invented</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Fallen Tear Wiki is not affiliated with, endorsed by, or connected to Winter Crew Studios, CMD Studios, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

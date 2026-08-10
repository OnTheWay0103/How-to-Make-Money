import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Go-Go Town! Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Go-Go Town! Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Go-Go Town! Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Go-Go Town!," the town-building and economy sim developed by Prideful Sloth.
      </p>
      <p>
        We research, organize, and verify game information to help players build thriving towns — hiring workers, automating production, satisfying tourists, and unlocking the game's many systems. Our mission is to be the most helpful and accurate guide resource for the Go-Go Town! community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, economy and money-making strategies, town layouts, and automation deep-dives</li>
        <li><strong>System Guides:</strong> Workers, crafting and production, tourism, building unlocks, and creative mode</li>
        <li><strong>Update Coverage:</strong> What changed in the 1.0 release and what remains confirmed vs. unverified</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and official patch notes</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as new patches are released</li>
      </ul>
      <p>
        Go-Go Town! changed significantly with its 1.0 update — many Early Access numbers, ticket-based exports, and older economy details no longer apply. This site is deliberately strict about labeling what is confirmed, what is community-reported, and what is unverified. Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (stats, prices, counts) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from and mark unconfirmed details as unverified rather than filling gaps with invention</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Go-Go Town! Wiki is not affiliated with, endorsed by, or connected to Prideful Sloth or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

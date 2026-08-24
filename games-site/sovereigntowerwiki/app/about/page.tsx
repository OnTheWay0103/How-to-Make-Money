import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sovereign Tower Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Sovereign Tower Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Sovereign Tower Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Sovereign Tower," the round-table management RPG developed by WILD WITS and published by Curve Games.
      </p>
      <p>
        We research, organize, and verify game information to help players recruit better knights, keep the realm stable, and survive their first cycles. Our mission is to be the most helpful and accurate guide resource for the Sovereign Tower community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, knight recruitment routes, and progression guides</li>
        <li><strong>System Breakdowns:</strong> Knight attributes, factions, the Treasury economy, and the time-rewind mechanic explained</li>
        <li><strong>Character Coverage:</strong> Recruitment routes for Brunhilda, Chester, Dullahan, Rufus, and more</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, Curve Games press releases, and developer announcements</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "last checked" date, and we review content as new patches are released</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing where the information comes from. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (stats, counts, costs, prices) are only included where they can be verified against official sources, reputable guides, or the game itself</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from, and attribute unverified details to their source or mark them [Unconfirmed]</li>
        <li><strong>No fabrication:</strong> Unconfirmed mechanics are marked as unconfirmed rather than invented</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Sovereign Tower Wiki is not affiliated with, endorsed by, or connected to WILD WITS, Curve Games, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

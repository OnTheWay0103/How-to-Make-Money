import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About MineGeon: Renegades Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About MineGeon: Renegades Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        MineGeon: Renegades Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "MineGeon: Renegades," the co-op sci-fi bullet-hell mining roguelite developed and published by Kickstone Studio. In the game, a crew of Renegades — Marshall the Tank, Trevor the Gunslinger, and Ari the Engineer — crash-lands on the dying planet PAIMO and descends into its depths to mine minerals, fight the Scavengers, and extract their haul before it is lost for good.
      </p>
      <p>
        We research, organize, and verify game information to help players survive the depths of PAIMO. Our mission is to be the most helpful and accurate guide resource for the MineGeon: Renegades community — which means telling you what is confirmed and what is not, rather than padding guides with invented details.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, class breakdowns, mining and extraction strategies, and progression roadmaps</li>
        <li><strong>Boss Strategies:</strong> Preparation checklists and general tactics for the biome-ending boss battles</li>
        <li><strong>Builds &amp; Loadouts:</strong> Role-based builds for each Renegade using the confirmed systems — weapons, gadgets (150+ in the full game), and ultimates</li>
        <li><strong>Co-op Coverage:</strong> Team compositions and strategies for online co-op with up to two friends</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new community documentation</li>
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
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (damage, stats, costs) are only included where they can be verified against official sources or consistent community consensus — and we say so when they can't</li>
        <li><strong>No invented details:</strong> We do not fabricate version numbers, patch notes, item names, review quotes, or achievement lists. Unconfirmed specifics are marked as unconfirmed</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>MineGeon: Renegades Wiki is not affiliated with, endorsed by, or connected to Kickstone Studio, the developers or publishers of MineGeon: Renegades, or any of their affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

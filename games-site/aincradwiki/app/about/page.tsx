import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Echoes of Aincrad Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Echoes of Aincrad Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Echoes of Aincrad Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Echoes of Aincrad," the single-player action JRPG set in the Sword Art Online universe, developed by Game Studio Inc. and published by Bandai Namco Entertainment. The game launched July 9–10, 2026 on PS5, Xbox Series X|S, and PC (Steam).
      </p>
      <p>
        We research, organize, and verify game information to help beta testers survive the first two floors of Aincrad — mastering the six weapons-as-classes, crafting EX-Mods, and building their AI partners. Our mission is to be the most helpful and accurate guide resource for the Echoes of Aincrad community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, weapon-class breakdowns, floor walkthroughs, and progression strategies</li>
        <li><strong>Build Guides:</strong> Per-weapon builds (Sword & Shield, Two-Handed Axe, Dagger, Rapier, Greatsword, Mace) and stat planning</li>
        <li><strong>Boss Strategies:</strong> Floor boss tactics, Boss Rush gauntlets, and quick-reference charts</li>
        <li><strong>Systems Deep-Dives:</strong> EX-Mod crafting, the Cardinal system, Sword Skills, and hidden mechanics</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and official patch notes</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last verified" date, and we review content as new patches are released</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (damage, stats, costs) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from</li>
        <li><strong>No fabricated details:</strong> We do not invent numbers, patch versions, or mechanics. Unverified specifics are hedged or omitted</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Echoes of Aincrad Wiki is not affiliated with, endorsed by, or connected to Game Studio Inc., Bandai Namco Entertainment, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

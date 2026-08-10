import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Ardent Wilds Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Ardent Wilds Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Ardent Wilds Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Ardent Wilds," the voxel survival-crafting game developed by Spellware Studios.
      </p>
      <p>
        We research, organize, and verify game information to help players survive the Eldran's corruption, restore the ancient spires, and push toward the endgame. Our mission is to be the most helpful and accurate guide resource for the Ardent Wilds community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner survival, base building, combat, crafting, and character build guides</li>
        <li><strong>System Guides:</strong> The world-built skill tree, world generation, caves and mining, co-op, and modding</li>
        <li><strong>Boss Coverage:</strong> Preparation strategy for the confirmed boss encounters, including Zyrrhak and the endgame goal of Yorgoroth</li>
        <li><strong>Release Tracking:</strong> What is confirmed about the demo, playtest builds, and the full release</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and official playtest patch notes</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as new patches are released</li>
      </ul>
      <p>
        Ardent Wilds is pre-release — the free demo has been out since July 30, 2026, and the full game has no announced release date. Many details are not officially documented, and this site is deliberately strict about labeling what is confirmed, what is community-reported, and what is unverified. Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
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
        <strong>Ardent Wilds Wiki is not affiliated with, endorsed by, or connected to Spellware Studios or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

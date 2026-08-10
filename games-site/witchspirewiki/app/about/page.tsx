import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Witchspire Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Witchspire Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Witchspire Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Witchspire," the open-world, magic-based co-op survival RPG developed by Envar Games. The game launched into Steam Early Access on June 10, 2026.
      </p>
      <p>
        We research, organize, and verify game information to help players survive the fractured realms of Vyrs, Timberline Basin, Mira Isles, and the Shuddersands. Our mission is to be the most helpful and accurate guide resource for the Witchspire community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, coven (class) breakdowns, familiar databases, crafting recipes, and survival strategies</li>
        <li><strong>Boss Strategies:</strong> Tactics for the Al'uunian Golem, Shudder Matriarch, Lumi, and other encounters</li>
        <li><strong>Builds & Loadouts:</strong> Luminary skill tree builds, spellblade vs wand comparisons, and gear recommendations</li>
        <li><strong>Co-op Tips:</strong> Multiplayer guides, connection troubleshooting, and team play strategies</li>
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
        <strong>Witchspire Wiki is not affiliated with, endorsed by, or connected to Envar Games or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

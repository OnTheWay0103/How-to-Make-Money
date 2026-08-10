import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Taival Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Taival Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Taival Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Taival," the co-op adventure RPG developed by Finnish studio <strong>Bonobo Software</strong> and published by <strong>Level Up Gaming</strong>.
      </p>
      <p>
        We research, organize, and verify game information to help players explore the world of Taival alongside their Henki companion. Our mission is to be the most helpful and accurate guide resource for the Taival community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, Henki form guides, biome and exploration guides, and co-op strategy</li>
        <li><strong>Boss Strategies:</strong> What is confirmed about boss encounters, including honest notes on what is not yet documented</li>
        <li><strong>Progression Guides:</strong> Skill trees, crafting and professions, housing, and companion dungeon content</li>
        <li><strong>Regular Updates:</strong> Content reviewed and updated as the game evolves through Early Access</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and publisher materials</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as the game updates through Early Access</li>
      </ul>
      <p>
        Taival is in Early Access, which means some details are not yet officially documented. Our guides clearly mark what is confirmed against official sources and what is still community-reported and unconfirmed. Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (damage, stats, costs) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from, and unconfirmed details are marked as such rather than presented as fact</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Taival Wiki is not affiliated with, endorsed by, or connected to Bonobo Software, Level Up Gaming, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

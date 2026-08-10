import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Lunarium Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Lunarium Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Lunarium Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Lunarium,"
        the hand-drawn isometric action RPG developed by Lunarium Game Studio and published by
        Imperfect Games.
      </p>
      <p>
        We research, organize, and verify game information to help players master Lunarium's
        parry-based combat, skill trees, and boss gauntlet. Our mission is to be the most helpful
        and accurate guide resource for the Lunarium community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Game Guides:</strong> Beginner guides, combat mechanics, skill trees, and
          progression resources
        </li>
        <li>
          <strong>Boss Strategies:</strong> Tactics for every confirmed boss, from the Longhorn
          Troll to the final boss Enid
        </li>
        <li>
          <strong>Builds &amp; Loadouts:</strong> Build directions for Ave, embroidery and cloak
          advice, and Lune support setups
        </li>
        <li>
          <strong>Walkthroughs:</strong> Region-by-region guides covering Firleaves, Cyanstone, the
          White Reef Isles, and Paradise
        </li>
        <li>
          <strong>Regular Updates:</strong> Content updated as the game receives updates and new
          information is verified
        </li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li>
          <strong>Official Sources:</strong> Steam store page, developer announcements, and official
          press materials
        </li>
        <li>
          <strong>Community Research:</strong> Steam Community discussions, player reports, and
          community-verified findings
        </li>
        <li>
          <strong>Cross-Referencing:</strong> Information is checked against multiple sources before
          publication
        </li>
        <li>
          <strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we
          review content as new information becomes available
        </li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked
        and which sources were consulted. If you find information that is outdated or incorrect,
        please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li>
          <strong>Verification first:</strong> Numerical values (stats, costs, counts) are only
          included where they can be verified against official sources or consistent community
          consensus; everything else is clearly marked as unconfirmed
        </li>
        <li>
          <strong>Source transparency:</strong> Guides indicate where information comes from
        </li>
        <li>
          <strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported
        </li>
        <li>
          <strong>Community-driven:</strong> We prioritize topics that real players are asking about
          on Steam, Reddit, and community forums
        </li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>
          Lunarium Wiki is not affiliated with, endorsed by, or connected to Lunarium Game Studio,
          Imperfect Games, or any of their subsidiaries or affiliates. All game-related trademarks,
          images, and content are the property of their respective owners.
        </strong>{' '}
        This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly
        as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

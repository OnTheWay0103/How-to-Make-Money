import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Echoes of Mystralia Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Echoes of Mystralia Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Echoes of Mystralia Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Echoes of Mystralia," the spellcrafting ARPG roguelite developed by Borealys Games, the studio behind Mages of Mystralia (2017).
      </p>
      <p>
        We research, organize, and verify game information to help players master the spell crafting system, the regions of Mystralia, and the Guardians that guard them. Our mission is to be the most helpful and accurate guide resource for the Echoes of Mystralia community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, spell crafting breakdowns, and progression guides</li>
        <li><strong>Boss Strategies:</strong> Confirmed and demo-verified tactics for Guardian and elite encounters</li>
        <li><strong>Build Planning:</strong> Loadout frameworks for the spellcrafting systems, grounded in confirmed facts</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives Early Access patches and new content</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and official press materials</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as new patches are released</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (counts, costs, specs) are only included where they can be verified against official sources or the game itself</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from, and attribute unverified details to their source</li>
        <li><strong>No fabrication:</strong> Unconfirmed mechanics are marked TBD rather than invented — past fabricated content on this site has been removed and replaced with honest descriptions</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Echoes of Mystralia Wiki is not affiliated with, endorsed by, or connected to Borealys Games or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

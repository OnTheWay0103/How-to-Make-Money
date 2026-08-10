import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Dinoblade Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Dinoblade Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Dinoblade Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Dinoblade," the dinosaur-themed Soulslike action RPG developed by Team Spino LLC. In the game, you play a young Spinosaurus gripping a colossal Great Sword between its teeth, fighting weapon-wielding rival dinosaurs across a handcrafted prehistoric world to prevent an extinction event.
      </p>
      <p>
        We research, organize, and verify game information to help players survive the canyons, jungles, and Alpha predator bosses. Our mission is to be the most helpful and accurate guide resource for the Dinoblade community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, combat mechanics deep-dives, and progression strategies</li>
        <li><strong>Boss Strategies:</strong> Tactics for the Alpha predators that rule each region and Boss Rush Mode</li>
        <li><strong>Builds & Weapons:</strong> The Great Sword, legendary weapons, Soul Arts, and honest build advice</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new verified information</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, and official material</li>
        <li><strong>Community Research:</strong> Steam Community discussions, player reports, and community-verified findings</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Regular Re-Verification:</strong> Guides include a "Last checked" date, and we review content as new information surfaces</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (damage, stats, prices, dates) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>No fabrication:</strong> We do not invent game mechanics, boss names, item names, or numbers. When something is unverified, we say so or leave it out</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from, and mark speculation as speculation</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Dinoblade Wiki is not affiliated with, endorsed by, or connected to Team Spino LLC or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

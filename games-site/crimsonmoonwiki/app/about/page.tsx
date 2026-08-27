import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Crimson Moon Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Crimson Moon Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Crimson Moon Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Crimson Moon," the soulslike action RPG developed and published by ProbablyMonsters.
      </p>
      <p>
        We research, organize, and verify game information to help players fight through the fallen gothic city of Gildenarch. Our mission is to be the most helpful and accurate guide resource for the Crimson Moon community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, co-op guides, build breakdowns, and run strategies</li>
        <li><strong>System Overviews:</strong> Incursions, purification, Boons, Weapon Arts, and the classless build system</li>
        <li><strong>Boss Overviews:</strong> The three Wards, their world bosses, and the Dead Gods encounter</li>
        <li><strong>Regular Updates:</strong> Content updated as the game launches and receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, official trailers, and the official gameplay explainers</li>
        <li><strong>Hands-on Previews:</strong> Summer Game Fest playtest impressions from IGN, GamesBeat, OpenCritic, and other outlets</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Honest Marking:</strong> Anything not yet officially confirmed is clearly marked [Unconfirmed] rather than guessed</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, dates, stats) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from — Official, Community, or Editorial</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Crimson Moon Wiki is not affiliated with, endorsed by, or connected to ProbablyMonsters or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}

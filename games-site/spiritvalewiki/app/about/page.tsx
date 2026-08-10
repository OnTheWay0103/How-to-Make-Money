import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About SpiritVale Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About SpiritVale Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        SpiritVale Wiki is an <strong>unofficial fan-made resource</strong> dedicated to SpiritVale — a free-to-play, class-based MMORPG inspired by Ragnarok Online, available now on Steam Early Access.
      </p>
      <p>
        We are a small team of passionate players who create comprehensive guides, strategies, and resources to help the SpiritVale community. The game features 7 base classes, 8 advanced specializations, 227 cards, 35+ maps, and 20+ bosses — and we cover all of it.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Class Guides:</strong> Deep-dives for all 7 base classes and 8 advanced specializations, including builds and stat allocation</li>
        <li><strong>Boss Strategies:</strong> Mechanics, safe zones, and loot for field bosses, dungeon bosses, world bosses, and the 4-tier raid system</li>
        <li><strong>Systems Guides:</strong> Cards, crafting and refinement, fishing, pets and mounts, trading, and the daily/weekly loops</li>
        <li><strong>Regular Updates:</strong> Content revised as the game changes during Early Access</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>
        Our guides are built from hands-on gameplay, official Steam patch notes, developer announcements, Steam Community discussions, player reports, and community consensus. We cross-check information across multiple sources before publishing, and we update guides when the game changes.
      </p>

      <h2>Editorial Standards</h2>
      <p>
        We aim for accuracy over volume. Where the community disagrees with a guide, we revise it. Where the game changes, we update it. If you spot an error or outdated information, please let us know via our <a href="/contact">Contact page</a> — every correction is reviewed and applied.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>SpiritVale Wiki is not affiliated with, endorsed by, or connected to the developers or publishers of SpiritVale.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent, unofficial fan project created to support the game's community, and game mechanics may change with updates.
      </p>
    </div>
  );
}

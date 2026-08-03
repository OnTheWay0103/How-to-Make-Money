import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Big Walk Wiki — an unofficial fan wiki providing Big Walk guides, co-op tips, tools and puzzle strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Big Walk Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Big Walk Wiki is an <strong>unofficial fan-made resource</strong> dedicated to Big Walk, the cooperative open world puzzle adventure developed by House House and published by Panic.
      </p>
      <p>
        We are a small team of passionate players who create comprehensive guides, tools breakdowns, and co-op strategies to help groups get the most out of their walks across the island. Our mission is to be the most helpful and up-to-date guide resource for the Big Walk community — from day one.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, tool breakdowns, puzzle mechanics, and exploration tips</li>
        <li><strong>Co-op Guides:</strong> Multiplayer setup, crossplay, voice chat and communication strategies for groups of 2-12</li>
        <li><strong>Secrets & Hidden Content:</strong> Hidden questlines, secret areas and reward mechanics as the community discovers them</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and the community maps the island</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides on this site are written based on hands-on gameplay, pre-release coverage, community research, and careful verification. Big Walk launched August 4, 2026, so anything that is not yet publicly confirmed is clearly marked as TBD or unverified. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Big Walk Wiki is not affiliated with, endorsed by, or connected to House House, Panic, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}

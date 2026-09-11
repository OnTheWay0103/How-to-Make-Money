import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Dressmaker Wiki — an unofficial fan resource for the cozy dressmaking simulation by Cozy Lives and Free Lives. Our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Dressmaker Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Dressmaker Wiki is an <strong>unofficial fan-made resource</strong> dedicated to
        &ldquo;Dressmaker,&rdquo; the cozy dressmaking simulation developed by{' '}
        <strong>Cozy Lives</strong> and published by <strong>Free Lives</strong>.
      </p>
      <p>
        We research, organize, and verify information about the game so players can
        spend their time making dresses instead of hunting through conflicting
        articles — from the original itch.io prototype to the September 21, 2026
        Steam launch on Windows and macOS. Our mission is to be the most accurate
        and most honest guide resource for the Dressmaker community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Release Information:</strong> Release date, price status, platforms, languages and official system requirements, kept current as they are announced</li>
        <li><strong>Beginner Guides:</strong> The dressmaking loop explained step by step — sketchbook, fabric choice, pattern arrangement, cutting, sewing, decoration and delivery</li>
        <li><strong>Buying and Platform Answers:</strong> Where to get the game safely, how the Steam release differs from the itch.io prototype, and direct answers on Mac, console, Switch and mobile support</li>
        <li><strong>Disambiguation:</strong> Clear separation between Dressmaker, DressMaker and DressMaker Pro — three similarly named Steam products that are constantly confused</li>
        <li><strong>Regular Updates:</strong> Content updated as the game launches and receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> The Steam store page and Steam store data for App ID 4019220, developer and publisher announcements, and official trailers</li>
        <li><strong>Pre-release Press Coverage:</strong> Hands-on previews from established outlets, used for mechanics that the store page does not spell out</li>
        <li><strong>Community Reports:</strong> Findings from players of the public itch.io prototype, always labelled as community-reported rather than official</li>
        <li><strong>Honest Marking:</strong> Anything not yet officially confirmed is explicitly marked <strong>[Unconfirmed]</strong> rather than guessed at</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was
        last checked and which sources were consulted. If you find information that is
        outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Dates, prices, system requirements and platform support are only stated where they trace to an official source</li>
        <li><strong>Source transparency:</strong> Guides distinguish between official information, preview-sourced information, and community reports</li>
        <li><strong>Pre-release honesty:</strong> Dressmaker launches on September 21, 2026. Until then, mechanics that no official source has documented are presented as [Unconfirmed] instead of asserted as fact</li>
        <li><strong>Correct attribution:</strong> Dressmaker is developed by Cozy Lives and published by Free Lives. We state both roles precisely, because a widely copied error swaps them</li>
        <li><strong>No invented numbers:</strong> We do not publish price figures, reputation thresholds, quality scores or playtime estimates that no source supports</li>
        <li><strong>Corrections welcome:</strong> Games change. We fix errors when they are reported</li>
        <li><strong>Community-driven:</strong> We prioritise the questions players are actually asking on search engines, Steam and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Dressmaker Wiki is not affiliated with, endorsed by, or connected to Cozy Lives, Free Lives, or any of their subsidiaries or affiliates.</strong> All
        game-related trademarks, images, and content are the property of their
        respective owners. This site is an independent fan project created to support
        the game&rsquo;s community.
      </p>
      <p>
        Game mechanics, values, and content may change between now and launch, and
        again with post-launch updates. We update our guides as quickly as possible,
        but always check the official sources for the most current information.
      </p>
    </div>
  );
}

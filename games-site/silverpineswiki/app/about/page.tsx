import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Silver Pines Wiki — an unofficial fan resource for the survival horror metroidvania by Wych Elm and Team17. Our research standards, sourcing policy, and how we label community-reported information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Silver Pines Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Silver Pines Wiki is an <strong>unofficial fan-made resource</strong> dedicated to
        &ldquo;Silver Pines,&rdquo; the survival horror metroidvania developed by{' '}
        <strong>Wych Elm</strong> and published by <strong>Team17</strong>.
      </p>
      <p>
        We research, organise and verify information about the game so players can
        spend their time surviving the town instead of hunting through conflicting
        articles — including the free Steam demo that has been playable since
        June 1, 2026, and the full game released on October 8, 2026 for PC via
        Steam (Windows), with console versions announced for PlayStation 5, Xbox
        Series X|S, Nintendo Switch and Nintendo Switch 2. Our goal is to be the
        most accurate and the most honest guide resource for the Silver Pines
        community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Release Information:</strong> Release date, price, platforms, languages and the official system requirements, kept current</li>
        <li><strong>Demo Coverage:</strong> What the free demo contains, how long it runs, and which systems it teaches you that carry into the full game</li>
        <li><strong>Mechanics Guides:</strong> The phone-booth save system and save coins, coins versus vending machines, the limited inventory and storage containers, melee durability and tape repairs, manual reloading, stamina and Mementos</li>
        <li><strong>Exploration:</strong> How the metroidvania layer works — locked doors, tool gating, map notes, shortcuts and backtracking</li>
        <li><strong>Honest Labelling:</strong> Every mechanic is tagged as Confirmed, Community-reported, or [Unconfirmed]</li>
        <li><strong>Regular Updates:</strong> Content refreshed after the October 8, 2026 release and as the game receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> The Steam store page and Steam store data for App ID 2333000 (and App ID 4540100 for the demo), developer and publisher announcements, and Steam news posts</li>
        <li><strong>Structured Store Data:</strong> Steam&rsquo;s own store data for platforms, categories, languages, content descriptors and system requirements — read directly rather than quoted second-hand</li>
        <li><strong>Demo Player Reports:</strong> Mechanics that the store page does not spell out but that demo players consistently describe — always labelled <strong>Community-reported</strong>, never presented as official</li>
        <li><strong>Press Coverage:</strong> Hands-on previews and reviews, used for context and clearly attributed</li>
        <li><strong>Honest Marking:</strong> Anything not yet documented by an official source is explicitly marked <strong>[Unconfirmed]</strong> rather than guessed at</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was
        last checked and which sources were consulted. If you find information that is
        outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Three-tier sourcing:</strong> Every claim is either Official (Steam store data, developer or publisher statement), Community-reported (demo players and preview coverage), or Editorial (our own reasoning, labelled as such)</li>
        <li><strong>Verification first:</strong> Dates, platforms, languages and system requirements are only stated where they trace to an official source</li>
        <li><strong>Release accuracy:</strong> Silver Pines was released on October 8, 2026 at $24.99 on Steam. No official source has published weapon names, damage values, enemy statistics, upgrade costs or a full Memento list. We do not invent those numbers, and we do not present community-reported mechanics as confirmed design</li>
        <li><strong>Correct attribution:</strong> Silver Pines is developed by Wych Elm and published by Team17. We state both roles precisely, because the two are frequently collapsed into one</li>
        <li><strong>Disambiguation:</strong> The bare name &ldquo;Silver Pines&rdquo; is shared by several unrelated businesses and by World of Warcraft&rsquo;s Silverpine Forest. We anchor our content to the game and clearly state which Silver Pines a page is about</li>
        <li><strong>Corrections welcome:</strong> Games change. We fix errors when they are reported</li>
        <li><strong>Community-driven:</strong> We prioritise the questions players are actually asking on search engines, on Steam and in community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Silver Pines Wiki is not affiliated with, endorsed by, or connected to Wych Elm, Team17, or any of their subsidiaries or affiliates.</strong> All
        game-related trademarks, images and content are the property of their
        respective owners. This site is an independent fan project created to support
        the game&rsquo;s community.
      </p>
      <p>
        Game mechanics, values and content may change with patches and post-release
        updates. We update our guides as quickly as possible, but always check the
        official sources for the most current information.
      </p>
    </div>
  );
}

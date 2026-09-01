import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About BOMBANANA! Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About BOMBANANA! Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        BOMBANANA! Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "BOMBANANA!," the chaotic
        3-player co-op bomb-defusal party game developed by Lefto Studio and published by TARK.
      </p>
      <p>
        We research, organize, and verify game information to help three-player teams get the most out of every bomb —
        from the roles and the defusal manual to the bomb modules and the Free Mode bomb editor. Our mission is to be the
        most helpful and accurate guide resource for the BOMBANANA! community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Role Guides:</strong> Blind / Deaf / Mute monkey responsibilities, communication phrases, and gesture dictionaries</li>
        <li><strong>Module Compendium:</strong> Wires, D-pad, Numpad, Switch Panels, Braille and other bomb modules, with callout templates</li>
        <li><strong>Manual Reference:</strong> How the Mute monkey locates manual pages, quick-reference tables, and gesture translation</li>
        <li><strong>Release Info:</strong> Release date, price, platforms, system requirements, and demo information, kept current as they are announced</li>
        <li><strong>Regular Updates:</strong> Content updated as the game launches and receives patches</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page, developer announcements, official trailers, and the official demo</li>
        <li><strong>Developer Statements:</strong> Developer replies in Steam Community discussions and interviews are treated as primary sources where available</li>
        <li><strong>Verified Community Reports:</strong> Demo findings (module types, callout conventions) that are consistent across multiple independent player guides</li>
        <li><strong>Honest Marking:</strong> Anything not yet officially confirmed — especially pre-launch details like pricing — is clearly marked [Unconfirmed] rather than guessed</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted.
        If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, dates, module counts) are only included where they can be verified against official sources or consistent community consensus</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from — Official, Community, or Editorial</li>
        <li><strong>Pre-release honesty:</strong> Because BOMBANANA! launches on September 2, 2026, any system not verified in the official demo or store description is presented as a pre-release overview or [Unconfirmed] until verified. No module names, numbers, or stats are invented</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>BOMBANANA! Wiki is not affiliated with, endorsed by, or connected to Lefto Studio, TARK, or any of their
        subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their
        respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but
        always check the official sources for the most current information.
      </p>
    </div>
  );
}

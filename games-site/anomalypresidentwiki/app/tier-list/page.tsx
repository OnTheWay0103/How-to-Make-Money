import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Systems Quick Reference',
  description: 'Anomaly President quick reference — the day/night dual loop, campaign management, campaign bus, Fluffies, night combat, weapons, Anomaly Powers, elements, bosses and meta-progression at a glance. Bookmark this page.',
};

const SYSTEMS = [
  {
    icon: '🌞🌙',
    system: 'Day / Night Dual Loop',
    what: 'The whole game alternates two interlocking loops. By day you campaign for president; by night you fight the president\'s gangs.',
    why: 'Each half feeds the other — night wins unlock campaign options, campaign progress expands your combat tools.',
    link: { href: '/guides/beginner-guide', label: 'Beginner guide' },
  },
  {
    icon: '🗳️',
    system: 'Campaign Management (Day)',
    what: 'Give speeches, canvass for votes, manage your image, run card-based dialogue and timing minigames, and prepare for the election cycle.',
    why: 'Votes and campaign revenue drive the meta-progression that makes harder night missions winnable.',
    link: { href: '/guides/campaign-management', label: 'Campaign guide' },
  },
  {
    icon: '🚌',
    system: 'Campaign Bus (Base)',
    what: 'Your mobile base. You add rooms and sections — reviewers confirmed a bedroom, TV studio, upgrade room and canvassing room in EA.',
    why: 'Bus rooms affect abilities and playstyle each run. Rooms in development: Dance, Gift and Marketing.',
    link: { href: '/guides/campaign-bus-guide', label: 'Bus guide' },
  },
  {
    icon: '🧸',
    system: 'Fluffies (Companions)',
    what: 'Oppressed creatures you recruit and assign to departments: campaign, equipment upgrade, or battle support.',
    why: 'They must be cared for — neglect them and they abandon you or die.',
    link: { href: '/guides/fluffy-guide', label: 'Fluffy guide' },
  },
  {
    icon: '⚔️',
    system: 'Night Combat (Run)',
    what: 'A side-scrolling beat-\'em-up roguelike run: deploy from the overworld, pick up abilities and power-ups, fight through enemy waves to a boss.',
    why: 'Death resets the run but you keep materials, money and meta-progression.',
    link: { href: '/guides/night-combat', label: 'Combat guide' },
  },
  {
    icon: '🗡️',
    system: 'Weapons',
    what: 'Melee-focused arsenal — developer-stated launch roster: Sword, Nunchucks, Claws, Kusarigama, Staff, Hammer, Octo-Arms, plus kicks and punches. Carry two weapons.',
    why: 'Weapon choice decides whether you build a parrying swordmaster or a crowd-clearing specialist.',
    link: { href: '/guides/weapons-guide', label: 'Weapons guide' },
  },
  {
    icon: '✨',
    system: 'Anomaly Powers',
    what: 'Unique abilities carried by vice-president bosses (e.g. the PR chief\'s HEART). Defeat a boss to acquire its power.',
    why: 'Boss kills grant permanent Anomaly Powers usable immediately and across runs.',
    link: { href: '/guides/anomaly-powers-guide', label: 'Anomaly Powers guide' },
  },
  {
    icon: '🧊',
    system: 'Elements',
    what: 'Ice, Fire and Electric damage types confirmed in the Early Access build by reviewer testing.',
    why: 'Critics reported Ice feeling overpowered relative to Fire and Electric — expect balance changes.',
    link: { href: '/guides/builds-strategy-guide', label: 'Builds guide' },
  },
  {
    icon: '🕴️',
    system: 'Vice-President Bosses',
    what: 'The current president\'s inner circle, each with a named Anomaly Power. The PR chief (HEART) is confirmed; the demo\'s first boss is the Minister of Public Relations.',
    why: 'Beating them is how you steal powers and progress the story toward overthrowing the president.',
    link: { href: '/guides/bosses-guide', label: 'Bosses guide' },
  },
  {
    icon: '🔄',
    system: 'Meta-Progression',
    what: 'Permanent gains between runs: unlocked abilities, a stronger campaign, new allies, and expanded tools for future expeditions.',
    why: 'This is what makes an Early Access roguelike "one more run" addictive.',
    link: { href: '/guides/patch-notes-roadmap-guide', label: 'EA status & roadmap' },
  },
];

const GLOSSARY = [
  { term: 'Anomaly', def: 'The game\'s umbrella term for the strange powers, beings and events tied to the "Anomaly Universe" shared with Anomaly Agent.' },
  { term: 'EA', def: 'Early Access — the game\'s current state on Steam (since August 3, 2026).' },
  { term: 'Phew Phew Games', def: 'The Turkish developer of Anomaly President and Anomaly Agent.' },
  { term: 'Gamedev.ist / Gamersky Games', def: 'Co-publishers on the Steam release alongside Phew Phew Games.' },
  { term: 'Minister of Public Relations', def: 'The first boss seen in the demo; carries the power of HEART.' },
  { term: 'Vice-president bosses', def: 'The president\'s lieutenants; each holds a unique Anomaly Power you can steal.' },
];

export default function QuickReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Game Systems Quick Reference</h1>
      <p className="text-gray-400 mb-2">Anomaly President — the systems, one screen: dual loop, campaign, bus, Fluffies, combat, weapons, powers, bosses.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-violet-900/30 text-violet-300 border border-violet-800/50 mb-8">Bookmark me — reference tables, no fluff</div>

      <p className="text-gray-400 text-sm leading-relaxed mb-10">
        Anomaly President is not a tier-list game in the traditional sense: Early Access is still changing, and
        publishing ranked "best build" tables now would be guesswork. Instead, this page is the permanent quick
        reference for the confirmed systems and vocabulary. Everything here is grounded in the official Steam store
        description, developer announcements, and consistent reviewer reporting. Details still in flux are marked
        [Unconfirmed] until verified.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Systems at a Glance</h2>
        <div className="space-y-4">
          {SYSTEMS.map((row) => (
            <div key={row.system} className="bg-[#141c33] border border-[#26324f] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{row.icon}</span>
                <h3 className="text-lg font-semibold text-white">{row.system}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-green-400 mb-1">What it is</p>
                  <p className="text-gray-300 leading-relaxed">{row.what}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-400 mb-1">Why it matters</p>
                  <p className="text-gray-300 leading-relaxed">{row.why}</p>
                </div>
              </div>
              <p className="text-xs text-violet-400 mt-3">
                <a href={row.link.href} className="hover:underline">{row.link.label} →</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Vocabulary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left px-3 py-2 text-white bg-[#141c33] border border-[#26324f]">Term</th>
                <th className="text-left px-3 py-2 text-white bg-[#141c33] border border-[#26324f]">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {GLOSSARY.map((g) => (
                <tr key={g.term}>
                  <td className="px-3 py-2 text-gray-200 border border-[#26324f] align-top">{g.term}</td>
                  <td className="px-3 py-2 text-gray-400 border border-[#26324f] align-top">{g.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-[#141c33] border border-[#26324f] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Anomaly President is an evolving Early Access roguelike, and the meta is not settled. Rather than publish
          ranked tier tables that would be outdated within a patch, this page is the stable quick reference for the
          systems. As the game updates and the community documents the strongest builds, the <a href="/guides/builds-strategy-guide" className="text-violet-400 hover:underline">builds guide</a> will be updated with sourced rankings.
        </p>
      </div>
    </div>
  );
}

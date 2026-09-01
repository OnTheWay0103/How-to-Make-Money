import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roles Quick Reference',
  description: 'BOMBANANA! roles quick reference — Blind, Deaf and Mute monkey responsibilities, the information triangle, universal callout template, gesture dictionary, and pre-game rules. Bookmark this page.',
};

const ROLES = [
  {
    icon: '🙈',
    role: 'Blind Monkey',
    can: 'Touch and operate the bomb, interact with modules, read Braille-style dot panels by feel, hear everything, and speak.',
    cannot: 'See colors or read screens — the bomb looks like a blurry silhouette.',
    bottleneck: 'Lowest mental load. The executor: wait for a confirmed instruction, repeat it back, and act.',
  },
  {
    icon: '🙉',
    role: 'Deaf Monkey',
    can: 'See the bomb clearly, see teammates gesture, and speak to the Blind Monkey.',
    cannot: 'Hear teammates or in-game voice.',
    bottleneck: 'The relay / bottleneck. Must watch the bomb screen and the Mute player\'s gestures simultaneously while speaking clearly.',
  },
  {
    icon: '🙊',
    role: 'Mute Monkey',
    can: 'Read the defusal manual and know the answers to every module.',
    cannot: 'Speak a single word — communicates with gestures, pointing, and the emote wheel.',
    bottleneck: 'Often the hardest role for beginners. Must mime every answer one signal at a time.',
  },
];

const CHAIN = [
  { step: '1', who: 'Mute Monkey', action: 'Reads the manual and gestures the answer to the Deaf Monkey.' },
  { step: '2', who: 'Deaf Monkey', action: 'Watches the bomb and the Mute player, relays the instruction out loud to the Blind Monkey.' },
  { step: '3', who: 'Blind Monkey', action: 'Repeats the instruction back, gets a confirm, then acts on the bomb (cuts, presses, flips, enters).' },
];

const CALLOUT_ORDER = [
  '1. Module name', '2. Position', '3. Details', '4. Manual answer', '5. Repeat-back', '6. Confirm', '7. Act',
];

const GESTURES = [
  { gesture: 'Yes / correct', use: 'Confirm an instruction before acting.' },
  { gesture: 'No / wrong', use: 'Reject a step before the Blind Monkey acts.' },
  { gesture: 'Wait', use: 'Pause the module while the manual reader catches up.' },
  { gesture: 'Repeat', use: 'Ask for a detail to be said again (Deaf Monkey relays).' },
  { gesture: 'Go back / rewind', use: 'Signal a switch panel correction before pressing enter.' },
  { gesture: 'Numbers 0–9', use: 'Agree on a fixed number sign before starting so the Mute Monkey can signal digits.' },
];

const PRERULES = [
  'Assign roles before the timer starts.',
  'Lock "left" and "right" to the Blind Monkey\'s perspective.',
  'Agree on at least 3 gestures: wait, yes, wrong.',
  'Set a go-back / rewind gesture for switch panels.',
  'Solve the easiest known module first (wires are usually faster than switch or numpad).',
  'Hard rule: nobody cuts, presses, or enters until the instruction has been repeated back once.',
];

export default function RolesReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Roles Quick Reference</h1>
      <p className="text-gray-400 mb-2">BOMBANANA! blind / deaf / mute monkeys — responsibilities, the information chain, and the callouts that defuse bombs.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-violet-900/30 text-violet-300 border border-violet-800/50 mb-8">Bookmark me — reference tables, no fluff</div>

      <p className="text-gray-400 text-sm leading-relaxed mb-10">
        BOMBANANA! has no builds or tier list — every team uses the same three roles with the same split of information.
        This page is the reference table for those roles and the communication rules that make them work. Everything here
        is grounded in the official store description (roles, modes, voice chat) and consistent demo reporting from
        multiple independent guides. Specific manual tables and final-release details are [Unconfirmed] until verified
        after launch.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Three Roles</h2>
        <div className="space-y-4">
          {ROLES.map((row) => (
            <div key={row.role} className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{row.icon}</span>
                <h3 className="text-lg font-semibold text-white">{row.role}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-green-400 mb-1">Can</p>
                  <p className="text-gray-300 leading-relaxed">{row.can}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-red-400 mb-1">Cannot</p>
                  <p className="text-gray-300 leading-relaxed">{row.cannot}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{row.bottleneck}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Information Triangle</h2>
        <p className="text-gray-400 text-sm mb-4">
          Information flows one way: Mute Monkey → Deaf Monkey → Blind Monkey. The Deaf Monkey is the bottleneck —
          if they glance away during a gesture, the chain breaks.
        </p>
        <div className="space-y-2">
          {CHAIN.map((s) => (
            <div key={s.step} className="flex items-start gap-3 bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center text-sm font-bold">{s.step}</span>
              <div>
                <p className="text-sm font-semibold text-white">{s.who}</p>
                <p className="text-sm text-gray-400">{s.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Universal Callout Order</h2>
        <p className="text-gray-400 text-sm mb-4">
          Every module call should follow the same structure so the Mute Monkey can find the right manual page. Good teams
          sound "boring and robotic."
        </p>
        <div className="flex flex-wrap gap-2">
          {CALLOUT_ORDER.map((c) => (
            <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1.5 rounded border border-[#2a2a5e]">{c}</span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Gesture Dictionary Essentials</h2>
        <p className="text-gray-400 text-sm mb-4">
          The Mute Monkey cannot speak, so a small agreed gesture set prevents mid-round arguments. These are the gestures
          every guide recommends agreeing on before the timer starts.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left px-3 py-2 text-white bg-[#1a1a3e] border border-[#2a2a5e]">Gesture</th>
                <th className="text-left px-3 py-2 text-white bg-[#1a1a3e] border border-[#2a2a5e]">When to use</th>
              </tr>
            </thead>
            <tbody>
              {GESTURES.map((g) => (
                <tr key={g.gesture}>
                  <td className="px-3 py-2 text-gray-200 border border-[#2a2a5e]">{g.gesture}</td>
                  <td className="px-3 py-2 text-gray-400 border border-[#2a2a5e]">{g.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Pre-Game Rules</h2>
        <ul className="space-y-2">
          {PRERULES.map((r) => (
            <li key={r} className="flex items-start gap-2 text-gray-300 text-sm">
              <span className="text-violet-400 mt-0.5">•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          BOMBANANA! is a party co-op game, not a build-based game, so there is no tier list — instead this page is the
          permanent quick reference for the three roles and the communication system. After the September 2, 2026 launch,
          this page will be updated with verified module tables, manual pages, and any new content from the full release.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Ardent Wilds — release date, demo, crafting, base building, skill tree, co-op multiplayer, system requirements, modding, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Ardent Wilds?', answer: 'Ardent Wilds is an open-world survival crafting RPG developed by Spellware Studios, a small indie team based in Ghent, Belgium. Described by playtesters as "3D Terraria," it features a fully destructible voxel world where you can reshape the terrain, a unique world-built skill tree (nodes are physical locations you discover), deep base building, fast-paced arcade combat with customizable builds, and co-op for up to 6 players. A free demo launched on Steam on July 30, 2026.' },
  { question: 'When is the full release date?', answer: 'Ardent Wilds does not yet have a confirmed release date. The game is listed as "Coming Soon" on Steam. A playable demo was released on July 30, 2026, which gives players a substantial preview of the core systems — crafting, base building, combat, and co-op.' },
  { question: 'Is Ardent Wilds single-player or co-op?', answer: 'Ardent Wilds fully supports both single-player and online/LAN co-op for up to 6 players. You can host a game and friends can join via Steam friends or direct IP (LAN). The developers note the player count can be increased beyond 6, but the game is not balanced for larger groups. All content is accessible solo.' },
  { question: 'What makes the skill tree unique?', answer: 'Instead of opening a UI menu and spending points, Ardent Wilds places skill nodes physically in the world. You explore the map, find ancient spires and forgotten facilities, and restore them to unlock new powers, passive bonuses, and fast-travel points. This turns skill progression into an exploration reward rather than a menu interaction.' },
  { question: 'Is the whole world destructible?', answer: 'Yes — the entire world is built on a voxel system and is fully destructible. Bombs and Pyroblasts leave craters in the terrain. The Tome of Ice lets you create frost bridges over canyons. You can dig tunnels, flatten land for your base, and reshape the environment to suit your strategy.' },
  { question: 'What is the Eldran?', answer: 'The Eldran is an encroaching eldritch hivemind that serves as the main antagonistic force. It corrupts the land and spawns hostile creatures. The ultimate goal is to cleanse the world of the Eldran and challenge their god — Yorgoroth, the Devourer of Worlds.' },
  { question: 'How does base building work?', answer: 'You can build a base anywhere in the world using crafted materials. Grow crops, cook meals, brew elixirs, craft armor and weapons at specialized stations, and decorate with furniture. Bases can be fortified against Eldran attacks. In co-op, multiple players can contribute to and share a base.' },
  { question: 'Does Ardent Wilds have modding support?', answer: 'Yes! Ardent Wilds ships with a full Lua API and all game scripts are accessible. This means modders can create custom content, add new items, modify gameplay mechanics, and build entirely new experiences. The developers actively encourage modding.' },
  { question: 'How does combat work?', answer: 'Combat is fast-paced and arcade-style with skill-driven mechanics. You can play as a fireball-wielding wizard, a deadly melee warrior, a precision marksman, or freely mix abilities. Rare artifacts found in the world unlock unique abilities that dramatically change your build. There are no rigid classes — you build your character through gear and artifact choices.' },
  { question: 'What are Rare Artifacts?', answer: 'Rare Artifacts are unique items that unlock special abilities and dramatically alter your playstyle. Examples include the Tome of Ice (creates frost bridges, freezes enemies) and various combat artifacts that add new skills or modify existing ones. Finding and combining artifacts is core to build crafting.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo launched on Steam on July 30, 2026. The demo includes a portion of the world map, the core crafting and base building systems, combat with several artifact options, and full co-op support. Progress may or may not carry over to the full game.' },
  { question: 'What platforms is it on?', answer: 'Ardent Wilds is confirmed for Windows, Mac, and Linux on Steam. The minimum requirements include 16 GB RAM and an OpenGL 4.6-capable graphics card. Storage requirement is approximately 5 GB. Console versions have not been announced.' },
  { question: 'Who is developing Ardent Wilds?', answer: 'Ardent Wilds is developed and published by Spellware Studios, a small independent team based in Ghent, Belgium. This appears to be their debut title on Steam.' },
  { question: 'How long is the game?', answer: 'As the full game is not yet released, the total playtime is unknown. Based on the described systems — open world exploration, deep crafting trees, base building, skill spires, bosses, and co-op — expect 40-80+ hours for a thorough playthrough, with effectively unlimited replayability from modding and co-op.' },
  { question: 'What languages are supported?', answer: 'The Steam store page lists English as the supported language. Additional localization has not been announced but may be added during development or through community modding.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Ardent Wilds — gameplay, release date, crafting, base building, co-op, skill tree, modding, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

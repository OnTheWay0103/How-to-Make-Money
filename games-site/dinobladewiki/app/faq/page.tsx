import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Dinoblade -- release date, price, co-op, Soulslike combat, weapon types, Ex-Mod upgrades, save points, New Game+, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Dinoblade?', answer: 'Dinoblade is a dinosaur-themed Soulslike action RPG developed by Team Spino LLC. You play as a dinosaur hunter wielding weapons held in your dinosaur companion\'s mouth, fighting through prehistoric biomes against massive creatures. The game features stamina-based combat, parry mechanics, RPG stat progression, and a boss rush mode. It launches July 23, 2026 on Steam.' },
  { question: 'Is Dinoblade a Soulslike?', answer: 'Yes. Dinoblade features core Soulslike mechanics: stamina-based combat with light and heavy attacks, rolling with invincibility frames, parrying with active frame windows, bonfire-style save points (Roosts), risk-reward exploration, and challenging boss fights that require pattern learning.' },
  { question: 'How many weapon types are there?', answer: '6 main weapon types: Greatsword, Battle Axe, War Hammer, Scythe, Spear, and Claws. Each has unique movesets, reach, speed, and stamina costs. Additionally, 3 hidden weapons can be discovered through exploration -- the Fossil Greatsword, Volcanic Hammer, and Soul Reaper scythe.' },
  { question: 'How does the Ex-Mod upgrade system work?', answer: 'Ex-Mod allows you to upgrade weapons with special modifiers found throughout the world. Each Ex-Mod changes your weapon\'s stats and can add elemental damage (fire, ice, lightning), lifesteal, bleed buildup, or other special effects. Ex-Mods are found in hidden areas, dropped by bosses, or crafted from rare materials.' },
  { question: 'How do save points work?', answer: '"Roost" points serve as bonfire equivalents. Resting at a Roost fully restores your HP and refills healing items but respawns all non-boss enemies. You can fast travel between discovered Roosts. Some Roosts also allow weapon upgrades and stat respecs.' },
  { question: 'Is there New Game+?', answer: 'Yes. After defeating the final boss Kasei the Tyrant, New Game+ becomes available. NG+ features increased enemy difficulty, new enemy placements, exclusive NG+ upgrade materials, and additional lore collectibles. Your weapons, levels, and items carry over.' },
  { question: 'Is there co-op or multiplayer?', answer: 'Up to 2-player online co-op is supported for the full campaign. Both players progress together through the story. There is no PvP at launch. Co-op is available in the demo as well.' },
  { question: 'Can I respec my character?', answer: 'Yes. After defeating the boss Axe in the Ancient Forest, you unlock the ability to respec at the Ancient Forest Roost. Respeccing requires a Memory Shard item, which can be found as rare loot in the Volcanic Wastes biome.' },
  { question: 'How many bosses are there?', answer: '8 total bosses: 6 story bosses and 2 optional secret bosses. The story bosses include Kira the Exile, the Alpha Raptor mini-boss, Axe the Ankylosaur, the Crystal Guardian, the Volcanic Wyrm, and Kasei the Tyrant (final boss). Secret bosses include the Ancient One in Crystal Caverns.' },
  { question: 'What are the special skills?', answer: 'Each weapon has a unique special skill: Meteor Slice (Greatsword -- AoE ground slam), Whirlwind Spin (Battle Axe -- multi-hit spin), Earth Shatter (War Hammer -- shockwave), Reaping Sweep (Scythe -- wide arc), Impaling Charge (Spear -- lunging thrust), and Rending Strike (Claws -- rapid slash). Alpha Roar is a universal buff skill that boosts attack power. Boss Soul Summon lets you call a defeated boss for a single devastating attack.' },
  { question: 'What are the stat categories?', answer: 'Five primary stats: Strength (heavy weapon damage and stagger), Dexterity (light weapon damage, crit rate, and parry speed), Endurance (stamina pool and stamina regeneration), Vitality (HP and physical defense), and Spirit (special skill damage and Boss Soul Summon effectiveness). Each stat can be leveled up to 99.' },
  { question: 'What biomes are in the game?', answer: 'Five main biomes: Jurassic Plains (starting grassland area with raptors and small herbivores), Ancient Forest (dense jungle with vertical exploration), Volcanic Wastes (lava fields and fire-themed enemies), Crystal Caverns (underground cave system with crystalline creatures), and the Summit (final area leading to Kasei the Tyrant).' },
  { question: 'How long is Dinoblade?', answer: 'A first playthrough takes approximately 20-30 hours. Completing all side content, finding all hidden weapons, and discovering every secret area adds another 10-15 hours. New Game+ provides additional replay value with increased difficulty.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10 64-bit, Intel i5-8400 / Ryzen 5 2600, 8GB RAM, GTX 1060 6GB / RX 580, 40GB SSD storage. Recommended: Windows 11 64-bit, Intel i7-10700 / Ryzen 7 3700X, 16GB RAM, RTX 3060 / RX 6700 XT, 40GB SSD.' },
  { question: 'Is there a Boss Rush mode?', answer: 'Yes. Boss Rush mode unlocks after defeating the final boss Kasei the Tyrant. You fight all bosses consecutively without rest, with limited healing. S-rank requires high parry counts, fast clear times, and zero deaths. Rewards include exclusive cosmetics and weapon enchantments.' },
  { question: 'Is there a demo?', answer: 'Yes, a free demo is available on Steam. It includes the Jurassic Plains area, the Kira the Exile boss fight, 3 weapon types (Greatsword, Battle Axe, Claws), a level cap of 15, and up to 2-player co-op. Full save data carries over to the retail release on July 23.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Dinoblade -- gameplay, weapons, co-op, bosses, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}

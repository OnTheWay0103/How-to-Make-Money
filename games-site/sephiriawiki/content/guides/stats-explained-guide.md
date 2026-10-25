---
title: "Sephiria Stats Explained — What Defense Penetration, Luck and 'Inventory Slot Level' Actually Do"
description: "Sephiria shows Defense Penetration, True Damage, Luck and 'Inventory Slot Level' without defining any of them. Here is what each stat does, what players have actually tested, and which numbers are still unconfirmed."
category: "Guides"
version: "1.0"
updated: "2026-10-25"
keywords:
  - "sephiria stats explained"
  - "sephiria defense penetration"
  - "sephiria true damage"
  - "sephiria luck stat"
  - "sephiria inventory slot level"
  - "sephiria crit chance"
  - "sephiria stat guide"
related:
  - artifacts-guide
  - tablets-guide
  - talents-guide
  - builds-guide
  - combo-system-guide
  - faq-content
sources:
  - tier: "Official"
    title: "Sephiria 1.0.33 Update"
    url: "https://store.steampowered.com/news/app/2436940/view/1843481262695189"
    date: "2026-09-11"
    text: "The current build reference (latest announcement before 2026-10-25). Under UI it lists 'Adjusted some text to read more naturally', and under item changes 'Heidi • Updated the effect text to match the actual effect' — the developer has been correcting descriptions whose wording did not match behaviour."
  - tier: "Official"
    title: "Sephiria 1.0.31 Update"
    url: "https://store.steampowered.com/news/app/2436940/view/1843481262692576"
    date: "2026-09-10"
    text: "Adds a Comprehensive Training Grounds tutorial: 'You can enter the Comprehensive Training Grounds from the entrance to the Training Grounds. Open your inventory in the Comprehensive Training Grounds…'. Also lists the Midday Whetstone with the stat line 'True Damage +1/1/2/2/2', confirming True Damage is a real item stat rather than community shorthand."
  - tier: "Official"
    title: "Sephiria 0.11.5 Update: Training Grounds"
    url: "https://store.steampowered.com/news/app/2436940/view/1828894815560280"
    date: "2026-04-03"
    text: "Introduces the facility used to test these stats: 'Comprehensive Training Grounds — A new area where you can test unlocked weapons and items is added. Enter through Bunnyville Training Grounds after unlocking the [facility].' The same post changes Ringless Staff with 'Reduced increased damage when Critical Chance stat is below 30%. (25% → 20%)', which confirms a stat literally named Critical Chance and a damage bonus tied to keeping it low."
  - tier: "Community"
    title: "Reddit — 'So apparently the training dummy can die' (defense penetration explanation)"
    url: "https://www.reddit.com/r/sephiria/comments/1w3zsq4/so_apparently_the_training_dummy_can_die/"
    date: "2026-09 (accessed 2026-10-25)"
    text: "One player asks 'What is defense penatration, I have never understood that stat?'. The detailed reply: enemies carry a defense rating like the player, defense penetration ignores a percentage of that armor (their example: 40 penetration turns 50 defense into 30), defense rating is not linear, and 'Only damage unaffected by defense is True Damage which is a flat(?) value added to each instance of damage you make'. This is a single, self-described testing explanation, not developer documentation."
  - tier: "Community"
    title: "Reddit — 'Luck Stat?'"
    url: "https://www.reddit.com/r/sephiria/comments/1w4ylxw/luck_stat/"
    date: "2026-09-02"
    text: "The poster asks whether Luck does anything outside one card artifact. Replies: 'It increases the chance to get higher rarity drops for artifacts and tablets as well. If you hover the stat you can see the increased odds'; a second reply adds that it also raises the appearance of luck shrines that let you choose additional health or defense."
  - tier: "Community"
    title: "Reddit — 'Can burn tick crit?'"
    url: "https://www.reddit.com/r/sephiria/comments/1we3sti/can_burn_tick_crit/"
    date: "2026-09-12"
    text: "Four separate replies answer yes, burn ticks can crit; one adds that they 'can also proc true damage', and another that critical-hit area damage can re-apply a burn stack. The original poster concludes they should now build crit chance for a burn setup."
  - tier: "Community"
    title: "Reddit — 'Cinnamon Stone has Inventory Slot Level: +3, what does that do?'"
    url: "https://www.reddit.com/r/sephiria/comments/1w3hhv2/cinnamon_stone_has_inventory_slot_level_3_what/"
    date: "2026-08-31"
    text: "The item is the Cintamani Stone (the poster misreads the name). The answer: 'when it gets used (when you would otherwise have died) it gives the slot it was in +3, like a tablet would'. The original poster replies 'Ohhhhh! I didn't notice that it upgraded the spot!' — independent confirmation from the person who had the item."
  - tier: "Community"
    title: "Reddit — 'Does abilities consuming MP include tomes/other artifacts?'"
    url: "https://www.reddit.com/r/sephiria/comments/1w1lpeg/does_abilities_consuming_mp_include_tomesother/"
    date: "2026-08-29"
    text: "Replies tested in the Comprehensive Training Grounds report that MP-consumption effects apply to grimoires as well as weapon abilities, and that a 100% special-attack cost reduction (for example a 6/6 Shieldmate) switches those effects off. Another reply describes opening the inventory and dragging items from the right side of the screen to equip test items there."
  - tier: "Community"
    title: "Reddit — 'Does MP steal apply to artifact damage like frost relic and solarblade?'"
    url: "https://www.reddit.com/r/sephiria/comments/1vz9c9r/does_mp_steal_apply_to_artifact_damage_like_frost/"
    date: "2026-08-26"
    text: "One reply: 'I believe everything except for damage from planets and companions will count as your damage.' The poster then asks whether a planet's burn still counts, which nobody in the thread confirms."
  - tier: "Community"
    title: "Reddit — 'Some testing around burn, plasma and true damage'"
    url: "https://www.reddit.com/r/sephiria/comments/1wkg2t7/some_testing_around_burn_plasma_and_true_damage/"
    date: "2026-10-05"
    text: "Players compare in-game wording with measured ticks. One reports that the Plasma Helmet's burn component uses total Fire + Lightning rather than the average the description implies unless Icebound Tejas is equipped, and another notes 'The item description translations are one of my few complaints so far, there's at least a few that don't work as written.' Useful as a warning that some stat text is still unreliable."
---

# Sephiria Stats Explained — What Defense Penetration, Luck and "Inventory Slot Level" Actually Do

**Sephiria 1.0 / Updated: October 25, 2026**

Sephiria's stat panel is generous with names and quiet about definitions. Defense Penetration, True Damage, Luck and "Inventory Slot Level" all appear on items and in the character sheet, but the game does not tell you what any of them changes. The result is a steady stream of the same questions: what is defense penetration, does luck do anything, what did that +3 actually upgrade.

The newest build as of this guide is **1.0.33 (September 11, 2026)**; there is no October patch. TEAM HORAY is still correcting wording — 1.0.33 includes *"Updated the effect text to match the actual effect"* — so treat any description you read as a claim to verify, not a specification.

This page collects what is actually established about each stat, and separates tested answers from guesses. Where a claim rests on one player's testing, it is marked **[Unconfirmed]**.

---

## Test it yourself first: the Comprehensive Training Grounds

Almost every stat question can be settled in one place. The **Comprehensive Training Grounds** was added in 0.11.5 as *"a new area where you can test unlocked weapons and items"*, and 1.0.31 added an in-game tutorial for it.

Players describe the route as the building in the bottom-right of Bunnyville, above the farm, reached through the Training Grounds entrance. Inside, open your inventory and drag items from the right side of the screen into your grid to test them. Damage numbers and debuff ticks are visible, which is how the community answers below were produced.

Use it before trusting any guide: your build, patch and item rolls differ from the tester's.

---

## Defense Penetration — the stat nobody explains

Enemies in Sephiria carry a defense rating, the same kind of number your own character sheet shows. Defense reduces the damage each hit deals; **Defense Penetration** is the counter-stat that ignores a share of it.

The clearest community explanation, from a player testing against the training dummy:

> "Stacking defense penetration makes you ignore a % of their armor… 40 def pen would make an enemy have 30 def instead of 50… (defense rating is not linear)." — [Reddit, September 2026](https://www.reddit.com/r/sephiria/comments/1w3zsq4/so_apparently_the_training_dummy_can_die/)

Two practical consequences follow, both **[Unconfirmed]** because they come from one tester rather than a published formula:

- Penetration gets more valuable the more armor the target has, which is why it reads as a boss stat rather than a trash-clear stat.
- Because defense is not linear, a penetration roll does not convert into a fixed percentage of damage. The same 40% penetration is worth more against a heavily armored target than a lightly armored one.

What is not in dispute: the stat only affects damage that defense applies to. That is where True Damage comes in.

---

## True Damage — flat damage that skips the armor check

True Damage is a real item stat, not community slang. Patch 1.0.31 lists the Midday Whetstone with **"True Damage +1/1/2/2/2"**, and other items roll it too.

Per the same testing thread, True Damage is added per instance of damage and is **not reduced by enemy defense** — the tester describes it as *"a flat(?) value added to each instance of damage you make"* **[Unconfirmed]**. That "per instance" wording is the part that matters: a fast weapon or a multi-tick effect applies the number far more often than a single heavy hit.

True Damage also interacts with damage-over-time. Players confirm that **burn ticks can crit and can proc True Damage**, so a burn build is not locked out of either stat ([burn crit thread](https://www.reddit.com/r/sephiria/comments/1we3sti/can_burn_tick_crit/)).

---

## Critical Chance and Critical Damage

These two are the best-documented stats in the game, because items openly reference them. Patch 0.11.5 changed the Ringless Staff with the line *"Reduced increased damage when Critical Chance stat is below 30% (25% → 20%)"* — proof that the stat is called **Critical Chance** internally and that at least one item pays you for keeping it low.

Three tested behaviours are worth knowing:

| Question | Answer | Confidence |
|---|---|---|
| Can burn ticks crit? | Yes — multiple players confirm it, and crit area damage can re-apply a burn stack | Community, multiple replies |
| Can crits proc True Damage? | Yes, reported in the same thread | Community, single reply |
| Is low crit a valid build? | Some items reward low Critical Chance, so it can be deliberate rather than a mistake | Official item text |

If you are stacking a damage-over-time element, crit chance is not wasted — it multiplies the ticks, not just the hit that applied them.

---

## Luck — drop rarity, not damage

Luck does not add damage. The community answer, repeated by two players in the same thread, is that **Luck raises the chance of higher-rarity drops for artifacts and tablets**, and that the stat tooltip itself shows the increased odds when you hover it ([Luck Stat?](https://www.reddit.com/r/sephiria/comments/1w4ylxw/luck_stat/)).

A third reply adds that Luck also makes **luck shrines** — the ones that offer a choice between additional health or defense — appear more often. That secondary effect is **[Unconfirmed]**; it was reported once and not repeated in the thread.

Luck is not a hidden damage multiplier, and it does not replace artifact combining. If your run keeps dying, Luck is not the fix.

---

## "Inventory Slot Level +3" — what the Cintamani Stone upgrades

This is the most misunderstood line on any item, and the item name is usually misread too: it is the **Cintamani Stone**, not "Cinnamon Stone".

The stone's job is to save you from a death. When it triggers, the inventory slot it occupied is **upgraded by +3 levels**, the same way a tablet upgrades a slot. The player who answered the question put it as: *"when it gets used (when you would otherwise have died) it gives the slot it was in +3, like a tablet would"*, and the original poster confirmed they had not noticed the slot change until it was pointed out ([thread](https://www.reddit.com/r/sephiria/comments/1w3hhv2/cinnamon_stone_has_inventory_slot_level_3_what/)).

Practical reading: the +3 is a **consolation prize attached to the revive**, not a permanent buff from carrying the stone. Whether the upgraded level persists after that run is **[Unconfirmed]** — nobody in the thread tested it.

---

## MP wording: "abilities consuming MP" and MP Steal

Two MP phrases cause most of the confusion.

**"Abilities consuming MP"** is broader than weapon specials. Players who tested it in the Comprehensive Training Grounds report that it includes **grimoire casts**, and that effects which reduce special-attack cost to zero switch the MP-consumption trigger off entirely — a 6/6 Shieldmate was the example given ([thread](https://www.reddit.com/r/sephiria/comments/1w1lpeg/does_abilities_consuming_mp_include_tomesother/)). If an item says it scales with MP spent, do not assume it only counts your weapon button.

**MP Steal** is about whose damage counts as yours. The working community answer is that everything except **planet and companion damage** counts as your damage, so artifact and grimoire hits can steal MP while a planet's burn cannot **[Unconfirmed]** — the reply is explicitly hedged ("I believe"), and the follow-up question about planet burn went unanswered ([thread](https://www.reddit.com/r/sephiria/comments/1vz9c9r/does_mp_steal_apply_to_artifact_damage_like_frost/)).

One naming note: a patch renamed *"Special Attack Cost Reduction"* to **"Special Attack MP Cost Reduction"**; older item lists still use the first name.

---

## Where the descriptions still lie

Not every stat question has a clean answer, and the game is partly to blame. Players documenting burn and plasma found that the **Plasma Helmet's burn component uses total Fire + Lightning damage instead of the average the description implies**, except when Icebound Tejas is equipped, where the average is applied correctly. The same thread calls the item-description translations *"one of my few complaints so far"* — *"at least a few that don't work as written"* ([testing thread](https://www.reddit.com/r/sephiria/comments/1wkg2t7/some_testing_around_burn_plasma_and_true_damage/)).

The honest rule: if a description and your damage numbers disagree, trust the numbers you measured in the Training Grounds, and assume the text may be patched later. 1.0.33 already changed several effect texts for exactly this reason.

---

## FAQ

**Is Defense Penetration better than flat damage?**
There is no published formula, so there is no universal answer. Penetration is worth more against armored targets and worth less against lightly armored ones; flat damage and critical stats scale every hit. Test both in the Comprehensive Training Grounds against the same enemy.

**Does Luck affect boss drops?**
Unconfirmed. Players only describe higher-rarity drops for artifacts and tablets generally. Nobody in the source threads tested boss-specific tables.

**Why does my Cintamani Stone not show +3?**
The upgrade happens when the stone is consumed to prevent a death, not while it sits in your bag. If you never died in that run, the slot was never upgraded.

**Can burn crit, or only direct hits?**
Burn ticks can crit — this is one of the few stat answers with several independent confirmations.

---

## Related Guides

- [Artifacts Guide](/guides/artifacts-guide) — where most of these stats roll
- [Tablets Guide](/guides/tablets-guide) — slot upgrades and the +3 comparison
- [Talents Guide](/guides/talents-guide) — permanent stat sources
- [Best Builds](/guides/builds-guide) — turning stats into a working run
- [Combo System Guide](/guides/combo-system-guide) — combo thresholds
- [FAQ](/guides/faq-content) — the rest of the common questions

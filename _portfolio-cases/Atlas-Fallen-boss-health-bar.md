---
title: "Atlas Fallen → Boss Health Bars"
description: ""
order: 2
featured: false

image: /assets/images/portfolio/cs_atlas-fallen-health-bar/hero.webp
image-caption: ""

card-problem: "Add multiple heathbars to the HUD in the least obtrusive way possible"
card-solution: "Segmented icons doubling as health bars; dynamic opacity of health bars"
card-outcome: ""

summary-description: "AA Action RPG (PC, Console)"
summary-employer: "Deck 13 (Gaming)"
summary-role: "UX Design"
summary-process: "Rapid Prototyping, User Testing"
---

One of Atlas Fallen's unique features is its combat system, where players are required to incapacitate multiple body parts in order to defeat bosses and some other strong enemies. On top of that, those body parts are divided in two types: mandatory, where incapacitating them is a requirement for defeating the enemy, and optional, where incapacitation is not needed but doing so would give the player an additional reward for going the extra mile.

## Background

The impact of this game design choice on the UI is that each body part requires its own health bar to inform players how much damage still needs to be dealt. Considering players can engage multiple enemies at the same time, a scenario where 10+ health bars are simultaneously displayed was a real possibility, even if only on a small percentage of fights. So I was tasked with creating concepts for those enemies’ health bars, with a few goals in mind: 

* To find a solution as minimalistic as possible, despite the contradictory nature of this request;
* To highlight the uniqueness of this combat feature. 

## Process

Usually, the first step of the design process was to analyse similar solutions in other games (I'd often be given a few references in the briefing), and adapt them to our needs. However, the distinct nature of this feature meant there were no references to work with, and any solution would start from a blank canvas. Nier was a game our Lead Designer was really fond of, and it probably played a part in this feature being brought to Atlas Fallen, but their implementations were vastly different to be used as a reference. Nier’s solution relied on placing targets in one or two body parts after the player drained a certain amount of HP from the single enemy health bar. The size of those targets was also an issue, far too big to be placed in up to six different spots on a single enemy.

## Solution

That way, the bulk of the process involved creating mockups to experiment with the UI footprint of several health bars on screen, coupled with the remaining HUD elements. Several discussion rounds with game designers involved with the feature revealed new relevant points to consider. For example, besides the remaining HP, health bars should also inform the combat level of the enemy they are tied to, as well as indicate whether the foe’s level is above the player’s current power level, making it harder to defeat. After a couple of iterations, a solution was finally found, with the help of another existing piece of UI from the game.

Borrowing from the game's own bestiary menu, the second goal was accomplished by displaying on the top left corner segmented icons representing the multi-part enemies, the number of segments matching the number of body parts available for incapacitation at the beginning of the fight. And a compromise for the first goal was found by dynamically adjusting the opacity of a health bar, based on whether the player has in the last few seconds attacked that specific body part: those that were are fully opaque, those that weren't remain transparent, albeit still visible.

## Outcome

Those two proposals were met with enthusiasm by the developing team. But the real sign of success was that players who took part on a later test conducted by the company's QA reported no issues with the interface, while praising the gameplay.
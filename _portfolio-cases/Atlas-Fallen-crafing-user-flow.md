---
title: "Atlas Fallen: redesigning its Crafting user flow"
description: ""
order: 2
featured: false

image: /assets/images/case-studies/atlas-fallen-crafting-user-flow/hero.jpg
image-caption: ""

card-problem: ""
card-solution: ""
card-outcome: ""

summary-description: "AA Action RPG (PC, Console)"
summary-employer: "Deck 13 (Gaming)"
summary-role: "UX Designer"
summary-process: "Wireframing"
---

This redesign was done to address feedback brought by Deck 13's QA, after external tests conducted by them revealed an issue with Atlas Fallen's crafting user flow. Crafting is done in the game to create and upgrade combat-related items called essence stones, which in turn can be equipped to enhance player stats or enable special actions, allowing for combat style customization. Despite those two actions being deeply intertwined, crafting and managing essence stones were originally done in separate menus, forcing players to do a lot of back and forth in the UI. To address this issue, a partial redesign of the game menu was put in place to streamline the two tasks by placing them in a single location.

## Challenge

Among the challenges, the main one was striking a balance when combining two menus into one without making it too complex to navigate or understand. On top of that, there was a constraint on the number of available input options. The reason for that was the plans for console ports, meaning the UI had to be designed with Xbox and PlayStation controllers in mind, and some buttons were already reserved for other actions.

## Process

As it was often the case at Deck 13, the design approach heavily relied on performing a competitive analysis from related games to identify successful patterns that could be used on our solutions. From there I would design medium fidelity wireframes, validate them with stakeholders in the dev team, and then expand/fix issues or missing behaviors found after validation. 

## Results

The end result had the Weapons tab from the Game Menu restructured into three major sections:

* The upper third of the screen was occupied by the Momentum Bar, which originally took all of that tab's real estate. It features 11 slots, used to equip essence stones, though some of them are locked at the beginning. Equipped stones can be upgraded from there, sparing players from performing that task elsewhere.
* The bottom section features two tabs, one displaying all the stones in the player's possession, and the other listing the stone recipes that can be crafted, provided they have the required materials. Both heavily lean on icons and component states to convey information. For instance, there are cues in place to quickly tell players which stones are ready to be upgraded and which ones are not. Additionally, essence stones are split into two major types (active, passive), five categories (attack, defense, healing, etc), and three upgrade tiers, so a sorting button was added at the bottom, providing multiple criteria to help players visualize and quickly access their contents.
* Finally, on the right side of the screen, a sidebar was included to contextually provide detailed information and list action options when navigating the other two sections.

## Outcome

Users who took part on QA tests after the implementation of the redesigned menu had high praise for it, highlighting it managed to address the core issue of convoluted navigation.

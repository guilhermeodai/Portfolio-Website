---
title: "Coreborn - Design System"
description: ""
order: 2
featured: false

image: /assets/images/portfolio/pd_coreborn-design-system/hero.webp
image-caption: ""
summary-description: ""
summary-company: "Blankhans GmbH (Gaming)"
summary-role: "UI Design, UX Design"
summary-tools: "Figma"
---

Coreborn's development was still in its early stages when I joined Blankhans, and most of its features and systems were just starting to take shape, including the UI. Experimenting with visual styles and interaction patterns was still the norm back then, so it didn't make much sense to document those first iterations into a design system at that point. However, as months passed by, a number of factors played a role in making it a necessity: the game's scale and complexity only increased, the visual style found its identity, and concerns about UI consistency showed up as designs stopped existing only inside Figma prototypes and made the jump into the game itself.

Being the team's lone UI/UX designer meant that keeping the UI consistent was a relatively easy proposition on the design side, but issues would often appear after handing off wireframes and prototypes to the Engineering team for implementation. Previously, the handoff process involved a briefing session with an engineer to give them an overview of the piece of UI to be added to the game, together with a ticket listing the core features of said user interface and links to related design files. However, this process proved to be lacking, particularly in terms of providing visual design guidelines, often leading to layouts and/or components not visually matching design files on development builds (different dimensions, colors, fonts). Sometimes, more serious problems would arise when implementing complex user flows, such as UI interactions missing from the game, either partially or completely. These issues highlighted there was a clear need for better communication of design specs and goals across departments, leading to the creation of Coreborn's Design System. Like a game design document, it was supposed to be a live document, flexible enough to evolve when needed, and was created with a number of goals in mind:

* Improve the quality and fidelity of UI implementation, hopefully reducing the need for revisions to fix mistakes or include missing features;
* Reduce design time by establishing reusable design principles and guidelines, making it easier for myself and eventually other team members to expand the component library as new features are brought to the game;
* Decentralize knowledge, allowing team members not to depend solely on one person to figure out how to design or implement the UI, while also eliminating a potential bottleneck in the event of an absence or exit from the studio.

Visual language principles and guidelines made the foundation of the design system. Colors were grouped into palettes: main, secondary and accent colors, used throughout the game, followed by specialized palettes, like one indicating inventory item quality. Additionally, each entry included a use case description and RGB values both for the design tool (Figma) and the game engine (Unreal Engine). Text was categorized into various headings and body sizes, with each entry detailing the font, dimensions in both tools, plus use case descriptions. Lastly, the iconography section detailed screen and file dimensions for frequently used images and icons.

Organizing a library of reusable components was the next step, putting together the latest iterations of buttons, sliders, tooltips, etc. They were then organized by menu or the UI section they belong to (inventory, crafting, HUD), and annotated with detailed behavior documentation, such as hover states, animations, and sound cues, to ensure engineers understand the intent. Having all components unified under a library also had the benefit of addressing an issue of dealing with multiple component variations and design files, which sometimes made it hard to track the most recent revisions.

Finally, the guidelines and component library were shared on the same wiki platform used internally for game documentation, making it easily accessible to every team member. After its release, the design system made its impact felt considerably on the reduced number of tickets created for UI fixes and adjustments in the following months. As a consequence of the previous point, fewer meetings between the Design and Engineering departments were required to revise and correct Coreborn's UI issues.


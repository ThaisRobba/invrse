---
layout: post
title: 10 questions to choose the right framework
date: 2014-10-03 10:00
permalink: how-to-choose-a-game-framework
categories: 
    - game framework
comments: true
---

Choosing the *best* game framework for a task can be specially hard given that there are so many options out there and so many variables must be taken into account before any final decision is made.

With that in mind, I designed a quick questionnaire that deals with both the personal preferences of the developer as well as that of the public - these are the questions that should help you choose as rationally as possible, always weighing *need* vs *want*.

![Working towards a single platform]({{site.baseurl}}/assets/choosing_a_framework.png)

###1. Who is your target audience?

This is the single most important question. Before you even sketch anything, define your public.

- Do they have a lot of free time?
- Do they favor singleplayer or multiplayer?
- Where do they usually game?
- How much do they usually spend in a game?
- What are the other games they buy/consume like?

There are, of course, plenty of other questions pertinent to defining the target audience - be sure to always do your research.

###2. What platforms do you need to reach?

Based on the gaming patterns of your public, you can decide which platforms you *must* serve and which platforms would be nice to have but not needed.

Be sure that the tool you are choosing can already do this *now* - don't trust the future plans of the framework developers because they might just as easily change or never come to fruition.

###3. What features do you need?

Try to list what is essential and, in a different list, what would be nice to have. Keep those lists simple and be honest - sure, having ambient occlusion is cool but does your game *really* need it?

Focus on what is already available instead of what might come down the road - you are developing now, not tomorrow.

![Platformer features]({{site.baseurl}}/assets/choosing_a_framework2.png)

###4. Is it open source?

This is more important than many will give it credit for. Imagine that you coded your entire game and the company behind the tool goes bankrupt or <a href="https://www.techdirt.com/articles/20121127/14455221158/game-maker-studio-drm-misfires-permanently-replaces-created-game-resources-with-pirate-symbols.shtml" target="_blank">enforces a buggy DRM that erases all your hardwork</a> or, heck, they <a href="http://www.pixelenvision.com/2202/we-have-stopped-developing-with-the-corona-sdk/" target="_blank">take a while to fix bugs or just remove features that you actually need</a>.

If you have the source, you have the power to either adapt it yourself or hire someone capable of doing so. Many are willing to go with closed source solutions and that is ok - just be aware of the impact that this choice has.

###5. Does it have a healthy community?

A thriving community is a boon for everyone that partakes in using that piece of software. It means that:

- Questions are likely to be answered quickly
- There will be more plugins and scripts available
- Assembling a team of knowledgeable people will be easier
- Documentation and training material are likely to be plentiful

These are all very important points by themselves and should all factor into your decision.

Be aware that a healthy community is not the same as a big community - activity and contribution is more important than sheer size.

###6. Does it have good documentation?

This is probably the second most important question. Without proper documentation, you are going to spend countless hours trying to solve trivial problems.

As if the frustration wasn't enough, not knowing how a tool works also makes it easy to fall into the trap of reinventing the wheel.

"-I created a function that checks if the character is touching the ground!"

"-Dude, the engine already does that."

"-Oh."

![Sample code]({{site.baseurl}}/assets/choosing_a_framework4.png)

###7. Does it have good training material?

Books, courses, videos, tutorials - anything goes. The more material that there is available, the more likely you are to understand and get up to speed quickly.

Good documentation does alleviate the need for extensive training material but *never* assume that you have nothing left to learn.

###8. Is your team willing to learn and/or is capable of using it?

There is little point in grabbing a C++ framework when nobody in the team knows how to code in that language (nor is willing to learn).

Focus on what is possible *right now* and always try to learn and improve but don't shoehorn yourself into a situation in which you can't grow.

Basically, don't be afraid of learning new things.

###9. Are there samples you can study?

Ideally, you would want to try and do something stupidly simple like a pong game or rendering many polygons to screen, just to get a feeling for the software.

Since there are many frameworks and time is scarce, a good option is looking at what other people are doing with the tool. Look at their code, how they implement things, it will give you an overview of how the engine/language is like to work with.

![Sample code]({{site.baseurl}}/assets/choosing_a_framework3.png)

###10. Do you feel happy using it?

This is the most subjective question but it is, nonetheless, very important.

Avoid software with clunky UIs and languages with ugly syntax and an overcomplicated mindset - your tools should be as low friction as possible.

###All done!

If you manage to answer all these questions, you are likely to quickly narrow down what fits your needs - it is quite a bit of work but it saves you time down the road and saves you from all kinds of headaches.

What framework are you using? What made you choose it?


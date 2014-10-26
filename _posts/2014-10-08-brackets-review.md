---
layout:     post
title:      Brackets review - coding the web
date:       2014-10-08 12:00:00
permalink:  brackets-editor-review
categories: 
    - review
    - text editor
comments:   true
---

<a href="http://brackets.io" target="_blank">Brackets</a> is a powerful, free and open-source text editor, aimed at web and front-end developers, created by <a href="http://www.adobe.com" target="_blank">Adobe</a> for "coding the web". It is extensible with a nice repository of plugins and has a powerful Javascript hinting engine - but how well does it really fare for game development?

![a first look at brackets]({{site.baseurl}}/assets/brackets/first_impression.png)

###First impressions

Brackets is sleek. It has a nice interface design, with nice contrast and is one the few tools with a default syntax theme that actually looks good. Font rendering under Linux is a bit weird as Brackets is just doing its own thing - it seems to ignore system settings for hinting and subpixel rendering.

The folder manager is brilliant - you can easily change between different projects/folders without opening new instances of Brackets. Personally I like that but I understand that, for some, this would not be ideal.

The file tree is clear and concise and works akin to Sublime Texts. Files are only added to your "Working Files" queue when modified - simply opening a file merely views it, which is great and avoids crowding.

Using Brackets feels intuitive and pleasant.


###You never have to leave

![quick editing in Brackets]({{site.baseurl}}/assets/brackets/edit.gif)

For web developers, one of the biggest arguments in favor of Brackets is the Quick Edit feature. In essence, it allows you to highlight a piece of code in html and edit the corresponding css inline. It can be further modified through plugins, making it capable of working with things like css gradients.

While decidely powerful, its power doesn't translate as well for Javascript game developers. It is hardly used for anything other than changing colors - which is really nice but not groundbreaking.

![changing colors in Brackets]({{site.baseurl}}/assets/brackets/colors.gif)

I am curious to see in which direction they go with this - it definitely has potential.

###Hinting? Yes please!

Brackets shines when working with Javascript due to its smart hinting - not only does if offer the most sane option for completion but when calling a function, it tells you what arguments can be passed. It might seem a small thing but this detail saves us a trip to memory lane and time wasted looking at documentation or trying to find the right function in the source code.

![js hinting under Brackets]({{site.baseurl}}/assets/brackets/js_hint.gif)

There are a few limitations to this smart hinting, however. It sometimes offers options that are completely nonsensical (like jQuery autocomplete when I was making a game in Phaser) and it does suffer with larger files - the standard phaser.js, which weighs in at 2mb or so, can't be used for completion by Brackets. Big bummer but something that they can eventually overcome.

###Live Preview

One of the nicest features for HTML5 developers is the live preview. Clicking the lighting icon on the top right launches an instance of Chrome or Chromium and any and all changes you make are reloaded live. 

![live preview under Brackets]({{site.baseurl}}/assets/brackets/preview.gif)


This means that testing things like gravity in a plataformer or shadows with raycasting is really quick and easy.

It also means that the user doesn't have to start a server before testing a HTML5 game.

The downside is that ppening the developer console stops the live preview process, so it is not perfect yet.

###A little bracket goes a long way

Brackets, while a nice piece of engineering, is not as full-featured as I would like for development. Never fear! The extension manager is here!

![Extension manager]({{site.baseurl}}/assets/brackets/extension_manager.png)

It provides a direct channel for the community developed extensions, allowing you great freedom in how the editor will function. There are all kinds of useful packages:

- Git integration
- Code outline (à lá Exuberant CTags)
- Snippets (plugin is a bit non-intuitive)
- Different themes

Among many others that greatly improve the user experience.

###Would I recommend it?

It is a solid editor and I can heartily recommend it! I would be remiss, however, if I didn't point out the obvious flaws it has.
They just implemented a splitview but I feel that the experience is lackluster. It also lacks a (good) snippets system.

That said, I wouldn't use anything else for front-end development and I can see it becoming popular with HTML5 game devs in the future.
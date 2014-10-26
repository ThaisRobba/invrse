---
layout:     post
title:      Brackets & Snippets
date:       2014-10-24 20:00:00
permalink:  brackets-snippets
categories: 
- resource
- text editor
comments:   true
---

One of the major features missing in <a href="http://brackets.io" target="_blank">Adobe's Brackets</a> is a snippet completion system. For many (myself included), they are a must have on any code editor - once you get used to them, it is hard to go back.

###Snip what?

Snippets are smaller pieces of text that expand into larger blocks on a keypress.

![Snippets completion example]({{site.baseurl}}/assets/brackets/what_is_a_snippet.gif)

They make tedious parts of certain languages and frameworks much more bearable - automation on a microscopic scale!

###1st Option

<a href="https://github.com/jrowny/brackets-snippets" target="_blank">Jrowny</a> made a nice snippets completion system for Brackets - it is not very conventional but allows for a few cool things, like an inline completion that matches Brackets' quick edit visuals.

![Brackets Snippets]({{site.baseurl}}/assets/brackets/brackets_snippets.gif)


<a href="https://github.com/zaggino/brackets-snippets" target="_blank">Zaggino updated it a bit</a> and I even contributed better JavaScript definitions to it but this extension has quite a few downsides:

- Can't use snippets on a non-empty line
- **Tab** key doesn't work properly
- Shortcut is awkward (**Ctrl+Alt+Space**)
- Hard to add new snippets
- Doesn't work well with multiple input
- Has issues with indentation
- It is no longer maintained

This led me to seek a different solution.

###2nd Option: Meet Emmet

Emmet is famous with front-end developers, it greatly simplifies creation of HTML by providing a lot of sane defaults. In essence, it is a snippets system on steroids (though they call it zen coding).

![emmet gone crazy]({{site.baseurl}}/assets/brackets/emmet_expand.gif)

Using Emmet for anything other than HTML/CSS, however, is not as common practice as one would think. It is possible and, in being so, I decided to give it a try with JavaScript. It is not perfect but it has some awesome features:

![emmet and javascript]({{site.baseurl}}/assets/brackets/js_snippets.gif)

- Uses **Tab** to expand snippets
- Accepts a text parameter wrapped by curly braces
- Easy to create new snippets
- Hashtag and dot can be used to pre-emptively fullfil snippets
- Can expand one snippet into multiple blocks

In order to install Emmet in Brackets, just search for it in the extension manager.
I highly recommend reading the <a href="http://docs.emmet.io/" target="_blank">documentation</a> on the official site to better understand what Emmet can really do.

###Free as in Freedom

I made my <a href="https://github.com/OttoRobba/javascript-emmet" target="_blank">configuration files available at GitHub</a> but you can also [download them here!](https://github.com/OttoRobba/javascript-emmet/archive/master.zip)

You can set the folder from which Emmet reads snippets by going to the menu entry Emmet > Preferences and typing the path to where you saved the snippets/config files.

I'm creating another set of snippets specifically for Phaser but that is nowhere near ready yet.

Let me know if this is helpful or if you have any suggestions, comments or ideas :)
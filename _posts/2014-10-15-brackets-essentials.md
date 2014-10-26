---
layout:     post
title:      8 essential extensions for Brackets
date:       2014-10-15 20:00:00
permalink:  brackets-essential-extensions
categories: 
    - text editor
comments:   true
---

Sorting through Brackets' extensions can be a bit of a pain - there are just so many and the native system for searching is very primitive. After viewing different plugins for hours, here is my list of essentials:

###1. Extension Rating
![Extension Rating]({{site.baseurl}}/assets/brackets/extension_rating.png)

This nifty package makes the process of discovering new extensions much better. It fetches and displays data like number of downloads, number of forks, assigns badges (top, trending, popular, etc...) and also gives a new selector that allows sorting the extensions by things like most downloaded, last updated and whatnot.

In the extension manager search for:

    Extensions-Rating

###2. Brackets Git
![Extension Rating]({{site.baseurl}}/assets/brackets/git.png)

This is probably the nicest experience I've had with git. It integrates perfectly into Brackets, is very powerful and stupidly easy to use. 

Seriously. It has sane defaults that are likely to be enough for 95% of people who use git. For those who need more advanced git commands, it allows opening a command line directly inside the project's directory. 

I would feel comfortable teaching a newbie to use git through this, can't recommend it enough.

In the extension manager search for:

    brackets-git martin
    
###3. Console Plus
![Extension Rating]({{site.baseurl}}/assets/brackets/console_plus.png)

This package is awesome because it fixes the only downside of using Bracket's Live preview with game development. Any JS errors you get from your game will be neatly displayed inside the editor, with nice information on the culprit. Cool!

In the extension manager search for:

    console-plus
    
###4. JSHint

Brackets comes with JSLint enabled by default - while it is a good linting system, I'm not fond of how restrictive it is.

Installing JSHint is easy and you can configure a .jshintrc file in the project root so that every file will be linted accordingly.

Bonus: sharing the .jshintrc file will mean that everybody is using the same rules.

My .jshintrc for working with Phaser is like this:

    {
        "undef": false,
        "unused": false
    }

In the extension manager search for:

    JSHint raymond

###5. Interactive Linter
![Extension Rating]({{site.baseurl}}/assets/brackets/linting.gif)

Ah yes, now we are talking. Why waste time opening a new panel if we can use inline indicators right?

In the extension manager search for:

    interactive-linter

###6. JSBeautifier
![Extension Rating]({{site.baseurl}}/assets/brackets/beautify.gif)

The easiest way to ensure a style - just tick the "Beautify on Save" box inside the "Edit" menu and you will never have to worry about it again.

In the extension manager search for:

    jsbeautifier

###7. Zen Pane
![Extension Rating]({{site.baseurl}}/assets/brackets/zenpane.gif)

Brackets just implemented a split view system - which is really useful but, as it is, it can be a bit confusing knowing which window is currently selected.

This package fixes that by reducing the opactiy for the non-selected window.

In the extension manager search for:

    zen-pane
    
###8. Code Folding
![Code folding]({{site.baseurl}}/assets/brackets/code_folding.png)

Brackets doesn't have code folding by default - they plan to implement it but this extension should scratch the itch while we paciently wait.

In the extension manager search for:

    code-folding
    
###What about you?

Are these helpful to your workflow? What else do you use?

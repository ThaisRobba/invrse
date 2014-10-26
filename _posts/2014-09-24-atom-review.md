---
layout:     post
title:      Atom review - Learn to love the bomb
date:       2014-09-24 20:00:00
permalink:  atom-editor-review
categories: 
    - review
    - text editor
comments:   true
---
[Atom](https://atom.io/) is a free and open-source text-editor made by [Github](https://github.com/). It is highly modular, hackable and flexible - so if it doesn't fit your workflow out of the box, odds are that you can solve that by installing a few packages and changing a few configurations.

![Basic Atom, after you start it]({{site.baseurl}}/assets/atom/basic.png)


##The first experience is sublime

At first glance, Atom is quite similar to [Sublime Text](http://www.sublimetext.com/).

It is not as fast as Sublime but it feels responsive, familiar even. The truth is that in many ways, it is.

The general aesthetics and the UI are quite similar. The default theme is dark and sober, with a splash of color, the filetree presents a clean interface with which to manage files and folders.

As far as keyboard shorcuts go, they are (mostly) the same - which is likely to be a blessing for anyone who is used to Sublimes way of doing things.

The crown jewel of Sublime Text is also here - the command runner. Invoked by the conventional **Ctrl+Shift+P** (Cmd+Shift+P on Mac), it allows you to easily access more arcane menu entries without needing to take your hands out of the keyboard.

##But Atom is much more

After the initial reaction, what remains is pure appreciation for the effort that was undertaken to make Atom as friendly as possible.

The settings panel, accessible from the command runner or the menus, provides users with a clean UI to configure, install, update, search and remove packages and themes.

These extra packages are highly useful and greatly extend Atom's usability. Among them you will find:

- Beautifiers
- Linters
- Spell Checkers
- Deep Git integration
- Compiling tools

Along many other functionalities - [everything you need]({{site.baseurl}}/atom-recommended-packages) to make Atom feel like *the* text editor.
![Atoms package manager]({{site.baseurl}}/assets/atom/package.png)


##Splitting the atom

The reason why Atom is so incredibly extensible is due to the architecture choices made by the folks at Github. It is coded in Coffeescript and runs on top of Atom-Shell - essentially a browser-view for native desktop applications.

You can freely open the developer tools - the same ones you have on Chrome/Chromium - and modify anything you see to your hearts content.

Don't like the scroll bar? Change it. Not happy with the cursor color? Change it. All of this accessible by pressing **Ctrl+Shift+I** (Cmd+Shift+I on Mac).

It might take a bit longer to perfect the tool for your liking but after you do so, anything else will feel wrong.

![Atom after I customized it to my liking]({{site.baseurl}}/assets/atom/custom.png)

##Collaborative & highly engaging

Perhaps the most beautiful thing about Atom is also the one that is most subtle. Github made the very smart choice of having packages be simple git repositories - this means that collaborating is extremely easy and has spurred great growth.

Heck, I've made [a little package](https://atom.io/packages/language-moonscript) myself - it just is that easy.

Never underestimate the importance of a thriving community - it is by itself a positive feature on any piece of software.

##Is it for you?
I've used it to write Lua, Moonscript, Javascript, HTML, CSS and Markdown - it has performed admirably in all cases.

I'm fully aware that it isn't the best tool for  every job - for instance, it doesn't handle (yet) files bigger than 2mb and there are faster, better integrated alternatives for certain languages and use cases.

With all of that in mind, there really is no harm in trying Atom out - it is free and open source and you just might love it.

If you have tried it, feel free to share your configuration and what [packages you deem essential]({{site.baseurl}}/atom-recommended-packages). :)

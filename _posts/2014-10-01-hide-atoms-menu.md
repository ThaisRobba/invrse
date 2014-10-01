---
layout: post
title: Hide Atoms menu under Linux
date: 2014-10-01 10:00
permalink: hide-atoms-menu
categories: text editor
comments: true
---

If you are anything like me than you enjoy using well designed, aesthetically pleasing tools. Then again, I get a fuzzy feeling when the software that I use matches my system and looks deeply integrated - I'm weird like that.

Atoms menus under Linux, however, are not pleasing and don't mesh well with Gnome, Cinnamon or the other non-Unity desktop environments.

![Awful menus must die]({{site.baseurl}}/assets/atom_with_menu.png)


###Rearranging the atoms

I seldom use menus. Not only do I find them ugly and out of place but I also prefer a keyboard driven workflow whenever possible. With Atoms command runner, I really never need to use a menu at all.


Github user '[devinceble](https://gist.github.com/devinceble/a0f3598cecf30cc6ab21)' found a nice, albeit hacky, way to hide the menus.

###Let's do the dirty work

Open up a terminal window (**Ctrl+Alt+T** in Ubuntu based distros) and paste the following:

    sudo gedit '/opt/atom/resources/app/src/browser/atom-application.js'

**Note:** Replace gedit with whatever editor you want to use

The exact line number varies from version to version of Atom so instead of giving you a file that is quickly going to be out of date, I'm gonna show you how to fish.

{% highlight javascript %}
//Adding double slashes before a line turns it into a comment
//Line numbers might change from version to version
//Find the lines below and comment them out!

//Line 7
ApplicationMenu = require('./application-menu');

//Line 62
AtomApplication.prototype.applicationMenu = null;

//Line 86
this.applicationMenu = new ApplicationMenu(this.version);

//Line 137
return (_ref = this.applicationMenu) != null ? _ref.enableWindowSpecificItems(false) : void 0;

//Line 145
_ref.enableWindowSpecificItems(true);
{% endhighlight %}

###This feels wrong

Ideally, it should be an option for Atom to hide or show the menu, just like pretty much everything else is already. Until someone commits the needed changes though, this is the only way to do it.

I find that the end result is worth the 2 minutes you spend modifying the source.

![Beauty incarnate]({{site.baseurl}}/assets/atom_without_menu.png)

Bear in mind that you will need to do this again when Atom gets updated.

---
layout: post
title: Hiding atoms menu under Linux
date: "2014-09-28 03:03"
---

If you are anything like me than you enjoy using well designed, aesthetically pleasing tools. Then again, I get a fuzzy feeling when my tools match my system and look deeply integrated - I'm weird like that.

###Rearranging the atoms

I seldom use menus. Not only do I find them ugly and out of place but I also prefer a keyboard driven workflow whenever possible. With Atoms command runner, I really never need to use a menu at all.

![Awful menus must die]({{site.baseurl}}/assets/atom_with_menu.png)

Github user '[devinceble](https://gist.github.com/devinceble/a0f3598cecf30cc6ab21)' found a nice, albeit hacky, way to hide the menus.

###Let's do the dirty work

Open up a terminal window (**Ctrl+Alt+T** in Ubuntu based distros) and paste the following:

    sudo gedit '/opt/atom/resources/app/src/browser/atom-application.js' 

**Note:** Replace gedit with whatever editor you want to use

The exact line number varies from version to version of Atom so I find the lines in the block below and comment them out:

{% highlightjavascript %}
//Find them and use two slashes before them, just like this line!

ApplicationMenu = require('./application-menu');

AtomApplication.prototype.applicationMenu = null;

this.applicationMenu = new ApplicationMenu(this.version);

return (_ref = this.applicationMenu) != null ? _ref.enableWindowSpecificItems(false) : void 0;

_ref.enableWindowSpecificItems(true);
{% endhighlight %}

###This feels wrong

Ideally, it should be an option for Atom to hide or show the menu, just like pretty much everything else is already. Until someone commits the needed changes though, this is the only way to do it.

You will need to do this again when Atom gets update.

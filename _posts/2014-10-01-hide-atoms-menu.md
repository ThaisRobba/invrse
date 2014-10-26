---
layout: post
title: Hide Atoms menu under Linux or Windows
date: 2014-10-01 10:00
permalink: hide-atoms-menu
categories: 
    - text editor
comments: true
---

If you are anything like me than you enjoy using well designed, aesthetically pleasing tools. Then again, I get a fuzzy feeling when the software that I use matches my system and looks deeply integrated - I'm weird like that.

Atoms menus under Linux, however, are not pleasing and don't mesh well with Gnome, Cinnamon or the other non-Unity desktop environments.

![Awful menus must die]({{site.baseurl}}/assets/atom/with_menu.png)


###Rearranging the atoms

I seldom use menus. Not only do I find them ugly and out of place but I also prefer a keyboard driven workflow whenever possible. With Atoms command runner, I really never need to use a menu at all.


Github user '[devinceble](https://gist.github.com/devinceble/a0f3598cecf30cc6ab21)' found a nice, albeit hacky, way to hide the menus.

There is, however, a better way to do it, as discussed in Atoms [issue #2914](https://github.com/atom/atom/issues/2914) by [user dajester2013](https://github.com/atom/atom/issues/2914#issuecomment-56667810).

###Let's do the dirty work

Open up a terminal window (**Ctrl+Alt+T** in Ubuntu based distros) and paste the following:

    sudo gedit '/opt/atom/resources/app/src/browser/atom-window.js'

**Note:** Replace gedit with whatever editor you want to use

**Note for Windows users:** Atom *should* be installed under C:\Programs or something like that and the internal folder structure should be the same.

Find the entry below:

{% highlight javascript %}
this.browserWindow = new BrowserWindow({
    show: false,
    title: 'Atom',
    icon: this.constructor.iconPath,
    'web-preferences': {
      'subpixel-font-scaling': false
    }
  });
{% endhighlight %}

And replace it with this:
{% highlight javascript %}
this.browserWindow = new BrowserWindow({
        show: false,
        title: 'Atom',
        'auto-hide-menu-bar': true,
        icon: this.constructor.iconPath,
        'web-preferences': {
          'subpixel-font-scaling': false
        }
      });
{% endhighlight %}

###This feels wrong

Ideally, it should be an option for Atom to hide or show the menu, just like pretty much everything else is already. Until someone commits the needed changes though, this is one of the ways to do it. On the plus side, you retain *some* menu functionality. Pressing **ALT** reveals Atoms menus - at least on Linux.

I find that the end result is worth the minute you spend modifying the source.

![Beauty incarnate]({{site.baseurl}}/assets/atom/without_menu.png)

Bear in mind that you will need to do this again when Atom gets updated.

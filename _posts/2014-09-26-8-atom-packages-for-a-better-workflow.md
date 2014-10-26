---
layout:     post
title:      8 helpful Atom packages
date:       2014-09-26 20:00:00
permalink:  atom-recommended-packages
categories: 
    - text editor
comments:   true
---

While [Atom is a great editor]({{site.baseurl}}/atom-editor-review/), the experience can be greatly improved by using a few of the many packages available - what follows is the list of the ones that I personally use and recommend.

**Note on package installation:**

There are two easy ways to install packages. One is by searching for the package within the Atoms settings panel. The other is by using apm, the command line tool for Atom. I'll be pasting the install code because it is honestly much faster this way.

###1. Autocomplete Plus
![Completion like a boss]({{site.baseurl}}/assets/atom/completion.png)
While Atom does include word completion by default, it is not as automatic or integrated as I'd like. This package takes care of it!
You get inline, automatic suggestions, including suggestions for snippets and file paths! Pretty great huh?

To install it, copy the code below and paste it in the command line:

    apm install autocomplete-plus autocomplete-paths autocomplete-snippets

The default keybinding (**Tab**) is not to my liking. I'd rather have it complete *only* when I press **Enter**. This is easily done by adding the following to Atoms keybinding file:

    '.autocomplete-plus input.hidden-input':
      'enter': 'autocomplete-plus:confirm'
      'tab': 'unset!'

###2. Git Plus
![Imma gonna git ya!]({{site.baseurl}}/assets/atom/git_plus.png)

One of the newest additions in my arsenal. Through a quick shortcut (**Ctrl+Shift+H**), you open a command runner exclusively for Git. Adding, commiting, logs, pushing... you can pretty much manage an entire repository without ever living your editor. Mighty handy!

To install it, copy the code below and paste it in the command line:

     apm install git-plus
     
###3. Git History
![Gonna git ya good!]({{site.baseurl}}/assets/atom/git_history.png)

Now that we have got Git better integrated, how about being able to use version control within Atom?

This package allows you revisit different versions of a file, commit by commit. Unlike a diff file, it will show you the entire file.
 
    apm install git-history
    
###4. Git Blame
![Git!]({{site.baseurl}}/assets/atom/git_blame.png)

Even more power! Now you can see who edited what of the current file at a glance. **Ctrl+B** toggles it. Incredibly useful when working with teams.

To install it, copy the code below and paste it in the command line:

    apm install git-blame

###5. Open Last Project
![Hello old friends]({{site.baseurl}}/assets/atom/open_last.png)

Perhaps one of the simplest and yet most helpful packages. It does what it says on the tin, loading your last opened folder and tabs when you start Atom - which, honestly, is far more useful than people give it credit for.

To install it, copy the code below and paste it in the command line:

    apm install atom-open-last-project

###6. Color Picker
![Picking colors is easy]({{site.baseurl}}/assets/atom/color_picker.png)

Another small addition that makes life a lot easier. When you need the hexcode for a color, just call the color picker with **Ctrl+Alt+C**.

To install it, copy the code below and paste it in the command line:

    apm install color-picker
    
###7. JSHint
![Sorry, commagain?]({{site.baseurl}}/assets/atom/jshint.png)

Adds dynamic linting for Javascript files based on JSHints rules. Helps avoid some silly mistakes that can be hard to debug. It also ensures a more uniform coding style, specially helpful when working in teams.

It is a bit lighter and more "in your face!" than other linting packages. Personally, these are features that I find important.

To install it, copy the code below and paste it in the command line:

    apm install atom-jshint

###8. JSFormat
![Bam!]({{site.baseurl}}/assets/atom/jsformat.gif)

This package allows you to beautify your javascript code, making team interactions easier. It can format on save and is far lighter and faster to load than the other beautifiers I've tested.

It is not yet perfect so be sure to [report bugs](https://github.com/jdc0589/jsformat-atom/issues) and write [pull requests](https://github.com/jdc0589/jsformat-atom/pulls) for it!

I cannot stress enough how important this package is for anyone working with Javascript. Stop fixing indentation by hand, just get it!

To install it, copy the code below and paste it in the command line:

    apm install jsformat-atom
    
##That is it folks!

For now, these are my recommendations. What about you? Do you have a favotire add-on that you just can't live without?
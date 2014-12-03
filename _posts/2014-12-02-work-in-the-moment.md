---
layout:     post
title:      Work in the moment
date:       2014-12-02 20:00:00
permalink:  in-the-moment
categories:
    - devlife
comments:   true
image: in_the_moment
---

We develop best practices that we follow religiously, we develop enormous lists that never end. In our overzealousness we are often doing ourselves a disservice. I'm here to help you to let go a bit.

![timing is everything]({{site.baseurl}}/assets/in_the_moment.png)

###Develop only as you need it

On my first run at a component based engine, I created a bunch of functions for checking all kinds of things. This greatly increased complexity without offering a true payoff - I had not needed any of these functions yet but there they were, clogging up my code, obscuring my intent. All because I thought that, you know, "I might need them someday!".

###Solve easier problems first

You could spend countless hours optimizing your code to reach better load times - or you could simply compress your game assets with one of the many available tools for it. In [Lava-Run]({{site.baseurl}}/games/lava-run) I reduced the size of the game by two thirds just by minifying the JavaScript and compressing the png images.

###Know the rules - break 'em consciously

One of the cardnial rules of functional programming and clean code is that a function should do one thing only. This means that bigger functions should be broken into smaller ones.

It is a great practice but when you only use something once it can be detrimental to decouple it, obscuring intent and reducing performance. Make a judgment call.

{%highlight javascript%}
var guests = {
  confirmed: [],
  declined: [],
  total: []
};

//This function does two things and that is ok
function logGuest(name, isAttending) {
  if (isAttending){
    guests.confirmed.push(name);
  } else {
    guests.declined.push(name);
  }
  
  guests.total.push(name);
}
{%endhighlight%}


###When in doubt, simple is best

One could argue that I might want to create an object for each guest so that further information could be stored. Are they bringing food? A beverage? A gift? A karaoke machine?

Sure, do that - if you need that information. In here we didn't and so the focus was on clarity. As a bonus, we are merely dealing with arrays so performance is pretty awesome as well.

###Adapt to change, let tomorrow be tomorrow

As indies we don't have expert managers controlling production and it is very easy to misjudge how long something will take. It is not only a matter of time but also of ramifications - maybe the new particle system broke stuff that it shouldn't and now you have to spend time debugging it.

Think of tasks lists as a means to stay on target and keep them very short. They should never hold everything you have to do. The smaller the range of time that they cover, the easier they are to complete. If your lists are big you suddenly will notice how tasks start to fight with each other and it gets really hard to evaluate what to do next.

Keep it simple, focus on daily lists and your progress will become clear.

###Make it your own

This is all nice and all but you should always focus on taking only that which works for you and leaving the rest. There is no universal workflow so your best bet is finding your own.

Let me know if you have any tips and insights on the comments below!
---
layout:     post
title:      Phaser Review - HTML5 Game Framework
date:       2014-10-10 12:00:00
permalink:  phaser-review
categories: 
    - review
    - game framework
comments:   true
---

Let's be honest: game design is fun but it is also very hard and a lot of work.

I'm always in favor of tools that make development easier and faster without compromising quality - <a href="http://phaser.io" target="_blank">Phaser</a> is one such tool.

It is an HTML5 game framework developed in Javascript, built by <a href="http://www.photonstorm.com/" target="_blank">people smarter than me</a> (and who have been at this for much longer than me).

![Phaser logo]({{site.baseurl}}/assets/phaser_logo.jpg)

###Cross Platform & Performant

One of the coolest things about HTML5 game frameworks is, obviously, that they run on browsers. Phaser does a fantastic job of supporting all major vendors and of running flawlessly even on mobile browsers (which are a special kind of pain).

This performance is achieved due to continuous benchmarking of the framework along with it being built on top of PixiJS - bar none the best 2D webGL renderer available. Basically, it is really fast.

Using the PixiJS's benchmark tool, <a href="http://www.goodboydigital.com/pixijs/bunnymark/" target="_blank">BunnyMark</a>, I get about 100,000 bunnies running smoothly at 30fps (Firefox, Ubuntu, using a GTX650 Ti). I don't even know what to do with this many bunnies.

![bunnies everywhere]({{site.baseurl}}/assets/phaser_bunnymark.png)

Even on mobiles the performance is pretty good. My Galaxy S2 handles 512 bunnies at 30fps on Google's Chrome browser - and that is using the canvas fallback (which is noticeably slower).

###Cool features

Besides being a speed demon, Phaser has plenty of useful features, below are a few that merit extra attention:

- #####Flexible

    It is "just Javascript" and it is open source.

    The source code is easy to read and <a href="https://github.com/photonstorm/phaser
" target="_blank">is available on GitHub</a> - pull requests are, of course, welcome.

    You can also extend Phaser with plugins.

- #####Tilemap (and Tiled) support

    <a href="http://www.mapeditor.org/" target="_blank">Tiled</a> is an amazing 2D, open source mapping tool. Integration with Phaser is dead easy.

    ![tiled integration]({{site.baseurl}}/assets/phaser_tiled.gif)

    I used it with my team on the last jam I went to and they quickly adapted to it - instead of manually coding the levels I was free to work on different areas of the game.

- #####Physics

    Phaser comes with 3 different choices for physics systems, from the more basic, lightweight 'Arcade' to the full-featured and advanced 'P2'.

    The functions that can be used with the physics libraries are extremely useful and greatly simplify the work needed for all kinds of games.

    For example, 'Arcade' has a function that checks if a sprite is touching the ground, making it simple to avoid infinite jumping in the air on platform games.

- #####Camera, Sprites, Animation & Particles

    Not only are this systems quite powerful but they save a lot of time that would be otherwise spent reinventing the wheel.

    Phaser takes full advantage of Javascripts prototypical object-oriented nature. Sprites, for example, are spawned with a host of properties that make it easy to interact with them.

    {% highlight javascript %}
//silly example using only built-in properties and methods

if (sprite.alive && sprite.overlap(spikes)) {
    sprite.damage(1);
}
    {% endhighlight %}


###Documentation

I'm not a Javascript expert - at best, I'm competent with it. I do feel a bit like Alice going down the rabbit hole when I need to read <a href="http://docs.phaser.io" target="_blank">Phaser's documentation</a>.

"Ok, Game is the parent object, add is a property of it that references GameObjectFactory. The latter has a method called image, so if I need to add one, I need to input..."

        game.add.image(x, y, key, frame, group);

This feels, to me, counterintuitive. My first instinct would be going to the Image class in the documentation but that wouldn't really help.

Once I "got it", however, I begun to understand all the praise that it gets.

###Community

Active and in growth, Phaser's community is a good sign of how healthy the framework is and how far it can go.

The <a href="http://www.html5gamedevs.com/forum/14-phaser/" target="_blank">forums</a> are bustling with activity, with members contributing really cool tools and plugins.

Richard, the creator of Phaser, often replies on the forums so that is a big plus as well.

![community]({{site.baseurl}}/assets/phaser_community.png)

###Extra resources

Phaser has an awesome directory of <a href="http://examples.phaser.io" target="_blank">examples</a> - you can probably make most games simply by browsing and learning from the code that you see here.

There is also a forum topic for <a href="http://www.html5gamedevs.com/topic/4320-list-of-phaser-tutorials/page-1" target="_blank">Phaser tutorials</a> and a <a href="https://github.com/photonstorm/phaser/wiki" target="_blank">wiki section on Github</a> - all very useful!

###Final take

Phaser is a framework with a great focus on speed - both performance and development-wise. I feel productive and I feel I'm improving faster than I expected.

With widespread adoption and really nice support, it is likely it will last for *many* years to come, I'm at ease that it won't stop working or disappear overnight.

All in all, I highly recommend it!


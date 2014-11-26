---
layout:     post
title:      Introduction to sprite sheets
date:       2014-11-26 20:00:00
permalink:  intro-to-sprite-sheets
categories:
- tutorial
- art
comments:   true
image: spritesheets
---
Adding a single image into a game is generally easy - the frameworks and engines provide simple solutions and we already know the concept of an image file.

One thing I realized in game jams though is that very few people knew how to proceed when developing complex animations - do we create multiple image files? Do we make a gif? What do we do?

###Overlapping images

The most basic technique for animation comes from quickly overlapping one image with another - our brain blends the images together and we get the illusion of motion.

The most classical example I can think of is a Zoestrope - a device that rotates a strip of drawings fast enough to fool our brains.

<iframe width="100%" height="320" src="//www.youtube.com/embed/5_8fX-N3Ji4" frameborder="0" allowfullscreen mute="true"></iframe>

###Moving sprites

For this explanation I'm gonna use a character I made named Blue (so creative!).

![Animated Blue]({{site.baseurl}}/assets/Blue.gif)

Each frame of the animation is drawn separately and then bundled into a single grid. Each cell of the grid has the same width and height, which allows us to tell our sofware the X and Y coordinates of each frame of the drawing.

![Blue sprite sheet]({{site.baseurl}}/assets/blue_grid.png)

X increases as it goes to the right, Y increases as it goes down. In the spritesheet above:

- Frame 1 starts at (0,0) and goes to (256,256)
- Frame 2 starts at (256,0) and goes to (512,256)
- Frame 3 starts at (512,0) and goes to (768, 256)

###Tips for creating your own sprite sheet

The grids can be as tall and as large as needed but be mindful of memory limitations. It is always a good idea to have sprite sheets being a power of 2 as to avoid bugs with certain GPUs.

You don't need to know the coordinates as most frameworks will do that for you - you just need to know the width and height.

As far as tools go, there are quite a few ways to create sprite sheets. There are scripts for <a href="http://alessandroituarte.com/blag/2012/07/03/470" target="_blank">Photoshop</a> and <a href="http://registry.gimp.org/node/27943" target="_blank">Gimp</a>. There are tools that natively export sprite sheets, like the very awesome <a href="http://www.piskelapp.com/" target="_blank">Piskel</a> or you can simply roll out your own solution.

The basic principle is always the same: draw the individual frames and then put them in a grid.

###Closing note

It is completely possible to have a non uniform grid of pictures - automation gets a little bit complicated because now you need to export the individual coordinates of each frame instead of simply referencing a width and a height. I'll leave that for a future tutorial.

I hope this is helpful, let me know in the comments what you think and be sure to share it if you like it!

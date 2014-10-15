---
layout:     post
title:      Phaser Cheatsheet
date:       2014-10-16 20:00:00
permalink:  phaser-cheatsheet
categories: game framework, resource
comments:   true
---

Phaser is pretty easy to use - but I suppose it does get even easier when you have a cheatsheet.

###Starting a new game

{% highlight javascript %}
var game = new Phaser.Game(width, height, renderer, "parent", state, transparent, antialias, physicsConfig);
//renderer -> Phaser.AUTO or Phaser.WEBGL or Phaser.CANVAS or Phaser.HEADLESS
//parent -> div id of where the game will go
//http://docs.phaser.io/Phaser.Game.html#Game
{% endhighlight %}

###Creating & managing states

{% highlight javascript %}
playState = {
  init: function() {
  //Called as soon as we enter this state
  },
  preload: function() {
  //assets to be loaded before create() is called
  },
  create: function() {
  //Adding sprites, sounds, etc...
  },
  update: function() {
  //Game logic, collision, movement, etc...
  },
}
//http://docs.phaser.io/Phaser.State.html

game.state.add('play', playState);
game.state.start('play');
//http://docs.phaser.io/Phaser.StateManager.html
{% endhighlight%}

###Adjusting the game to any screen size

{% highlight javascript %}
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
this.scale.setScreenSize(true);
//http://docs.phaser.io/Phaser.ScaleManager.html
{% endhighlight %}

###Loading & displaying images

{% highlight javascript %}
function preload() {
  game.load.image('key', 'path/to/file.png');
  //http://docs.phaser.io/Phaser.Loader.html
}

function create() {
  game.add.image(width, height, 'key');
  //http://docs.phaser.io/Phaser.GameObjectFactory.html
}
{% endhighlight %}

###Loading & playing music

{% highlight javascript %}
function preload() { 
  game.load.audio('key', ['path/to/file.mp3', 'path/to/file.ogg']);
  //http://docs.phaser.io/Phaser.Loader.html
}

function create() {
  var music = game.add.music('key');
  music.play();
  music.loop = true;
  music.stop();
  //http://docs.phaser.io/Phaser.Sound.html
}
{% endhighlight %}

###Loading & displaying sprites

{% highlight javascript %}
function preload() {
  //Non-animated sprites can be made using an image
  game.load.image('key', 'path/to/file');
  //Animated sprites need a spritesheet or an atlas
  game.load.spritesheet('key', 'path/to/file', frameWidth, frameHeight, frameMax, margin, spacing);
  //http://docs.phaser.io/Phaser.Loader.html
}

function create() {
  var sprite = game.add.sprite(x, y, 'key', frame, group);
}
{% endhighlight %}

###Adding & playing animations

{% highlight javascript %}
sprite.animations.add('name', [frames], frameRate, loop, useNumericIndex);
sprite.animations.play('name', frameRate, loop, killOnComplete);
//http://docs.phaser.io/Phaser.AnimationManager.html
{% endhighlight %}

###Adding physics to Sprites


###Creating timers

###Handling input
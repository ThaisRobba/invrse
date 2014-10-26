---
layout:     post
title:      Phaser Cheatsheet
date:       2014-10-17 20:00:00
permalink:  phaser-cheatsheet
categories:
    - game framework
    - resource
comments:   true
---

<a href="http://phaser.io" target="_blank">Phaser</a> - the HTML5 game framework that [I've reviewed](http://invrse.co/phaser-review) - is pretty easy to use. It gets even easier with a cheatsheet though.

I'm linking each cheat directly to the documentation so you can see the related methods and the source if you need to.

###Starting a new game

<small>Reference: <a href="http://docs.phaser.io/Phaser.Game.html#Game" target="_blank">http://docs.phaser.io/Phaser.Game.html#Game</a></small>

{% highlight javascript %}
var game = new Phaser.Game(width, height, renderer, "parent");
//All parameters are optional but you usually want to set width and height
//Remember that the game object inherits many properties and methods!
{% endhighlight %}

###Creating a game state object

<small>Reference: <a href="http://docs.phaser.io/Phaser.State.html" target="_blank">http://docs.phaser.io/Phaser.State.html</a></small>

{% highlight javascript %}
playState = {
    init: function() {
    //Called as soon as we enter this state
    },

    preload: function() {
    //Assets to be loaded before create() is called
    },

    create: function() {
    //Adding sprites, sounds, etc...
    },

    update: function() {
    //Game logic, collision, movement, etc...
    }
};
{% endhighlight%}

###Managing game states
<small>Reference: <a href="http://docs.phaser.io/Phaser.StateManager.html" target="_blank">http://docs.phaser.io/Phaser.StateManager.html</a></small>

{% highlight javascript %}
game.state.add('play', playState);
game.state.start('play');

//It also has functions useful for debugging and whatnot
console.log("Currently at the "+ game.state.getCurrentState() +" game state!");
{% endhighlight%}

###Adjusting the game to any screen size

<small>Reference: <a href="http://docs.phaser.io/Phaser.ScaleManager.html" target="_blank">http://docs.phaser.io/Phaser.ScaleManager.html</a></small>


{% highlight javascript %}
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
this.scale.setScreenSize(true);
{% endhighlight %}

###Working with globals

<small>Reference: <a href="http://www.html5gamedevs.com/topic/4247-where-to-put-global-var-in-the-basic-template/" target="_blank">http://www.html5gamedevs.com/topic/4247-where-to-put-global-var-in-the-basic-template/</a></small>

{% highlight javascript %}
//Declare it outside of any functions
//This way they persist through state changes
game.global = {
    mute: false,
    score: 0,
    bestScore: 100
};

//Then we can change them anywhere
game.global.mute = true;
game.global.bestScore = game.global.score;
{% endhighlight %}

###Using local storage

<small>Reference: <a href="http://www.w3schools.com/html/html5_webstorage.asp" target="_blank">http://www.w3schools.com/html/html5_webstorage.asp</a></small>

{% highlight javascript %}
//It can only store strings
localStorage.setItem('itemKey', 'myContent');

//You can store entire objects by doing this:
localStorage.setItem('myObject', JSON.stringify(myObject));

//Then you just get the string you stored!
localStorage.getItem('itemKey');
{% endhighlight %}

###Loading an image/music/asset

<small>Reference: <a href="http://docs.phaser.io/Phaser.Loader.html" target="_blank">http://docs.phaser.io/Phaser.Loader.html</a></small>

{% highlight javascript %}
function preload() {
    game.load.image('key', 'path/to/file.png');
    game.load.audio('key', ['path/to/file.mp3', 'path/to/file.ogg']);
    game.load.spritesheet('key', 'path/to/file', frameWidth, frameHeight);
}
{% endhighlight %}

###Setting a background color

<small>Reference: <a href="http://docs.phaser.io/Phaser.Stage.html" target="_blank">http://docs.phaser.io/Phaser.Stage.html</a></small>

{% highlight javascript %}
//Setting it to a nice, greyish blue
game.stage.backgroundColor = '#6d94b5';
{% endhighlight %}


###Generating random numbers

<small>Reference: <a href="http://docs.phaser.io/Phaser.RandomDataGenerator.html" target="_blank">http://docs.phaser.io/Phaser.RandomDataGenerator.html</a></small>

{% highlight javascript %}
var num = game.rnd.integerInRange(120, 480);
var intNum = game.rnd.integer();
var fracNum = game.rnd.frac();
{% endhighlight %}

###Adding game objects

<small>Reference: <a href="http://docs.phaser.io/Phaser.GameObjectFactory.html" target="_blank">http://docs.phaser.io/Phaser.GameObjectFactory.html</a></small>

{% highlight javascript %}
function create() {
    //image, sprite, audio and others are all methods of the factory
    game.add.image(x, y, 'key');
    var player = game.add.sprite(x, y, 'key', frame, group);
}
{% endhighlight %}

###Repositioning an objects anchor

<small>Reference: <a href="https://github.com/photonstorm/phaser/wiki/Graphics" target="_blank">https://github.com/photonstorm/phaser/wiki/Graphics</a></small>

{% highlight javascript %}
//Objects have an anchor property that goes from 0 (top left) to 1 (bottom right)
//It defaults to 0,0 but it can be changed easily
image.anchor.x = 0.2;
image.anchor.y = 1;

//This sets it in the middle
image.anchor.setTo(0.5,0.5);
{% endhighlight %}

###Scaling an object

<small>Reference: <a href="https://github.com/photonstorm/phaser/wiki/Graphics" target="_blank">https://github.com/photonstorm/phaser/wiki/Graphics</a></small>

{% highlight javascript %}
//Objects have a scale property that defaults to 1
//Negative values essentially mirror it on the affected axis
image.scale.x = -1;

//This doubles the size of the object
image.scale.setTo(2,2);
{% endhighlight %}

###Displaying an image

<small>Reference: <a href="http://docs.phaser.io/Phaser.Image.html" target="_blank">http://docs.phaser.io/Phaser.Image.html</a></small>

{% highlight javascript %}
function create() {
    game.add.image(x, y, 'key');
}
{% endhighlight %}

###Working with sprites

<small>Reference: <a href="http://docs.phaser.io/Phaser.Sprite.html" target="_blank">http://docs.phaser.io/Phaser.Sprite.html</a></small>

{% highlight javascript %}
function create() {
    //Assign it to a variable so we can reference it
    var sprite = game.add.sprite(x, y, 'key');

    //Now we can access its properties and methods
    sprite.x = 200;
    sprite.y = 300;
}
{% endhighlight %}

###Adding & playing animations

<small>Reference: <a href="http://docs.phaser.io/Phaser.AnimationManager.html" target="_blank">http://docs.phaser.io/Phaser.AnimationManager.html</a></small>

{% highlight javascript %}
function create() {
    sprite.animations.add('name', [frames], frameRate, loop);
    sprite.animations.play('name', frameRate, loop, killOnComplete);
}
{% endhighlight %}

###Working with animations

<small>Reference: <a href="http://docs.phaser.io/Phaser.Animation.html" target="_blank">http://docs.phaser.io/Phaser.Animation.html</a></small>

{% highlight javascript %}
function create() {
    //Assign it so we can reference it later
    var run = sprite.animations.add('name', [frames], frameRate, loop);

    //Second parameter is the context, usually 'this'
    run.onStart.add(listener, this);
}

function listener() {
    console.log("You just started running!");
}
{% endhighlight %}


###Displaying text

<small>Reference: <a href="http://docs.phaser.io/Phaser.Text.html" target="_blank">http://docs.phaser.io/Phaser.Text.html</a></small>

{% highlight javascript %}
function create() {
    //Assigned for later use
    var label = game.add.text(x, y, "text", {style}, group);
    label.text = "I'm changing the text inside the label var!";
}
{% endhighlight %}

###Tweening

<small>Reference: <a href="http://docs.phaser.io/Phaser.Tween.html" target="_blank">http://docs.phaser.io/Phaser.Tween.html</a></small>

{% highlight javascript %}
//Adding an example sprite but you can tween pretty much anything
var player = game.add.sprite(100, 100, 'player');

game.add.tween(player)
    .to({x:500}, 400) //change player.x to 500 over 400ms
    .start();
{% endhighlight %}


###Playing music

<small>Reference: <a href="http://docs.phaser.io/Phaser.Sound.html" target="_blank">http://docs.phaser.io/Phaser.Sound.html</a></small>

{% highlight javascript %}
function create() {
    //Assign it so we can reference it 
    var music = game.add.audio('key', volume, loop);
    music.loop = true;
    music.play();
}
{% endhighlight %}


###Working with timers

<small>Reference: <a href="http://docs.phaser.io/Phaser.Timer.html" target="_blank">http://docs.phaser.io/Phaser.Timer.html</a></small>

{% highlight javascript %}
//Three types of timers: looping, one time event, repeat.
var looping = game.time.events.loop(delay, callback, context);
var once = game.time.events.add(delay, callback, context);
var repeat = game.time.events.repeat(delay, repeatCount, callback, context);
//You can also pass one last argument with the callback arguments

game.time.events.pause(loopingTimer);
game.time.events.remove(once);
{% endhighlight %}

###Input

<small>Reference: <a href="http://docs.phaser.io/Phaser.Input.html" target="_blank">http://docs.phaser.io/Phaser.Input.html</a></small>

{% highlight javascript %}
//Input can come from mouse, touch or keyboard
//This is the parent object, with properties for setting how input works

//Allows up to a second between taps for a double click
game.input.doubleTapRate = 1000;

//Increases the hitbox for touch
game.input.circle = 66;
{% endhighlight %}

###Mouse & touch input

<small>Reference: <a href="http://docs.phaser.io/Phaser.Pointer.html" target="_blank">http://docs.phaser.io/Phaser.Pointer.html</a></small>

{% highlight javascript %}
if (game.input.mousePointer.isDown()) {
    console.log("Mouse X when you clicked was: "+game.input.mousePointer.x);
}
{% endhighlight %}

###Keyboard input

<small>Reference: <a href="http://docs.phaser.io/Phaser.Keyboard.html" target="_blank">http://docs.phaser.io/Phaser.Keyboard.html</a></small>

<small>Keycodes: <a href="http://docs.phaser.io/Keyboard.js.html#sunlight-1-line-557" target="_blank">http://docs.phaser.io/Keyboard.js.html#sunlight-1-line-557</a></small>

{% highlight javascript %}
if (game.input.keyboard.justReleased(Phaser.Keyboard.SPACEBAR, 10000)) {
    console.log("Spacebar has been pressed in the last 10 seconds.");
}

//Assigning Up, Down, Left and Right to a variable
var arrow =  game.input.keyboard.createCursorKeys();
if (arrow.up.isDown) {
    console.log("You are pressing the up arrow!");
}

//This will stop the arrow keys from scrolling the page
game.input.keyboard.addKeyCapture(arrow);
{% endhighlight %}

###Working with groups

<small>Reference: <a href="http://docs.phaser.io/Phaser.Group.html" target="_blank">http://docs.phaser.io/Phaser.Group.html</a></small>

{% highlight javascript %}
//Remember to assign it so we can reference it
var enemies = game.add.group();

//We can add an already created object
enemies.add(button);

//Or we can create a new object in the group
enemies.create(x, y, 'enemy_sprite');

//You can use setAll to modify properties across all children
enemies.setAll('x', 500);
{% endhighlight %}


###Adding physics to Sprites
<small>Reference: <a href="http://docs.phaser.io/Phaser.Physics.Arcade.html" target="_blank">http://docs.phaser.io/Phaser.Physics.Arcade.html</a></small>

{% highlight javascript %}
function create() {
    //First we start the system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //We then create our sprite & enable physics on it
    sprite = game.add.sprite(x, y, 'key');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    //Now our sprite has an object body as a property
    sprite.body.velocity.setTo(x, y);
    sprite.body.bounce.set(0.8);
}
{% endhighlight %}

###Handling Collision

<small>Reference: <a href="http://docs.phaser.io/Phaser.Physics.Arcade#collide.html" target="_blank">http://docs.phaser.io/Phaser.Physics.Arcade#collide.html</a></small>

{% highlight javascript %}
function update() {
    //You can collide a group with itself
    game.physics.arcade.collide(sprites);
    
    //You can call a function when a collision happens
    game.physics.arcade.collide(sprites, monsters, callback);
    
    //You can perform additional checks with a processCallback
    //If it is false, the collision will not happens
    game.physics.arcade.collide(sprites, monsters, null, processCallback);
    
    //You can perform the following collisions:
    //Sprite vs Sprite or
    //Sprite vs Group or
    //Group  vs Group or
    //Sprite vs Tilemap Layer or
    //Group  vs Tilemap Layer
}
{% endhighlight %}

###Camera

<small>Reference: <a href="http://docs.phaser.io/Phaser.Camera.html" target="_blank">http://docs.phaser.io/Phaser.Camera.html</a></small>

{% highlight javascript %}
//Lets follow a sprite named 'missile'
game.camera.follow(missile);

//Once the missile explodes, maybe we want to reset the camera
game.camera.reset();

//Something cool is happening, let's pan the camera there
game.camera.x = 500;
{% endhighlight %}

###Particles

<small>Reference: <a href="http://docs.phaser.io/Phaser.Particles.Arcade.Emitter.html" target="_blank">http://docs.phaser.io/Phaser.Particles.Arcade.Emitter.html</a></small>

{% highlight javascript %}
emitter = game.add.emitter(x, y, maxParticles);
emitter.makeParticles('image');
emitter.setAlpha(min, max, rate, easing, yoyo);

//To use gravity on the emitter, start the physics system
game.physics.startSystem(Phaser.Physics.ARCADE);
emitter.gravity = 200;
emitter.start();
{% endhighlight %}

###Contribute!

I'd like to keep revisiting this cheatsheet every once in a while so that it stays relevant.

I'm open to suggestions, improvements and corrections - either on <a href="https://github.com/OttoRobba/invrse/blob/gh-pages/_posts/2014-10-17-phaser-cheatsheet.md" target="_blank">gitHub</a> or in the comments below.

Also, please let me know what you think of it. :)
---
layout:     post
title:      Building your Phaser Projects with Browserify
date:       2014-11-19 20:00:00
permalink:  build-phaser-with-browserify
categories: 
    - tutorial
    - programming
comments:   true
---

Doing bigger projects using JavaScript can be troublesome - there is no native interface (yet) to require dependencies and resolving them involves manually adding and sorting through an html file. Being a script language, it also does not offer a native way of compiling multiple files into a single one.

So how do we solve this? With Node!

###Meet Browserify

Browserify is one of the many loaders available for JavaScript. It allows you to create files as modules:

{%highlight javascript%}
//square.js
module.exports = function(num) {
    return num*num;
};
{%endhighlight%}

Which you can then import in other files:

{%highlight javascript%}
//main.js
var square = require(./square.js);

console.log(square(4)); //should output 16
{%endhighlight%}

Awesome right?
You can also export multiple modules from a single file, like this:

{%highlight javascript%}
//math.js
exports.square = function(num) {
    return num*num;
};

exports.double = function(num) {
    return num*2;
};
{%endhighlight%}

Which we can require like so:
{%highlight javascript%}
//main.js
var square = require(./math.js).square;
var double = require(./math.js).double;

console.log(square(4)); //should output 16
console.log(double(4)); //should output 8
{%endhighlight%}

###How does that work?

The gist of it is that every file is wrapped in a function then they are concatenated into a single file that is then called by the Browserify script, solving all dependencies and calling the modules in synchrony.

To install it, you need npm - it comes with node.js so be sure to <a href="http://nodejs.org/download/" target="_blank">have that installed first!</a> Open the command line and type in:

    npm install -g browserify beefy

You might need to use sudo on Linux/Mac, depending on your permissions. After it is done installing, on the command line you can do this:

    browserify path/to/main.js > path/to/output.js

Great, very cool. But how do we use it with Phaser?

###Phaserification

I recommend structuring your game folder so you have the following:

    Game Name
        ├── index.html  
        └── src
            ├── images
            ├── sounds
            ├── libs
            |   └── phaser.js
            ├── states
            |   ├── boot.js
            |   ├── menu.js
            |   ├── play.js
            |   └── load.js
            └── game.js
   
Inside game.js you are going to create the Phaser instance and require all your game states, like this:

{%highlight javascript%}
//game.js

//We use window.game instead of var game because we want it to be accessible from everywhere
window.game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('play', require('./states/play.js'));
game.state.add('load', require('./states/load.js'));
game.state.add('menu', require('./states/menu.js'));
game.state.add('boot', require('./states/boot.js'));
game.state.start('boot');
{%endhighlight%}

Inside index.html you are going to add only two scripts: phaser.js and the bundle.js that Browserify outputs.

{%highlight html%}
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" content="content">
  <title>Phaser Game</title>
</head>

<body>
  <script src="./src/libs/phaser.js" charset="utf-8"></script>
  <script src="bundle.js"></script>
</body>

</html>
{%endhighlight%}

This is what a state file will look like:

{%highlight javascript%}
//states/play.js

module.exports = {
    create: function(){
    //This is just like any other Phaser create function
    },
    update: function(){
    //Game logic goes here
    },
};
{%endhighlight%}

And that is about it!

###Automated Cow

That is all fine and dandy but what if we want to automate it further? Good thing that there is Beefy to help us. It is a tiny server that handles Browserify and allows for cool things like watching your files for changes and live reloading. Cool huh? If you haven't installed it yet, run:

    npm install -g beefy

Again, Linux/Mac users might need to use sudo before the command depending on permissions.

Now all you need to do is run the following command in the project root folder:
    
    beefy src/game.js:bundle.js --live --open --bug=true
    
A window of your default browser should now open with your game running. Success!

###Expanding further

I highly recommend reading more about <a href="https://github.com/chrisdickinson/beefy" target="_blank">Beefy</a> and <a href="https://github.com/substack/browserify-handbook" target="_blank">Browserify</a> so that you can adjust them to your workflow. 

I made <a href="https://github.com/OttoRobba/browserify-phaser" target="_blank">a simple template</a> that you can <a href="https://github.com/OttoRobba/browserify-phaser/archive/master.zip" target="_blank">download here</a>. It is mostly empty and you need to have Browserify and Beefy installed but should be really, really easy. Feel free to modify the template and show me the changes you've made!
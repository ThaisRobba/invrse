(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    draw: function () {
        this.arrow = game.add.image(game.world.centerX - 100, game.world.centerY - 50, 'menu_arrow');
        this.arrow.anchor.setTo(0.5, 0.5);
        this.arrow.moveDelay = 200;
        this.arrow.canMove = true;
        this.arrow.currentButton = 1;
        game.add.tween(this.arrow)
            .to({
                x: this.arrow.x - 10
            }, 700, Phaser.Easing.Quadratic.Out)
            .to({
                x: this.arrow.x
            }, 400, Phaser.Easing.Quadratic.In)
            .loop()
            .start();
    },

    move: function (cursors, buttons) {
        if (cursors.down.isDown && this.arrow.canMove) {
            this.arrow.canMove = false;
            this.allowMovement();
            if (this.arrow.currentButton === 1) {
                this.tween(buttons, 2);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 3);
            } else {
                this.tween(buttons, 1);
            }
        }

        if (cursors.up.isDown && this.arrow.canMove) {
            this.arrow.canMove = false;
            this.allowMovement();
            if (this.arrow.currentButton === 1) {
                this.tween(buttons, 3);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 1);
            } else {
                this.tween(buttons, 2);
            }
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            this.activateButton(buttons, this.arrow.currentButton);
        }
    },

    tween: function (buttons, buttonNum) {
        game.add.tween(this.arrow)
            .to({
                y: game.world.centerY + buttons.pos[buttonNum - 1]
            }, this.arrow.moveDelay, Phaser.Easing.Quadratic.In)
            .start();
        this.arrow.currentButton = buttonNum;
    },

    allowMovement: function () {
        game.time.events.add(255, (function () {
            this.arrow.canMove = true;
        }), this);
    },

    activateButton: function (buttons, currentButton) {
        buttons[buttons.callbacks[currentButton - 1]]();
    }
};
},{}],2:[function(require,module,exports){
module.exports = {
    pos: [-50, 50, 150],
    callbacks: ['playState', 'playState', 'playState'],
    draw: function () {
        this.button1 = this.addButton(1, this.playState);
        this.button1.anchor.setTo(0.5, 0.5);

        this.button2 = this.addButton(2, this.playState);
        this.button2.anchor.setTo(0.5, 0.5);

        this.button3 = this.addButton(3, this.playState);
        this.button3.anchor.setTo(0.5, 0.5);
    },

    addButton: function (position, func) {
        return game.add.button(game.world.centerX, game.world.centerY + this.pos[position - 1], 'menu_button' + position, func);
    },

    playState: function () {
        game.state.start('play');
    }
};
},{}],3:[function(require,module,exports){
//We use window.game because we want it to be accessible from everywhere
window.game = new Phaser.Game(640, 480, Phaser.AUTO);

game.globals = {
    //Add variables here that you want to access globally
    //score: 0 could be accessed as game.globals.score for example
};

game.state.add('play', require('./states/play.js'));
game.state.add('load', require('./states/load.js'));
game.state.add('menu', require('./states/menu.js'));
game.state.add('boot', require('./states/boot.js'));
game.state.start('boot');

},{"./states/boot.js":4,"./states/load.js":5,"./states/menu.js":6,"./states/play.js":7}],4:[function(require,module,exports){
module.exports = {
    init: function () {
        //Add here your scaling options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
this.scale.setScreenSize(true);
    },

    preload: function () {
        //Load just the essential files for the loading screen,
        //they will be used in the Load State
        game.load.image('loading', 'assets/loading.png');
        game.load.image('load_progress_bar', 'assets/progress_bar_bg.png');
        game.load.image('load_progress_bar_dark', 'assets/progress_bar_fg.png');
    },

    create: function () {
        game.state.start('load');
    }
};
},{}],5:[function(require,module,exports){
module.exports = {
    loadingLabel: function () {
        //Here we add a label to let the user know we are loading everything
        //This is the "Loading" phrase in pixel art
        //You can just as easily change it for your own art :)
        this.loading = game.add.sprite(game.world.centerX, game.world.centerY - 20, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        //This is the bright blue bar that is hidden by the dark bar
        this.barBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'load_progress_bar');
        this.barBg.anchor.setTo(0.5, 0.5);
        //This bar will get cropped by the setPreloadSprite function as the game loads!
        this.bar = game.add.sprite(game.world.centerX - 192, game.world.centerY + 40, 'load_progress_bar_dark');
        this.bar.anchor.setTo(0, 0.5);
        game.load.setPreloadSprite(this.bar);
    },

    preload: function () {
        this.loadingLabel();
        //Add here all the assets that you need to game.load
        game.load.image('menu_title', 'assets/menu_game_title.png');
        game.load.image('menu_arrow', 'assets/menu_arrow.png');
        game.load.image('menu_button1', 'assets/menu_button.png');
        game.load.image('menu_button2', 'assets/menu_button2.png');
        game.load.image('menu_button3', 'assets/menu_button3.png');
    },

    create: function () {
        game.state.start('menu');
    }
};
},{}],6:[function(require,module,exports){
var buttons = require('../entities/menu_buttons.js'),
    arrow = require('../entities/menu_arrow.js');

module.exports = {
    create: function () {
        this.cursors = game.input.keyboard.createCursorKeys();
        this.gameTitle = game.add.image(game.world.centerX, game.world.centerY - 150, 'menu_title');
        this.gameTitle.anchor.setTo(0.5, 0.5);
        buttons.draw();
        arrow.draw(buttons, 1);
    },

    update: function () {
        arrow.move(this.cursors, buttons);
    }
};
},{"../entities/menu_arrow.js":1,"../entities/menu_buttons.js":2}],7:[function(require,module,exports){
module.exports = {
    create: function(){
    //This is just like any other Phaser create function
    },
    update: function(){
    //Game logic goes here
    },
};

},{}]},{},[3]);

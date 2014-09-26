var playState = {
   create: function() {
      this.worldCreate();
      this.inputCreate();
      this.playerCreate();
      this.overheadSymbol();
      this.gaviometroCreate();
   },

   update: function() {
      this.collision();
      this.playerMove();
      this.overheadSymbolUpdate();
   },

   worldCreate: function() {
      this.music = game.add.audio('jungle_track', 1, true);
    this.music.play();
      this.hasWon = false;
      this.map = game.add.tilemap('map');
      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();

      this.map.setCollision(1);
      this.map.setTileIndexCallback(2, this.hitObjective, this);
      this.map.setTileIndexCallback(3, this.setBgGreen, this);
      this.map.setTileIndexCallback(4, this.setBgYellow, this);
      this.map.setTileIndexCallback(5, this.setBgRed, this);
      this.map.setTileIndexCallback(6, this.setBgPurple, this);
      this.map.setTileIndexCallback(7, this.setBgRainbow, this);
      this.map.setTileIndexCallback(8, this.setBgDeath, this);
      this.level = 1;
      this.lastLevel = 3;
      this.faseForeground = game.add.image(0, 0, 'fase' + this.level +
         '_foreground');
      // this.faseBackground = game.add.image(0,0,'fase'+this.level+'background');

   },

   collision: function() {
      game.physics.arcade.TILE_BIAS = 40;
      game.physics.arcade.collide(this.player, this.layer);
      if (!this.player.inWorld) {
         this.playerDie();
      }
   },
   setBgGreen: function() {
      this.backgroundColor = "green";
   },
      setBgYellow: function() {
      this.backgroundColor = "yellow";
      },
      setBgRed: function() {
      this.backgroundColor = "red";
      },
      setBgPurple: function() {
      this.backgroundColor = "purple";
      },

      setBgRainbow: function() {
      this.backgroundColor = "rainbow";
      },
      setBgDeath: function() {
      this.backgroundColor = "empty";
      },

   inputCreate: function() {
      this.cursor = game.input.keyboard.createCursorKeys();
      game.input.keyboard.addKeyCapture([
         Phaser.Keyboard.UP,
         Phaser.Keyboard.DOWN,
         Phaser.Keyboard.LEFT,
         Phaser.Keyboard.RIGHT
      ]);
   },

   playerCreate: function() {
      this.player = game.add.sprite(128, game.world.height - 68, 'player');
      game.physics.arcade.enable(this.player);
      this.player.anchor.setTo(0.5, 0.5);
      this.player.body.gravity.y = 500;
      this.player.animations.add('green_walk', [1, 2], 4);
      this.player.animations.add('green_jump', [3]);
      this.player.animations.add('green_idle', [0]);
      this.player.animations.add('yellow_walk', [5, 6], 4);
      this.player.animations.add('yellow_jump', [7]);
      this.player.animations.add('yellow_idle', [4]);
      this.player.animations.add('red_walk', [9, 10], 4);
      this.player.animations.add('red_jump', [11]);
      this.player.animations.add('red_idle', [8]);
      this.player.animations.add('purple_walk', [13, 14], 4);
      this.player.animations.add('purple_jump', [15]);
      this.player.animations.add('purple_idle', [12]);
      this.player.color = 'green';
      game.camera.follow(this.player);
      this.player.body.setSize(60, 52, 16, 0);
      game.time.events.loop(5000, this.playerColorChange, this);

      this.eyes = game.add.sprite(this.player.x + 24, this.player.y - 32,
         'player_eyes');
    this.eyes.anchor.setTo(0.5, 0.5);
    this.player.addChild(this.eyes);

      this.eyes.animations.add('blink', [0, 1, 2], 15);
      this.eyes.animations.add('idle', [0], 1);
      this.eyes.animations.play('idle', 15, true);
      game.time.events.loop(game.rnd.integerInRange(500, 8000), this.blink,
         this);
   },

   blink: function() {
      this.eyes.animations.play('blink');
      this.eyes.events.onAnimationComplete.add(function() {
         this.eyes.animations.play('idle', 15, true);
      }, this);
   },

   playerMove: function() {
      if (this.cursor.left.isDown) {
         this.player.body.velocity.x = -200;
         this.player.scale.setTo(-1, 1);
      } else if (this.cursor.right.isDown) {
         this.player.body.velocity.x = 200;
         this.player.scale.setTo(1, 1);
      } else {
         this.player.body.velocity.x = 0;
      }

      if (this.cursor.up.isDown && this.player.body.onFloor()) {
         this.player.body.velocity.y = -550;
      }

      if (this.player.body.onFloor() && this.player.body.velocity.x !== 0) {
         this.player.animations.play(this.player.color + "_walk");
      } else if (!this.player.body.onFloor()) {
         this.player.animations.play(this.player.color + "_jump");
      } else {
         this.player.animations.play(this.player.color + "_idle");
      }
   },

   playerColorChange: function() {
      var colors = [
         'green',
         'red',
         'purple',
         'yellow'
      ];
      for (var i = 0; i < colors.length; i++) {
         if (this.player.color === colors[i]) {
            colors.splice(i, 1);
         }
      }
      this.player.color = colors[game.rnd.integerInRange(0, 2)];
      console.log(this.player.color);
   },

   playerIsHidden: function() {
      if (this.backgroundColor === this.player.color || this.backgroundColor ===
         'rainbow') {
         return true;
      } else {
         return false;
      }
   },

   playerDie: function() {
      this.deathLabel = game.add.text(game.camera.width / 2, game.camera.height /
         2,
         'X_X você morreu.', {
            font: '32px Arial',
            fill: '#ffffff'
         });
      this.deathLabel.anchor.setTo(0.5, 0.5);
      this.player.kill();
      this.deathLabel.fixedToCamera = true;
      game.time.events.add(1000, this.goToMenu, this);
   },

   overheadSymbol: function() {
      this.visible = game.add.image(-128, -128, 'exclamation');
      this.visible.anchor.setTo(0.5, 0.5);
      this.notVisibleIcon = game.add.image(-128, -128, 'notVisible');
      this.notVisibleIcon.anchor.setTo(0.5, 0.5);
   },

   overheadSymbolUpdate: function() {
      //ajustar medidas!!
      if (!this.hasWon) {
         if (this.playerIsHidden()) {
            this.visible.y = -128;
            this.notVisibleIcon.x = this.player.x;
            this.notVisibleIcon.y = this.player.y - 64;
         } else {
            this.visible.x = this.player.x;
            this.visible.y = this.player.y - 64;
            this.notVisibleIcon.x = -128;
         }
      } else {
         this.visible.y = -128;
         this.notVisibleIcon.x = -128;
      }
   },

   gaviometroCreate: function() {
      this.gaviometro = 0;
      this.timeToKill = 10000;
      this.game.time.events.loop(500, this.gaviometroCount, this);
   },

   gaviometroCount: function() {
      if (!this.hasWon) {
         if (!this.playerIsHidden()) {
            this.gaviometro += 500;
            if (this.gaviometro >= this.timeToKill) {
               this.playerDie();
            }
         }
      }
   },

   goToMenu: function() {
         game.state.start('menu');
         this.music.stop();
   },

   hitObjective: function() {
      if (!this.hasWon) {
         this.hasWon = true;
         this.victory();
      }
      return false;
   },

   nextLevel: function() {
         game.state.start('fase2');
   },

   victory: function() {
      //this.game.time.events.delay(1000, this.goToMenu, this);
      this.hasWon = true;
      this.game.add.text(game.camera.width / 2, game.camera.height / 2,
         'Boa! Próxima fase!', {
            font: 'Arial 82px',
            fill: '#ffffff'
         });
      game.time.events.add(1000, this.nextLevel, this);
   },
};
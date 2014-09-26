var level_3 = {
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
		this.level = 3;
		this.lastLevel = 3;
		// this.music = game.add.audio('jungle_track', 1, true);
		// this.music.play();
		this.hasWon = false;
		this.map = game.add.tilemap('level_' + this.level);
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
		this.level_Background = game.add.image(0, 0, 'level_' + this.level + '_background');
		this.level_Foreground = game.add.image(0, 0, 'level_' + this.level + '_foreground');
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
		this.canWin = true;
		this.player = game.add.sprite(382, 276, 'player');
		game.physics.arcade.enable(this.player);
		this.jump = game.add.audio('jump');
		this.player.anchor.setTo(0.5, 0.5);
		this.player.body.gravity.y = 750;
		this.player.animations.add('green_walk', [3, 4], 4);
		this.player.animations.add('green_jump', [5]);
		this.player.animations.add('green_idle', [0]);
		this.player.animations.add('green_blink', [0, 1, 2], 15);
		this.player.animations.add('yellow_walk', [9, 10], 4);
		this.player.animations.add('yellow_jump', [11]);
		this.player.animations.add('yellow_idle', [6]);
		this.player.animations.add('yellow_blink', [6, 7, 8], 15);
		this.player.animations.add('red_walk', [15, 16], 4);
		this.player.animations.add('red_jump', [17]);
		this.player.animations.add('red_idle', [12]);
		this.player.animations.add('red_blink', [12, 13, 14], 15);
		this.player.animations.add('purple_walk', [21, 22], 4);
		this.player.animations.add('purple_jump', [23]);
		this.player.animations.add('purple_idle', [18]);
		this.player.animations.add('purple_blink', [18, 19, 20], 15);
		this.player.color = 'green';
		game.camera.follow(this.player);
		this.player.body.setSize(60, 52, 16, 0);
		game.time.events.loop(5000, this.playerColorChange, this);
		this.player.body.collideWorldBounds = true;
		game.time.events.loop(game.rnd.integerInRange(500, 8000), this.blink, this);
	},
	blink: function() {
		this.player.animations.play(this.player.color + '_blink');
		this.player.events.onAnimationComplete.add(function() {
			this.player.animations.play(this.player.color + '_idle', 15, true);
		}, this);
	},
	playerMove: function() {
		if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -280;
			this.player.scale.setTo(-1, 1);
		} else if (this.cursor.right.isDown) {
			this.player.body.velocity.x = 280;
			this.player.scale.setTo(1, 1);
		} else {
			this.player.body.velocity.x = 0;
		}
		if (this.cursor.up.isDown && this.player.body.onFloor()) {
			this.player.body.velocity.y = -650;
			this.jump.play();
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
		var colors = ['green', 'red', 'purple', 'yellow'];
		for (var i = 0; i < colors.length; i++) {
			if (this.player.color === colors[i]) {
				colors.splice(i, 1);
			}
		}
		this.player.color = colors[game.rnd.integerInRange(0, 2)];
	},
	playerIsHidden: function() {
		if (this.backgroundColor === this.player.color || this.backgroundColor === 'rainbow') {
			return true;
		} else {
			return false;
		}
	},
	playerDie: function() {
		if (!this.player.alive) {
			return;
		}
		this.deathLabel = game.add.text(game.camera.width / 2, game.camera.height / 2, 'X_X você morreu.', {
			font: '32px Arial',
			fill: '#ffffff'
		});
		this.deathLabel.anchor.setTo(0.5, 0.5);
		this.player.kill();
		this.deathLabel.fixedToCamera = true;
		game.time.events.add(2000, this.goToMenu, this);
	},
	overheadSymbol: function() {
		this.visibleIcon = game.add.image(-128, -128, 'is_visible_icon');
		this.visibleIcon.anchor.setTo(0.5, 0.5);
		this.notVisibleIcon = game.add.image(-128, -128, 'not_visible_icon');
		this.notVisibleIcon.anchor.setTo(0.5, 0.5);
	},
	overheadSymbolUpdate: function() {
		//ajustar medidas!!
		if (!this.hasWon) {
			if (this.playerIsHidden()) {
				this.visibleIcon.y = -128;
				this.notVisibleIcon.x = this.player.x;
				this.notVisibleIcon.y = this.player.y - 64;
			} else {
				this.visibleIcon.x = this.player.x;
				this.visibleIcon.y = this.player.y - 64;
				this.notVisibleIcon.x = -128;
			}
		} else {
			this.visibleIcon.y = -128;
			this.notVisibleIcon.x = -128;
		}
	},
	gaviometroCreate: function() {
		this.gaviometro = 0;
		this.timeToKill = 10000;
		this.gaviaoCry = game.add.audio('hawk_cry');
		// this.shadow.anchor.setTo(0.5,0.5);
		this.game.time.events.loop(500, this.gaviometroCount, this);
		this.gaviometroBar = game.add.image(0, 0, 'hawk_bar');
		this.gaviometroBar.fixedToCamera = true;
		this.gaviometroBar.cameraOffset.setTo(36, 520);
		game.add.tween(this.gaviometroBar.scale)
			.to({
				x: 10
			}, 5)
			.start();
		this.gaviometroImage = game.add.sprite(0, 0, 'hawk_icon');
		this.gaviometroImage.fixedToCamera = true;
		this.gaviometroImage.cameraOffset.setTo(16, 500);
		this.shadow = game.add.image(game.world.width + 2000, 0, 'hawk_shadow');
		this.shadow.anchor.setTo(0.5, 0.5);
	},
	shadowTween: function() {
		this.shadow.y = -60;
		game.add.tween(this.shadow)
			.to({
				x: -500
			}, 400)
			.start();
	},
	gaviometroCount: function() {
		if (!this.hasWon) {
			if (!this.playerIsHidden()) {
				this.gaviometro += 500;
				if (this.gaviometro < this.timeToKill) {
					game.add.tween(this.gaviometroBar.scale)
						.to({
							x: 10 - this.gaviometro / 1000
						}, 100)
						.start();
				}
				if (this.gaviometro >= this.timeToKill) {
					if (!this.player.alive) {
						return;
					}
					this.visibleIcon.kill();
					this.notVisibleIcon.kill();
					this.gaviometroImage.kill();
					this.gaviaoCry.volume = 0.4;
					this.canWin = false;
					this.gaviaoCry.play();
					game.time.events.add(500, this.shadowTween, this);
					game.add.tween(this.gaviometroBar.scale)
						.to({
							x: 0
						}, 100)
						.start();
					game.time.events.add(750, this.playerDie, this);
				}
			}
		}
	},
	goToMenu: function() {
		game.state.start('menu');
		level_1.music.stop();
	},
	goToCredits: function() {
		game.state.start('credits');
		level_1.music.stop();
	},
	hitObjective: function() {
		if (!this.hasWon && this.canWin) {
			this.hasWon = true;
			this.victory();
		} else {
			return false;
		}
	},
	nextLevel: function() {
		game.state.start('level_3');
	},
	victory: function() {
		//this.game.time.events.delay(1000, this.goToMenu, this);
		this.victorySound = game.add.audio('win');
		this.hasWon = true;
		this.game.add.text(game.camera.width / 2, game.camera.height / 2, 'Boa! Você venceu!', {
			font: 'Arial 82px',
			fill: '#000000'
		});
		this.victorySound.play();
		game.time.events.add(1000, this.goToCredits, this);
	},
};
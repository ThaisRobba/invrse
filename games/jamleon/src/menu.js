var menuState = {
	create: function() {
		this.game.world.setBounds(0, 0, this.game.width, this.game.height);
		game.camera.reset();
		game.add.image(0, 0, 'menu_foreground');
		var nameLabel = game.add.image(0, -1000, 'menu_title');
		this.muteButton = game.add.button(64, 64, 'mute_icon', this.toggleSound,
			this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}
		this.musicMenu = game.add.audio('main_track', 1, true);
		this.musicMenu.play();
		this.helpButton = game.add.button(64, 160, 'help_icon', this.goToHelp, this);
		this.helpButton.input.useHandCursor = true;
		this.creditsButton = game.add.button(64, 256, 'person_icon', this.goToCredits,
			this);
		this.creditsButton.input.useHandCursor = true;
		game.add.tween(nameLabel)
			.to({
				y: 0
			}, 1000) //atributo, tempo em ms
		.easing(Phaser.Easing.Bounce.Out)
			.start();
		game.add.tween(nameLabel)
			.to({
				angle: 0.5
			}, 3000)
			.to({
				angle: -0.5
			}, 3000)
			.loop()
			.start();
		var startLabel = game.add.text(game.world.centerX, game.world.height - 100,
			'Press "UP" to begin!', {
				font: '48px Lato',
				fill: '#296e31'
			});
		startLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabel.scale)
			.to({
				x: 1.1,
				y: 1.1
			}, 650)
			.to({
				x: 1,
				y: 1
			}, 700)
			.loop()
			.start();
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
	},
	toggleSound: function() {
		game.sound.mute = !game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},
	start: function() {
		game.state.start('level_1');
		this.musicMenu.stop();
	},
	goToHelp: function() {
		game.state.start('help');
		this.musicMenu.stop();
	},
	goToCredits: function() {
		game.state.start('credits');
		this.musicMenu.stop();
	}
};
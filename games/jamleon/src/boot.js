var bootState = {
	preload: function() {
		game.load.image('progressBar', 'art/ui/progress_bar.png');
	},
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#3498db';
		game.state.start('load');
		game.global = {
			mute: false
		};
	},
	update: function() {},
};
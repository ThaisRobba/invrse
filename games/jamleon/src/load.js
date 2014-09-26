var loadState = {
	preload: function() {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
			font: 'Arial 82px',
			fill: '#ffffff'
		});
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

        //Load UI components
        game.load.image('back_icon', 'art/ui/back_icon.png');
        game.load.image('help_icon', 'art/ui/help_icon.png');
		game.load.image('person_icon', 'art/ui/person_icon.png');
        game.load.spritesheet('mute_icon', 'art/ui/mute_icon.png', 64, 64);

		//Load player images
		game.load.spritesheet('player', 'art/chameleon/chameleon_sprite.png', 96, 64);
		game.load.image('is_visible_icon', 'art/chameleon/exclamation.png');
		game.load.image('not_visible_icon', 'art/chameleon/not_visible.png');

        //Load Hawk images
        game.load.image('hawk_icon', 'art/hawk/icon_hawk.png');
		game.load.image('hawk_bar', 'art/hawk/hawk_bar.png');
		game.load.image('hawk_shadow', 'art/hawk/hawk_shadow.png');

        //Load screens images
		game.load.image('menu_foreground', 'art/screens/menu_foreground.png');
		game.load.image('menu_title', 'art/screens/menu_title.png');
		game.load.image('help_foreground', 'art/screens/help_foreground.png');
		game.load.image('credits_foreground', 'art/screens/credits.png');

		//Load music and sound effects
		game.load.audio('jungle_track', ['sounds/In the Jungle - Gameplay.mp3']);
		game.load.audio('main_track', ['sounds/In the Jungle - Title Screen.mp3']);
		game.load.audio('hawk_cry', ['sounds/thecluegeek__cinematic-eagle-cry.wav']);
		game.load.audio('player_jump', ['sounds/jump.wav']);
		game.load.audio('victory', ['sounds/victory.wav']);

		//Load levels
		game.load.tilemap('level_1', 'art/levels/level_1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('level_1_foreground', 'art/levels/1_foreground.png');
		game.load.tilemap('level_2', 'art/levels/level_2.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('level_2_foreground', 'art/levels/2_foreground.png');
		game.load.image('level_2_background', 'art/levels/2_background.png');
		game.load.tilemap('level_3', 'art/levels/level_3.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('level_3_foreground', 'art/levels/3_foreground.png');
		game.load.image('level_3_background', 'art/levels/3_background.png');
	},

	create: function() {
		game.state.start('menu');
	}
};
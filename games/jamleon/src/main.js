var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'gameDiv');
//global variables go below
game.global = {};
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('help', helpState);
game.state.add('credits', creditsState);
game.state.add('level_1', level_1);
game.state.add('level_2', level_2);
game.state.add('level_3', level_3);
game.state.start('boot');
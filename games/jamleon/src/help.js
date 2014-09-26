var helpState = {
      create: function () {
        this.musicMenu = game.add.audio('main_track', 1, true);
        this.musicMenu.play();
         game.add.image(0,0,'help_foreground');
         this.returnButton = game.add.button(64, 64, 'back_icon', this.goToMenu, this);
         this.returnButton.input.useHandCursor = true;
      },

      goToMenu: function() {
         game.state.start('menu');
         this.musicMenu.stop();
      },
};
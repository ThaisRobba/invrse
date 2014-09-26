var creditsState = {
      create: function () {
        this.musicMenu = game.add.audio('main_track', 1, true);
        this.musicMenu.play();
        this.credits = game.add.image(0,0,'credits_foreground');
         this.returnButton = game.add.button(64, 64, 'back_icon', this.goToMenu, this);
         this.returnButton.input.useHandCursor = true;
         this.returnButton.fixedToCamera = true;

         game.add.tween(this.credits)
         .to({y: - 2850}, 20000)
         .to({y: 0}, 20000)
         .start();
      },

      goToMenu: function() {
         game.state.start('menu');
         this.musicMenu.stop();
      },
};
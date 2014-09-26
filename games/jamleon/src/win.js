var winState = {

   create: function() {
      this.game.world.setBounds(0, 0, this.game.width, this.game.height);
      game.camera.reset();
      var winLabel = game.add.text(game.world.centerX, game.world.centerY,
         'Parabéns, você ganhou!!', {
            font: '48px Arial',
            fill: '#ffffff'
         });
      startLabel.anchor.setTo(0.5, 0.5);
      var returnLabel = game.add.text(game.world.centerX, game.world.height -
         80,
         'Aperte qualquer tecla para voltar pro menu :)', {
            font: '16px Arial',
            fill: '#ffffff'
         });
      startLabel.anchor.setTo(0.5, 0.5);
   },

   update: function() {

   },

};
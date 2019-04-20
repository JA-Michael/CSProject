var mainMenuState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize:
  function MainMenu(){
    Phaser.Scene.call(this, {key: 'MainMenu'});
  },

  preload: function() {
    // Preload images for this state
  },

  create: function() {
    game.scene.start('GamePlay');
  },

  update: function() {
    // Update objects & variables
  }
});

// Add scene to list of scenes
myGame.scenes.push(mainMenuState);

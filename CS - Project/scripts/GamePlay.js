var gamePlayState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize:
  function GamePlay(){
    Phaser.Scene.call(this, {key: 'GamePlay'});
  },

  preload: function() {
    // Preload images for this state
  },

  create: function() {
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    myGame.platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    myGame.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    myGame.platforms.create(600, 400, 'ground');
    myGame.platforms.create(50, 250, 'ground');
    myGame.platforms.create(750, 220, 'ground');

    // The players and its settings
    myGame.playerA = this.physics.add.sprite(100, 450, 'dude');
    myGame.playerB = this.physics.add.sprite(200, 450, 'dude');

    //  Player physics properties
    myGame.playerA.setBounce(0.2);
    myGame.playerA.setCollideWorldBounds(true);
    myGame.playerB.setBounce(0.2);
    myGame.playerB.setCollideWorldBounds(true);

    //  Collide the players with the platforms
    this.physics.add.collider(myGame.playerA, myGame.platforms);
    this.physics.add.collider(myGame.playerB, myGame.platforms);
  },

  update: function() {
    //  Update objects & variables
  }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);

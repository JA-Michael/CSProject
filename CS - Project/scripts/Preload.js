var preloadState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function Preload(){
    Phaser.Scene.call(this, {key: 'Preload'});
  },

  preload: function() {
    //  Preload images
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    //  Preload audio
  },

  create: function() {
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    //  Input events for the players
    myGame.cursorsA = this.input.keyboard.createCursorKeys();
    myGame.cursorsB = {
      w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    }

    //  Starts the main menu scene
    game.scene.start('MainMenu');
  },

  update: function() {
    //  Player A controls
    if (myGame.cursorsA.left.isDown) {
      myGame.playerA.setVelocityX(-160);
      myGame.playerA.anims.play('left', true);
    }
    else if (myGame.cursorsA.right.isDown) {
      myGame.playerA.setVelocityX(160);
      myGame.playerA.anims.play('right', true);
    }
    else {
      myGame.playerA.setVelocityX(0);
      myGame.playerA.anims.play('turn');
    }
    if (myGame.cursorsA.up.isDown && myGame.playerA.body.touching.down) {
      myGame.playerA.setVelocityY(-330);
    }

    //  Player B controls
    if (myGame.cursorsB.a.isDown) {
      myGame.playerB.setVelocityX(-160);
      myGame.playerB.anims.play('left', true);
    }
    else if (myGame.cursorsB.d.isDown) {
      myGame.playerB.setVelocityX(160);
      myGame.playerB.anims.play('right', true);
    }
    else {
      myGame.playerB.setVelocityX(0);
      myGame.playerB.anims.play('turn');
    }
    if (myGame.cursorsB.w.isDown && myGame.playerB.body.touching.down) {
      myGame.playerB.setVelocityY(-330);
    }

  }
});

// Add scene to list of scenes
myGame.scenes.push(preloadState);

import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    // this.load.image('logo', 'assets/logo.png');

    this.load.image('player', 'assets/ui/bird.png');
    this.load.image('coin', 'assets/ui/coin.png');
    this.load.image('background', 'assets/ui/bg.png');
    this.load.image('pipe', 'assets/ui/pipe.png');
  }

  create () {

    //background
    // first create first index
    this.background = this.add
      .tileSprite(0, 0, config.width,config.height, "background")
      .setDepth(0)
      .setOrigin(0, 0);

      
    // Parameters: x position, y position, name of the sprite
    this.player = this.physics.add.sprite(100, 100, 'player');

    this.player.body.gravity.y = 1000;
    this.player.body.velocity.x = 10;
    this.player.body.setAllowGravity(true);

    
    // Store the score in a variable, initialized at 0
    this.score = 0;

    // The style of the text 
    // A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff' };

    // Display the score in the top left corner
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style)
                      .setDepth(1);

    //move player
    this.arrow = this.input.keyboard.createCursorKeys();
    this.jump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    //pipe
    this.pipes = this.add.group();

    // Timer that create or spawn pipe
    this.addPipeColumn();

    this.time.addEvent({
      delay: 3000,
      callback: this.addPipeColumn,
      callbackScope: this,
      loop: true
    });

  
  }

  update() {
    if (this.physics.overlap(this.player, this.coin)) {
      this.hit();
    }

    if (this.physics.overlap(this.player, this.pipes)) {
      this.playerDie();
    }

    if (this.arrow.right.isDown) {
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      this.player.x -= 3;
    } 

    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    } 
    // jump
    if (this.jump.isDown) {
      this.jumpPlayer();
    }
    // restart game if player go below the ground
    if (this.player.y > this.sys.canvas.height) {
      this.scene.restart();
    }
    if (this.player.x > this.pipes.x) {
      console.log('pass pipe');
    }

    
  }

  // hit() {
  //   this.coin.x = Phaser.Math.Between(100, 600);
  //   this.coin.y = Phaser.Math.Between(100, 200);

  //   this.score += 10;
  //   this.scoreText.setText('score: ' + this.score);

  //   // Create a new tween 
  //   this.tweens.add({
  //     targets: this.player, // on the player 
  //     duration: 100, // for 200ms 
  //     scaleX: 1.2, // that scale vertically by 20% 
  //     scaleY: 1.2, // and scale horizontally by 20% 
  //     yoyo: true, // at the end, go back to original scale 
  //   });
  // }

  jumpPlayer() {
    this.player.body.velocity.y = -250;
  }

  playerDie(){
    console.log('Die');
    // this.scene.pause();
    this.scene.start('Result',{ score: this.score });
  }


  addPipe(x, y) {
    const pipe = this.physics.add.image(x, y, 'pipe') 
          pipe.body.velocity.x = -200;
          pipe.body.setAllowGravity(false)
          pipe.checkWorldBounds = true;
          pipe.outOfBoundsKill = true;

   this.pipes.add(pipe);
   

  }

  addPipeColumn() {
     // randomly pick a number between 1 and 5
     let hole = Math.floor(Math.random() * 5) + 1;
     let pipeX = config.width;

     // add 6 pipes with one big hole at position hole and hole + 1
     for (let i = 0; i < 10; i++) {
       if (i !== hole && i !== hole + 1 && i !== hole + 2) {
         if (i === hole - 1) {
           this.addPipe(pipeX, i * 60, 0);
         } else if (i === hole + 3) {
           this.addPipe(pipeX, i * 60, 1);
         } else {
           this.addPipe(pipeX, i * 60, 2);
         }
       }
     
     }
     this.score += 10;
     this.scoreText.setText('score: ' + this.score);
    
  }


};

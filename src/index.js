import Phaser from "phaser";

import config from "./config/config";
import GameScene from "./scenes/GameScene";
// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);

class Game extends Phaser.Game{
  constructor(){
    super(config);
    this.scene.add('Game',GameScene);
    this.scene.start('Game');
    // this.input.onDown.add(this.jump, this);
  }
}

window.onload = function(){
  window.game = new Game();
  

  //  window.game.input.onDown.add(this.jump, this);
  
}


import 'phaser';

export default {
  type: Phaser.AUTO,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: 'phaser-example', // Create the game inside the <div id="phaser-example"> 
  width: 600,
  height: 500,
  scale: 'SHOW_ALL',
  physics: { default: 'arcade' }, // The physics engine to use
};

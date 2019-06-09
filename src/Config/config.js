import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example', // Create the game inside the <div id="phaser-example"> 
  width: 800,
  height: 600,
  scale: 'SHOW_ALL',
  physics: { default: 'arcade' }, // The physics engine to use
};

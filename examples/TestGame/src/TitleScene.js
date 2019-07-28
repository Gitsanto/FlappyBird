class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  
  preload()
  {
      this.load.image('background', 'img/mock/ui/bg.png');
      // for background
    this.background = this.add
        .tileSprite(0, 0, config.width,config.height, "background")
        .setDepth(0)
        .setOrigin(0, 0);
  }

  create() {
  
  // Game
  this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

  // Options
  this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');

  // Credits
  this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

  this.model =  new Model(this,false,false,false);

  if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
    this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
    this.bgMusic.play();
    this.model.bgMusicPlaying = true;
    //this.sys.game.globals.bgMusic = this.bgMusic;
  }

  
  }
}



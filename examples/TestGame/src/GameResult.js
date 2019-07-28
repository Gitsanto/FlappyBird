
class GameResult extends Phaser.Scene {
  constructor () {
    super('Result');
  }

  init(data){
    // console.log('init', data);
    this.finalScore = data.score;
  }
  create () {
    
    // Game
    // this.scoreButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Your Score :' + this.finalScore, 'Game');
    // The style of the text 
    // A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff' };

    // Display the score in the top left corner
    // Parameters: x position, y position, text, style
    this.finalscoreText = this.add.text(config.width/2-50, config.height/2-100, 'Your Score: ' + this.finalScore, style);
                  
    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Replay', 'Game');

    //Home
    this.homeButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2' , 'Menu', 'Title');

    this.model =  new  Model(this,false,false,false);
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      //this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
};
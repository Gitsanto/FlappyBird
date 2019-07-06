 class Model extends Phaser.GameObjects.Container{
    constructor(scene,_soundOn,_musicOn,_bgMusicPlaying) {
      super(scene);
      this._soundOn = _soundOn;
      this._musicOn = _musicOn;
      this._bgMusicPlaying = _bgMusicPlaying;
    }
  
    set musicOn(value) {
      this._musicOn = value;
    }
  
    get musicOn() {
      return this._musicOn;
    }
  
    set soundOn(value) {
      this._soundOn = value;
    }
  
    get soundOn() {
      return this._soundOn;
    }
  
    set bgMusicPlaying(value) {
      this._bgMusicPlaying = value;
    }
  
    get bgMusicPlaying() {
      return this._bgMusicPlaying;
    }
  }
  
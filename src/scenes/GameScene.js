import 'phaser';
import logoImg from "../assets/logo.png";
import bird_me from "../assets/bird.png";
import pipe from "../assets/pipe.png";
import { GameObjects } from 'phaser';


export default class GameScene extends Phaser.Scene{
    constructor(){
        super('Game'); //cus it pass from parents to child
    }

    
    preload(){
    var bird;
     // bird gravity, will make bird fall if you don't flap
	var birdGravity = 800;
     // horizontal bird speed
	var birdSpeed = 125;
     // flap thrust
	var birdFlapPower = 300;
     // milliseconds between the creation of two pipes
	var pipeInterval = 2000;
     // hole between pipes, in puxels
	var pipeHole = 120;
	var pipeGroup;
	var score=0;
	var scoreText;
     var topScore;

     var width = this.cameras.main.width;
     var height = this.cameras.main.height;



            // load assests 
         this.load.image("logo", logoImg);
        this.load.image("bird", bird_me); 
        this.load.image("pipe", pipe);	
        
    }

    create(){
        
        // var logo = this.add.image(400, 150, "logo");
        // var bird = this.add.image(400, 150, "bird");
        this.bird = this.add.image(400, 150, "bird");
        // this.bird.scale.setTo(2,1);

        this.pipe = this.add.sprite(100, 200,"pipe");

        this.bird2 = this.add.image(200, 150, "bird");

        //for bird
        this.tweens.add({
            targets: this.bird,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
          });

          


        // If this is not a desktop (so it's a mobile device) 
			// if (this.device.desktop == false) {
				// Set the scaling mode to SHOW_ALL to show all the game
				// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			
				// Set a minimum and maximum size for the game
				// Here the minimum is half the game size
				// And the maximum is the original game size
				// this.scale.setMinMax(this.width/2, this.height/2, 
				// this.width, this.height);
			
				// Center the game horizontally and vertically
				// this.scale.pageAlignHorizontally = true;
                // this.scale.pageAlignVertically = true;
                
                 // Call the 'jump' function when we tap/click on the screen
            //  this.game.input.onDown.add(this.jump, this);
            
    
}


}
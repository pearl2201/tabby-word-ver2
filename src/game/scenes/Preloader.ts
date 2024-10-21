export class Preloader extends Phaser.Scene {
    constructor() {
      super('Preloader');
    }
  
    preload() {
        this.load.image('replayBtn', 'assets/replayBtn.png');
        this.load.image('ideaBtn', 'assets/ideaBtn.png');
        this.load.image('resultbox', 'assets/resultbox.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('wordbutton', 'assets/wordbutton.png');
        this.load.bitmapFont('poplar', 'assets/fonts/poplar-std-black_0.png', 'assets/fonts/poplar-std-black.fnt');
        this.load.text('wordlist', 'assets/english.txt');
    }
  
    create () {
      this.scene.start('Game');
    }
  }
  
  
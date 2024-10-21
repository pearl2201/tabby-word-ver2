import Phaser, { Scene } from 'phaser';
import { Game } from '../scenes/Game';

class WordButton extends Phaser.GameObjects.Group {
  id: number;
  x: number;
  y: number;
  text: string;
  textBtn: Phaser.GameObjects.BitmapText;
  constructor(scene: Scene, id: number, x: number, y: number, size: number, image: string, color: number, font: string, text: string) {
    super(scene);
    this.scene = scene;
    this.id = id;
    this.x = x;
    this.y = y;
    this.text = text;
    const imageBtn = new Phaser.GameObjects.Image(scene, x, y, image);
    imageBtn.setDisplaySize(size, size);
    imageBtn.tint = color;
    imageBtn.setOrigin(0.5, 0.5);
    this.add(imageBtn, true);

    this.textBtn = new Phaser.GameObjects.BitmapText(scene, x, y, font, text, 108);
    this.textBtn.setOrigin(0.5, 0.5);

    this.add(this.textBtn, true);
    imageBtn.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.enterButtonHoverState())
      //.on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState())
      .on('pointerup', () => {
        //this.enterButtonHoverState();
        (this.scene as Game).onButtonClickUp(true);
      });
    console.log('create word button success: ', x, y, size);
  }

  enterButtonHoverState() {
    (this.scene as Game).onClickWordButton(this.id, false);
  }

  enterButtonRestState() {
    //(this.scene as Game).onClickWordButton(this.id);
  }

  enterButtonActiveState() {
    (this.scene as Game).onClickWordButton(this.id, true);
  }

  setChar(c: string) {
    this.textBtn.setText(c);
    this.text = c;
  }
}

export default WordButton;

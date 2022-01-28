import Phaser from '../lib/phaser.js'
import Button from '../config/Button.js'

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title')
  }

  create () {
    
    this.add.image(this.scale.width /2,this.scale.height /2,'sky').setTint(0xff00ab)
    this.add.image(this.scale.width /2,this.scale.height /2,'bgsky').setScale(0.5)
    this.add.image(this.scale.width/2,this.scale.height/3, 'logo').setScale(0.30)
    // Game
    this.gameButton = new Button(this, this.scale.width/2, this.scale.height*0.5, 'blueButton1', 'blueButton2', 'Play', 'Game') 

    // Options
    this.optionsButton = new Button(this, this.scale.width/2, this.scale.height*0.65, 'blueButton1', 'blueButton2', 'Options', 'Options')

    // Credits
    this.creditsButton = new Button(this, this.scale.width/2, this.scale.height*0.8, 'blueButton1', 'blueButton2', 'Credits', 'Credits')

    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton2')
    })

    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton1')
    })
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(this.scale.width/2, this.scale.height/2 - offset * 100, this.scale.width, this.scale.height)
    )
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    )
  }
}

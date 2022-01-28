import Phaser from '../lib/phaser.js'
import Button from '../config/Button.js'

export default class OptionsScene extends Phaser.Scene {
  
  constructor () {
    super('Options')
  }

  create () {
    
    this.add.image(this.scale.width/2, this.scale.height /2,'sky').setOrigin(0.5,0.5)
    this.add.image(this.scale.width /2,this.scale.height/2,'bgsky').setScale(0.5).setTint(0x00ff00).setOrigin(0.5,0.5)
    this.music = this.sound.add('bgMusic')

    this.text = this.add.text(this.scale.width/2, this.scale.height/4, 'Options', { fontSize: 40 }).setOrigin(0.5,0.5)
    this.musicButton = this.add.image(this.scale.width /5, this.scale.height/2, 'checkedBox')
    this.musicText = this.add.text(this.scale.width/5 +50, this.scale.height /2 - 10, 'Music Enabled', { fontSize: 24 })

    
    this.musicButton.setInteractive()
    

    this.musicButton.on('pointerdown', function () {
      this.updateAudio()
    }.bind(this))
    
    this.menuButton = new Button(this, this.scale.width/2, this.scale.height*0.75, 'blueButton1', 'blueButton2', 'Menu', 'Title')

  }

  updateAudio() {
     this.musicOn = !this.musicOn
    if (this.musicOn === true) {
      this.musicButton.setTexture('checkedBox')
      this.music.play()
    } else {
      this.musicButton.setTexture('box')
      this.sound.pauseAll()
    }
  }
}

import Phaser from '../lib/phaser.js'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot')
  }

  preload () {
    this.load.image('logo', 'assets/gd.png')
  }

  create () {
    console.log("BootScene loaded")
    this.scene.start('Preloader')
  }
}
import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene {
  
  rimg
  
  constructor() {
    super('game-over')
  } 
  
  create (){
   this.rimg = this.add.text(this.scale.width/2 - 180, this.scale.height/2 - 90, "☠️☠️☠️☠️☠️☠️\n☠️GameOver☠️\n☠️☠️☠️☠️☠️☠️", {color : 'cyan', fontSize: 60 }).setInteractive()
    
   this.rimg.on('pointerdown', function (){this.rimg.setTint(0xff00ff, 0xaa0000)} , this) 
   this.rimg.on('pointerup',this.restart, this)
   
   this.zone = this.add.zone(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height)

   Phaser.Display.Align.In.Center(this.rimg, this.zone)
  }
  
  restart(){
      this.score = 0
      this.gameOver = false
      this.scene.start('Title')
    } 
    
}
import Phaser from '../lib/phaser.js'

export default class Nxt extends Phaser.Scene {
  ST
  
  constructor(){
    super('nxt')
  } 
  
  preload() {
    this.load.atlasXML('hrs', 'assets/hrs.png', 'assets/hrs.xml')
  } 
  
  create(){
    var a = this.textures.get('hrs')
    var b = a.getFrameNames()
    console.log(b)
    
    this.anims.create({
     key: 'hrt', 
      frames: this.anims.generateFrameNames('hrs', {
        prefix:'hrs_', 
        suffix:'.png', 
        start:1, 
        end:7
      }), 
      frameRate: 8,
      repeat: -1
    })
    
   this.ST=  this.add.sprite(this.scale.width/2, this.scale.height/2, 'hrs', b[0])
   
    this.ST.play('hrt')
   
   this.add.text(this.scale.width/2, this.scale.height/2 - 10, "Mr.h2s").setOrigin(0.5,0.5)
    
    this.ST.setInteractive()
    
    this.ST.on('pointerdown', function (){this.ST.setTint(0xff00ff, 0xff0000)} , this) 
    
    this.ST.on('pointerup',this.restart, this)
    
    
    
    console.log(this.scale.width + ' x ' + this.scale.height )
  }
  
  restart(){
      this.score = 0
      this.gameOver = false
      this.scene.start('Boot')
    } 
  
} 
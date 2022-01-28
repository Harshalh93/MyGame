import Phaser from '../lib/phaser.js'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game')
  }


  create () {
    this.add.image(this.scale.width/2 + 150, this.scale.height/2 - 50, 'logo').setScale(0.3)
    var a = this.textures.get('all')
    var b = a.getFrameNames()
    var t = this.textures.get('txt')
    var txt=t.getFrameNames()
    console.log(b)
    
    const sun = this.add.sprite(this.scale.width/2 - 150,this.scale.height /2 - 50, 'all', b[108])
    this.anims.create({
      key: 'sun', 
      frames: this.anims.generateFrameNames('all', {
        prefix:'sun', 
        suffix:'.png', 
        start:1, 
        end:2
      }), 
      frameRate: 8,
      repeat: -1
    })
    
    var ready = this.add.image(this.scale.width/2, this.scale.height/2,'txt',txt[44]).setInteractive()
    
    ready.on('pointerdown', function (){ ready.setTint(0xff00ff, 0xff0000)} , this) 
    ready.on('pointerup',function (){ this.scene.start('gametwo')} , this)
  
    
    sun.play('sun')
    
    
  }
}

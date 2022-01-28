import Phaser from '../lib/phaser.js' 
import Score from '../scenes/addpf.js'

export default class Game extends Phaser.Scene {
  
  player
  
  platform
  
  coins
  
  pointer
  
  score
  
  scoreText
  
  constructor (){
    super('gametwo')
  } 
  
  create(){
    
    this.add.image(this.scale.width /2, this.scale.height /2,'sky').setScrollFactor(0).setScale(4)
    
    var a = this.textures.get('all')
    var b = a.getFrameNames()
    const t = this.textures.get('txt')
    const txt = t.getFrameNames()
    
    var ul = this.add.image(this.scale.width/8,this.scale.height/2,'upleft').setScrollFactor(0)
    var ur = this.add.image(this.scale.width *7/8, this.scale.height/2,'upright').setScrollFactor(0)
    
    this.player= this.physics.add.sprite(100,150,'all', b[110]).setScale(0.5)
    
    this.anims.create({
      key: 'fly', 
      repeat:-1,
      frames: this.anims.generateFrameNames('all', {
        prefix:'wingMan', 
        suffix:'.png', 
        start:1,
        end: 5
      }), 
      frameRate:10
    }) 
    
    
    
    this.anims.create({
      key: 'gold',
      repeat: -1,
      frames: this.anims.generateFrameNames('all', {
         prefix: 'gold_',
         suffix: '.png', 
         start:1,
         end: 4,
         zeroPad: 1
       }), 
      frameRate: 5 
    })
    
    this.platform = this.physics.add.staticGroup()
    this.coins = this.physics.add.group()
 
    var y = 500
    for(var i=0;i<10;i++){
      var x = Phaser.Math.Between(50,300)
      var z = Phaser.Math.Between(44,62)
      this.platform.create(x, y, 'all', b[z])
      this.platform.create(x+450, y, 'all', b[z-1])
      var rnd = Phaser.Math.Between(0,1)
      var v = [x, x+450]
      this.coins.create(v[rnd], y-100,'all',b[32] ).setScale(0.5).play('gold')
      y = y - 250
    } 
    this.score=0
    this.scoreText = this.add.text(0,0,'Score : 0').setScrollFactor(0).setScale(2)
    
    
    this.player.play('fly')
    
    this.physics.add.collider(this.platform, this. player)
    this.physics.add.collider(this.platform, this.coins)
    
    this.physics.add.overlap(this.player, this.coins, this.collectit, null, this)
    
    this.cameras.main.startFollow(this.player)
    this.cameras.main.setZoom(0.9)
   
  } 
  
  update() {

    if(this.player.body.touching.down) {
     this.player.setVelocityY(-150)
     this.player.setVelocityX(0)
    } 
    this.pointer = this.input.activePointer
    if (this.pointer.isDown){
     var px = this.pointer.x
     if(px>this.scale.width/2){
        this.player.setVelocityY(-100)
        this.player.setVelocityX(100)
     } else if (px<this.scale.width/2) {
       this.player.setVelocityY(-100)
       this.player.setVelocityX(-100)
      }
    } 
    
    if (this.player.y > this.scale.height*0.999){
     this.scene.start('game-over')
   }
    if (this.score ===100) {
     this.scene.start('lv2')
   }
  
  }
  
  collectit(player, coins){
    coins.disableBody(true,true)
    this.score +=10
    this.scoreText.setText('Score : '+this.score).setScrollFactor(0)
    
  } 
  
} 
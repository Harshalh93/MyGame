import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
  coin
  scoreText
  score=0
  txt
  constructor (){
    super('game')
  } 
  
  preload(){
    this.load.atlasXML('all', 'assets/spritesheet.png', 'assets/spritesheet.xml')
    this.load.atlasXML('txt', 'assets/txt.png', 'assets/txt.xml')
    this.load.atlasXML('hrs', 'assets/hrs.png', 'assets/hrs.xml')
    
  } 
  
  create(){
    
    var a = this.textures.get('all')
    var b = a.getFrameNames()
    
    var t = this.textures.get('txt')
    this.txt =t.getFrameNames()
    console.log(this.txt)
    
    
    
    this.coin = this.add.sprite(100,150, 'all', 0).setInteractive()
    var coin2 = this.add.sprite(70,250, 'all', 0)
    var hrt = this.add.sprite(100,250, 'hrs', 0)
    var wingMan = this.add.sprite(200,250, 'all', 0)
    var coin3 = this.add.sprite(200,350, 'all', 0)
    
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
    this.anims.create({
      key: 'silver',
      repeat: -1,
      frames: this.anims.generateFrameNames('all', {
         prefix: 'silver_',
         suffix: '.png', 
         start:1,
         end: 4,
         zeroPad: 1
       }), 
      frameRate: 5 
    })
    this.anims.create({
      key: 'bronze',
      repeat: -1,
      frames: this.anims.generateFrameNames('all', {
         prefix: 'bronze_',
         suffix: '.png', 
         start:1,
         end: 4,
         zeroPad: 1
       }), 
      frameRate: 5 
    })
    this.anims.create({
      key: 'wingman',
      repeat: -1,
      frames: this.anims.generateFrameNames('all', {
         prefix: 'wingMan',
         suffix: '.png', 
         start:1,
         end:5,
         zeroPad: 1
       }), 
      frameRate: 8 
    })
    this.anims.create({
      key: 'hrt',
      repeat: -1,
      frames: this.anims.generateFrameNames('hrs', {
         prefix: 'hrs_',
         suffix: '.png', 
         start:1,
         end: 7,
         zeroPad: 1
       }), 
      frameRate: 5 
    })
    
    
    
    this.coin.play('gold').setScale(0.5)
    coin2.play('silver').setScale(0.5)
    coin3.play('bronze').setScale(0.5)
    hrt.play('hrt').setScale(0.25)
    wingMan.play('wingman').setScale(0.5)
  } 
  
  update(){
    
    
    
    this.coin.on('pointerdown',function (){ 
      this.scoreText.setTint('0x00ff00')}, this )
    this.coin.on('pointerup', function (){
      this.score += 10
    },this )
    
    this.scoreup() 
    
  } 
  
  scoren(score){
    
    var n = [16,18,20,22,24,26,28,30,32,34]
    var m = [0,1,2,3,4,5,6,7,8,9 ]
    var a = score%10
    var b = ((score-a)/10)%10
    var c = ((((score-a)/10)-b)/10)%10
    var d = ((((((score-a)/10)-b)/10)-c)/10)%10
    var sm=[n[d] , n[c] , n[b], n[a]]
    return sm
  } 
  
  scoreup(){
    var t = this.textures.get('txt')
    this.txt =t.getFrameNames()
    var s =this.scoren(this.score)
    this.scoreText = [
      this.add.image(10,20,'txt',this.txt[45]).setOrigin(0,0.5).setScale(0.5), 
      this.add.image(105,20,'txt',this.txt[38]  ).setOrigin(0,0.5).setScale(0.5), 
      this.add.image(115,20,'txt',this.txt[s[0]]).setOrigin(0,0.5).setScale(0.5), 
      this.add.image(135,20,'txt',this.txt[s[1]] ).setOrigin(0,0.5).setScale(0.5), 
      this.add.image(155,20,'txt',this.txt[s[2]]).setOrigin(0,0.5).setScale(0.5), 
      this.add.image(175,20,'txt',this.txt[s[3]]).setOrigin(0,0.5).setScale(0.5)
     ] 
  } 
} 
import Phaser from '../lib/phaser.js'

export default class Score extends Phaser.GameObjects.Container {
  constructor(x, y, scene, score) {
    super(scene)
    this.scene = scene
    this.score = score
    this.x = x
    this.y = y

    this.text = this.scene.add.text(0, 0, 'Score : '+ score, { fontSize: '32px', fill: '#fff' }).setScrollFactor(0)
    
    this.add(this.text)
    
    this.scene.add.existing(this) 
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
    var s =this.scoren(this.score)
    this.scoreText = [
      this.add.image(10,20,'txt',this.txt[45]).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0), 
      this.add.image(105,20,'txt',this.txt[38]  ).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0), 
      this.add.image(115,20,'txt',this.txt[s[0]]).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0), 
      this.add.image(135,20,'txt',this.txt[s[1]] ).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0), 
      this.add.image(155,20,'txt',this.txt[s[2]]).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0), 
      this.add.image(175,20,'txt',this.txt[s[3]]).setOrigin(0,0.5).setScale(0.5).setScrollFactor(0)
     ]
    
  } 

}
console.log("hiya")

import Phaser from './lib/phaser.js'

import Game from './scenes/game.js' 
import Gametwo from './scenes/gametwo.js' 
import Lv2 from './scenes/lv2.js' 
import Lv3 from './scenes/lv3.js' 
import GameOver from './scenes/GameOver.js' 

import BootScene from './scenes/BootScene.js'
import GameScene from './scenes/GameScene.js'
import Nxt from './scenes/Nxt.js'

import PreloaderScene from './scenes/PreloaderScene.js'
import TitleScene from './scenes/TitleScene.js'
import OptionsScene from './scenes/OptionsScene.js'
import CreditsScene from './scenes/CreditsScene.js'
import model from './config/Model.js'
import Button from './config/Button.js'

var sceneset = [Nxt , BootScene, PreloaderScene, OptionsScene, TitleScene, GameScene, Gametwo, Lv2, Lv3, GameOver, CreditsScene ] 


var isMobile = navigator.userAgent.indexOf("Mobile")

if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet")
}

if (isMobile == -1) {
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: sceneset 
    }
} else {
    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        scene: sceneset 
    }
}

var def = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT, 
    autoCenter : Phaser.Scale.CENTER_BOTH
    }, 
  width : window.innerWidth,
  height : window.innerHeight, 
  scene : sceneset, 
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
       },
      debug: false
        }
    }, 
    
  globals :{
    model, bgMusic: null
  } 
} 

export default new Phaser.Game(def) 
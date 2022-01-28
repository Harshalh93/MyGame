import Phaser from '../lib/phaser.js'
import Game from '../src/game.js'

export default new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT, 
    autoCenter : Phaser.Scale.CENTER_BOTH
    }, 
  width: 800,
  height: 600,
  scene : Game
}) 
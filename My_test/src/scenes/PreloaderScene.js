import Phaser from '../lib/phaser.js'

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader')
  }

  init () {
    this.readyCount = 0
  }

  preload () {
    // add logo image
    this.add.image(this.scale.width/2, this.scale.height/2, 'logo').setScale(0.45)

    // display progress bar
    var progressBar = this.add.graphics()
    var progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(this.scale.width *0.3, 410, 320, 50)

    var width = this.cameras.main.width
    var height = this.cameras.main.height
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 180,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })
    loadingText.setOrigin(0.5, 0.5)

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 150,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    })
    percentText.setOrigin(0.5, 0.5)

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 200,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    })
    assetText.setOrigin(0.5, 0.5)

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%')
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 410, 300 * value, 30)
    })

    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key)
    })

    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy()
      progressBox.destroy()
      loadingText.destroy()
      percentText.destroy()
      assetText.destroy()
      this.ready()
    }.bind(this))

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this)

    // load assets needed in our game
    this.load.image('blueButton1', 'assets/ui/blue_button02.png')
    this.load.image('blueButton2', 'assets/ui/blue_button03.png')
    this.load.image('phaserLogo', 'assets/logo.png')
    this.load.image('box', 'assets/ui/grey_box.png')
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png')
    this.load.image('upleft', 'assets/ui/upleft.png')
    this.load.image('upright', 'assets/ui/upright.png')
    this.load.image('bgsky', 'assets/sky.png')
    this.load.image('sky', 'assets/sky1.png')
    this.load.audio('bgMusic', ['assets/TownTheme.mp3'])
    
    this.load.atlasXML('all', 'assets/spritesheet.png', 'assets/spritesheet.xml')
    this.load.atlasXML('txt', 'assets/txt.png', 'assets/txt.xml')
    this.load.atlasXML('robot', 'assets/robot.png', 'assets/robot.xml')
    this.load.image('logo', 'assets/gd.png', 'assets/hrs.xml')
    
    this.zone = this.add.zone(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height)
    
   Phaser.Display.Align.In.Center(progressBar, this.zone)
   Phaser.Display.Align.In.Center(progressBox, this.zone)

    
    console.log('Preloader done')
  }

  ready () {
    this.scene.start('Options')
    this.readyCount = this.readyCount + 1
    if (this.readyCount === 2) {
      this.scene.start('Title')
    }
  }
}

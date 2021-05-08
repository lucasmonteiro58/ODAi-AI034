'use strict'

const path = require('@/assets/spritesheet.png').default
const audioInit = require('@/assets/audios/inicioloop2.wav')

// const path = null

function runBlock(context) {
  if (!context.isDev)
    window.onload = () => {
      const image = new Image()
      image.onload = isAssetReady
      image.src = path
    }
  else {
    window.onload = isAssetReady
    console.log(audioInit)
  }
  return false
}
function isAssetReady() {
  console.log('carregou imagem')
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('not-ready')

    console.log('terminou timout')
  }, 2400)
}

// ----------------------------------------------------------

export default runBlock

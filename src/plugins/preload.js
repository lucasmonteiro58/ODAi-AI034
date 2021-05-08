'use strict'

const path = require('@/assets/spritesheet.png').default
const audioInit = require('@/assets/audios/inicioloop2.wav')

console.log(audioInit)

// const path = null

function runBlock(context) {
  if (!context.isDev)
    window.onload = () => {
      const image = new Image()
      image.onload = carregarAudio
      image.src = path
    }
  else {
    window.onload = isAssetReady
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

function carregarAudio() {
  console.log('carregou audio')
  const audio = new Audio()
  audio.onload = isAssetReady
  audio.src = audioInit
}

export default runBlock

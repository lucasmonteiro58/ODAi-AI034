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
    simulate(document.getElementById('simulateClick'), 'click')
    console.log('terminou timout')
  }, 2400)
}

// ----------------------------------------------------------

function simulate(element, eventName) {
  const options = extend(defaultOptions, arguments[2] || {})
  let oEvent
  let eventType = null

  for (const name in eventMatchers) {
    if (eventMatchers[name].test(eventName)) {
      eventType = name
      break
    }
  }

  if (!eventType)
    throw new SyntaxError(
      'Only HTMLEvents and MouseEvents interfaces are supported'
    )

  if (document.createEvent) {
    oEvent = document.createEvent(eventType)
    if (eventType === 'HTMLEvents') {
      oEvent.initEvent(eventName, options.bubbles, options.cancelable)
    } else {
      oEvent.initMouseEvent(
        eventName,
        options.bubbles,
        options.cancelable,
        document.defaultView,
        options.button,
        options.pointerX,
        options.pointerY,
        options.pointerX,
        options.pointerY,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.button,
        element
      )
    }
    element.dispatchEvent(oEvent)
  } else {
    options.clientX = options.pointerX
    options.clientY = options.pointerY
    const evt = document.createEventObject()
    oEvent = extend(evt, options)
    element.fireEvent('on' + eventName, oEvent)
  }
  return element
}

function extend(destination, source) {
  for (const property in source) destination[property] = source[property]
  return destination
}

const eventMatchers = {
  HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
  MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
const defaultOptions = {
  pointerX: 0,
  pointerY: 0,
  button: 0,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
  bubbles: true,
  cancelable: true
}

export default runBlock

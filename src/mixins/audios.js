import { useSound } from '@vueuse/sound'

import botoes from '../assets/audios/botoes.wav'
import confirma from '../assets/audios/confirma.wav'
import correto from '../assets/audios/correto.wav'
import errado from '../assets/audios/errado.wav'
import popupfinal from '../assets/audios/popupfinal.wav'
import selecionar from '../assets/audios/selecionar.wav'

const audios = {
  setup() {
    const audioBotoes = useSound(botoes)
    const audioConfirma = useSound(confirma)
    const audioCorreto = useSound(correto)
    const audioErrado = useSound(errado)
    const audioFinal = useSound(popupfinal)
    const audioCracha = useSound(selecionar)
    return {
      audioBotoes,
      audioConfirma,
      audioCorreto,
      audioErrado,
      audioFinal,
      audioCracha
    }
  },
  methods: {
    audioBotoesPlay() {
      if (this.soundState) this.audioBotoes.play()
    },
    audioConfirmaPlay() {
      if (this.soundState) this.audioConfirma.play()
    },
    audioCorretoPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioCorreto.play()
      }, 500)
    },
    audioErradoPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioErrado.play()
      }, 500)
    },
    audioLoopStop() {
      this.audioLoop.stop()
    },
    audioFinalPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioFinal.play()
      }, 1000)
    },
    audioCorretoStop() {
      this.audioCorreto.stop()
    },
    audioErradoStop() {
      this.audioErrado.stop()
    },
    audioCrachaPlay() {
      if (this.soundState) this.audioCracha.play()
    }
  }
}

export default audios

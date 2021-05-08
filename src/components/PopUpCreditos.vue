<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop" @click.prevent="clickClose"></div>
    <div class="content">
      <div class="list-creditos">
        <div class="title">Créditos</div>
        <b>IMAGENS VETORIAIS </b>
        <p>
          Silhouette Skyline Illustration Background por rawpixel.com do
          Freepik.com
        </p>
        <p>Police Badges Colored Banner por macrovector do Freepik.com</p>
        <p>Office Worker Set Business por macrovector do Freepik.com</p>
        <p>
          Police Detectives File Mystery Investigation por pch.vector do
          Freepik.com
        </p>
        <p>Battery por Travis Avery do Noun Project</p>
        <p>Wifi por iconsmind.com do Noun Project</p>
        <p>Check por Robert Won do Noun Project</p>
        <p>Delete por Robert Won do Noun Project</p>
        <p>Sound por Adrien Coquet do Noun Project</p>
        <p class="last">Home por icongeek do Noun Project</p>
        <b>ÁUDIO</b>
        <p>Orchestral Victory Fanfare por Sheyvan do Freesound.org</p>
        <p>Mechanical Alert por Mixkit</p>
        <p>Pen Click and Release por Mixkit</p>
        <p>Quest Game Heavy Stomp por Mixkit</p>
        <p>Typewriter Return Bell por Mixkit</p>
        <p>Medium Size Crowd Applause por Mixkit</p>
      </div>
      <button class="btn roxo-button btn-fechar" @click.prevent="clickClose">
        <div class="text">Fechar</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpCreditos',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      showed: false
    }
  },
  watch: {
    isShowed(val, old) {
      if (!old && val) {
        this.showed = true
        this.showAnimation()
      } else if (old && !val) {
        this.showed = false
      }
    }
  },
  mounted() {
    if (this.isShowed) this.showed = true
    this.showAnimation()
  },
  beforeDestroy() {
    fadeOut(this.$el)
  },
  methods: {
    showAnimation() {
      fromTop(this.$el.lastChild)
    },
    clickClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-popup {
  font-size: 32px;
}
.pop-up {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  .backdrop {
    position: absolute;
    background-color: #00000070;
    width: 100%;
    height: 100%;
  }
  .content {
    width: 680px;
    height: 585px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px 0 0 0;
    background: #ffefd8;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list-creditos {
      width: 90%;
      text-align: center;
      line-height: 18px;
      .title {
        font-size: 32px;
        margin-top: -80px;
        margin-bottom: 30px;
        text-transform: uppercase;
      }
      .last {
        margin-bottom: 20px;
      }
      p {
        font-family: AnonimusRegular;
        text-transform: initial;
      }
    }
    .btn-fechar {
      position: absolute;
      bottom: 10px;
      margin-bottom: 30px;
    }
  }
}
</style>

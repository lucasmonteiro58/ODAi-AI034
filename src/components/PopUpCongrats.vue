<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content popup-final">
      <div class="title">MUITO BEM!</div>
      <div class="description">
        Você encontrou todos os infiltrados, e foi promovido para Agente de
        Campo! Aqui estão o seu crachá e o seu distintintivo! Sabia que podíamos
        contar com você!
      </div>
      <button
        class="btn roxo-button btn-tela-inicial"
        @click.prevent="clickInicio"
      >
        <div class="text">TELA INICIAL</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpCongrats',
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
    clickInicio() {
      this.$emit('inicio')
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
    position: relative;
    .title {
      font-size: 42px;
      color: #444;
      transform: rotate(-1.39deg);
      position: absolute;
      top: 20px;
      left: 60px;
    }
    .description {
      font-size: 23px;
      line-height: 23px;
      text-align: justify;
      color: #444444;
      width: 279px;
      position: absolute;
      top: 65px;
      left: 27px;
      font-family: AnonimusRegular;
      transform: rotate(-1.39deg);
    }

    .btn-tela-inicial {
      position: absolute;
      bottom: 35px;
      left: 82px;

      .text {
        font-size: 27px;
      }
    }
  }
}
</style>

<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content">
      <div v-if="isCorrect" class="popup-correto">
        <div class="text-popup" v-html="text"></div>
        <button
          class="btn roxo-button btn-continuar"
          @click.prevent="clickContinuar"
        >
          <div class="text">Continuar</div>
        </button>
      </div>
      <div v-else class="popup-errado">
        <div class="text-popup" v-html="text"></div>
        <button
          class="btn roxo-button btn-tentar-novo"
          @click.prevent="clickNovamente"
        >
          <div class="text">TENTAR DE NOVO</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpFeedback',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    },
    isCorrect: {
      type: Boolean,
      required: false,
      default: true
    },
    text: {
      type: String,
      required: false,
      default:
        '<p class="center-text">Calma, sem pânico!</p> Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>comprimento</b>! Vamos lá?'
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
    clickContinuar() {
      this.$emit('continuar')
    },
    clickNovamente() {
      this.$emit('novamente')
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
    .popup-errado {
      display: flex;
      justify-content: center;
      .text-popup {
        text-align: justify;
        font-size: 23px;
        padding-left: 20px;
        padding-right: 30px;
        font-family: AnonimusRegular;
        position: absolute;
        bottom: 102px;
      }

      .btn-tentar-novo {
        position: absolute;
        bottom: 28px;

        .text {
          font-size: 23px;
        }
      }
    }

    .popup-correto {
      display: flex;
      justify-content: center;
      .text-popup {
        text-align: justify;
        font-size: 21px;
        padding-left: 20px;
        padding-right: 30px;
        font-family: AnonimusRegular;
        position: absolute;
        bottom: 90px;
        line-height: 21px;
      }

      .btn-continuar {
        position: absolute;
        bottom: 26px;
      }
    }
  }
}
</style>

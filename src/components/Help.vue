<template>
  <section class="container">
    <div class="backdrop"></div>
    <div class="celular-help" :class="helps[index].class">
      <div class="title">CHEFÃO</div>
      <div
        class="text1"
        :class="helps[index].class"
        v-html="helps[index].text1"
      ></div>
      <div
        class="text2"
        :class="helps[index].class"
        v-html="helps[index].text2"
      ></div>
      <div class="button-section">
        <button class="btn-avancar z30" @click="avancarClick">
          {{ nxtBtn }}
        </button>
        <button v-if="index !== 0" class="btn-voltar z30" @click="voltarClick">
          VOLTAR
        </button>
      </div>
      <button class="btn-sair z30" @click.prevent="clickClose">SAIR</button>
    </div>
  </section>
</template>
<script>
import { helps } from '../consts/help'
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      helps
    }
  },
  computed: {
    nxtBtn() {
      if (this.index === 2) return 'COMEÇAR'
      else return 'AVANÇAR'
    }
  },
  mounted() {},
  methods: {
    voltarClick() {
      this.$emit('voltar')
    },
    clickClose() {
      this.$emit('close')
    },
    avancarClick() {
      this.$emit('avancar')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 19;
  .backdrop {
    position: absolute;
    background-color: #000000a1;
    width: 100%;
    height: 100%;
  }

  .celular-help {
    position: absolute;
    padding-top: 86px;
    padding-left: 29px;
    box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);

    &.class-help0 {
      left: 360px;
      top: 181px;
    }
    &.class-help1 {
      left: 280px;
      top: 96px;
    }
    &.class-help2 {
      left: 120px;
      top: 125px;
    }

    .title {
      position: absolute;
      font-size: 30px;
      color: white;
      top: 38px;
      left: 99px;
    }

    .text1,
    .text2 {
      background-color: #4a53e1;
      border-radius: 20px 20px 20px 0px;
      color: white;
      font-size: 16px;
      line-height: 16px;
      padding-top: 8px;
      padding-left: 10px;
      padding-right: 5px;
      font-family: AnonimusRegular;
      width: 241px;
    }

    .text2 {
      border-radius: 0px 20px 20px 20px;
      margin-top: 10px;
    }

    .text1 {
      &.class-help0 {
        height: 100px;
      }

      &.class-help1 {
        height: 100px;
      }

      &.class-help2 {
        height: 69px;
      }
    }

    .text2 {
      &.class-help0 {
        height: 132px;
      }

      &.class-help1 {
        height: 132px;
      }

      &.class-help2 {
        height: 161px;
      }
    }

    .btn-sair {
      width: 43px;
      height: 43px;
      background: #e31e33;
      color: white;
      border-radius: 50%;
      position: absolute;
      bottom: 18px;
      left: 128px;

      &:hover {
        background: #e03d4d;
      }
    }

    .button-section {
      position: absolute;
      bottom: 87px;
      .btn-avancar,
      .btn-voltar {
        background: #dce0e7;
        box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
        border-radius: 20px 20px 0px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 241px;
        height: 53px;
        font-size: 22px;
        color: #121212;
        position: absolute;
        bottom: 50px;

        &:hover {
          background: #bcbfc5;
        }
      }

      .btn-voltar {
        height: 37px;
        border-radius: 20px 0px 20px 20px;
        bottom: 2px;
      }
    }
  }
}
.z30 {
  z-index: 30;
}
</style>

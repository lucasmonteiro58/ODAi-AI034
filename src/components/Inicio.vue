<template>
  <section class="container">
    <div class="inicio bg-inicio">
      <div class="imagem-inicio imageminicial">
        <div class="text-inicio">
          Vários espiões se infiltraram no Departamento de Agentes Especiais.
          Sorte que o Chefão é esperto e criou um código para identificar os
          intrusos. Contamos com a sua ajuda para encontrar os impostores!
        </div>
        <button
          class="btn red-button iniciar-btn"
          @click.prevent="clickIniciar"
        >
          <div class="text">Iniciar</div>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {},
  methods: {
    clickIniciar() {
      this.$emit('iniciar')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  width: 1024px;
  height: 768px;
  z-index: 9;

  .inicio {
    @include flex-center;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;

    .imagem-inicio {
      margin-top: 10px;
      position: relative;

      .text-inicio {
        position: absolute;
        width: 276.59px;
        height: 233.93px;
        left: 20px;
        top: 163.71px;
        font-size: 21px;
        line-height: 21px;
        transform: rotate(-1.39deg);
      }

      .iniciar-btn {
        position: absolute;
        bottom: 75px;
        left: 265px;
      }
    }
  }
}
</style>

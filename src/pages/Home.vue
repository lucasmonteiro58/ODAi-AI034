<template>
  <section class="container">
    <div class="left-content">
      <div class="btn-section-menu">
        <button class="btn primary">
          <div class="icon ico-inicio"></div>
          <div class="text">Início</div>
        </button>
        <button class="btn primary">
          <div class="icon ico-ereiniciar"></div>
          <div class="text t11">Reiniciar</div>
        </button>
      </div>
      <div class="help-celular">
        <div
          :class="hoverCelular ? 'celular-roxo' : 'celular'"
          @mouseover="hoverCelular = true"
          @mouseout="hoverCelular = false"
        ></div>
      </div>
      <div class="btn-section-menu">
        <button class="btn primary">
          <div class="icon ico-som-on"></div>
          <div class="text">Som</div>
        </button>
        <button class="btn primary">
          <div class="icon ico-creditos"></div>
          <div class="text t11">Créditos</div>
        </button>
      </div>
    </div>
    <div class="right-content">
      <div class="top-title cabecalho">
        <div class="title">QUEM É O INTRUSO</div>
        <div class="subtitle">
          Um dos agentes secretos é um espião. Descubra o código utilizado e
          encontre o infiltrado!
        </div>
      </div>
      <div class="identidades-section"></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      hoverCelular: false
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  padding: 40px;

  .left-content {
    width: 221px;
    height: 100%;

    .help-celular {
      cursor: pointer;
      margin-top: 69px;
      margin-bottom: 48px;
    }

    .btn-section-menu {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
  }

  .right-content {
    width: 724px;
    height: 100%;

    .identidades-section {
      height: 466px;
    }
  }
}
.top-title {
  .title {
    font-size: 59px;
    color: #444444;
    margin-left: 20px;
    padding-top: 18px;
  }
  .subtitle {
    font-size: 20px;
    padding-top: 0px;
    width: 400px;
    text-align: right;
    margin-left: 134px;
  }
}
</style>

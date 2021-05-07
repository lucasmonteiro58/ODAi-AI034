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
      <div class="identidade-content">
        <div class="identidades-section">
          <div
            v-for="actual in actualOptions"
            :key="actual.id"
            class="carteira-id cracha"
          >
            <div class="image-id" :class="actual.image"></div>
            <div class="nome-id">{{ actual.nome }}</div>
          </div>
        </div>
      </div>

      <div class="question-btn-section">
        <div class="button-section">
          <button
            v-for="question in questions"
            :key="question.id"
            class="btn item"
            :class="{
              complete: question.isComplete,
              selected: question.isSelected
            }"
            @click.prevent="changeEl(question)"
          >
            <div class="text">{{ question.letra }}</div>
            <div class="check-complete"></div>
          </button>
        </div>
        <button class="btn red-button confirmar-btn">
          <div class="text">Confirma</div>
        </button>
        <div class="pontos">
          <div class="desc">PONTOS</div>
          <div class="value">00</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { questions } from '../consts/home'
export default {
  data() {
    return {
      hoverCelular: false,
      questions,
      index: 0
    }
  },
  computed: {
    actualQuestion() {
      return this.questions[this.index]
    },
    actualOptions() {
      return this.actualQuestion.options
    }
  },
  methods: {
    changeEl(el) {
      this.deselectAll()
      el.isSelected = true
      this.index = el.id
    },
    deselectAll() {
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].isSelected = false
      }
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

    .identidade-content {
      height: 466px;
      padding-top: 35px;
      .identidades-section {
        display: grid;
        width: 305px;
        row-gap: 40px;
        column-gap: 60px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        .carteira-id {
          position: relative;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);

          &:hover {
            box-shadow: inset 0px 0px 0px 5px #2500e0;
          }

          .image-id {
            position: absolute;
            bottom: 84px;
            left: 10px;
          }

          .nome-id {
            position: absolute;
            width: 282px;
            height: 64px;
            top: 99px;
            left: 7px;
            text-transform: uppercase;
            font-size: 42px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .question-btn-section {
      margin-left: 20px;
      display: flex;
      .button-section {
        display: flex;
        justify-content: space-between;
        width: 301px;
      }

      .confirmar-btn {
        margin-left: 101px;
      }

      .pontos {
        width: 61px;
        height: 67px;
        background: #8083ab;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 21px;
        .desc {
          color: #f8f8f8;
          font-size: 16px;
        }
        .value {
          font-size: 39px;
          color: #f8f8f8;
        }
      }
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

<template>
  <section class="container">
    <div class="left-content">
      <div class="btn-section-menu">
        <button
          class="btn primary"
          :class="'index-help' + indexHelp"
          @click.prevent="clickInicio"
        >
          <div class="icon ico-inicio"></div>
          <div class="text">Início</div>
        </button>
        <button
          class="btn primary"
          :class="'index-help' + indexHelp"
          @click.prevent="clickReiniciar"
        >
          <div class="icon ico-ereiniciar"></div>
          <div class="text t11">Reiniciar</div>
        </button>
      </div>
      <div class="help-celular">
        <div
          :class="hoverCelular ? 'celular-roxo' : 'celular'"
          @mouseover="hoverCelular = true"
          @mouseout="hoverCelular = false"
          @click.prevent="clickOpenHelp"
        >
          Ajuda
        </div>
      </div>
      <div class="btn-section-menu">
        <button
          class="btn primary zindex10"
          :class="'index-help' + indexHelp"
          @click.prevent="toogleSound"
        >
          <div class="icon" :class="soundClass"></div>
          <div class="text">Som</div>
        </button>
        <button
          class="btn primary zindex10"
          :class="'index-help' + indexHelp"
          @click.prevent="openCreditos"
        >
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
            v-for="(actual, i) in actualOptions"
            :key="actual.id"
            class="carteira-id"
            :class="[
              actual.image === IDCrachaSelect ? 'cracha-selected' : 'cracha',
              i === 1 || i == 3 ? 'index-help' + indexHelp : ''
            ]"
            @click.prevent="clickCracha(actual)"
          >
            <div class="image-id" :class="actual.image"></div>
            <div class="nome-id">{{ actual.nome }}</div>
          </div>
        </div>
      </div>

      <div class="question-btn-section">
        <div class="button-section" :class="'index-help' + indexHelp">
          <button
            v-for="question in questions"
            :key="question.id"
            class="btn item"
            :class="{
              complete: question.isComplete,
              selected: question.isSelected
            }"
            @click.prevent="clickChangeEl(question)"
          >
            <div class="text">{{ question.letra }}</div>
            <div class="check-complete"></div>
          </button>
        </div>
        <button
          :disabled="!selectCracha"
          class="btn red-button confirmar-btn"
          :class="'index-help' + indexHelp"
          @click.prevent="clickConfirmar"
        >
          <div class="text">Confirma</div>
        </button>
        <div class="pontos" :class="'index-help' + indexHelp">
          <div class="desc">PONTOS</div>
          <div class="value">{{ textPontuation }}</div>
        </div>
      </div>
    </div>
    <PopUpFeedback
      v-if="showPopUpFeedback"
      :is-showed="showPopUpFeedback"
      :text="textFeedback"
      :is-correct="typeFeedback"
      @novamente="clickNovamente"
      @continuar="clickContinuar"
    ></PopUpFeedback>
    <PopUpCongrats
      v-if="showPopUpCongrats"
      :is-showed="showPopUpCongrats"
      @inicio="clickInicio"
    ></PopUpCongrats>
    <div
      v-if="showHelp"
      class="protection"
      :class="'index-help' + indexHelp"
    ></div>
    <Help
      v-if="showHelp"
      :index="indexHelp"
      @voltar="clickVoltarHelp"
      @close="clickCloseHelp"
      @avancar="clickAvancarHelp"
    ></Help>

    <Inicio v-if="showInicio" @iniciar="clickIniciar"></Inicio>
    <PopUpCreditos
      v-if="showCreditos"
      :is-showed="showCreditos"
      @close="closeCreditos"
    ></PopUpCreditos>
  </section>
</template>
<script>
import { questions } from '../consts/home'
import PopUpFeedback from '../components/PopUpFeedback'
import PopUpCongrats from '../components/PopUpCongrats.vue'
import Inicio from '../components/Inicio.vue'
import PopUpCreditos from '../components/PopUpCreditos.vue'
import audios from '../mixins/audios'
export default {
  components: { PopUpFeedback, PopUpCongrats, Inicio, PopUpCreditos },
  mixins: [audios],
  data() {
    return {
      hoverCelular: false,
      questions,
      index: 0,
      selectCracha: null,
      IDCrachaSelect: '',
      showPopUpFeedback: false,
      showPopUpCongrats: false,
      showCreditos: false,
      showHelp: false,
      showInicio: true,
      textFeedback: '',
      typeFeedback: true,
      pontuation: 0,
      indexHelp: 0,
      preventClickConfirma: true
    }
  },
  computed: {
    actualQuestion() {
      return this.questions[this.index]
    },
    actualOptions() {
      return this.actualQuestion.options
    },
    textPontuation() {
      if (this.pontuation < 9) {
        return '0' + this.pontuation
      } else return this.pontuation
    },
    soundState() {
      return this.$store.state.soundState
    },
    soundClass() {
      if (this.soundState) return 'ico-som-on'
      else return 'ico-sound-off'
    }
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-cidade')
    this.clickChangeEl(this.actualQuestion)
  },
  methods: {
    clickChangeEl(el) {
      this.audioBotoesPlay() // audio
      this.deselectAll()
      el.isSelected = true
      this.index = el.id
    },
    clickVoltarHelp() {
      this.audioBotoesPlay() // audio
      this.indexHelp--
    },
    clickAvancarHelp() {
      this.audioBotoesPlay() // audio
      if (this.indexHelp === 2) {
        this.showHelp = false
        this.indexHelp = 0
      } else {
        this.indexHelp++
      }
    },
    clickCloseHelp() {
      this.audioBotoesPlay() // audio
      this.indexHelp = 0
      this.showHelp = false
    },
    clickOpenHelp() {
      this.audioBotoesPlay() // audio
      this.indexHelp = 0
      this.showHelp = true
    },
    openCreditos() {
      this.audioBotoesPlay()
      this.showCreditos = true
    },
    closeCreditos() {
      this.audioBotoesPlay() // audio
      this.showCreditos = false
    },
    toogleSound() {
      this.audioBotoesPlay() // audio
      this.$store.commit('changeSoundState', !this.soundState)
    },
    deselectAll() {
      // nao colocar som
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].isSelected = false
      }
      this.IDCrachaSelect = ''
      this.selectCracha = null
    },
    clickCracha(el) {
      this.audioCrachaPlay() // audio
      this.IDCrachaSelect = el.image
      this.selectCracha = el
    },
    clickConfirmar() {
      this.audioConfirmaPlay() // audio
      this.preventClickConfirma = false
      if (this.selectCracha.isCorrect) {
        this.pontuation = this.pontuation + 5
        this.textFeedback = this.actualQuestion.textCorrect
        this.typeFeedback = true
        setTimeout(() => {
          this.showPopUpFeedback = true
          this.audioCorretoPlay() // audio
          this.preventClickConfirma = true
        }, 500)
      } else {
        this.textFeedback = this.actualQuestion.textIncorrect
        this.typeFeedback = false
        setTimeout(() => {
          this.showPopUpFeedback = true
          this.audioErradoPlay() // audio
        }, 500)
      }
    },
    clickNovamente() {
      this.audioErradoStop()
      this.audioBotoesPlay() // audio

      this.showPopUpFeedback = false
    },
    clickContinuar() {
      // nao colocar som aqui
      this.audioCorretoStop()
      this.showPopUpFeedback = false
      this.questions[this.index].isComplete = true
      this.getNextQuestion()
    },
    getNextQuestion() {
      // nao colocar som aqui
      const next = this.questions.filter((el) => el.isComplete === false)
      if (next[0]) {
        this.clickChangeEl(next[0])
      } else {
        this.showPopUpCongrats = true
        this.audioFinalPlay()
      }
    },
    clickInicio() {
      this.audioBotoesPlay() // audio
      this.showPopUpCongrats = false
      this.resetAtividade()
      this.showInicio = true
    },
    clickIniciar() {
      this.audioBotoesPlay() // audio
      this.showInicio = false
      this.showHelp = true
    },
    resetAtividade() {
      // nao colocar som
      this.deselectAll()
      this.index = 0
      this.pontuation = 0
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].isComplete = false
      }
    },
    clickReiniciar() {
      // nao por som
      this.resetAtividade()
      this.clickChangeEl(this.actualQuestion)
    }
  }
}
</script>
<style lang="scss" scoped>
.zindex10 {
  z-index: 10;
}
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
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 29px;
        text-transform: uppercase;
        padding-right: 10px;
        padding-bottom: 15px;

        &:hover {
          color: white;
        }
      }
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

          &.index-help1 {
            z-index: 20;
          }

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

        &.index-help1 {
          button {
            z-index: 20;
          }
        }
      }

      .confirmar-btn {
        margin-left: 101px;

        &.index-help1 {
          z-index: 20;
        }
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

        &.index-help1 {
          z-index: 20;
        }
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

.protection {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 30;

  &.index-help0 {
    display: none;
  }

  &.index-help1 {
    clip-path: polygon(
      0 0,
      100% 0%,
      100% 99%,
      59% 100%,
      60% 0,
      15% 0,
      15% 82%,
      60% 82%,
      68% 100%,
      0 100%
    );
  }
  &.index-help2 {
    clip-path: polygon(0 0, 12% 0, 12% 100%, 0% 100%);
  }
}
</style>

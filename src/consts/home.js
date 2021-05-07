export const questions = [
  {
    id: 0,
    letra: 'a',
    options: [
      {
        id: 'quilometro',
        nome: 'quilômetro',
        image: 'a-quilometro',
        isCorrect: false
      },
      {
        id: 'metro',
        nome: 'metro',
        image: 'a-metro',
        isCorrect: false
      },
      {
        id: 'litro',
        nome: 'litro',
        image: 'a-litro',
        isCorrect: true
      },
      {
        id: 'regua',
        nome: 'régua',
        image: 'a-regua',
        isCorrect: false
      }
    ],
    correctOption: 'litro',
    textCorrect:
      'Parabéns, você acertou! <b>LITRO</b> é uma unidade de medida de <b>capacidade</b>, não de comprimento!',
    textIncorrect:
      'Calma, sem pânico! Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>comprimento</b>! Vamos lá?'
  },
  {
    id: 0,
    letra: 'b',
    options: [
      {
        id: 'termometro',
        nome: 'termômetro',
        image: 'b-termometro',
        isCorrect: true
      },
      {
        id: 'grama',
        nome: 'grama',
        image: 'b-grama',
        isCorrect: false
      },
      {
        id: 'miligrama',
        nome: 'miligrama',
        image: 'b-miligrama',
        isCorrect: false
      },
      {
        id: 'balanca',
        nome: 'balança',
        image: 'b-balanca',
        isCorrect: false
      }
    ],
    correctOption: 'termometro',
    textCorrect:
      'É isso aí! <b>TERMÔMETRO</b> é um instrumento usado para medir <b>temperatura</b>, não massa.',
    textIncorrect:
      'Não tem problema! Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>massa</b>! Tente de novo!'
  },
  {
    id: 0,
    letra: 'c',
    options: [
      {
        id: 'litro',
        nome: 'litro',
        image: 'c-litro',
        isCorrect: false
      },
      {
        id: 'quilograma',
        nome: 'quilograma',
        image: 'c-quilograma',
        isCorrect: true
      },
      {
        id: 'capacidade',
        nome: 'capacidade',
        image: 'c-capacidade',
        isCorrect: false
      },
      {
        id: 'mililitro',
        nome: 'mililitro',
        image: 'c-mililitro',
        isCorrect: false
      }
    ],
    correctOption: 'quilograma',
    textCorrect:
      'Na mosca! <b>QUILOGRAMA</b> é uma unidade de medida de <b>massa</b>, não de capacidade.',
    textIncorrect:
      'Observe melhor! Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>capacidade</b>! Vamos lá?'
  },
  {
    id: 0,
    letra: 'd',
    options: [
      {
        id: 'celcius',
        nome: 'celcius',
        image: 'd-celcius',
        isCorrect: true
      },
      {
        id: 'segundo',
        nome: 'segundo',
        image: 'd-segundo',
        isCorrect: false
      },
      {
        id: 'minuto',
        nome: 'minuto',
        image: 'd-minuto',
        isCorrect: false
      },
      {
        id: 'relogio',
        nome: 'relogio',
        image: 'd-relogio',
        isCorrect: false
      }
    ],
    correctOption: 'celcius',
    textCorrect:
      'Muito bem, agente! <b>CELCIUS</b> é uma unidade de medida de <b>temperatura</b>, não de tempo!',
    textIncorrect:
      'Calma, sem pânico! Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>tempo</b>! Mais uma vez!'
  }
]

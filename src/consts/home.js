export const questions = [
  {
    id: 0,
    letra: 'a',
    isComplete: false,
    isSelected: true,
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
      '<p class="center-text">Parabéns, você acertou!</p> <b>LITRO</b> é uma unidade de medida de <b>capacidade</b>, não de comprimento!',
    textIncorrect:
      '<p class="center-text">Calma, sem pânico!</p> Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>comprimento</b>! Vamos lá?'
  },
  {
    id: 1,
    letra: 'b',
    isComplete: false,
    isSelected: false,
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
      '<p class="center-text">É isso aí!</p> <b>TERMÔMETRO</b> é um instrumento usado para medir <b>temperatura</b>, não massa.',
    textIncorrect:
      '<p class="center-text"> Não tem problema!</p> Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>massa</b>! Tente de novo!'
  },
  {
    id: 2,
    letra: 'c',
    isComplete: false,
    isSelected: false,
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
        image: 'c-militro',
        isCorrect: false
      }
    ],
    correctOption: 'quilograma',
    textCorrect:
      '<p class="center-text">Na mosca! </p><b>QUILOGRAMA</b> é uma unidade de medida de <b>massa</b>, não de capacidade.',
    textIncorrect:
      '<p class="center-text">Observe melhor!</p> Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>capacidade</b>! Vamos lá?'
  },
  {
    id: 3,
    letra: 'd',
    isComplete: false,
    isSelected: false,
    options: [
      {
        id: 'celsius',
        nome: 'celsius',
        image: 'd-celsius',
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
        image: 'd-minuti',
        isCorrect: false
      },
      {
        id: 'relogio',
        nome: 'relógio',
        image: 'd-relogio',
        isCorrect: false
      }
    ],
    correctOption: 'celsius',
    textCorrect:
      '<p class="center-text">Muito bem, agente!</p> <b>CELSIUS</b> é uma unidade de medida de <b>temperatura</b>, não de tempo!',
    textIncorrect:
      '<p class="center-text">Calma, sem pânico! </p>Procure por uma palavra que <b>não</b> tenha relação com medidas de <b>tempo</b>! Mais uma vez!'
  }
]

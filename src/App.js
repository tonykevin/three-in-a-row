import { Mark } from './components'

function App() {
  const elements = document.querySelectorAll('#mark')
  const styles = getComputedStyle(document.documentElement)
  const markList = []
  let currentMark = ''

  const getAlternativeColor = function () {
    return styles.getPropertyValue('--color-game-mark1')
  }

  const toggleMark = function (element) {
    if (!currentMark || currentMark === 'O') {
      return (currentMark = 'X')
    }
    element.style.setProperty('--color-game-mark', getAlternativeColor())
    return (currentMark = 'O')
  }

  const captureCoordinate = function (coordinate) {
    console.log(coordinate)
  }

  const initializeGame = function () {
    elements.forEach(function (element) {
      let mark = new Mark({
        element,
        captureCoordinate,
        toggleMark,
      })
      markList.push(mark)
    })

    let aux = 0
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        markList[aux].coordinate.x = j
        markList[aux].coordinate.y = i
        aux++
      }
    }
  }

  initializeGame()
}

export default App

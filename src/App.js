import { Mark } from './components'

function App() {
  const elements = document.querySelectorAll('#mark')
  const styles = getComputedStyle(document.documentElement)
  const markList = []
  let currentMark = ''

  const setMarkColor = function (currentMark) {
    if (currentMark !== 'X') {
      return styles.getPropertyValue('--color-game-mark1')
    }
  }

  const toggleMark = function () {
    if (!currentMark || currentMark === 'O') {
      return (currentMark = 'X')
    }
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
        setMarkColor,
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

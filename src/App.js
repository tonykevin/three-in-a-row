import { Mark } from './components'

function App() {
  const elements = document.querySelectorAll('#mark')
  const styles = getComputedStyle(document.documentElement)
  const markList = []
  let currentMark = ''
  let clickNumbers = 0

  const getColor = function (color) {
    return styles.getPropertyValue(color)
  }

  const toggleColor = function (element, color) {
    element.style.setProperty('--color-game-mark', getColor(color))
  }

  const getClickNumbers = function () {
    return clickNumbers++
  }

  const toggleMark = function (element) {
    if (!currentMark || currentMark === 'O') {
      toggleColor(element, '--color-game-mark')
      return (currentMark = 'X')
    }
    toggleColor(element, '--color-game-mark1')
    return (currentMark = 'O')
  }

  const captureCoordinate = function (coordinate) {
    return coordinate
  }

  const initializeGame = function () {
    elements.forEach(function (element) {
      const mark = new Mark({
        element,
        captureCoordinate,
        getClickNumbers,
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

  const removeMarks = function (marks) {
    marks.forEach(function (element) {
      element.removeMark()
    })
  }

  const handleResetButton = function (e) {
    e.preventDefault()
    currentMark = ''
    clickNumbers = 0
    removeMarks(markList)
  }

  const resetButton = document.getElementById('resetButton')
  resetButton.addEventListener('click', handleResetButton)

  initializeGame()
}

export default App

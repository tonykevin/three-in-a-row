import { Mark } from './components'

function App() {
  const elements = document.querySelectorAll('#mark')
  const markList = []

  const captureCoordinate = function (coordinate) {
    console.log(coordinate)
  }

  // Initialize the game
  elements.forEach(function (element) {
    let mark = new Mark({ element, captureCoordinate })
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

  //Add marks to the game
}

export default App

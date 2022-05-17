import { Mark } from './components'

function App() {
  const elements = document.querySelectorAll('#mark')
  const markList = []
  const userMarks = []

  const getUserMarks = function (coordinate) {
    userMarks.push(coordinate)
  }

  elements.forEach(function (element) {
    let mark = new Mark(element, 'x', getUserMarks)
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
  console.log(userMarks)
}

export default App

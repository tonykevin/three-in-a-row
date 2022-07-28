import { locateCoordinate } from './locateCoordinate'

function solveGame({ clickNumbers, markData, playerMarks }) {
  const isFirstClick = clickNumbers === 1
  if (isFirstClick) {
    if (markData.symbol === 'X') {
      playerMarks.first.push(markData)
    }

    playerMarks.second.push(markData)
  }

  console.log(locateCoordinate(markData.coordinate))
}

export default solveGame

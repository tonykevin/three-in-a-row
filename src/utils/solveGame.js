import { isDiagonalList } from './utils'

function solveGame({ currentMark, playerMarks }) {
  const listName = currentMark.symbol === 'X' ? 'first' : 'second'
  const coordinateList = playerMarks[listName]

  coordinateList.push(currentMark.coordinate)

  const hasThreeCoords = coordinateList.length === 3

  if (hasThreeCoords) {
    // console.log(isVerticalList(coordinateList))
    // console.log(isHorizontalList(coordinateList))
    console.log(isDiagonalList(coordinateList))
  }
}

export default solveGame

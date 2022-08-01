import { isVerticalList, isHorizontalList } from './utils'

function solveGame({ currentMark, playerMarks }) {
  const listName = currentMark.symbol === 'X' ? 'first' : 'second'
  const currentList = playerMarks[listName]

  currentList.push(currentMark)

  const hasThreeCoords = currentList.length === 3

  if (hasThreeCoords) {
    console.log(isVerticalList(currentList))
    console.log(isHorizontalList(currentList))
  }
}

export default solveGame

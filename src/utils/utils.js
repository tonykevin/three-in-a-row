export function locateCoordinate(coordinate) {
  if (
    ((coordinate.x === 1 || coordinate.x === 3) &&
      (coordinate.y === 1 || coordinate.y === 3)) ||
    (coordinate.x === 3 && coordinate.y === 3)
  ) {
    return 'corner'
  }

  if (coordinate.x === 2 && coordinate.y === 2) {
    return 'center'
  }

  return 'side'
}

export function isVerticalList(list) {
  let firstCoord = {}
  const matches = []
  let i = 0
  let response = true

  list.forEach(({ coordinate }, index) => {
    if (!index) {
      firstCoord = coordinate
    } else {
      matches.push(firstCoord.x === coordinate.x)
    }
    console.log(index, firstCoord, coordinate)
  })

  while (i < matches.length) {
    response = response && matches[i]
    if (!response) {
      break
    }
    i++
  }

  return response
}

export function isHorizontalList(list) {
  let firstCoord = {}
  const matches = []
  let i = 0
  let response = true

  list.forEach(({ coordinate }, index) => {
    if (!index) {
      firstCoord = coordinate
    } else {
      matches.push(firstCoord.y === coordinate.y)
    }
    console.log(index, firstCoord, coordinate)
  })

  while (i < matches.length) {
    response = response && matches[i]
    if (!response) {
      break
    }
    i++
  }

  return response
}

export function isDiagonalList(list) {
  let i = 0
  let response = false
  const centerCoord = Math.round(list.length / 2)

  while (i < list.length) {
    if (
      list[i].coordinate.x === centerCoord &&
      list[i].coordinate.y === centerCoord
    ) {
      response = true
      i = 0
      break
    }
    i++
  }

  if (!response) {
    return response
  }

  for (const { coordinate } of list) {
    if (coordinate.x !== coordinate.y) {
      response = false
      break
    }
  }

  return response
}

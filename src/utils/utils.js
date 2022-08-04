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
  let firstCoordX = 0
  const matches = []
  let i = 0
  let response = true

  list.forEach(({ x }, index) => {
    if (!index) {
      firstCoordX = x
    } else {
      matches.push(firstCoordX === x)
    }
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
  let firstCoordY = 0
  const matches = []
  let i = 0
  let response = true

  list.forEach(({ y }, index) => {
    if (!index) {
      firstCoordY = y
    } else {
      matches.push(firstCoordY === y)
    }
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
  let response = false

  const centerCoord = Math.round(list.length / 2)

  sortCoordinateList(list)

  for (let i = 0; i < list.length; i++) {
    if (list[i].x === centerCoord && list[i].y === centerCoord) {
      response = true
      break
    }
  }

  if (!response) {
    return response
  }

  for (const { x, y } of list) {
    if (x !== y) {
      response = false
      break
    }
  }

  return response
}

export function sortCoordinateList(list, coord = 'x') {
  let aux = 0
  let j = 0
  for (let i = 0; i < list.length; i++) {
    aux = list[i]
    j = i - 1
    while (j >= 0 && aux[coord] < list[j][coord]) {
      list[j + 1] = list[j]
      j--
    }
    list[j + 1] = aux
  }

  return list
}

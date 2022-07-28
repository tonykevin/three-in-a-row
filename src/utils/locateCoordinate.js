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

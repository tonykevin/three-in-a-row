function Mark({ element, captureCoordinate, toggleMark } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }

  this.setMarkColor = function (currentMark) {
    if (currentMark !== 'X') {
      return '#55b740'
    }
  }

  this.updateMark = function () {
    if (!this.element.innerText) {
      const currentMark = toggleMark()
      const markColor = this.setMarkColor(currentMark)

      if (markColor) {
        this.element.style.setProperty('--color-game-mark', markColor)
      }

      this.element.innerText = currentMark

      captureCoordinate(this.coordinate)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}
1
export default Mark

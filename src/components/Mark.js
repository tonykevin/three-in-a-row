function Mark({ element, captureCoordinate, setMarkColor, toggleMark } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }

  this.removeMark = function () {
    if (this.element.innerText) {
      this.element.innerText = ''
    }
  }

  this.updateMark = function () {
    if (!this.element.innerText) {
      const currentMark = toggleMark()
      const markColor = setMarkColor(currentMark)

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

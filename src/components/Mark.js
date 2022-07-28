function Mark({
  element,
  captureCoordinate,
  getClickNumbers,
  toggleMark,
} = {}) {
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
    getClickNumbers()
    if (!this.element.innerText) {
      const currentMark = toggleMark(this.element)
      this.element.innerText = currentMark
      captureCoordinate(this.coordinate)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}

export default Mark

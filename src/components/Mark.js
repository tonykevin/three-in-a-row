function Mark({ element, captureMark, getClickNumbers, toggleMark } = {}) {
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
      captureMark({ coordinate: this.coordinate, symbol: currentMark })
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}

export default Mark

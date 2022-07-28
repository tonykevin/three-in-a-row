function Mark({ element, captureMark, getClickNumbers, toggleMark } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }
  this.symbol = ''

  this.removeMark = function () {
    if (this.element.innerText) {
      this.element.innerText = ''
    }
  }

  this.updateMark = function () {
    getClickNumbers()
    if (!this.element.innerText) {
      this.symbol = toggleMark(this.element)
      this.element.innerText = this.symbol
      captureMark(this)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}

export default Mark

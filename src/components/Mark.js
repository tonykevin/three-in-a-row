function Mark({ element = {}, symbol = '' } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }
  this.symbol = symbol

  this.updateSymbol = function () {
    if (!this.element.innerText) {
      this.element.innerText = 'X'
    }
    return this.element.innerText
  }.bind(this)
}

export default Mark

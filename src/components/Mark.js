function Mark(element = {}, symbol = '', getUserMarks) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }
  this.symbol = symbol

  this.updateElement = function () {
    if (!this.element.innerText) {
      this.element.innerText = this.symbol
      getUserMarks(this.coordinate)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateElement)
}

export default Mark

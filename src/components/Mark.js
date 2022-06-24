function Mark({ element, captureCoordinate } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }

  this.updateMark = function () {
    if (!this.element.innerText) {
      this.element.innerText = 'X'
      captureCoordinate(this.coordinate)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}
1
export default Mark

function Mark({ element, captureCoordinate, toggleMark } = {}) {
  this.element = element
  this.coordinate = {
    x: 0,
    y: 0,
  }

  this.updateMark = function () {
    if (!this.element.innerText) {
      this.element.innerText = toggleMark()
      captureCoordinate(this.coordinate)
    }
  }.bind(this)

  this.element.addEventListener('click', this.updateMark)
}
1
export default Mark

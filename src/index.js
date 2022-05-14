import './index.css'

function Mark(tag = {}, coordinate = { x: 0, y: 0 }, symbol = '') {
  this.tag = tag
  this.coordinate = coordinate
  this.symbol = symbol

  this.addSymbol = function () {
    this.symbol = 'X'
    this.updateTag()
  }

  this.updateTag = function () {
    if (!this.tag.innerText) {
      this.tag.innerText = this.symbol
    }
  }

  this.tag.addEventListener('click', this.addSymbol.bind(this))
}

document.addEventListener('DOMContentLoaded', function () {
  const tags = document.querySelectorAll('#mark')
  tags.forEach(function (tag) {
    new Mark(tag).updateTag()
  })
})

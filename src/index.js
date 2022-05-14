import { Mark } from './components'

import './index.css'

document.addEventListener('DOMContentLoaded', function () {
  const tags = document.querySelectorAll('#mark')
  tags.forEach(function (tag) {
    new Mark(tag).updateTag()
  })
})

import { Mark } from './components'

function App() {
  const tags = document.querySelectorAll('#mark')
  tags.forEach(function (tag) {
    new Mark(tag).updateTag()
  })
}

export default App

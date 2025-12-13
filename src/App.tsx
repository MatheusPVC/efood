import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import Darkness from './components/Darkness'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div style={{ position: 'relative' }}>
        <Darkness />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

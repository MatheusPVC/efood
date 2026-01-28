import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import Darkness from './components/Darkness'
import { store } from './store'
import LateralMenu from './components/LateralMenu'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div style={{ position: 'relative' }}>
          <Darkness />
          <Rotas />
          <Footer />
        </div>
        <LateralMenu />
      </BrowserRouter>
    </Provider>
  )
}

export default App

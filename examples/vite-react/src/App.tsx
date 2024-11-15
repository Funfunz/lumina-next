import Lumina from '@lumina/core'
import { getFullData } from './lib/dataFetcher'
import luminaConfig from './luminaComponents/config'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Contact } from './pages/contact'
import '@lumina/core/style.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles.css'

const RouteExtractor = () => {
  const location = useLocation()
  const router = {
    location: {
      host: window.location.host,
      protocol: window.location.protocol,
      ...location,
    },
    base: '/',
  }
  const navigate = useNavigate()
  return (
    <Lumina
      config={{ mobileView: 'iframe' }}
      router={router}
      getData={getFullData}
      navigate={navigate}
      components={luminaConfig}
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route index path='/*' element={<RouteExtractor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

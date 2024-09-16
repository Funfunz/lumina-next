import Lumina from '@lumina/core'
import '@lumina/core/style.css'
import { getFullData } from './lib/dataFetcher'
import luminaConfig from './luminaComponents/config'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Contact } from './pages/contact'

const RouteExtractor = () => {
  const location = useLocation()
  const router = {
    location,
    base: '/',
  }
  return <Lumina router={router} getData={getFullData} components={luminaConfig} />
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

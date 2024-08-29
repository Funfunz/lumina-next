import Lumina from '@lumina/core'
import '@lumina/core/style.css'
import { getFullData } from './lib/dataFetcher'
import luminaConfig from './luminaComponents/config'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Lumina getData={getFullData} selectedPage='home' components={luminaConfig} />}
        />
        <Route
          path='/editor'
          element={
            <Lumina getData={getFullData} selectedPage='home' components={luminaConfig} isEditor />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

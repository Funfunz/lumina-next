import Lumina from '@lumina/core'
import '@lumina/core/style.css'
import { getFullData } from './lib/dataFetcher'
import luminaConfig from './luminaComponents/config'

function App() {
  return <Lumina getData={getFullData} selectedPage='home' components={luminaConfig} />
}

export default App

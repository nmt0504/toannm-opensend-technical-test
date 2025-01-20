import ActionPanel from './containers/ActionPanel/ActionPanel'
import PaperSize from './containers/PaperSize/PaperSize'
import PriceTable from './containers/PriceTable/PriceTable'
import { AppProvider } from './context/AppContext'
import './App.css'

function App() {
  return (
    <AppProvider>
      <div className="content-wrapper">
        <PaperSize />
        <PriceTable />
      </div>
      <div className="panel">
        <ActionPanel />
      </div>
    </AppProvider>
  )
}

export default App

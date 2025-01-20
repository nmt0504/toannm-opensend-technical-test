import { useState } from 'react'
import ActionPanel from './containers/ActionPanel/ActionPanel'
import PaperSize from './containers/PaperSize/PaperSize'
import PriceTable from './containers/PriceTable/PriceTable'
import { type paperSizeType } from './api/type'
import './App.css'

function App() {
  const [paperSize, setPaperSize] = useState<paperSizeType>('A4')
  return (
    <>
      <div className="content-wrapper">
        <PaperSize paperSize={paperSize} setPaperSize={(value) => setPaperSize(value)} />
        <PriceTable paperSize={paperSize} />
      </div>
      <div className="panel">
        <ActionPanel />
      </div>
    </>
  )
}

export default App

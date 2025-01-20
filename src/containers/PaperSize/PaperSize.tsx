import { FC, useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'
import Button from '../../components/Button/Button'
import { usePaperSize } from '../../hooks/usePaperSize'
import { type PaperSizeType } from '../../api/type'
import './paper-size.css'

const PaperSize: FC = () => {
  const { setPaperSize } = usePaperSize()
  const [tempPaperSize, setTempPaperSize] = useState<PaperSizeType>("A4")

  const onApplyPaperSize = () => {
    setPaperSize?.(tempPaperSize)
  }
  return (
    <div className="paper-size">
      <div className="content">
        <div className='title'>Select Paper size</div>
        <div className="select-paper-size">
          <Dropdown onSetValue={(value) => setTempPaperSize(value)} />
        </div>
      </div>
      <div className="apply-btn" onClick={onApplyPaperSize}>
        <Button>Apply</Button>
      </div>
    </div>
  )
}

export default PaperSize
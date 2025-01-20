import { FC } from 'react'
import Button from '../../components/Button/Button'
import { formatNumber } from '../../utils/formatNumber'

import './action-panel.css'

const ActionPanel: FC = () => {
  return (
    <div className="action-panel">
      <div className="order-price">
        Order price: ¥{formatNumber(9999)}
      </div>
      <div className="add-to-cart">
        <Button>
          Cart
        </Button>
      </div>
    </div>
  )
}

export default ActionPanel
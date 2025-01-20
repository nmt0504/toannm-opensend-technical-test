import { FC } from 'react'
import Button from '../../components/Button/Button'
import { useOrderPrice } from '../../hooks/useOrderPrice'
import { formatNumber } from '../../utils/formatNumber'

import './action-panel.css'

const ActionPanel: FC = () => {
  const { orderPrice} = useOrderPrice()
  return (
    <div className="action-panel">
      <div className="order-price">
        Order price: ¥{formatNumber(orderPrice || 0)}
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
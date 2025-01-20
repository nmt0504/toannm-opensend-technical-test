import { FC, useState } from 'react'
import { useEffect } from 'react'
import { clsx } from 'clsx'
// import Loading from '../../components/Loading/Loading'
import apiService from '../../api/apiService'
import { useOrderPrice } from '../../hooks/useOrderPrice'
import { usePaperSize } from '../../hooks/usePaperSize'

import './price-table.css'

const PriceTable: FC = () => {
  const { paperSize } = usePaperSize()
  const { orderPrice, setOrderPrice } = useOrderPrice()
  const [loading, setLoading] = useState(false)
  const [businessDays, setBusinessDays] = useState<number[]>([])
  const [quanitiesPrice, setQuantitiesPrice] = useState<number[][]>([])
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const res = await apiService.get(`/prices?paper_size=${paperSize}`)
        const dataFlat = res.data.prices.flat(Infinity)
        const businessDaySet = new Set<number>(dataFlat.map((item: any) => Number(item.business_day)))
        setBusinessDays(Array.from(businessDaySet))
        const quanitiesPriceTemp = []
        for (const prices of res.data.prices) {
          const tempArr = []
          for (const item of prices) {
            if (tempArr.length === 0) tempArr.push(item.quantity)
            tempArr.push(item.price)
          }
          quanitiesPriceTemp.push(tempArr)
        }
        setQuantitiesPrice(quanitiesPriceTemp)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, [paperSize])

  const onSelectPrice = (price: number) => {
    setOrderPrice?.(price)
  }

  return (
    <div className="price-table">
      <div className="label">
        Price Table
      </div>
      <div className="content">
        {
          loading ? 'Loading...' : (
            <table>
              <tr>
                <th></th>
                {
                  businessDays.map((day) => <th>{day}</th>)
                }            
              </tr>
              {
                quanitiesPrice.map((rows) => (
                  <tr className='price-cell'>
                    {
                      rows.map((price) => <td className={clsx((orderPrice === price) && 'highlighted')} onClick={() => onSelectPrice(price)}>{price}</td>)
                    }
                  </tr>
                ))
              }
            </table>
          )
        }
      </div>
    </div>
  )
}

export default PriceTable
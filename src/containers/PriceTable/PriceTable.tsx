import { FC, useRef, useState } from 'react'
import { useEffect } from 'react'
import { clsx } from 'clsx'
import apiService from '../../api/apiService'
import { useOrderPrice } from '../../hooks/useOrderPrice'
import { usePaperSize } from '../../hooks/usePaperSize'

import './price-table.css'
import Button from '../../components/Button/Button'

const LIMIT_PAGE = 5

const PriceTable: FC = () => {
  const { paperSize } = usePaperSize()
  const { orderPrice, setOrderPrice } = useOrderPrice()
  const tempQuanitiesPrice = useRef<number[][]>()
  const [seeMore, setSeeMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [businessDays, setBusinessDays] = useState<number[]>([])
  const [quanitiesPrice, setQuantitiesPrice] = useState<number[][]>([])

  const [hoverPrice, setHoverPrice] = useState(0)
  const [row, setRow] = useState<number>()
  const [column, setColumn] = useState<number>()
  
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

  useEffect(() => {
    if (!seeMore) {
      tempQuanitiesPrice.current = [...quanitiesPrice]
      setQuantitiesPrice(quanitiesPrice.slice(0, LIMIT_PAGE))
    } else {
      if (tempQuanitiesPrice.current && tempQuanitiesPrice.current.length > 0) {
        setQuantitiesPrice(tempQuanitiesPrice.current)
        tempQuanitiesPrice.current = []
      }
    }
  }, [loading, seeMore])

  const onSelectPrice = (idx: number, price: number) => {
    if (idx !== 0) {
      setOrderPrice?.(price)
    }
  }

  const onHoverCell = (row: number, column: number, price: number) => {
    setRow(row)
    setColumn(column)
    setHoverPrice(price)
  }

  return (
    <div className="price-table">
      <div className="label">
        Price Table
      </div>
      <div className="content" onMouseOut={() => {setRow(undefined); setColumn(undefined); setHoverPrice(0)}}>
        {
          loading ? 'Loading...' : (
            <table>
              <tr>
                <th></th>
                {
                  businessDays.map((day) => <th key={day}>{day}</th>)
                }            
              </tr>
              {
                quanitiesPrice.map((rows, rowIdx) => {
                  return (
                    <tr key={Math.random()} className='price-cell'>
                      {
                        rows.map((price, idx) => <td key={price} 
                                                    onMouseOver={() => onHoverCell(rowIdx, idx, price)} 
                                                    className={clsx(
                                                      (rowIdx === row || idx === column) && (idx !== 0) && 'weak-highlighted',
                                                      (orderPrice === price || hoverPrice === price) && (idx !== 0) && 'highlighted',
                                                    )} 
                                                    onClick={() => onSelectPrice(idx, price)}>
                                                      {price}
                                                  </td>)
                      }
                    </tr>
                  )
                })
              }
            </table>
          )
        }
      </div>
      <div className="see-more-btn">
        <Button onClick={() => setSeeMore(true)}>
          See more
        </Button>
      </div>
    </div>
  )
}

export default PriceTable
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useOrderPrice = () => {
  const { orderPrice, setOrderPrice } = useContext(AppContext)

  return { orderPrice, setOrderPrice }
}
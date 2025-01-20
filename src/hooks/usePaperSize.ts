import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const usePaperSize = () => {
  const { paperSize, setPaperSize } = useContext(AppContext)

  return { paperSize, setPaperSize }
}
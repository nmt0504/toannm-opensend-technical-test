import { createContext, FC, PropsWithChildren, useState } from "react";
import { type PaperSizeType } from "../api/type";

type AppContextType = {
  paperSize?: PaperSizeType,
  orderPrice?: number,
  setPaperSize?: (value: PaperSizeType) => void,
  setOrderPrice?: (value: number) => void,
}

export const AppContext = createContext<AppContextType>({})

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [paperSize, setPaperSize] = useState<PaperSizeType>("A4")
  const [orderPrice, setOrderPrice] = useState<number>(0)
  return (
    <AppContext.Provider value={{ paperSize, orderPrice, setPaperSize, setOrderPrice }}>
      {children}
    </AppContext.Provider>
  )
}
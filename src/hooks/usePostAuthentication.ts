import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usePostAuthentication = () => {
  const { orderPrice, setOrderPrice } = useContext(AppContext)

  return { orderPrice, setOrderPrice }
}
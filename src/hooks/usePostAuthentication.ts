import apiService from '@/api/apiService'
import { LoginRequest } from '@/api/type'
import { useMutation } from '@tanstack/react-query'

export const usePostAuthentication = ({ onSuccess } : { onSuccess?: VoidFunction }) => {
  return useMutation({
    mutationKey: ['postAuthentication'],
    mutationFn: async (data: LoginRequest) => {
      const resp = await apiService.post('/auth/login', {
        body: JSON.stringify(data),
      })
      return resp.data
    },
    onSuccess: (data) => {
      onSuccess?.()
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
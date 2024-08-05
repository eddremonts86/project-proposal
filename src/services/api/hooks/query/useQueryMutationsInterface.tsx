import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

interface UseQueryInterfaceProps {
  fn: () => Promise<AxiosResponse<unknown, unknown>>
}

const useQueryMutationsInterface = ({ fn }: UseQueryInterfaceProps) => {
  const response = useMutation({
    mutationFn: async () => {
      const { data } = await fn()
      return data
    },
  })
  return response
}
export { useQueryMutationsInterface }

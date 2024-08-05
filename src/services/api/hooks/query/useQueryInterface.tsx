import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

interface UseQueryInterfaceProps {
  key: { name: string; dependencies?: unknown }
  fn: () => Promise<AxiosResponse<unknown, unknown>>
}

const useQueryInterface = ({ key, fn }: UseQueryInterfaceProps) => {
  const response = useQuery({
    queryKey: [key.name, key.dependencies],
    queryFn: fn,
  })
  return response
}
export { useQueryInterface }

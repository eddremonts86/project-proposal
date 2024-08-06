import { getRoyalty } from '../entities/royaltyApi'
import { useQueryInterface } from './query/useQueryInterface'

export interface Pagination {
  pageIndex: number
  pageSize: number
}

export default function useRoyalty(index: number, size: number) {
  const {
    isLoading,
    data: response,
    isError,
  } = useQueryInterface({
    key: { name: 'Royalties', dependencies: { size, index } },
    fn: async () =>
      await getRoyalty({
        pageIndex: index,
        pageSize: size,
      }),
  })

  const setPagination = async (pagination: Pagination) => {
    index = pagination.pageIndex
    size = pagination.pageSize
    const data = await getRoyalty({
      pageIndex: index,
      pageSize: size,
    })
    console.log('pagination', data)
  }

  const data = response?.data
    ? response
    : {
        data: [],
        pages: 0,
        items: 0,
      }

  return { isLoading, data, isError, setPagination }
}

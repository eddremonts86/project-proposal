import { useState } from 'react'

import { getRoyalty } from '../entities/royaltyApi'
import { useQueryInterface } from './query/useQueryInterface'

export interface Pagination {
  pageIndex: number
  pageSize: number
}

export default function useRoyalty(paginationInit: Pagination) {
  const [pagination, setPagination] = useState<Pagination>(paginationInit)
  const {
    isLoading,
    data: response,
    isError,
  } = useQueryInterface({
    key: { name: 'Royalties', dependencies: { ...pagination } },
    fn: async () =>
      await getRoyalty({
        ...pagination,
      }),
  })

  const data = response?.data
    ? response
    : {
        data: [],
        pages: 0,
        items: 0,
      }

  return { isLoading, data, isError, setPagination, pagination }
}

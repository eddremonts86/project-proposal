import { useCallback, useState } from 'react'

import { getRoyalty } from '../entities/royaltyApi'
import { useQueryInterface } from './query/useQueryInterface'

export default function useRoyalty() {
  const [page, setPage] = useState(10)
  const [pageSize, setPageSize] = useState(0)
  const offset = page * pageSize

  const getPoke = useQueryInterface({
    key: { name: 'Royalties', dependencies: { pageSize, offset } },
    fn: async () => await getRoyalty(pageSize, offset),
  })

  const updateTableData = useCallback(
    (newSize: number, newPage: number) => {
      if (newSize !== pageSize) setPageSize(newSize)
      if (page !== newPage) setPage(newPage)
    },
    [pageSize, page]
  )

  return { getPoke, page, pageSize, updateTableData }
}

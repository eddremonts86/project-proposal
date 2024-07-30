import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getRoyalty } from '../entities/royaltyApi'

export default function useRoyalty() {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const getPoke = useQuery({
    queryKey: ['Royalties', { limit, offset }],
    queryFn: async () => {
      const { royalty } = await getRoyalty(limit, offset)
      return royalty
    },
  })
  return { getPoke, setLimit, setOffset }
}

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getPokemonList } from '../entities/pokeApi'

export default function usePokeApi() {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const getPoke = useQuery({
    queryKey: ['pokeList', { limit, offset }],
    queryFn: async () => {
      return await getPokemonList(limit, offset)
    },
  })
  return { getPoke, setLimit, setOffset }
}

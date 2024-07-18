import { useQuery } from '@tanstack/react-query'
import { getPokemonList } from '../entities/pokeApi'
import { useState } from 'react'

export default function usePokeApi() {
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)

  const getPoke = useQuery({
    queryKey: ['pokeList', { limit, offset }],
    queryFn: async () => {
      return await getPokemonList(limit, offset)
    },
  })
  console.log(getPoke)
  return { getPoke, setLimit, setOffset }
}

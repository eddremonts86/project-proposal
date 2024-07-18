import { axiosClient as client } from '../clients/axiosClient'

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await client.get(`/pokemon?limit=${limit}&offset=${offset}`)
  return response.data
}

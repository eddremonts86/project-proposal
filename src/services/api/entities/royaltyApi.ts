import { axiosClient as client } from '../clients/axiosClient'

export const getRoyalty = async (limit: number, offset: number) => {
  const response = await client.get(`/royalty?limit=${limit}&offset=${offset}`)
  return response.data
}

import { axiosClient as client } from '../clients/axiosClient'

export const getRoyalty = async ({
  pageIndex,
  pageSize,
}: {
  pageIndex: number
  pageSize: number
}) => {
  const response = await client.get(
    `/royalty?_page=${pageIndex + 1}&_per_page=${pageSize}`
  )
  return response.data
}

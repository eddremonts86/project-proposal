import useRoyalty from '@/services/api/hooks/useRoyalty'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'

import { tableConfig } from './const/tableConfig'

export default function TablePage() {
  const { headers, filters } = tableConfig
  const { getPoke, pageSize, updateTableData } = useRoyalty()
  const { isLoading, data } = getPoke
  const {
    table: pokeTable,
    tHeaders: pokeHeaders,
    tColumns: pokeColumns,
  } = useTable({
    config: {
      pageSize,
    },
    headers: headers,
    data: data?.royalty ? data.royalty : [],
  })
  const { pageSize: pokePageSize, pageIndex: pokePageIndex } =
    pokeTable.getState().pagination

  updateTableData(pokePageSize, pokePageIndex)

  return (
    <FlexContainer className="mb-3 sm:flex-col">
      <FiltersContainer table={pokeTable} filters={filters} />
      <Table
        className="w-full"
        table={pokeTable}
        tHeaders={pokeHeaders}
        tColumns={pokeColumns}
        loading={isLoading}
        pagination={true}
      />
    </FlexContainer>
  )
}

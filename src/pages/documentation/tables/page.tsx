import useRoyalty from '@/services/api/hooks/useRoyalty'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'

import { tableExampleData } from './const/tableExampleData'

export default function TablePage() {
  const { headers, filters } = tableExampleData
  const { getPoke } = useRoyalty()
  const { isLoading, data } = getPoke

  const {
    table: pokeTable,
    tHeaders: pokeHeaders,
    tColumns: pokeColumns,
  } = useTable({
    config: {},
    headers: headers,
    data: data ?? [],
  })

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

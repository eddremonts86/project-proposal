import usePokeApi from '@/services/api/hooks/usePokeApi'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'

import { tableExampleData } from './const/tableExampleData'

export default function TablePage() {
  const { headers, data, config, filters, PokeFilters, pokeHeadersExample } =
    tableExampleData
  const { getPoke } = usePokeApi()
  const { isLoading, data: list } = getPoke

  const { table, tHeaders, tColumns } = useTable({
    config,
    headers,
    data,
  })

  const {
    table: pokeTable,
    tHeaders: pokeHeaders,
    tColumns: pokeColumns,
  } = useTable({
    config: {},
    headers: pokeHeadersExample,
    data: list?.results ?? [],
  })

  return (
    <>
      <FlexContainer className="mb-3 sm:flex-col">
        <FiltersContainer table={pokeTable} filters={PokeFilters} />
        <Table
          className="w-full"
          table={pokeTable}
          tHeaders={pokeHeaders}
          tColumns={pokeColumns}
          loading={isLoading}
          pagination={true}
        />
      </FlexContainer>
      <FlexContainer className="sm:flex-col">
        <FiltersContainer table={table} filters={filters} />
        <Table
          className="w-full"
          table={table}
          tHeaders={tHeaders}
          tColumns={tColumns}
          pagination={true}
        >
          <div className="flex w-full items-center justify-center p-7">
            <p>Some data in the footer</p>
          </div>
        </Table>
      </FlexContainer>
    </>
  )
}

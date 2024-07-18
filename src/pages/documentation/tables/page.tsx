import FlexContainer from '@/components/containers/FlexContainer'
import {
  Table,
  TableColumnsFilter,
  TableFilters,
} from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'
import usePokeApi from '@/services/api/hooks/usePokeApi'
import { tableExampleData } from './const/tableExampleData'

export default function TablePage() {
  const { headers, data, config, filters } = tableExampleData
  const { getPoke, setLimit } = usePokeApi()
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
    headers: [
      { id: 'name', label: 'Name', name: 'Poke name' },
      { id: 'url', label: 'URL', name: 'Poke URL' },
    ],
    data: list?.results ?? [],
  })

  const update = () => {
    setLimit(50)
  }

  return (
    <>
      <button
        onClick={update}
        className="mb-3 rounded-lg bg-red-500 px-6 py-2 text-white"
      >
        Para buscar mas
      </button>
      <FlexContainer className="mb-3 sm:flex-col">
        <h1 className="bold mb-3 text-xl">Testing Api call</h1>
        <Table
          className="w-full"
          table={pokeTable}
          tHeaders={pokeHeaders}
          tColumns={pokeColumns}
          loading={isLoading}
          footer={true}
        />
      </FlexContainer>

      <FlexContainer className="sm:flex-col">
        <div className="flex flex-col items-start justify-start gap-2 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            {filters.map((item) => (
              <TableFilters
                table={table}
                filterKey={item.key}
                key={item.key}
                placeholder={item.placeholder}
              />
            ))}
          </div>
          <TableColumnsFilter table={table} />
        </div>
        <Table
          className="w-full"
          table={table}
          tHeaders={tHeaders}
          tColumns={tColumns}
          footer={true}
        />
      </FlexContainer>
    </>
  )
}

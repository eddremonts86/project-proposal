import useRoyalty from '@/services/api/hooks/useRoyalty'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'

import { tableConfig } from './const/tableConfig'

export default function TablePage() {
  const { isLoading, data, setPagination } = useRoyalty(0, 5)
  const { headers, filters } = tableConfig

  const { table, tHeaders, tColumns, tablePagination } = useTable({
    headers: headers,
    data: data.data,
    config: {
      pageIndex: 0,
      pageSize: 5,
      rows: data.items,
      pages: data.pages,
    },
  })

  setPagination(tablePagination)

  return (
    <FlexContainer className="mb-3 sm:flex-col">
      <FiltersContainer table={table} filters={filters} />
      <Table
        className="w-full"
        table={table}
        tHeaders={tHeaders}
        tColumns={tColumns}
        loading={isLoading}
        pagination={true}
      />
    </FlexContainer>
  )
}

import useRoyalty from '@/services/api/hooks/useRoyalty'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/table'
import useTable from '@/components/globals/table/hooks/useTable'

import { tableConfig } from './const/tableConfig'

export default function TablePage() {
  const initPagination = { pageIndex: 0, pageSize: 5 }
  const { isLoading, data, setPagination, pagination } =
    useRoyalty(initPagination)
  const { headers, filters } = tableConfig

  const { table, tHeaders, tColumns } = useTable({
    headers: headers,
    data: data.data,
    config: {
      ...pagination,
      rows: data.items,
      pages: data.pages,
    },
    onSetPagination: setPagination,
  })

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

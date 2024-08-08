import useRoyalty from '@/services/api/hooks/useRoyalty'

import FlexContainer from '@/components/containers/FlexContainer'
import { FiltersContainer, Table } from '@/components/globals/table'
import useTable from '@/components/globals/table/hooks/useTable'

import { tableConfig } from './const/tableConfig'

export default function TablePage() {
  const { headers, filters, config } = tableConfig
  const { isLoading, data, setPagination, pagination, setRowSelection } =
    useRoyalty(config.pagination)

  const { table, tHeaders, tColumns } = useTable({
    headers: headers,
    data: data.data,
    config: {
      ...config,
      ...pagination,
      rows: data.items,
      pages: data.pages,
    },
    onSetPagination: setPagination,
    onSetRowSelection: setRowSelection,
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
        pagination={config.pagination}
        config={config}
      />
    </FlexContainer>
  )
}

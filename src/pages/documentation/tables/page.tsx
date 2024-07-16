import FlexContainer from '@/components/containers/FlexContainer'
import {
  Table,
  TableColumnsFilter,
  TableFilters,
} from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'
import { tableExampleData } from './const/tableExampleData'

export default function TablePage() {
  const { headers, data, config } = tableExampleData
  const { table, tHeaders, tColumns } = useTable({
    config,
    headers,
    data,
  })

  return (
    <FlexContainer className="sm:flex-col">
      <div className="flex flex-col items-start justify-start gap-2 py-5 md:flex-row md:items-center md:justify-between">
        <TableFilters
          table={table}
          filterKey={'Name'}
          placeholder="Filter by name"
        />
        <TableFilters
          table={table}
          filterKey={'WidgetId'}
          placeholder="Filter by id"
        />
        <TableFilters
          table={table}
          filterKey={'WidgetType'}
          placeholder="Filter by type"
        />
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
  )
}

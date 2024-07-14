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
    <FlexContainer className="flex-col">
      <div className="flex items-center justify-between py-5">
        <TableFilters table={table} filterKey={'WidgetId'} />
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

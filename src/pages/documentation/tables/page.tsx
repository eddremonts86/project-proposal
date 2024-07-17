import FlexContainer from '@/components/containers/FlexContainer'
import {
  Table,
  TableColumnsFilter,
  TableFilters,
} from '@/components/globals/Table'
import useTable from '@/components/globals/Table/hooks/useTable'
import { tableExampleData } from './const/tableExampleData'

export default function TablePage() {
  const { headers, data, config, filters } = tableExampleData
  const { table, tHeaders, tColumns } = useTable({
    config,
    headers,
    data,
  })

  return (
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
  )
}

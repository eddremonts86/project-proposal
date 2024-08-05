import { Table } from '@tanstack/react-table'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface TableRowsPagesProps {
  table: Table<unknown>
  pageSizeOptions?: number[]
}
export default function TableRowsPages({
  table,
  pageSizeOptions = [5, 10, 25, 50, 100],
}: Readonly<TableRowsPagesProps>) {
  const pageSize = table.getState().pagination.pageSize

  return (
    <Select
      value={pageSize}
      onValueChange={(value: number) => {
        table.setPageSize(Number(value))
      }}
    >
      <SelectTrigger className="w-[75px]">
        <SelectValue placeholder="Rows per page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rows per page</SelectLabel>
          {pageSizeOptions.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

interface TableSelectedRowsProps {
  table: Table<unknown>
  className?: string
}
export default function TableSelectedRows({
  table,
  className,
}: Readonly<TableSelectedRowsProps>) {
  return (
    <div className={cn('text-sm', className)}>
      {table.getFilteredSelectedRowModel().rows.length} of{' '}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  )
}

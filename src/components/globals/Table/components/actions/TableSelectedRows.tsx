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
  const pages = table.getPageCount()
  const pagesText = pages > 1 ? 'pages' : 'page'
  const selectedRows = table.getFilteredSelectedRowModel().rows.length
  const allRows = table.getRowCount()
  return (
    <div className={cn('text-sm', className)}>
      {selectedRows} of {allRows} row(s) selected in {pages} {pagesText}.
    </div>
  )
}

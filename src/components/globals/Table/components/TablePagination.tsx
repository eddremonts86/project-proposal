import { Button } from '@/components/ui/button'
import { Table } from '@tanstack/react-table'

interface TablePaginationProps {
  table: Table<unknown>
}

export default function TablePagination({ table }: Readonly<TablePaginationProps>) {
  const btnClass = 'rounded-md min-w-20'
  return (
    <div className="flex items-center justify-between w-full py-4">
      <div className="text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="space-x-2">
        <Button
          className={btnClass}
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className={btnClass}
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

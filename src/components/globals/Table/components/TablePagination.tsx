import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'

interface TablePaginationProps {
  table: Table<unknown>
}

/**
 * Renders a pagination component for a table.
 *
 * @component
 * @param {Readonly<TablePaginationProps>} props - The props for the TablePagination component.
 * @returns {JSX.Element} - The rendered TablePagination component.
 */
export default function TablePagination({
  table,
}: Readonly<TablePaginationProps>) {
  const btnClass = 'rounded-md min-w-20'
  return (
    <div className="flex w-full items-center justify-between py-4">
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

/**
 * Renders a pagination component for a table.
 *
 * @component
 * @param {Readonly<TablePaginationProps>} props - The props for the TablePagination component.
 * @returns {JSX.Element} - The rendered TablePagination component.
 */

import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface TablePaginationProps {
  table: Table<unknown>
  className?: string
}

export default function TablePagination({
  table,
  className,
}: Readonly<TablePaginationProps>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between space-x-2 py-4',
        className
      )}
    >
      <Button
        variant="outline"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <CaretLeftIcon className="text-xl" /> Previous
      </Button>
      <Button
        variant="outline"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
        <CaretRightIcon className="text-xl" />
      </Button>
    </div>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { Table } from '@tanstack/react-table'
import { useDebounce } from '@uidotdev/usehooks'

import { InputChangeEvent } from '@/types/forms'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

/**
 * Represents a component that provides filtering functionality for a table.
 *
 * @component
 * @example
 * ```tsx
 * <TableFilters
 *   table={myTable}
 *   placeholder="Filter name..."
 *   filterKey="name"
 *   className="my-custom-class"
 * />
 * ```
 */

interface TableFiltersProps {
  table: Table<unknown>
  placeholder: string
  filterKey: string
  className?: string
}

export default function TableFilters({
  table,
  placeholder = 'Filter name...',
  className,
  filterKey,
}: Readonly<TableFiltersProps>) {
  const column = useMemo(
    () => table.getColumn(String(filterKey)),
    [table, filterKey]
  )
  const [value, setValue] = useState('')
  const debouncedSearchTerm = useDebounce(value, 300)
  useEffect(() => {
    if (column) {
      column.setFilterValue(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, filterKey, column])

  return (
    <div className="w-full flex-col">
      <Input
        placeholder={placeholder}
        className={cn('', className)}
        value={value}
        onChange={(event: InputChangeEvent) => setValue(event.target.value)}
      />
      {!column && (
        <div className="m-2 text-sm text-red-500">
          <b>"{filterKey}"</b> is not a valid column-id to filter.
        </div>
      )}
    </div>
  )
}

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
import { Input } from '@/components/ui/input'
import { InputChangeEvent } from '@/types/forms'
import { Table } from '@tanstack/react-table'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

interface TableFiltersProps {
  table: Table<unknown>
  placeholder: string
  filterKey: string
  className?: string
}

const defClass = `bottom-0 max-w-sm border-white rounded-md shadow-sm focus:rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm`

export default function TableFilters({
  table,
  placeholder = 'Filter name...',
  className = defClass,
  filterKey,
}: Readonly<TableFiltersProps>) {
  const [value, setValue] = useState('')
  const debouncedSearchTerm = useDebounce(value, 300)

  useEffect(() => {
    table.getColumn(String(filterKey))?.setFilterValue(debouncedSearchTerm)
    //TODO: Table is not updating despite the filter value being set
  }, [debouncedSearchTerm, filterKey, table])

  const handleInputChange = (event: InputChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <Input
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(e: InputChangeEvent) => handleInputChange(e)}
    />
  )
}

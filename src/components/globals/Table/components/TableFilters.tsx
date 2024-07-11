import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import React from 'react'

interface TableFiltersProps {
  table: Table<unknown>
  placeholder: string
  className?: string
}
export default function TableFilters({
  table,
  placeholder = 'Filter name...',
  className = 'max-w-sm rounded-lg',
}: Readonly<TableFiltersProps>) {
  return (
    <Input
      placeholder={placeholder}
      className={className}
      value={(table.getColumn('Name')?.getFilterValue() as string) ?? ''}
      onChange={(event: React.EventHandler<Input>) =>
        table.getColumn('Name')?.setFilterValue(event.target.value)
      }
    />
  )
}

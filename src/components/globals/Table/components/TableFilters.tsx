import { Input } from '@/components/ui/input'
interface TableFiltersProps {
  table: unknown
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
      onChange={(event) =>
        table.getColumn('Name')?.setFilterValue(event.target.value)
      }
    />
  )
}

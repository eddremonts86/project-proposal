/**
 * A component that renders a dropdown menu for filtering table columns.
 * @param {Readonly<TableColumnsFilterProps>} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

/**
 * Props for the TableColumnsFilter component.
 */
interface TableColumnsFilterProps {
  table: Table<unknown>
}
export default function TableColumnsFilter({
  table,
}: Readonly<TableColumnsFilterProps>) {
  const columns = table
    .getAllColumns()
    .filter((column) => column.getCanHide())
    .sort((a, b) => a.id.localeCompare(b.id))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto">
          Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-auto max-w-96 bg-white p-2 shadow-lg">
        {columns.map((column) => {
          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="cursor-pointer border-0 px-3 py-1 capitalize hover:bg-gray-100 hover:text-gray-900"
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              <div className="flex items-center justify-start">
                {column.getIsVisible() ? (
                  <CheckIcon className="mr-2 h-4 w-4" />
                ) : (
                  <div className="mr-2 h-4 w-4" />
                )}
                {column.id}
              </div>
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

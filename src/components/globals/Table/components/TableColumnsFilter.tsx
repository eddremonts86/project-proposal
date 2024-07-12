
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

  const columns = table.getAllColumns()
            .filter((column) => column.getCanHide())
            .sort((a, b) => a.id.localeCompare(b.id))




  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto">
          Columns <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='z-50 w-auto p-2 bg-white shadow-lg max-w-96'>
        {columns.map((column) => {
            return (
              <DropdownMenuCheckboxItem
              key={column.id}
              className="px-3 py-1 capitalize border-0 cursor-pointer hover:bg-gray-100 hover:text-gray-900 hover:font-semibold"
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                <div className='flex items-center justify-start'>
                  {
                    column.getIsVisible() ? (
                      <CheckIcon className="w-4 h-4 mr-2" />
                    ) : (
                      <div className="w-4 h-4 mr-2" />
                    )
                  }
                 {column.id}
                </div>
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

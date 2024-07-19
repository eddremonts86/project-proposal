import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

/**
 * Props for the TableColumnsFilter component.
 */
interface TableColumnsFilterProps {
  table: Table<unknown>
}

/**
 * Renders a dropdown menu for toggling table columns visibility.
 *
 * @param {Readonly<TableColumnsFilterProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
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
        <Button className="ml-auto" variant="outline">
          <MixerHorizontalIcon className="mr-2 h-4 w-4" /> View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-56">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.map((column) => {
          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="cursor-pointer capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value: boolean) =>
                column.toggleVisibility(!!value)
              }
            >
              <div className="flex items-center justify-start">{column.id}</div>
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

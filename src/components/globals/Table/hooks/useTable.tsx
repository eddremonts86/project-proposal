import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ColumnDef,
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils/dates'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { TConfig, TData, THeaders } from '../types'

interface TableHooksProps {
  headers: THeaders[]
  config: TConfig
  data: TData[]
}

const columnHelper = createColumnHelper<unknown>()
const getColumns = (headers: THeaders[]) => {
  return headers.map((subHeader: THeaders) => {
    if (subHeader.type === 'select') {
      return {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value: boolean) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      }
    }
    if (subHeader.type === 'actions') {
      return {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel> {subHeader.title}</DropdownMenuLabel>
                {subHeader.items.map((item) =>
                  item.type === 'separator' ? (
                    <DropdownMenuSeparator key={item.id} />
                  ) : (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => {
                        if (typeof item.action !== 'function') return
                        item.action(row.original)
                      }}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      }
    }
    if (subHeader.type === 'date') {
      return columnHelper.accessor(subHeader.id, {
        header: (subHeader.name ?? subHeader.id) || 'No Header Name Provided',
        cell: (info: { getValue: () => string }) => (
          <div className="capitalize">{formatDate(info.getValue())}</div>
        ),
      })
    }
    if (subHeader.type === 'sortable') {
      return columnHelper.accessor(subHeader.id, {
        id: subHeader.id || subHeader.name,
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              {subHeader.name ?? subHeader.id}
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },

        cell: ({ row }) => (
          <div className="capitalize">{row.getValue(subHeader.id)}</div>
        ),
      })
    }
    return columnHelper.accessor(subHeader.id, {
      header: (subHeader.name ?? subHeader.id) || 'No Header Name Provided',
      cell: (info: { getValue: () => string }) => (
        <div className="capitalize">{info.getValue()}</div>
      ),
    })
  }) as ColumnDef<TData, unknown>[]
}

export default function useTable({ headers, config, data }: TableHooksProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns: getColumns(headers),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    rowCount: data.length,
    pageCount: config.pageSize ?? 20,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  const tColumns = headers.length
  const tHeaders = table.getHeaderGroups()
  const showFooter = () => {
    if (config.footer) return true
    return config.pageSize ?? 0 < data.length
  }

  return {
    table,
    tHeaders,
    tColumns,
    showFooter,
  }
}

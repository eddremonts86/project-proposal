import { useEffect, useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  SortingState,
  Table,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils/dates'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { TData, THeaders, TUConfig } from '../types'

interface TableHooksProps {
  headers: THeaders[]
  config: TUConfig
  data: TData[]
  onSetPagination?: (pagination: PaginationState) => void
}

export default function useTable({
  headers,
  config,
  data,
  onSetPagination,
}: TableHooksProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState(
    config.pagination ?? { pageIndex: 0, pageSize: 5 }
  )

  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  )

  const onSelectAllCheckedChange = (value: boolean) => {
    selectAll(value)
    table.toggleAllPageRowsSelected(!!value)
  }
  const onSelectCheckedChange = (value: boolean, row: Row<TData>) => {
    setSelectedRows((prev) => ({
      ...prev,
      [String(row.original.id)]: value,
    }))
    row.toggleSelected(!!value)
  }

  const handleDropdownItemMenuClick = (row: Row<TData>, item: TData) => {
    if (typeof item.action !== 'function') return
    item.action(row.original)
  }
  const columnHelper = createColumnHelper<unknown>()
  const getColumns = (headers: THeaders[]) => {
    return headers.map((subHeader: THeaders) => {
      if (subHeader.type === 'select') {
        return {
          id: subHeader.id,
          header: ({ table }: { table: Table<unknown> }) => (
            <Checkbox
              className="m-0 h-4 w-4"
              checked={
                (table.getIsAllPageRowsSelected() &&
                  Object.keys(selectedRows).length === data.length) ||
                (table.getIsSomePageRowsSelected() && 'indeterminate')
              }
              onCheckedChange={(value: boolean) =>
                onSelectAllCheckedChange(value)
              }
              aria-label="Select all"
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              className="m-0 h-4 w-4"
              checked={
                row.getIsSelected() && selectedRows[String(row.original.id)]
              }
              onCheckedChange={(value: boolean) =>
                onSelectCheckedChange(value, row)
              }
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: true,
        }
      }
      if (subHeader.type === 'actions') {
        return {
          id: subHeader.id,
          enableHiding: false,
          cell: ({ row }) => {
            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="m-0 h-8 w-8 p-0">
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
                        onClick={() => handleDropdownItemMenuClick(row, item)}
                      >
                        <span className={cn('mx-1', item.icon)} /> {item.label}
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
              <div className="flex items-center justify-start gap-1">
                {subHeader.name ?? subHeader.id}
                <Button
                  variant="ghost"
                  onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                  }
                >
                  <ArrowUpDown className="m-0 h-4 w-4 p-0" />
                </Button>
              </div>
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

  const table = useReactTable({
    data,
    columns: getColumns(headers),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    initialState: {
      sorting: config.sortBy,
      pagination: config.pagination,
    },
    manualPagination: true,
    rowCount: config.rows ?? 0,
    pageCount: config.pages ?? 0,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
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
  const selectAll = (value: boolean) => {
    setSelectedRows(
      data.reduce((acc: Record<string, boolean>, row: TData) => {
        acc[String(row.id)] = value
        return acc
      }, {})
    )
  }

  useEffect(() => {
    if (onSetPagination) {
      onSetPagination(pagination)
    }
  }, [pagination, onSetPagination])

  return {
    showFooter,
    table,
    tHeaders,
    tColumns,
    tablePagination: pagination,
  }
}

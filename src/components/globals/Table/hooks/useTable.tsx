import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  HeaderGroup,
  SortingState,
  useReactTable,
  VisibilityState,
  createColumnHelper,
} from '@tanstack/react-table'
import { TConfig, TData, THeaders } from '../types'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

interface TableHooksProps {
  headers: THeaders[]
  config: TConfig
  data: TData[]
}

export default function useTable({ headers, config, data }: TableHooksProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const columnHelper = createColumnHelper<unknown>()

  const generateHeaderColumns = (header: THeaders[]) => {
    return header.map((subHeader) => {
      if (subHeader.type === 'select') {
        const header = ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        )
        const cell = (row) => (
          <Checkbox
            checked={() => row.isSelected}
            onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        )

        return columnHelper.accessor(subHeader.id, {
          id: subHeader.id,
          header,
          cell,
          enableSorting: false,
          enableHiding: false,
        })
      }

      return columnHelper.accessor(subHeader.id, {
        header: (subHeader.name ?? subHeader.id) || 'No Header Name Provided',
        cell: (info: { getValue: () => void }) => info.getValue(),
      })
    })
  }

  const columnsHeaders = generateHeaderColumns(headers)
  const table = useReactTable({
    data,
    columns: columnsHeaders,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    rowCount: data.length,
    pageCount: config.pageSize ?? 20,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const tHeaders: HeaderGroup<unknown>[] = table.getHeaderGroups()
  const tColumns = headers.length

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

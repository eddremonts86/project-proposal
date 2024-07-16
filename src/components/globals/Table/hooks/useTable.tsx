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
} from '@tanstack/react-table'
import { TConfig, TData, THeaders } from '../types'
import { generateHeaderColumns } from '../utils/table'
import { useState } from 'react'

interface TableHooksProps {
  headers: THeaders[]
  config: TConfig
  data: TData[]
}

export default function useTable({ headers, config, data }: TableHooksProps) {
  const columnsHeaders = generateHeaderColumns(headers)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

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

import {
  getCoreRowModel,
  getPaginationRowModel,
  HeaderGroup,
  useReactTable,
} from '@tanstack/react-table'
import { TConfig, TData, THeaders } from '../types'
import { generateHeaderColumns } from '../utils/table'

interface TableHooksProps {
  headers: THeaders[]
  config: TConfig
  data: TData[]
}

export default function useTable({ headers, config, data }: TableHooksProps) {
  const columnsHeaders = generateHeaderColumns(headers)
  const table = useReactTable({
    data,
    columns: columnsHeaders,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: data.length,
    pageCount: config.pageSize ?? 20,
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

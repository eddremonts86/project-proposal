import { HeaderGroup, Table as TableType } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Table as CnTable, TableBody, TableHeader } from '@/components/ui/table'

import TableContextProvider from '../providers/TableProvider'
import { TUConfig } from '../types'
import TablePagination from './actions/TablePagination'
import TableRowsPages from './actions/TableRowsPages'
import TableSelectedRows from './actions/TableSelectedRows'
import Content from './TableContent'
import TableFooter from './TableFooter'
import Headers from './TableHeaders'

interface TableProps {
  tHeaders: HeaderGroup<unknown>[]
  tColumns: number
  footer: boolean
  pagination: boolean
  loading: boolean
  className?: string
  table: TableType<unknown>
  children?: React.ReactNode
  config?: TUConfig
}
export default function Table({
  table,
  tHeaders,
  tColumns,
  pagination,
  loading,
  className,
  children,
  config,
}: Readonly<TableProps>) {
  return (
    <>
      <TableContextProvider>
        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <CnTable className={cn('w-full caption-bottom text-sm', className)}>
              <TableHeader>
                <Headers headers={tHeaders} />
              </TableHeader>
              <TableBody>
                <Content
                  table={table}
                  loading={loading}
                  headersLength={tColumns}
                />
              </TableBody>
              {children && (
                <TableFooter headersLength={tColumns}>{children}</TableFooter>
              )}
            </CnTable>
          </div>
        </div>
        <div className="flex w-full items-center justify-between ">
          <div className="p-3">
            <TableSelectedRows table={table} className="p-3" />
          </div>
          <div className="flex items-center">
            <TableRowsPages table={table} pageSizeOptions={config?.pageSize} />
            {pagination && <TablePagination table={table} className="p-3" />}
          </div>
        </div>
      </TableContextProvider>
    </>
  )
}

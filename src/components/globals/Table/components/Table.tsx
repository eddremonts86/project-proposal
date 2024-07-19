import { HeaderGroup, Table as TableType } from '@tanstack/react-table'

import { Table as CnTable, TableBody, TableHeader } from '@/components/ui/table'

import TableContextProvider from '../providers/TableProvider'
import Content from './TableContent'
import Footer from './TableFooter'
import Headers from './TableHeaders'

interface TableProps {
  tHeaders: HeaderGroup<unknown>[]
  tColumns: number
  footer: boolean
  loading: boolean
  className?: string
  table: TableType<unknown>
}
export default function Table({
  table,
  tHeaders,
  tColumns,
  footer,
  loading,
  className,
}: Readonly<TableProps>) {
  return (
    <>
      <TableContextProvider>
        <CnTable className={className}>
          <TableHeader>
            <Headers headers={tHeaders} />
          </TableHeader>
          <TableBody>
            <Content table={table} loading={loading} headersLength={tColumns} />
            {footer && <Footer colSpan={tColumns} table={table} />}
          </TableBody>
        </CnTable>
      </TableContextProvider>
    </>
  )
}

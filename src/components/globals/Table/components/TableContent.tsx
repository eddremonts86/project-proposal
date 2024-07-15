import { cn } from '@/lib/utils'
import { Table } from '@tanstack/react-table'
import { getCellContent } from '../utils/table'
import TableLoading from './TableLoading'
interface TableContentProps {
  loading: boolean
  table: Table<unknown>
  headersLength: number
  className?: string
}
export default function TableContent({
  loading,
  table,
  headersLength,
  className = 'border-slate-300 hover:bg-slate-100 ',
}: Readonly<TableContentProps>) {
  return (
    <>
      {loading ? (
        <TableLoading colspan={headersLength} className={className} />
      ) : (
        table.getRowModel().rows.map((row) => (
          <tr key={`table_body_tr_${row.id}`} className={cn('', className)}>                {row.getVisibleCells().map((cell) => {
              return (
                <td
                  key={`table_body_td_${cell.id}`}
                  className={cn('border p-3 text-left', '')}
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  <span>{getCellContent(cell)}</span>
                </td>
              )
            })}
          </tr>
        ))
      )}
    </>
  )
}

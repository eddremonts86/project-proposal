import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { getCellContent } from '../utils/table'
import TableLoading from './TableLoading'

/**
 * Props for the TableContent component.
 */
interface TableContentProps {
  loading: boolean
  table: Table<unknown>
  headersLength: number
  className?: string
}

/**
 * Renders the content of the table.
 * @param loading - Indicates whether the table is currently loading.
 * @param table - The table object containing the data.
 * @param headersLength - The number of table headers.
 * @param className - Additional CSS class name for the table content.
 * @returns The rendered table content.
 */
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
          <tr key={`table_body_tr_${row.id}`} className={cn('', className)}>
            {row.getVisibleCells().map((cell) => {
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

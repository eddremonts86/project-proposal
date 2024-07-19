import type { HeaderGroup } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { TableHead, TableRow } from '@/components/ui/table'

import { getHeaderContent } from '../utils/table'

interface TableHeadersProps {
  headers: HeaderGroup<unknown>[]
  trClassName?: string
  thClassName?: string
}
/**
 * Renders the table headers component.
 *
 * @param headers - An array of header objects.
 * @param trClassName - Additional CSS class name for the table content.
 * @param thClassName - Additional CSS class name for the table content.
 * @returns The rendered table headers.
 */

export default function TableHeaders({
  headers,
  trClassName,
  thClassName = 'text-left',
}: Readonly<TableHeadersProps>) {
  return (
    <>
      {headers.map((header) => (
        <TableRow key={`table_header_tr_${header.id}`} className={trClassName}>
          {header.headers.map((subHeader) => {
            return (
              <TableHead
                className={cn('px-3 py-1', thClassName)}
                key={`header_th_${subHeader.id}`}
                colSpan={subHeader.colSpan}
                rowSpan={subHeader.rowSpan}
              >
                <span>{getHeaderContent(subHeader)}</span>
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </>
  )
}

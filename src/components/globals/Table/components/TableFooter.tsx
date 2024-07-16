/**
 * Renders the footer of a table.
 *
 * @component
 * @param {number} colSpan - The number of columns the footer should span.
 * @param {Table<unknown>} table - The table object.
 * @returns {JSX.Element} The rendered table footer.
 */
import { Table } from '@tanstack/react-table'

import TablePagination from './TablePagination'

interface TableFooterProps {
  colSpan: number
  table: Table<unknown>
}

export default function TableFooter({
  colSpan,
  table,
}: Readonly<TableFooterProps>) {
  return (
    <tr className="border">
      <td colSpan={colSpan} className="border-0">
        <div className="flex items-center justify-center md:justify-end">
          <TablePagination table={table} />
        </div>
      </td>
    </tr>
  )
}

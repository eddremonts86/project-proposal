import type { HeaderGroup } from '@tanstack/react-table'
import { getHeaderContent } from '../utils/table'

interface TableHeadersProps {
  headers: HeaderGroup<unknown>[]
  className?: string
}
/**
 * Renders the table headers component.
 *
 * @param headers - An array of header objects.
 * @returns The rendered table headers.
 */
export default function TableHeaders({ headers }: Readonly<TableHeadersProps>) {
  return (
    <>
      {headers.map((header) => (
        <tr key={`table_header_tr_${header.id}`}>
          {header.headers.map((subHeader) => {
            return (
              <th
                className="w-10 border p-3 text-left"
                key={`header_th_${subHeader.id}`}
                colSpan={subHeader.colSpan || 1}
                rowSpan={subHeader.rowSpan || 1}
                style={{ width: subHeader.getSize(), ...subHeader.style }}
              >
                <span>{getHeaderContent(subHeader)}</span>
              </th>
            )
          })}
        </tr>
      ))}
    </>
  )
}

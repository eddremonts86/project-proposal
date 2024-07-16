import type { Cell, Header } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'

export const getHeaderContent = (header: Header<unknown, unknown>) => {
  if (!header) return 'No header provided'
  if (header.isPlaceholder) return null
  return flexRender(header.column.columnDef.header, header.getContext())
}

export const getCellContent = (cell: Cell<unknown, unknown>) => {
  if (!cell) {
    return 'No cell Provided'
  }
  return flexRender(cell.column.columnDef.cell, cell.getContext())
}

/*
const columnHelper = createColumnHelper<unknown>()
interface SubHeader {
  id: string
  name?: string
  type?: string
}
export const generateHeaderColumns = (header: SubHeader[]) => {
  return header.map((subHeader) => {
    if (subHeader.type === 'select') {
      const header = () => <Checkbox />
      const cell = () => {}

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
  }) as ColumnDef<unknown>[]
}
*/

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

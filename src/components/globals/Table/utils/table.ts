import type { Cell, ColumnDef, Header } from "@tanstack/react-table";
import { createColumnHelper, flexRender } from "@tanstack/react-table";

const columnHelper = createColumnHelper<unknown>();
export const getHeaderContent = (header: Header<unknown, unknown>) => {
  if (!header) {
    return "No Header Provided";
  }
  return flexRender(header.column.columnDef.header, header.getContext());
};

export const getCellContent = (cell: Cell<unknown, unknown>) => {
  if (!cell) {
    return "No cell Provided";
  }
  return flexRender(cell.column.columnDef.cell, cell.getContext());
};

type SubHeader = { id: string; name?: string };

export const generateHeaderColumns = (header: SubHeader[]) => {
  return header.map((subHeader: SubHeader) => {
    return columnHelper.accessor(subHeader.id, {
      header: (subHeader.name ?? subHeader.id) || "No Header Name Provided",
      cell: (info) => info.getValue(),
    });
  }) as ColumnDef<unknown>[];
};

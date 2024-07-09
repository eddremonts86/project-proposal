import { Table } from "@tanstack/react-table";
import TableLoading from "./TableLoading";
import { getCellContent } from "../utils/table";
import TableBody from "@mui/material/TableBody";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
interface TableContentProps {
  loading: boolean;
  table: Table<unknown>;
  headersLength: number;
  className?: string;
}
export default function TableContent({
  loading,
  table,
  headersLength,
  className = "p-2 text-center border border-slate-300",
}: Readonly<TableContentProps>) {
  return (
    <TableBody>
      {loading ? (
        <TableLoading
          colspan={headersLength}
          className={className}
        />
      ) : (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={`table_body_tr_${row.id}`}
            className={className}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell
                  key={`table_body_td_${cell.id}`}
                  className="py-4 border"
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  {getCellContent(cell)}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      )}
    </TableBody>
  );
}

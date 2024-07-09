import { Table } from "@tanstack/react-table";
import TableLoading from "./TableLoading";
import { getCellContent } from "../utils/table";
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
    <tbody>
      {loading ? (
        <TableLoading
          colspan={headersLength}
          className={className}
        />
      ) : (
        table.getRowModel().rows.map((row) => (
          <tr
            key={`table_body_tr_${row.id}`}
            className={className}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <td
                  key={`table_body_td_${cell.id}`}
                  className="py-4 border"
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  {getCellContent(cell)}
                </td>
              );
            })}
          </tr>
        ))
      )}
    </tbody>
  );
}

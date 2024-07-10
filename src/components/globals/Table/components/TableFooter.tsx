import { useContext } from "react";
import { TableContext } from "../providers/TableProvider";
import Pagination from "./Pagination";

interface TableFooterProps {
  colSpan: number;
  className?: string;
  config?: {
    rowsLength?: number;
  };
}

export default function TableFooter({
  colSpan,
  config,
}: Readonly<TableFooterProps>) {
  const { setRowsPerPage, rowsPerPage, page, setPage } =
    useContext(TableContext);

  return (
    <tr className="border">
      <td
        colSpan={colSpan}
        className="border-0"
      >
        <div className="flex items-center justify-center md:justify-end">
          <Pagination
            rowsLength={config?.rowsLength ?? 5}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangeRowsPerPage={(value) => setRowsPerPage(value)}
            handleChangePage={(value) => setPage(value)}
          />
        </div>
      </td>
    </tr>
  );
}

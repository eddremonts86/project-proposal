import type { HeaderGroup } from "@tanstack/react-table";
import { getHeaderContent } from "../utils/table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


interface TableHeadersProps {
  headers: HeaderGroup<unknown>[];
  className?: string;
}
export default function TableHeaders({
  headers,
  className,
}: Readonly<TableHeadersProps>) {
  return (
    <thead className={className}>
      {headers.map((header) => (
        <tr
          key={`table_header_tr_${header.id}`}
          className="border-gray-300"
        >
          {header.headers.map((subHeader) => {
            return (
              <th
                className="py-3 border"
                key={`header_th_${subHeader.id}`}
                colSpan={subHeader.colSpan || 1}
                rowSpan={subHeader.rowSpan || 1}
              >
                <span>{getHeaderContent(subHeader)}</span>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

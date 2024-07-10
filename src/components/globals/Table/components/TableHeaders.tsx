import type { HeaderGroup } from "@tanstack/react-table";
import { getHeaderContent } from "../utils/table";

interface TableHeadersProps {
  headers: HeaderGroup<unknown>[];
  className?: string;
}
export default function TableHeaders({ headers }: Readonly<TableHeadersProps>) {
  return (
    <>
      {headers.map((header) => (
        <tr key={`table_header_tr_${header.id}`}>
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
    </>
  );
}

import TableContextProvider from "../providers/TableProvider";
import Content from "./TableContent";
import Footer from "./TableFooter";
import Headers from "./TableHeaders";
import { Table as TableType, HeaderGroup } from '@tanstack/react-table'

import {
  Table as CnTable,
  TableBody,
  TableHeader,
} from "@/components/ui/table";

interface TableProps {
  tHeaders: HeaderGroup<unknown>[],
  tColumns: number,
  footer: boolean;
  loading: boolean;
  className?: string;
  table: TableType<unknown>
}
export default function Table({
 table, tHeaders, tColumns, footer,
  loading,
  className,
}: Readonly<TableProps>) {


  return (
    <TableContextProvider>
      <CnTable className={className}>
        <TableHeader>
          <Headers headers={tHeaders} />
        </TableHeader>
        <TableBody>
          <Content
            table={table}
            loading={loading}
            headersLength={tColumns}
          />
          {footer && <Footer colSpan={tColumns} table={table} />}
        </TableBody>
      </CnTable>
    </TableContextProvider>
  );
}

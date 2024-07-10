import useTable from "../hooks/useTable";
import TableContextProvider from "../providers/TableProvider";
import Content from "./TableContent";
import Footer from "./TableFooter";
import Headers from "./TableHeaders";
import {
  Table as CnTable,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import { TConfig, THeaders, TData } from "../types";

interface TableProps {
  data: TData[];
  config: TConfig;
  headers: THeaders[];
  loading: boolean;
  className?: string;
}
export default function Table({
  data,
  headers,
  config,
  loading,
  className,
}: Readonly<TableProps>) {
  const { table, tHeaders, tColumns, showFooter } = useTable({
    config,
    headers,
    data,
  });

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
          {showFooter() && <Footer colSpan={tColumns} />}
        </TableBody>
      </CnTable>
    </TableContextProvider>
  );
}

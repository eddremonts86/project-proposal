import useTable from "../hooks/useTable";
import TableContextProvider from "../providers/TableProvider";
import TableContent from "./TableContent";
import TableFooter from "./TableFooter";
import TableHeaders from "./TableHeaders";
interface TableProps {
  data: unknown[];
  config: unknown;
  headers: { id: string; name?: string }[];
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
  const { table, tableHeaders, columns, footer } = useTable(
    headers,
    data,
    config as { footer?: boolean }
  );

  return (
    <TableContextProvider>
      <table className={className}>
        <TableHeaders
          headers={tableHeaders}
          className="bg-gray-100 rounded-l rounded-r"
        />
        <TableContent
          table={table}
          loading={loading}
          headersLength={columns}
          className="p-2 text-center border border-slate-300 hover:bg-gray-500"
        />
        {footer && (
          <TableFooter
            colSpan={columns}
            config={config}
          />
        )}
      </table>
    </TableContextProvider>
  );
}

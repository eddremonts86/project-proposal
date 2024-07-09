import {
  getCoreRowModel,
  HeaderGroup,
  useReactTable,
} from "@tanstack/react-table";
import { generateHeaderColumns } from "../utils/table";

export default function useTable(
  headers: { id: string; name?: string }[],
  data: unknown[],
  config: { footer?: boolean }
) {
  const columnsHeaders = generateHeaderColumns(headers);
  const table = useReactTable({
    data,
    columns: columnsHeaders,
    getCoreRowModel: getCoreRowModel(),
  });
  const tableHeaders: HeaderGroup<unknown>[] = table.getHeaderGroups();
  const columns = headers.length;
  return {
    table,
    tableHeaders,
    columns,
    footer: true || config.footer || false,
  };
}

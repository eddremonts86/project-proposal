import { Table } from "@/components/globals/Table";
import { tableExampleData } from "./const/tableExampleData";
import useTable from "@/components/globals/Table/hooks/useTable";
export default function TablePage() {
  const { headers, data, config } = tableExampleData;
   const { table, tHeaders, tColumns, footer } = useTable({
    config,
    headers,
    data,
  });
   return (
    <Table
      className="w-full"
      table={table}
      tHeaders={tHeaders}
      tColumns={tColumns}
      footer={footer}
    />
  );
}

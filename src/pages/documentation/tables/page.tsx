import { Table, TableColumnsFilter, TableFilters } from "@/components/globals/Table";
import useTable from "@/components/globals/Table/hooks/useTable";
import { tableExampleData } from "./const/tableExampleData";
export default function TablePage() {
  const { headers, data, config } = tableExampleData;
   const { table, tHeaders, tColumns } = useTable({
    config,
    headers,
    data,
  });
  return (<div className="p-6 mt-6 border shadow-md bg-gray-50 rounded-xl">
    <div className="flex items-center justify-between py-5">
    <TableFilters  table={table} filterKey={'WidgetId'}/>
    <TableColumnsFilter  table={table}/>
    </div>
    <Table
      className="w-full"
      table={table}
      tHeaders={tHeaders}
      tColumns={tColumns}
      footer={true}
    />
    </div>
  );
}

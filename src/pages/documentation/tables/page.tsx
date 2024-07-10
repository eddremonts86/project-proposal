import { Table } from "@/components/globals/Table";
import { tableExampleData } from "./const/tableExampleData";
export default function TablePage() {
  return (
    <Table
      className="w-full"
      data={tableExampleData.data}
      config={tableExampleData.config}
      headers={tableExampleData.headers}
    />
  );
}

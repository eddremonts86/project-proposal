import { Table } from "@/components/globals/Table";
import { tableExampleData } from "./const/tableExampleData";
export default function TablePage() {
  return (
    <Table
      className="w-full"
      data={tableExampleData.data}
      headers={tableExampleData.headers}
      config={tableExampleData.config}
    />
  );
}

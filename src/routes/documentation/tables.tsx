import { createFileRoute } from "@tanstack/react-router";

import TablePage from "@/pages/documentation/tables/page";

export const Route = createFileRoute("/documentation/tables")({
  component: () => <TablePage />,
});

import { createFileRoute } from "@tanstack/react-router";

import TablePage from "@/pages/documentation/tables/page"; //TODO: Fix type alias errors

export const Route = createFileRoute("/documentation/tables/")({
  component: () => <TablePage />,
});

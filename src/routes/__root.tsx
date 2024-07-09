import { createFileRoute, RouteOptions } from "@tanstack/react-router";
import IndexHome from "@/pages/home/page";

export const Route = createFileRoute<RouteOptions>("/_root")({
  component: () => <IndexHome />,
});

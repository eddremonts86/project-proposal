import TablePage from '@/pages/documentation/tables/page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/documentation/tables/')({
  component: () => <TablePage />,
})

import { createLazyFileRoute } from '@tanstack/react-router'
import TablePage from '@/pages/documentation/tables/page'

export const Route = createLazyFileRoute('/documentation/tables/')({
  component: () => <TablePage />,
})

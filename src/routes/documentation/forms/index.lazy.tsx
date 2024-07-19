import FormsPage from '@/pages/documentation/forms/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/documentation/forms/')({
  component: () => <FormsPage />,
})

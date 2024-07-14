import { createLazyFileRoute } from '@tanstack/react-router'
import FormsPage from '@/pages/documentation/forms/pages'

export const Route = createLazyFileRoute('/documentation/forms/')({
  component: () => <FormsPage />,
})

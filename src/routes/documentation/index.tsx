import Documentation from '@/pages/documentation/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentation/')({
  component: () => <Documentation />,
})

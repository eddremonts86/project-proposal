import { createFileRoute } from '@tanstack/react-router'
import Documentation from '@/pages/documentation/page'

export const Route = createFileRoute('/documentation/')({
  component: () => <Documentation />,
})

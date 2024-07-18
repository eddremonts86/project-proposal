// src\routes\__root.tsx
import DefaultLayout from '@/layouts/default'
import { createRootRoute, Outlet } from '@tanstack/react-router'

import { Tools } from '@/components/globals/devTools/tools'

export const Route = createRootRoute({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <DefaultLayout>
      <Outlet />
      <Tools />
    </DefaultLayout>
  )
}

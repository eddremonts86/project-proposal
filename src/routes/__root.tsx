// src\routes\__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import DefaultLayout from '@/layouts/default'
export const Route = createRootRoute({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <DefaultLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </DefaultLayout>
  )
}

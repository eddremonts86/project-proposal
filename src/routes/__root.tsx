// src\routes\__root.tsx
import DefaultLayout from '@/layouts/default'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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

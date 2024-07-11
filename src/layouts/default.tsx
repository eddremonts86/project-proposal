import { TopBar } from '@/features/TopBar'
import { ReactNode } from 'react'
interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  return (
    <>
      <TopBar />
      <section className="container py-7">{children}</section>
    </>
  )
}

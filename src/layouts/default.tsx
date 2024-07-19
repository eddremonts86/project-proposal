import { ReactNode } from 'react'
import { TopBar } from '@/features/TopBar'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  return (
    <>
      <TopBar />
      <section className="w-full p-6">{children}</section>
    </>
  )
}

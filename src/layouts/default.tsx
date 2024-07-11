import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  return (
    <>
      <header> Aquio,m dfkfn</header>
      <section className="container">{children}</section>
    </>
  )
}

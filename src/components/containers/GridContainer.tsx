import { PropsWithChildren } from 'react'

export default function GridContainer({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:items-start md:justify-start">
      {children}
    </div>
  )
}

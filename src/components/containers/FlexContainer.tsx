import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PropsWithChildren {
  children: ReactNode
  className?: string
}
export default function FlexContainer({
  children,
  className,
}: Readonly<PropsWithChildren>) {
  return (
    <section
      className={cn(
        'flex flex-col sm:flex-row rounded-xl border bg-gray-50 p-6 shadow-sm w-full h-full',
        className
      )}
    >
      {children}
    </section>
  )
}

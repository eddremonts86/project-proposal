import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface FlexContainerProps {
  children: ReactNode
  className?: string
}
export default function FlexContainer({
  children,
  className,
}: Readonly<FlexContainerProps>) {
  return (
    <section
      className={cn(
        'flex h-full w-full flex-col rounded-xl border p-6 sm:flex-row',
        className
      )}
    >
      {children}
    </section>
  )
}

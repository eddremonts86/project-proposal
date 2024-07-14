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
    <div
      className={cn(
        '-6 flex rounded-xl border bg-gray-50 p-6 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}

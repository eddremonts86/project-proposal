import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PropsWithChildren {
  children: ReactNode
  className?: string
}
export default function ExampleFormContainer({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div>
      {children}
    </div>
  )
}

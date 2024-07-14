import { ReactNode } from 'react';
import { cn } from '@/lib/utils'

interface PropsWithChildren {
  children: ReactNode;
  className?: string;
}
export default function FlexContainer({children, className}: Readonly<PropsWithChildren>) {
  return (
    <div
       className={cn('border shadow-sm -6 p-6 flex bg-gray-50 rounded-xl', className)}
    >
      {children}
    </div>
  )
}

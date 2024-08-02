import { cn } from '../../lib/utils'

interface GridContainerProps {
  children: React.ReactNode
  className?: string
}

export default function GridContainer({
  children,
  className,
}: Readonly<GridContainerProps>) {
  return (
    <div
      className={cn(
        'h-full w-full flex-col flex-wrap items-center justify-center gap-4 rounded-xl border p-6 md:flex-row md:items-start md:justify-start',
        className
      )}
    >
      {children}
    </div>
  )
}

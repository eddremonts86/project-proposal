import { cn } from '@/lib/utils'
import {
  TableFooter as Footer,
  TableCell,
  TableRow,
} from '@/components/ui/table'

interface TableFooterProps {
  className?: string
  headersLength: number
  children: React.ReactNode
}

export default function TableFooter({
  children,
  className,
  headersLength,
}: Readonly<TableFooterProps>) {
  return (
    <Footer className={cn(className)}>
      <TableRow>
        <TableCell colSpan={headersLength}>{children}</TableCell>
      </TableRow>
    </Footer>
  )
}

/**
 * Represents a flexible container component.
 *
 * @component
 * @example
 * ```tsx
 * import FlexContainer from '@/components/containers/FlexContainer';
 *
 * function App() {
 *   return (
 *     <FlexContainer className="my-container">
 *       <div>Child 1</div>
 *       <div>Child 2</div>
 *     </FlexContainer>
 *   );
 * }
 * ```
 */
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

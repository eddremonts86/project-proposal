import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Props for the FlexContainer component.
 * @interface
 * @property {ReactNode} children - The children of the component.
 * @property {string} [className] - The class name of the component.
 */
interface FlexContainerProps {
  children: ReactNode
  className?: string
}
/**
 * Represents a flexible container component.
 *
 * @component
 * @param {Readonly<FlexContainerProps>} props - The props for the FlexContainer component.
 * @returns {JSX.Element} The rendered FlexContainer component.
 */
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

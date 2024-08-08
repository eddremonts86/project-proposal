import { ReloadIcon } from '@radix-ui/react-icons'
import { FieldValues } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Props {
  onSubmit: (data: FieldValues) => void
  type: string
  text: string
  children?: React.ReactNode
  icon?: string
  className?: string
  loading?: boolean
}

const CommonBtn = ({
  onSubmit,
  type,
  text,
  children,
  icon,
  loading,
  className,
}: Props) => {
  const buttonTextStyle =
    'text-md text-gray-800 dark:text-gray-200 mx-1 font-normal'
  const buttonInitialStyle =
    'text-md hover:bg-grey-400 cursor-pointer space-x-1 rounded-xl bg-gray-50 px-6 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-none hover:shadow-sm'
  return (
    <Button
      onClick={(data: FieldValues) => onSubmit(data)}
      type={type}
      className={cn(buttonInitialStyle, className)}
    >
      {children ? (
        { children }
      ) : (
        <div className="flex items-center justify-center">
          {loading && (
            <ReloadIcon className={cn('animate-spin', buttonTextStyle)} />
          )}
          {icon && !loading && (
            <span className={cn('mdi', [buttonTextStyle, icon])} />
          )}
          <span className={buttonTextStyle}>{text}</span>
        </div>
      )}
    </Button>
  )
}

export default CommonBtn

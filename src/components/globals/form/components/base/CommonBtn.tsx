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
  return (

    <Button
      onClick={(data: FieldValues) => onSubmit(data)}
      type={type}
      className={className}
    >
      {children ? (
        { children }
      ) : (
        <div className="flex items-center justify-center">
          {loading && <ReloadIcon className="animate-spin" />}
          {icon && !loading && <span className={cn('mdi', icon)} />}
          <span className="mx-2">{text}</span>
        </div>
      )}
    </Button>
  )
}

export default CommonBtn

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FieldValues } from 'react-hook-form'

interface Props {
  onSubmit: (data: FieldValues) => void
  type: string 
  text: string
  children?: React.ReactNode
  icon?: string
  className?: string
  loading: boolean
}

const CommonBtn = ({
  onSubmit,
  type,
  text,
  children,
  icon,
  className,
  loading,
}: Props) => {
  return (

    <Button onClick={(data: FieldValues)=>onSubmit(data)} type={type} className={className}>
    {children ? (
        { children }
      ) : (
        <div className="flex items-center justify-center">
          {icon && <span className={cn('mdi mx-2', icon)} />}
          {text}
        </div>
      )}
    </Button>
  )
}

export default CommonBtn

import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

interface Props{
    onSubmit: (data: unknown) => void;
    type: string;
    text: string;
    children?: React.ReactNode,
    icon?: string;
  className?: string;

}

const CommonBtn = ({onSubmit, type, text, children, icon, className  }: Props) => {
  return (

      <Button onSubmit={onSubmit} type={type} className={className}>
        {children ? { children } :
          <div className='flex items-center justify-center'>
             {icon && <span className={cn("mdi mx-2", icon)} />}
            {text}
          </div>}
      </Button>

  )
}

export default CommonBtn

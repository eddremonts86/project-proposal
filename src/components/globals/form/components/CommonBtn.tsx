import { Button } from '../../../ui/button'

interface Props{
    onSubmit: (data: unknown) => void;
    type: string;
    text: string;
}

const CommonBtn = ({onSubmit, type, text}: Props) => {
  return (
    <div>
        <Button onSubmit={onSubmit} type={type=="submit" ? "submit" : "button"}>{text}</Button>
    </div>
  )
}

export default CommonBtn
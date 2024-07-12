import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IOptions } from "../../../../pages/documentation/forms/pages";
 
interface SelectProps {
  selectOptions: IOptions[];
  selectLabel: string;
}

export default function SelectBtn({selectOptions, selectLabel}: SelectProps) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={selectLabel} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {/* <SelectItem value='AAAA' >aaaaa</SelectItem> */}
           {selectOptions.map((option: IOptions, index) => (
             <SelectItem value={option.value} key={index}>
               {option.label}
             </SelectItem>
           ))}

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
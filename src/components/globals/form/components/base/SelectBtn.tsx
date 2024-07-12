import { IOptions } from "../../types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  selectOptions: IOptions[];
  selectLabel: string;
}

export default function SelectBtn({selectOptions, selectLabel}: Readonly<SelectProps>) {
  return (
    <Select >
      <SelectTrigger>
        <SelectValue placeholder={selectLabel} />
      </SelectTrigger>
      <SelectContent className="z-50 px-3 py-1 capitalize border-0 cursor-pointer hover:bg-gray-100 hover:text-gray-900" >
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {selectOptions.map((option: IOptions) => (
            <SelectItem key={option.value} value={option.value}  >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IOptions } from "../../types";

interface SelectProps {
  selectOptions: IOptions[];
  selectLabel: string;
  contentLabel: string;
}

export default function SelectBtn({selectOptions, selectLabel, contentLabel}: Readonly<SelectProps>) {
  return (
    <Select >
      <SelectTrigger>
        <SelectValue placeholder={selectLabel} />
      </SelectTrigger>
      <SelectContent className="px-3 py-1 capitalize border-0 cursor-pointer hover:bg-gray-100 hover:text-gray-900" >
        <SelectGroup>
          <SelectLabel>{contentLabel}</SelectLabel>
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

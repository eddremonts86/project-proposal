import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form";
import { Input } from "../../../ui/input";

interface Props {
  name: string;
  label: string;
  description: string;
  value: string | number;
  multiline?: boolean;
  rows?: number;
  type?: string;
  disablevalue?: boolean;
  isfocus?: string;
  control: Control<FieldValues> | undefined;
}

const TextInput = ({value, label, control, name, type}: Props) => {
  return (
  <div  className="p-2">
    <FormField
    control={control}
    name={name}
    render={() => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
        <Input defaultValue={value} type={type} />
        </FormControl>
      </FormItem>
    )}
  />
  </div>
  );
};

export default TextInput;

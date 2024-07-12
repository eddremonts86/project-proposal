import { Container } from "../../../components/globals/form";
import { DateInput } from "../../../components/globals/form/components/DateInput";
import SelectBtn from "./../../../components/globals/form/components/SelectBtn";

export interface IOptions {
  value: string;
  label: string;
}

const selectOptions: IOptions[] = [
  { value: "AAAA", label: "aaaaa" },
  { value: "BBBB", label: "bbbbb" },
  { value: "CCCC", label: "ccccc" },
];

export default function FormsPage() {
  return (
    <div className="grid grid-cols-5 gap-3 border p-6 justify-center">
      <div className="grid border p-2 justify-around"  >
        <SelectBtn selectOptions={selectOptions} selectLabel="Example" />
        <DateInput />
        <DateInput />
        <DateInput />
        <DateInput />
      </div>
      <div className= "grid justify-around bg-red-100 col-span-4">
        <Container />
      </div>
    </div>
  );
}

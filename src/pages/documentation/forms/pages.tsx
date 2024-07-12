import { Container } from "@/components/globals/form";
import { DateInput, SelectBtn } from "@/components/globals/form/components/base"
import { IOptions } from "@/pages/documentation/forms/types";


const selectOptions: IOptions[] = [
  { value: "AAAA", label: "aaaaa" },
  { value: "BBBB", label: "bbbbb" },
  { value: "CCCC", label: "ccccc" },
];

export default function FormsPage() {
  return (
    <div className="grid justify-center grid-cols-5 gap-3 p-6 border">
      <div className="grid justify-around p-2 border"  >
        <SelectBtn selectOptions={selectOptions} selectLabel="Example" />
        <DateInput />
      </div>
      <div className= "grid justify-around col-span-4 bg-red-100">
        <Container />
      </div>
    </div>
  );
}

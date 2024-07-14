import FlexContainer from "@/components/containers/FlexContainer";
import FormContent from "@/components/globals/form/components/FormContent";
import { CommonBtn, DateInput, SelectBtn } from "@/components/globals/form/components/base";
import { inputsExample, selectOptions } from "./const/input";

export default function FormsPage() {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <FlexContainer>
      <div className="flex flex-col flex-wrap justify-around gap-2 p-6 border"  >
        <h2 className="text-xl">Inputs list </h2>
        <SelectBtn selectOptions={selectOptions} selectLabel="Select your size" contentLabel="Man Jeans" />
        <DateInput />
        <div className="flex justify-between gap-2">
        <CommonBtn  type="submit" text="Submit" className="w-full max-w-52" loading={ true } icon="mdi-account-heart text-red-400 text-2xl "/>
        <CommonBtn  type="submit" text="Sending..." className="w-full max-w-52" loading={ true } icon="mdi-loading infinite"/>
        </div>
      </div>
      <div className= "grid justify-around col-span-4">
        <FormContent onSubmit={onSubmit} inputs={inputsExample}/>
        <div className="flex justify-around p-6">
          <CommonBtn onSubmit={onSubmit} type="submit" text="Submit" variants="" />
          <CommonBtn onSubmit={onSubmit} type="button" text="Cancel" />
        </div>
      </div>
    </FlexContainer>
  );
}
